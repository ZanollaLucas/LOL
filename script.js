
var indice = 0

function adicionarFilme(){
  listaFilmes.innerHTML = ""
  var campoFilem = document.querySelector('#filme').value
   campoFilem.value= "" 

for(indice=0; indice<17; indice++){
  var skin = `https://assets.unrankedsmurfs.com/splash/${campoFilem}_${indice}.thumb.jpg`;


  is_img(skin);
  
}
  alert("Essas são todas as Skins do/da: " + campoFilem)
 
   campoFilem.value= "" 
  
}


function is_img(file) {
	var img = document.createElement('img');
	img.src = file;

	img.onload = function() {
		console.log("A imagem " + file + " existe");
    printImg(file);
   // indice++;
	}
	img.onerror = function() {
		console.log("A imagem " + file + " NAO existe");

	}
    

}

function printImg(imgsrc){
   var listaFilmes = document.querySelector('#listaFilmes')
  
  var elementoFilme = "<img src=" + imgsrc + ">"

  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}