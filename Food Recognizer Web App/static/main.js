//========================================================================
// Drag and drop image handling
//========================================================================

var fileDrag = document.getElementById("file-drag");
var fileSelect = document.getElementById("file-upload");

// Add event listeners
fileDrag.addEventListener("dragover", fileDragHover, false);
fileDrag.addEventListener("dragleave", fileDragHover, false);
fileDrag.addEventListener("drop", fileSelectHandler, false);
fileSelect.addEventListener("change", fileSelectHandler, false);

function fileDragHover(e) {
  // prevent default behaviour
  e.preventDefault();
  e.stopPropagation();

  fileDrag.className = e.type === "dragover" ? "upload-box dragover" : "upload-box";
}

function fileSelectHandler(e) {
  // handle file selecting
  var files = e.target.files || e.dataTransfer.files;
  fileDragHover(e);
  for (var i = 0, f; (f = files[i]); i++) {
    previewFile(f);
  }
}

//========================================================================
// Web page elements for functions to use
//========================================================================

var imagePreview = document.getElementById("image-preview");
var imageDisplay = document.getElementById("image-display");
var uploadCaption = document.getElementById("upload-caption");
var predResult = document.getElementById("pred-result");
var loader = document.getElementById("loader");
var top5_1 = document.getElementById("Top5_1");
var top5_2 = document.getElementById("Top5_2");
var top5_3 = document.getElementById("Top5_3");
var top5_4 = document.getElementById("Top5_4");
var top5_5 = document.getElementById("Top5_5");
var top10_1 = document.getElementById("Top10_1");
var top10_2 = document.getElementById("Top10_2");
var top10_3 = document.getElementById("Top10_3");
var top10_4 = document.getElementById("Top10_4");
var top10_5 = document.getElementById("Top10_5");
var top10_6 = document.getElementById("Top10_6");
var top10_7 = document.getElementById("Top10_7");
var top10_8 = document.getElementById("Top10_8");
var top10_9 = document.getElementById("Top10_9");
var top10_10 = document.getElementById("Top10_10");

//========================================================================
// Main button events
//========================================================================

function submitImage() {
  // action for the submit button
  console.log("submit");

  if (!imageDisplay.src || !imageDisplay.src.startsWith("data")) {
    window.alert("Please select an image before submit.");
    return;
  }

  loader.classList.remove("hidden");
  imageDisplay.classList.add("loading");

  // call the predict function of the backend
  predictImage(imageDisplay.src);
}

function clearImage() {
  // reset selected files
  fileSelect.value = "";

  // remove image sources and hide them
  imagePreview.src = "";
  imageDisplay.src = "";
  predResult.innerHTML = "";

  hide(imagePreview);
  hide(imageDisplay);
  hide(loader);
  hide(predResult);  
  hide(top5_1);
  hide(top5_2);
  hide(top5_3);
  hide(top5_4);
  hide(top5_5);  
  hide(top10_1);
  hide(top10_2);
  hide(top10_3);
  hide(top10_4);
  hide(top10_5);
  hide(top10_6);
  hide(top10_7);
  hide(top10_8);
  hide(top10_9);
  hide(top10_10);
  show(uploadCaption);
    

  imageDisplay.classList.remove("loading");
}

function previewFile(file) {
  // show the preview of the image
  console.log(file.name);
  var fileName = encodeURI(file.name);

  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    imagePreview.src = URL.createObjectURL(file);

    show(imagePreview);
    hide(uploadCaption);

    // reset
    predResult.innerHTML = "";
    imageDisplay.classList.remove("loading");

    displayImage(reader.result, "image-display");
  };
}

//========================================================================
// Helper functions
//========================================================================

function predictImage(image) {
  fetch("/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(image)
  })
    .then(resp => {
      if (resp.ok)
        resp.json().then(data => {
          displayResult(data);
        });
    })
    .catch(err => {
      console.log("An error occured", err.message);
      window.alert("Oops! Something went wrong.");
    });
}

function displayImage(image, id) {
  // display image on given id <img> element
  let display = document.getElementById(id);
  display.src = image;
  show(display);
}

function displayResult(data) {
  // display the result
  // imageDisplay.classList.remove("loading");
  hide(loader);
  var str = data.result;  
  var res = str.split(" ");

//  predResult.innerHTML = data.result;
    predResult.innerHTML = "Top 1:   " + res[0].replace("_", " ");
    
    top5_1.innerHTML = "1. " + res[0].replace("_", " "); 
    top5_2.innerHTML = "2. " + res[1].replace("_", " "); 
    top5_3.innerHTML = "3. " + res[2].replace("_", " "); 
    top5_4.innerHTML = "4. " + res[3].replace("_", " ");
    top5_5.innerHTML = "5. " + res[4].replace("_", " ");
    
    top10_1.innerHTML = "1. " + res[0].replace("_", " ");
    top10_2.innerHTML = "2. " + res[1].replace("_", " ");
    top10_3.innerHTML = "3. " + res[2].replace("_", " "); 
    top10_4.innerHTML = "4. " + res[3].replace("_", " ");
    top10_5.innerHTML = "5. " + res[4].replace("_", " ");
    top10_6.innerHTML = "6. " + res[5].replace("_", " "); 
    top10_7.innerHTML = "7. " + res[6].replace("_", " "); 
    top10_8.innerHTML = "8. " + res[7].replace("_", " "); 
    top10_9.innerHTML = "9. " + res[8].replace("_", " "); 
    top10_10.innerHTML = "10. " + res[9].replace("_", " ");
    
  show(top5_1);
  show(top5_2);
  show(top5_3);
  show(top5_4);
  show(top5_5);  
  show(top10_1);
  show(top10_2);
  show(top10_3);
  show(top10_4);
  show(top10_5);
  show(top10_6);
  show(top10_7);
  show(top10_8);
  show(top10_9);
  show(top10_10);
  show(predResult);
}

function hide(el) {
  // hide an element
  el.classList.add("hidden");
}

function show(el) {
  // show an element
  el.classList.remove("hidden");
}