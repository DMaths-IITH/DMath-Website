import React from 'react';
import { FirebaseUtils } from '../../utils/FirebaseUtils';
import AddNew from '../addnew/AddNew';
import {getComponent, getNewId, getNewModel} from '../../utils/PageUtils';
import DeleteThis from '../deletethis/DeleteThis';
import AdminBar from '../adminbar/AdminBar';
import { Helmet } from 'react-helmet';
import SelectBar from '../selectbar/SelectBar';
import { deploy } from '../../utils/DeployUtils';

interface SelectViewProps{
    pageContext: {
        page: string;
        current_data: Object;
    }
}

interface SelectViewState{
    currentView: string;
    edit_mode: boolean;
    page_data: Object;
}

let PageContext = React.createContext({});

class SelectView extends React.Component<SelectViewProps, SelectViewState>{
    component_types:string[] = [
        "infoview",
        "profileview",
        "gridviewtwo",
        "gridviewthree",
        "carousel",
        "batchview",
        "tableview",
        "publicationview",
        "imageview",
        "table",
        "marquee"
    ]

    constructor(props: SelectViewProps, state: SelectViewState){
        super(props, state);
        this.state = {
            currentView: this.props.pageContext.current_data['options'][0],
            edit_mode: false,
            page_data: JSON.parse(JSON.stringify(this.props.pageContext.current_data))
        }
    }

    onTitleChange = (title: string) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        _page_data['title'] = title;
        this.setState({
            page_data: _page_data
        });
    }

    onNewSection = (section: string) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        _page_data.options.push(section);
        _page_data[section] = {
            components: []
        }
        this.setState({
            page_data: _page_data,
            currentView: section
        });
    }

    onSectionRemoved = (section: string) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        delete _page_data[section];
        const index = (_page_data.options as string[]).findIndex((value)=>(value===section));
        _page_data.options.splice(index,1);
        this.setState({
            page_data: _page_data,
            currentView: _page_data.options[0]
        });
    }

    onSectionEdit = (oldName: string, newName: string) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        const index = (_page_data.options as string[]).findIndex((value)=>(value===oldName));
        _page_data.options[index] = newName;
        _page_data[newName] = _page_data[oldName];
        delete _page_data[oldName];
        this.setState({
            page_data: _page_data,
            currentView: newName
        });
    }

    changeSection = (newSection: string) => {
        this.setState({
            currentView: newSection
        });
    }

    deleteElement = (component_id: string, index: number) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        delete _page_data[component_id];
        (_page_data[this.state.currentView]["components"] as {
            "component_id":string,
            "type":string
        }[]).splice(index,1);
        this.setState({
            page_data: _page_data
        });
    }

    addNewComponent = (type: string, index: number) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        const new_id = getNewId();
        (_page_data[this.state.currentView]["components"] as {"component_id": string, "type":string}[]).splice(index,0,{
            "component_id": new_id,
            "type": type
        });
        _page_data[new_id] = getNewModel(type);
        this.setState({
            page_data: _page_data
        })
    }

    saveChanges = () =>{
        const token = prompt("Please provide the access token");
        if(token){
            FirebaseUtils.saveChanges("pages",this.props.pageContext.page, this.state.page_data);
            deploy(token);
        }
    }

    render(){
        const context_object = {}
        context_object["data"] = this.state.page_data
        context_object["edit"] = (newState: Object) => {
            this.setState({
                page_data: newState
            });
        }
        return(
            <PageContext.Provider value={context_object}>
                <Helmet>
                    <title>Department of Mathematics</title>
                </Helmet>
                {FirebaseUtils.isAdminLoggedIn()? <AdminBar edit_state={this.state.edit_mode} edit_toggle={()=>{this.setState({edit_mode: !this.state.edit_mode})}} onSubmit={this.saveChanges}/> : null}
                <SelectBar edit_state={this.state.edit_mode} onOptionChange={this.changeSection} 
                    options={this.state.page_data['options']} title={this.state.page_data['title']} 
                    currentOption={this.state.currentView} onNewOption={this.onNewSection} onTitleChange={this.onTitleChange}
                    onOptionEdit={this.onSectionEdit} onOptionRemoved={this.onSectionRemoved}/>
                <div style={{width:"100%", flexDirection:"column", justifyContent:"flex-start", alignItems:"center"}}>
                    {(this.state.page_data[this.state.currentView]["components"] as {"component_id": string, "type":string}[]).map((each, index) => <div>
                        {this.state.edit_mode ? <AddNew options={this.component_types} onSelect={(type)=>{this.addNewComponent(type, index)}}/> : null}
                        {this.state.edit_mode ? <DeleteThis key={each.component_id} name={each.type} onClick={()=>{this.deleteElement(each.component_id, index)}}>
                            <PageContext.Consumer>
                                {value => getComponent(each.component_id, each.type, this.state.edit_mode, value)}
                            </PageContext.Consumer>
                            </DeleteThis> : <PageContext.Consumer>
                                {value => getComponent(each.component_id, each.type, this.state.edit_mode, value)}
                            </PageContext.Consumer>}
                    </div>) }
                    {this.state.edit_mode ? <AddNew options={this.component_types} onSelect={(type)=>{this.addNewComponent(type, (this.state.page_data[this.state.currentView]["components"] as {"component_id": string, "type":string}[]).length)}}/> : null}
                </div>
            </PageContext.Provider>
        )
    }
}

export default SelectView;