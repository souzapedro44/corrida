
var hipnoticalball, database;
var position

function setup(){
    database= firebase.database();
    console.log(database);
    createCanvas(500,500);
    hipnoticalball = createSprite(250,250,10,10);
    hipnoticalball.shapeColor = "red";
    var hipnoticalballPosition = database.ref('bola/position');
    hipnoticalballPosition.om('value',readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('bola/position').set({
        'x':position.x+x, 'y':position.y+y
    })
 }

    function readPosition(data){
        position = data.val();
        console.log(position.x);
        hipnoticalball.x = position.x;
        hipnoticalball.y = position.y;
    }

    function showError(){
        console.log('error in writing to the database');
    }
