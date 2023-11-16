/* global data */

const $imgInput = document.querySelector('#photo-url');
const $img = document.querySelector('#entry-img');
const $formSubmit = document.querySelector('#entry-form');
const $ul = document.querySelector('ul');
const $entry = document.querySelector('.entry');
const $entryForm = document.querySelector('.entryForm');
const $noEntry = document.querySelector('#noEntry');
const $entriesView = document.querySelector('#entries');
const $entryFormView = document.querySelector('#entryForm');
const $formTitle = document.querySelector('#entry-form h1');

$formSubmit.addEventListener('submit', handleSubmit);
$imgInput.addEventListener('input', handleImage);
document.addEventListener('DOMContentLoaded', handleContent);
$entry.addEventListener('click', function () {
  viewSwap('entries');
});
$entryForm.addEventListener('click', function () {
  viewSwap('entryForm');
});
$ul.addEventListener('click', handleEdit);

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
  $ul.prepend(renderEntry(entryValues));
  toggleNoEntries();
  viewSwap('entries');
}

function renderEntry(entry) {
  const $li = document.createElement('li');
  const $row = document.createElement('div');
  const $columnHalfImg = document.createElement('div');
  const $imgEntry = document.createElement('img');
  const $columnHalfText = document.createElement('div');
  const $flexColumn = document.createElement('div');
  const $div = document.createElement('div');
  const $h3 = document.createElement('h3');
  const $p = document.createElement('p');
  const $i = document.createElement('i');

  $li.setAttribute('data-entry-id', entry.entryId);
  $row.className = 'row';
  $columnHalfImg.className = 'column-half padding-zero';
  $imgEntry.className = 'column-full padding-zero entry-img';
  $imgEntry.setAttribute('src', entry.image);
  $columnHalfText.className = 'column-half';
  $flexColumn.className = 'flex-direction-column';
  $div.className = 'display-flex icon-space';
  $h3.innerText = entry.title;
  $i.className = 'fa fa-pencil editor';
  $p.innerText = entry.note;

  $li.appendChild($row);
  $row.appendChild($columnHalfImg);
  $columnHalfImg.appendChild($imgEntry);
  $row.appendChild($columnHalfText);
  $columnHalfText.appendChild($flexColumn);
  $flexColumn.appendChild($div);
  $div.appendChild($h3);
  $div.appendChild($i);
  $columnHalfText.appendChild($flexColumn);
  $flexColumn.appendChild($p);

  return $li;
}

function handleContent(event) {
  toggleNoEntries();
  viewSwap(data.view);
  for (let i = 0; i < data.entries.length; i++) {
    $ul.appendChild(renderEntry(data.entries[i]));
  }
}

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntry.classList.remove('hidden');
  } else {
    $noEntry.setAttribute('class', 'hidden');
  }
}

function viewSwap(view) {
  if (view === 'entries') {
    $entriesView.classList.remove('hidden');
    $entryFormView.className = 'hidden';
    data.view = view;
  } else if (view === 'entryForm') {
    $entryFormView.classList.remove('hidden');
    $entriesView.className = 'hidden';
    data.view = view;
  }
}

function handleEdit(entry) {
  viewSwap('entryForm');
  const $getData = entry.target.closest('li').getAttribute('data-entry-id');
  data.editing = data.entries[data.entries.length - $getData];
  $formTitle.innerText = 'Edit Entry';

  $formSubmit.elements.title.value = data.editing.title;
  $img.setAttribute('src', data.editing.image);
  $formSubmit.elements.photo.value = data.editing.image;
  $formSubmit.elements.notes.value = data.editing.note;
}
