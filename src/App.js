
import { useEffect } from 'react';
import { CssBaseline, Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPost } from './actions/posts';
import useStyles from './styles.App';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import logo from './images/mvreview5.jpg';



const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

// dispatching action -->
    useEffect(() =>{
        dispatch(getPost());
    }, [dispatch])


    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h3' align='center'>Movie Review</Typography>
                <img className={classes.image} src={logo} alt='mvreview' height='70' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>   
        </Container>
    );
};

export default App;