const data = {
    firstName: 'Chiruhas',
    lastName: 'Bobbadi',
    email: 'chiruhas.bobadi@gmail.com',
    mobile: '+1 (972) 209 5682',
    linkedinUrl: "https://www.linkedin.com/in/chiruhas-bobbadi/",
    githubUrl: "https://github.com/ChiruhasBobbadi",

    about: `Hi, I am Chiruhas, i reside in San José  California, I am currently a graduate student at San José State University, majoring in software engineering with a concentrated specialization in Enterprise Software Technologies. I am actively looking for a Software Development Internship. I am a highly motivated and enthusiastic individual with a passion for Software Development. With 4+ years experience in building application related to my coursework, I have developed a strong set of skills and knowledge in Software Development. Whether working independently or as part of a team, I approach every task with determination and a drive to deliver high-quality results.

More than a developer, I am a problem solver, I identify problems around me and try to come up with a solution with the tools I have at my disposal, this includes all the programming languages and various frameworks that are built on top of it.\n

Apart from programming, I also fancy Finance, I use this website as a platform to showcase my skills and projects, many of my projects are open source if you find any project interesting or want to collaborate on a project, I am open and you can connect with me through this site.\n

When I'm not working or studying, you can find me cooking food ❤️, reading a book, going out on a long drive, in the gym, playing on my Xbox or going on a trek, all of them help me to recalibrate my inner self. I do stick to a schedule so I don't waste my time thinking about what to do next. \n

P.S.  I could tell you a joke about UDP but I don't know if you would get it.\n
`,

    projects: [
        {
            title: 'Acme Fitness',
            description: [''],
            techStack: ['reactjs', 'Go Lang', 'PostgreSQL', 'Docker','AWS'],
            githubUrl: 'https://github.com/orgs/Acme-Fitness-Gym-Management-System/dashboard',
            current: false
        },

        {
            title: 'IoT Dashboard.',
            description: ['This application can be used by users to monitor all of their IoT devices in one place. Worked in collaboration with 4 members and created a dashboard that provides users with 4 features like the ability to manage devices, control & configure,monitor & tracking and billing.', 'Worked hands on with AWS IoT simulator to simulate diverse IoT clients.'],
            techStack: ['reactjs', 'nodejs', 'mongodb'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/dashboard-react',
            current: false
        },
        {
            title: 'portfolioX',
            description: [`This website has been meticulously designed and developed from scratch to provide an exceptional user experience by giving people high flexibility to simply create their portfolio page, without having to go through the coding phase, simply plug in your data in place of mine and just like that you have your portfolio page.`],
            techStack: ['reactjs', 'nextUI','Google Analytics'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/portfolio-23',
            current: true
        },
        {
            title: 'ThunderStorm Alert System',
            description: [' This application works like a radar constantly scanning the area to identify if the region in which a user is present is a thunderstorm zone or not, it does this even when the application is not actively running in the foreground.', 'Established a TCP connection to a 3 rd party server to listen to thunderstorm data. Harnessed the power of NOSQL geospatial operations.'],
            techStack: ['bootstrap', 'javascript', 'nodejs', 'mongodb', 'android'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/Thunder_Storm',
            current: false
        },
        {
            title: 'Margin & Brokerage Calculator',
            description: ['This mobile application serves real-time margins of stocks and commodities of various trading platforms of India, this application also comes with a built in profit/Loss calculator.', 'Utilized a discrete set of techniques ranging from caching data for limiting API calls to web scraping for getting data from a source where an API endpoint is not exposed.'],
            techStack: ['android', 'nodejs'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/MarginAndBrokerageCalculatorForZerodha',
            current: false
        },
        {
            title: 'Bhaktivedanta Library',
            description: ['A comprehensive E-reader android application with offline data access capabilities, the application comes pre-loaded with 24 religious books, and contains a sleuth of features that an E-reader application is expected to have', 'The application also supports various functions like searching, bookmarking, tagging, and also has a native dark mode support.'],
            techStack: ['android', 'sqlite'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/Bhaktivedanta-Library',
            current: false
        },
        {
            title: 'Stock Watch List',
            description: ['This is a react-native application where users can search s&p 500 stocks, add them to watchlist and see open, high, low, close price, percent increase or decrease along with volumes'],
            techStack: ['reactjs'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/stockWatchlist',
            current: false
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
            description: " This degree goes beyond programming to include engineering methodologies and hands-on project experience which prepared me to become a qualified engineer for the Silicon Valley and International engineering market by providing me with state-of-the-art engineering methods, emergent technologies, teamwork experience, and solutions. " +
                "This program also helped me address design, coding, validation, and measurement issues for constructing large-scale computer systems and software applications in the real world.",
            coursework: [
                "Enterprise software platforms",
                "Software systems engineering",
                "Enterprise Application Development",
                "Cloud Computing",
                "Enterprise Distributed Systems",
            ]
        },
        {
            degree: "Bachelors in Computer Science",
            college: "Velagapudi Ramakrishna Siddhartha Engineering College",
            timeline: "Aug 2017 - Aug 2021",
            currentlyPursuing: false,
            collegeLink: 'https://www.vrsiddhartha.ac.in/',
            description: ' The bachelor\'s degree was filled with lots of theoretical learning of core subjects related to computer science coupled with hands-on lab work which provided me the opportunity to tweak, break and write code, the curriculum goes above and beyond including new and emerging technologies, that allowed me to learn things that matter. ',
            coursework: [
                "Data Structures and Algorithms",
                "Object Oriented Design",
                "Database Management Systems",
                "Operating Systems",
                "Networking",
                "Server Side Programming",
                "Software Engineering Methodologies",
                "Mobile Application Development"

            ]
        }

    ],
    skills: [
        {
            name: 'Programming Languages',
            skills: ['Java️', 'Kotlin', 'Go Lang', 'JavaScript', 'Python', 'php', 'C/C++']
        },
        {
            name: 'Front End',
            skills: ['HTML', 'CSS', 'BootStrap', 'Jquery', 'JavaScript', 'React.js']
        },
        {
            name: 'Back End',
            skills: ['Node.js', 'Spring Boot (learning)', 'Gin (Go Lang)' ,'gRPC','Microservices','Design Patterns']
        },
        {name: 'Databases', skills: ['MongoDB', 'MySQL', 'DynamoDB', 'Firebase']},
        {
            name: 'Others',
            skills: ['Version Control (Git)', 'GraphQL','Apache Kafka']
        },{
        name:'Misc',
            skills:['Problem Solving Skills','Data Structures & Algorithms','Docker & Kubernetes', 'AWS']
        }

    ],
    publications: [
        {
            title: 'HsvGvas: HSV Color Model to Recognize Greenness of Forest Land for the Estimation of Change in the Vegetation Areas',
            description: 'In the last two decades there have been a widespread ascent in ecological difficulties being looked at by urban areas and nations internationally. In India, challenges identified with air contamination, squander the executives, shortage of water, protection of standard assets, and loss of biodiversity have been expanding. To oblige our expanding population, immense zones that once had tree cover have been deforested. In recent years, unnatural weather changes and forest fires have essentially influenced woodland cover in different pieces of the world. It is getting extremely hard to appropriately survey the harm to the vegetation, even with satellite imagery. An answer for this issue lies in distinguishing the measure of vegetation of a district utilizing satellite images which are then used to ascertain the green space of the land. This measurement can then measure up to the past green space of the area to survey the harm. The system being proposed takes satellite images of a region. Using computer vision, it calculates the percentage of vegetation or forest cover on land using color recognition in HSV color space. The proposed approach measures the green area by creating a mask of the satellite image using the lower and upper bounds of the HSV color space of the green color. Then, the procedure is followed by applying a morphological transformation of dilation on the image followed by bitwise AND operation between the original image and the mask to specifically detect only the green and shades of green and discard other colors. Using this system, changes in the vegetation area over a period can be estimated.\n' +
                '\n',
            publishedYear: '2022',
            link: 'https://link.springer.com/chapter/10.1007/978-981-16-8225-4_21'
        }, {
            title: 'Geospatial Based Thunder Storm Alert System',
            description: 'In recent years, natural calamities and disasters have increased day by day and people have suffered the consequences of them, one of the primary reasons being the unavailability of proper information which can be reached to people. GoogleMaps is growing rapidly due to the rise in devices that can take advantage of geospatial information, namely GPS enabled devices. The universality of handheld computing devices has been found to be especially efficient and effective in conducting disaster management and relief operations, so an application is in need which can alert users when there is a natural calamity in their vicinity so the users of that application can take appropriate measures to save themselves and reduce the dependence on search and rescue teams during a calamity because their expertise can be used elsewhere, such an application eliminates the need for rescue because the users are provided with alerts if they are in a calamity zone, so users can be aware of the danger they are in and take necessary measures. The natural calamity focused here is thunderstorms and lightning. The use of Smart phones has skyrocketed among people and developing an application that stays in the very mobile they use daily and also serves alerts people is a total lifesaver for many people, Andhra Pradesh State Disaster Management Authority (APSDMA) wants to provide this service over a Smart phone application. If the user is in a possible area of thunder strikes, this application can alert the user. This app provides alerts based upon the data provided by APSDMA.',
            publishedYear: '2020',
            link: 'http://sersc.org/journals/index.php/IJGDC/article/view/30791'
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
