var values, new_Class_Name;
//--------------------------------------------
function concate(values) {
  var str1 = values;
  var str2 = "_1";
  new_Class_Name = str1.concat(str2);
}
//-------------------------------------------------

function display_source(values, new_Class_Name) {
  var oldHTML = document.querySelector(values).innerHTML;
  var newHTML = String("" + oldHTML + "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  concate(values);
  document.querySelector(new_Class_Name).innerHTML = newHTML;
}
///----------------------------------------------
//https://stackoverflow.com/questions/7874598/regular-expression-regular-or-irregular
//---------------------
function changeP(oldClassName, newClassName) {
  var content = prompt("Please enter the new content of the paragraph");
  if (content != null) {
    // replace <p></p> with spécial caracters to be presented in the <pre></pre> in index.html
    var newHTML = String("<p>" + content + "</p>")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
    // replace pparagraphe1 with the new content
    document.querySelector(oldClassName).innerHTML = newHTML;

    // replace the preview part with the content
    document.querySelector(newClassName).innerHTML = content;
  }
}
//----------------------------------------------------
function hide_show(values) {
  var x = document.querySelector(values);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  ///--------------------------
  var oldHTML = document.querySelector(values).innerHTML;
  var newHTML = "" + oldHTML + "";
  var newHTML = newHTML.replace(/</g, "&lt;");
  var newHTML = newHTML.replace(/>/g, "&gt;");
  concate(values);
  document.querySelector(new_Class_Name).innerHTML = newHTML;
  concate(values);
  display_source(values, new_Class_Name);
}
display_source(".PParagraphe", ".PParagraphe_1");
