/* global data */

console.log(data);

const $imgInput = document.querySelector('#photo-url');
const $img = document.querySelector('#entry-img');

function handler(event) {
  $img.removeAttribute('src');
  $img.setAttribute('src', event.target.value);
}

$imgInput.addEventListener('input', handler);
