import React, { useState, useEffect } from "react";
import "./css/style.css";
import Card from "../components/Card";

import axios from "axios";

const Discuss = ()=>{

    const [ discussPost , setDiscussPost ]=useState([]);

    useEffect(()=>{
        const fetchUrl = async ()=>{
            const { data: res} = await axios.get('http://localhost:8080/api/discusspost/all');
            setDiscussPost(res);
        };
        fetchUrl();
        
    },[]);
    
    // const callback_forname = async (id)=>{
    //     const url = "http://localhost:8080/api/users/625d50384e697b8793f57004";
    //     await axios.get(url)
    //     .then(res=>{
    //         console.log(res);
    //         return res.name;
    //     })
    //     .catch(err=>{
    //         console.log("err : "+err);
    //     })
    // }

    return(
        <>
           <div class="discuss-content">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        
                        {
                            discussPost.map(post=> 
                                <Card
                                    Likes={post.likes} 
                                    title={post.title} 
                                    name={post.user_posted}
                                    numOfcom={post.comments.length} 
                                    time={post.createdAt}
                                    _id={post._id} 
                                    modalId={"post"+post._id} 
                                    bodyCard={post.body}  
                                    postedAt="Post Time"
                                />
                                // <h1>dk</h1>
                            )
                        }

            
                    </div>      
                </div>
           </div>
        </>
    );
}


export default Discuss;