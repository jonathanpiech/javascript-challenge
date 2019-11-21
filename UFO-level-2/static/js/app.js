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

  // Select search parameter
  var searchSelection = d3.select('input[name="selectfilter"]:checked').node().value;

  console.log(searchSelection);

  // Create variable for filtered data
  var filteredData = tableData;

  // Filter data based on selected search parameter
  switch (searchSelection) {
    case "date":
      filteredData = tableData.filter(selectSearch => selectSearch.datetime === inputValue);
      break;
    case "city":
      filteredData = tableData.filter(selectSearch => selectSearch.city === inputValue);
      break;
    case "state":
      filteredData = tableData.filter(selectSearch => selectSearch.state === inputValue);
      break;
    case "country":
      filteredData = tableData.filter(selectSearch => selectSearch.country === inputValue);
      break;
    case "shape":
      filteredData = tableData.filter(selectSearch => selectSearch.shape === inputValue);
      break;
    default:
      filteredData = tableData;
      break;
  }

  console.log(filteredData);

  // If not a valid input, return the whole table
  if (filteredData === undefined || filteredData.length == 0) {
    filteredData = tableData;
  };

  // Clear the old table
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