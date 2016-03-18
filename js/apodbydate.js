var url = "https://api.nasa.gov/planetary/apod/?api_key=QyrJu9dEGC23uK31wevhZ2vaplrt5yt7BBM3ZAVG";


$.ajax({
url: url,
success: handleResult
});
function handleResult(result){
  console.log(result);
};
