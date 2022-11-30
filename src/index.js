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

        const isPaired = memoryGame.checkIfPair(cardsTurned[0].dataset.cardName, cardsTurned[1].dataset.cardName);

        if ( !isPaired ) {
          
          setTimeout(() => {
            cardsTurned[0].classList.toggle('turned');
            cardsTurned[1].setAttribute('class', 'card');
            cardsTurned.splice(0,2);
          }, 1000)


        } else {

          console.log('isPaired', isPaired);
          cardsTurned[0].classList.toggle('blocked');
          cardsTurned[1].classList.toggle('blocked');

        }

        if (memoryGame.pairsClicked > 0) { document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked; }
        if (memoryGame.pairsGuesses > 0) { document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuesses; }
      
      } 

      if ( memoryGame.checkIfFinished() ) {
        document.querySelector('#memory-board').innerHTML = '<h2>You won!</h2><p style="text-align:center;">Reload to start again</p>'
      }

      // console.log(card.dataset.cardName);
      // console.log(`Card clicked: ${card}`);
    });
  });
  
});
