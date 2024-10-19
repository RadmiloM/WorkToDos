const button = document.querySelector('button');
const userInput = document.querySelector('input');
const ulContainer = document.createElement('ul');
ulContainer.classList = 'flex-container flex-column';
document.body.appendChild(ulContainer);

button.addEventListener('click', () => {
    const userInputValue = userInput.value;
    const listItem = document.createElement('li');
    listItem.textContent = userInputValue;
    const closeButton = document.createElement('button');
    styleCloseButton(closeButton);
    listItem.appendChild(closeButton);
    ulContainer.appendChild(listItem);
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('task-done');
    })
    closeButton.addEventListener('click', () => {
        ulContainer.removeChild(listItem);
    })
})

function styleCloseButton(closeButton) {
    closeButton.textContent = 'X';
    closeButton.style.float = 'right';
    closeButton.style.fontWeight = '800';
    closeButton.style.backgroundColor = 'none';
    closeButton.style.color = 'black';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
}