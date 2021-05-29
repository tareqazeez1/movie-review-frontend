
import { useState, useEffect } from 'react';
import { CssBaseline, Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import useStyles from './styles.App';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import logo from './images/mvreview5.jpg';



const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

// dispatching action -->
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])


    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h3' align='center'>Movie Review</Typography>
                <img className={classes.image} src={logo} alt='mvreview' height='70' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify='center' alignItems='stretch' spacing={6}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>   
        </Container>
    );
};

export default App;