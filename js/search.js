var search = document.getElementById("cari");
var mencari = document.getElementById("search");
var close = document.getElementById("close");

function cari(){
	mencari.style.display = "block";
	close.style.display = "block";
	search.style.display = "none";
}

function tutup(){
	mencari.style.display = "none";
	close.style.display = "none";
	search.style.display = "block";
}

