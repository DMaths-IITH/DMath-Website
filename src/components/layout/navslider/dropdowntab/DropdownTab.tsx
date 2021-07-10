import React from 'react';
import NavTab from '../navtab/NavTab';
import './DropdownTab.css';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {RiArrowDropUpLine} from 'react-icons/ri';
import { IconType } from 'react-icons';

interface DropDownTabState{}

interface DropDownTabProp{
    name: string;
    currentTab: string;
    currentDropdown: string;
    onClickEvent: (tab: string) => void;
    dropDownUpdate: (dropDownName: string) => void;
    contentTabs: Array<{name: string, url: string}>;
    icon: IconType
}

class DropDownTab extends React.Component<DropDownTabProp,DropDownTabState>{

    onDropDownClick=():void =>{
        if(this.props.currentDropdown === this.props.name){
            this.props.dropDownUpdate('None')
        }
        else{
            this.props.dropDownUpdate(this.props.name)   
        }
    }

    render(){
        return(
            <div className='dropDownTab'>
                <div className={(this.props.currentDropdown === this.props.name) ? 'openTitle' : 'closedTitle'} onClick={this.onDropDownClick}>
                    <NavTab name={this.props.name} currentTab={this.props.currentTab} onClickEvent={this.onDropDownClick} icon={this.props.icon}></NavTab>
                    {(this.props.currentDropdown === this.props.name) ? <RiArrowDropUpLine size={28} color='darkblue' style={{width: '12%'}}/> : <RiArrowDropDownLine size={28} color='darkblue' style={{width: '12%'}}/>}
                </div>
                {(this.props.currentDropdown === this.props.name) ? this.props.contentTabs.map((tab,index) => <NavTab key={index} name={tab.name} currentTab={this.props.currentTab} onClickEvent={this.props.onClickEvent} urlLink={tab.url}/>) : null}
            </div>
        )
    }
}

export default DropDownTab;