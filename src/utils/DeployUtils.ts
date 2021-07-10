export async function deploy(token: string){
    const url = "https://api.github.com/repos/DMaths-IITH/DMath-Website/actions/workflows/github-actions.yml/dispatches";
    const body = {
        ref: "main"
    }
    const resp = await fetch(url, {
        method: "POST",
        headers: {
            "accept": "application/vnd.github.v3+json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });
    if(resp.status === 200){
        alert("Sucessfully saved changes. \nThe changes can take upto 5 minutes to reflect in the website. \nThank you!");
    }
    else{
        alert("Something went wrong! Please try again later");
    }
    
}