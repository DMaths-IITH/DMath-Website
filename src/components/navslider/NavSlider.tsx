import React from 'react';
import './NavSlider.css';
import NavTab from './navtab/NavTab';
import DropDownTab from './dropdowntab/DropdownTab';
import {AiOutlineHome} from 'react-icons/ai';
import {getIcon} from '../../utils/IconmapUtils';
import {Link} from 'gatsby';
import {FirebaseUtils} from "../../utils/FirebaseUtils";

interface NavSliderProps{
    currentTab: string;
    changeTab: (tab: string) => void;
}

interface NavSliderState{
    currentDropDown: string;
    isloading: boolean;
    pages: Object
}

class NavSlider extends React.Component<NavSliderProps, NavSliderState>{
    constructor(props: NavSliderProps, state: NavSliderState){
        super(props);
        this.state = {
            currentDropDown: 'None',
            isloading: true,
            pages: {}
        }
    }

    async componentDidMount(){
        const body = await FirebaseUtils.getPageData("pages", "tabs") as Object;
        this.setState({
            pages: body,
            isloading: false
        })
    }

    changeDropDownTab=(newDropDown: string): void =>{
        this.setState({
            currentDropDown: newDropDown
        })
    }

    home=():void =>{
        this.props.changeTab('/');
        this.changeDropDownTab('None');
    }

    render(){
        const pages = this.state.pages as {"routes":{"section":string,"pages":{name: string, url: string}[]}[]}
        return(
            <div>
                <div className='Slider'>
                    <NavTab name='Home' onClickEvent={this.home} currentTab={this.props.currentTab} urlLink='/' icon={AiOutlineHome}/>
                    {this.state.isloading ? <div style={{height:"80vh"}}/>:pages.routes.map(tab => <DropDownTab name={tab.section} contentTabs={tab.pages} currentDropdown={this.state.currentDropDown} currentTab={this.props.currentTab} onClickEvent={this.props.changeTab} dropDownUpdate={this.changeDropDownTab} icon={getIcon(tab.section)}/>)} 
                    <div className='contactUs'>
                        <p style={{}}> <Link rel="noreferrer" to='https://www.iith.ac.in/' style={{textDecoration: 'none', color: 'inherit', marginBottom: '3px', marginTop: '0px'}} target='_blank'>IITH Home</Link></p>
                    </div>   
                </div>
            </div>
        )
    }
}

export default NavSlider;