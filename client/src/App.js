import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './actions/posts';

import useStyles from './styles'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png'

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>Memories</Typography>
        <img src={memories} alt="memories" height="60" className={classes.image}/>

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignitems="strech" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;