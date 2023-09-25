// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    var table = document.getElementById('grid');
    table.insertRow(numRows);
    if (numCols == 0) {
        table.rows[table.rows.length - 1].insertCell(0);
        numCols++;
    }
    else {
        for (var i = 0; i < numCols; i++) {
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
    const rowInserted = numRows >= 1 ? true : false;//Check to see if a row was previously added
    if (rowInserted) {
        table.deleteRow(table.rows.length - 1);
        numRows--;//decreament the number of rows
    }
}

// Remove a column
function removeC() {
    /* totally not implemented in this PR :)
    const table = document.getElementById('grid');
    const colInserted = numCols >= 1 ? true : false;
    */
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
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