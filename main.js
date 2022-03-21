let jmena = [   
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

let pocet = document.querySelector('#pocet');
pocitadlo = 0;
pocet.innerHTML = pocitadlo;


function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    //tazenaJmena.push(vyherniJmeno);

    // Přidávej vyvolaná jména na začátek “Předchozí oběti:”.
    tazenaJmena.unshift(vyherniJmeno);


    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = vyherniJmeno;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazenaJmena;

    // Přidej počítadlo, kolik se vybralo holek.
    pocitadlo = pocitadlo + 1;
    pocet.innerHTML = pocitadlo;

    
}

function restart() {
    seznam.textContent = 'Seznam vyvolaných';
    pocitadlo = 0;
    pocet.innerHTML = pocitadlo;
    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = "";
}