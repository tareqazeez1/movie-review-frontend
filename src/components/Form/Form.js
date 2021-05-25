import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import useStyles from './styles.Form';

const Form = () => {

    const [postData, setPostData] = useState({ creator: '', title: '', review: '', tag: '', selectedFile: '' });
    
    const dispatch = useDispatch();

    const classes = useStyles();

    //For form submit button -->

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));

    }

    //For clear the field -->

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6' color='primary'>Create a Movie Review</Typography>
                <TextField name='title' variant='outlined' label='Movie Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />                
                <TextField name='review' variant='outlined' label='Review' fullWidth value={postData.review} onChange={(e) => setPostData({ ...postData, review: e.target.value })} />
                <TextField name='tag' variant='outlined' label='Movie Tag (eg: action/comedy)' fullWidth value={postData.tag} onChange={(e) => setPostData({ ...postData, tag: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth onClick={handleSubmit}>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    );
};

export default Form;