/* TEE aina Jquery ready applikaatioon "$(document).ready(function (event){...});"*/
/* Ready function is called when DOM is ready */
/* otetaan eventti kiinni, ei ole pakko :)*/
$(document).ready(function (event) {
  console.log("We are ready");
    //1. We need to make an ajax (http) request to our mongo database with JQuery
    //2. We need  to generate UI dynamically from response data jquery
    
    //to use HTTP api start mongodb with next 
    //mongo.exe -- rest --jsonp
    
    //ajax on funktio $ on sama kuin jquery
    $.ajax({
        method: "GET",
        url: "http://localhost:28017/person/friends/",
        dataType: "jsonp",
        jsonp: "jsonp",
        //success functio jos kysely onnistuu tjs. funktiolle pari parametriä voisi olla kolmekin, ei ole pakko.
        success: function(data,status){
            console.log(data);
            console.log(status);
            console.log(Object.keys(data.rows[0]));
            
            var headers = Object.keys(data.rows[0]);

            var headerRow = $("<tr></tr>");
            $(headerRow).appendTo("#parent_table");
            for(i=1; i < headers.length; i++){

                $(headerRow).append("<th>" + headers[i] + "</th>");
            }
            
            for(i = 0; i < data.rows.length; i++)
            {
                var my_color;
                

                if(data.rows[i].age >= 50){
                    my_color = "old";
                }
                else if (data.rows[i].age < 50 && data.rows[i].age >= 20){
                    my_color = "middle_age";
                }
                else
                {
                    my_color = "young";
                }
                
                    $(  "<tr> <td>" + data.rows[i].name + "</td>" +
                        "<td>" + data.rows[i].address + "</td>" +
                        "<td>" + data.rows[i].age + "</td> </tr>").appendTo( "#parent_table" ).addClass(my_color); 
            }
        },
        //kysely epäonnistuu
        error: function(hrx, status, errorThrown){
            console.log(errorThrown);
        },
/*toinen tapa success
        success: responceReady,
*/
    });
    
});
/* toinen tapa success
function responceReady(data, status){
    console.log(data);
    console.log(status);
}
*/

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
