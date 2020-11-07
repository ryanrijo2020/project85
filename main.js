canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
background_image = "racing.jpg";
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x =400;
car1_y =400;

car2_width = 120;
car2_height = 70;
car2_image = "picture1.png";
car2_x = 10;
car2_y = 100;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.scr = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.scr = car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    var asci=e.keyCode;
    console.log(asci);
    if (asci == '38') {
        car1_up();
        console.log("up arrow key");
    
    
    }
    if (asci == '40') {
        car1_down();
        console.log("down arrow key");
        
       
    }     
    if (asci == '37') {
        car1_left();
        console.log("left arrow key");
    
    
    }
    if (asci == '39') {
        car1_right();
        console.log("right arrow key");
    
    
    }
    if (asci == '87') {
        car2_up();
        console.log("key w");
        
        
        }
        if (asci == '83') {
            car2_down();
            console.log("key s");
            
            
        }     
        if (asci == '65') {
            car2_left();
            console.log("key a");
        
        
        }
        if (asci == '68') {
            car2_right();
            console.log("key d");
        
        
        } 
        if (car1_x > 700)   
        console.log("car1 Won");
        document.getElementById('game_status').innerHTML = "Car 1 Won !!"
}
function  car1_up() {
        if (car1_y >= 0) {
            car1_y = car1_y - 10;
            console.log("When up arrow pressed, x = " + car1_x + " l y = " + car1_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();


        }
}
function  car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow pressed, x = " + car1_x + " l y = " + car1_y);
        uploadBackground();
        uploadcar2();
        

    }
}
function  car1_right() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When right arrow pressed , x = " + car1_x + " l y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        

    }
}   
function  car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow pressed , x = " + car1_x + " l y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
        

    }
}
function  car2_up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow pressed, x = " + car1_x + " l y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();


    }
}
function  car2_down() {
if (car1_y <= 500) {
    car1_y = car1_y + 10;
    console.log("When down arrow pressed, x = " + car1_x + " l y = " + car1_y);
    uploadBackground();
    uploadcar2();
    

}
}
function  car2_right() {
if (car1_y <= 500) {
    car1_y = car1_y + 10;
    console.log("When right arrow pressed , x = " + car1_x + " l y = " + car1_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
    

}
}   
function  car2_left() {
if (car1_x >= 0) {
    car1_x = car1_x - 10;
    console.log("When left arrow pressed , x = " + car1_x + " l y = " + car1_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
    

}
}


