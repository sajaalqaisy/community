import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const categories = [
  { label: "Vêtements pour hommes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBuyOW0raYTkfN85i374zDJoXuTTe-8pyog&s" },
  { label: "Montres", img: "/images/montre.png" },
  { label: "Santé et beauté", img: "/images/beaute.png" },
  { label: "Vêtements pour femmes", img: "/images/femme.png" },
  { label: "Mobile et accessoires", img: "/images/mobile.png" },
  { label: "Automobile", img: "/images/auto.png" },
  { label: "Sports", img: "/images/sport.png" },
  { label: "Jeux et consoles", img: "/images/console.png" },
  { label: "Sacs pour femme", img: "/images/sacs.png" },
  { label: "Voyage et bagages", img: "/images/voyage.png" },
  { label: "Caméras et drones", img: "/images/camera.png" },
  { label: "Ordinateurs et accessoires", img: "/images/laptop.png" },
  { label: "Électroménagers", img: "/images/fridge.png" },
  { label: "Maison et habitat", img: "/images/maison.png" },
  { label: "Accessoires de mode", img: "/images/accessoire.png" },
  { label: "Livres et loisirs", img: "/images/livre.png" },
];

export default function CategoriesGrid() {
  return (
     
    <Box sx={{ flexGrow: 1, padding: 2 }}>
         <Typography variant="h5" xs={{textAlign:"center"}}>categories</Typography>
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