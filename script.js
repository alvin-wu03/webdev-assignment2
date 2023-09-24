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
        table.rows[table.rows.length - 1].insertCell(0);
        numCols++;
        }
    else
        {
        for (var i = 0; i < numCols; i++)
            {table.rows[table.rows.length - 1].insertCell(i);}
        }
    numRows++;
}

// Add a column
function addC() {
    var table = document.getElementById('grid');
    if (numRows == 0)
        {
        table.insertRow(numRows);
        numRows++;
        }
    for (var i = 0; i < numRows; i++)
        {table.rows[i].insertCell(numCols);}
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}