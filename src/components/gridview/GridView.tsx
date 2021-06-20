import React from 'react';
import { GridViewModel } from '../../models/Model';
import { getComponent, getNewId, getNewModel } from '../../utils/PageUtils';
import AddNew from '../addnew/AddNew';
import DeleteThis from '../deletethis/DeleteThis';
import InfoView from '../infoview/InfoView';
import './GridView.css';

interface GridViewProps{
    page_data: Object;
    component_id: string;
    edit_mode: boolean;
    type: "GridViewTwo" | "GridViewThree";
}

class GridView extends React.Component<GridViewProps>{

    deleteElement = (component_id: string, index: number) => {
        let data = this.props.page_data["data"];
        delete data[component_id];
        (data[this.props.component_id]["items"] as {
            "component_id":string,
            "type":string
        }[]).splice(index,1);
        this.props.page_data["edit"](data);
    }

    addNewComponent = (type: string, index: number) => {
        const new_id = getNewId();
        let data = this.props.page_data["data"];
        (data[this.props.component_id]["items"] as {"component_id": string, "type":string}[]).splice(index,0,{
            "component_id": new_id,
            "type": type
        });
        data[new_id] = getNewModel(type);
        this.props.page_data["edit"](data);
    }

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as GridViewModel;
        return(
            <div className={this.props.type}>
                {data.items.map(each => getComponent(each.component_id, each.type, this.props.edit_mode, this.props.page_data))}
            </div>
        )
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as GridViewModel;
        return(
            <div className={this.props.type + "Edit"}>
                {data.items.map((each, index) => <div className="gridViewitemColEdit">
                    <button className="gridViewItemRemove" onClick={()=>{this.deleteElement(each.component_id, index)}}>Remove This "{each.type}"</button>
                    {getComponent(each.component_id, each.type, this.props.edit_mode, this.props.page_data)}
                </div>)}
                <select style={{width:"200px"}} value={"Add New"} onChange={(event)=>{this.addNewComponent(event.target.value,  data.items.length)}}>
                    <option value={"Add New Element"}>{"Add New Element"}</option>
                    <option value={"infoview"}>{"infoview"}</option>
                    <option value={"profileview"}>{"profileview"}</option>
                </select>
            </div>
        )
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements()
    }
}

 export default GridView;