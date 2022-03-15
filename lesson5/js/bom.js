// const list = document.querySelector('ul');
// const input = document.querySelector('input');
// const button = document.querySelector('button');

// button.onclick = function() {
// let myItem = input.value;
// input.value = '';

// const listItem = document.createElement('li');
// const listText = document.createElement('span');
// const listBtn = document.createElement('button');

// listItem.appendChild(listText);
// listText.textContent = myItem;
// listItem.appendChild(listBtn);
// listBtn.textContent = '❌';
// list.appendChild(listItem);

// listBtn.onclick = function(e) {
//   list.removeChild(listItem);
// }

// input.focus();
// }
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener('click', function () {
    if (input.value) {
        let newListItem = document.createElement('li');
        let newDeleteButton = document.createElement('button');
        newListItem.innerHTML = input.value;
        newDeleteButton.textContent = "❌";
        newListItem.appendChild(newDeleteButton);
        list.appendChild(newListItem);
        newDeleteButton.addEventListener('click', function() {
            newListItem.remove();
        });
        input.value = "";
        input.focus();
        }
    })











/*const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

  const listChapter = document.createElement('li');
  const inputChapter = document.createElement('span');
  const listButton = document.createElement('button');
  
  listButton.addEventListener('click', function() {  
      let myItem = input.value;
        input.value = '';

  listChapter.appendChild(inputChapter);
  inputChapter.textContent = myItem;
  listChapter.appendChild(listButton);
  listButton.textContent = 'Delete';
  list.appendChild(listChapter);

  listButton.addEventListener('click', function(e) {  
    list.removeChild(listChapter);
  }
  input.focus(); 
  } */
