document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
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
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Что-то часто в нашего Серёжу в последнее время стрелять начали. Так ведь они и попасть могут.')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Быстро однако...')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Тебе хвосты верблюдам закручивать!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Спасибо, Серёжа, что дело сделал. Спасибо, что жив остался. Спасибо, что людей сохранил.'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
