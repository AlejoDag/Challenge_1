function encriptar(){

	var mensaje = document.getElementById("inputText").value.toLowerCase();
	
	var encriptado = mensaje.replace(/e/igm, "enter")
	var encriptado = encriptado.replace(/o/igm, "ober")
	var encriptado = encriptado.replace(/i/igm, "imes")
	var encriptado = encriptado.replace(/a/igm, "ai")
	var encriptado = encriptado.replace(/u/igm, "ufat");

	document.getElementById("rightImg").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("text2").innerHTML = encriptado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){

	var mensaje = document.getElementById("inputText").value.toLowerCase();
	
	var encriptado = mensaje.replace(/enter/igm, "e")
	var encriptado = encriptado.replace(/ober/igm, "o")
	var encriptado = encriptado.replace(/imes/igm, "i")
	var encriptado = encriptado.replace(/ai/igm, "a")
	var encriptado = encriptado.replace(/ufat/igm, "u");

	document.getElementById("rightImg").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("text2").innerHTML = encriptado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";

}

function copy(){
	var contenido = document.querySelector("#text2");
	contenido.select();
	document.execCommand("copy");
	alert("texto copiado");
}