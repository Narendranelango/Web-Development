
import './App.css';
import BlogCard from './BlogCard'
import {  isArrayEmpty} from "./Utils";
import { Component } from 'react';

class App extends Component{
  state={
    showBlogs:true,
    blogArr:[
      {
      title:"Blog Title 1",
      desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      likeCount:0
    },
    {
      title:"Blog Title2",
      desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      likeCount:0
  },
  {
       title:"Blog Title 3",
       desc:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
       likeCount:0
  }
  ]
  
  }
 
onClickLikeBtn=(pos)=>{
  const updatedBlogList=this.state.blogArr
  const updatedBlogObj=updatedBlogList[pos]
  updatedBlogObj.likeCount+=1
  updatedBlogList[pos]=updatedBlogObj
  
  this.setState({blogArr:updatedBlogList})
}


onHideBtnClk=()=>{
  this.setState((prevState,prevProps)=>{
    return({showBlogs:!prevState.showBlogs})
  })
 }
 
render(){
  const blogCards=isArrayEmpty(this.state.blogArr)?[]: this.state.blogArr.map((item,pos)=>{

    return(
      <BlogCard className={'Blog'} key={pos} title={item.title} description={item.desc} likeCount={item.likeCount} 
      onClickLikeBtn={()=> this.onClickLikeBtn(pos)} />
      // <div className="Blog-Card" key={pos}>
      //        <h3>{item.title}</h3>
      //         <p>{item.desc}</p>
      //        </div>
       )
  })

  return(
    //React.CreateElement("div",null)
    <div className="App"> 
    <button onClick={this.onHideBtnClk}>{this.state.showBlogs?'Hide List' : 'Show List'}</button>
    <br></br>
    {
    this.state.showBlogs? blogCards:null
    }
    </div>
   )
}

}
export default App;