// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по
// “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6','7','8','9','10','jack','queen','king','ace'];
const cards =[];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        cards.push(card);
    }
}
console.log(cards);
let reduce = cards.reduce((acc, card) => {
    if (card.cardSuit === 'club') {
        acc.clubs.push(card);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else if (card.cardSuit === 'spade'){
        acc.spades.push(card);
    }
    return acc;
}, {clubs: [], diamonds: [],hearts: [], spades: [] })
console.log(reduce);










