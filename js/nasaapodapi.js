
var url = "https://api.nasa.gov/planetary/apod?api_key=QyrJu9dEGC23uK31wevhZ2vaplrt5yt7BBM3ZAVG";


$.ajax({
url: url,
success: handleResult
});
function handleResult(result){
  console.log(result);
  if("Copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
  $("#copyright").text("Image Credits: " + "Public Domain");
}
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none");
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
  $("#apod_vid_id").css("display", "none");
  $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null,4));
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
