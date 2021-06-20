import BatchView from "../components/batchview/BatchView";
import Carousel from "../components/carousel/Carousel";
import GridView from "../components/gridview/GridView";
import InfoView from "../components/infoview/InfoView";
import ProfileView from "../components/profileview/ProfileView";
import PublicationView from "../components/publicationview/PublicationView";
import TableView from "../components/tableview/TableView";
import ImageView from "../components/imageview/ImageView";
import { BatchViewModel, CarouselModel, GridViewModel, ImageViewModel, InfoViewModel, ProfileViewModel, PublicationModel, TableViewModel, TableModel, MarqueeModel} from "../models/Model"
import React from 'react';
import Table from "../components/table/Table";
import Marquee from "../components/marquee/Marquee";

let getNewModel = (type: string) => {
    switch(type){
        case "infoview": 
            return {
                title: "",
                info: "",
                titleColor: "black",
                titleAlign: "left",
                links: [],
                rightFooter: ""
            } as InfoViewModel;
        case "tableview":
            return {
                title: "",
                content: "",
                speaker: "",
                dateVenue: "",
                links: {
                    "link": "", 
                    "linktext": ""
                }
            } as TableViewModel;
        case "profileview":
            return {
                Image: "",
                Name: "",
                email: "",
                Designation: "",
                Area: "",
                link: "",
                extraDetails: [],
            } as ProfileViewModel;
        case "publicationview":
            return {
                people: "",
                name: "",
                details: ""
            } as PublicationModel;
        case "gridviewtwo":
            return {
                items: []
            } as GridViewModel;
        case "gridviewthree":
            return {
                items: []
            } as GridViewModel;
        case "carousel":
            return {
                images: []
            } as CarouselModel;
        case "batchview":
            return {
                GrpImage: "",
                BatchName: "",
                Students: []
            } as BatchViewModel
        case "imageview":
            return{
                image: "",
                caption: ""
            } as ImageViewModel
        case "table":
            let cols_num = prompt("Enter the number of columns for the table:");
            if (cols_num === undefined || !isNumeric(cols_num)){
                cols_num = "2";
            }
            return{
                title: "",
                cols: Number(cols_num),
                headers: new Array<string>(Number(cols_num)).fill(""),
                rows: []
            } as TableModel;
        case "marquee":
            return{
                content: ""
            } as MarqueeModel;
    }
}

let isNumeric = (value) => {
    return /^\d+$/.test(value);
}

let getNewId = () =>{
    const datetime = new Date();
    return (datetime.getMilliseconds()).toString() + (datetime.getSeconds()).toString() + (datetime.getMinutes()).toString() + (datetime.getHours()).toString() + (datetime.getDate()).toString() + (datetime.getMonth()).toString() + (datetime.getFullYear()).toString()
}

let getComponent = (component_id: string, type: string, edit_mode:boolean, context: Object) => {
    switch(type){
        case "infoview": 
            return <InfoView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "tableview":
            return <TableView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "profileview":
            return <ProfileView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "publicationview":
            return <PublicationView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "gridviewtwo":
            return <GridView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context} type="GridViewTwo"/>
        case "gridviewthree":
            return <GridView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context} type="GridViewThree"/>
        case "carousel":
            return <Carousel key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "batchview":
            return <BatchView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "imageview":
            return <ImageView key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "table":
            return <Table key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
        case "marquee":
            return <Marquee key={component_id} edit_mode={edit_mode} component_id={component_id} page_data={context}/>
    }
}

export {getNewModel, getNewId, getComponent}