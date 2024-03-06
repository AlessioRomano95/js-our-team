console.log('js-ok')

// 1 recupero gli elementi dal DOM
// 2 creo l'array di oggetti
// 3 creo una variabile vuota che conterrà tot di volte i miei dati
// 4 creo un ciclo sul quale girare tot volte 
// 5 creo una variabile e gli assegno gli elementi dell'array
// 6 tramite il templateliteral creo tot elementi che contengono nomi, ruoli, immagini
// 7 inserisco gli elementi nel dom

// 1
const card = document.getElementById('card')
// 2
const team = [
    {name: 'Wayne Barnett',  role: 'Founder & CEO', pic: `<img src="asset/img/wayne-barnett-founder-ceo.jpg"`},
    {name: 'Angela Caroll',  role: 'Chief Editor', pic: `<img src="asset/img/angela-caroll-chief-editor.jpg"`},
    {name: 'Walter Gordon',  role: 'Office Manager', pic: `<img src="asset/img/walter-gordon-office-manager.jpg"`},
    {name: 'Angela Lopez',  role: 'Social Media Manager', pic: `<img src="asset/img/angela-lopez-social-media-manager.jpg" `},
    {name: 'Scott Estrada',  role: 'Developer', pic: `<img src="asset/img/scott-estrada-developer.jpg"`},
    {name: 'Barbara Ramos',  role: 'Graphic Designer', pic: `<img src="asset/img/barbara-ramos-graphic-designer.jpg"`}
]
