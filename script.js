document.getElementById('image').addEventListener('click', image)
document.getElementById('text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('color').addEventListener('click', color)
document.getElementById('show').addEventListener('click', show)

function image () {
  document.getElementById('pizza').src = "yes.jpg"
}

function text () {
  document.getElementById('Krab').innerHTML = "Fun fact: Did you know McDonalds served pizza!"
}

function hide () {
  document.getElementById('Krab').style.display = "none"
  document.getElementById('pizza').style.display = "none"
}

function color () {
  document.body.style.backgroundColor = "yellow"
}

function show () {
  document.getElementById('Krab').style.display = "block"
  document.getElementById('pizza').style.display = "block"
}
