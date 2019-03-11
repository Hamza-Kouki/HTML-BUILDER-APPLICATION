var new_Class_Name , values , content_new;
function concate(values){
  var str1 = values;
 var str2 = "_1";
  new_Class_Name = str1.concat(str2);
}
function display_source(values,new_Class_Name){
var oldHTML = document.querySelector(values).innerHTML;
var newHTML = "" + oldHTML + "";
var newHTML = newHTML.replace(/</g,"&lt;");
var newHTML = newHTML.replace(/>/g,"&gt;");
concate(values);
document.querySelector(new_Class_Name).innerHTML = newHTML;
}
function view_source(values,new_Class_Name){
  var content_new = document.querySelector(values).innerHTML;
  var text = document.createTextNode('<p>'+content_new+'</p>');
        document.querySelector(new_Class_Name).appendChild(text);
}
//https://stackoverflow.com/questions/7874598/regular-expression-regular-or-irregular
 view_source('.PParagraphe','.PParagraphe_1');
function changeP(values, new_Class_Name) {
      var content = prompt("Please enter the new content of the paragraph");
      if (content != null) {
        document.querySelector(values).innerHTML = content;
    //---------------
    view_source(values,new_Class_Name);
      }
    }
function hide_show(values) {
  var x = document.querySelector(values);
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else{
    x.style.display = "none";
  }
  concate(values);
  display_source(values,new_Class_Name);

}
