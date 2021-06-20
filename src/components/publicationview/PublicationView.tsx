import React from 'react';
import { BsDot } from 'react-icons/bs';
import { PublicationModel } from '../../models/Model';
import './PublicationView.css';

interface PublicationViewProps{
    page_data: Object;
    component_id: string;
    edit_mode: boolean;
}

class PublicationView extends React.Component<PublicationViewProps>{

    editDetails = (key: string, value: string) =>{
        let data = this.props.page_data["data"];
        data[this.props.component_id][key] = value;
        this.props.page_data["edit"](data);
    }

    getEditElements = () =>{
        const data = this.props.page_data["data"][this.props.component_id] as PublicationModel 
        return(
            <div className="publicationColumnEdit">
                <div className="publicationsEntryEdit">
                    <div className="publicationsEntryTitleEdit">People:</div>
                    <input placeholder="People involved/related" style={{width:"100%"}} onChange={(event)=>{this.editDetails("people", event.target.value)}} value={data.people}></input>
                </div>
                <div className="publicationsEntryEdit">
                    <div className="publicationsEntryTitleEdit">Name:</div>
                    <textarea placeholder="Publication Name" style={{width: "100%"}} onChange={(event)=>{this.editDetails("name", event.target.value)}} value={data.name}></textarea>
                </div>
                <div className="publicationsEntryEdit">
                    <div className="publicationsEntryTitleEdit">Details:</div>
                    <input placeholder="Other details like journal name etc." style={{width:"100%"}} onChange={(event)=>{this.editDetails("details", event.target.value)}} value={data.details}></input>
                </div>
            </div>
        )
    }

    getDisplayElements = () =>{
        const data = this.props.page_data["data"][this.props.component_id] as PublicationModel 
        return(
            <div className='publicationsColumn'>
                <div className='publicationPageLine'>
                    <BsDot size={32}/>
                    <p style={{width: '95%'}}> 
                        {data.people + ' '} 
                        <i style={{color:'darkblue'}}>{data.name}</i> 
                        {' ' + data.details}
                    </p>
                </div>
            </div>
        )
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements()
    }
}

export default PublicationView;