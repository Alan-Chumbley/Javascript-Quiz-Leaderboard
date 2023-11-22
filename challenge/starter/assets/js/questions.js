//a start button
//2. upon click timer starts with first question

//each question contains buttons

//when answer is clocled then question should appear


// if answer incorrect then subtract tome from clock

//quiz ends when time = 0

//game ends and displats score

var questions = [
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers : [
            {text: "a) Boolean", correct: false },
            {text: "b) String", correct: false },
            {text: "c) Float", correct: true },
            {text: "d) Object", correct: false },
        ]
    },
    {
        question: "What does DOM stand for in JavaScript?",
        answers : [
            {text: "a) Document Object Model", correct: true },
            {text: "b) Data Object Model", correct: false },
            {text: "c) Document Oriented Model", correct: true },
            {text: "d) Delayed Onset Memory", correct: false },
        ]
    },
    {
        question: "Which of the following is a correct way to comment a single line in JavaScript?",
        answers : [
            {text: "a) // This is a comment", correct: true },
            {text: "b) /* This is a comment */", correct: false },
            {text: "c) <!-- This is a comment -->", correct: false },
            {text: "d) # This is a comment", correct: false },
        ]
    },
    {
        question: "What method is used to add a new element at the end of an array in JavaScript?",
        answers : [
            {text: "a) addToEnd()", correct: false },
            {text: "b) append()", correct: false },
            {text: "c) push()", correct: true },
            {text: "d) addEnd()", correct: false },
        ]
    }, 
{
    question: "What does the forEach() method do in JavaScript?",
    answers : [
        {text: "a) Loops through elements of an array", correct: true },
        {text: "b) Checks if an array contains a specific element", correct: false },
        {text: "c) Sorts the elements of an array", correct: false },
        {text: "d) Adds elements to the end of an array", correct: false },
    ]
},
{
    question: "What does the setTimeout() function do in JavaScript?",
    answers : [
        {text: "a) Executes a function after a specified delay", correct: true },
        {text: "b) Halts the execution of a function", correct: false },
        {text: "c) Sets an interval for a function to execute repeatedly", correct: false },
        {text: "d) Initializes a timer for an immediate function execution", correct: false },
    ]
}

];



