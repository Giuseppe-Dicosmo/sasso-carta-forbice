const sasso = document.querySelector("#sasso").value;
const carta = document.querySelector("#carta").value;
const forbici = document.querySelector("#forbici").value;

const scoreUser = document.querySelector("#score-user");
const scoreBot = document.querySelector("#score-bot");

let punteggioUser = 0;
let punteggioBot = 0;

document.body.addEventListener("click", play);

function play(event) {
  const buttonValue = event.target.value;
  console.log("user", buttonValue);

  if (buttonValue) {
    let bot = Math.floor(Math.random() * 3 + 1);
    console.log("bot", bot);

    if (buttonValue == 1) {
      sassoPlay(bot, buttonValue);
    } else if (buttonValue == 2) {
      cartaPlay(bot, buttonValue);
    } else if (buttonValue == 3) {
      forbiciPlay(bot, buttonValue);
    }

    //crea delle immagini
    user(event, bot);

    //stampa i punteggi
    console.log("🚀punteggio user", punteggioUser);
    console.log("🚀punteggio bot", punteggioBot);
    scoreUser.textContent = `${punteggioUser}`;
    scoreBot.textContent = `${punteggioBot}`;

    //dichiara chi è il vincitore
    winLost(punteggioUser, punteggioBot);

    //resetta il Math.random
    bot.reset();
  }
}

function sassoPlay(bot, buttonValue) {
  if (forbici == bot) {
    punteggioUser++;
    console.log("hai vinto");
  } else if (bot == buttonValue) {
    punteggioBot++;
    punteggioUser++;
    console.log("hai pareggiato");
  } else {
    punteggioBot++;
    console.log("hai perso");
  }
}

function cartaPlay(bot, buttonValue) {
  if (sasso == bot) {
    punteggioUser++;
    console.log("hai vinto");
  } else if (bot == buttonValue) {
    punteggioBot++;
    punteggioUser++;
    console.log("hai pareggiato");
  } else {
    punteggioBot++;
    console.log("hai perso");
  }
}

function forbiciPlay(bot, buttonValue) {
  if (carta == bot) {
    punteggioUser++;
    console.log("hai vinto");
  } else if (bot == buttonValue) {
    punteggioBot++;
    punteggioUser++;
    console.log("hai pareggiato");
  } else {
    punteggioBot++;
    console.log("hai perso");
  }
}

// user
const imgUser = document.querySelector(".img-user");
let userImg = document.createElement("figure");

//bot
const imgBot = document.querySelector(".img-bot");
let botImg = document.createElement("figure");

function user(e, bot) {
  //crea un immagine per il container user
  userImg.textContent = `${e.target.textContent}`;
  imgUser.textContent = ``;
  imgUser.append(userImg);

  console.log("img user", userImg);

  //crea un immagine per il container bot
  const bottun = document.querySelector(`button:nth-child(${bot})`);
  botImg.textContent = `${bottun.textContent}`;
  imgBot.textContent = ``;
  imgBot.append(botImg);

  console.log("img bot", botImg);
}

const modal = document.querySelector("#modal");
const risposta = document.querySelector("#risposta");
const closeModal = document.querySelector(".close-button");

function winLost(punteggioUser, punteggioBot) {
  if (punteggioUser == 10) {
    risposta.textContent = `COMPLIMENTI HAI VINTO 😁`;
    console.log("COMPLIMENTI HAI VINTO");
    modal.style.display = "flex";
    modal.classList.add("modal-win");
    modal.showModal();
  } else if (punteggioBot == 10) {
    risposta.textContent = `MI DISPIACE HAI PERSO 😫`;
    console.log("MI DISPIACE HAI PERSO");
    modal.style.display = "flex";
    modal.classList.add("modal-lost");
    modal.showModal();
  } else if (punteggioUser == 10 && punteggioBot == 10) {
    risposta.textContent = `HAI PAREGGIATO 🙂`;
    console.log("HAI PAREGGIATO");
    modal.style.display = "flex";
    modal.classList.add("modal-tie");
    modal.showModal();
  }
}

closeModal.addEventListener("click", () => {
  modal.close();

  modal.style.display = "none";

  punteggioUser = `0`;
  punteggioBot = `0`;

  imgUser.textContent = ``;
  imgBot.textContent = ``;
});
