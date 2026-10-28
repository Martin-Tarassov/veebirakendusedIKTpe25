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

console.log("Raamaatu kirjeldus: " + raamat.kirjeldus());
raamat.muudaAasta(1930);
console.log("Parast aasta muutmist: " + raamat.kirjeldus());

let raamatukogu = {
    raamatud: [
        { pealkiri: 'Kevade', autor: 'Oskar Luts', aasta: 1912 },
        { pealkiri: 'Rehepapp', autor: 'Andrus Kivirähk', aasta: 2000 },
        { pealkiri: 'Mees, kes teadis ussisõnu', autor: 'Andrus Kivirähk', aasta: 2007 }
    ],

    kuvaRaamatud() {
        this.raamatud.forEach((r) => {
            console.log(`
                Pealkiri: ${r.pealkiri},
                Autor: ${r.autor},
                Aasta: ${r.aasta}
    `);

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
    },
    uueRaamat() {
        let sorditud = [...this.raamatud].sort((a, b) => b.aasta - a.aasta);
        return sorditud[0];
    }
    
};

console.log("Raamaatukogu");
raamatukogu.kuvaRaamatud();

raamatukogu.lisaRaamat({ pealkiri: 'Sirp ja haamer', autor: 'Jaan Kross', aasta: 2005 });

console.log("Parast uue raamatu lisamist");
raamatukogu.kuvaRaamatud();

let vanim = raamatukogu.vanimRaamat();

console.log("Arvutuse");
console.log("Raamatute koguarv: " + raamatukogu.koguarv());
console.log("Parast 2000 aastat ilmunud raamatuid: " + raamatukogu.parast2000());
console.log("Vanim raamat: " + vanim.pealkiri + " (" + vanim.aasta + ")");

// Kõik tulemused html lehel
let tulemus = "";

tulemus += `
    <p>
        <b>Raamat (pärast aasta muutmist):</b> ${raamat.kirjeldus()}
    </p>
    <hr>
`;

raamatukogu.raamatud.forEach((r) => {
    tulemus += `
    <p>
        <b>Pealkiri:</b> ${r.pealkiri}<br>
        <b>Autor:</b> ${r.autor}<br>
        <b>Aasta:</b> ${r.aasta}
    </p>
    <hr>
  `;
});

tulemus += `
    <p>
        <b>Raamatute koguarv:</b> ${raamatukogu.koguarv()}<br>
        <b>Pärast 2000. aastat ilmunud:</b> ${raamatukogu.parast2000()}<br>
        <b>Vanim raamat:</b> ${vanim.pealkiri} (${vanim.aasta})
    </p>
`;

let vastus2 = document.getElementById("vastus2");
vastus2.innerHTML = tulemus;
