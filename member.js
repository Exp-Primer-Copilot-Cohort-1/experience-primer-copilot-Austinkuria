function skillsMember(){
    var skills = ["HTML", "CSS", "JS", "PHP", "PYTHON"];
    var text = "";
    var i;
    for (i = 0; i < skills.length; i++) {
      text += skills[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}