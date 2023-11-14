/* global data */

const $imgInput = document.querySelector('#photo-url');
const $img = document.querySelector('#entry-img');
const $formSubmit = document.querySelector('#entry-form');
const $ul = document.querySelector('ul');

$formSubmit.addEventListener('submit', handleSubmit);
$imgInput.addEventListener('input', handleImage);
document.addEventListener('DOMContentLoaded', handleContent);

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

function renderEntry(entry) {
  const $li = document.createElement('li');
  const $row = document.createElement('div');
  const $columnHalfImg = document.createElement('div');
  const $imgEntry = document.createElement('img');
  const $columnHalfText = document.createElement('div');
  const $flexColumn = document.createElement('div');
  const $h3 = document.createElement('h3');
  const $p = document.createElement('p');

  $row.className = 'row';
  $columnHalfImg.className = 'column-half padding-zero';
  $imgEntry.className = 'column-full padding-zero entry-img';
  $imgEntry.setAttribute('src', entry.image);
  $columnHalfText.className = 'coiumn-half';
  $flexColumn.className = 'flex-direction-column';
  $h3.innerText = entry.title;
  $p.innerText = entry.note;

  $li.appendChild($row);
  $row.appendChild($columnHalfImg);
  $columnHalfImg.appendChild($imgEntry);
  $row.appendChild($columnHalfText);
  $columnHalfText.appendChild($flexColumn);
  $flexColumn.appendChild($h3);
  $columnHalfText.appendChild($flexColumn);
  $flexColumn.appendChild($p);

  return $li;
}

function handleContent(event) {
  for (let i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
}
