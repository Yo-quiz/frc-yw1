// Lista completa de Yo-kai con sus nombres e imágenes
const yoKaiList = [
    { name: "Woko", img: "alcaldero.png" },
    { name: "Pagno", img: "sinna.png" },
    { name: "Alfoncéo", img: "sinnareno.png" },
    { name: "Toumou", img: "katano.png" },
    { name: "Lamlam'mou", img: "katananai.png" },
    { name: "Samoumouraï", img: "katakroken.png" },
    { name: "Sumochi", img: "mochimacho.png" },
    { name: "Mochimacho", img: "machimio.png" },
    { name: "Heaumer", img: "yelmandante.png" },
    { name: "Bushidos", img: "juntollero.png" },
    { name: "Âmiral", img: "genedaver.png" },
    { name: "Feulion", img: "flamileon.png" },
    { name: "Vibrilion", img: "tembloleon.png" },
    { name: "Siro", img: "sirleon.png" },
    { name: "Bonneto", img: "ludorai.png" },
    { name: "Sabri", img: "lustre.png" },
    { name: "Padelou", img: "Furtre.png" },
    { name: "Orox", img: "dortre.png" },
    { name: "Benkei", img: "benkei.png" },
    { name: "B3-NK1", img: "b3-nk1.png" },
    { name: "Sushiyama", img: "sushiyama.png" },
    { name: "Kapunki", img: "kapunki.png" },
    { name: "Scatcheur", img: "lucharabajo.png" },
    { name: "Scarmouche", img: "camperabajo.png" },
    { name: "Scarnage", img: "chafarabajo.png" },
    { name: "Zerberker", img: "osfurio.png" },
    { name: "Fouétar", img: "sacoco.png" },
    { name: "Morvobec", img: "mokopavo.png" },
    { name: "Matchou", img: "pachus.png" },
    { name: "Chaipô", img: "komemo.png" },
    { name: "Gagalurin", img: "tontolin.png" },
    { name: "Papa Ress", img: "yopaso.png" },
    { name: "Ralbouc", img: "puf.png" },
    { name: "Bastata", img: "yanomas.png" },
    { name: "Marra", img: "algazara.png" },
    { name: "Violette", img: "labizula.png" },
    { name: "Toutouïe", img: "cotilleja.png" },
    { name: "Babalance", img: "marulleja.png" },
    { name: "Mémétal", img: "esquelleja.png" },
    { name: "Cupistol", img: "cupistolo.png" },
    { name: "Donjouant", img: "casanovo.png" },
    { name: "Nonjouan", img: "casanono.png" },
    { name: "Padrézo", img: "ondivoro.png" },
    { name: "Emettor", img: "coberturo.png" },
    { name: "Dynamo", img: "estatinarca.png" },
    { name: "Télémir", img: "telespejo.png" },
    { name: "Nuiroir", img: "malpejismo.png" },
    { name: "Hiblusion", img: "iluho.png" },
    { name: "Hibrouille", img: "eluho.png" },
    { name: "Hibourling", img: "ubiuho.png" },
    { name: "Espi", img: "trilepata.png" },
    { name: "Etassivilia", img: "tetrariosa.png" },
    { name: "Tengu", img: "tengu.png" },
    { name: "Tengurou", img: "flamngu.png" },
    { name: "Kyubi", img: "kyubi.png" },
{ name: "Barakabo", img: "nievacolas.png" },
{ name: "Darabajoie", img: "tentelento.png" },
{ name: "Darumastar", img: "tentemacho.png" },
{ name: "Goruma", img: "tenterila.png" },
{ name: "Nanpart", img: "nihablar.png" },
{ name: "Passpa", img: "impas.png" },
{ name: "Granpart", img: "murallin.png" },
{ name: "Hauber", img: "lorigon.png" },
{ name: "Pachycoul", img: "inquielifante.png" },
{ name: "Persévéfant", img: "perselefante.png" },
{ name: "Boulapic", img: "globqueo.png" },
{ name: "Bouldacier", img: "globtundente.png" },
{ name: "Lama Laya", img: "montaña_loca.png" },
{ name: "Etna Magma", img: "lord_lava.png" },
{ name: "Loubarbare", img: "rebelcebu.png" },
{ name: "Racaîd", img: "caporrista.png" },
{ name: "Frérosse", img: "hermanion.png" },
{ name: "Coléroptère", img: "pegarabajo.png" },
{ name: "Rhinolimit", img: "enormarabajo.png" },
{ name: "Corniaque", img: "cuernarabajo.png" },
{ name: "Castelius III", img: "castelius_III.png" },
{ name: "Castelius II", img: "castelius_II.png" },
{ name: "Castelius I", img: "Castelius_I.png" },
{ name: "Castelius Max", img: "Maxicastelius.png" },
{ name: "Robonyan", img: "robonyan.png" },
{ name: "Oronyan", img: "aureonyan.png" },
{ name: "Misterre", img: "pom.png" },
{ name: "Ressak", img: "flus.png" },
    { name: "Squarlett", img: "deslumbrella.png" },
    { name: "Margoth", img: "rechinella.png" },
    { name: "Squelèbelle", img: "esquelebella.png" },
    { name: "Cigalopin", img: "ningarra.png" },
    { name: "Cigaillard", img: "habilgarra.png" },
    { name: "Cigazouille", img: "cantigarra.png" },
    { name: "Chihuaglagla", img: "escanlofrio.png" },
    { name: "Froahuahua", img: "frihuahua.png" },
    { name: "Cho-cho", img: "lavadenco.png" },
    { name: "Jibanyan", img: "jibanyan.png" },
    { name: "Epinyan", img: "espinyan.png" },
    { name: "Bandinyan", img: "pelochnyan.png" },
    { name: "Kappacap", img: "kappandante.png" },
    { name: "Appak", img: "kappadachin.png" },
    { name: "Kappaloha", img: "kapparfista.png" },
    { name: "Komasan", img: "komasan.png" },
    { name: "Komaous", img: "komaleon.png" },
    { name: "Komajiro", img: "komajiro.png" },
    { name: "Komistigri", img: "komatigrado.png" },
    { name: "Baku", img: "baku.png" },
    { name: "Tapur", img: "blanpir.png" },
    { name: "Pitou", img: "pufipatitas.png" },
    { name: "Choubidou", img: "pufilindo.png" },
    { name: "Satandre", img: "pufimaloso.png" },
    { name: "Angélik", img: "fristina.png" },
    { name: "Blizzaria", img: "granizia.png" },
    { name: "Damona", img: "damona.png" },
{ name: "Noripop", img: "cimbron.png" },
{ name: "Wakapoeira", img: "pasodon.png" },
{ name: "Salsalga", img: "ritma.png" },
{ name: "Amoiz", img: "kieroto.png" },
{ name: "Pikor", img: "zampo.png" },
{ name: "Granpapéti", img: "abuzampa.png" },
{ name: "Puissanfon", img: "gargazampa.png" },
{ name: "Grainpère", img: "aburroz.png" },
{ name: "Nomoné", img: "nomeda.png" },
{ name: "Noproblemo", img: "opti.png" },
{ name: "Papiltation", img: "enerposa.png" },
{ name: "Papiltension", img: "eneposa.png" },
{ name: "Hyprapillon", img: "mejorposa.png" },
{ name: "Vitapillon", img: "vivariposa.png" },
{ name: "Jojojoyeux", img: "felisonte.png" },
{ name: "Paradoxa", img: "reversa.png" },
{ name: "Potaumorose", img: "reversada.png" },
{ name: "Ratatam", img: "tricotom.png" },
{ name: "Supernoël", img: "dadivo.png" },
{ name: "Dédé", img: "bolilete.png" },
{ name: "Dédéstin", img: "doblilete.png" },
{ name: "Tontonerre", img: "papa_rayo.png" },
{ name: "Omnitonton", img: "tio_infinito.png" },
{ name: "Tata Aura", img: "mama_aura.png" },
{ name: "Tata Câlin", img: "tita_corazon.png" },
{ name: "Égaroni", img: "noguio.png" },
{ name: "Onisoi", img: "topami.png" },
{ name: "Tortico", img: "algio.png" },
{ name: "Tendino", img: "agujeto.png" },
{ name: "Contracto", img: "machaka.png" },
{ name: "Nihilistik", img: "negatisquito.png" },
{ name: "Émousstik", img: "deprisquito.png" },
{ name: "Grattoptère", img: "picorron.png" },
{ name: "Marcognito", img: "nomeven.png" },
{ name: "Ninjamévu", img: "nostoy.png" },
{ name: "Nihilo", img: "nul_.png" },
{ name: "Chauvekipeut", img: "encielago.png" },
{ name: "Chauv'coucou", img: "caserielago.png" },
{ name: "Vampiloc", img: "ermicielago.png" },
{ name: "Suspicioni", img: "suspicioni.png" },
{ name: "Ragioni", img: "pataletoni.png" },
{ name: "Contrarioni", img: "contrarioni.png" },
{ name: "Tengubre", img: "tengulecto.png" },
{ name: "Bibliotengu", img: "tengullon.png" },
{ name: "Nimpégase", img: "negasus.png" },
{ name: "Hennimi", img: "pifiasus.png" },
{ name: "Timidémon", img: "timidiablo.png" },
{ name: "Belzel", img: "osademonio.png" },
{ name: "Dente", img: "conde_caries.png" },
{ name: "Vénaldo", img: "avarqueroso.png" },
{ name: "Maltesse", img: "diables.png" },
{ name: "Malmidal", img: "ejemtos.png" },
{ name: "Écchinose", img: "erizlor.png" },
{ name: "Chiperpiou", img: "cartepollo.png" },
{ name: "Pioubidou", img: "rafaz.png" },
{ name: "Flamente", img: "ayay.png" },
{ name: "Volibrius", img: "horterraro.png" },
{ name: "Volatriste", img: "alarcion.png" },
{ name: "Corniot", img: "cantonio.png" },
{ name: "Bicorniot", img: "multiniche.png" },
{ name: "Cerbébert", img: "ser_bero.png" },
{ name: "Humidon", img: "goto.png" },
{ name: "Délujien", img: "sirimiri.png" },
{ name: "Fryzeur", img: "copo.png" },
{ name: "Kongel", img: "ventisquero.png" },
{ name: "Hémorhino", img: "coagulon.png" },
{ name: "Blablara", img: "reboca.png" },
{ name: "Umilie", img: "pilicajosa.png" },
{ name: "Lulugubre", img: "negatalia.png" },
{ name: "Pégaz", img: "cuesco.png" },
{ name: "Méphito", img: "peditum.png" },
{ name: "Misterbide", img: "graciosno.png" },
{ name: "Flopito", img: "hilarion.png" },
{ name: "Cenridion", img: "arruñona.png" },
{ name: "Jouvencia", img: "belladona.png" },
{ name: "Éterna", img: "eterna.png" },
{ name: "Insomnelle", img: "insomna.png" },
{ name: "Morféa", img: "morfea.png" },
{ name: "Noko", img: "noko.png" },
{ name: "Nénunoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Anghihihille", img: "anjijila.png" },
{ name: "Méroubadour", img: "tenongrio.png" },
{ name: "Urnaconda", img: "urnaconda.png" },
{ name: "Murhaine", img: "pezqueroso.png" },
{ name: "Saumhonni", img: "pezgativo.png" },
{ name: "Vexturgeon", img: "pezquiciado.png" },
{ name: "Dracounet", img: "draqui.png" },
{ name: "Sire Dragon", img: "lord_dragon.png" },
{ name: "Drago", img: "dragon_azur.png" },
{ name: "Bababou", img: "ido.png" },
{ name: "Tourneboul", img: "turdido.png" },
{ name: "Croquin", img: "pelluron.png" },
{ name: "Inisquale", img: "pringuron.png" },
{ name: "Claquille", img: "boquirroto.png" },
{ name: "Cocpille", img: "yopago.png" },
{ name: "Jacquasseur", img: "charlaton.png" },
{ name: "Bananar", img: "tochaplatano.png" },
{ name: "Vipètesec", img: "mandicoro.png" },
{ name: "Vipérale", img: "ciniserpe.png" },
{ name: "Vipairflay", img: "arfidio.png" },
{ name: "Octorgone", img: "venocto.png" },
{ name: "Octorgombre", img: "venoctoscuro.png" },
{ name: "Shogunyan", img: "shogunyan.png" },
{ name: "Komashura", img: "komasura.png" },
{ name: "Cabotin", img: "dandiniche.png" },
{ name: "Camaieul", img: "abuflorido.png" },
{ name: "Gorgouille", img: "dorantuo.png" },
{ name: "Saphinyan", img: "zafinyan.png" },
{ name: "Émeranyan", img: "esmenyan.png" },
{ name: "Rubinyan", img: "rubinyan.png" },
{ name: "Topanyan", img: "topanyan.png" },
{ name: "Diamanyan", img: "diamanyan.png" },
{ name: "Triptyk", img: "babamandra.png" },
{ name: "Crocho", img: "termascino.png" },
{ name: "Carpitaine", img: "bergantin.png" },
{ name: "Ombraptor", img: "animanstruo.png" },
{ name: "Sabroclair", img: "fantasmurai.png" },
{ name: "Inamygal", img: "tarantutor.png" },
{ name: "Dr Jobard", img: "dr._majarov.png" },
{ name: "McKraken", img: "mckraken.png" },
{ name: "McKraken", img: "mckraken_2.png" },
{ name: "Volteface", img: "duoleta.png" },
{ name: "Didgeai", img: "cantaderna.png" },
{ name: "Hydreux", img: "ojimandra.png" },
{ name: "Porcinator", img: "jabalupo.png" },
{ name: "Styx VI", img: "estigio_vi.png" },
{ name: "Nébulor", img: "clipso.png" },
{ name: "Pr Létripe", img: "dr._sintripas.png" },
{ name: "Hagacurée", img: "terrormadura.png" },
{ name: "Rancornet", img: "calarrupto.png" },
{ name: "Potofeu", img: "caldewok.png" },
{ name: "Gargaros", img: "gargantuo.png" },
{ name: "Ogralos", img: "cazamentires.png" },
{ name: "Orqanos", img: "demoniorco.png" },

];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

