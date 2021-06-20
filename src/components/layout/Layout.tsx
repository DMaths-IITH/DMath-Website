import React from 'react';
import './Layout.css';
import TitleBar from '../titlebar/TitleBar';
import NavSlider from '../navslider/NavSlider';
import {Swipeable} from '../swipeable/Swipeable';
import Marquee from '../marquee/marquee';
import {Helmet} from 'react-helmet';

interface LayoutProps {}

interface LayoutState {
  showSlider: boolean;
  currentTab: string;
  showAnnouncements: boolean;
}

class Layout extends React.Component<LayoutProps, LayoutState> {

  constructor(props: LayoutProps, state: LayoutState) {
    super(props, state);
    this.state = {
      showAnnouncements: false,
      showSlider: false,
      currentTab: (typeof window !== `undefined` ? window.location.pathname:'/'),      
    }
    console.log(this.state.currentTab);
    this.pageRef = React.createRef();
  }

  componentDidMount(){
    this.setState({
      currentTab: (typeof window !== `undefined` ? window.location.pathname:'/')
    })
  }

  pageRef : any

  changeTab = (tab: string):void =>{
    this.setState({
        currentTab: tab,
        showSlider: this.state.showSlider && !this.state.showSlider
    },() => { this.pageRef.current.scrollTop = 0 });
  }

  toggleShowSlider = (): void => {
    this.setState({
      showSlider: !this.state.showSlider
    })
  }

  swipeShowSlider = ():void => {
    if(!this.state.showSlider){
      this.setState({
        showSlider: true
      })
    }
  }

  swipeRemoveSlider =():void =>{
    if(this.state.showSlider){
      this.setState({
        showSlider: false
      })
    }
  }

  toggleShowAnnouncements =():void =>{
    this.setState({
      showAnnouncements: !this.state.showAnnouncements
    })
  }

  render(){
    return (
      <Swipeable onSwipedRight={this.swipeShowSlider} onSwipedLeft={this.swipeRemoveSlider}>
        <Helmet>
          <html lang="en"/>
          <meta name="description" content="The Department of Mathematics was one of the six departments that was founded along with the Institute in 2008. Since its inception, the department has made a conscious effort to grow in sync with the directions of the Institute and an awareness of the larger needs of the society."/>
        </Helmet>
        <div className='page' ref={this.pageRef}>
          <TitleBar toggleShowSlider={this.toggleShowSlider}></TitleBar>
          <div className='pageBody'>
            <div className={(this.state.showSlider)? 'showNav':'hideNav'}>
              <NavSlider currentTab={this.state.currentTab} changeTab={this.changeTab}/>
            </div>
            <div className='bodyContent'>
              <div style={{width: this.state.showAnnouncements ? '100%' : '95%'}}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }  
}

export default Layout;
