// описати колоду карт (від 6 до туза без джокерів).
// Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
// – знайти піковий туз
// – всі шістки
// – всі червоні карти
// – всі буби
// – всі трефи від 9 та більше

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6','7','8','9','10','jack','queen','king','ace'];
const cards =[];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red'
        } else {
            card.color = 'black'
        }
        cards.push(card);
    }
}
console.log(cards);

let findAceSpades = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(findAceSpades);

let filterSex = cards.filter(card => card.value === '6');
console.log(filterSex)

let filterRed = cards.filter(card => card.color === 'red');
console.log(filterRed);

let filterDiamond = cards.filter(card => card.cardSuit === 'diamond');
console.log(filterDiamond);

let filterClubs = cards.filter(card => card.cardSuit === 'clubs' && );
console.log(filterClubs);









