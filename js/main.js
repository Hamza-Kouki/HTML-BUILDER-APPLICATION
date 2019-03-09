function changeP() {
        var content = prompt("Please enter the new content of the paragraph");
        if (content != null) {
          document.getElementById("changeContent").innerHTML =content;
         
        }
      }
  //------------------------------------------------
  var values,new_Class_Name;
  //------------------------------------------------
  function concate(values){
    var str1 = values;
   var str2 = "_1";
    //var str3=".";
  //  var res = str1.concat(str2);
    new_Class_Name = str1.concat(str2);
}
///----------------------------------------------
  function hide_show(values) {
    var x = document.querySelector(values);
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else{
      x.style.display = "none";
    }
    ///--------------------------
    var oldHTML = document.querySelector(values).innerHTML;
    var newHTML = "" + oldHTML + "";
    var newHTML = newHTML.replace(/</g,"&lt;");
    var newHTML = newHTML.replace(/>/g,"&gt;");
    concate(values);
    document.querySelector(new_Class_Name).innerHTML = newHTML;

}
/*
function hide_show(values){
    var oldHTML = document.querySelector(values).innerHTML;
    var newHTML = "" + oldHTML + "";
    var newHTML = newHTML.replace(/</g,"&lt;");
    var newHTML = newHTML.replace(/>/g,"&gt;");
    document.querySelector(values).innerHTML = newHTML;
}*/