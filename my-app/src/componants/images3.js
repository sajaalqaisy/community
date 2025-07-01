import * as React from 'react';
import { styled } from '@mui/material/styles';



import { Box, Grid, Typography, Paper } from '@mui/material';
const categories = [
  { label: "Vêtements pour hommes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBuyOW0raYTkfN85i374zDJoXuTTe-8pyog&s" },
  { label: "Montres", img: "https://cdn.salla.sa/gvxlN/QwOo1Hzx6aUeI1Js5TWF2KsdWQRZZfOHlWYQJpoP.jpg" },
  { label: "Santé et beauté", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfGRf9syzh-b39MTuO7hviHV0wBt78RYG8g&s" },
  { label: "Vêtements pour femmes", img: "https://api.vogacloset.com/media/catalog/product/cache/74b1f2ae9e9e0beeb5e25c6eb83adfbd/4/7/47c553f1-a69d-4c92-861b-d2f93ecfbce2_1.jpg" },
  { label: "Mobile et accessoires", img: "https://m2.me-retail.com/cdn-cgi/image/w=1000,q=75,f=auto/pub/media/catalog/product/6/6/6675314e2ade4c6ca8429904d434cf70ac7a31f1_642582_1.jpg" },
  { label: "Automobile", img: "https://argaamplus.s3.amazonaws.com/9fe7bcc8-f9f5-4813-a94e-a666173c6539.png" },
  { label: "Sports", img: "https://media.zid.store/8218ba26-7471-4426-9114-c3178c36d07d/0d52d9ae-0761-495e-a122-6dcbf54048ce.jpg" },
  { label: "Jeux et consoles", img: "https://cdn.salla.sa/lvble/1tV8lAeFLFOrIY3nOtfFZsBmwJEsQ78twKuHDO70.jpg" },
  { label: "Sacs pour femme", img: "https://jordanbazaar.com/public/uploads/all/myPpg4aUWPK8CjWzABOlXBOwboNaA7YQQTWFbsGi.jpg" },
  { label: "Voyage et bagages", img: "https://elrobystore.com//uploads/2023/08/6lIKGtgi1VMhPcvRzTaC-500x648.jpg" },
  { label: "Caméras et drones", img: "https://www.dronenerds.com/cdn/shop/files/DJIZenmuseH30T-TB.png?v=1715862615" },
  { label: "Ordinateurs et accessoires", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuRUKYGW5pHDfKWGcGKznx75TMm8Y2AW4lA&s" },
  { label: "Électroménagers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvOBKYr6ZMSZafoooznXrzYtUQXHtot87Pg&s" },
  { label: "Maison et habitat", img: "https://www.ville-lomme.fr/var/www/storage/images/mediatheque/solidarite/habitat-logement/maison-de-l-habitat-durable/231088-1-fre-FR/Maison-de-l-Habitat-Durable.png" },
  { label: "Accessoires de mode", img: "https://i.pinimg.com/originals/ca/0a/4e/ca0a4ea932cf47e1620b661bcbc474b2.jpg" },
  { label: "Livres et loisirs", img: "https://ahmalassaf.com/wp-content/uploads/2021/10/3748E8C6-C053-4C85-ADBF-B2B21E6608DE.jpeg" },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  return (
     <Box sx={{ flexGrow: 1, padding: 2 }}>
         <Typography variant="h5" xs={{textAlign:"center" , border:"2px"}}>categories</Typography>
      <Grid container spacing={2}>
        {categories.map((ittems, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={ittems.img}  style={{ width: 80, height: 80 }} />
              <Typography variant="body2">{ittems.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
