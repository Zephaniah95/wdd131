const quizData = [
  {
    question: "Who built the ark to save his family and animals from the flood?",
    options: ["Moses", "Noah", "Abraham", "Elijah"],
    answer: "Noah"
  },
  {
    question: "What does the name 'Emmanuel' mean?",
    options: ["God with us", "Light of the world", "Prince of peace", "Holy one"],
    answer: "God with us"
  },
  {
    question: "In which book of the Bible can we find the Ten Commandments?",
    options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    answer: "Exodus"
  },
  {
    question: "Who led the Israelites out of Egypt?",
    options: ["Elijah", "Moses", "Joseph", "David"],
    answer: "Moses"
  },
  {
    question: "What is the first book of the Bible?",
    options: ["Genesis", "Matthew", "Psalms", "Revelation"],
    answer: "Genesis"
  },
  {
    question: "What does the term 'faith' mean?",
    options: ["Belief in unseen things", "Doubt in all things", "Following rules", "Seeking proof"],
    answer: "Belief in unseen things"
  },
  {
    question: "Who was thrown into the lion’s den for praying to God?",
    options: ["Daniel", "David", "Jonah", "Paul"],
    answer: "Daniel"
  },
  {
    question: "What fruit did Eve eat in the Garden of Eden?",
    options: ["Apple", "Unknown fruit", "Fig", "Grape"],
    answer: "Unknown fruit"
  },
  {
    question: "Which prophet was swallowed by a great fish?",
    options: ["Jonah", "Elijah", "Isaiah", "Jeremiah"],
    answer: "Jonah"
  },
  {
    question: "Who betrayed Jesus for 30 pieces of silver?",
    options: ["Peter", "Judas", "Thomas", "James"],
    answer: "Judas"
  },
  {
    question: "What is the greatest commandment according to Jesus?",
    options: [
      "Love your neighbor as yourself",
      "Love the Lord your God with all your heart",
      "Do not steal",
      "Keep the Sabbath holy"
    ],
    answer: "Love the Lord your God with all your heart"
  },
  {
    question: "What symbol did God give to Noah as a promise never to flood the earth again?",
    options: ["Rainbow", "Dove", "Olive branch", "Star"],
    answer: "Rainbow"
  },
  {
    question: "What does baptism represent?",
    options: [
      "Cleansing from sin and new life in Christ",
      "Becoming a church member",
      "A yearly ritual",
      "A celebration of birth"
    ],
    answer: "Cleansing from sin and new life in Christ"
  },
  {
    question: "Who was known for his wisdom and built the first temple in Jerusalem?",
    options: ["Solomon", "David", "Saul", "Samuel"],
    answer: "Solomon"
  },
  {
    question: "What is the golden rule?",
    options: [
      "Do unto others as you would have them do unto you",
      "Pray three times daily",
      "Give to the poor",
      "Respect your elders"
    ],
    answer: "Do unto others as you would have them do unto you"
  }
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

function loadQuiz() {
  quizContainer.innerHTML = quizData.map((q, index) => `
    <div class="question-block">
      <p><strong>${index + 1}. ${q.question}</strong></p>
      ${q.options.map(option => `
        <label>
          <input type="radio" name="question${index}" value="${option}">
          ${option}
        </label><br>
      `).join('')}
    </div>
  `).join('');
}

submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const total = quizData.length;
  resultDisplay.textContent = `You scored ${score} out of ${total}! 🙌`;

  // Track attempts using localStorage
  let attempts = localStorage.getItem("quizAttempts") || 0;
  attempts++;
  localStorage.setItem("quizAttempts", attempts);

  resultDisplay.innerHTML += `<br>You have taken this quiz ${attempts} time(s).`;
});

loadQuiz();
