import React from 'react';
import { MarqueeModel } from '../../models/Model';
import './Marquee.css';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }

interface MarqueeProps{
    edit_mode: boolean;
    page_data: Object;
    component_id: string;
}

class Marquee extends React.Component<MarqueeProps>{

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as MarqueeModel;
        return (<marquee className="marqueeText">{data.content}</marquee>);
    }

    editContent = (value: string) =>{
        let data = this.props.page_data["data"];
        data[this.props.component_id]["content"] = value;
        this.props.page_data["edit"](data);
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as MarqueeModel;
        return(<div className="marqueeBox">
            <div style={{marginBottom: "8px"}}>Marquee Text:</div>
            <textarea value={data.content} style={{width: "90%"}} onChange={(event)=>this.editContent(event.target.value)}></textarea>
        </div>)
    }

    render(){
        return this.props.edit_mode ? this.getEditElements() : this.getDisplayElements();
    }
}

export default Marquee;