Vue.config.devtools = true;
var app = new Vue({
  el: "#app",
  data: {
    step: 3.34,
    rows: []
  },
  methods: {
    addRow: function () {
      this.rows.push({
        name: "Gracz",
        width: 0,
        score: 0
      });
    },
    removeRow: function (index) {
      var answer = confirm("Na sto pro?")
      if (answer) {
        this.rows.splice(index, 1);
      }
    },
    increaseScore: function (row) {
      row.width = row.width + this.step;
      row.score++;
    },
    decreaseScore: function (row) {
      row.width = row.width - this.step;
      row.score--;
    }

  }
});
