const Panier = {
    data() {
        return {
            tva : 1.2,
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
        totaltva() {
            let total = 0
            this.panier.forEach(el => {
                total += el.prix * el.quantite
            })
            return (total * this.tva).toFixed(2)
        },
        showPoubelle() {
            if(this.poubelle.lenght==0){
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        ajouter() {
            if(this.input['article'] == '' || this.input['quantite']== 0 || this.input['prix']== 0){
                
            }
            else{
                if(this.isNumeric(this.input['quantite']== true || this.isNumeric(this.input['prix'])== true )){

                }else{
                    this.panier.push(this.input)
                    this.input = { article: '', quantite: 0, prix: 0 }
                }
            }
        },
        modifier(index) {
            this.input = this.panier[index]
            this.panier.splice(index, 1)
            this.$refs.modif.focus()
        },
        supprimer(index) {
            this.poubelle.push(this.panier[index])
            this.panier.splice(index, 1)
        },
        retablir(index) {
            this.panier.push(this.poubelle[index])
            this.poubelle.splice(index, 1)
        },
        supprimerDef(index) {
            this.poubelle.splice(index, 1)
        }
        
    }
}

const ordonner = function (a, b) { 
    return (a.article.toUpperCase() > b.article.toUpperCase())
}

Vue.createApp(Panier).mount('#panier')

