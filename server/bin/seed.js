require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = `${process.env.DATABASE}`;
console.log(dbName);

mongoose
  .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: 9.3,
    image_url: "https://www.inspirationdb.com/wp-content/uploads/2016/06/The-Shawshank-Redemption-200x200.jpg"
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
    image_url:"https://images-eu.ssl-images-amazon.com/images/I/41+CVQ1WsdL._AC_US200_.jpg"
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rate: 9.0,
    image_url:"http://e-cdn-images.deezer.com/images/cover/106df58fc3617f5ba47f9631e3a8abc4/200x200-000000-80-0-0.jpg"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: 9.0,
    image_url: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/6794_200x200.jpg"
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    rate: 8.9,
    image_url:"https://dcmetrotheaterarts.com/wp-content/uploads/2014/11/DCMetroArts-Square-12-Angry-Men-copy1.jpg"
  },
  {
    title: "Schindler\"s List",
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rate: 8.9,
    image_url: "https://www.amoeba.com/admin/uploads/buy_stuff_here//schindler'slistsoundtrack.jpg"
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    rate: 8.9,
    image_url: "https://images-na.ssl-images-amazon.com/images/I/61xlC7e0AZL._SX198_BO1,204,203,200_QL40_.jpg"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: 8.9,
    image_url: "https://e-cdns-images.dzcdn.net/images/cover/04f1a638c9439710eab849c508510766/200x200-000000-80-0-0.jpg"
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Sergio Leone",
    duration: "3h 2min",
    genre: ["Western"],
    rate: 8.9,
    image_url: "https://upload.wikimedia.org/wikipedia/sq/9/99/Buono%2C_il_brutto%2C_il_cattivo.jpg"
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    rate: 8.8,
    image_url: "http://images-cf.localist.com/photos/268373/big_square/838544343e31b203ca8e60a9e46f59ebd648f40b.jpg"
  }
  
];


Movie.create(movies)
.then(movieInserted => {
  console.log(`Created ${movieInserted.length} movies`);
  mongoose.connection.close();
})
.catch(err => {
  console.log(err)
}) 