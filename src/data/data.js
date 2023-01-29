const data = {
    firstName: 'Chiruhas',
    lastName: 'Bobbadi',
    email: 'chiruhas.bobadi@gmail.com',
    mobile: '+1 (972) 209 5682',
    linkedinUrl: "https://www.linkedin.com/in/chiruhas-bobbadi/",
    githubUrl: "https://github.com/ChiruhasBobbadi",

    about: [
        ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis deserunt officia! Animi cupiditate laborum nam nulla quibusdam reprehenderit tenetur!`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorem ducimus enim fugit, obcaecati soluta. Dolore et quam sapiente voluptate!`,

    ],

    projects: [
        {
            title: 'IoT Dashboard.',
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio magni non nostrum placeat quasi quod reprehenderit sed sequi suscipit.',
            techStack: ['reactjs', 'nodejs', 'mongodb'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/dashboard-react',
            current:false
        },
        {
            title: 'ThunderStorm Alert System',
            description: ' Margin and Brokerage calculator is built with the goal of cutting down the time taken by trader\'s to calculate margins and Brokerage for various types of stocks and commodities.',
            techStack: ['bootstrap','javascript', 'nodejs', 'mongodb','android'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/Thunder_Storm',
            current:false
        },
        {
            title: 'Margin & Brokerage Calculator',
            description: 'This mobile application serves real-time margins of stocks and commodities of various trading platforms in India, this application also comes with a built in profit/Loss calculator too.',
            techStack: ['android','nodejs'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/MarginAndBrokerageCalculatorForZerodha',
            current:false
        },
        {
            title: 'Bhaktivedanta Library',
            description:'E-reader android application comes pre-loaded with 24 religious books, and contains a sleuth of feautres that an E-reader application would have',
            techStack: ['android','sqlite'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/Bhaktivedanta-Library',
            current:false
        },
        {
            title: 'Stock Watch List',
            description: 'This is a react-native application where users can search s&p500 stocks, add them to watchlist and see open,high,low,close price, percent increase or decrease along with volumes',
            techStack: ['reactjs'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/stockWatchlist',
            current:false
        },

    ],
    experience: [],
    education: [
        {
            degree: "Masters in Software Engineering",
            college: "San José State University",
            timeline: "Aug 2022-",
            currentlyPursuing: true,
            collegeLink: 'https://www.sjsu.edu/',
            description: " This degree goes beyond programming to include engineering methodologies and hands-on project experience. This program prepared me to become a qualified engineer for the Silicon Valley and International engineering market by providing me with state-of-the-art engineering methods, emergent technologies, teamwork experience, and solutions. " +
                "This program also helped me address design, coding, validation, and measurement issues for constructing large-scale computer systems and software applications in the real world.",
            coursework: [
                "Data Structures and Algorithms",
                "Object Oriented Design",
                "Database Management Systems",
                "Server Side Programming",
                "Software Engineering Methodologies",
            ]
        },
        {
            degree: "Bachelors in Computer Science",
            college: "Velagapudi Ramakrishna Siddhartha Engineering College",
            timeline: "Aug 2017 - Aug 2021",
            currentlyPursuing: false,
            collegeLink: 'https://www.vrsiddhartha.ac.in/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate deserunt eaque error facilis fugiat minima mollitia nam neque nesciunt nisi nostrum numquam odio, quos rem, sequi tenetur, veritatis.',
            coursework: [
                "Data Structures and Algorithms",
                "Object Oriented Design",
                "Database Management Systems",
                "Server Side Programming",
                "Software Engineering Methodologies",
            ]
        }

    ],
    skills: [
        {
            name: 'Programming Languages',
            skills: ['Java ❤️', 'JavaScript', 'Python', 'C/C++']
        },
        {
            name: 'Front End',
            skills: ['HTML', 'CSS', 'BootStrap', 'Jquery', 'JavaScript', 'React.js']
        },
        {
            name: 'Back End',
            skills: ['Node.js', 'Django', 'Spring (learning)']
        },
        {name: 'Databases', skills: ['MongoDB', 'MySQL', 'DynamoDB', 'Firebase']}

    ],
    publications: [
        {
            title: 'temp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at excepturi vel. Aliquam doloremque impedit ipsam minus non quam quas.',
            publishedYear: '',
            link: ''
        }
    ],
    connect: [
        {
            name: 'E-mail',
            link: 'chiruhas.bobbadi@gmail.com',

        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/chiruhas-bobbadi/',
        }, {
            name: 'GitHub',
            link: 'https://github.com/ChiruhasBobbadi'
        }, {
            name: 'LeetCode',
            link: 'https://leetcode.com/chiruhas/'
        }
    ]


}


export default data;
