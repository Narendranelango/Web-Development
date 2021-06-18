import React from 'react'
import classes from './Blogcard.module.css'
import { myLogs } from "./Utils";
//function  BlogCard(props)
const BlogCard=(props)=>{
    myLogs(props)
    return(
    <div className={classes.NewBlogCard}>
        <h3>{props.title} </h3>
         <p>{props.description}</p>
         <p>Like count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
         <button onClick={props.onClickLikeBtn}>Like</button>
        </div>
    )
}

export default BlogCard;