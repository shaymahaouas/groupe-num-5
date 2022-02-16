var tabEleve = [];
function creerEleve(nom, note) {
    let eleve={};
    eleve.nom=nom;
    eleve.note=note;
    return eleve;
};

tabEleve.push(creerEleve('lola',8));
tabEleve.push(creerEleve('lune',12));
tabEleve.push(creerEleve('laila',9));
tabEleve.push(creerEleve('lona',12));
tabEleve.push(creerEleve('pita',17));
tabEleve.push(creerEleve('harry',18));
tabEleve.push(creerEleve('sam',15));
tabEleve.push(creerEleve('vaughn',13));



console.log('Affichage du tableau complet en console');
console.log(tabEleve); 


afficherConsole(tabEleve); 



function afficherConsole(tab){
	console.log('Contenu du tableau par objet en console');
	for(i=0; i<tab.length; i++){
		console.log(tab[i]);
	}
}



function afficherHTMLdiv(tab){
	let innerHTML = '<table border>';
		innerHTML+='<tr><th>nom</th><th>note</th></tr>';
	for(i=0; i<tab.length; i++){
		innerHTML+='<tr>';
		innerHTML+='<td>'+tab[i].nom+'</td>';
        innerHTML+='<td>'+tab[i].note+'</td>';
		innerHTML+='</tr>';
	}
	innerHTML+='</table>';
document.getElementById("resultats").innerHTML+=innerHTML;
}

 


function nbNotesSup10(tab){
	let cpt=0; 
	for(let i=0; i<tab.length; i++){
		if(tab[i]>=10){
			cpt++;
		}
	}
	return cpt;
}

function moyTab(tab){
	let cpt=0;
	let somme=0;
	for(key in tab){
		somme+=tab[key]
		cpt++;
	}
	console.log(cpt);
	return somme/cpt;
}




var balise=document.getElementById("resultats")
balise.innerHTML+='<p>Tableau de départ : <p>';
afficherHTMLdiv(tabEleve);


var nbNotes=nbNotesSup10(tab);
balise.innerHTML+='<p>Nombre de notes supérieures à 10 : '+nbNotes+' <p>';

var moyenne=moyTab(tab);
balise.innerHTML+='<p>Moyenne des notes : '+moyenne+' <p>';


tab.sort(function(a, b){return a-b});
balise.innerHTML+='<p>Tableau trié : <p>';
afficherHTMLdiv(tab);
