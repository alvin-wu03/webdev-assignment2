// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
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
    // Get all td elements
    const tds = document.getElementsByTagName("td");
    // List of all possible colors
    const colors = [ "red", "blue", "green", "yellow"]

    // Loop through all td elements and set their background color
    for (let i = 0; i < tds.length; i++) {
        if(!colors.includes(tds[i].style.backgroundColor.valueOf())){
            tds[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}