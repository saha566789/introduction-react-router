import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} =post;

    const navigate = useNavigate();
    const userStyle ={
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'20px'
    }

    const handleShowDetails =() =>{
   navigate(`/post/${id}`);
    }
    return (
        <div style={userStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Click post</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;