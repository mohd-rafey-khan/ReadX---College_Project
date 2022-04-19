import React from "react";

const Home = ()=>{
    return(
        <>
            <div className="Home container">
                <div className="row">
                <div class="container-xxl menu-nav">
                    <label for="customRange1" class="form-label">Location range (km): <span id="range_val">1</span></label>
                    <input type="range" class="form-range" min="1" max="50" id="customRange1"/>
                </div>
                </div>
            </div>
        </>
    );
}

export default Home;