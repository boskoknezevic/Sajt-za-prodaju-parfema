function procitajvise() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("ajax").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "procitajvise.txt");
  xhttp.send(); 
}