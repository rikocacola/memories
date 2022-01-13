import FileBase from 'react-file-base64'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TextField, Button, Typography, Paper } from '@material-ui/core'

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({currentId, setCurrentId}) => {
  const post = useSelector((state)=> currentId ? state.posts.find((post) => post._id === currentId) : null);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });
  const classes = useStyles()

  useEffect(()=>{
    if(post){
      setPostData(post);
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){
      dispatch(updatePost(currentId, postData))
      clear();
    } else {
      dispatch(createPost(postData))
      clear();
    }
  }

  const clear = () => {
      setCurrentId(null);
      setPostData({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
      })
  }
  return (
    
    <>
      <Paper className={classes.paper}>
        <form className={`${classes.form} ${classes.root}`} autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? 'Edit a Memories' : 'Create a Memories'}</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event) => setPostData({...postData, creator: event.target.value})}/>
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setPostData({...postData, title: event.target.value})}/>
          <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => setPostData({...postData, message: event.target.value})}/>
          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({...postData, tags: event.target.value.split(',')})}/>
          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
          </div>
          <Button className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </>
  )
}

export default Form;
