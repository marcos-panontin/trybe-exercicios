// const table = document.getElementsByTagName('table');

// const tbody = table[0].getElementsByTagName('tbody')[0];
// const newRow = tbody.insertRow(2);
// const line1 = newRow.insertCell(0);
// const line2 = newRow.insertCell(1);
// line1.innerText = 'Row3 cell1';
// line2.innerText = 'Row3 cell2';

// const changeContent = (row, column, string) => {
//     tbody.rows[row].cells[column].innerText = string;
// };

// const table = document.getElementById("myTable");

// const createTable = (rowSize, columnSize) => {
//     for (let index = 1; index <= rowSize; index += 1) {
//         let newRow = table.insertRow();
//         for (let jindex = 1; jindex <= columnSize; jindex += 1) {
//             newRow.insertCell();
//         }
//     }
// };

// createTable(4, 15);

// console.log(table);

// 8. Write a JavaScript program to remove items from a dropdown list. Go to the editor

// const select = document.querySelector("#colorSelect");

// const removeColor = () => {
//     for (let item of select) {
//         if (item.value === select.value) {
//             item.remove();
//         }
//     }
// };

// //9. Write a JavaScript program to count and display the items of a dropdown list, in an alert window.

// const selection = document.getElementById('mySelect');
// let optionsMessage = '';

// for (let index = 0; index < selection.length; index += 1) {

//     if (index === selection.length - 1) {
//         optionsMessage += `${index + 1}- ${selection[index].value}.`;

//     } else if (index === selection.length - 2){
//         optionsMessage += `${index + 1}- ${selection[index].value} and `;
//     } else {
//         optionsMessage += `${index + 1}- ${selection[index].value}, `;
//     }
// }

// const getOptions = () => {

//         alert(`The list contains ${selection.length} items. They are as follows: ${optionsMessage}`)
// }

//10. Write a JavaScript program to calculate the volume of a sphere.

const numberInput = document.getElementById("number-input");
const volumeOutput = document.getElementById("volume-output");

const calculate = () => {
    const volume = (numberInput.value ** 3) * Math.PI * 4 / 3;
    console.log(volume);
    volumeOutput.textContent = volume.toFixed(3);
}

console.log(volumeOutput.value);
