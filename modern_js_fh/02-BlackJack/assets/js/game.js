const game = ( () => {
    'use strinct';

    // C = CLUBS = TREBLOLES
    // D = DIAMONDS = DIAMANTES
    // H = HEARTS = CORAZONES
    // S = SPADES = ESPADAS


    let deck = [];
    const types = ['C', 'D', 'H', 'S'],
        specialCards = ['A', 'J', 'Q', 'K'],
        players = [];

    let playerScore = 0, pcScore = 0, playerInTurn = 0;

    //HTML REFERENCES
    const newGameBtn = document.querySelector('#newGameBtn'),
        drawBtn = document.querySelector('#drawBtn'),
        stopBtn = document.querySelector('#stopBtn'),
        playerScoreElm = document.querySelector('#playerScore'),
        pcScoreElm = document.querySelector('#pcScore'),
        cardsDivs = document.getElementsByClassName('cardsDiv');

    drawBtn.disabled = true;
    stopBtn.disabled = true;

    const startGame = (numPlayers = 2) => {
        for (let i = 0; i < numPlayers; i++) {
            players.push(i);
            cardsDivs[i].innerHTML = "";
        }

        deck = createDeck();
        disableButtons(false);
        playerScore = 0;
        pcScore = 0;
        playerInTurn = 0;
        setScore(playerScore, playerScoreElm);
        setScore(pcScore, pcScoreElm);
    };

    //Creates a new randomized deck
    const createDeck = () => {
        deck = [];
        for (const type in types) {
            for (let card = 2; card < 11; card++) {
                deck.push(`${card}${types[type]}`);
            }
        }
        for (const type of types) {
            for (const special of specialCards) {
                deck.push(special + type);
            }
        }

        return _.shuffle(deck);
    };

    //Allows to draw a card from the deck
    const drawCard = () => {
        if (deck.length === 0) {
            alert('There is not cards, click new game to start.');
            throw 'There is not cards';

        }
        return deck.pop();
    };

    // const evaluateCard = (card) => {
    //     let cardValue = 0;
    //     let value = card.substring(0, card.length - 1);

    //     switch (value) {

    //         case '2':
    //             cardValue = 2;
    //             break;

    //         case '3':
    //             cardValue = 3;
    //             break;

    //         case '4':
    //             cardValue = 4;
    //             break;

    //         case '5':
    //             cardValue = 5;
    //             break;

    //         case '6':
    //             cardValue = 6;
    //             break;

    //         case '7':
    //             cardValue = 7;
    //             break;

    //         case '8':
    //             cardValue = 8;
    //             break;

    //         case '9':
    //             cardValue = 9;
    //             break;

    //         case '10':
    //             cardValue = 10;
    //             break;

    //         case 'J':
    //             cardValue = 10;
    //             break;

    //         case 'Q':
    //             cardValue = 10;
    //             break;

    //         case 'K':
    //             cardValue = 10;
    //             break;

    //         case 'A':
    //             cardValue = 11;
    //             break;

    //         default:
    //             break;
    //     }

    //     return cardValue;
    // };

    const evaluateCard = (card) => {
        let value = card.substring(0, card.length - 1);
        let cardValue = (isNaN(value)) ?
            (value === 'A') ? 11 : 10
            : (value * 1);

        return cardValue;
    };

    const createCard = (card, who) => {
        const newCard = document.createElement('img');
        newCard.src = `./assets/cartas/${card}.png`;
        newCard.classList.add('card');
        cardsDivs[who].append(newCard);
    };

    const setScore = (score, elm) => {
        elm.innerHTML = `- Score : ${score}`;
    };

    const playTurn = (turn) => {
        const cardDrawed = drawCard();
        createCard(cardDrawed, turn);
        return evaluateCard(cardDrawed);
    };

    const pcTurn = () => {
        do {
            pcScore += playTurn(playerInTurn);
            setScore(pcScore, pcScoreElm);
        }
        while (pcScore < playerScore);

        defineWinner();
    };

    const disableButtons = (value) => {
        drawBtn.disabled = value;
        stopBtn.disabled = value;
    };

    const defineWinner = () => {
        if (pcScore === playerScore) {
            alert('OOHH, IT IS A DRAW');
        }
        else if ((playerScore === 21) || ((pcScore > 21) && (playerScore < 21))) {
            alert('You win.');
        }
        else {
            alert('You lose.');
        }

    };

    const playerTurn = () => {


        playerScore += playTurn(playerInTurn);
        setScore(playerScore, playerScoreElm);

        if (playerScore >= 21) {
            if (playerScore > 21) {
                playerScore = 0;
            }

            playerInTurn = (playerInTurn + 1) % players.length;
            disableButtons(true);
            pcTurn();

        }
    };



    stopBtn.addEventListener('click', () => {
        playerInTurn = (playerInTurn + 1) % players.length;
        disableButtons(true);
        pcTurn();
    });

    drawBtn.addEventListener('click', () => {
        playerTurn();

    });

    newGameBtn.addEventListener('click', function () {
        startGame();
    });


    return {
        startGame
    };

})();