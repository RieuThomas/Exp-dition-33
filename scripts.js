let maelleSkill = [
    'breaking-rules', 'burning-canvas', 'combustion', 'degagement',
    'egide', 'fencers-flurry', 'fleuret-fury', 'gommage', 'guard-down',
    'guard-up', 'gustaves-homage', 'last-chance', 'mezzo-forte', 'momentum-strike',
    'offensive-switch', 'payback', 'percee', 'phantom-strike', 'phoenix-flame',
    'pyrolyse', 'rain-of-fire', 'revenge', 'spark', 'stendhal', 'swift-stride',
    'sword-ballet', 'virtuose-strike'
];

let sectionSkill = document.querySelector('section.skills')

function createArticleSkill(skills) {
    skills.forEach((skill) => {
        let article = document.createElement('article');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        h3.innerHTML = `${skill}`;
        img.src = `assets/skills/maelle-skills/${skill}-maelle-skill-clair-obscur-expedition-33-wiki-guide-200px-min.png`;
        img.alt = `${skill}`;
        article.appendChild(img);
        article.appendChild(h3);
        sectionSkill.appendChild(article)


    })
}
createArticleSkill(maelleSkill)
