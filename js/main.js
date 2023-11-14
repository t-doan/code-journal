/* global data */

const $imgInput = document.querySelector('#photo-url');
const $img = document.querySelector('#entry-img');
const $formSubmit = document.querySelector('#entry-form');

$formSubmit.addEventListener('submit', handleSubmit);
$imgInput.addEventListener('input', handleImage);

function handleImage(event) {
  $img.setAttribute('src', event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();

  const entryValues = {
    title: $formSubmit.elements.title.value,
    image: $formSubmit.elements.photo.value,
    note: $formSubmit.elements.notes.value,
    entryId: data.nextEntryId,
  };

  data.nextEntryId++;
  data.entries.unshift(entryValues);
  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  $formSubmit.reset();
}
