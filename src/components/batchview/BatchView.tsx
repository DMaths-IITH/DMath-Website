import React from 'react';
import { BsDot } from 'react-icons/bs';
import { BatchViewModel } from '../../models/Model';
import './BatchView.css';

interface BatchViewProps{
    page_data: Object;
    component_id: string;
    edit_mode: boolean;
}

class BatchView extends React.Component<BatchViewProps>{

    addNewEntry = () =>{
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as BatchViewModel).Students.push("");
        this.props.page_data["edit"](data);
    }

    deleteEntry = (index: number) => {
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as BatchViewModel).Students.splice(index,1);
        this.props.page_data["edit"](data);
    }

    editEntry = (index: number, value: string) => {
        let data = this.props.page_data["data"];
        data[this.props.component_id]["Students"][index] = value;
        this.props.page_data["edit"](data);
    }

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as BatchViewModel;
        return(
            <div className='studentsBatch'>
                {data.GrpImage==="" ? null:<img alt={data.GrpImage} src={data.GrpImage}></img>}
                <div className='batchTitle'>
                    <p style={{margin: '5px', marginLeft: '20px', padding: '0px', color: 'darkblue', fontSize: 'larger'}}>{data.BatchName + ' Batch:'}</p>
                </div>
                <div className='studentsList'>
                    {data.Students.map(person => <div className='studentName'><BsDot size={20}/><p style={{width:'95%'}}><i>{person}</i></p></div>)}
                </div>    
            </div>
        )
    }

    editDetails = (key:string, value:string) => {
        let data = this.props.page_data["data"];
        data[this.props.component_id][key] = value;
        this.props.page_data["edit"](data);
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as BatchViewModel;
        return(
            <div className='studentsBatchEdit'>
                <div className='batchViewTitleRowEdit'>
                    <div style={{marginRight: "10px"}}>Batch Name:</div>
                    <input placeholder="Name of the Batch" style={{width:"200px"}} onChange={(event)=>{this.editDetails("BatchName", event.target.value)}} value={data.BatchName}></input>
                </div>
                <div className='batchViewTitleRowEdit'>
                    <div style={{marginRight: "10px"}}>Batch Image:</div>
                    <input placeholder="Image URL (optional)" style={{width:"200px"}} onChange={(event)=>{this.editDetails("GrpImage", event.target.value)}} value={data.GrpImage}></input>
                </div>
                <div style={{margin: "4px", marginLeft: "15px", fontSize: "large", textAlign: "left",width:"100%"}}> Students:</div>
                <div className='studentsListEdit'>
                    {data.Students.map((person, index) => <div key={index} className="studentListEntryEdit">
                        <input placeholder={"Student No. " + (index + 1)} style={{width:"85%"}} onChange={(event)=>{this.editEntry(index, event.target.value)}} value={person}></input>
                        <button key={index} onClick={()=>{this.deleteEntry(index)}} className="studentsListEntryRemoveEdit">x</button>
                    </div>)}
                    <button style={{width: "88%"}} onClick={()=>{this.addNewEntry()}}>Add New Entry</button>
                </div>    
            </div>
        )
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements() 
    }
}

export default BatchView;