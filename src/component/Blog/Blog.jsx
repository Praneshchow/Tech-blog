import { useEffect, useState } from 'react';
import './Blog.css'
import Post from '../Post/Post';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div className='blog'>
            <div className='posts-container'>
                {
                    posts.map(post => <Post key={post.id} post={post} ></Post>)
                }
            </div>

            <div className='cart-container'>

            </div>

        </div>
    );
};

export default Blog;