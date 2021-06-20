import React from 'react';
import "./DeleteThis.css";

interface DeleteThisProps{
    name: string;
    onClick: ()=>void;
}

class DeleteThis extends React.Component<DeleteThisProps>{

    delete = () => {
        const confirmation = confirm("Are you sure you want to delete this component?");
        if(confirmation){
            this.props.onClick();
        }
    }

    render(){
        return(
            <div className="deleteThis">
                <div className="deleteThisBox">
                    {this.props.children}
                </div>
                <button className="deleteThisButton" onClick={()=>{this.delete()}}>Delete This "{this.props.name}"</button>
            </div>
        )
    }
}

export default DeleteThis;