export interface IQuestion {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export const questions: IQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    id: 3,
    question: "What is the largest planet in our Solar System?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter"
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    answers: ["O2", "H2O", "CO2", "NaCl"],
    correctAnswer: "H2O"
  },
  {
    id: 5,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
  },
  {
    id: 6,
    question: "What is the fastest land animal?",
    answers: ["Cheetah", "Lion", "Horse", "Eagle"],
    correctAnswer: "Cheetah"
  },
  {
    id: 7,
    question: "What is the smallest unit of matter?",
    answers: ["Atom", "Molecule", "Electron", "Proton"],
    correctAnswer: "Atom"
  },
  {
    id: 8,
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars"
  },
  {
    id: 9,
    question: "What is the square root of 64?",
    answers: ["6", "7", "8", "9"],
    correctAnswer: "8"
  },
  {
    id: 10,
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 11,
    question: "What is the longest river in the world?",
    answers: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correctAnswer: "Nile River"
  },
  {
    id: 12,
    question: "Who developed the theory of relativity?",
    answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: "Albert Einstein"
  },
  {
    id: 13,
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "South Korea", "Japan", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 14,
    question: "What is the main ingredient in sushi?",
    answers: ["Chicken", "Beef", "Fish", "Pork"],
    correctAnswer: "Fish"
  },
  {
    id: 15,
    question: "What is the capital of Italy?",
    answers: ["Venice", "Rome", "Milan", "Naples"],
    correctAnswer: "Rome"
  },
  {
    id: 16,
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond"
  },
  {
    id: 17,
    question: "What year did the Titanic sink?",
    answers: ["1910", "1912", "1914", "1916"],
    correctAnswer: "1912"
  },
  {
    id: 18,
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    id: 19,
    question: "What is the main gas found in the air we breathe?",
    answers: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    id: 20,
    question: "Who was the first President of the United States?",
    answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    correctAnswer: "George Washington"
  },
];
