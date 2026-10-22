// Funktsioon, mis kuvab teksti nii konsoolis kui ka html lehel
function kuva(tekst) {
    console.log(tekst);
    document.getElementById("tulemus").innerHTML += tekst + "<br>";
}

// Raamatu objekt
let raamat = {
    pealkiri: "Tõde ja õigus",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    kirjeldus() {
        return this.pealkiri + ", autor " + this.autor + ", aasta " + this.aasta;
    },

    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};

kuva(raamat.kirjeldus());
raamat.muudaAasta(1930);
kuva("Pärast muutmist: " + raamat.kirjeldus());

// Raamatukogu
let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 }
    ],

    kuvaRaamatud() {
        this.raamatud.forEach(r => {
            kuva(r.pealkiri + " - " + r.autor + " (" + r.aasta + ")");
        });
    },

    lisaRaamat(uus) {
        this.raamatud.push(uus);
    },

    koguarv() {
        return this.raamatud.length;
    },

    parast2000() {
        return this.raamatud.filter(r => r.aasta > 2000).length;
    },

    // Minu oma meetod leiab kõige vanema raamatu
    vanimRaamat() {
        let sorditud = [...this.raamatud].sort((a, b) => a.aasta - b.aasta);
        return sorditud[0];
    }
};

kuva(" Raamatukogu ");
raamatukogu.kuvaRaamatud();

raamatukogu.lisaRaamat({ pealkiri: "Sirp ja haamer", autor: "Jaan Kross", aasta: 2005 });
kuva(" Pärast uue raamatu lisamist ");
raamatukogu.kuvaRaamatud();

kuva("Raamatute koguarv: " + raamatukogu.koguarv());
kuva("Pärast 2000. aastat ilmunud raamatuid: " + raamatukogu.parast2000());

let vanim = raamatukogu.vanimRaamat();
kuva("Vanim raamat: " + vanim.pealkiri + " (" + vanim.aasta + ")");