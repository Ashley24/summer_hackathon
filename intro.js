// JavaScript File
$(document).ready(function (){
    //start button show intro screen
    $("#buttonStart").click(function(){
        $("#StartMenu").hide();
         $("#Intro").show();
         $("#buttonStart").hide();
    });
//next button show game
$("#buttonIntro").click(function(){
    $("#Intro").hide();
    window.location="index.html";
});
        
});

