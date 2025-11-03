console.log("Digital Detox Quiz - Social Project Loaded");

const questions = [
    {
        question: "You are studying for an exam. Where is your phone?",
        answers: [
            { text: "On the table, next to my books", points: 1 },
            { text: "In my bag or in another room", points: 2 },
            { text: "In my hand, I check it every few minutes", points: 0 }
        ]
    },
    {
        question: "You are waiting for a friend who is late. What do you do?",
        answers: [
            { text: "I start scrolling through social media", points: 0 },
            { text: "I listen to music or read a news article", points: 1 },
            { text: "I just watch people or think about my day", points: 2 }
        ]
    },
    {
        question: "Where is your phone when you sleep?",
        answers: [
            { text: "On my bed or under my pillow", points: 0 },
            { text: "On the nightstand next to me", points: 1 },
            { text: "On the other side of the room or in another room", points: 2 }
        ]
    },
    {
        question: "You are having lunch with friends. Your phone is:",
        answers: [
            { text: "On the table, and I check it often", points: 0 },
            { text: "In my pocket. I use it only to show a photo", points: 1 },
            { text: "In my bag, and I don't look at it", points: 2 }
        ]
    },
    {
        question: "How do you feel if you forget your phone at home?",
        answers: [
            { text: "Very anxious. I go back to get it", points: 0 },
            { text: "A little uncomfortable, but it's okay", points: 1 },
            { text: "Free and relaxed", points: 2 }
        ]
    },
    {
        question: "What is the first thing you do in the morning?",
        answers: [
            { text: "Check my phone for messages and notifications", points: 0 },
            { text: "Get out of bed, wash my face, and then check my phone", points: 1 },
            { text: "Do my morning routine without my phone for the first 30 minutes", points: 2 }
        ]
    },
    {
        question: "You are watching a movie. How often do you check your phone?",
        answers: [
            { text: "Very often, I can't stop", points: 0 },
            { text: "Only during boring parts", points: 1 },
            { text: "I put it on silent mode and don't check it", points: 2 }
        ]
    },
    {
        question: "You have free time. What is your favorite activity?",
        answers: [
            { text: "Browsing TikTok or Instagram", points: 0 },
            { text: "Watching a movie or playing a game on my phone", points: 1 },
            { text: "Going for a walk, reading a book, or meeting friends", points: 2 }
        ]
    },
    {
        question: "Your phone battery is at 10%. What do you do?",
        answers: [
            { text: "Panic and look for a charger immediately", points: 0 },
            { text: "Feel a bit stressed, but it's not a big problem", points: 1 },
            { text: "It's okay, I can charge it later", points: 2 }
        ]
    },
    {
        question: "You need to concentrate on reading. What do you do?",
        answers: [
            { text: "I try to read, but notifications distract me", points: 0 },
            { text: "I turn on 'Do Not Disturb' mode", points: 1 },
            { text: "I put my phone in another room before I start", points: 2 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalPoints = 0;

// Main Functions
window.startQuiz = function() {
    console.log("Starting Digital Detox Quiz");
    currentQuestionIndex = 0;
    totalPoints = 0;
    showScreen('quiz-screen');
    showQuestion();
};

window.showQuestion = function() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.points);
        answersContainer.appendChild(button);
    });
};

window.selectAnswer = function(points) {
    totalPoints += points;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

window.showResult = function() {
    let result;
    const maxPoints = 20;
    
    if (totalPoints <= 7) {
        result = {
            title: "The Phone Lover 📱",
            description: "Your phone is the center of your daily routine. Don't worry - small changes can make a big difference in your focus and studies!",
            emoji: "❤️",
            level: "low"
        };
    } else if (totalPoints <= 14) {
        result = {
            title: "The Balanced User ⚖️",
            description: "You have a good balance but sometimes get distracted. With a few adjustments, you can optimize your phone usage for better academic performance.",
            emoji: "⚖️",
            level: "medium"
        };
    } else {
        result = {
            title: "The Digital Detox Master 🌱",
            description: "Excellent! You're in control of your technology. Share your habits with friends and help others achieve digital balance.",
            emoji: "🌱",
            level: "high"
        };
    }
    
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('result-emoji').textContent = result.emoji;
    document.getElementById('score-value').textContent = totalPoints + "/" + maxPoints;
    
    showEducationalTips(result.level);
    showScreen('result-screen');
};

// Educational Content
window.showEducationalTips = function(level) {
    const tips = {
        low: [
            "📵 No-phone meals - Focus on food and company",
            "🔕 Turn off non-essential notifications for 4 hours daily",
            "📚 Phone-free study sessions - Use Pomodoro technique",
            "🌙 Charge phone in another room overnight",
            "🚶‍♂️ Walk without phone - Enjoy surroundings",
            "📖 Read physical books before sleep",
            "🎯 Set app time limits for social media"
        ],
        medium: [
            "⏰ Designated phone times - Check only at specific hours",
            "🎓 Phone in bag during lectures - Better concentration",
            "📱 Delete one distracting app for a week",
            "👥 Phone-free social meetings - Quality time with friends",
            "🌅 Morning routine without phone - First 30 minutes",
            "📊 Track screen time weekly - Set reduction goals",
            "🎮 Replace phone time with hobbies or sports"
        ],
        high: [
            "🌟 Mentor others - Share your digital balance tips",
            "📱 Organize phone-free events with friends",
            "💡 Create personal digital detox challenges",
            "🎯 Teach phone hygiene to classmates",
            "📚 Start a study group with phone-free rules",
            "🌱 Lead by example - Show benefits of digital minimalism",
            "🚀 Innovate new ways to stay productive offline"
        ]
    };
    
    const userTips = tips[level];
    const tipsContainer = document.getElementById('educational-tips');
    
    let tipsHTML = '';
    userTips.forEach(tip => {
        tipsHTML += `<div class="tip-item">${tip}</div>`;
    });
    
    tipsContainer.innerHTML = tipsHTML;
};

// Utility Functions
window.showScreen = function(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
};

window.restartQuiz = function() {
    showScreen('start-screen');
};

window.shareQuiz = function() {
    const url = "https://safin3010-commits.github.io/EnglishQuiz";
    if (navigator.share) {
        navigator.share({
            title: 'Digital Detox Quiz',
            text: 'Check your phone habits and get personalized detox tips!',
            url: url
        });
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard! Share with your friends.');
        });
    }
};

console.log("Digital Detox Quiz initialized successfully");
