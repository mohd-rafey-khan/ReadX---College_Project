import React,{ useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/Postcard";
import "./css/style.css";

const Home = ()=>{

    const [ allexchangePost , setallexchangePost ]=useState([]);

    useEffect(()=>{
        const fetchUrl = async ()=>{
            const { data: res} = await axios.get('http://localhost:8080/api/exchangeposts/all');
            setallexchangePost(res);
            console.log(res);
        };
        fetchUrl();
    },[]);


    return(
        <>
            <div className="Home container">
                <div className="row">
                <div class="container-xxl menu-nav">
                    <label for="customRange1" class="form-label">Location range (km): <span id="range_val">1</span></label>
                    <input type="range" class="form-range" min="1" max="50" id="customRange1"/>
                </div>
                </div>
                <div className="container cardposted">
                    <div className="row postCardsection">

                    {
                        allexchangePost.map(post=>
                            <PostCard
                                bookname={post.book_name}
                                author={post.author}
                                user={post.user_posted}
                                imageurl={post.post_img}
                            />
                        )
                    }

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;