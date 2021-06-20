import React from 'react';
import "./AddNew.css";

interface AddNewProps{
    options: string[];
    onSelect: (type:string) => void;
}

class AddNew extends React.Component<AddNewProps>{
    render(){
        return(
            <div className="addNewElement">
                <div className="addNewLine"/>
                <select className="addNewOptions" value={"Add New Here"} onChange={(event)=>{this.props.onSelect(event.target.value)}}>
                    <option value={"Add New Here"}>{"Add New Here"}</option>
                    {this.props.options.map((each: string) => <option value={each}>{each}</option>)}
                </select>
                <div className="addNewLine"/>
            </div>
        )
    }
}

export default AddNew;