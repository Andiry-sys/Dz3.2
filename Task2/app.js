document.addEventListener('click', look);
function look(e) {
  if (e.target.className == 'main') {
    let param = e.target.children[0];
    param.style.display = param.style.display === 'none' ? 'block' : 'none';
  }
}
function look(type) {
  let param = document.getElementById(type);
  param.style.display = param.style.display === 'none' ? 'block' : 'none';
}
