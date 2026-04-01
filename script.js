// Fonction pour changer le nom affiché au milieu
function changeMiddle(name) {
  const middleDiv = document.getElementById('middle-name');
  middleDiv.innerText = name;
}

// Fonction qui change aussi la couleur selon la côte
function changeMiddleWithColor(name, coast) {
  const middleDiv = document.getElementById('middle-name');
  middleDiv.innerText = name;

  if (coast === 'west') {
    middleDiv.style.color = '#00ff00'; // vert pour West Coast
  } else if (coast === 'east') {
    middleDiv.style.color = '#ff0000'; // rouge pour East Coast
  } else {
    middleDiv.style.color = '#ffffff'; // blanc par défaut
  }
}
