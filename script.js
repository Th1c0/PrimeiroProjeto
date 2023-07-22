function toggleMode() {
  const html = document.documentElement
  html.classList.toggle ("light")

  // pegar a tag img
  const img = document.querySelector ("#profile img")
  //  if (html.classList.contains('light')){

  if (html.classList.contains("light")) {
    img.setAttribute ("src", "./assets/5DCCBE51-EBD3-487E-99E7-CDDE22A3C8C6.JPG")
  }

  else {
    img.setAttribute ('src', './assets/BA8F1710-B9FB-4DEF-8656-42662C38DFA5.JPG')
  }
  //  html.classList.remove ('light')
  //} else {
  //  html.classList.add ('light')
  //}
}
