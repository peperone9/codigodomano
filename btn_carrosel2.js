var bolas = document.querySelector('.bolas')
var quant = document.querySelectorAll('.cupcake_img')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var back = document.getElementById('back')


//cria a bolinha pra imagem
for(let i=0; i < quant.length - 1; i++){
    var div = document.createElement('div')
    div.id = i
    bolas.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')


var pos = document.querySelectorAll('.bolas div')

for(let i=0; i< pos.length; i ++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        slide()
     })
}

back.addEventListener('click', ()=>{
    atual--
    slide()
})
next.addEventListener('click', ()=>{
    atual++
    slide()
})
function slide(){
    if(atual >= quant.length - 1){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length - 2
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -400*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}

//carrosel bebida//
var atual1 = 0
var next1 = document.getElementById('next1')
var back1 = document.getElementById('back1')
var ball = document.querySelector('.ball')
var quant1 = document.querySelectorAll('.bebida_img')
var imagem1 = document.getElementById('atual1')

for(let i=0; i < quant1.length - 1; i++){
    var div = document.createElement('div')
    div.id = i + 4
    ball.appendChild(div)
}
document.getElementById('4').classList.add('imgAtual1')

var pos1 = document.querySelectorAll('.ball div')

for(let i=0; i< pos1.length; i ++){
    pos1[i].addEventListener('click', ()=>{
        atual1 = pos1[i].id
        slide1()
     })
}
back1.addEventListener('click', ()=>{
    atual1--
    slide1()
})
next1.addEventListener('click', ()=>{
    atual1++
    slide1()
})
function slide1(){
    if(atual1 >= quant1.length - 1){
        atual1 = 0
    }
    else if(atual1 < 0){
        atual1 = quant1.length - 2
    }
    document.querySelector('.imgAtual1').classList.remove('imgAtual1')
    imagem1.style.marginLeft = -400*atual1+'px'
    document.getElementById(atual1).classList.add('imgAtual1')
}