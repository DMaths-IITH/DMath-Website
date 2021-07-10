export async function deploy(token: string){
    const url = "https://api.github.com/repos/DMaths-IITH/DMath-Website/actions/workflows/github-actions.yml/dispatches";
    const body = {
        ref: "main"
    }
    await fetch(url, {
        method: "POST",
        headers: {
            "accept": "application/vnd.github.v3+json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
}