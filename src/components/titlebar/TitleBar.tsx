import React from 'react';
import './TitleBar.css';
import {MdMenu} from'react-icons/md';

interface TitleBarState{
    showSlider: boolean;
}

interface TitleBarProps{
    toggleShowSlider():void;
}

class TitleBar extends React.Component<TitleBarProps, TitleBarState>{
    constructor(props: TitleBarProps, state: TitleBarState) {
        super(props,state);
        this.state = {
            showSlider: false
        }
    }

    render(){
        return(
            <div className='titleBar'>
                <div className='deptTitle'>
                    <MdMenu className='menuIcon' onClick={this.props.toggleShowSlider} size={32}/>
                    <a href='/' className='titleImageLarge' style={{width:'100%',height:'100%'}}><img className='titleImageLarge' src= {"/images/homePage/deptTitleLarge.jpg"} alt='Department of Mathematics, IIT Hyderabad' height='90%'></img></a>
                    <a href='/' className='titleImageSmall' style={{width:'100%',height:'100%'}}><img className='titleImageSmall'  src= {"/images/homePage/deptTitleSmall.jpg"} alt='Department of Mathematics, IITH' width='90%' height='100%'></img></a>
                </div>
                <div className='iithImage'>
                    <a href='https://iith.ac.in/' target='_blank' style={{width:'100%',height:'100%'}}><img src={"/images/homePage/iithlogo.jpg"} alt='IITH Logo' height='70%'></img></a>
                </div>
            </div>
        )
    }
}

export default TitleBar;