import { Link } from 'gatsby';
import React from 'react';
import {InfoViewModel} from '../../models/Model';
import './InfoView.css';

interface InfoViewProps{
    page_data: Object;
    component_id: string;
    edit_mode: boolean;
}

class InfoView extends React.Component<InfoViewProps>{

    addLink = () => {
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as InfoViewModel).links.push({
            "link":"",
            "linktext":""
        });
        this.props.page_data["edit"](data);
    }

    removeLink = (index: number) => {
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as InfoViewModel).links.splice(index,1);
        this.props.page_data["edit"](data);
    }    

    modifyLink = (index: number, value: string) => {
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as InfoViewModel).links[index]["link"] = value;
        this.props.page_data["edit"](data);
    }

    modifyLinkText = (index: number, value: string) => {
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as InfoViewModel).links[index]["linktext"] = value;
        this.props.page_data["edit"](data);
    }

    editDetails = (key: string, value: string) => {
        let data = this.props.page_data["data"];
        data[this.props.component_id][key] = value;
        this.props.page_data["edit"](data);
    }

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as InfoViewModel;
        const titlecolor: string = (data.titleColor === undefined) ? 'black' : data.titleColor
        return <div className='infoViewbox'>
            {(data.title !== undefined && data.title!=="") ? <div className='infoViewtitle' style={{color: titlecolor, textAlign: data.titleAlign}}>{data.title}</div>: null}
            {(data.info !== undefined && data.info!=="") ? <p className='infoViewcontent'>{data.info}</p> : null}
            {data.links.map(each => <p style={{alignSelf: 'flex-start', marginTop:'auto'}}><Link to={each.link} target='_blank'>{each.linktext}</Link></p>)}
            {data.rightFooter ? <p style={{alignSelf:'flex-end'}}>{data.rightFooter}</p>: null}
        </div>
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as InfoViewModel;
        return <div className="infoViewEditBox">
            <div className='infoViewtitleEditRow'>
                <div className="infoViewLabelEdit">Title:</div>
                <div className="infoViewInputEdit" >
                    <input placeholder="Enter the title here" style={{width:"99%"}} value={data.title} onChange={(event)=>{this.editDetails("title",event.target.value)}}></input>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start", width:"90%", margin:"8px"}}>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"180px"}}>
                            <div >Title Align:</div>
                            <select value={data.titleAlign} style={{width: "85px", marginLeft:"8px"}} onChange={(event)=>{this.editDetails("titleAlign",event.target.value)}}>
                                <option value="center">Center</option>
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"180px"}}>
                            <div>Title Color:</div>
                            <select value={data.titleColor} style={{width: "85px", marginLeft:"8px"}} onChange={(event)=>{this.editDetails("titleColor",event.target.value)}}>
                                <option value="black">Black</option>
                                <option value="darkblue">Dark Blue</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='infoViewtitleEditRow'>
                <div className="infoViewLabelEdit">Content:</div>
                <textarea placeholder="Enter the content here" className="infoViewInputEdit" value={data.info} onChange={(event)=>{this.editDetails("info",event.target.value)}}></textarea>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start", margin: "8px", width:"95%", justifyContent:"space-between"}}>
                <div className="infoViewLabelEdit">Links:</div>
                <div className="infoViewContentListEdit">
                    {data.links.map((each, index) => <div className="infoViewContentItemsEdit">
                        <div className='infoViewtitleEdit'>
                            <input placeholder="Link" style={{width:"90%"}} value={each.link} onChange={(event)=>{this.modifyLink(index,event.target.value)}}></input>
                        </div>
                        <div className='infoViewtitleEdit'>
                            <input placeholder="Link display text" style={{width:"90%"}} value={each.linktext} onChange={(event)=>{this.modifyLinkText(index,event.target.value)}}></input>
                        </div>
                        <button className="infoViewContentRemoveEdit" onClick={()=>{this.removeLink(index)}}>x</button>
                    </div>)}
                    <button style={{marginLeft: "8px"}} onClick={()=>{this.addLink()}}>Add New</button>
                </div>
            </div>
            <div className='infoViewtitleEditRow'>
                <div className="infoViewLabelEdit">Footer:</div>
                <input placeholder="Right aligned footer message" className="infoViewInputEdit" value={data.rightFooter} onChange={(event)=>{this.editDetails("rightFooter",event.target.value)}}></input>
            </div>
        </div>
    }

    render(){
        return(
            this.props.edit_mode ? this.getEditElements() : this.getDisplayElements()
        )
    }
}

export default InfoView;