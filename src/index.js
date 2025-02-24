const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {

  memoryGame.shuffleCards();

  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let cardsTurned = [];
  
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      
      card.classList.add('turned');
      cardsTurned.push(card);
      
      if (cardsTurned.length === 2) { 
        
        const cardOne = cardsTurned[0]
        const cardTwo = cardsTurned[1]

        const isPaired = memoryGame.checkIfPair(cardOne.dataset.cardName, cardTwo.dataset.cardName);

        if ( !isPaired ) {

          setTimeout(() => {
            cardOne.classList.toggle('turned');
            cardTwo.setAttribute('class', 'card');
          }, 500)


        } else {

          console.log('isPaired', isPaired);
          cardOne.classList.toggle('blocked');
          cardTwo.classList.toggle('blocked');

        }

        cardsTurned.splice(0,2);

        if (memoryGame.pairsClicked > 0) { document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked; }
        if (memoryGame.pairsGuesses > 0) { document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuesses; }
      
      } 

      if ( memoryGame.checkIfFinished() ) {

        setTimeout(() => {
          document.querySelector('#memory-board').innerHTML = '<h2>You won!</h2><p style="text-align:center;">Reload to start again</p>'
        }, 1000)
      }

      // console.log(card.dataset.cardName);
      // console.log(`Card clicked: ${card}`);
    });
  });
  
});
