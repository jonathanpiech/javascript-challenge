// Assign data from data.js
var tableData = data;

// Select the table
var tbody = d3.select("tbody");

// Creates table
tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Create button function
button.on("click", function() {

  // Select user's input value
  var userInput = d3.select("#datetime");
  var inputValue = userInput.node().value;

  // Clear input value
  d3.select("#datetime").node().value = "";

  console.log(inputValue);

  // Filter data by selected date
  var filteredData = tableData.filter(selectDate => selectDate.datetime === inputValue);
  console.log(filteredData)

  // If not a valid input, return the whole table
  if (filteredData === undefined || filteredData.length == 0) {
    filteredData = tableData;
  }

  // Clear the table
  tbody.html("");

  // Create the new table
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

});