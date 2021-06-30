const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    stone = new Stone(600,350,50,50);
    iron = new Iron(700,300);
    rubber = new Rubber(800,400,60);
    hammer = new Hammer(500,300);
    plane = new Plane(600,550,1200,20)
}
function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    stone.display();
}