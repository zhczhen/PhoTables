document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "1",
      img: "images/1.png",
    },
    {
      name: "2",
      img: "images/2.png",
    },
    {
      name: "3",
      img: "images/3.png",
    },
    {
      name: "4",
      img: "images/4.png",
    },
    {
      name: "5",
      img: "images/5.png",
    },
    {
      name: "6",
      img: "images/6.png",
    },
    {
      name: "7",
      img: "images/7.png",
    },
    {
      name: "8",
      img: "images/8.png",
    },
    {
      name: "9",
      img: "images/9.png",
    },
    {
      name: "10",
      img: "images/10.png",
    },
    {
      name: "11",
      img: "images/11.png",
    },
    {
      name: "12",
      img: "images/12.png",
    },
    {
      name: "13",
      img: "images/13.png",
    },
    {
      name: "14",
      img: "images/14.png",
    },
    {
      name: "15",
      img: "images/15.png",
    },
    {
      name: "16",
      img: "images/16.png",
    },
    {
      name: "17",
      img: "images/17.png",
    },
    {
      name: "18",
      img: "images/18.png",
    },
    {
      name: "19",
      img: "images/19.png",
    },
  ];
  const tables = document.querySelectorAll(".table");
  const mole = document.querySelector(".mole");
  const timeLeft = document.querySelector("#time-left");
  const score = document.querySelector("#score");
  const scores = document.querySelector("#scores");

  const table = document.querySelector("#table");

  let result = 0;
  let hitPosition;
  let currentTime = 30;
  let timerId = null;
  let matherino = 0;
  let scoresTable = [];
  let cardsChosen = [];
  let cardsChosenId = [];
  let randomTabled = null;

  function randomTable() {
    tables.forEach((table) => {
      table.classList.remove("mole");
      console.log(table);
    });

    console.log("tables.length " + tables.length);
    matherino = Math.floor(Math.random() * 23);
    console.log("randomNum: " + matherino);

    /*
    console.log("before " + matherino);

    
    while (
      matherino != 0 &&
      matherino != 7 &&
      matherino != 16 &&
      matherino != 18 &&
      matherino != 19 &&
      matherino != 21 &&
      matherino != 23 &&
      matherino != 32 &&
      matherino != 34 &&
      matherino != 35 &&
      matherino != 37 &&
      matherino != 39 &&
      matherino != 48 &&
      matherino != 50 &&
      matherino != 51 &&
      matherino != 53 &&
      matherino != 55 &&
      matherino != 64 &&
      matherino != 66 &&
      matherino != 67 &&
      matherino != 69 &&
      matherino != 71
    ) {
      matherino = Math.floor(Math.random() * 22);
      console.log("inside " + matherino);
    }
    console.log("after " + matherino);
    */

    randomTabled = tables[matherino];
    table.textContent = randomTabled.id;

    //tables[1].classList.add("null1");
    //tables[2].classList.add("null2");
    //tables[3].classList.add("null3");

    //randomTabled.classList.add('mole')

    hitPosition = randomTabled.id;
  }

  tables.forEach((table) => {
    table.addEventListener("mousedown", () => {
      if (table.id == hitPosition) {
        //let cardId = this.getAttribute('data-id')
        randomTabled.classList.add("mole");
        //table.classList.add(cardArray[matherino].img)
        /*cardsChosen.push(cardArray[matherino].name)
      cardsChosenId.push(matherino)
      this.setAttribute('src', cardArray[matherino].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
            */

        result++;
        score.textContent = result;
        hitPosition = null;
        setTimeout(randomTable, 500);
      } else {
        alert("GAME OVER! Your final score is " + result);
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        scoresTable.push(result);
        randomTabled.classList.add("mole");
        result = 0;
        score.textContent = result;
        scores.textContent = scoresTable;
        hitPosition = null;
        setTimeout(randomTable, 500);

        countDownTimerId = setInterval(countDown, 1000);
        timerId = null;
        currentTime = 30;
        timeLeft.textContent = currentTime;
      }
    });
  });

  randomTable();
  /*
  function moveMole() {
    timerId = setInterval(randomTable, 1000);
  }

  moveMole();
*/
  function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert("GAME OVER! Your final score is " + result);
      scoresTable.push(result);
      result = 0;
      score.textContent = result;
      scores.textContent = scoresTable;

      countDownTimerId = setInterval(countDown, 1000);
      timerId = null;
      currentTime = 30;
      timeLeft.textContent = currentTime;
    }
  }

  let countDownTimerId = setInterval(countDown, 1000);
});
