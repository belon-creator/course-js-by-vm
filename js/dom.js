const heading = document.getElementById('title');
const heading2 = document.querySelector('.h2-class');
const text = document.querySelector('.txt');
console.dir(heading);

setTimeout(() => {
  addStylesTo(heading, 'js', 'yellow');
}, 1000);

setTimeout(() => {
  addStylesTo(heading2, 'learn it', 'red');
}, 2000);

setTimeout(() => {
  addStylesTo(text.children[0], 'this is cool', 'teal', '20px');
}, 3000);

function addStylesTo(node, text, color = 'blue', fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = 'center';
  node.style.backgroundColor = 'blue';
  node.style.padding = '20px';
  node.style.display = 'block';
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  if (heading.style.color === 'yellow') {
    heading.style.color = 'blue';
    heading.style.backgroundColor = 'yellow';
  } else {
    heading.style.color = 'yellow';
    heading.style.backgroundColor = 'blue';
  }
};

heading2.addEventListener('dblclick', () => {
  if (heading2.style.color === 'yellow') {
    heading2.style.color = 'blue';
    heading2.style.backgroundColor = 'yellow';
  } else {
    heading2.style.color = 'yellow';
    heading2.style.backgroundColor = 'blue';
  }
});
