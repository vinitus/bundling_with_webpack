import './style.css';

const btn = document.querySelector('button');

btn.addEventListener('click', () => alert('hi!'));

btn.addEventListener('mouseover', () => {
  btn.style.border = 'solid 1px blue';
});

btn.addEventListener('mouseout', () => {
  btn.style.border = 'solid 1px red';
});
