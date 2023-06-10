import { useState } from 'react';
import './App.css';

function App() {
    const tests = [
        {
            question: '1 how to build website for free?',
            answers: [
                'Learn how code',
                'Hire a friend',
                'Fake it till you make it',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Learn how code'
        },{
            question: '2 how to host website for free?',
            answers: [
                'Ask a friend',
                'Not possible for free',
                'Github Pages',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Github Pages'
        },{
            question: '3 what you should know for React?',
            answers: [
                'Only HTML',
                'HTML, CSS, Javascript',
                'Only CSS',
                'nothing required'
            ],
            correctAnswer: 'HTML, CSS, Javascript'
        },{
            question: '4 where is best to learn React?',
            answers: [
                'Learn by yourself',
                'What is React?',
                'ask somebody to show it to you',
                'Fulltime course at ReDI'
            ],
            correctAnswer: 'Fulltime course at ReDI'
        },{
            question: '5 what can you most likely become after the fulltime course at ReDI?',
            answers: [
                'DevOps',
                'Frontend Web Developer',
                'Data Scientist',
                'UI UX Developer'
            ],
            correctAnswer: 'Frontend Web Developer'
        }
    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinalPage, setShowFinalPage] = useState(false);

    function advanceCurrentQuestion() {
        if (currentQuestion + 1 === tests.length) {
            setShowFinalPage(true);
        } else {
            setCurrentQuestion(i => i += 1);
        }
    }

    function selectHandler(e) {
        console.log(e.target.textContent);
        if (e.target.textContent === tests[currentQuestion].correctAnswer) {
            setScore(i => i += 1);
            alert('Good job!');
        } else {
            alert('Wrong answer!');
        }
        advanceCurrentQuestion();
    }

    function restartQuiz() {
        setScore(0);
        setCurrentQuestion(0);
        setShowFinalPage(false);
    }

    if (showFinalPage) {
        return (
            <div className="App">
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score}</p>
                <button onClick={restartQuiz}>Restart Quiz</button>
            </div>
        );
    }

    return (
        <div className="App">
            <p>Your Score is: {score} | <span>question number {currentQuestion + 1} of 5 questions</span></p>
            <h2>{tests[currentQuestion].question}</h2>
            <main>
                {tests[currentQuestion].answers.map(i => (
                    <div className="answers" key={i}>
                        <p onClick={selectHandler}>{i}</p>
                    </div>
                ))}
            </main>
            <button onClick={advanceCurrentQuestion}>Next</button>
        </div>
    );
}

export default App;
