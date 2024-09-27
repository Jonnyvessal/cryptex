$(document).ready(function() { 

  // Updated disc array to fit 5 rows and 9 columns
  let discs = [
    ["F", "M", "V", "D", "W", "P", "T", "L", "O"],
    ["A", "D", "O", "D", "L", "H", "N", "E", "R"],
    ["M", "E", "C", "U", "O", "H", "A", "B", "C"],
    ["V", "T", "F", "I", "S", "T", "C", "H", "D"],
    ["O", "U", "E", "V", "E", "O", "H", "R", "M"]
  ];

  function populate() {
    $(".js-cryptex").empty();  // Clear existing content

    // Generate 9 columns and 5 rows
    for (var y = 0; y < 9; y++) {  // Iterate over columns
      let html = `<div class="col" id="col-${y}">\n`;

      // Add the up arrow above each column
      html += `<div class="controls">
                <button class="up">^</button>
              </div>\n`;

      // Iterate over rows for each column
      for (var x = 0; x < 5; x++) {
        html += `<div class="elem">${discs[x][y]}</div>`;
      }

      // Add the down arrow below each column
      html += `<div class="controls">
                <button class="down">v</button>
              </div></div>`;

      $(".js-cryptex").append(html);  // Append the generated HTML to the cryptex container
    }
  }

  // Event handler for the up button
  $(".js-cryptex").on("click", ".up", function() {
    let column = $(this).closest(".col");  // Get the column that contains the button
    let firstElem = column.find(".elem:first");
    firstElem.insertAfter(column.find(".elem:last"));  // Move the first element to the last position
  });

  // Event handler for the down button
  $(".js-cryptex").on("click", ".down", function() {
    let column = $(this).closest(".col");  // Get the column that contains the button
    let lastElem = column.find(".elem:last");
    lastElem.insertBefore(column.find(".elem:first"));  // Move the last element to the first position
  });

  // Event handler for the reset button
  $(".reset").click(function() {
    populate();  // Repopulate the cryptex
  });

  // Initial population of the cryptex
  populate();
});
