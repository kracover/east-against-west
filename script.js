// Fonction pour changer le nom au milieu, sa description, sa couleur et l'image de fond
function changeMiddleWithImage(name, desc, imgUrl) {
  const middleDiv = document.getElementById('middle-name');

  // Changer le texte au milieu
  middleDiv.innerText = name;

  // Changer la description qui apparaît au survol
  middleDiv.setAttribute('data-desc', desc);

  // Changer l'image de fond (IMAGE comme placeholder)
  middleDiv.style.backgroundImage = `url('${imgUrl}')`;

  // Changer la couleur du texte selon la côte
  if (desc.toLowerCase().includes('west')) {
    middleDiv.style.color = '#00ff00'; // vert pour West Coast
  } else if (desc.toLowerCase().includes('east')) {
    middleDiv.style.color = '#ff0000'; // rouge pour East Coast
  } else {
    middleDiv.style.color = '#ffffff'; // blanc par défaut
  }
}
