const isArrayEmpty=(arr)=>{
    if(arr!==undefined && arr!==null && arr.length>0)
    return false;
    else
    return true;
}

const myLogs=(messages)=>{
    console.log(messages)
}

export {isArrayEmpty,myLogs}