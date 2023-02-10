import React from 'react';
import bannerImg from '../.../../../assets/banner_img.jpg';
import './Banner.css';
import bannerBG from '../../assets/banner_bg.png';

const Banner = () => {
    return (
        <header id="banner_container">
            <div className="left_side">
                <h1 className="banner_title">Organize <br /> <span className='color_text'>your daily jobs</span></h1>
                <p className="banner_subtitle">The only way to get things done</p>
                <button className="banner_btn">Go to To-do List</button>
            </div>
            <div className="right_side">
                <div className="img_container">
                    <img className="bannerImg" src={bannerImg} alt="bannerImg" />
                    <img className="bannger_bg" src={bannerBG} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Banner;