function kuvaKuupaevJaKell() {
    const now = new Date();

    const kp = now.toLocaleDateString();
    const kellaaeg = now.toLocaleTimeString();
    const kp_kell = now.toLocaleString();

    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on " + kp + "<br>" +
        "Kellaaeg: " + kellaaeg + "<br>" +
        "Kuupäev ja kell: " + kp_kell;
}

function synnipaevani() {
    const before = new Date(2027, 1, 24);
    const now = new Date();

    const ms = before.getTime() - now.getTime();
    const paevad = Math.ceil(ms / (1000 * 60 * 60 * 24));

    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Sünnipäevani on jäänud: "
        + paevad + " päeva";
}
