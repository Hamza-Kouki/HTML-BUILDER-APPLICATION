function changeP() {
        var content = prompt("Please enter the new content of the paragraph");
        if (content != null) {
          document.getElementById("changeContent").innerHTML =content;
         
        }
      }
  //------------------------------------------------
  var values;
  function hide_show(values) {
    var x = document.querySelector(values);
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else{
      x.style.display = "none";
    }
}