document.getElementById('image').addEventListener('click', image)
document.getElementById('text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('color').addEventListener('click', color)
document.getElementById('show').addEventListener('click', show)

function image () {
  document.getElementById('pizza').src = "yes.jpg" // changes image
}

function text () {
  document.getElementById('krab').innerHTML = "Fun fact: Did you know McDonalds served pizza!" // changes teh text
}

function hide () {
  document.getElementById('krab').style.display = "none"
  document.getElementById('pizza').style.display = "none" /* Makes both text and image disapper */
}

function color () {
  document.body.style.backgroundColor = "yellow" //Changes background color
}

function show () {
  document.getElementById('krab').style.display = "block"
  document.getElementById('pizza').style.display = "block" /* Makes both text and image apper */
}
