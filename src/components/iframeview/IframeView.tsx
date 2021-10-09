import React from 'react';
import { IframeModel } from '../../models/Model';
import './IframeView.css';

interface IframeViewProps{
    edit_mode: boolean;
    page_data: Object;
    component_id: string;
}

class IframeView extends React.Component<IframeViewProps>{

    editItems = (key: string, value: string) => {
        const data = this.props.page_data["data"];
        (data[this.props.component_id] as IframeModel)[key] = value;
        this.props.page_data["edit"](data);
    }

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as IframeModel;
        return(
            <div className="iframeViewBox">
                <iframe src={data.url} style={{borderWidth:"0", width:data.width, height:data.height}}></iframe>
            </div>
        );
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as IframeModel;
        return(
            <div className="imageViewBoxEdit">
                <div className="imageViewRowEdit">
                    <div>Iframe Url: </div>
                    <input placeholder="Image URL" style={{width:"90%"}} value={data.url} onChange={(event)=>{this.editItems("url", event.target.value)}} ></input>
                </div>
                <div className="imageViewRowEdit">
                    <div>Height: </div>
                    <input placeholder="Caption for the Image" style={{width:"90%"}} value={data.height} onChange={(event)=>{this.editItems("height", event.target.value)}}></input>
                </div>
                <div className="imageViewRowEdit">
                    <div>Width: </div>
                    <input placeholder="Caption for the Image" style={{width:"90%"}} value={data.width} onChange={(event)=>{this.editItems("width", event.target.value)}}></input>
                </div>
            </div>
        );
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements();
    }
}

export default IframeView;