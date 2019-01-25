import text from '../../text';
import sciPic from './sci.png';
import musicPic from './music.jpeg';
import imagePic from './contact.png';

const Categories = [
  {
    text: text.science,
    title: text.sciences,
    image: sciPic,
    path: '/science',
  },
  {
    text: text.music,
    title: text.musics,
    image: musicPic,
    path: '/musics',
  },
  {
    text: text.picture,
    title: text.pictures,
    image: imagePic,
    path: '/images',
  },
];

export default Categories;
