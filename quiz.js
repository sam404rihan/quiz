const questions = [
    {
        question: "What is the traditional dress of men in Punjab?",
        options: ["Dhoti", "Lungi", "Kurta Pajama", "Sherwani"],
        answer: "Kurta Pajama"
    },
    {
        question: "Which festival is known as the festival of lights in India?",
        options: ["Holi", "Diwali", "Eid", "Christmas"],
        answer: "Diwali"
    },
    {
        question: "What is the traditional dance form of Kerala?",
        options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
        answer: "Kathakali"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const quizContent = document.getElementById('quizContent');
        quizContent.innerHTML = `
            <p>${question.question}</p>
            <ul>
                ${question.options.map(option => `<li><button onclick="selectAnswer('${option}')">${option}</button></li>`).join('')}
            </ul>
            <button id="nextButton" onclick="nextQuestion()" style="display:none;">Next</button>
        `;
        updateProgressBar();
    } else {
        displayResults();
    }
}

function selectAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    document.querySelectorAll('#quizContent ul li button').forEach(button => {
        button.disabled = true;
    });
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function displayResults() {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = `
        <h3>Quiz Completed</h3>
        <p>Your Score: ${score} out of ${questions.length}</p>
    `;

    // Store the score in localStorage
    let teams = JSON.parse(localStorage.getItem('teams')) || [];
    const currentTeamIndex = teams.findIndex(team => team.username === localStorage.getItem('currentTeam'));
    if (currentTeamIndex !== -1) {
        teams[currentTeamIndex].score = score;
        localStorage.setItem('teams', JSON.stringify(teams));
    }
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progress.style.width = `${progressPercentage}%`;
}

// Initialize the quiz
displayQuestion();
