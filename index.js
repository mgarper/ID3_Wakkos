document.querySelector('.modal').card.style.display = 'none';

document.querySelector('#modal--selector').addEventListener('click', () => {
  document.querySelector('.modal').card.style.display = 'block'
})

document.querySelector('.modal .btn--secondary').addEventListener('click', function() {
  document.querySelector('.modal').card.style.display = 'none';
});

document.querySelector('.modal .btn--primary').addEventListener('click', function() {
    let modal = document.querySelector('.modal');
    modal.innerHTML = '<h1>Course completed</h1><p>All attenders will soon be notified</p>';
});