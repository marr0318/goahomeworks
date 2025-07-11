
const button = document.getElementById('clickBtn');
    const paragraph = document.getElementById('textParagraph');
    button.addEventListener('click', function () {
      paragraph.textContent = 'button clicked!';
    });

    const colorDiv = document.getElementById('colorDiv');
    colorDiv.addEventListener('pointerover', function () {
      colorDiv.style.backgroundColor = 'green';
    });
    colorDiv.addEventListener('pointerout', function () {
      colorDiv.style.backgroundColor = 'white';
    });

    const image = document.getElementById('mainImage');
    image.addEventListener('click', function () {
      image.style.width = '300px';
    });

    const heading = document.getElementById('mainHeading');
    heading.addEventListener('pointerover', function () {
      console.log('Mouse is here!');
    })
    



    