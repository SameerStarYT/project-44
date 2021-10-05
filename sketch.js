var score =0;
var background , bottle1, bottle2, bottle3, bottle4, bottle5, bottle6, bullet, M1887;

var backgroundImg , bottle1Img , bottle2Img , bottle3Img , bottle4Img, bottle5Img, bottle6Img, bulletImg,
 M1887Img;

 var bottle1Group , bottle2Group, bottle3Group, bottle4Group, bottle5Group, bottle6Group, bulletGroup,
  M1887Group;

  var life =3;
  var score =0;
  var gameState = 1

  function preload(){
    M1887Img = loadImage("M1887.png")
    bottle1Img = loadImage("bottle1.png")
    bottle2Img = loadImage("bottle2.png")
    bottle3Img = loadImage("bottle3.png")
    bottle4Img = loadImage("bottle4.png")
    bottle5Img = loadImage("bottle5.png")
    bottle6Img = loadImage("bottle6.png")
    backgroundImg = loadImage("background.png")
  }

  function setup(){
    createCanvas (800,800)

    backBoard = createSprite(50,width/2,100,height)
    backBoard,addImage(backgroundImg)

    M1887 = createSprite(100, height/2, 50,50)
    M1887.addImage(M1887Img)
    M1887,scale=0.2;

    bulletGroup = createGroup();
    bottle1Group = createGroup();
    bottle2Group = createGroup();
    bottle3Group = createGroup();
    bottle4Group = createGroup();
    bottle5Group = createGroup();
    bottle6Group = createGroup();

    scoreboard= createElement("h1");
  }

  function draw(){
    background("red")

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  }