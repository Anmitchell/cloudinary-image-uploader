require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const images = [
  {
    directory: './images/mern-cafe.png',
    pub_id: 'mern-cafe',
  },
  {
    directory: './images/movies.png',
    pub_id: 'movies',
  },
  {
    directory: './images/space-invaders.png',
    pub_id: 'space-invaders',
  },
];

for (image of images) {
  cloudinary.uploader.upload(
    image.directory,
    { public_id: image.pub_id },
    function (error, result) {
      console.log(result);
    }
  );
}

// cloudinary.uploader.upload(
//   './images/space-invaders.png',
//   { public_id: 'space-invaders' },
//   function (error, result) {
//     console.log(result);
//   }
// );

// (async function run() {
//   for (const image of images) {
//     const result = await cloudinary.uploader.upload(image).then((result) => {
//       console.log(result);
//     });
//     console.log(`Successfully uploaded ${image}`);
//     console.log(`> Result: ${result.secure_url}`);
//   }
// });
