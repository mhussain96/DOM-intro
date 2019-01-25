document.addEventListener("DOMContentLoaded", function() { // takes 2 arguments: name of listener and function

  // change the style of an element 
  const greeting = document.getElementById('greeting');
  console.log(greeting);
  greeting.style.color = '#23456f';

  // create an element
  const paragraph = document.createElement('p');
  paragraph.innerText = "Making elements with javascript is awesome!";
  paragraph.style.fontFamily = 'Arial';
  paragraph.setAttribute('class', 'pTag') // attribute name & attribute value
  console.log(paragraph);

  // append to body
  const body = document.getElementsByTagName('body'); // body is an element and the getElements returns us an array of one thing, the body. Declares the body don't reuse.
  console.log(body);
  body[0].appendChild(paragraph);

  // create an image and append to body 
  const image = document.createElement('img');
  image.setAttribute('src', 'http://fillmurray.com/500/400');
  image.addEventListener("mouseover", function(e) { 
    console.log(e.target); // target is where we do our css
    event.target.style.transform = 'scale(1.2)';
    event.target.style.filter = 'drop-shadow(2px 5px 8px)'; 
  })  
  image.addEventListener("mouseleave", function(e) { 
    console.log(e.target); // target is where we do our css
    event.target.style.transform = 'scale(1)'; 
  })
  console.log(image);
  image.style.border = '5px solid blue';
  
  body[0].appendChild(image);

  // create a <ul> with dynamically generated <li>'s
  const unordered = document.createElement('ul');
  unordered.setAttribute('id', 'unorderedID');
  console.log(unordered);

  body[0].appendChild(unordered);

  for (let i = 0; i < 5; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = `value is : ${i}`;
    unordered.appendChild(listItem);
    // ternery operator : (conditional) ?=if :=else
    (i % 2 === 1) ? listItem.style.color = 'blue' : listItem.style.color = randomColor();


  }
  
  function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }


}) // END DOMCONTENTLOADED