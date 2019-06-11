
Vue.component('green-square',{
      props: ['squares'],
      template: '<div class="green-square"></div>'
    });
Vue.component('strike-square',{
    props: ['squares'],
    template: '<div class="strike-square">&#9760;</div>'
    });

new Vue({
    el: '#catchPaddle',
    data: {
      gameSummary: {
        diffLevel: 1,
        catchCount: 6,
        catchArray: [1, 2, 3, 4, 5, 6],
        strikesLeft: 4,
        strikesArray: [1, 2, 3, 4],
        messageBar: [
            {
                // {{ gameSummary.messageBar[0].message }}
                message: "Good catch!",
                success: true
            },
            {
                message: "Oops",
                success: false
            }
        ]
      }
    },
    methods: {
        updateGameSummary: function(diffLevel, catchCount, strikesLeft){
          this.diffLevel = game.diffLevel;
          this.catchCount = game.catchCount;
          this.strikesLeft = game.strikesLeft;
          var catchDelta = game.catchCount - gameSummary.catchArray.length;
          var strikesDelta = game.strikesLeft - gameSummary.strikesArray.length;
          matchBarArrays(catchDelta, 'catch-bar');
          matchBarArrays(strikesDelta, 'strikes-bar');
        },
        matchBarArrays(delta, barType){
            if (delta < 0) {
                for (i = 0; i < Math.abs(delta); i++){
                    // Remove array elements until quantities match
                    if (barType === 'catch-bar'){
                        gameSummary.catchArray.pop();
                    } else {
                        gameSummary.strikesArray.pop();
                    }
                }
              } else if (game.catchCount > gameSummary.catchArray.length){
                for (i = 0; i < Math.abs(delta); i++){
                    // Add array elements until quantities match
                    if (barType === 'catch-bar'){
                        gameSummary.catchArray.push('x');
                    } else {
                        gameSummary.strikesArray.puxh('x');
                    }                }
              }
        }
    }
});
