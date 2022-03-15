
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);

var lang = url.searchParams.get("ln");
var prod = url.searchParams.get("pd");
var variation = url.searchParams.get("vr");

var path = ""
var reviewBtnVal = 0;

window.path = prod + "/" + variation + "/" + lang + "/data.json"

$(document).on('ready', function () {
    
    updateData();
    loadDashboard();
    
});


window.updateData = () =>{
    $.getJSON(path, function (data) {
        
    });
}

window.loadDashboard = () =>{
    $(function(){
        // $("#dashboard").load("dashboard.html #review-btn-1")
        $("#dashboard").load("dashboard.html"); 
      });
}

window.hideDashboard = () =>{
    $("#dashboard").empty();
}

window.loadReviewModal = (value) =>{
    $(function(){

        $("#review-modal").load("review-modal.html"); 
        window.reviewBtnVal = value;
        console.log(reviewBtnVal)

      });
}