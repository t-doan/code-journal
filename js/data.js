/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function () {
  const dataJSON = JSON.stringify(data);
  this.localStorage.setItem('code-journal', dataJSON);
});

const previousDataJSON = localStorage.getItem('code-journal');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
