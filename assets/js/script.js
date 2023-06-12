var lightNumber =1;
var direction =  'RIGHt'
var light= $('.square');
/*console.log(light);*/
function updateLights(){
    $('.square').css({background:'white'}) ;

    light[lightNumber].style.background="red";

    if(lightNumber>0){
        light[lightNumber-1].style.background="pink";
    }

    if(lightNumber<6){
        light[lightNumber+1].style.background="red";
    }

    if (lightNumber===6){
        direction = "LEFT";
    }

    if (lightNumber===0){
        direction = "RIGHT";
    }


}
setInterval(updateLights,100);
