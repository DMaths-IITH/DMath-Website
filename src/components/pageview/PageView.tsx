import React from 'react';
import { FirebaseUtils } from '../../utils/FirebaseUtils';
import AddNew from '../addnew/AddNew';
import {getComponent, getNewId, getNewModel} from '../../utils/PageUtils';
import DeleteThis from '../deletethis/DeleteThis';
import AdminBar from '../adminbar/AdminBar';
import { Helmet } from 'react-helmet';

interface PageViewProps{
    pageContext: {
        page: string;
        current_data: Object;
    }
}

interface PageViewState{
    edit_mode: boolean;
    page_data: Object;
}

let PageContext = React.createContext({});

class PageView extends React.Component<PageViewProps, PageViewState>{
    component_types:string[] = [
        "infoview",
        "profileview",
        "gridviewtwo",
        "gridviewthree",
        "carousel",
        "batchview",
        "accordion",
        "publicationview",
        "imageview",
        "table",
        "marquee"
    ]

    constructor(props: PageViewProps, state: PageViewState){
        super(props, state);
        this.state = {
            edit_mode: false,
            page_data: JSON.parse(JSON.stringify(this.props.pageContext.current_data))
        }
    }

    deleteElement = (component_id: string, index: number) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        delete _page_data[component_id];
        (_page_data["components"] as {
            "component_id":string,
            "type":string
        }[]).splice(index,1);
        this.setState({
            page_data: _page_data
        })
    }

    addNewComponent = (type: string, index: number) => {
        const _page_data = JSON.parse(JSON.stringify(this.state.page_data));
        const new_id = getNewId();
        (_page_data["components"] as {"component_id": string, "type":string}[]).splice(index,0,{
            "component_id": new_id,
            "type": type
        });
        _page_data[new_id] = getNewModel(type);
        this.setState({
            page_data: _page_data
        })
    }

    saveChanges = () =>{
        FirebaseUtils.saveChanges("pages",this.props.pageContext.page, this.state.page_data);
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
                <div style={{width:"100%", flexDirection:"column", justifyContent:"flex-start", alignItems:"center"}}>
                    {(this.state.page_data["components"] as {"component_id": string, "type":string}[]).map((each, index) => <div>
                        {this.state.edit_mode ? <AddNew options={this.component_types} onSelect={(type)=>{this.addNewComponent(type, index)}}/> : null}
                        {this.state.edit_mode ? <DeleteThis key={each.component_id} name={each.type} onClick={()=>{this.deleteElement(each.component_id, index)}}>
                            <PageContext.Consumer>
                                {value => getComponent(each.component_id, each.type, this.state.edit_mode, value)}
                            </PageContext.Consumer>
                            </DeleteThis> : <PageContext.Consumer>
                                {value => getComponent(each.component_id, each.type, this.state.edit_mode, value)}
                            </PageContext.Consumer>}
                    </div>) }
                    {this.state.edit_mode ? <AddNew options={this.component_types} onSelect={(type)=>{this.addNewComponent(type, (this.state.page_data["components"] as {"component_id": string, "type":string}[]).length)}}/> : null}
                </div>
            </PageContext.Provider>
        )
    }
}

export default PageView;