const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.box-container');
const scroll = document.querySelector('.scroll');
console.log(container);

const links = [
  'https://silvesterspath.github.io/Full-stack-MERN/',
  'https://silvesterspath.github.io/Full-stack-MEAN/',
  'https://silvesterspath.github.io/Web-Speech/',
  'https://silvesterspath.github.io/SpeedTyper/',
  'https://silvesterspath.github.io/Infinite-Blog/',
  'https://silvesterspath.github.io/Expense-Tracker/',
  'https://silvesterspath.github.io/Meal-Finder/',
  'https://silvesterspath.github.io/Landing-Page/',
  'https://silvesterspath.github.io/github_finder/',
  /* 'https://silvesterspath.github.io/MovieTime/', */
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
  'https://silvesterspath.github.io/Rotating-Clock/',
  'https://silvesterspath.github.io/Ripple-Effect/',
  'https://silvesterspath.github.io/Drag-and-Drop/',
  'https://silvesterspath.github.io/Exchange-Rate-Calculator/',
  'https://silvesterspath.github.io/Drawing-App/',
  'https://silvesterspath.github.io/DOM-Array-Methods/',
  '',
];

const images = [
  './img/full-stack.png',
  './img/mean_stack.png',
  './img/webspeech.png',
  './img/speedtyper.png',
  './img/blog.png',
  './img/expenses.png',
  './img/meal.png',
  './img/landing.png',
  './img/github_finder.png',
  /* './img/movie.png', */
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
  './img/clock.png',
  './img/ripple.png',
  './img/dragdrop.png',
  './img/exchange.png',
  './img/drawing.png',
  './img/methods.png',
  './img/inprogress.jpg',
];

const texts = [
  'Full-Stack MERN',
  'Full-Stack MEAN',
  'Say My Words',
  'Beat the Time',
  'Infinite Blog',
  'Your Expenses',
  'Find Your Meal',
  'Your Landing Page',
  'Gihub Finder',
  /* 'Find Your Movies', */
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
  'Needle Clock',
  'Ripple Effect',
  'Drag & Drop',
  'Exchange Rate Calc',
  'Draw Your Circles!',
  'Array Methods',
  'Coming soon...',
];

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 2;
  let count = 0;

  boxes.forEach((i, index) => {
    i.style.backgroundImage = `url(${images[index]})`;
    i.style.backgroundSize = 'contain';

    i.setAttribute('href', `${links[index]}`);
    i.innerHTML = `<h3 >${texts[index]}</h3>`;
    const boxTop = i.getBoundingClientRect().top;

    if (boxTop < trigger) {
      i.classList.add('show');
      count++;
    } else {
      i.classList.remove('show');
      count--;
    }
    if (count > 9) {
      scroll.children[3].style.visibility = 'hidden';
      scroll.children[1].style.visibility = 'visible';
    } else {
      scroll.children[3].style.visibility = 'visible';
      scroll.children[1].style.visibility = 'hidden';
    }
  });
}
