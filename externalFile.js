console.log("External JS file connected!");

var questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        options: ["London", "Berlin", "Madrid", "Paris"]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
        options: ["Venus", "Mars", "Jupiter", "Saturn"]
    },
    {
        question: "What is the largest mammal?",
        answer: "Blue Whale",
        options: ["Elephant", "Giraffe", "Blue Whale", "Lion"]
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci",
        options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"]
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: "Au",
        options: ["Ag", "Fe", "Au", "Cu"]
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: "Mount Everest",
        options: ["Mount Kilimanjaro", "Mount McKinley", "Mount Everest", "Mount Fuji"]
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        answer: "Carbon Dioxide",
        options: ["Oxygen", "Helium", "Carbon Dioxide", "Hydrogen"]
    },
    {
        question: "What is the smallest prime number?",
        answer: "2",
        options: ["1", "2", "3", "5"]
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answer: "Albert Einstein",
        options: ["Isaac Newton", "Galileo Galilei", "Marie Curie", "Albert Einstein"]
    }
];
//inserting Level buttons and starting new game
const levelsContainer = document.querySelector('.levels');
var gameProgress = 0;
function newGame(){
    gameProgress = 0;
    const el = document.getElementById("formSubmiter");
    el.classList.remove("hidden");

    levelsContainer.innerHTML = '';
questions.forEach((levelObject, index) => {
    const button = document.createElement('button');
    button.className = 'diamond-button';
    button.id = index;
    button.addEventListener('click', handleClick);
    
    const paragraph = document.createElement('p');
    paragraph.innerHTML = index+1;
    paragraph.id = index;
    
    button.appendChild(paragraph);
    levelsContainer.appendChild(button);
    
});
displayQuestion(gameProgress);
const box = document.getElementById(gameProgress);
box.style.backgroundColor="darkblue";

}
// inserting questions from diferent Object
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

function displayQuestion(index) {
    const question = questions[index];

    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = ''; // Clear any previous options

    question.options.forEach((option, optionIndex) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        
        input.type = 'radio';
        input.name = 'options';
        input.value = optionIndex;

        label.textContent = option;

        label.prepend(input);
        li.appendChild(label);
        
        optionsElement.appendChild(li);
    });
}
function handleClick(event) {
    const buttonId = event.target.id;
    const box = document.getElementById(buttonId);
    console.log("Clicked button ID:", buttonId);
    if(buttonId >= gameProgress){
        noProgress();
    }else{
        displayQuestion(buttonId);
        box.style.backgroundColor="darkblue";
    }
}
function noProgress(){
    const highlightedElements = document.getElementById("highlight");

        highlightedElements.classList.remove("hidden");
        setTimeout(() => {
            highlightedElements.classList.add("hidden");
        }, 5000);
}

