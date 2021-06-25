import React from 'react';
import GoogleButton from 'react-google-button'
import { FirebaseUtils } from '../../utils/FirebaseUtils';
import './Admin.css';
import ReactCircularLoader from '../../components/loader/ReactCircularLoader';
import { Link } from 'gatsby';


interface AdminState{
    isUserLoggedIn: boolean;
    isAdminLoggedIn: boolean;
    addNewPage: boolean
}

interface AdminProps{}

class Admin extends React.Component<AdminProps, AdminState>{
    constructor(props: AdminProps, state: AdminState){
        super(props, state);
        FirebaseUtils.initialize_auth(this.onLogin);
        this.state = {
            isUserLoggedIn: FirebaseUtils.isUserLoggedIn(),
            isAdminLoggedIn: FirebaseUtils.isAdminLoggedIn(),
            addNewPage: false
        }
    }

    onLogin = async () => {
        this.setState({
            isUserLoggedIn: true
        })
        const conf = await FirebaseUtils.verifyUser();
        if (conf){
            if(typeof window !=="undefined"){
                sessionStorage.setItem("isAdminLoggedIn" , "True");
            }
            this.setState({
                isAdminLoggedIn: true
            })
        }
        else{
            FirebaseUtils.logout(()=>{});
            alert("Sorry, you do not have access to this service.");
            this.setState({
                isAdminLoggedIn: false,
                isUserLoggedIn: false
            })
        }
    }

    login = () => {
        FirebaseUtils.login(this.onLogin);
    }

    getLoginComponent = () => {
        return(
            <div className="adminWelcomeBox">
                <h2 className="adminTitle">DMath Admin</h2>
                <p>Welcome to the admin page! Please login with you IITH mail id to use the admin services.</p>
                <GoogleButton onClick={()=>this.login()}/>
            </div>
        )
    }

    getVerifyComponent = () => {
        const user = FirebaseUtils.getUser();
        return(
            <div className="adminWelcomeBox">
                <h2 className="adminTitle">DMath Admin</h2>
                <ReactCircularLoader primaryColor="white" secondaryColor="rgb(170,170,170" diameter="180px" primaryWidth="3px" secondaryWidth="5px"/>
                <p>Verifying your access level...</p>
            </div>
        )
    }

    createNewPage = async (newPage: {path:string,type:string}) =>{
        const json_path = (newPage.path.split("/")).join("-");
        FirebaseUtils.saveChanges("pages",json_path,{components:[]});
        const pages = await FirebaseUtils.getPageData("pages","pages");
        pages[json_path] = newPage.type;
        FirebaseUtils.saveChanges("pages","pages",pages);
        this.setState({
            addNewPage: false
        })
    }

    getAdminComponent = () => {
        const user = FirebaseUtils.getUser();
        let newPage = {
            path : "",
            type: "./src/components/pageview/PageView.tsx"
        }
        return(
            <div className="adminWelcomeBox">
                <h2 className="adminTitle">DMath Admin</h2>
                <p>{"Welcome to the admin page, " + user.name + " (" + user.email + ")"}</p>
                <div>
                    <Link to="/jsoneditor"><button>Go to Json Editor</button></Link>
                    <button style={{marginLeft:"10px"}} onClick={()=>this.setState({addNewPage: !this.state.addNewPage})}>Add a new page</button>
                </div>
                {this.state.addNewPage ? <div style={{marginTop: "15px", border:"2px solid rgb(170,170,170)", padding:"10px"}}>
                    <div className="adminNewPageRow">
                        <div style={{marginRight:"10px"}}>Enter the path to the page (relative URL path):</div>
                        <input onChange={(event)=>newPage.path = event.target.value}></input>
                    </div>
                    <div className="adminNewPageRow">
                        <div style={{marginRight:"10px"}}>Select the page type:</div>
                        <select onChange={(event)=>newPage.type = event.target.value}>
                            <option value="./src/components/pageview/PageView.tsx">Default</option>
                            <option value="./src/components/yearview/YearView.tsx">Year Template</option>
                        </select>
                    </div>
                    <button onClick={()=>{this.createNewPage(newPage)}}>Create Page</button>
                </div>: null}
            </div>
        )
    }

    render(){
        return (
            <div className="adminPage">
                {this.state.isUserLoggedIn ? (this.state.isAdminLoggedIn ? this.getAdminComponent(): this.getVerifyComponent()):this.getLoginComponent()}
            </div>
        );
    }
}

export default Admin;