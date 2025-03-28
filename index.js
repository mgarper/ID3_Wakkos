document.querySelector('.modal').style.display = 'none';

document.querySelector('#modal--button').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'block'
})

document.querySelector('.modal__buttons .btn--secondary').addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'none';
  console.log('Modal closed');
});

document.querySelector('.modal__buttons .btn--primary').addEventListener('click', function() {
    let modal = document.querySelector('.modal');
    modal.innerHTML = '<h1>Course completed</h1><p>All attenders will soon be notified</p>';
});