function kyttekalk(){
    let vastus4=document.getElementById("vastus4");
    let km=document.getElementById("km").value;
    let kulu=document.getElementById("kulu").value;
    let tyyp=document.getElementById("kyttetyyp").value;
    let pilt=document.getElementById("kyttepilt");

    const bensiin=1.65;
    const diisel=1.55;
    const gaas=1.20;

    if(tyyp === "bensiin"){
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr9qsOFt7lsgKA--I1Lsylf0-lqHRtO4hH1F6uVUGmA&s=10";
        vastus4.innerHTML="Sõiduhind: "+
            (km*kulu/100*bensiin).toFixed(2)+"€";
    }
    if(tyyp === "diisel"){
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Jc8HXKfWrVmZXR-nhhrfdqHae4NI_T3ujvXYNipQvw&s=10";
        vastus4.innerHTML="Sõiduhind: "+
            (km*kulu/100*diisel).toFixed(2)+"€";
    }
    if(tyyp === "gaas"){
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3-3kVW2gpCT8S8SElzp_GDJ90V_RZAJT34rDcOH66w&s=10";
        vastus4.innerHTML="Sõiduhind: "+
            (km*kulu/100*gaas).toFixed(2)+"€";
    }
    if(tyyp === "vali"){
        vastus4.innerHTML="";
    }
}