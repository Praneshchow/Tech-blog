import { useEffect, useState } from 'react';
import './Blog.css'
import Post from '../Post/Post';

const Blog = () => {
    const [posts, setPosts] = useState([]);      // For API data fetch into a 'posts' array. 
    const [time, setTime] = useState(0);         // time is a variable. 

    // API data fetch. 
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    // Read time calculation. 
    let countTime;
    const handleReadTime = (newTime) => {
        countTime = time + parseInt(newTime);
        // console.log(countTime);
        setTime(countTime);
    };


    return (
        <div className='blog'>
            {/*  Showing Posts from the 'data.json' file  */}
            <div className='posts-container'>
                {
                    posts.map(post => <Post key={post.id} post={post} handleReadTime={handleReadTime}></Post>)
                }
            </div>

            <div className='bookmark-container'>
                <div className='time'>
                    <h3>Spent time on read : {time} min</h3>
                </div>
                <div className='bookmark-blog'>
                    <h3>Bookmarked Blogs :  </h3>
                    {/* added every blogs */}
                </div>
            </div>

        </div>
    );
};

export default Blog;