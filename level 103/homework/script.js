const counter = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

incrementButton.addEventListener('click', function() {
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
});
const myImage = document.getElementById('myImage');
myImage.addEventListener('mouseover', function() {
    myImage.style.width = '200px';
    myImage.style.height = '200px';
});

myImage.addEventListener('mouseout', function() {
    myImage.style.width = '150px';
    myImage.style.height = '150px';
});

const hoverParagraph = document.getElementById('hoverParagraph');
const newElement = document.getElementById('newElement');
hoverParagraph.addEventListener('mouseover', function() {
    newElement.style.display = 'block';
});
hoverParagraph.addEventListener('mouseout', function() {
    newElement.style.display = 'none';
});

const colorBox = document.getElementById('colorBox');

colorBox.addEventListener('mousedown', function() {
    colorBox.style.backgroundColor = 'blue';
});

colorBox.addEventListener('mouseup', function() {
    colorBox.style.backgroundColor = 'white';
});

const toggleParagraph = document.getElementById('toggleParagraph');
const hiddenElement = document.getElementById('hiddenElement');

toggleParagraph.addEventListener('click', function() {
    if (hiddenElement.style.display === 'none') {
            hiddenElement.style.display = 'block';
    } else {
                hiddenElement.style.display = 'none';
            }
});

const addElementButton = document.getElementById('addElementButton');
const elementContainer = document.getElementById('elementContainer');
addElementButton.addEventListener('click', function() {
    const newElement = document.createElement('div');
        newElement.textContent = 'New Element';
            elementContainer.appendChild(newElement);
});

const hover = document.getElementById('hoverParagraph');
const replacementParagraph = document.getElementById('replacementParagraph');

hover.addEventListener('mouseover', function() {
    hover.style.display = 'none';
        replacementParagraph.style.display = 'block';
});

replacementParagraph.addEventListener('mouseout', function() {
    replacementParagraph.style.display = 'none';
        hover.style.display = 'block';
});