import React from'react';
import './SelectBar.css';
import {FaRegWindowClose} from 'react-icons/fa';
import {RiPlayListAddLine} from 'react-icons/ri';

interface SelectBarProps{
    options: string[];
    currentOption: string;
    onOptionChange: Function;
    title: string;
    edit_state: boolean;
    onOptionEdit: Function;
    onNewOption: Function;
    onOptionRemoved: Function;
    onTitleChange: Function;
}

class SelectBar extends React.Component<SelectBarProps>{

    addNewOption = () => {
        const new_option = prompt("Enter the name of the new section:");
        if(new_option){
            this.props.onNewOption(new_option);
        }
    }

    removeOption = () => {
        if(this.props.options.length > 1){
            if(confirm("Are you sure, you want to delete this section?")){
                this.props.onOptionRemoved(this.props.currentOption);
            }
        }
        else{
            alert("Cannot delete all sections!");
        }
    }

    getDisplayElements = () => {
        return(
            <div className="selectBarComponent">
                <div>{this.props.title}</div>
                <div className="selectBarButtons">
                    <select value={this.props.currentOption} onChange={(event)=>{this.props.onOptionChange(event.target.value)}}>
                        {this.props.options.map((option)=><option key={option} value={option}>{option}</option>)}
                    </select>
                </div>
            </div>
        );
    }

    getEditElements = () => {
        return(
            <div className="selectBarComponent">
                <input value={this.props.title} onChange={(event)=>{this.props.onTitleChange(event.target.value)}}></input>
                <div className="selectBarButtons">
                    <RiPlayListAddLine style={{marginRight: "8px", cursor:"pointer"}} size={26} onClick={()=>{this.addNewOption()}}/>
                    <input onChange={(event)=>{this.props.onOptionEdit(this.props.currentOption,event.target.value)}} size={this.props.currentOption.length} value={this.props.currentOption}></input>
                    <FaRegWindowClose style={{marginLeft: "8px", cursor:"pointer"}} size={26} onClick={()=>{this.removeOption()}}/>
                </div>
            </div>
        );
    }

    render(){
        return this.props.edit_state ? this.getEditElements() : this.getDisplayElements()
    }
}

export default SelectBar;