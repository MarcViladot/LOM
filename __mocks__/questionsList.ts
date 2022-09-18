import {Question, QuestionType} from '../src/app/interfaces/Question';

export const questionsList: Question[] = [
    {
        question: 'What is the current year?',
        correctAnswer: new Date().getFullYear().toString(),
        type: QuestionType.Number
    },
    {
        question: 'Which is the longest river in South Africa?',
        correctAnswer: 'Orange River',
        type: QuestionType.Multiple,
        options: ['Orange River', 'Limpopo River', 'Caledon River', 'Olifants River']
    },
    {
        question: 'Which is the largest country in the world?',
        correctAnswer: 'Russia',
        type: QuestionType.Text
    },
    {
        question: '12 / 4 = ?',
        correctAnswer: '3',
        type: QuestionType.Number
    },
    {
        question: 'What is the surname of the leading creator of relativity theory called Albert?',
        correctAnswer: 'Einstein',
        options: ['Einstein', 'Newton', 'Curie', 'Tesla'],
        type: QuestionType.Multiple
    },
    {
        question: 'What is the capital of France?',
        correctAnswer: 'Paris',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        type: QuestionType.Multiple
    },
    {
        question: 'What is the capital of Germany?',
        correctAnswer: 'Berlin',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        type: QuestionType.Multiple
    },
    {
        question: 'What temperature does water boil at (with ºC)?',
        correctAnswer: '100',
        type: QuestionType.Multiple,
        options: ['100', '0', '50', '200'],
    },
    {
        question: 'What is the capital of Italy?',
        correctAnswer: 'Rome',
        type: QuestionType.Text
    },
    {
        question: 'What is the capital of the United Kingdom?',
        correctAnswer: 'London',
        type: QuestionType.Text
    },
    {
        question: 'Where is Lincoln Memorial situated in America?',
        correctAnswer: 'Washington DC',
        type: QuestionType.Multiple,
        options: ['New York', 'Washington DC', 'Los Angeles', 'Chicago'],
    },
    {
        question: 'Which vitamin is present in citrus fruits?',
        correctAnswer: 'Vitamin C',
        type: QuestionType.Multiple,
        options: ['Vitamin C', 'Vitamin D', 'Vitamin E', 'Vitamin B12'],
    },
    {
        question: 'Mc Donald’s is the fast-food company founded in?',
        correctAnswer: '1940',
        type: QuestionType.Number
    },
    {
        question: 'who is the lead actress of Hunger Games?',
        correctAnswer: 'Jennifer Lawrence',
        type: QuestionType.Multiple,
        options: ['Jennifer Lawrence', 'Emma Watson', 'Emma Stone', 'Scarlett Johansson'],
    },
    {
        question: 'Worship of Krishna is observed by which Religious Faith?',
        correctAnswer: 'Hinduism',
        type: QuestionType.Multiple,
        options: ['Hinduism', 'Islam', 'Christianity', 'Buddhism'],
    },
    {
        question: 'Who died after drinking a cup of poisoned hemlock?',
        correctAnswer: 'Socrates',
        type: QuestionType.Multiple,
        options: ['Socrates', 'Plato', 'Aristotle', 'Pythagoras']
    },
    {
        question: 'How many calories does an average woman needs?',
        correctAnswer: '2000',
        type: QuestionType.Number
    },
    {
        question: 'Pneumonectomy is the treatment of which disease?',
        correctAnswer: 'Lung cancer',
        type: QuestionType.Multiple,
        options: ['Lung cancer', 'Breast cancer', 'Prostate cancer', 'Skin cancer'],
    },
    {
        question: 'When did Rutherford discover the nuclear model?',
        correctAnswer: '1911',
        type: QuestionType.Number
    },
    {
        question: 'Ozone is present in which layer of the atmosphere?',
        correctAnswer: 'Stratosphere',
        type: QuestionType.Text
    }

];

export const shuffleArray = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

