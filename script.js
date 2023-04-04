var sRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(sRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }

function readFormData(){
    var formData = {};
    formData["fullName"] = window.fullName.value;
    formData["empCode"] = window.empCode.value;
    formData["salary"] = window.salary.value;
    formData["city"] = window.city.value;
    return formData;
    
}


function insertNewRecord(data){
    var table = window.employeeList.getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.empCode;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.salary;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.city;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button>`;
        var  cell6=newRow.insertCell(5);
      cell6.innerHTML =  `<button onClick='onDelete(this)'>Delete</button>`;
}


function resetForm(){
    window.fullName.value= '';
    window.empCode.value = '';
    window.salary.value = '';
    window.city.value = '';
    sRow = null;
}


function onEdit(td){
    sRow = td.parentElement.parentElement;
    window.fullName.value= sRow.cells[0].innerHTML;
    window.empCode.value = sRow.cells[1].innerHTML;
    window.salary.value = sRow.cells[2].innerHTML;
    window.city.value = sRow.cells[3].innerHTML;
}
function updateRecord(formData){
    sRow.cells[0].innerHTML = formData.fullName;
    sRow.cells[1].innerHTML = formData.empCode;
    sRow.cells[2].innerHTML = formData.salary;
    sRow.cells[3].innerHTML = formData.city;
}
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row = td.parentElement.parentElement;
        window.employeeList.deleteRow(row.rowIndex);
        resetForm();
    }    
}