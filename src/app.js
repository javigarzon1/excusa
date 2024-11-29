/* eslint-disable */
import "bootstrap";
import "./styles.css";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during myduring my lunch",
  "while I was praying"
];

function aleatoria(cadena) {
  let a = Math.floor(Math.random() * cadena.length);
  return cadena[a];
}

window.onload = function() {
  //write your code here

  let valorWho = aleatoria(who);
  let valorAction = aleatoria(action);
  let valorWhat = aleatoria(what);
  let valorWhen = aleatoria(when);

  const nuevaExcusa =
    valorWho + " " + valorAction + " " + valorWhat + " " + valorWhen;

  document.getElementById("excusa").innerHTML = nuevaExcusa;
};
