
const list = document.querySelector('ul');
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
}

  /*input.focus(); */
