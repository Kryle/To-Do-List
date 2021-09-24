function ajouterTache() {
	var ul = document.getElementById('ul');
	var il = document.createElement('li');	
	var texte = document.getElementById('tdname').value;
	
	il.setAttribute("onclick","remove(this)");
	
	if(texte !== "") {
		il.appendChild(document.createTextNode(texte));
		ul.appendChild(il);
		document.getElementById('form').reset();
	}
};

function remove(elem) {
	elem.parentNode.removeChild(elem);
}