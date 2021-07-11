import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
/*
const firebaseConfig = {
    apiKey: "AIzaSyDCbxvztZKuY7jT2-QrjYYja4Pis_nvjgw",
    authDomain: "websitetrial-751df.firebaseapp.com",
    databaseURL: "https://websitetrial-751df.firebaseio.com",
    projectId: "websitetrial-751df",
    storageBucket: "websitetrial-751df.appspot.com",
    messagingSenderId: "753007707796",
    appId: "1:753007707796:web:c47ac33bf9e0e0a34dd681"

}
*/
const firebaseConfig = {
    apiKey: "AIzaSyBhvmEOjB7-x5-8dxqc_Hgsr0UbfvpeA_c",
    authDomain: "dmaths-website.firebaseapp.com",
    databaseURL: "https://dmaths-website.firebaseio.com",
    projectId: "dmaths-website",
    storageBucket: "dmaths-website.appspot.com",
    messagingSenderId: "149499051594",
    appId: "1:149499051594:web:9633281006e4558cbcf0b3"
}

export class FirebaseUtils {

    static isAdminLoggedIn = () => {
        if(typeof window !== "undefined"){
            if(sessionStorage.getItem("isAdminLoggedIn") != null){
                return true;
            }
        }
        return false;
    }

    static isUserLoggedIn = () => {
        let key = "firebase:authUser:" + firebaseConfig.apiKey +":[DEFAULT]";
        if(typeof window !== "undefined"){
            if(sessionStorage.getItem(key) != null){
                return true;
            }
        }
        return false;
    }

    static getFirebaseApp = () => {
        return firebase.apps.length ? firebase.apps[0] : firebase.initializeApp(firebaseConfig);
    }

    static initialize_auth = (callback: Function) => {
        const app = FirebaseUtils.getFirebaseApp();
       if(typeof window !== "undefined"){
            app?.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
            app?.auth().onAuthStateChanged((user: any) => {
                if(user){
                    callback();
                }
            })
       }
    }

    static getUser = () => {
        const app = FirebaseUtils.getFirebaseApp();
        if(typeof window !== "undefined"){
            return {"name": app?.auth().currentUser?.displayName, "email": app?.auth().currentUser?.email};
        }
    } 

    static getPageData = async (collection: string, page: string):Promise<any> => {
        let output: any = {}
        const app = FirebaseUtils.getFirebaseApp()
        const db = app?.firestore().collection(collection)
        const data = await db?.doc(page).get()
        output = (data) ? data.data() : {}
        return output
    }

    static getDocNames = async (collection: string): Promise<string[]> => {
        let output = [];
        const app = FirebaseUtils.getFirebaseApp()
        const db = app?.firestore().collection(collection)
        const snap = await db.get();
        snap.forEach((doc) => {
            output.push(doc.id);
        });
        return output;
    }

    static verifyUser = async () => {
        try{
            const result = await FirebaseUtils.getPageData("members","editors");
            if(result !== {}){
                return true;
            }
        }
        catch{
            return false;
        }
        return false;
    }

    static login = async (callback:()=>void) => {
        const app = FirebaseUtils.getFirebaseApp()
        let provider = new firebase.auth.GoogleAuthProvider();
        if(typeof window !== "undefined"){
            await app?.auth().signInWithRedirect(provider);
            app?.auth().getRedirectResult().then(function(result) {
                if(result.credential){
                    callback();
                    alert("Welcome, " + result.user?.displayName)
                }
                else{
                    alert("Oops... login failed. Please try again")
                }
            }).catch(function(error) {
                alert("Oops... login failed. Please try again")
            })
        }
    }

    static logout = (callback:()=>void) => {
        const app = FirebaseUtils.getFirebaseApp()
        if(typeof window !== "undefined"){
            app?.auth().signOut().then(function(result){
                callback();
                alert("Sucessfully logged out")
            }).catch(function(error){alert("Oops... failed to logout")})
        }
    }

    static saveChanges = (collection: string,currentPage:string, page_data:Object) => {
        const app = FirebaseUtils.getFirebaseApp()
        app?.firestore().collection(collection).doc(currentPage).set(page_data).then(function(result){
            alert("Sucessfully saved changes to Firestore");
        }).catch(function(error){
            alert("Oops... Sorry, unable to save changes. This might have happened because, \n i) You may not have the edit access to the data \n ii) You may not have a stable network")
        })
    }
}
