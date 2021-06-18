const promiseList=new Promise((resolve,reject)=>{
    console.log("SENDING LIST CALL")
    $.get("http://jsonplaceholder.typicode.com/posts",(data)=>{
     resolve(data);
        }).fail(err=>{
            reject(new Error(`Request One  Failed with status ${err.status}`));
        })
})

const promiseDetails=(data)=>new Promise((resolve,reject)=>{
    console.log("SENDING DETAILS CALL")
    $.get(`http://jsonplaceholder.typicode.com/posts/${data[0].id}`,(data)=>{
      resolve(data);
        }).fail(err=>{
            reject(new Error(`Request  Two Failed with status ${err.status}`));
        })
})

promiseList
.then(promiseDetails)
.then((response)=>{
    console.log("Then response =>",response)
})
.catch((error)=>{
    console.log("Call Failed")
    console.log("Catch Error =>",error)
})