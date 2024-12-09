foOldal();

function foOldal(){
    const alap = document.getElementById("alap");
    const icon = document.getElementById("icon");
    const title = document.getElementById("title");

    alap.textContent="";
    alap.className="";
    icon.href="verify.ico";
    title.textContent="Fo oldal"

    alap.className="vh-100 d-flex justify-content-center align-items-center bg-secondary";

    const csillagokGomb=document.createElement("button");
    csillagokGomb.textContent="Csillagok";
    csillagokGomb.className="btn btn-dark fs-1 me-5";
    csillagokGomb.id="topjoyGomb";
    alap.append(csillagokGomb);

    const topjoyGomb=document.createElement("button");
    topjoyGomb.textContent="Topjoy";
    topjoyGomb.className="btn btn-dark fs-1";
    topjoyGomb.id="topjoyGomb";
    alap.append(topjoyGomb);

    csillagokGomb.addEventListener("click",function(){
        csillagokFutas();
    });

    topjoyGomb.addEventListener("click",function(){
        topjoyFutas();
    });
}

function vissza(){
    const visszaDiv=document.createElement("div");
    visszaDiv.className="d-flex justify-content-center";
    visszaDiv.id="visszaDiv";
    foDiv.append(visszaDiv);

    const visszaGomb=document.createElement("button");
    visszaGomb.textContent="Vissza a fő oldalra.";
    visszaGomb.className="d-flex justify-content-center bg-dark fw-bold btn btn-block text-white p-3 mt-5";
    visszaGomb.id="gomb";
    visszaDiv.append(visszaGomb);

    visszaGomb.addEventListener("click",function(){
        foOldal();
    });
}

function topjoyFutas(){
    alap.textContent="";
    alap.className="";
    icon.href="topjoy.ico";
    title.textContent="Topjoy"

    alap.style.backgroundColor="#1C203A";

    const foDiv=document.createElement("div");
    foDiv.className="vh-100 d-flex flex-column align-content-center justify-content-center";
    foDiv.id="foDiv";
    alap.append(foDiv);
    
    const kepDiv=document.createElement("div");
    kepDiv.className="d-flex justify-content-center";
    kepDiv.id="kepDiv";
    foDiv.append(kepDiv);

    const kep=document.createElement("img");
    kep.src="topjoy.png";
    kep.style.width="200px";
    kep.className="align-iitems-center";
    kepDiv.append(kep);

    const szovegDiv=document.createElement("div");
    szovegDiv.className="d-flex justify-content-center";
    szovegDiv.id="szovegDiv";
    foDiv.append(szovegDiv);

    const szoveg=document.createElement("div");
    szoveg.className="d-flex justify-content-center text-white rounded h4 w-75 p-3 m-0";
    szoveg.id="szoveg";
    szoveg.style.backgroundColor="#23af6b"
    szoveg.textContent="A BELSŐ SZÁMÍT";
    szovegDiv.append(szoveg);

    const gombDiv=document.createElement("div");
    gombDiv.className="d-flex justify-content-center";
    gombDiv.id="gombDiv";
    foDiv.append(gombDiv);

    const gomb=document.createElement("button");
    gomb.textContent="Új üzenetet kérek";
    gomb.className="d-flex justify-content-center w-75 bg-success btn btn-block text-white p-3";
    gomb.id="gomb";
    gombDiv.append(gomb);

    vissza();
    
    const tomb = ["A BELSŐ SZÁMÍT","A CSILLAGOK FIGYELNEK","A DOLGOK JÓL HALADNAK","VIDÁMSÁG! :)","VIDD VÉGIG AZ ÖTLETEIDET!","VIGYÉL EGY JÓ HÍRT!"];
    
    gomb.addEventListener("click",function(){
        let szam = Math.floor(Math.random()*tomb.length);
        szoveg.textContent = tomb[szam];
    });
}

function csillagokFutas(){
    alap.textContent="";
    alap.className="";
    icon.href="csillag.ico";
    title.textContent="Csillagok"

    alap.className="vh-100 d-flex justify-content-center align-items-center bg-secondary";

    const foDiv=document.createElement("div");
    foDiv.className="d-flex flex-column align-items-center";
    foDiv.id="foDiv";
    alap.append(foDiv);

    const kep=document.createElement("img");
    kep.src="https://m.media-amazon.com/images/I/51eg55uWmdL._AC_SY679_.jpg";
    kep.style.width="170px";
    kep.className="rounded mb-4";
    foDiv.append(kep);

    const osszcsillagdiv=document.createElement("div");
    osszcsillagdiv.id="osszcsillagdiv";
    foDiv.append(osszcsillagdiv);

    const gombok=document.createElement("div");
    gombok.id="gombok";
    gombok.className="d-flex mt-4";
    foDiv.append(gombok);

    const add=document.createElement("button");
    add.textContent="Csillag Hozzáadása";
    add.className="btn btn-success me-2";
    add.id="add";
    gombok.append(add);

    const tavolit=document.createElement("button");
    tavolit.textContent="Csillag Eltávolítása";
    tavolit.className="btn btn-danger";
    tavolitid="tavolit";
    gombok.append(tavolit);

    vissza();

    let szam = 0;

    add.addEventListener("click",function(){
        if(szam<5){
            osszcsillagdiv.textContent="";
            szam++;
            for (let i = 0; i < parseInt(szam); i++) {
                const csillag=document.createElement("csillag");
                csillag.textContent='★';
                csillag.className="text-warning fs-1";
                osszcsillagdiv.append(csillag);
            }
        }
        else alert("Elérted a maximális értékelést.");
    });

    tavolit.addEventListener("click",function(){
        if(szam>0){
            osszcsillagdiv.textContent="";
            szam--;
            for (let i = 0; i < parseInt(szam); i++) {
                const csillag=document.createElement("csillag");
                csillag.textContent='★';
                csillag.className="text-warning fs-1";
                osszcsillagdiv.append(csillag);
            }
        }
        else alert("Elérted a minimum értékelést.");
    });
}
