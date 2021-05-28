canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "Car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "Car2.png";
car2_x = 10;
car2_y = 100;

background_image = "https://thumbs.gfycat.com/MatureCrazyJunco-max-1mb.gif";

function new_background(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;

    car1_image_tag = new Image();
    car1_image_tag.onload = uploadcar1;
    car1_image_tag.src = car1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = uploadcar2;
    car2_image_tag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image_tag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image_tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log("keydown");
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up_arrow_key");
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("down_arrow_key");
    }
    if(keyPressed == '37')
    {
        car1_left();
        console.log("left_arrow_key");
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right_arrow_key");
    }



    if(keyPressed == '87')
    {
        car2_up();
        console.log("w_key");
    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log("s_key");
    }
    if(keyPressed == '67')
    {
        car2_left();
        console.log("a_key");
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("d_key");
    }


    if(car1_x > 700)
    {
        console.log("Car1_Won");
        document.getElementById('game_status').innerHTML = "Car1 Won!";
    }

    if(car2_x > 700)
    {
        console.log("Car2_Won");
        document.getElementById('game_status').innerHTML = "Car2 Won!";
    }
}

function car1_up()
{
    if(car1_y >= 0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow key is pressed, x = "+car1_x+" | y = "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up()
{
    if(car2_y >= 0)
    {
        car2_y = car2_y - 10;
        console.log("When up arrow key is pressed, x = "+car2_x+" | y = "+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y <= 500)
    {
        car1_y = car1_y + 10;
        console.log("When up arrow key is pressed, x = "+car1_y+" | y = "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down()
{
    if(car2_y <= 500)
    {
        car2_y = car2_y + 10;
        console.log("When up arrow key is pressed, x = "+car2_y+" | y = "+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x > 0)
    {
        car1_x = car1_x - 10;
        console.log("When up arrow key is pressed, x = "+car1_x+" | y = "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if(car2_x > 0)
    {
        car2_x = car2_x - 10;
        console.log("When up arrow key is pressed, x = "+car2_x+" | y = "+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if(car1_x <= 700)
    {
        car1_x = car1_x + 10;
        console.log("When up arrow key is pressed, x = "+car1_x+" | y = "+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right()
{
    if(car2_x <= 700)
    {
        car2_x = car2_x + 10;
        console.log("When up arrow key is pressed, x = "+car2_x+" | y = "+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
