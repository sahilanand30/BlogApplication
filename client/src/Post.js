import { useContext, useEffect, useState } from "react";
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";

const Post = ({ _id, title, summary, cover, content, createdAt }) => {
    const { userInfo } = useContext(UserContext);
    return (
        <div className='post'>
            <Link to={`/post/${_id}`}>
                <div className="image">
                    <img src={"http://localhost:4000/" + cover} alt="image" />
                </div>
            </Link>
            <div className='texts'>
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a className='author'>{userInfo.username}</a>
                    <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                </p>
                <p className='summary'>{summary} </p>
            </div>
        </div>
    )
}

export default Post
