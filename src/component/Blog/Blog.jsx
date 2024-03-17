import { useEffect, useState } from 'react';
import './Blog.css'
import Post from '../Post/Post';
import BookmarkTitle from '../BookmarkTitle/BookmarkTitle';

const Blog = () => {
    const [posts, setPosts] = useState([]);      // For API data fetch into a 'posts' array. 
    const [time, setTime] = useState(0);         // time is a variable. 
    const [titles, setTitle] = useState([]);

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

    // Quantity calculation. 
    const handleBookmark = (post) => {
        // every post hava a title, we can count how many title and also get the title name. 
        const newBookmark = [...titles, post.title];       // updated total bookmark array.      
        setTitle(newBookmark);
    }


    return (
        <div className='blog'>
            {/*  Showing All Posts from the 'data.json' file using API fetch. */}
            <div className='posts-container'>
                {
                    posts.map(post => <Post key={post.id} post={post} handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Post>)
                }
            </div>

            {/*  Bookmark Part  */}
            <div className='bookmark-container'>
                {/* Reading Time Part | Total reading Time.  */}
                <div className='time'>
                    <h3>Spent time on read : {time} min</h3>
                </div>

                {/* Bookmark part | Bookmark count and Bookmark titles.  */}
                <div className='bookmark-blog'>
                    <h3>Bookmarked Blogs : {titles.length} </h3>
                    <hr />

                    {
                        titles.map((title, id) => (<BookmarkTitle key={id} title={title}></BookmarkTitle>))
                    }
                </div>
            </div>

        </div>
    );
};

export default Blog;