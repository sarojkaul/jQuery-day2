var jsonData = JSON.parse(images);

for(var i=0;i<jsonData.length;i++)
{
    $(".container").append(`<div id="${i}" class="img-container"><img id="img${i}"src='${jsonData[i].image}'></div>`);
    $(`#${i}`).append(`<br><span>Relation: ${jsonData[i].relation}</span>`);
    $(`#${i}`).append(`<br><span>Name: ${jsonData[i].name}</span>`);
    $(`#${i}`).append(`<p class="hidden"> hobby: ${jsonData[i].hobby}</p>`);
}

for(var i=0;i<jsonData.length;i++)
{
    if(jsonData[i].relation == 'father')
    {
        $(`#img${i}`).css("border", "blue 2px solid");
    } 
    if(jsonData[i].relation == 'grandpa')
    {
        $(`#img${i}`).css("border", "yellow 2px solid");
    } 
    if(jsonData[i].relation == 'dog')
    {
        $(`#img${i}`).css("border", "red 2px solid");
    } 
    if(jsonData[i].relation == 'sister')
    {
        $(`#img${i}`).css("border", "green 2px solid");
    } 
    
}

$(document).ready(function() {
   
    $(".imgcontainer").click(hide);
    function hide() {
      $(this).show(".hidden")
    };
    });

// `<img src="${jsonData[0].image}>"`