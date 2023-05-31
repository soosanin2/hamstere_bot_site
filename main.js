const commands = [
    {
        title: "Загальна інформація",
        description: "Трішки про бота",
        image: "img/bot.jpg"
    },
    {
        title: "МЕНЮ",
        description: "Головне меню",
        image: "img/menu.jpg",
    },
    {
        title: "МЕНЮ",
        description: "Меню телефонної книги",
        image: "img/phone_book.jpg",
    }
]

let currentCommand = 0

const updateCommand = (index) => {
    document.getElementById('command-title').innerText = commands[index].title;
    document.getElementById('command-image').src = commands[index].image;
    document.getElementById('command-description').innerText = commands[index].description;
}

// init command content
updateCommand(currentCommand);

// add button event listeners

document.getElementById('left').onclick = (e) => {
    currentCommand = currentCommand === 0 ? commands.length - 1 : currentCommand - 1;
    updateCommand(currentCommand);
}

document.getElementById('right').onclick = (e) => {
    currentCommand = currentCommand === commands.length - 1 ? 0 : currentCommand + 1;
    updateCommand(currentCommand);
}