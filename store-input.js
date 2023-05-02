const form = document.querySelector('#input-form');
const input = document.querySelector('#user-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'store-input.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log('Input stored successfully!');
    }
  }

  xhr.send(`text=${text}`);
});
