import "./style.css"; // Import CSS styles 

console.log('hello world')

const content = document.getElementById('content');
const tester = document.createElement('p');
tester.textContent = 'Hello, this is a test';
content.appendChild(tester);