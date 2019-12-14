function cambiar(p) {
  var nav = ["aboutme", "superheroestab"];
  var pest;
  for (i = 0; i < 2; i++) {
    var contador = 0;
    if (document.getElementById("pantalla_carga").style.display != "block") {
      pest = document.getElementById(nav[i]);
      pest.style.display = "none";
      if (nav[i] == p) {
        pest.style.display = "block";
      }
    } else {
      M.toast({ html: "Espera a que cargue todo" });
    }
  }
} //fin metodo

new Vue({
  el: "main",
  data: {
    imagens_malas: [
      51,
      54,
      74,
      101,
      113,
      117,
      124,
      131,
      133,
      134,
      143,
      164,
      184,
      205,
      244,
      283,
      288,
      290,
      291,
      292,
      362,
      447,
      453,
      511,
      512,
      552,
      553,
      593,
      603,
      629,
      662,
      682,
      694,
      698,
      715,
      721,
      725
    ],
    progreso_carga: 0,
    nombre: "full-name",
    barra: "width: ",
    barra_porcentaje: "%",
    superheroes: [],
    datos_superHeroes: null,
    url_img_carta: "",
    url: "https://superheroapi.com/api.php/10157194837029221/"
  },
  methods: {
    async cargar() {
      for (ids = 1; ids < 732; ids++) {
        //732
        var resultado = await axios.get(this.url + ids);
        this.superheroes.push(resultado.data);
        
        for (img = 0; img < this.imagens_malas.length; img++) {
          if (this.superheroes[ids-1].id == this.imagens_malas[img]) {
            //console.log(this.imagens_malas[img]);
            this.superheroes[ids-1].image.url =
              "https://www.caiv.org/wp-content/plugins/smg-theme-tools/public/images/not-available-es.png";
          }
        }
        this.progreso_carga += 8.3;
        if (this.superheroes.length == 12) {
          document.getElementById("pantalla_carga").style.display = "none";
          document.getElementById("superheroestab").style.display = "block";
        }
      }
      //console.log(this.superheroes);
    }, //fin cargar

    carga_modal(x) {
      this.datos_superHeroes = x;
      this.url_img_carta = x.image.url;
      var instance = M.Modal.getInstance(document.getElementById("modal1"));
      instance.open();
    } //fin carga modal

    /* progreso_carga(){
      alert('estoy funcionando')
      var mostrar = document.getElementById('pantalla_carga');
      if(this.superheroes.length > 13){
        mostrar.style.display = "none";
      }
      
    } */
  },
  created() {
    this.cargar();
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems, {});
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }
});

//{{(item.nota >=4)?"Aprobado":"Reprobado"}}
