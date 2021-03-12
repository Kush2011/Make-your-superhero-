var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var player_img = "";
var block_img_height = "";
var block_img_width = "";
var block_img = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_img = Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(150);
        player_img.set({top:player_y, left:player_x});
        canvas.add(player_img);   
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_img = Img;
        block_img.scaleToWidth(block_img_width);
        block_img.scaleToHeight(block_img_height);
        block_img.set({top:player_y, left:player_x});
        canvas.add(block_img);   
    });
}
window.addEventListener( "keydown", myKeydown);
function myKeydown(e){
   keypressed = e.keyCode;
   console.log(keypressed);
   if (e.shiftKey == true && keypressed == '73'){
       block_img_height = block_img_height + 10;
       block_img_width = block_img_width + 10;
       console.log("Shift and I key pressed together");
       document.getElementById("current_width").innerHTML = block_img_width;
       document.getElementById("current_height").innerHTML = block_img_height;
   }
   if (e.shiftKey == true && keypressed == '80'){
    if (block_img_height == 0 && block_img_width == 0){
        block_img_height = 0;
        block_img_width = 0;
    }
    else {

    
    block_img_height = block_img_height - 10;
    block_img_width = block_img_width - 10;
    }
    console.log("Shift and P key pressed together");
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
}
if (keypressed == '38'){
    up();
    console.log("up");
}
if (keypressed == '39'){
    right();
    console.log("right");
}
if (keypressed == '40'){
    down();
    console.log("down");
}
if (keypressed == '37'){
    left();
    console.log("left");
}
if (keypressed == '87'){
    new_image('captain_america_left_hand.png');
    console.log("w");
}
if (keypressed == '67'){
    new_image('hulf_face.png');
    console.log("c");
}
if (keypressed == '68'){
    new_image('hulk_left_hand.png');
    console.log("d");
}
if (keypressed == '69'){
    new_image('hulk_legs.png')
    console.log("e");
}
if (keypressed == '108'){
    new_image('hulk_right_hand.png')
    console.log("l");
}
if (keypressed == '82'){
    new_image('hulkd_body.png')
    console.log("r");
}
if (keypressed == '84'){
    new_image('ironman_body.png')
    console.log("t");
}
if (keypressed == '85'){
    new_image('ironman_face.png')
    console.log("u");
}
if (keypressed == '89'){
    new_image('ironman_left_hand.png')
    console.log("y");
}
if (keypressed == '65'){
    new_image('ironman_legs.png');
    console.log("a");
}
if (keypressed == '66'){
    new_image('ironman_right_hand.png');
    console.log("b");
}
if (keypressed == '70'){
    new_image('spiderman_body.png');
    console.log("f");
}
if (keypressed == '71'){
    new_image('spiderman_face.png')
    console.log("g");
}
if (keypressed == '72'){
    new_image('spiderman_face.png')
    console.log("h");
}
if (keypressed == '73'){
    new_image('spiderman_left_hand.png')
    console.log("i");
}
if (keypressed == '74'){
    new_image('spiderman_right_hand.png')
    console.log("j");
}
if (keypressed == '75'){
    new_image('spiderman_legs.png')
    console.log("k");
}
if (keypressed == '77'){
    new_image('thor_face.png')
    console.log("m");
}
if (keypressed == '78'){
    new_image('thor_left_hand.png')
    console.log("n")
}
if (keypressed == '79'){
    new_image('thor_right_hand.png')
    console.log("o")
}
}
