const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var pig1, pig2, pig3, pig4;
var log1, log2, log3, log4, log5, log6, log7, log8;
var bird;



function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70 );
    box5 = new Box(810, 160, 70, 70);

    box6 = new Box(300,320,70,70);
    box7 = new Box(520,320,70,70);
    box8 = new Box(300, 240, 70, 70);
    box9 = new Box(530, 240, 70, 70 );
    box10 = new Box(410, 160, 70, 70);

    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);

    pig3 = new Pig(410, 350);
    pig4 = new Pig(410, 240);


    log1 = new Log(810, 260, 300, PI/2);
    log2 = new Log(810, 180, 300, PI/2);
    log3 = new Log(760, 120, 150, PI/10);
    log4 = new Log(870, 120, 150, -PI/10);

    log5 = new Log(410, 260, 300, PI/2);
    log6 = new Log(410, 180, 300, PI/2);
    log7 = new Log(360, 120, 150, PI/10);
    log8 = new Log(470, 120, 150, -PI/10);

    bird = new Bird(100, 100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();


    ground.display();

    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();

    bird.display();

}