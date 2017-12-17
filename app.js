Vue.config.devtools = true;
var app = new Vue({
    el: "#app",
    data: {
        multiply: 3.34,
        rows: [{
            name: "Adam Małysz",
            width: 0,
            score: 0
        }, ]
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
        }
        // increaseScore: function (index) {
        //     if (this.rows.score >= 100) {
        //         alert('asdasd');
        //     }
        // }
    }
});