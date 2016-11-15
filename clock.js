/**
 * Created by Administrator on 2016/11/2.
 */
window.onload = function draw() {
    var canvas = document.getElementById("clock");
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var r = width / 2;
    var rem=width/200;
    function drawClock() {
        context.save();
        context.translate(r, r);
        context.beginPath();
        context.lineWidth = 10*rem;
        context.strokeStyle="#a7a7a7";
        context.arc(0, 0, r-context.lineWidth/2, 0, 2 * Math.PI, false);
        context.stroke();

        (function hour(){
        var hour=[3,4,5,6,7,8,9,10,11,12,1,2];
        context.font=18*rem+"px arial";
        context.textAlign="center";
        context.textBaseline="middle";
            for (var i = 0; i <hour.length; i++) {
            var num=hour[i];
            var rad=2*Math.PI/12*i;
            var x=Math.cos(rad)*(r-28*rem);
            var y=Math.sin(rad)*(r-28*rem);
            context.fillText(num,x,y);
            }
        }()
        );

        (function point() {
            for (var i = 0; i < 60; i++) {
                var rad = 2 * Math.PI / 60 * i;
                var x = Math.cos(rad) * (r - 13*rem);
                var y = Math.sin(rad) * (r - 13*rem);
                context.beginPath();
                if(i%5==0){
                    context.fillStyle="#000";
                    context.arc(x, y, 2.5*rem, 0, 2 * Math.PI, false);
                }else {
                    context.fillStyle="#ff7d2b";
                    context.arc(x, y, 2*rem, 0, 2 * Math.PI, false);
                }
                context.fill();
            }
        }()
        );
    }

    function drawHour(hour,minute) {
        context.strokeStyle="#000";
        context.save();
        var rad=2*Math.PI/12*hour;
        var mrad=2*Math.PI/12/60*minute;
        context.rotate(rad+mrad);
        context.beginPath();
        context.lineCap="round";
        context.lineWidth=5*rem;
        context.moveTo(0,10)*rem;
        context.lineTo(0,-40*rem);
        context.stroke();
        context.restore();
    }
    function drawMinute(minute,second) {
        context.save();
        var mrad=2*Math.PI/60*minute;
        var srad=2*Math.PI/60/60*second;
        context.rotate(mrad+srad);
        context.beginPath();
        context.lineCap="round";
        context.lineWidth=3*rem;
        context.moveTo(0,10*rem);
        context.lineTo(0,-50*rem);
        context.stroke();
        context.restore();
    }
    function drawSecond(second) {
        context.save();
        context.strokeStyle="#ff5d27";
        var srad=2*Math.PI/60*second;
        context.rotate(srad);
        context.beginPath();
        context.lineCap="round";
        context.lineWidth=2*rem;
        context.moveTo(0,10*rem);
        context.lineTo(0,-70*rem);
        context.stroke();
        context.restore();
    }
    function drawRound() {
        context.beginPath();
        context.fillStyle="#fff";
        context.arc(0,0,2*rem,0,2*Math.PI,false);
        context.fill();
    }

    function move() {
        context.clearRect(0,0,width,height);
        var now=new Date();
        var hour=now.getHours();
        var minute=now.getMinutes();
        var second=now.getSeconds();
        drawClock();
        drawHour(hour,minute);
        drawMinute(minute,second);
        drawSecond(second);
        drawRound();
        context.restore();
    }
    setInterval(move,1000);
    // clickShow()
};

// function clickShow() {
//     var canvas = document.getElementById("clock");
//     canvas.onclick=function () {
//         var width=canvas.width;
//         var height=canvas.height;
//         if(width<500||height<500){
//             canvas.width=500;
//             canvas.height=500;
//             draw()
//         }
//         if(width>=500||height>=500){
//             canvas.width=100;
//             canvas.height=100;
//             draw()
//         }
//     }
// }
