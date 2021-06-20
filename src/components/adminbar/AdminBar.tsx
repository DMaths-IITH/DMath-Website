import React from'react';
import {BiEditAlt} from 'react-icons/bi';
import {GrView} from 'react-icons/gr';
import {BiSave} from 'react-icons/bi';
import './AdminBar.css';

interface AdminBarProps{
    edit_toggle : Function;
    onSubmit: Function;
    edit_state: boolean;
}

class AdminBar extends React.Component<AdminBarProps>{

    render(){
        return(
            <div className="adminBarComponent">
                <div>{this.props.edit_state ? "Edit Mode" : "View Mode"}</div>
                <div className="adminBarButtons">
                    {this.props.edit_state ? <button className="adminBarEditButton" onClick={()=>this.props.onSubmit()}>
                        <BiSave size={18}/>
                        <div className="adminBarEditButtonText">Save Changes</div>
                    </button> : null}
                    <button className="adminBarEditButton" onClick={()=>{this.props.edit_toggle()}}>
                        {this.props.edit_state ? <GrView size={18}/> : <BiEditAlt size={18}/>}
                        <div className="adminBarEditButtonText">
                            {this.props.edit_state ? "View" : "Edit"}
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default AdminBar;