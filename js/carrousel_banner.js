// array de 2 niveles , carrousel cambia imagen y vinculo a pagina
var grupoBanners = [];

grupoBanners[0]=['https://organizatuplan.com.ar/productos/scrum-kanban-set-magnetico-premium/','images/banner0.png'];
grupoBanners[1]=['https://organizatuplan.com.ar/productos/agiles-set-magnetico-standard/','images/banner1.png'];
grupoBanners[2]=['https://organizatuplan.com.ar/productos/set-home-edition-standard/','images/banner2.png'];
grupoBanners[3]=['https://organizatuplan.com.ar/productos/set-home-edition-premium/','images/banner3.png'];
grupoBanners[4]=['https://organizatuplan.com.ar/productos/set-home-edition-basico/','images/banner4.png'];

var links = document.getElementById('links');
var imagenes = document.getElementById('imagen');

links.href = grupoBanners[0][0];
imagenes.src = grupoBanners[0][1];

var indice = 0;

function actualizarBanner() {
	indice++
	if (indice.length) {
		indice = 0;
	}
	links.href = grupoBanners[indice][0];
	imagenes.src = grupoBanners[indice][1];
}

setInterval (actualizarBanner, 3500);
