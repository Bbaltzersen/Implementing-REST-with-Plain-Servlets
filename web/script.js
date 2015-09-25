/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("#b1").click(function(){
    $.ajax({
            url: "/api/quote/1",
            type: "POST",
            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
            },
            error : function(jqXHR, textStatus, errorThrown) {
            alert("ERROR");
            },

            timeout: 120000
    });
});

