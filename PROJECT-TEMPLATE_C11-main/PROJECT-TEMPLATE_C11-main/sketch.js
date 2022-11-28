var ship ,shipImg1; //variavel do ship
var sea ,seaImg; //variavel do sea
function preload(){
//preload vai carregar arquivos de imagens (.PNG) e som (.MP3)
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  //setup vai definir as configurações
  //cria a tela
  createCanvas(600,200);
  //crie um sprite de ship
  ship = createSprite(50, 180, 20, 50);
  //adicione a animação criada no preload
  ship.addAnimation("running", shipImg1)
  //definir a escala
  ship.escale = 0.5
  //definir a posição inicial do eixo horizontal
  ship.x = 10
  sea = createSprite(400, -80, 200, 200);
  //adicione a animação criada no preload
  sea.addImage(seaImg)
  //definir a escala
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}

function draw() {
  background("blue");
    drawSprites();
}
