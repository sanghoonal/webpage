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
	/*var t = document.getElementById("emmaImage")
	t.appendChild(small)
	document.getElementById(t).appendChild(small)*/
	
}
// var modal = document.getElementById("modalBox");
// var btn = document.getElementById("modalBtn");
// btn.onclick = function() {
// 	console.log('modal', modal);
// 	modal.style.display = "block";
// 	}

function openModal() {
	var modal = document.getElementById("modalBox");
	modal.style.display = "block";
}

function closeModal() {
	var modal = document.getElementById("modalBox");
	var close = document.getElementsByClassName("close")[0];
	modal.style.display = "none";
}

document.getElementById("hover").addEventListener("mouseover",hoverOver);
function hoverOver() {
	document.getElementById("hover").style.color = "red";
}
/*function selectDelete() {
	var selectBox = document.getElementById("cars");
	selectBox.remove(selectBox.selectedIndex)
}
function showImage() 
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

function zoomOut() {

}*/

FACTOR = 0.7
function smaller() {
	var height = document.getElementById("birds").height * FACTOR
	var width = document.getElementById("birds").width * FACTOR
	document.getElementById("birds").width = width
	document.getElementById("birds").height=height
}

/*var img = document.getElementById("img")
	var w = img.width
	w = "50%"
	document.getElementById("imageHolder").appendChild(w);*/
