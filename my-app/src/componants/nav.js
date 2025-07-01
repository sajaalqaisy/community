import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 40,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"purple" }}position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end'  }}
          >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4AqtzOD8c2EpcOYwQjiwuzQwnRuEbO8_XQ&s'  style={{ width: '50px', height: '50px' , position: "absolute" , left:"260px", top:"8px" }}/>
 
          </Typography>
          
          <IconButton size="large" aria-label="search" color="inherit">
          <img src='https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'   style={{ width: '50px', height: '50px' , position: "absolute" , right:"73px", top:"2px" }}/>
           <input style={{width:"800px", borderRadius:"50PX" , position: "absolute" ,
                right: "150px", top:"10px"}}/> <SearchIcon sx={{position: "absolute" ,
                right: "130px" , top:"10px"}}/>
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
