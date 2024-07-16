// parte importante per far funzionare lo swiper

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 25,
  loop: true,
});

// tramite questo passaggio allo scroll dell pagina riesco a vedere il punto dell scroll 0 se non scrollo
//man a mano che scrollo mi viene mostrato in console il numero esatto dello scroll

const hideSection = document.querySelector(".hide-section");

let lastKnownScrollPosition = 0;

const showSection = (actualScrollPosition) => {
  if (actualScrollPosition > 100) {
    console.log("sta Funzionando!!");
    hideSection.classList.remove("hide-section");
  }
};
document.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;
  console.log(lastKnownScrollPosition);
  showSection(lastKnownScrollPosition);
});

//tramite questa funzione allo scroll della pagina in base al punto lultima sezione delle card sarà visibile in fondo
// ma man a mano che torno su con lo scroll diventerà invisibile

const elementToTrack = document.querySelectorAll(".animate-on-scroll");

const options = {
  rootMargin: "0px",
  threshold: 0.8,
};

const callBack = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(callBack, options);

elementToTrack.forEach((element) => {
  observer.observe(element);
});

//tramite l'evento change  un iterazione delle row tramite forEach e delle condizioni  riusciamo a far funzionare
//questa parte di codice riuscendo a scegliere film o serie per genere escludendo gli altri solo quando imposto su all
//li vedrò tutti

const genre = document.getElementById("genre");
const rows = document.querySelectorAll("section .row");
console.log(rows);

genre.addEventListener("change", () => {
  rows.forEach((row) => {
    const newClass = row.getAttribute("class");
    const menu = genre.value;

    if (menu === "all") {
      console.log("condizione all");
      row.classList.remove("d-none");
    } else if (!newClass.includes(menu) && !newClass.includes("d-none")) {
      console.log("condizione 1");
      row.classList.add("d-none");
    } else if (newClass.includes(menu) && newClass.includes("d-none")) {
      console.log("condizione 2");
      row.classList.remove("d-none");
    }
  });
});

//Tramite questi eventi al click delle icone riceverò un alert

document.addEventListener("DOMContentLoaded", (event) => {
  const menuIcon = document.getElementById("menuIcon");
  const gridIcon = document.getElementById("gridIcon");

  menuIcon.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Menu icon clicked!");
  });

  gridIcon.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Grid icon clicked!");
  });
});

// in questa parte di codice solo per mobile implemento la funzione di scelta per film o serie tv restituendomi al click una lista
//con i film e serie tv disponibili in pagina

document.addEventListener("DOMContentLoaded", (event) => {
  const filmItem = document.getElementById("filmItem");
  const seriesItem = document.getElementById("seriesItem");
  const resultsContainer = document.getElementById("resultsContainer");

  const filmSelection = [
    "Patto d'amore",
    "Collateral beauty",
    "Lasciati Andare",
    "DogMan",
  ];

  const seriesSelection = [
    "Self made",
    "Englishgame",
    "Freud",
    "The Place",
    "Kominsky",
    "Virgin River",
    "La casa de Lasfloras",
    "Grace e Frankie",
    "Unorthodox",
    "Vis a Vis",
    "After Life",
    "I delitti di Valhalla",
    "Summertime",
    "L'altra Grace",
  ];

  filmItem.addEventListener("click", function () {
    displaySelection(filmSelection);
  });

  seriesItem.addEventListener("click", function () {
    displaySelection(seriesSelection);
  });

  // questa funzione prende un array di stringhe e visualizza ogni stringa come un elemento di una lista HTML
  //all'interno di un contenitore specificato.

  function displaySelection(selection) {
    resultsContainer.innerHTML = "";
    const ul = document.createElement("ul");
    ul.className = "list-group";

    selection.forEach((item) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = item;
      ul.appendChild(li);
    });

    resultsContainer.appendChild(ul);
  }
});

// in questa parte di codice decido di far funzionare l'icona del serch che mi offre la possibilita di scrivere al suo interno
// ma non quella di cercare
//riesco anche a far funzionare l'icona bell dove al click mi restituisce un popover

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search-icon").addEventListener("click", function () {
    let searchInput = document.getElementById("search-input");
    if (
      searchInput.style.display === "none" ||
      searchInput.style.display === ""
    ) {
      searchInput.style.display = "block";
      searchInput.focus();
    } else {
      searchInput.style.display = "none";
    }
    $('[data-toggle="popover"]').popover({
      trigger: "click",
      placement: "bottom",
    });
  });

  $('[data-toggle="popover"]').popover({
    trigger: "click",
    placement: "bottom",
  });
});

//cc
