
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);

var lang = url.searchParams.get("ln");
var prod = url.searchParams.get("pd");
var variation = url.searchParams.get("vr");

var path = prod + "/" + variation + "/" + lang + "/data.json"

$(document).on('ready', function () {
    updateData();
    loadDashboard();
});


window.updateData = () =>{
    console.log(path)
    $.getJSON(path, function (data) {
        document.getElementById("product-name").innerHTML = data.productName;
        document.getElementById("product-variation").innerHTML = data.productVariant;
        // document.getElementById("dashborad-btn-1").innerHTML = "block"
        // document.getElementById("dashborad-btn-2").innerHTML = "block"
        // document.getElementById("dashborad-btn-3").innerHTML = "block"
        // document.getElementById("dashborad-btn-4").innerHTML = "block"

    });
}

window.loadDashboard = () =>{
    $(function(){
        $("#dashboard").load("dashboard.html"); 
      });
}
