import React from 'react';
import { TableModel } from '../../models/Model';
import './Table.css'

interface TableProps{
    edit_mode: boolean;
    page_data: Object;
    component_id: string;
}

class Table extends React.Component<TableProps>{

    editRowElement = (rowIndex: number, colIndex: number, value: string) => {
        const data = this.props.page_data["data"];
        (data[this.props.component_id]["rows"] as string[][])[rowIndex][colIndex] = value;
        this.props.page_data["edit"](data);
    }

    editHeaderElement = (colIndex: number, value: string) => {
        console.log("header" + value);
        const data = this.props.page_data["data"];
        (data[this.props.component_id]["headers"] as string[])[colIndex] = value;
        this.props.page_data["edit"](data);
    }

    addrow = () =>{
        const data = this.props.page_data["data"];
        data[this.props.component_id]["rows"] = [...(data[this.props.component_id]["rows"] as string[][]), new Array(Number(data[this.props.component_id]["cols"])).fill("")];
        this.props.page_data["edit"](data);
    }

    isNumeric = (value) => {
        return /^\d+$/.test(value);
    }

    delete = () => {
        const row_ind = prompt("PLease enter the index of the row to be deleted:");
        if (this.isNumeric(row_ind)){
            const data = this.props.page_data["data"];
            (data[this.props.component_id]["rows"] as string[][]).splice(Number(row_ind)-1, 1);
            this.props.page_data["edit"](data);
        }
        else{
            alert("Invalid row index");
        }
    }

    editTitle = (value) => {
        const data = this.props.page_data["data"];
        data[this.props.component_id]["title"] = value;
        this.props.page_data["edit"](data);
    }

    getDisplayElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as TableModel;
        return(
            <div  className="tableBoxEdit" >
                <div className="tableTitle">{data.title}</div>
                <table style={{width:"90%"}}>
                    <tr>
                        {data.headers.map((each, index) => <th >{each}</th>)}
                    </tr>
                    {data.rows.map((each, rowIndex) => <tr>
                        {each.map((col, colIndex) => <td >{col}</td>) }
                    </tr>)}
                </table>
            </div>
        );
    }

    getEditElements = () => {
        const data = this.props.page_data["data"][this.props.component_id] as TableModel;
        return(
            <div className="tableBoxEdit">
                <input style={{margin:"10px", width:"70%"}} placeholder="Title of the table" value={data.title} onChange={(event)=>this.editTitle(event.target.value)}></input>
                <table style={{width:"90%"}}>
                    <tr>
                        {data.headers.map((each, index) => <th><input style={{width:"100%"}} placeholder={"Header No. " + (index+1)} value={each} onChange={(event)=>this.editHeaderElement(index, event.target.value)}></input></th>)}
                    </tr>
                    {data.rows.map((each, rowIndex) => <tr>
                        {each.map((col, colIndex) => <td><input placeholder={"Row "+(rowIndex+1)+" Column " + (colIndex+1)} value={col} onChange={(event=>this.editRowElement(rowIndex, colIndex, event.target.value))}></input></td>) }
                    </tr>)}
                </table>
                <div>
                    <button style={{margin: "10px"}} onClick={()=>this.addrow()}>Add a row</button>
                    <button style={{margin: "10px"}} onClick={()=>this.delete()}>Remove a row</button>
                </div>
            </div>
        );
    }

    render(){
        return this.props.edit_mode ? this.getEditElements():this.getDisplayElements();
    }
}

export default Table