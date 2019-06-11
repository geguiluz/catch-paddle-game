
Vue.component('green-square',{
      props: ['bar'],
      template: '<div class = "catch-count-bar bar-bezel"><div class="green-square"></div><div class="green-square"></div><div class="green-square"></div><div class="green-square"></div><div class="green-square"></div><div class="green-square"></div></div>'
    });
Vue.component('strike-square',{
    props: ['bar'],
    template: '<div class="strike-square">&#9760;</div>'
    });

new Vue({
    el: '#catchPaddle',
    data: {
      gameSummary: {
        diffLevel: 1,
		catchCount: 6,
        strikesLeft: 4,
        messageBar: [
            {
                message: "Good catch",
                success: true
            },
            {
                message: "Oops",
                success: true
            }
        ]
      }
    },
    methods: {
        showGameInformation: function(diffLevel, catchCount, strikesLeft){
          this.diffLevel = diffLevel;
          this.catchCount = catchCount;
          this.strikesLeft = strikesLeft;
        }
    }
});
