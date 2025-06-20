import {
  hotDrinks,
  softDrinks,
  beers,
  whiskey,
  vina,
  spirits,
} from "./pice.js";

let container = document.querySelector(".container");

function renderSection(titleHr, titleEn, data) {
  let naslov1 = document.createElement("h2");
  naslov1.innerHTML = `${titleHr}`;
  let engNaslov1 = document.createElement("span");
  engNaslov1.innerHTML = "  " + titleEn;
  naslov1.appendChild(engNaslov1);
  container.appendChild(naslov1);

  for (let i = 0; i < data.length; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");

    let naslov = document.createElement("div");
    naslov.classList.add("naslov");
    naslov.innerHTML = data[i].naziv;

    if (data[i].eng) {
      let engTitle = document.createElement("span");
      engTitle.innerHTML = " / " + data[i].eng;
      naslov.appendChild(engTitle);
    }

    let qty = document.createElement("div");
    qty.innerHTML = data[i].kolicina;

    let price = document.createElement("div");
    price.innerHTML = data[i].cijena;

    container.appendChild(grid);
    grid.appendChild(naslov);
    grid.appendChild(qty);
    grid.appendChild(price);
  }
}

// Pozivi funkcije za svaku kategoriju
renderSection("TOPLI NAPITCI", "HOT DRINKS", hotDrinks);
renderSection("BEZALKOHOLNA PIĆA", "SOFT DRINKS", softDrinks);
renderSection("VINA", "WINE", vina);
renderSection("PIVA", "BEERS", beers);
renderSection("ŽESTOKA PIĆA", "SPIRITS, BRANDY, LIQUEURS", spirits);
renderSection("WHISKEY", "WHISKEY", whiskey);

// Dodavanje vlasničkih podataka na kraj
let vl = document.createElement("div");
vl.classList.add("grid-1");
vl.innerHTML = `<div>Vl. Bruno Bošnjak</div> <div>ID broj 4337591770003</div>`;
container.appendChild(vl);
