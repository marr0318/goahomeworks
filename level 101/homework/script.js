
const parent1 = document.createElement('div');
    parent1.style.border = '1px solid black';
    parent1.style.padding = '10px';
    parent1.innerText = 'parent';

    const child1 = document.createElement('span');
    child1.innerText = 'child';

    parent1.appendChild(child1);
    document.getElementById('task1').appendChild(parent1);

    const parentDiv = document.getElementById('parent-div');
    const childP = document.getElementById('child-p');
    parentDiv.removeChild(childP);

    const btn = document.getElementById('hoverBtn');
    btn.onmouseover = function () {
      console.log(5);
    };
    btn.onmouseout = function () {
      console.log(10);
    };

    const replaceDiv = document.getElementById('replaceDiv');
    const oldBtn = document.getElementById('oldButton');
    const newPara = document.createElement('p');
    newPara.textContent = 'new p';

    replaceDiv.replaceChild(newPara, oldBtn);