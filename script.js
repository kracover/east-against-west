// Fonction pour changer le nom affiché au milieu
function changeMiddle(name) {
    // On récupère le div du milieu grâce à son id
    const middleDiv = document.getElementById('middle-name');
    
    // On change le texte du div
    middleDiv.innerText = name;
}

// Optionnel : si tu veux, tu peux aussi changer la couleur selon le côté
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
