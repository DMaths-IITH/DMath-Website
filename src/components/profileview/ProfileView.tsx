import React from 'react';
import { ProfileViewModel } from '../../models/Model';
import './ProfileView.css';

interface ProfileViewProps{
    edit_mode: boolean;
    page_data: Object;
    component_id: string;
}

class ProfileView extends React.Component<ProfileViewProps>{

    editDetails = (key: string, value: string) => {
        let data = this.props.page_data["data"];
        data[this.props.component_id][key] = value;
        this.props.page_data["edit"](data);
    }

    addExtras = () => {
        const data = this.props.page_data["data"];
        (data[this.props.component_id] as ProfileViewModel).extraDetails.push("");
        this.props.page_data["edit"](data);
    }

    removeExtras = (index: number) => {
        const data = this.props.page_data["data"];
        (data[this.props.component_id] as ProfileViewModel).extraDetails.splice(index,1);
        this.props.page_data["edit"](data);
    }

    modifyExtras = (index: number, value: string) => {
        const data = this.props.page_data["data"];
        (data[this.props.component_id] as ProfileViewModel).extraDetails[index] = value;
        this.props.page_data["edit"](data);
    }

    getDisplayElements = () =>{
        const data = this.props.page_data["data"][this.props.component_id] as ProfileViewModel; 
        return(
            <div className='profileView'>
                <div className='profileViewImageWrap'>
                    <img  className='profileViewImage' src={data.Image} width='100%'/>
                </div>
                <div className='profileInfo'>
                    <p className='profileViewName'>{data.Name}</p>
                    <p className='profileViewDesignation'>{data.Designation}</p>
                    {(data.Area !== "") ? <p className='profileViewArea'>{'Area of Interest:  '}<p style={{fontStyle: "italic", margin: "0px",textDecoration:"inherit", display:"inline"}}>{data.Area}</p></p> : null}
                    {data.extraDetails?.map(detail => <p className='profileViewExtras'>{detail}</p>)}
                    {(data.email !== "") ? <p className='profileViewExtras'>{'Email: '}<a href={'mailto: ' + data.email} style={{fontStyle: "italic", textDecoration: "none", color: "inherit"}}>{data.email}</a></p> : null}
                    {(data.link !== "") ? <p className='profileViewExtras'><a href={data.link}>Link to website</a> </p> : null}
                </div>
            </div>
        )
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as ProfileViewModel;
        return(
            <div className='profileView'>
                <div className='profileViewEdit'>
                    <div className="profileViewItemEdit">
                        <div className="profileViewItemLabelEdit">Name:</div>
                        <input placeholder="Name of the Person" className="profileViewInputEdit" value={data.Name} onChange={(event)=>{this.editDetails("Name",event.target.value)}}></input>
                    </div>
                    <div className="profileViewItemEdit">
                        <div className="profileViewItemLabelEdit">Image:</div>
                        <input placeholder="Image URL" className="profileViewInputEdit" value={data.Image} onChange={(event)=>{this.editDetails("Image",event.target.value)}}></input>
                    </div>
                    <div className="profileViewItemEdit">
                        <div className="profileViewItemLabelEdit">Designation:</div>
                        <input placeholder="Designation (optional)" className="profileViewInputEdit" value={data.Designation} onChange={(event)=>{this.editDetails("Designation",event.target.value)}}></input>
                    </div>
                    <div className="profileViewItemEdit">
                        <div className="profileViewItemLabelEdit">Areas of Interest:</div>
                        <textarea placeholder="Areas of Interest/Study (optional)" className="profileViewInputEdit" value={data.Area} onChange={(event)=>{this.editDetails("Area",event.target.value)}}></textarea>
                    </div>
                    <div className="profileViewItemEdit">
                        <div className="profileViewItemLabelEdit">Extras:</div>
                        <div className="profileViewExtrasList">
                            {data.extraDetails.map((each, index) => <div className="profileViewExtrasRow">
                                <input placeholder={"Extra information (optional) " + (index + 1)} style={{width:"90%"}} value={each} onChange={(event)=>{this.modifyExtras(index, event.target.value)}}></input>
                                <button className="profileViewExtrasCloseEdit" onClick={()=>{this.removeExtras(index)}}>x</button>
                            </div>)}
                            <button onClick={()=>{this.addExtras()}}>Add New</button>
                        </div>
                    </div>
                    <div className="profileViewItemEdit">
                        <div className="profileViewItemLabelEdit">Email:</div>
                        <input placeholder="Email Id of the person" className="profileViewInputEdit" value={data.email} onChange={(event)=>{this.editDetails("email",event.target.value)}}></input>
                    </div>
                    <div className="profileViewItemEdit">
                        <div className="profileViewItemLabelEdit">Link:</div>
                        <input placeholder="Personal wensite URL (optional)" className="profileViewInputEdit" value={data.link} onChange={(event)=>{this.editDetails("link",event.target.value)}}></input>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements()
    }
}

export default ProfileView;