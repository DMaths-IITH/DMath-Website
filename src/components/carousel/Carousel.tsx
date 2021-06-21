import React from 'react';
import {BsChevronCompactRight} from 'react-icons/bs';
import {BsChevronCompactLeft} from 'react-icons/bs';
import './Carousel.css';
import {Swipeable} from '../swipeable/Swipeable';
import { CarouselModel } from '../../models/Model';
import { SwipeEventData } from 'react-swipeable';

interface CarouselProps{
    edit_mode: boolean;
    page_data: Object;
    component_id: string;
}

interface CarouselState{
    currentPic: number;
}

class Carousel extends React.Component<CarouselProps,CarouselState>{
    id: any;
    timeout: number;

    constructor(props: CarouselProps, state: CarouselState){
        super(props,state);
        this.state = {
            currentPic: 0
        }
        this.timeout = 10000;
        this.id = setInterval(this.nextPic, this.timeout);
    }

    componentWillUnmount(){
        clearInterval(this.id);
    }

    nextPic =():void =>{
        const data = this.props.page_data["data"][this.props.component_id] as CarouselModel;
        const imagesNum = data.images.length;
        clearInterval(this.id);
        this.id = setInterval(this.nextPic, this.timeout);
        this.setState({
            currentPic: (this.state.currentPic === imagesNum - 1) ? 0 : this.state.currentPic + 1
        })
    }

    prevPic =():void =>{ 
        const data = this.props.page_data["data"][this.props.component_id] as CarouselModel;
        const imagesNum = data.images.length;
        clearInterval(this.id);
        this.id = setInterval(this.nextPic, this.timeout);
        this.setState({
            currentPic: (this.state.currentPic === 0) ? imagesNum-1 : this.state.currentPic - 1
        })
    }

    swipeRightEvent=(event: SwipeEventData):void =>{
        event.event.stopPropagation();
        this.prevPic();
    }

    swipeLeftEvent=():void =>{
        this.nextPic();
    }

    addNewPic = () =>{
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as CarouselModel).images.push("");
        this.props.page_data["edit"](data);
    }

    removePic = (index: number) => {
        let data = this.props.page_data["data"];
        console.log(index);
        (data[this.props.component_id] as CarouselModel).images.splice(index,1);
        this.props.page_data["edit"](data);
    }

    editLink = (index: number, newLink: string) => {
        let data = this.props.page_data["data"];
        (data[this.props.component_id] as CarouselModel).images[index] = newLink;
        this.props.page_data["edit"](data);
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as CarouselModel;
        return(
            <div className='carouselEdit'>
                <div className="carouselNameEdit">Carousel Images:</div>
                <div className="carouselListEdit">
                    {data.images.map((image, index) => <div className="carouselLinkEdit">
                        <input style={{width:"88%"}} placeholder={"Image No. " + (index + 1)} value={image} onChange={(event)=>{this.editLink(index, event.target.value)}}></input>
                        <button className="carouselRemoveEdit" onClick={()=>{this.removePic(index)}}>x</button>
                    </div>)}
                </div>
                <button style={{width: "150px"}} onClick={()=>{this.addNewPic()}}>Add New Image</button>
            </div>
        )
    }

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as CarouselModel;
        const imagesNum = data.images.length;
        return(
            <Swipeable onSwipedRight={this.swipeRightEvent} onSwipedLeft={this.swipeLeftEvent} >
                <div style={{width:"100%", backgroundColor:"rgb(250,250,250)", paddingTop:"8px", paddingBottom:"8px"}}>
                    <div className='carousel'>
                        {imagesNum > 1 ? <BsChevronCompactLeft size={32} color='darkgrey' onClick={this.prevPic} className='carouselButtons'/> : null}
                        <div className='carouselImage'>
                            <img alt={data.images[this.state.currentPic]} src={data.images[this.state.currentPic]} width='100%'/>
                        </div>
                        {imagesNum > 1 ? <BsChevronCompactRight size={32} color='darkgrey' onClick={this.nextPic} className='carouselButtons'/> : null}
                    </div>
                </div>
            </Swipeable>
        )
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements()
    }
}

export default Carousel;