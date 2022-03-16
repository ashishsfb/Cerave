$.getJSON(dataPath, function (data) {
    document.getElementById("efficacy-heading").innerHTML = data.efficacyHeading
    document.getElementById("efficacy-image").src = path + "/images/efficacy.png"
    document.getElementById("close-efficacy-modal").innerHTML = "Close"
});

window.closeEfficacyModal = () =>{
    // document.getElementById("review-modal").style.display = "none"
    $("#efficacy-modal").empty();
}