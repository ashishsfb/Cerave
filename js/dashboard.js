
$.getJSON(dataPath, function (data) {
    document.getElementById("review-btn-1").innerHTML = data.reviewBtn1;
    document.getElementById("review-btn-2").innerHTML = data.reviewBtn2;
    document.getElementById("review-btn-3").innerHTML = data.reviewBtn3;
    document.getElementById("review-btn-4").innerHTML = data.reviewBtn4;
});