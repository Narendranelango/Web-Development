import React from 'react'

import c from './BlogCard.module.css'
const Funct=(prop)=>{
    /* Give NewBlogCard in class name for responsive*/
    return (<div className={c.BlogCard} > 
    {/* <div className="Blog" key={pos}> */}
    <h3>{prop.title}</h3>
<h3>{prop.description}</h3>
    </div>
    )}

export default Funct;