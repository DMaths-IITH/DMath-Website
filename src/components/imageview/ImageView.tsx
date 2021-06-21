import React from 'react';
import { ImageViewModel } from '../../models/Model';
import './ImageView.css';

interface ImageViewProps{
    edit_mode: boolean;
    page_data: Object;
    component_id: string;
}

class ImageView extends React.Component<ImageViewProps>{

    editItems = (key: string, value: string) => {
        const data = this.props.page_data["data"];
        (data[this.props.component_id] as ImageViewModel)[key] = value;
        this.props.page_data["edit"](data);
    }

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as ImageViewModel;
        return(
            <div className="imageViewBox">
                <img alt={data.image} src={data.image} width='90%'/>
                {data.caption !== "" ? <div className="imageViewCaption">{data.caption}</div> : null}
            </div>
        );
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as ImageViewModel;
        return(
            <div className="imageViewBoxEdit">
                <div className="imageViewRowEdit">
                    <div>Image: </div>
                    <input placeholder="Image URL" style={{width:"90%"}} value={data.image} onChange={(event)=>{this.editItems("image", event.target.value)}} ></input>
                </div>
                <div className="imageViewRowEdit">
                    <div>Caption: </div>
                    <input placeholder="Caption for the Image" style={{width:"90%"}} value={data.caption} onChange={(event)=>{this.editItems("caption", event.target.value)}}></input>
                </div>
            </div>
        );
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements();
    }
}

export default ImageView;