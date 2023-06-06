
import img1 from "./assets/post/1.jpeg"
import img2 from "./assets/post/2.jpeg"
import img3 from "./assets/post/3.jpeg"
import img4 from "./assets/post/4.jpeg"
import pimg1 from "./assets/person/1.jpeg"
import pimg2 from "./assets/person/2.jpeg"
import pimg3 from "./assets/person/3.jpeg"
import pimg4 from "./assets/person/4.jpeg"


export const Users = [
  {
    id: 1,
    profilePicture: pimg1,

    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    // profilePicture: "assets/person/2.jpeg",
    profilePicture: pimg2,
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: pimg3,
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: pimg4,
    username: "Dora Hawks",
  },

];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    // photo: "assets/post/1.jpeg",
    photo: img1,
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    // photo: "assets/post/2.jpeg",
    photo: img2,
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    // photo: "assets/post/3.jpeg",
    photo: img3,
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    // photo: "assets/post/4.jpeg",
    photo: img4,

    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },


];
