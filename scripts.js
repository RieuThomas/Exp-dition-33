let skillsByCharacter = {

    maelle : ['breaking-rules', 'burning-canvas', 'combustion', 'degagement',
    'egide', 'fencers-flurry', 'fleuret-fury', 'gommage', 'guard-down',
    'guard-up', 'gustaves-homage', 'last-chance', 'mezzo-forte', 'momentum-strike',
    'offensive-switch', 'payback', 'percee', 'phantom-strike', 'phoenix-flame',
    'pyrolyse', 'rain-of-fire', 'revenge', 'spark', 'stendhal', 'swift-stride',
    'sword-ballet', 'virtuose-strike'],
    monoco : ['abbest-wind', 'aberration-light', 'ballet-charm', 'benisseur-mortrar','bouchclier-fortify', 'braseleur-smash',
        'break-point', 'bruler-bash', 'chalier-combo', 'chapelier-slash', 'chevaliere-ice', 'chevaliere-piercing',
        'chevaliere-thrusts', 'clair-enfeeble', 'contorsionniste-blast', 'creation-void', 'cruler-barrier', 'cultist-blood',
        'danseuse-waltz', 'demineur-thunder', 'duallist-storm', 'echassier-stabs', 'eveque-spear', 'gault-fury',
        'glaise-earthquakes', 'grosse-tete-whack', 'hexga-crush', 'jar-lampstorm', 'lampaster-light', 'lancelier-impale',
        'luster-slices', 'mighty-strike', 'moissonneuse-vendange', 'obscur-sword', 'orphelin-cheers', 'pelerin-heal', 'portier-crash',
        'potier-energy', 'ramasseur-bonk', 'rocher-hammering', 'sakapatate-estoc', 'sakapatate-explosion', 'sakapatate-fire',
        'sakapatate-slam', 'sanctuary', 'sapling-absorption', 'stalact-punches','troubadour-trumpet'
    ],
    
}

let sectionSkill = document.querySelector('section.skills')

function toTitleCase(string){
    return (string.split('-').map(letter=> letter.charAt(0).toUpperCase() + letter.slice(1)).join(' '))
}

function createArticleSkill(skills, characterName) {
    skills.forEach((skill) => {
        let article = document.createElement('article');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        h3.innerHTML = toTitleCase(skill);
        img.src = `assets/skills/${characterName}-skills/${skill}-${characterName}-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png`;
        img.alt = `${skill}`;
        article.appendChild(img);
        article.appendChild(h3);
        sectionSkill.appendChild(article)
    })
}
// Récupérer le nom du fichier HTML pour détecter le personnage
const path = window.location.pathname;
const filename = path.substring(path.lastIndexOf('/') + 1);
const characterName = filename.replace(".html", "").toLowerCase();
console.log(path)

if (skillsByCharacter[characterName]) {
  createArticleSkill(skillsByCharacter[characterName], characterName);
} else {
  console.warn("Aucun skill trouvé pour ce personnage :", characterName);
}

/*
*/