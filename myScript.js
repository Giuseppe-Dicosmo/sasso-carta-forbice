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

    if (bot == sasso.value && bot == forbici.value && bot == carta.value) {
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

    console.log("🚀punteggio user", punteggioUser);
    console.log("🚀punteggio bot", punteggioBot);
    scoreUser.textContent = `${punteggioUser}`;
    scoreBot.textContent = `${punteggioBot}`;

    //crea delle immagini
    const imgUserbot = user(event, bot);

    const punteggi = punteggio(punteggioUser, punteggioBot);

    bot.reset();
  }
}

function user(e, bot) {
  //crea un immagine per il container user
  const imgUser = document.querySelector(".img-user");

  let userImg = document.createElement("figure");

  userImg.textContent = `${e.target.textContent}`;
  imgUser.textContent = ``;
  imgUser.append(userImg);

  console.log("img user", userImg);

  //crea un immagine per il container bot
  const imgBot = document.querySelector(".img-bot");

  let botImg = document.createElement("figure");

  const bottun = document.querySelector(`button:nth-child(${bot})`);

  botImg.textContent = `${bottun.textContent}`;
  imgBot.textContent = ``;
  imgBot.append(botImg);

  console.log("img bot", botImg);
}

function punteggio(punteggioUser, punteggioBot) {
  if (punteggioUser == 10) {
    console.log("Ha vinto l'utente");
  } else if (punteggioBot == 10) {
    console.log("Ha vinto il bot");
  }
}
