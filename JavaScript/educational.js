//function to get the char which i selected from characters appeared 
var t ;
$('.glopal').click(function(){
    t = $(this).text();
  
});



//function to determine if the selected character is correct or not
$('.need').click(function(){
   var x = $(this).data("answer");
   
   if(t==x){
    //    alert(x);
    // $(this).html(x);
    //set the correct char
    $(this).html(x)
    //set a right sign beside to the char
    $(this).next().html( '<img id="theImg" src="Images/small.png"  style ="width :10px ; "/> ');
   
    // set the audio of correct choice
    $("<audio></audio>").attr({
        'src':'audio/correct.mp3',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");
    word();
   }else{
     //set the audio of wrong choice
    $("<audio></audio>").attr({
        'src':'audio/wrong.mp3',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");
   }
});

//reload button function
$('#load').click(function(){
    location.reload(true);
 });

 //see all answers button function
 $('#seen').click(function(){
//    $('.need').html($('.need').data("answer"));
$('.need').each(function(i, obj) {
    $(this).html($(this).data("answer"))
});
document.getElementById("five").src='Images/five.JPG';
document.getElementById("one").src='Images/one.JPG';
document.getElementById("two").src='Images/two.JPG';
document.getElementById("three").src='Images/three.JPG';
document.getElementById("six").src='Images/six.JPG';
document.getElementById("four").src='Images/four.JPG';

 });


 // to put a correct sign beside the photo of word
 function word(){
     
//    alert( document.getElementById("opt11").innerHTML);
if ( document.getElementById("opt11").innerHTML=="a" && document.getElementById("opt12").innerHTML=="n" && document.getElementById("opt13").innerHTML=="w"&& document.getElementById("opt14").innerHTML=="i" && document.getElementById("opt15").innerHTML=="c"){
  document.getElementById("five").src='Images/five.JPG';
   
}
if ( document.getElementById("opt21").innerHTML=="u" && document.getElementById("opt22").innerHTML=="c" ){
    document.getElementById("one").src='Images/one.JPG';
     
  }
if ( document.getElementById("opt31").innerHTML=="i" && document.getElementById("opt32").innerHTML=="c" && document.getElementById("opt33").innerHTML=="e"&& document.getElementById("opt34").innerHTML=="n" ){
    document.getElementById("two").src='Images/two.JPG';
     
  }
if ( document.getElementById("opt41").innerHTML=="o" && document.getElementById("opt42").innerHTML=="n" && document.getElementById("opt43").innerHTML=="y"){
    document.getElementById("three").src='Images/three.JPG';
     
  }
if ( document.getElementById("opt51").innerHTML=="r" && document.getElementById("opt52").innerHTML=="u" && document.getElementById("opt53").innerHTML=="i" ){
    document.getElementById("six").src='Images/six.JPG';
     
  }
  if ( document.getElementById("opt61").innerHTML=="a" && document.getElementById("opt62").innerHTML=="t" && document.getElementById("opt63").innerHTML=="r" ){
    document.getElementById("four").src='Images/four.JPG';
     
  }


 }