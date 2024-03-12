const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.box-container');
const scroll = document.querySelector('.scroll');
console.log(container);

const links = [
  /* 'https://silvesterspath.github.io/Countdown/', */
  'https://oscars-2024.vercel.app/',
  /* 'https://silvesterspath.github.io/spar-some-bucks/', */
  'https://silvesterspath.github.io/HoverBoard/',
  'https://silvesterspath.github.io/Full-stack-MERN/',
  /* 'https://silvesterspath.github.io/Full-stack-MEAN/', */
  'https://silvesterspath.github.io/Web-Speech/',
  'https://silvesterspath.github.io/MovieTime/',
  'https://silvesterspath.github.io/Relaxer/',
  'https://silvesterspath.github.io/Music/',
  'https://silvesterspath.github.io/Meal-Finder/',
  'https://silvesterspath.github.io/Lyrics/',
  'https://silvesterspath.github.io/Landing-Page/',
  'https://silvesterspath.github.io/DragList/',
  'https://silvesterspath.github.io/Rotating-Clock/',
  'https://silvesterspath.github.io/Exchange-Rate-Calculator/',
  'https://silvesterspath.github.io/Memory-Cards/',
  'https://silvesterspath.github.io/SpeedTyper/',
  'https://silvesterspath.github.io/Infinite-Blog/',
  /* 'https://silvesterspath.github.io/Expense-Tracker/', */
  'https://silvesterspath.github.io/github_finder/',
  'https://silvesterspath.github.io/Book-My-Movie/',
  'https://silvesterspath.github.io/Incrementing-Counter/',
  'https://silvesterspath.github.io/Animated-Navigation/',
  'https://silvesterspath.github.io/Random-Picker/',
  'https://silvesterspath.github.io/How-many-Drinks/',
  'https://silvesterspath.github.io/FAQ-Collapse/',
  'https://silvesterspath.github.io/Progress-steps/',
  'https://silvesterspath.github.io/Blurry-loading/',
  'https://silvesterspath.github.io/Wave-Effect/',
  'https://silvesterspath.github.io/Event-keyCodes/',
  /* 'https://silvesterspath.github.io/Ripple-Effect/', */
  'https://silvesterspath.github.io/Drag-and-Drop/',
  'https://silvesterspath.github.io/Drawing-App/',
  'https://silvesterspath.github.io/Password-Generator/',
  /* 'https://silvesterspath.github.io/DOM-Array-Methods/', */
  /* 'https://silvesterspath.github.io/Sticky-Navbar/', */
  '',
];

const images = [
  /* './img/halloween.png', */
  './img/oscars.png',
  /* './img/spar.png', */
  './img/hover.png',
  './img/full-stack.png',
  /* './img/mean_stack.png', */
  './img/webspeech.png',
  './img/movie.png',
  './img/breathe.png',
  './img/music.png',
  './img/meal.png',
  './img/lyrics.png',
  './img/landing.png',
  './img/draglist.png',
  './img/clock.png',
  './img/exchange.png',
  './img/memory.png',
  './img/speedtyper.png',
  './img/blog.png',
  /* './img/expenses.png', */
  './img/github_finder.png',
  './img/BookMyMovie.png',
  './img/counter.png',
  './img/animated_nav.png',
  './img/random_choice.png',
  './img/drink_water.png',
  './img/faq.png',
  './img/steps.png',
  './img/blurry.png',
  './img/login.png',
  './img/keycode.png',
  /* './img/ripple.png', */
  './img/drag.png',
  './img/drawing.png',
  './img/password.png',
  /* './img/methods.png', */
  /* './img/sticky.png', */
  './img/inprogress.jpg',
];

const texts = [
  /* 'Be afraid...', */
  'Vote for the oscars',
  /* "Spar'o bucks", */
  'Hover over...',
  'Full-Stack MERN',
  /* 'Full-Stack MEAN', */
  'Say My Words',
  'Find Your Movies',
  'Relax Your Body..',
  'Play My Music',
  'Find Your Meal',
  'Search For Lyrics',
  'Your Landing Page',
  'Guess the Ranking',
  'Needle Clock',
  'Exchange Rate Calc',
  'Train Your Memory...',
  'Beat the Time',
  'Infinite Blog',
  /* 'Your Expenses', */
  'Gihub Finder',
  'Book My Movie',
  'Incrementing Counter',
  'Animated Navigation',
  'Random Choice Picker',
  'How many Drinks?',
  'FAQ',
  'Progress Steps',
  'Blurry Loading',
  'Wave Login',
  'KeyCodes',
  /* 'Ripple Effect', */
  'Drag & Drop',
  'Draw Your Circles!',
  'Generate Passwords',
  /* 'Array Methods', */
  /* 'Glue My Navbar', */
  'Coming soon...',
];

window.addEventListener('scroll', checkBoxes);

console.log(images.length);

checkBoxes();

function checkBoxes() {
  const trigger = 380;
  let count = 0;

  boxes.forEach((i, index) => {
    i.style.backgroundImage = `url(${images[index]})`;
    i.style.backgroundSize = 'contain';

    i.setAttribute('href', `${links[index]}`);
    i.innerHTML = `<h3 >${texts[index]}</h3>`;
    const boxTop = i.getBoundingClientRect().top;
    console.log(boxTop);

    if (boxTop < trigger) {
      i.classList.add('show');
      count++;
    } else {
      i.classList.remove('show');
      count--;
    }

    if (count > images.length) {
      i.classList.remove('show');
    }

    if (count > images.length - 3) {
      scroll.children[3].style.visibility = 'hidden';
      scroll.children[1].style.visibility = 'visible';
    } else {
      scroll.children[3].style.visibility = 'visible';
      scroll.children[1].style.visibility = 'hidden';
    }
  });
}
