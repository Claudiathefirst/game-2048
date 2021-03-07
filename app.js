document.addEventListener('DOMContentLoaded', () => {
  //DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built!
  const gridDisplay = document.querySelector('.grid');
  const scoreDisplay = document.getElementById('score');
  const resultDisplay = document.getElementById('result');
  const width = 4;
  let squares = [];

  //generate number randomly
  const generate = () => {
    //random num based on the num items in squares arr
    //round down to nearest integer
    let randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;
    } else generate();
  };
  //create game board
  const createBoard = () => {
    //iterate as long as i is < than num of boxes
    for (let i = 0; i < width * width; i++) {
      square = document.createElement('div');
      //gets or sets the HTML contained within the element.
      square.innerHTML = 0;
      //for every square we create with innerHtml of zero put in grid
      gridDisplay.appendChild(square);
      //push each newly created square w/innerHtml of 0 into squares arr
      squares.push(square);
    }
    generate();
    generate();
  };
  createBoard();

  //swipe right
  const moveRight = () => {
    for (let i = 0; i < 16; i++) {
      if (i % width === 0) {
        let cellOne = squares[i].innerHTML;
        let cellTwo = squares[i + 1].innerHTML;
        let cellThree = squares[i + 2].innerHTML;
        let cellFour = squares[i + 3].innerHTML;
        let boxes = [cellOne, cellTwo, cellThree, cellFour];
        let row = boxes.map((box) => {
          return parseInt(box);
        });
        console.log('ROWS', row);

        let filteredRow = row.filter((num) => num);
        let missing = width - filteredRow.length;
        //array constructor based on missing num array length filled with 0

        let zeros = Array(missing).fill(0);
        let newRow = zeros.concat(filteredRow); //spread operator cause

        console.log('NEW ROW', newRow);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  };

  const moveLeft = () => {
    for (let i = 0; i < 16; i++) {
      if (i % width === 0) {
        let cellOne = squares[i].innerHTML;
        let cellTwo = squares[i + 1].innerHTML;
        let cellThree = squares[i + 2].innerHTML;
        let cellFour = squares[i + 3].innerHTML;
        let boxes = [cellOne, cellTwo, cellThree, cellFour];
        let row = boxes.map((box) => {
          return parseInt(box);
        });
        console.log('ROWS', row);

        let filteredRow = row.filter((num) => num);
        let missing = width - filteredRow.length;
        //array constructor based on missing num array length filled with 0

        let zeros = Array(missing).fill(0);
        let newRow = filteredRow.concat(zeros); //spread operator cause

        console.log('NEW ROW', newRow);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  };

  const combineRow = () => {
    for (let i = 0; i < 15; i++) {
      if (squares[i].innerHTML === squares[i + 1].innerHTML) {
        let combinedTotal =
          parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
        squares[i].innerHTML = combinedTotal;
        squares[i + 1].innerHTML = 0;
      }
    }
  };

  const keyRight = () => {
    moveRight();
    combineRow();
    moveRight();
    generate();
  };

  const keyLeft = () => {
    moveLeft();
    combineRow();
    moveLeft();
    generate();
  };

  //assign keys
  const control = (event) => {
    if (event.keyCode === 39) {
      keyRight();
    } else if (event.keyCode === 37) {
      keyLeft();
    }
  };
  document.addEventListener('keyup', control);
});
