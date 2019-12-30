async function pull(url:string){
    let response=await fetch(url,{headers:{Accept:'application/json'}});
    console.log(response.status);
}

pull('https://api.github.com/users/Bit0r');