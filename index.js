var activity = document.querySelector('body');
var exampleLink = document.createElement('button');

exampleLink.setAttribute('class', 'btn btn-primary');
exampleLink.textContent = 'Button';

// activity.appendChild(exampleLink);
activity.appendChild(createCarousel());

function createCarousel() {
  var carouselDiv = document.createElement('div');
  carouselDiv.setAttribute('class', 'carousel slide');
  carouselDiv.setAttribute('data-ride', 'carousel');

  // Carousel inner
  var carouselInnerDiv = document.createElement('div');
  carouselInnerDiv.setAttribute('class', 'carousel-inner');

  // First image
  var carouselItemDiv = document.createElement('div');
  carouselItemDiv.setAttribute('class', 'carousel-item active');  
  carouselInnerDiv.appendChild(carouselItemDiv);

  var firstImage = document.createElement('img');
  firstImage.setAttribute('class', 'd-block w-100');
  firstImage.setAttribute('src', 'images/fox1.jpg');
  firstImage.setAttribute('alt', 'first');
  carouselItemDiv.appendChild(firstImage);

  carouselDiv.appendChild(carouselInnerDiv);

  // Second image
  var carouselItemDiv2 = document.createElement('div');
  carouselItemDiv2.setAttribute('class', 'carousel-item');
  carouselInnerDiv.appendChild(carouselItemDiv2);

  var secondImage = document.createElement('img');
  secondImage.setAttribute('class', 'd-block w-100');
  secondImage.setAttribute('src', 'images/fox2.jpg');
  secondImage.setAttribute('alt', 'second');
  carouselItemDiv2.appendChild(secondImage);

  carouselDiv.appendChild(carouselInnerDiv);

  return carouselDiv;
}
