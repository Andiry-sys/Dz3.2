function bookList(e, n) {
  let bs = document.getElementById('BookList');
  let book = document.getElementById('list' + n);
  let li = bs.getElementsByTagName('li');

  if (e.ctrlKey) {
    if (book.style.backgroundColor == 'orange')
      book.style.backgroundColor = 'inherit';
    else book.style.backgroundColor = 'orange';
    return;
  }
  for (b of li) {
    b.style.backgroundColor = 'inherit';
  }
  book.style.backgroundColor = 'orange';

  if (e.ShiftKey) {
    if (book.style.backgroundColor == 'orange') {
      for (b of li) {
        if (book.style.backgroundColor == 'inherit')
          b.style.backgroundColor = 'orange';
        esle;
        return;
      }
    }
  }
}
