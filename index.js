function calculateAverage() {
  var name = document.getElementById("name").value;
  var section = document.getElementById("section").value;
  var yearLevel = document.getElementById("yearLevel").value;
  var grade1 = parseFloat(document.getElementById("grade1").value);
  var grade2 = parseFloat(document.getElementById("grade2").value);
  var grade3 = parseFloat(document.getElementById("grade3").value);
  var grade4 = parseFloat(document.getElementById("grade4").value);
  var grade5 = parseFloat(document.getElementById("grade5").value);
  
  var average = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
  
  var gradeStatus;
  if (average >= 90) {
  gradeStatus = "With honors";
  } else if (average >= 75) {
  gradeStatus = "Passed";
  } else {
  gradeStatus = "Failed";
  }
  
  var output = document.getElementById("output");
  output.innerHTML =
  "Name: " + name + "<br>" +
  "Section: " + section + "<br>" +
  "Year Level: " + yearLevel + "<br>" +
  "Average Grade: " + average.toFixed(2) + "<br>" +
  "Status: " + gradeStatus;
  }