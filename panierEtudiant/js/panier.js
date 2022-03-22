const Panier = {
    data() {
        return {
            panier: [
                {article: "Cahier", quantite: 2, prix: 5.30},
                {article: "Crayon", quantite: 4, prix: 1.10},
                {article: "Gomme", quantite: 1, prix: 3.25}
            ],
            input: {article: '', quantite: 0, prix: 0},
            poubelle: [
                {article: "test", quantite: 1, prix: 10}
            ]
        }
    },
    computed: {
        total() {
            let total = 0
            this.panier.forEach(el => {
                total += el.prix * el.quantite
            })
            return total.toFixed(2)
        },
    },
    methods: {
        ajouter() {
            this.panier.push(this.input)
            this.input = { article: '', quantite: 0, prix: 0 }
        },
        modifier(index) {
            this.input = this.panier[index]
            this.panier.splice(index, 1)
            this.$refs.modif.focus()
        },
        supprimer(index) {
            this.panier.splice(index, 1)
        }
    }
}

const ordonner = function (a, b) { 
    return (a.article.toUpperCase() > b.article.toUpperCase())
}

Vue.createApp(Panier).mount('#panier')

