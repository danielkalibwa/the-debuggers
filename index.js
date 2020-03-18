function addHtmlTableRow(){
    // get the table by Id
    // Create a new row and cells
    // get value from input text
    // set the values into row cell's

    var table = document.getElementById("table"),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        genre = document.getElementById(genre).value,
        title = document.getElementById(title).value,
        author = document.getElementById(author).value;

    cell1.innerHTML = genre; 
    cell2.innerHTML = title; 
    cell3.innerHTML = author;    
}
addHtmlTableRow();