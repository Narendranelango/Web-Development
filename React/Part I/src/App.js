
import logo from './logo.svg';
import './App.css';

import Funct from './es61'// We can give any name to Funct if the export is given as default
import {Fun1,Fun2} from './es62'
function App() {
 var fullname="James Anderson"
  const age=38
  var profession="Fast Bowler"

 const passw=(fullname,age)=>{
   return `${fullname}${age}`
  }

  const ph="Enter the details"
  const text_Box=<input placeholder={ph}/>
  const obj={
    Place:"England",
    Debut:"India",
    Average:36,
    Strike_Rate:87.8

  }
  const arr=["Mango","Banana","Orange",5]
  const objs={
    Name: "The",
    Height:"6.7",
    Weight:"220 LBS"

  }

const msg="Hii Naren"


  const myarray1=[{
    tutles:"Title 1",
    Descs:"Desc 1"
  },
  {
    tutles:"Title 2",
    Descs:"Desc 2"
  },
    {
      tutles:"Title 13",
      Descs:"Desc 13"}
    ]

    const root=myarray1.map((item,pos)=>{
      console.log(item);
return(
  // <div className="Blog" key={item.id}>
  //   {/* <div className="Blog" key={pos}> */}
  //   <h3>{item.tutles}</h3>
  //   <h3>{item.Descs}</h3>
  //   </div>
  <Funct key={pos} title={item.tutles} description={item.Descs}/>  //Key is an Keyword
)
    })

  return (
    <div className="App">
{root} 

  <h3>Full Name : {fullname}</h3>
  <p>Age : {age}</p>
  <p>Profession : {profession}</p>
  <p>Password : {passw(fullname,age)}</p>
 {text_Box}


 <h4>Called Via The Object</h4>
 <p>Average : {obj.Average}</p>
    <p>{arr+""}</p>
    {arr[0]=="Banana"?"Yah":"No"}
    {"\n"} {"\n"}
    {arr[3]}<hr></hr>


    {/* <div style={
      {
        margin : '50px'
      }
    }> */}


    <div className="Blog">
    <h3>Wrestlers Details</h3>
    <b><p>{objs.Name} </p></b><p>{objs.Weight}</p>
    </div>

    <div className="Blog">
    <h3>Wrestlers Details</h3>
    <b><p>{objs.Name} </p></b><p>{objs.Weight}</p>
    </div>

    <div className="Blog">
    <h3>Wrestlers Details</h3>
    <b><p>{objs.Name} </p></b><p>{objs.Weight}</p>
    </div>
    
  <Fun2 message={msg}/>
    </div>
    // </div>
   
  );
}

export default App; 
