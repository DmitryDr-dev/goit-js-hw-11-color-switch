import { colors } from './data/arr.js';

class ColorSwitch {
  constructor(array) {
    this.startBtn = document.querySelector('[data-action = "start"]');
    this.stopBtn = document.querySelector('[data-action = "stop"]');
    this.body = document.body;
    this.intervalId = null;
    this.array = array;
  }

  randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  onStart() {
    this.intervalId = setInterval(this.switchColor.bind(this), 1000);
    this.startBtn.disabled = true;
  }

  onStop() {
    clearInterval(this.intervalId);
    this.startBtn.disabled = false;
  }

  switchColor() {
    this.body.style.backgroundColor =
      this.array[this.randomIntegerFromInterval(0, this.array.length - 1)];
  }

  addEventListeners() {
    this.startBtn.addEventListener('click', this.onStart.bind(this));
    this.stopBtn.addEventListener('click', this.onStop.bind(this));
  }
}

const colorSwitch = new ColorSwitch(colors);

colorSwitch.addEventListeners();

// const refs = {
//   body: document.querySelector('body'),
//   startBtn: document.querySelector('[data-action = "start"]'),
//   stopBtn: document.querySelector('[data-action = "stop"]'),
// };

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let intervalId = null;

// const onStart = function () {
//   intervalId = setInterval(switchColor, 1000);
//   refs.startBtn.disabled = true;
// };
// const onStop = function () {
//   clearInterval(intervalId);
//   refs.startBtn.disabled = false;
// };
// const switchColor = function () {
//   refs.body.style.backgroundColor =
//     colors[randomIntegerFromInterval(0, colors.length - 1)];

//   console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
// };

// refs.startBtn.addEventListener('click', onStart);
// refs.stopBtn.addEventListener('click', onStop);
