import {
  hotDrinks,
  softDrinks,
  beers,
  whiskey,
  vina,
  spirits,
} from './pice.js';

console.log(hotDrinks);
console.log(softDrinks);
let container = document.querySelector('.container');

for (let i = 0; i < hotDrinks.length; i++) {
  let grid = document.createElement('div');
  grid.classList.add('grid');

  if (i === 0) {
    let naslov1 = document.createElement('h2');
    naslov1.innerHTML = 'TOPLI NAPITCI';
    let engNaslov1 = document.createElement('span');
    engNaslov1.innerHTML = '  HOT DRINKS';
    naslov1.appendChild(engNaslov1);
    container.appendChild(naslov1);
  }
  let naslov = document.createElement('div');
  naslov.classList.add('naslov');
  naslov.innerHTML = hotDrinks[i].naziv;

  let engTitle = document.createElement('span');
  engTitle.innerHTML = ' / ' + hotDrinks[i].eng;

  if (hotDrinks[i].eng) {
    naslov.appendChild(engTitle);
  }
  let qty = document.createElement('div');
  qty.innerHTML = hotDrinks[i].kolicina;

  let price = document.createElement('div');
  price.innerHTML = hotDrinks[i].cijena;

  container.appendChild(grid);

  grid.appendChild(naslov);
  grid.appendChild(qty);
  grid.appendChild(price);
}

for (let i = 0; i < softDrinks.length; i++) {
  let grid = document.createElement('div');
  grid.classList.add('grid');

  if (i === 0) {
    let naslov1 = document.createElement('h2');
    naslov1.innerHTML = 'BEZALKOHOLNA PIĆA';
    let engNaslov1 = document.createElement('span');
    engNaslov1.innerHTML = '  SOFT DRINKS';
    naslov1.appendChild(engNaslov1);
    container.appendChild(naslov1);
  }

  let naslov = document.createElement('div');
  naslov.classList.add('naslov');
  naslov.innerHTML = softDrinks[i].naziv;

  let engTitle = document.createElement('span');
  engTitle.innerHTML = ' / ' + softDrinks[i].eng;

  if (softDrinks[i].eng) {
    naslov.appendChild(engTitle);
  }
  let qty = document.createElement('div');
  qty.innerHTML = softDrinks[i].kolicina;

  let price = document.createElement('div');
  price.innerHTML = softDrinks[i].cijena;

  container.appendChild(grid);

  grid.appendChild(naslov);
  grid.appendChild(qty);
  grid.appendChild(price);
}

for (let i = 0; i < vina.length; i++) {
  let grid = document.createElement('div');
  grid.classList.add('grid');

  if (i === 0) {
    let naslov1 = document.createElement('h2');
    naslov1.innerHTML = 'VINA ';
    let engNaslov1 = document.createElement('span');
    engNaslov1.innerHTML = '  WINE';
    naslov1.appendChild(engNaslov1);
    container.appendChild(naslov1);
  }

  let naslov = document.createElement('div');
  naslov.classList.add('naslov');
  naslov.innerHTML = vina[i].naziv;

  let engTitle = document.createElement('span');
  engTitle.innerHTML = ' / ' + vina[i].eng;

  if (vina[i].eng) {
    naslov.appendChild(engTitle);
  }
  let qty = document.createElement('div');
  qty.innerHTML = vina[i].kolicina;

  let price = document.createElement('div');
  price.innerHTML = vina[i].cijena;

  container.appendChild(grid);

  grid.appendChild(naslov);
  grid.appendChild(qty);
  grid.appendChild(price);
}

for (let i = 0; i < beers.length; i++) {
  let grid = document.createElement('div');
  grid.classList.add('grid');

  if (i === 0) {
    let naslov1 = document.createElement('h2');
    naslov1.innerHTML = 'PIVA ';
    let engNaslov1 = document.createElement('span');
    engNaslov1.innerHTML = '  BEERS';
    naslov1.appendChild(engNaslov1);
    container.appendChild(naslov1);
  }

  let naslov = document.createElement('div');
  naslov.classList.add('naslov');
  naslov.innerHTML = beers[i].naziv;

  let engTitle = document.createElement('span');
  engTitle.innerHTML = ' / ' + beers[i].eng;

  if (beers[i].eng) {
    naslov.appendChild(engTitle);
  }
  let qty = document.createElement('div');
  qty.innerHTML = beers[i].kolicina;

  let price = document.createElement('div');
  price.innerHTML = beers[i].cijena;

  container.appendChild(grid);

  grid.appendChild(naslov);
  grid.appendChild(qty);
  grid.appendChild(price);
}

for (let i = 0; i < spirits.length; i++) {
  let grid = document.createElement('div');
  grid.classList.add('grid');

  if (i === 0) {
    let naslov1 = document.createElement('h2');
    naslov1.innerHTML = 'ŽESTOKA PIĆA ';
    let engNaslov1 = document.createElement('span');
    engNaslov1.innerHTML = '  SPIRITS,BRANDY,LIQUORS';
    naslov1.appendChild(engNaslov1);
    container.appendChild(naslov1);
  }

  let naslov = document.createElement('div');
  naslov.classList.add('naslov');
  naslov.innerHTML = spirits[i].naziv;

  let engTitle = document.createElement('span');
  engTitle.innerHTML = ' / ' + spirits[i].eng;

  if (spirits[i].eng) {
    naslov.appendChild(engTitle);
  }
  let qty = document.createElement('div');
  qty.innerHTML = spirits[i].kolicina;

  let price = document.createElement('div');
  price.innerHTML = spirits[i].cijena;

  container.appendChild(grid);

  grid.appendChild(naslov);
  grid.appendChild(qty);
  grid.appendChild(price);
}

for (let i = 0; i < whiskey.length; i++) {
  let grid = document.createElement('div');
  grid.classList.add('grid');

  if (i === 0) {
    let naslov1 = document.createElement('h2');
    naslov1.innerHTML = 'Whiskey ';
    let engNaslov1 = document.createElement('span');

    container.appendChild(naslov1);
  }

  let naslov = document.createElement('div');
  naslov.classList.add('naslov');
  naslov.innerHTML = whiskey[i].naziv;

  let engTitle = document.createElement('span');
  engTitle.innerHTML = ' / ' + whiskey[i].eng;

  if (whiskey[i].eng) {
    naslov.appendChild(engTitle);
  }
  let qty = document.createElement('div');
  qty.innerHTML = whiskey[i].kolicina;

  let price = document.createElement('div');
  price.innerHTML = whiskey[i].cijena;

  container.appendChild(grid);

  grid.appendChild(naslov);
  grid.appendChild(qty);
  grid.appendChild(price);
}

let vl = document.createElement('div');
vl.classList.add('grid-1');

vl.innerHTML = `<div>Vl. Bruno Bošnjak</div> <div>ID broj 4337591770003`;
container.appendChild(vl);
