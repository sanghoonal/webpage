function selectDelete() {
	var selectBox = document.getElementById("cars");
	selectBox.remove(selectBox.selectedIndex)
}
function showImage() {
	var img = document.createElement("img");
 	img.src = "emma.jpg";
	document.getElementById("imageHolder").appendChild(img);
} 
