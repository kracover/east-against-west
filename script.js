// Fonction pour changer le nom au milieu et sa description
function changeMiddleWithDesc(name, desc) {
  const middleDiv = document.getElementById('middle-name');
  middleDiv.innerText = name;
  middleDiv.setAttribute('data-desc', desc);
  middleDiv.style.backgroundImage = `url('${imgUrl}')`;
  // Changer couleur selon le côté
  if (desc.toLowerCase().includes('west')) {
    middleDiv.style.color = '#00ff00'; // vert pour West Coast
  } else if (desc.toLowerCase().includes('east')) {
    middleDiv.style.color = '#ff0000'; // rouge pour East Coast
  } else {
    middleDiv.style.color = '#ffffff'; // blanc par défaut
  }
}
