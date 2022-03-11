var i = 0;
function change() {
  var doc = document.getElementById("fstack");
  var color = ["AliceBlue", "blue", "Azure", "green",'Chartreuse','Crimson','Cyan','Green','Grey','Gold'];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 250);

function swapStyleSheet(sheet){
    document.getElementById('altstyle').setAttribute('href',sheet)
}