function showCongratsImage() {

    // Detener temporizador
    stopTimer();

    // Obtener tiempo final mostrado
    const tiempoTotal = document.getElementById("time").textContent;

    // Sonido de victoria
    const victorySound = new Audio("congrats.mp3");
    victorySound.volume = 0.8;
    victorySound.play().catch(() => {});

    // Panel lateral
    const finalPanel = document.createElement("div");
    finalPanel.style.position = "fixed";
    finalPanel.style.top = "0";
    finalPanel.style.right = "-350px";
    finalPanel.style.width = "320px";
    finalPanel.style.height = "100%";
    finalPanel.style.backgroundColor = "#0b2a4a";
    finalPanel.style.color = "white";
    finalPanel.style.padding = "20px";
    finalPanel.style.boxSizing = "border-box";
    finalPanel.style.zIndex = "1000";
    finalPanel.style.fontFamily = "Arial, sans-serif";
    finalPanel.style.display = "flex";
    finalPanel.style.flexDirection = "column";
    finalPanel.style.transition = "right 0.6s ease";

    // Botón cerrar
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "18px";

    closeBtn.addEventListener("click", () => {
        finalPanel.style.right = "-350px";
        setTimeout(() => finalPanel.remove(), 600);
    });

    // Título
    const title = document.createElement("h2");
    title.textContent = `Bravo ! Vous avez deviné tous les Yo-kai en ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";

    // Texto Twitter
    const followText = document.createElement("p");
    followText.innerHTML = `
        Si cela vous a plu, pourquoi ne pas me suivre sur Twitter ?: 
        <a href="https://x.com/salty_baconV2" target="_blank" style="color:#4fc3ff; text-decoration:none;">
        @Salty_BaconV2
        </a>
    `;
    followText.style.fontSize = "16px";
    followText.style.marginTop = "auto";

    // Montaje
    finalPanel.appendChild(closeBtn);
    finalPanel.appendChild(title);
    finalPanel.appendChild(followText);
    document.body.appendChild(finalPanel);

    // Animación de entrada
    setTimeout(() => {
        finalPanel.style.right = "0";
    }, 50);
}


// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "Êtes-vous sûr de vouloir partir ? Tous les progrès seront perdus.";
    }
});

