/* global data */

console.log(data);

const $imgInput = document.querySelector('#photo-url');
const $img = document.querySelector('#entry-img');

function handleImage(event) {
  $img.setAttribute('src', event.target.value);
}

$imgInput.addEventListener('input', handleImage);

const $formSubmit = document.querySelector('#entry-form');
$formSubmit.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const entryValues = {
    title: $formSubmit.elements.title.value,
    image: $formSubmit.elements.photo.value,
    note: $formSubmit.elements.notes.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.push(entryValues);
  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  $formSubmit.reset();
}
