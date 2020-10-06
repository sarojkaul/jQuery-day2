// JavaScript source code
console.log("hello");

$(document).ready(function() {
    $('#claus').on('click', function() {
        $(".santa").show();
    })
    $('#package1').on('click', function() {
        $(".package").show();
    })
    $('#jingle').on('click', function() {
        $(".bell").show();
    })
    
});

