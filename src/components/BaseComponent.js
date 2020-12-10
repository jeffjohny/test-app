angular.module('myApp').component('baseComponent', {
    templateUrl: '../../partials/base-component.html',
    controllerAs: 'baseComponentCtrl',
    controller: [function(){
        let baseComponentCtrl = this, cards, cardCount = 51;
        baseComponentCtrl.cardList = [];

        function generateCards() {
            const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
            const cards = [];
            for (let s = 0; s < suits.length; s++) {
                for (let v = 0; v < values.length; v++) {
                    const id = values[v] + "_" + suits[s];
                    const value = values[v];
                    const suit = suits[s];
                    cards.push({ value, suit, id });
                }
            }
            return cards;
        }

        function pickCard() {
            const random = Math.floor(Math.random() * cards.length - 1);
            const randomCard = cards.splice(random, 1);
            // cardCount--;
            return randomCard[0];
        }

        baseComponentCtrl.getRandomCards = function() {
            if (cards.length ) {
                let loopTill;
                if(cards.length - 1 < 5){
                    loopTill = cards.length;
                }else{
                    loopTill = 5;
                }
                for (let i = 0; i < loopTill; i++) {
                    baseComponentCtrl.cardList.push(pickCard());
    
                }
            }
        }

        baseComponentCtrl.$onChanges = function() {
            cards = generateCards()
        };
    }]
})