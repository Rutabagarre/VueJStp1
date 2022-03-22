const Test = {
    data() {
        return {
          titre : 'Bienvenue',
          visible : true,
          btnText: "Cacher",
            list: [
                "Ruta",
                "Hoka",
                "Zyksa"
            ]
        }
      },
      methods: {
        affiche() {
            this.btnText = !this.visible? "Cacher" : "Montrer";
            this.visible = !this.visible;
        }
    }
}
Vue.createApp(Test).mount('#test')
