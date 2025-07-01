import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <Item>
            <img
              src='https://www.shutterstock.com/image-vector/half-price-50-off-advertising-260nw-2267206233.jpg'
              style={{ width: '650px', height: '427px'}}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={7}>
          <Item>
            <img
              src='https://www.shutterstock.com/image-illustration/tagsbest-seller-sale-promotion-hot-260nw-2313277949.jpg'
             style={{ width: '650px', height: '200px'}}
            />
          </Item>
          <Item>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhBnViJyq2WJ6uIxqC5AdWMwp2qD3a0B_Gw&s'
             style={{ width: '650px', height: '200px'}}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
