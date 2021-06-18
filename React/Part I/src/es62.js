const Fun1=(a)=>{
    if(a==null)
    return true
    else 
    return false
}

const Fun2=(msg)=>{
  return msg.message //used in <Fun2 message={msg} />
}

export {Fun1,Fun2} //we can also give in the declaration of a function as //export const Fun2=(msg)=>
//(The above is only for named export)