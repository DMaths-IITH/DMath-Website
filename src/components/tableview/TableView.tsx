import React from 'react';
import './TableView.css'
import {RiArrowDropDownLine} from 'react-icons/ri';
import {RiArrowDropUpLine} from 'react-icons/ri';
import { TableViewModel } from '../../models/Model';
import { Link } from 'gatsby';

interface TableViewState{
    expand: Boolean;
    data: TableViewModel;
}

interface TableViewProps{
    component_id: string;
    edit_mode: boolean;
    page_data: Object;
}

class TableView extends React.Component<TableViewProps,TableViewState>{
    constructor(props: TableViewProps, state: TableViewState){
        super(props, state);
        this.state = {
            expand: false,
            data: (this.props.page_data["data"][this.props.component_id] as TableViewModel)
        }
    }

    toggleContentView = ():void =>{
        this.setState({
            expand: !this.state.expand
        })
    }

    editDetails = (key: string, value: any) =>{
        const data = this.props.page_data["data"]
        if (key!=="link" && key!=="linktext"){
            data[this.props.component_id][key] = value;
        }
        else{
            data[this.props.component_id]["links"][key] = value;
        }
        this.props.page_data["edit"](data)
    }

    getEditElements = () => {
        return(
            <div className='tableViewRow'>
                <div className='tableViewRest'>
                    <div className='tableViewContent'>
                        <div style={{marginBottom: "2px", fontSize:"large"}}>Title:</div>
                        <input placeholder="Enter the title here" value={this.state.data.title} style={{width:'95%'}} onChange={(event)=>{this.editDetails("title", event.target.value)}}></input>
                        <div style={{marginBottom: "2px", marginTop: "6px", fontSize:"large"}}>Content:</div>
                        <textarea placeholder="Enter the content here" value={this.state.data.content} style={{width:'95%'}} onChange={(event)=>{this.editDetails("content", event.target.value)}}></textarea> 
                        <div className="tableViewLinksEdit">
                            <div style={{width:"100%", marginRight: "5px", paddingRight:"5px"}}>
                                <div style={{marginBottom: "2px"}}>Link:</div>
                                <input placeholder="Enter the link here" style={{width:"100%"}} onChange={(event)=>{this.editDetails("link", event.target.value)}} value={this.state.data.links.link}></input>
                            </div>
                            <div style={{width:"100%", marginLeft: "5px", paddingLeft:"5px"}}>
                                <div style={{marginBottom: "2px"}}>Link display text:</div>
                                <input placeholder="The display text for the link" style={{width:"100%"}} onChange={(event)=>{this.editDetails("linktext", event.target.value)}} value={this.state.data.links.linktext}></input>
                            </div>
                        </div>
                    </div>
                    <div className='tableViewLastColEdit'>
                        <div className='tableViewSpeakerEdit'> 
                            <div style={{marginBottom: "2px", marginTop:"5px", fontSize:"large"}}>Column 2:</div>
                            <textarea placeholder="Column 2 entry" style={{width:'95%'}} onChange={(event)=>{this.editDetails("speaker", event.target.value)}} value={this.state.data.speaker}></textarea> 
                        </div> 
                        <div className='tableViewSpeakerEdit'> 
                            <div style={{marginBottom: "2px", marginTop:"5px", fontSize:"large"}}>Column 3:</div>
                            <input placeholder="Column 3 entry" style={{width:'95%'}} onChange={(event)=>{this.editDetails("dateVenue", event.target.value)}} value={this.state.data.dateVenue}></input> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getDisplayElements = () =>{
        return(
            <div className='tableViewRow' >
                <div className='tableViewRest'>
                    <div className='tableViewContent' >
                        <div className='tableViewContentTitle'>
                            <p style={{width:'95%'}}>{this.state.data.title}</p>
                            {this.state.data.content || (this.state.data.links.linktext) ? (this.state.expand ? <RiArrowDropUpLine size={24} onClick={this.toggleContentView}/> : <RiArrowDropDownLine size={24} onClick={this.toggleContentView}/>):null}
                        </div>
                        {(this.state.expand && (this.state.data.content || this.state.data.links.link)) ? <div className='tableViewShowContent'> <p >{this.state.data.content}</p> <p><Link to={this.state.data.links.link} target='_blank'>{this.state.data.links.linktext}</Link></p> </div> : null}
                    </div>
                    {this.state.data.dateVenue || this.state.data.speaker ? <div className='tableViewLastCol'>
                        {this.state.data.speaker !== "" ? <div className='tableViewSpeaker'> <p>{this.state.data.speaker}</p> </div> : null}
                        {this.state.data.dateVenue !== "" ? <div className='tableViewDate'> <p>{this.state.data.dateVenue}</p> </div> : null}
                    </div> : null}
                </div>
            </div>
        )
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements()
    }
}

export default TableView;