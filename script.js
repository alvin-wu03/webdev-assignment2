// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    var table = document.getElementById('grid');
    table.insertRow(numRows);
    if (numCols == 0)
        {
        let newCell = table.rows[table.rows.length - 1].insertCell(0);
        newCell.onclick = function () {
          this.style.backgroundColor = colorSelected;
        };
        numCols++;

        }
    else
        {
        for (var i = 0; i < numCols; i++)
            {
            let newCell = table.rows[table.rows.length - 1].insertCell(i);
            newCell.onclick = function () {
                this.style.backgroundColor = colorSelected;
            };
        }
    }
    numRows++;
}

// Add a column
function addC() {
    var table = document.getElementById('grid');
    if (numRows == 0) {
        table.insertRow(numRows);
        numRows++;
    }
    for (var i = 0; i < numRows; i++) {
        let newCell = table.rows[i].insertCell(numCols);
        newCell.onclick = function () {
            this.style.backgroundColor = colorSelected;
        };
    }
    numCols++;
}

// Remove a row
function removeR() {
    const table = document.getElementById('grid');
    const rowWasInserted = numRows >= 1 ? true : false;//Check to see if a row was previously added
    if (rowWasInserted && numRows != 1) {
        table.deleteRow(table.rows.length - 1);
        numRows--;//decreament the number of rows
    }
    else if (numRows == 1) {
        table.deleteRow(table.rows.length - 1);
        numRows--;//decreament the number of rows
        numCols = 0;//reset column count
    }
}

// Remove a column
function removeC() {
    const table = document.getElementById('grid');
    if (numCols >= 1) {
        for (var col = 0; col < table.rows.length; col++) {
            var row = table.rows[col];
            if (row.cells.length > 0) {
                row.deleteCell(numCols - 1);
            }
        }
        numCols--; // Decrease the number of columns
        if (numCols === 0) {
            while (table.rows.length > 0) {// If there are no columns left, remove all rows
                table.deleteRow(0);
                numRows--; // Decrease the number of rows
            }
        }
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU() {
    // Get all td elements
    const tds = document.getElementsByTagName("td");
    // List of all possible colors
    const colors = ["red", "blue", "green", "yellow"]

    // Loop through all td elements and set their background color
    for (let i = 0; i < tds.length; i++) {
        if (!colors.includes(tds[i].style.backgroundColor.valueOf())) {
            tds[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll() {
    // Get all td elements
    const tds = document.getElementsByTagName("td");

    // Loop through all td elements and set their background color
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll() {
    // Get all td elements
    const tds = document.getElementsByTagName("td");

    // Loop through all td elements and set their background color to white
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.backgroundColor = "white";
    }
}