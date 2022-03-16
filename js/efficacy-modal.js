// Fetching and adding Efficacy modal data from json
$.getJSON(dataPath, function (data) {
    document.getElementById("efficacy-heading").innerHTML = data.efficacyHeading
    document.getElementById("efficacy-image").src = path + "/images/efficacy.png"
    document.getElementById("close-efficacy-modal").innerHTML = "Close"
});

// Emptying Efficacy modal content
window.closeEfficacyModal = () =>{
    $("#efficacy-modal").empty();
}