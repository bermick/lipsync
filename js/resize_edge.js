var imp_css = document.createElement('style');
imp_css.innerHTML = "#container{position:absolute;top: 50%;left: 50%;    width: 930px;height: 490px;margin-top: -245px;margin-left: -465px; }";
document.head.appendChild(imp_css);


$(window).ready(function(){
var scaleTemplate = 1;  
var sourceHeigth = 490;
var sourceWidth = 930;
var contentHeigth = $(window).height();
var contentWidth = $(window).width();     
var _scaleX = contentWidth/sourceWidth;
var _scaleY = contentHeigth/sourceHeigth;  
    
if(_scaleX <= _scaleY){
    scaleTemplate = _scaleX ;
}
else
{
    scaleTemplate = _scaleY; 
} 
if(scaleTemplate>=1) 
{
    scaleTemplate = 1;  
} 
if(scaleTemplate<=0.5){
    scaleTemplate = 0.5;
}
    
$('#container').css("transform", "scale("+ scaleTemplate  +")");   
$('#container').css("zoom", scaleTemplate);     
   
$('#container').height((sourceHeigth*scaleTemplate)/100);
$('#container').width((sourceWidth*scaleTemplate)/100); 
    
$('#container').css("margin-top", "-"+((sourceHeigth*scaleTemplate)/2)  +"px");
$('#container').css("margin-left", "-"+((sourceWidth*scaleTemplate)/2)  +"px");


});

$(window).resize(function() {
var scaleTemplate = 1;  
var sourceHeigth = 490;
var sourceWidth = 930;
var contentHeigth = $(window).height();
var contentWidth = $(window).width();     
var _scaleX = contentWidth/sourceWidth;
var _scaleY = contentHeigth/sourceHeigth;  
    
if(_scaleX <= _scaleY){
    scaleTemplate = _scaleX ;
}
else
{
    scaleTemplate = _scaleY; 
} 
if(scaleTemplate>=1) 
{
    scaleTemplate = 1;  
} 
if(scaleTemplate<=0.5){
    scaleTemplate = 0.5;
}
    
$('#container').css("transform", "scale("+ scaleTemplate  +")");   
$('#container').css("zoom", scaleTemplate);     
   
$('#container').height((sourceHeigth*scaleTemplate)/100);
$('#container').width((sourceWidth*scaleTemplate)/100); 
    
$('#container').css("margin-top", "-"+((sourceHeigth*scaleTemplate)/2)  +"px");
$('#container').css("margin-left", "-"+((sourceWidth*scaleTemplate)/2)  +"px");

}); 