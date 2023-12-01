const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

console.log(csvData)

// Part 1: Refactoring Old Code

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the CSV data into rows
const rows = csvData.split("\n");

// // Define an array to store the rows as objects
const data = [];

// // Loop through each row
rows.forEach((row, rowIndex) => {
    // Split the row into cells using the comma as a delimiter
    const cells = row.split(",");
    
    // Create an object for the current row
    const rowData = {
        ID: cells[0],
        Name: cells[1],
        Occupation: cells[2],
        Age: cells[3]
    };

//     // Push the object to the data to add an element to the array
    data.push(rowData);
});

// Log the resulting array of objects
console.log(data);



// Part 2: Expanding Functionality
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//  Split the CSV data into rows
const rows = csvData.split("\n");

// Split the first row into cells to get column headings
const columHeadings = rows[0].split(",");

// Store the number of columns
const numColumns = columHeadings.length;

// Initialize a two-dimensional array to store the CSV data
const data = [];

// Loop through each row starting from index 1 (skipping the heading row)
for (let i = 1; i < rows.length; i++) {
   
    // Split the current row into cells using the comma as a delimiter
    const cells = rows[i].split(",");

    // Create an object for the current row
    const object = {};

    // Assign each cell value to its corresponding columHeading
    for (let x = 0; x < numColumns; x++) {
       object[columHeadings[x]] = cells[x];
    }
    // Push the object to the data array
    data.push;
}
console.log(data);



// Part 3: Transforming Data

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the CSV data into rows
const rows = csvData.split("\n");

// Split the first row into cells to get column headings
const culumHeadings = rows[0].split(",");

// Store the number of columns
const numberColumns = headings.length;

// Initialize an array to store the transformed objects
const transformedData = [];

// Loop through each row starting from index 1 (skipping the heading row)
for (let i = 1; i < rows.length; i++) {
    // Skip the last empty row

    // Split the current row into cells using the comma as a delimiter
    const cells = rows[i].split(",");

    // Create an object for the current row
    const rowData = {};

    // Assign each cell value to its corresponding heading (converted to lowercase)
    for (let y = 0; y < numColumns; y++) {
        rowData[columHeadings][[y].toLowerCase()] = cells[y];
    }

    // Push the object to the transformedData array
    transformedData.push(rowData);
}

// Log the resulting array of objects
console.log(transformedData);



// Part 4 && 5: Sorting and Manipulating Data

// Remove the last element from the array
transformedData.pop();

// Insert the new object at index 1
const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
transformedData.splice(1, 0, newObjectAtIndex1);

// Add the new object to the end of the array
const newObjectAtEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
transformedData.push(newObjectAtEnd);

