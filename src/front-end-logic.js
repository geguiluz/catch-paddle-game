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
        catchSquareArray: [1],
        strikesLeft: 4,
        strikesSquareArray: [1,2,3,4],
        pauseFlag: false,
        pauseButtonText: "Pause",
        globalScore: 0,
        messageBar: 
            {
                // {{ gameSummary.messageBar[0].message }}
                message: "Good catch!",
                success: true
            },
        animations: {
            // TODO: Make strikes blink if strikesLeft < 1

            //TODO: Shake strikes bar on shape drop
        }
      }
    }
});
