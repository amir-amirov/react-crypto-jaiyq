import React from 'react'
import "./Blog.css"
import blog_image1 from "../../assets/blog_image1.webp"
import blog_image2 from "../../assets/blog_image2.avif"
import blog_image3 from "../../assets/blog_image3.avif"
import blog_image4 from "../../assets/blog_image4.avif"
import blog_image5 from "../../assets/blog_image5.avif"
import blog_image6 from "../../assets/blog_image6.avif"
import calendar_icon from "../../assets/calendar-icon.webp"
import time_icon from "../../assets/time-icon.webp"


const Blog = () => {
    
      return (
        <div>
            <div className='heading'>Crypto & Web 3.0 <br/> Marketing Blog</div>
            <div className="blog-page">
                <div className="blog-article">
                    <img src={blog_image1} alt="" className="article-image" />
                    <div className="article-details">
                        <h2 className="article-title">21 Best Crypto Telegram Groups for News, Trading, and Community</h2>
                        <div className='article-numbers'>    
                            <p className="article-date"><img src={calendar_icon} alt=""/>Aug 19, 2024</p>
                            <p className="article-time"><img src={time_icon} alt=""/>15 min</p>
                        </div>
                    </div>
                </div>
                <div className="blog-article">
                    <img src={blog_image2} alt="" className="article-image" />
                    <div className="article-details">
                        <h2 className="article-title">How to Create a Meme Crypto Coin: Step-by-Step Guide</h2>
                        <div className='article-numbers'>    
                            <p className="article-date"><img src={calendar_icon} alt=""/>Aug 13, 2024</p>
                            <p className="article-time"><img src={time_icon} alt=""/>10 min</p>
                        </div>
                    </div>
                </div>
                <div className="blog-article">
                    <img src={blog_image3} alt="" className="article-image" />
                    <div className="article-details">
                        <h2 className="article-title">13 Best Crypto Discord Servers 2024: Trading & Investment Groups</h2>
                        <div className='article-numbers'>    
                            <p className="article-date"><img src={calendar_icon} alt=""/>Aug 2, 2024</p>
                            <p className="article-time"><img src={time_icon} alt=""/>9 min</p>
                        </div>
                    </div>
                </div>
                <div className="blog-article">
                    <img src={blog_image4} alt="" className="article-image" />
                    <div className="article-details">
                        <h2 className="article-title">What Are IDO and ICO in Crypto? ICO vs IDO vs IEO</h2>
                        <div className='article-numbers'>    
                            <p className="article-date"><img src={calendar_icon} alt=""/>Aug 1, 2024</p>
                            <p className="article-time"><img src={time_icon} alt=""/>6 min</p>
                        </div>
                    </div>
                </div>
                <div className="blog-article">
                    <img src={blog_image5} alt="" className="article-image" />
                    <div className="article-details">
                        <h2 className="article-title">Crypto Launchpads: 10 best IDO Platforms for Crypto Projects</h2>
                        <div className='article-numbers'>    
                            <p className="article-date"><img src={calendar_icon} alt=""/>Jul 31, 2024</p>
                            <p className="article-time"><img src={time_icon} alt=""/>9 min</p>
                        </div>
                    </div>
                </div>
                <div className="blog-article">
                    <img src={blog_image6} alt="" className="article-image" />
                    <div className="article-details">
                        <h2 className="article-title">Meme Coin Marketing: Effective Strategies for Viral Success</h2>
                        <div className='article-numbers'>    
                            <p className="article-date"><img src={calendar_icon} alt=""/>Jul 30, 2024</p>
                            <p className="article-time"><img src={time_icon} alt=""/>6 min</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    };

export default Blog
