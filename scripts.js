/* Ready function is called when DOM is ready */
/* otetaan eventti kiinni, ei ole pakko :)*/
$(document).ready(function (event) {
  console.log("We are ready");
});

/* toinen tapa

$( document ).ready(ready_yeah);
function ready_yeah(){
}

*/

/* javascript ei vaadi argumentteja kutsussa
function joku(yksi,kaksi);

joku();
*/

/* Browser api for DOM ready event
window.onload = function(event){
    console.log(event);
    
    var temp = document.getElementById("my_title");
    temp.innerHTML = "Changed from JS";
    /*
    my_title.innerHTML = "This work too";
    */
/*
}
*/
