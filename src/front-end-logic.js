Vue.component('green-square',{
      props: ['squares'],
      template: '<div class="green-square"></div>'
    });
Vue.component('strike-square',{
    props: ['squares'],
    template: '<div class="strike-square">&#9760;</div>'
    });

var gameVue = new Vue({
    el: '#catchPaddle',
    data: {
      gameSummary: {
        diffLevel: 1,
        catchCount: 6,
        catchSquareArray: [1,2,3,4,5,6],
        strikesLeft: 4,
        strikesSquareArray: [1,2,3,4],
        messageBar: 
            {
                // {{ gameSummary.messageBar[0].message }}
                message: "Good catch!",
                success: true
            }
      }
    }
    // ,
    // computed: {
    //     updateGameSummary: function(){
    //         console.log('Computed');
    //         return this.gameSummary = {
    //             diffLevel: game.diffLevel,
    //             catchCount: game.catchCount,
    //             catchArray: game.catchSquareArray,
    //             strikesLeft: game.strikesLeft,
    //             strikesArray: game.strikesSquareArray,
    //             messageBar: 
    //                 {
    //                     message: "Good catch!",
    //                     success: true
    //                 }
    //           }
          
    //     },
        // matchBarArrays(delta, barType){
        //     if (delta < 0) {
        //         for (i = 0; i < Math.abs(delta); i++){
        //             // Remove array elements until quantities match
        //             if (barType === 'catch-bar'){
        //                 gameSummary.catchArray.pop();
        //             } else {
        //                 gameSummary.strikesArray.pop();
        //             }
        //         }
        //       } else if (game.catchCount > gameSummary.catchArray.length){
        //         for (i = 0; i < Math.abs(delta); i++){
        //             // Add array elements until quantities match
        //             if (barType === 'catch-bar'){
        //                 gameSummary.catchArray.push('x');
        //             } else {
        //                 gameSummary.strikesArray.puxh('x');
        //             }                
        //         }
        //       }
        // }
    });
