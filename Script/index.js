const btn = document.querySelector("#botaoCrip");
const btnD = document.querySelector("#botaoDescrip");
const mensagemEntrada = document.querySelector("#campoMsgEntrada").value;
const mensagemSaida = document.getElementById("campoMsgSaida");

btn.addEventListener("click", () => {
  const mensagemEntrada = document.querySelector("#campoMsgEntrada").value;
  if (mensagemEntrada == "") {
    alert("Digite uma mensagem!");
  } else {
    criptografar(mensagemEntrada);
  }
});

btnD.addEventListener("click", () => {
  const mensagemEntrada = document.querySelector("#campoMsgEntrada").value;
  if (mensagemEntrada == "") {
    alert("Digite uma mensagem!");
  } else {
    descriptografar(mensagemEntrada);
  }
});

function criptografar(string) {
  let criptografia = "";
  for (let i = 0; i < string.length; i++) {
    const caractere = string[i];
    if (caractere === "a") {
      criptografia += "ai";
    } else if (caractere === "e") {
      criptografia += "enter";
    } else if (caractere === "i") {
      criptografia += "imes";
    } else if (caractere === "o") {
      criptografia += "ober";
    } else if (caractere === "u") {
      criptografia += "ufat";
    } else {
      criptografia += caractere;
    }
  }
  return (mensagemSaida.innerText = criptografia.toLowerCase());
}

function descriptografar(string) {
  return (mensagemSaida.innerText = string
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u"));
}

const btnCopiar = document
  .getElementById("btnCopiar")
  .addEventListener("click", copiar);
function copiar() {
  const x = document.querySelector("#campoMsgSaida").value;
  navigator.clipboard.writeText(x);
}
