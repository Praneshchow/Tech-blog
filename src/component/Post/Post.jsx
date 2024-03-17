import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCheck } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    const {id, name, title, tag, time, img, icon} = props.post;        // Object propertise. 
    // console.log(typeof(props));          // props is an object. 
    
    const handleTime = props.handleReadTime;   
    // console.log(typeof(handleTime));         // function.
    const handleBook = props.handleBookmark; 

    // const handleBook = (title) => {
    //     console.log("clicked");
    // }

    return (
        <div className='post'>
            <img src={img} alt="" />
            <div className='profile-line'>
                <div className='profile'>
                    <img className='icon' src={icon} alt="" />
                    <h3>{name}</h3>
                </div>

                <div className='bookmark'>
                    <h4>{time} min read </h4>
                    <span onClick={() => handleBook(props.post)}><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </div>
            <h1>{title}</h1>
            <h5 className='tag'>{tag}</h5>
            <span onClick={() => handleTime(time)} className='mark-as-read'>
            Mark as Read <FontAwesomeIcon icon={faCheck} /></span>
        </div>
    );
};

export default Post;
