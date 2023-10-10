let width = 800,
height = 400,
G = 1;
var ball = new Ball();
var arrasto = 0;
var comprimento = 180;

function setup() {
    canvas = createCanvas(width, height);
    canvas.parent('sketch-holder');
    canvas.position(x=(windowWidth - width) / 2);
    background(220);

    var gui = createGui('Controles');
    sliderRange(0, 10, 0.1);
    gui.addGlobals('arrasto');
    sliderRange(1, 390, 1);
    gui.addGlobals('comprimento');    

    ball.len = comprimento;
    ball.x_origin = width/2; // x da origem
    ball.y_origin = 0; // y origem
    ball.ang = PI/2;
    ball.arrasto = arrasto;
    ball.tanAccel = 0;

    ball.update();

    fill(0,0,255);
    stroke(0);
    circle(ball.x, ball.y, 20);
}


function draw() {
    background(220);
    
    line(ball.x_origin, ball.y_origin, ball.x, ball.y);
    circle(ball.x, ball.y, 20);
    

    ball.update();
    ball.arrasto = arrasto;
    ball.len = comprimento;
}


function Ball() {

    this.angVel = 0;

    this.update = function() {
        this.x = this.x_origin + Math.sin(this.ang) * this.len; // posição x com base no angulo
        this.y = this.y_origin + Math.cos(this.ang) * this.len; // posição y com base no angulo
        this.tanAccel = G * Math.sin(this.ang) + this.arrasto*this.angVel ; // aceleração tangencial
        this.angAccel = - this.tanAccel/this.len; // aceleração angular
        this.angVel += this.angAccel ;
        this.ang += this.angVel;
    };
}

function restart() {

}
