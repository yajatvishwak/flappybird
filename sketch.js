var bird;
var pipes = [];
var score;
function setup(){
    createCanvas(400,600);
    bird = new Bird();
    pipes.push(new Pipe());
    score = 0;
   
}
function draw(){
    background(0);
    bird.update();
    bird.show();

    for(var i = pipes.length-1; i >=0; i--){
        pipes[i].show();
        pipes[i].update();
        if(pipes[i].hits(bird)){
            createP(
                "<h1>Score:</h1> "+ this.score);
            console.log('BirdHit');
            noLoop();
        }


        if (pipes[i].offscreen()){
            this.score +=1;
            pipes.splice(i,1);
        }
    }

    if(frameCount % 100 ==0){
        pipes.push(new Pipe());
    }
}
function keyPressed(){
    if(key == ' '){
        bird.up();
    }
}
function touchStarted(){
    bird.up();
}