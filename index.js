let card = document.querySelector('.modal')
card.style.display = 'none'

setTimeout(() => {
  card.style.display = 'block'
}, 3000)

document.querySelector('.btn--secondary').addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'none';
});

document.querySelector('.btn--primary').addEventListener('click', function() {
    let modal = document.querySelector('.modal');
    modal.className = 'modal modal--fullscreen'
    modal.innerHTML = '<h1>Course completed</h1><p>All attenders will soon be notified</p>';
});