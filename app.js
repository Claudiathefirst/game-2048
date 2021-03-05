document.addEventListener('DOMContentLoaded', () => {
  //DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built!
  const gridDisplay = document.querySelector('.grid');
  const scoreDisplay = document.getElementById('score');
  const resultDisplay = document.getElementById('result');
  const width = 4;
  let cells = width * width;
  let squares = [];
  //generate number randomly
  const generate = () => {
    //random num based on the num items in squares arr
    //round down to nearest integer
    let randomNumber = Math.floor(Math.random() * squares.length);
    if (
      squares[randomNumber].innerHTML === 0 ||
      squares[randomNumber].innerHTML === '0'
    ) {
      squares[randomNumber].innerHTML = 2;
    } else generate();
  };
  //create game board
  const createBoard = () => {
    //iterate as long as i is < than num of boxes
    for (let i = 0; i < cells; i++) {
      square = document.createElement('div');
      //gets or sets the HTML contained within the element.
      square.innerHTML = 0;
      //for every square we create with innerHtml of zero put in grid
      gridDisplay.appendChild(square);
      //push each newly created square w/innerHtml of 0 into squares arr
      squares.push(square);
    }
    //generate two 2's
    generate();
    generate();
  };
  createBoard();

  //swipe right
  const moveRight = () => {
    for (let i = 0; i < cells; i++) {
      if (i % 4 === 0) {
      }
    }
  };
});
