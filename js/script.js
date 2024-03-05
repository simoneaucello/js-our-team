const output = document.querySelector('.output')


const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    img: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    img: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    img: 'img/walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    img: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    img: 'img/scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    img: 'img/barbara-ramos-graphic-designer.jpg'
  }
]

// stampo in console tutte le proprietà degli oggetti dell'array

for(let ourTeam of team){
  console.log(ourTeam);

// stampo in pagina le informazioni all'interno di una card
// trasformo la stringa in immagine effettiva 

  output.innerHTML += `
  <div class="col">
  <div class="card sa_card" style="width: 18rem;">
  <img src="${ourTeam.img}" class="card-img-top" alt="${ourTeam.name}">
    <div class="card-body">
      <h5 class="card-title">${ourTeam.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${ourTeam.role}</h6>
    </div>
  </div>
</div>
`
}