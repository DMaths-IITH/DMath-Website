import React from 'react';
import ReactCircularLoader from '../../components/loader/ReactCircularLoader';
import { FirebaseUtils } from '../../utils/FirebaseUtils';
import './JsonEditor.css';

interface JsonEditorState{
    page_data: object;
    pages: string[];
    selectedPage: string;
}

interface JsonEditorProps{}

class JsonEditor extends React.Component<JsonEditorProps, JsonEditorState>{
    constructor(props: JsonEditorProps, state: JsonEditorState){
        super(props, state);
        this.state = {
            page_data : {},
            pages: [],
            selectedPage: "Not Selected"
        }
        if(!FirebaseUtils.isAdminLoggedIn()){
            if(typeof window !== "undefined"){
                window.location.replace("/admin");
            }
        }
    }

    async componentDidMount(){
        const _pages = await FirebaseUtils.getDocNames("pages");
        this.setState({
            pages: _pages
        })
    }

    changeDoc = async (name: string)=>{
        this.setState({
            selectedPage: name,
            page_data: {}
        })
        const _page_data = await FirebaseUtils.getPageData("pages",name);
        this.setState({
            page_data: _page_data
        })
    }

    editDoc = (target: object) => {
        this.setState({
            page_data : target['updated_src']
        })
    }

    saveChanges = () => {
        if(this.state.selectedPage !== "Not Selected" && this.state.page_data !== {}){
            FirebaseUtils.saveChanges("pages",this.state.selectedPage, this.state.page_data); 
        }
        else{
            alert("Please select a page to edit.");
        }
    }

    getEditor = () =>{
        if (typeof window !== "undefined") {
            const ReactJson = require('react-json-view').default
            return <ReactJson src={this.state.page_data} enableClipboard={false} onEdit={this.editDoc} onAdd={this.editDoc} onDelete={this.editDoc}/>
        }
        return null
      }

    render(){
        return(
            <div className="jsonEditorPage">
                <p style={{fontSize:"larger"}}>Json Editor</p>
                {
                    this.state.pages.length === 0 ? <p>Loading...</p> : 
                    <div className="jsonEditorControlBar">
                        <div style={{marginRight:"8px"}}>Select JSON document to edit:</div>
                        <select value={this.state.selectedPage} onChange={(event)=>{this.changeDoc(event.target.value)}}>
                            <option value={"Not Selected"}>None</option>
                            {this.state.pages.map((each)=><option value={each}>{each}</option>)}
                        </select>
                        <button style={{marginLeft:"30px"}} onClick={()=>this.saveChanges()}>Save Changes</button>
                    </div>
                } 
                {
                    (this.state.selectedPage !== "Not Selected") ? <div className="jsonEditorContent">
                        {
                            (this.state.page_data === {}) ? <ReactCircularLoader primaryColor="white" secondaryColor="rgb(170,170,170" diameter="180px" primaryWidth="3px" secondaryWidth="5px"/> : 
                            this.getEditor()
                        }
                    </div>: null
                }
            </div>
        );
    }
}

export default JsonEditor;