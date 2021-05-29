import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: '15px',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',       
      },
      heading: {
        color: 'rgb(255,29,0)',
      },
      image: {
          marginLeft: '15px',

      },
      [theme.breakpoints.down('sm')]:{
        mainContainer: {
          flexDirection: 'column-reverse',
      }}
      
}))