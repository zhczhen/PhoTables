document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
  {
    name: '1',
    img: 'images/1.png'
  },
  {
    name: '2',
    img: 'images/2.png'
  },
  {
    name: '3',
    img: 'images/3.png'
  },
  {
    name: '4',
    img: 'images/4.png'
  },
  {
    name: '5',
    img: 'images/5.png'
  },
  {
    name: '6',
    img: 'images/6.png'
  },
  {
    name: '7',
    img: 'images/7.png'
  },
  {
    name: '8',
    img: 'images/8.png'
  },
  {
    name: '9',
    img: 'images/9.png'
  },
  {
    name: '10',
    img: 'images/10.png'
  },
  {
    name: '11',
    img: 'images/11.png'
  },
  {
    name: '12',
    img: 'images/12.png'
  },
  {
    name: '13',
    img: 'images/13.png'
  },
  {
    name: '14',
    img: 'images/14.png'
  },
  {
    name: '15',
    img: 'images/15.png'
  },
  {
    name: '16',
    img: 'images/16.png'
  },
  {
    name: '17',
    img: 'images/17.png'
  },
  {
    name: '18',
    img: 'images/18.png'
  },
  {
    name: '19',
    img: 'images/19.png'
  }
]
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const table = document.querySelector('#table')


let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let matherino = 0
let cardsChosen = []
let cardsChosenId = []
let randomSquared = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  matherino = Math.floor(Math.random() * 25)
  console.log("before "+matherino)

  while(matherino==21 || matherino==22 || matherino==23){
    matherino = Math.floor(Math.random() * 25)
    console.log("inside "+matherino)

  }
  console.log("after "+matherino)
  randomSquared = squares[matherino]
  table.textContent = randomSquared.id

  //randomSquared.classList.add('mole')

  hitPosition = randomSquared.id
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      //let cardId = this.getAttribute('data-id')
      randomSquared.classList.add('mole')
      //square.classList.add(cardArray[matherino].img)
      /*cardsChosen.push(cardArray[matherino].name)
      cardsChosenId.push(matherino)
      this.setAttribute('src', cardArray[matherino].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
            */

      result++
      score.textContent = result
      hitPosition = null
      setTimeout(randomSquare,1000)

    }
    else{
      randomSquared.classList.add('mole')
      result--
      score.textContent = result
      hitPosition = null
      setTimeout(randomSquare,1000)
    }
  })
})

randomSquare()
/*
function moveMole() {
  timerId = setInterval(randomSquare,1000)
}

moveMole()

/*
function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)
*/
})
