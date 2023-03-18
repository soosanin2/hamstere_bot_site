const commands = [
    {
        title: "Загальна інформація",
        description: "Трішки про бота",
        image: "img/photo_2023-03-18_19-28-11.jpg"
    },
    {
        title: "Команди",
        description: "Список команд №1",
        image: "img/photo_2023-03-18_19-27-03.jpg",
    },
    {
        title: "Команди",
        description: "Список команд №2",
        image: "img/photo_2023-03-18_19-27-03 (2).jpg",
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