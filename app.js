const button = document.querySelector('button');
const userInput = document.querySelector('input');
const ulContainer = document.createElement('ul');
ulContainer.classList = 'flex-container flex-column';
document.body.appendChild(ulContainer);

button.addEventListener('click', () => {
    const userInputValue = userInput.value;
    const listItem = document.createElement('li');
    listItem.textContent = userInputValue;
    ulContainer.appendChild(listItem);
})