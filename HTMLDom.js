console.log(document.getElementById('heading'));

//Only Text
let heading = document.getElementById('heading').innerText;
console.log(heading);

//Query Selector
console.log(document.querySelector('ul'));
console.log(document.querySelector('.list'));
console.log(document.querySelector('li'));
console.log(document.querySelectorAll('li'));

//print Values
console.log(document.getElementsByTagName('li'));

document.getElementById('heading').innerText = 'Namaskara';

document.querySelector('ul').firstElementChild.textContent = 'Java';

document.querySelector('ul').lastElementChild.innerHTML = '<h3>Java Script</h3>';

document.querySelector('.list').style.background = 'red';