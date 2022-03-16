

console.log(reviewBtnVal)

var reviewHeading = "reviewHeading" + reviewBtnVal
var reviewStars = "reviewStars" + reviewBtnVal
var reviewName = "reviewName" + reviewBtnVal
var reviewLocation = "reviewLocation" + reviewBtnVal
var reviewAge = "reviewAge" + reviewBtnVal
var review = "review" + reviewBtnVal

$.getJSON(dataPath, function (data) {
    document.getElementById("review-heading").innerHTML = data[reviewHeading]
    document.getElementById("stars").innerHTML = getStars(parseInt(data[reviewStars]))
    document.getElementById("review-metrics").innerHTML = data[reviewName] + " | " + data[reviewLocation] + " | " + data[reviewAge]
    document.getElementById("review-body").innerHTML = data[review]
    document.getElementById("close-review-modal").innerHTML = "Close"
});


window.closeReviewModal = () =>{
    // document.getElementById("review-modal").style.display = "none"
    $("#review-modal").empty();
}

function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];
  
    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
      output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // If there is a half a star, append it
    if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
      output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    return output.join('');
  
  }