var selectedRow = null;

function onFormSubmit(e) {
    e.preventDefault();
    var formData = readFormData();
    if(selectedRow == null) { 
        insertNewRecord(formData);
    resetForm();
    }
    else { 
        updateRecord(formData);
    resetForm();
  }  
}

function readFormData(){
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["stuid"] = document.getElementById("stuid").value;
    formData["class"] = document.getElementById("class").value;
    formData["percentage"] = document.getElementById("percentage").value;
    return formData;
}

function insertNewRecord(data) {
    
    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stuid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.class;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.percentage;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>`
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("stuid").value = "";
    document.getElementById("class").value = "";
    document.getElementById("percentage").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("stuid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("class").value = selectedRow.cells[2].innerHTML;
    document.getElementById("percentage").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.stuid;
    selectedRow.cells[2].innerHTML = formData.class;
    selectedRow.cells[3].innerHTML = formData.percentage;
}

function onDelete(td) {
    if (confirm('Are you sure')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
