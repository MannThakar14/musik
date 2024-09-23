import popImg from '../assets/Imgs/CategoriesLogo/01_categories_pop.svg';
import folkImg from '../assets/Imgs/CategoriesLogo/02_categories_folk.svg';
import instrumentalImg from '../assets/Imgs/CategoriesLogo/03_categories_instrumental.svg';
import rockImg from '../assets/Imgs/CategoriesLogo/04_categories_rock.svg';
import jazzImg from '../assets/Imgs/CategoriesLogo/05_categories_jazz.svg';



export const cardData = [
  {
    img: popImg, // Directly assign the image
    heading: "Pop",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "#fbf3e8", // Replace with the actual color (in HEX, RGB, or named)
  },
  {
    img: folkImg,
    heading: "Folk",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "#ffeeee", // Replace with the actual color
  },
  {
    img: instrumentalImg,
    heading: "Instrumental",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "#381ddb", // Replace with the actual color
  },
  {
    img: rockImg,
    heading: "Rock",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "#f9e5f5", // Replace with the actual color
  },
  {
    img: jazzImg,
    heading: "Jazz",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "#f3f9ff", // Replace with the actual color
  },
];

export const tabs = [
  { day: 'Day 01', date: '16 August', active: true },
  { day: 'Day 02', date: '17 August', active: false },
  { day: 'Day 03', date: '18 August', active: false },
]