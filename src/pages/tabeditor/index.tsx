import React from 'react';
import { FirebaseUtils } from '../../utils/FirebaseUtils';
import "./TabEditor.css";

interface TabSection{
    section: string;
    pages: {
        name: string;
        url: string;
    }[]
}

interface TabEditorState{
    isLoading: boolean;
    tabData: {
        routes: TabSection[]
    };
}

interface TabEditorProps{}

class TabEditor extends React.Component<TabEditorProps, TabEditorState>{
    constructor(props: TabEditorProps, state: TabEditorState){
        super(props, state);
        this.state = {
            isLoading: true,
            tabData: {routes: []}
        }
        if(!FirebaseUtils.isAdminLoggedIn()){
            if(typeof window !== "undefined"){
                window.location.replace("/admin");
            }
        }
    }

    async componentDidMount(){
        const body = await FirebaseUtils.getPageData("pages", "tabs") as {
            routes: TabSection[]
        };
        this.setState({
            tabData: body,
            isLoading: false
        })
    }

    changeSection = (index: number, newSection: string) => {
        let routeList = this.state.tabData.routes;
        routeList[index].section = newSection;
        this.setState({
            tabData: {
                routes: routeList
            }
        });
    }

    changePageName = (sec_ind: number, page_ind: number, newName: string) => {
        let routeList = this.state.tabData.routes;
        ((routeList[sec_ind]).pages[page_ind]).name = newName;
        this.setState({
            tabData: {
                routes: routeList
            }
        });
    }

    changePageUrl = (sec_ind: number, page_ind: number, newUrl: string) => {
        let routeList = this.state.tabData.routes;
        ((routeList[sec_ind]).pages[page_ind]).url = newUrl;
        this.setState({
            tabData: {
                routes: routeList
            }
        });
    }

    addNewSection = () => {
        let routeList = this.state.tabData.routes;
        routeList.push({
            section: "",
            pages: [
                {
                    name: "",
                    url: ""
                }
            ]
        });
        this.setState({
            tabData: {
                routes: routeList
            }
        });
    }

    addNewPage = (sec_ind: number) => {
        let routeList = this.state.tabData.routes;
        (routeList[sec_ind]).pages.push({
            name: "",
            url: ""
        });
        this.setState({
            tabData: {
                routes: routeList
            }
        });
    }

    removePage = (sec_ind: number) => {
        let pag_ind = parseInt(prompt("Enter the index of the page you wish to remove:"));
        if(pag_ind>=0 && pag_ind<(this.state.tabData.routes[sec_ind]).pages.length){
            let routeList = this.state.tabData.routes;
            (routeList[sec_ind]).pages.splice(pag_ind,1);
            this.setState({
                tabData: {
                    routes: routeList
                }
            });
        }
        else{
            alert("Invalid index!");
        }
    }

    removeSection = () => {
        let sec_ind = parseInt(prompt("Enter the index of the section you wish to remove:"));
        if(sec_ind>=0 && sec_ind<this.state.tabData.routes.length){
            let routeList = this.state.tabData.routes;
            routeList.splice(sec_ind,1);
            this.setState({
                tabData: {
                    routes: routeList
                }
            });
        }
        else{
            alert("Invalid index!");
        }
    }

    saveChanges = () => {
        let confirmation = confirm("Are you sure you want to save changes?");
        if(confirmation){
            FirebaseUtils.saveChanges("pages", "tabs", this.state.tabData);
        }
    }

    render(){
        return(
            <div className="tabEditorPage">
                <p style={{fontSize:"larger"}}>Tab Menu Editor</p>
                <div className="tabEditorPageControls">
                    <button onClick={this.addNewSection}>Add a new section</button>
                    <button onClick={this.removeSection}>Remove a section</button>
                    <button onClick={this.saveChanges}>Save Changes</button>
                </div>
                {this.state.tabData.routes.map((each, index)=><div className="tabEditorSection">
                    <div className="tabEditorSectionName">
                        <p style={{marginRight:"10px"}}>Section:</p>
                        <input value={each.section} onChange={(event)=>this.changeSection(index, event.target.value)}/>
                        <div className="tabEditorPageIndex">{index}</div>
                    </div>
                    <div className="tabEditorPages">
                        <p>Pages:</p>
                        <div className="tabEditorPageInfo">
                            {each.pages.map((page, page_ind)=><div className="tabEditorPagedetails">
                                <div className="tabEditorPageName">
                                    <p style={{marginLeft:"10px", marginRight:"5px"}}>Page Name</p>
                                    <input value={page.name} onChange={(event)=>this.changePageName(index, page_ind, event.target.value)}/>
                                </div>
                                <div className="tabEditorPageName">
                                    <p style={{marginLeft:"10px", marginRight:"5px"}}>Page Url</p>
                                    <input value={page.url} onChange={(event)=>this.changePageUrl(index, page_ind, event.target.value)}/>
                                </div>
                                <div className="tabEditorPageIndex">{page_ind}</div>
                            </div>)}
                            <div className="tabEditorPageControls">
                                <button onClick={()=>this.addNewPage(index)}>Add a new page</button>
                                <button onClick={()=>this.removePage(index)}>Remove a page</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}

export default TabEditor;