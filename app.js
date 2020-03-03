const btn = document.querySelectorAll('button');
const slider = document.querySelector('.slider');

const arr = [
  'https://images.pexels.com/photos/2111986/pexels-photo-2111986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2302641/pexels-photo-2302641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2126967/pexels-photo-2126967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2876745/pexels-photo-2876745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1537473/pexels-photo-1537473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2132639/pexels-photo-2132639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
];

let i = 0;

btn.forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.className === 'right') {
      i++;
      if (i === arr.length) {
        i = 0;
        slider.style.backgroundImage = `url(${arr[i]})`;
      }
      slider.style.backgroundImage = `url(${arr[i]})`;
    }

    if (btn.className === 'left') {
      i--;
      if (i < 0) {
        i = arr.length - 1;
      }
      slider.style.backgroundImage = `url(${arr[i]})`;
    }
  });
});
