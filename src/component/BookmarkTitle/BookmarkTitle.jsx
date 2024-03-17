import './BookmarkTitle.css'

const BookmarkTitle = ({title}) => {
    return (
        <div className='bookmark-title'>
            <h4>{title}</h4>
        </div>
    );
};

export default BookmarkTitle;