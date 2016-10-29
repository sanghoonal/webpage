function selectDelete() {
	var selectBox = document.getElementById("cars");
	selectBox.remove(selectBox.selectedIndex)
}
function showImage() {
	var emmaImg = document.createElement("img");
 	emmaImg.src = "emma.jpg";
 	emmaImg.id = "emmaImage"
 	emmaImg.width = 1000;
	document.getElementById("imageHolder").appendChild(emmaImg);
} 

function smallerImage() {
	var small = document.getElementById("emmaImage").style.width="50%";
	var t = document.getElementById("emmaImage")
	t.appendChild(small)
	document.getElementById(t).appendChild(small)
	

}

/*var img = document.getElementById("img")
	var w = img.width
	w = "50%"
	document.getElementById("imageHolder").appendChild(w);*/