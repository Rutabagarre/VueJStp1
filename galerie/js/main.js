const App = {
    data() {
        return {
            titre : "Galerie",
            baseUrl : 'https://ntrugeon.lpmiaw.univ-lr.fr/Cours/CoursVueL2/',
            photos: [
             {
             lien : 'images/grandes/clouds.jpg',
             titre: 'Nuages sur les Alpes',
             mini: 'images/petites/clouds.jpg'
             },
             {
             lien : 'images/grandes/colorfull.jpg',
             titre: 'Lac de montagne',
             mini: 'images/petites/colorfull.jpg'
             },
             {
             lien : 'images/grandes/melbourne.jpg',
             titre: 'Falaises de Melbourne',
             mini: 'images/petites/melbourne.jpg'
             },
             {
             lien : 'images/grandes/road.jpg',
             titre: 'Route des Rocheuses',
             mini: 'images/petites/road.jpg'
             },
             {
             lien : 'images/grandes/rocks.jpg',
             titre: 'Pic',
             mini: 'images/petites/rocks.jpg'
             },
             {
             lien : 'images/grandes/viaduc.jpg',
             titre: 'Viaduc',
             mini: 'images/petites/viaduc.jpg'
             },
            ],
            img: {
                lien : 'images/grandes/clouds.jpg',
                titre: 'Nuages sur les Alpes',
                mini: 'images/petites/clouds.jpg'
            }
        }
      },
      methods: {

        updateImg(index) {
            this.img = this.photos[index]
        }
        
      },
      computed: {
        urlImage() { return this.baseUrl + this.img.lien }
      }
}

Vue.createApp(App).mount('#app')