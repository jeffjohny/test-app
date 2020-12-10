angular.module('myApp').component('cardComponent', {
    templateUrl: '../../partials/card-component.html',
    controllerAs: 'cardComponentCtrl',
    bindings: {cardData: '<'},
    controller: [function(){
        var cardComponentCtrl = this;
        cardComponentCtrl.$onChanges = function() {
            console.log(cardComponentCtrl.cardData)
        };
    }]
})