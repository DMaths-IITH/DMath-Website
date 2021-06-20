import React from 'react';
import './NavTab.css';
import {BsDot} from 'react-icons/bs';
import {Link} from 'gatsby';
import { IconType } from 'react-icons';

interface NavTabProp{
    onClickEvent: (tab: string) => void;
    name: string;
    currentTab: string
    urlLink?: string
    icon?: IconType
}

interface NavTabState{}

class NavTab extends React.Component<NavTabProp,NavTabState>{

    onClick=():void =>{
        this.props.onClickEvent((this.props.urlLink==undefined ? this.props.name : this.props.urlLink));
    }

    render(){
        const Icon = this.props.icon as React.ElementType;
        return(
            <a href={this.props.urlLink} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={((this.props.currentTab===this.props.urlLink) ? 'active':'inactive') + 'NavTab'} onClick={this.onClick}>
                    {(this.props.icon === undefined) ? <BsDot/> : <Icon/>}
                    <p className='navTabName'>{this.props.name}</p>
                </div>
            </a>
        )
    }
}

export default NavTab;