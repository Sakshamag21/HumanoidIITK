import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Card, CardActionArea, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';



function Header() {
  return (
    <Box sx={{width:'100vw', height:735, backgroundColor:'black',margin:'-3vw' }} >
        
        <Typography variant='h3' color='white' sx={{mt: 0, ml:5 ,pt:8, fontWeight:'bold'} } > Contact Us</Typography>
        
       
       
       
       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          
        },
      }}
    >
<Paper sx={{backgroundColor:'black'}}>
        <Typography variant="h5" color='white' sx={{mt:4,ml:5}}>
        Email:<Typography variant='body2' fontSize={20} sx={{display:'inline'}}> falfjlk</Typography>

      </Typography>
      
      <Typography variant="h5" color='white' sx={{mt:1,ml:5}}>
        Desk no. :<Typography variant='body2' fontSize={20} sx={{display:'inline'}}> falfjlk</Typography>

      </Typography>
      </Paper>
      
      <Paper sx={{ml:40,width:730,backgroundColor:'black'}}>
    <TextField id="filled-basic" label="Company Name" variant="filled" sx={{borderRadius:1,width:352,backgroundColor:'white'}} />
    
      <TextField id="filled-basic" label="Your Name" variant="filled" sx={{ml:2, borderRadius:1,width:352, backgroundColor:'white'}} />
      <TextField id="filled-basic" label="Your Phone number" variant="filled" sx={{mt:2, borderRadius:1,width:352, backgroundColor:'white'}}/>
      <TextField id="filled-basic" label="Your Email" variant="filled" sx={{ml:2,mt:2,borderRadius:1,width:352, backgroundColor:'white'}}/>
      <TextField id="filled-basic" label="  Your Designation" variant="filled" sx={{mt:2, borderRadius:1,width:730,  backgroundColor:'white'}}/>
      <TextField id="filled-basic" label="Enter Your Message" multiline rows={10} variant="filled" sx={{ mt:2,borderRadius:1,width:730,backgroundColor:'white'}}/>
      <Button variant="contained" sx={{mt:2,ml:38 ,width:100,height:40}}>Send</Button>
      </Paper>
  </Box>
  
        <Box sx={{ mt:5,width: '100vw', height: 200, backgroundColor: 'black' }}>

            <Typography variant='h3' color='white' sx={{ mt: 0, ml: 5, pt: 8, fontWeight: 'bold' }}> About Us</Typography>
        </Box>

        <Box sx={{backgroundColor:'black',height:377}}>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            
          },
        }}
      >
        <Paper sx={{width:350,height: 200,ml:6,backgroundColor:'black',color:'white',whiteSpace:'normal'}}  >
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.ksadjlsajdaslflsajjlsaasfjahlfsljalsflhlhlhlhlhlhlljkkkkkkk

        </Paper  >
        <Paper sx={{width:400,height: 300,ml:40}} >
          <CardActionArea>
          <CardMedia component="img" height='300' width='200' image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Honda_prototype_robots_Honda_Collection_Hall.jpg/1200px-Honda_prototype_robots_Honda_Collection_Hall.jpg"></CardMedia>
          </CardActionArea>
        </Paper  >
        
      </Box></Box> </Box>
  )
}

export default Header