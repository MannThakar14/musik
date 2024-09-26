import popImg from "../assets/imgs/categories_logo/01_categories_pop.svg";
import folkImg from "../assets/imgs/categories_logo/02_categories_folk.svg";
import instrumentalImg from "../assets/imgs/categories_logo/03_categories_instrumental.svg";
import rockImg from "../assets/imgs/categories_logo/04_categories_rock.svg";
import jazzImg from "../assets/imgs/categories_logo/05_categories_jazz.svg";

// Sponsors
import sponsorOne from "../assets/imgs/sponsors_imgs/01_sponsor_company.png";
import sponsorTwo from "../assets/imgs/sponsors_imgs/02_sponsor_company.png";
import sponsorThree from "../assets/imgs/sponsors_imgs/03_sponsor_company.png";
import sponsorFour from "../assets/imgs/sponsors_imgs/04_sponsor_company.png";
import sponsorFive from "../assets/imgs/sponsors_imgs/05_sponsor_company.png";
import sponsorSix from "../assets/imgs/sponsors_imgs/06_sponsor_company.png";
import sponsorSeven from "../assets/imgs/sponsors_imgs/07_sponsor_company.png";
import sponsorEight from "../assets/imgs/sponsors_imgs/08_sponsor_company.png";

//concert_imgs images
import concert_imgsOne from "../assets/imgs/concert_imgs/01_concert.png";
import concert_imgsTwo from "../assets/imgs/concert_imgs/02_concert.png";
import concert_imgsThree from "../assets/imgs/concert_imgs/03_concert.png";


export const NAV_LINKS = [
  {name: "HOME", link: "/"},
  {name: "SPEAKERS", link: "/"},
  {name: "SCHEDULE", link: "/"},
  {name: "CONTACT US", link: "/"},
]




export const cardData = [
  {
    img: popImg, // Directly assign the image
    heading: "Pop",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "bg-[#fbf3e8]", 
  },
  {
    img: folkImg,
    heading: "Folk",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "bg-[#ffeeee]", // Replace with the actual color
  },
  {
    img: instrumentalImg,
    heading: "Instrumental",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "bg-[#381ddb]", // Replace with the actual color
  },
  {
    img: rockImg,
    heading: "Rock",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "bg-[#f9e5f5]", // Replace with the actual color
  },
  {
    img: jazzImg,
    heading: "Jazz",
    description:
      "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
    color: "bg-[#f3f9ff]",
  },
];

export const tabs = [
  { day: "Day 01", date: "16 August", active: true },
  { day: "Day 02", date: "17 August", active: false },
  { day: "Day 03", date: "18 August", active: false },
];

export const plans = [
  {
    heading: "Basic",
    price: "$100",
    subHeadingOne: true,
    subHeadingTwo: false,
    subHeadingThree: false,
    bgColor: "bg-[#222222]",
    textColor:"text-[#222222]",
  },
  {
    heading: "Standard",
    price: "$150",
    subHeadingOne: true,
    subHeadingTwo: true,
    subHeadingThree: false,
    bgColor: "bg-[#381DDB]",
    textColor:"text-[#381DDB]",
  },
  {
    heading: "Premium",
    price: "$200",
    subHeadingOne: true,
    subHeadingTwo: true,
    subHeadingThree: true,
    bgColor: "bg-[#FC5252]",
    textColor:"text-[#FC5252]",
  },
];

export const sponsorsImages = [
  sponsorOne,
  sponsorTwo,
  sponsorThree,
  sponsorFour,
  sponsorFive,
  sponsorSix,
  sponsorSeven,
  sponsorEight,
];

export const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Ellie James",
    website: "lorem.com",
    image: "/api/placeholder/100/100",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    name: "Johnny Doe",
    website: "ipsum.com",
    image: "/api/placeholder/100/100",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "Myne Barack",
    website: "ipsum.com",
    image: "/api/placeholder/100/100",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const CONCERT_DATA = [
  {
    likes: 412,
    comments: 140,
    heading: "Lorem Ipsum Amet",
    image: concert_imgsThree,
    hashtags: [
      "#music",
      "#concert_imgs",
      "#conference",
      "#london",
      "#event",
      "#artist",
      "#dj",
      "#soundtrack",
      "#dance",
    ],
  },
  {
    likes: 412,
    comments: 140,
    heading: "Lorem Ipsum Amet",
    image: concert_imgsTwo,
    hashtags: [
      "#music",
      "#concert_imgs",
      "#conference",
      "#london",
      "#event",
      "#artist",
      "#dj",
      "#soundtrack",
      "#dance",
    ],
  },
  {
    likes: 412,
    comments: 140,
    heading: "Lorem Ipsum Amet",
    image: concert_imgsThree,
    hashtags: [
      "#music",
      "#concert_imgs",
      "#conference",
      "#london",
      "#event",
      "#artist",
      "#dj",
      "#soundtrack",
      "#dance",
    ],
  },
  {
    likes: 412,
    comments: 140,
    heading: "Lorem Ipsum Amet",
    image: concert_imgsTwo,
    hashtags: [
      "#music",
      "#concert_imgs",
      "#conference",
      "#london",
      "#event",
      "#artist",
      "#dj",
      "#soundtrack",
      "#dance",
    ],
  },
  {
    likes: 412,
    comments: 140,
    heading: "Lorem Ipsum Amet",
    image: concert_imgsThree,
    hashtags: [
      "#music",
      "#concert_imgs",
      "#conference",
      "#london",
      "#event",
      "#artist",
      "#dj",
      "#soundtrack",
      "#dance",
    ],
  },
  {
    likes: 412,
    comments: 140,
    heading: "Lorem Ipsum Amet",
    image: concert_imgsThree,
    hashtags: [
      "#music",
      "#concert_imgs",
      "#conference",
      "#london",
      "#event",
      "#artist",
      "#dj",
      "#soundtrack",
      "#dance",
    ],
  },
  {
    likes: 412,
    comments: 140,
    heading: "Lorem Ipsum Amet",
    image: concert_imgsThree,
    hashtags: [
      "#music",
      "#concert_imgs",
      "#conference",
      "#london",
      "#event",
      "#artist",
      "#dj",
      "#soundtrack",
      "#dance",
    ],
  },
];


export const SCHEDULE_DATA = [
  {
    time: '11:00 AM to 12:00 PM',
    content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
    speakers: [{ name: 'Yui Ronald', booth: '2F12' }],
    status: 'Preview'
  },
  {
    time: '12:00 PM to 03:00 PM',
    content: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lectus ac rhoncus. Morbi quis luctus leo, nec cursus ex.',
    speakers: [
      { name: 'Bob John', booth: '3G12' },
      { name: 'Yui Ronald', booth: '2F12' },
      { name: 'Emma Satoshi', booth: '2A35' }
    ],
    status: 'Live'
  },
  {
    time: '03:00 PM to 04:00 PM',
    content: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
    speakers: [
      { name: 'Sasha Jackson', booth: '2F18' },
    ],
    status: 'Upcoming'
  }
];

export const FOOTER_LINKS = [
  { name: "HOME", href: "#" },
  { name: "COMPANY", href: "#" },
  { name: "BLOG", href: "#" },
  { name: "CONTACT US", href: "#" },
  { name: "SITEMAP", href: "#" },
];
