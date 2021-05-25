import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import useStyles from './styles.Posts';

const Posts = () => {
    // getting state from redux -->
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();

    console.log(posts)

    
    return (
        <div>
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Posts;