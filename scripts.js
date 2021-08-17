let movimentos = 0;
let compara = [];
let i = 0;
let j = 0;
let z = 0;
let contador = 0;
let numCartas;

function comparador() {
  return Math.random() - 0.5;
}

function distribuirCartas() {
  numCartas = Number(prompt("Com quantas cartas quer jogar?"));
  let cartas = document.querySelector(".cartas");
  let index = 0;
  let list = "";
  const img_face = [
    "/assets/fiestaparrot.gif",
    "/assets/fiestaparrot.gif",
    "/assets/bobrossparrot.gif",
    "/assets/bobrossparrot.gif",
    "/assets/revertitparrot.gif",
    "/assets/revertitparrot.gif",
    "/assets/explodyparrot.gif",
    "/assets/explodyparrot.gif",
    "assets/metalparrot.gif",
    "assets/metalparrot.gif",
    "/assets/tripletsparrot.gif",
    "/assets/tripletsparrot.gif",
    "/assets/unicornparrot.gif",
    "/assets/unicornparrot.gif"
  ];

  while (numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0 || !numCartas) {
    numCartas = Number(prompt("Com quantas cartas quer jogar?"));
  }

  let imagens = img_face.slice(0, numCartas); //fatiando a array de acordo com o numero de cartas que eu quero

  imagens.sort(comparador); //está embaralhando o array fatiado

  while (index < numCartas) {
    list =
      list +
      `
      <div class="pai" onclick="VirarCarta(this)">
      <div class="face front">
      </div>
      <div class ="verso" >
         <img src=" ${imagens[index]}"/>
      </div>     
     </div>            
        `;
    index++;
  }
  cartas.innerHTML = list;
}

distribuirCartas();

function VirarCarta(escolhida) {
  const verso = escolhida.querySelector(".verso");
  const frente = escolhida.querySelector(".face");
  const imagem = escolhida.querySelector("img");

  verso.classList.add("face");
  frente.classList.add("referencia-frente");
  verso.classList.add("referencia-verso");

  compara.push(imagem.src);

  movimentos++;

  if (compara.length === 2) {
    // se escolheu duas cartas, 2 situações
    if (compara[0] !== compara[1]) {
      //diferentes
      setTimeout(DesvirarCarta, 1000);
    } else if (compara[0] === compara[1]) {
      //iguais
      while (j < 2) {
        const verso = document.querySelector(".referencia-verso");
        const frente = document.querySelector(".referencia-frente");
        verso.classList.remove("referencia-verso");
        frente.classList.remove("referencia-frente");
        j++;
        contador++;
      }
      compara = [];
      j = 0;
    }
  }
  if (contador === numCartas) {
    setTimeout(Finalizar, 500);
  }
}

function Finalizar() {
  alert("Você venceu com " + movimentos + " jogadas");
}

function DesvirarCarta() {
  while (i < 2) {
    const verso = document.querySelector(".referencia-verso");
    const frente = document.querySelector(".referencia-frente");

    verso.classList.remove("face");
    verso.classList.remove("referencia-verso");
    frente.classList.add("front");
    frente.classList.add("referencia-frente");

    console.log(frente);
    console.log(verso);

    i++;
  }
  compara = [];
  i = 0;
}
