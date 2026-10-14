import photo4912 from './assets/photos/photo_4912.jpg';
import photo4915 from './assets/photos/photo_4915.jpg';
import photo4918 from './assets/photos/photo_4918.jpg';
import photo4921 from './assets/photos/photo_4921.jpg';
import photoUnnamed2 from './assets/photos/photo_unnamed_2.jpg';
import photoUnnamed3 from './assets/photos/photo_unnamed_3.jpg';
import photo5045 from './assets/photos/photo_5045.jpg';
import logoDourado from './assets/logo_dourado.png';

export const ASSETS = {
  // Official Golden Logo (Transparent PNG)
  logo: logoDourado,
  logoUrl: 'https://i.postimg.cc/JntDmhdW/Logo-Dourado-Tatiane-Vilela.png',

  // Unique photos without repetition
  hero: photo4915,              // Photo 1: Hero section (black blazer at desk)
  about: 'https://i.imgur.com/Q1ommKX.jpeg', // Photo 2: About / Quem sou eu
  usa: photo5045,               // Photo 3: Online Therapy Brasil & Exterior (16:9 master portrait with golden logo)
  onlineGlobal: photo5045,      // Master landscape photo
  space: photo4912,             // Photo 4: Conheça o meu espaço (black uniform with gold accents, clinic)
  clinic: photo4912,            // Alias for clinic space
  presentation1: photoUnnamed2, // Photo 5: Registro & Apresentação (white blazer in office)
  presentation2: photoUnnamed3, // Photo 6: Registro & Apresentação (radiant close-up portrait)
  standingSuit: photo4918,      // Burgundy suit standing

  // Avatar for tiny floating widgets
  avatar: photoUnnamed3,

  // Direct CDN URLs for instant preloading
  urls: {
    logo: 'https://i.postimg.cc/JntDmhdW/Logo-Dourado-Tatiane-Vilela.png',
    aboutPortrait: 'https://i.imgur.com/Q1ommKX.jpeg',
    photo5045: 'https://i.postimg.cc/rp3H1MYh/5045.jpg',
    photo4912: 'https://i.postimg.cc/g0qK3ywT/4912.jpg',
    photo4915: 'https://i.postimg.cc/g0qK3yXF/4915.jpg',
    photo4918: 'https://i.postimg.cc/7LMNS1Cp/4918.jpg',
    photo4921: 'https://i.postimg.cc/W4670mDB/4921.jpg',
    unnamed2: 'https://i.postimg.cc/sXctsVqV/unnamed-(2).jpg',
    unnamed3: 'https://i.postimg.cc/zBj98J6Z/unnamed-(3).jpg',
  },
};
