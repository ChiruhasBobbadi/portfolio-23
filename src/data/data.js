const data = {
    firstName: 'Chiruhas',
    lastName: 'Bobbadi',
    email: 'chiruhas.bobadi@gmail.com',
    mobile: '+1 (972) 209 5682',
    linkedinUrl: "https://www.linkedin.com/in/chiruhas-bobbadi/",
    githubUrl: "https://github.com/ChiruhasBobbadi",

    about:   `
    
    Hi, I am Chiruhas, I reside in San José California, I recently graduated from San José State University, with a masters degree in software engineering with a concentrated specialization in Enterprise Software Technologies, currently I am actively looking for an Full-Time SDE Role.

 About me, I am a highly motivated and enthusiastic individual with a passion for Software Development. Over the years, I have developed a strong set of skills and knowledge in Software Development. Whether working independently or as part of a team, I approach every task with determination and a drive to deliver high-quality results.

With a passion for problem-solving, I leverage a diverse skill set in programming languages and frameworks to address challenges. My fascination with system development and interactions led me to pursue a career in software engineering. Each technology I've learned adds a piece to a larger puzzle, providing a clear career direction, my ultimate goal is to become an indispensable asset to the company I work for

I use this website as a platform to showcase my skills and projects, many of my projects are open source if you find any project interesting or want to collaborate on a project, I am open and you can connect me via any options listed on this site.

In my downtime, I enjoy cooking, long drives, exercise, and Xbox gaming as a means of recalibrating my inner self. These are some of the most frequent things I do daily, and I do stick to a schedule so that I don't waste my time thinking about what to do.`


    ,

    projects: [

        // {
        //     title: 'Acme Fitness',
        //     description: ['We developed an End-to-End HealthClub Membership Management system with a collaborative team approach and individual performance tracking. The system includes user-friendly interfaces for Members, Non-Members, and Admins, Users have the ability to ability to log workout’s, view progress & enroll in fitness classes. Subsequently admins have access to analytics dashboard which can be used to draw insights and make necessary decisions', 'The application also boasts robust APIs, and is deployed on an Auto Scaled EC2 Cluster with a Load Balancer for scalability and reliability.'],
        //     techStack: ['reactjs', 'nodejs', 'mongodb'],
        //     githubUrl: 'https://github.com/Acme-Fitness-Gym-Management-System',
        //     current: false
        // },
        {
            title: 'Applying Machine Learning and Crowdsourcing in Utility Management Services',
            description: ['Conventional utility meters like the ones used in households for electricity bill generation are read manually by the distribution company\'s employee periodically - a strategy that is inefficient, error prone and time consuming.',


                'Our Solution enables utility users to manage their utility consumption, by making it as simple as taking a picture of their utility meter, which is then processed by a machine learning model (YOLO v8) which is trained on meter image readings.',

    'Still there might be cases where the model might not be able to detect the reading or give an incorrect reading this is where our proposed approach of "Crowd Sourcing" helps in making the model more effective by gathering feedback from the users which is then used to retrain the model.'],
            techStack: ['Flutter', 'Spring Boot', 'Flask','MySQL','YOLOv8','crowd-sourcing'],
            githubUrl: 'https://github.com/Smart-meter',
            current: false
        },
        {
            title: 'Health Club Management System',
            description: ['We developed an End-to-End HealthClub Membership Management system with a collaborative team approach and individual performance tracking. The system includes user-friendly interfaces for Members, Non-Members, and Admins, Users have the ability to ability to log workout’s, view progress & enroll in fitness classes. Subsequently admins have access to analytics dashboard which can be used to draw insights and make necessary decisions', 'The application also boasts robust APIs, and is deployed on an Auto Scaled EC2 Cluster with a Load Balancer for scalability and reliability.'],
            techStack: ['reactjs', 'golang', 'mongodb',],
            githubUrl: 'https://github.com/Acme-Fitness-Gym-Management-System',
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
            title: 'ThunderStorm Alert System',
            description: [' This application works like a radar constantly scanning the area in which you are present is a thunderstorm zon, it does this even when the application is not actively running in the foreground.', 'Established a TCP connection to a 3 rd party server to listen to thunderstorm data. Harnessed the power of NOSQL geospatial operations.'],
            techStack: ['bootstrap', 'javascript', 'nodejs', 'mongodb', 'android'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/Thunder_Storm',
            current: false
        },
        {
            title: 'Margin & Brokerage Calculator',
            description: ['This mobile application serves real-time margins of stocks and commodities of various trading platforms of India, this application also comes with a built in profit/Loss calculator.', 'Utilized a discrete set of techniques ranging from API calls to web scraping to fetch data and serve it to the client application.'],
            techStack: ['android', 'nodejs'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/MarginAndBrokerageCalculatorForZerodha',
            current: false
        },
        {
            title: 'Bhaktivedanta Library',
            description: ['A comprehensive E-reader android application which comes pre-loaded with 24 religious books, and contains a sleuth of feautres that an E-reader application would have', 'Supports various functions like searching, bookmarking, tagging, and also has a native dark mode support.'],
            techStack: ['android', 'sqlite'],
            githubUrl: 'https://github.com/ChiruhasBobbadi/Bhaktivedanta-Library',
            current: false
        },
        {
            title: 'Stock Watch List',
            description: ['This is a react-native application where users can search s&p500 stocks, add them to watchlist and see open,high,low,close price, percent increase or decrease along with volumes'],
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
            skills: ['Java ❤️', 'Kotlin', 'JavaScript', 'TypeScript', 'Go', 'Python', 'PHP', 'C/C++']
        },
        {
            name: 'Front End',
            skills: ['HTML', 'CSS', 'BootStrap', 'Jquery', 'JavaScript', 'React', 'Next.Js']
        },
        {
            name: 'Back End',
            skills: ['Node.js', 'Django', 'Spring Boot', 'Go (Gin)']
        },
        {name: 'Databases', skills: ['MongoDB', 'MySQL', 'DynamoDB', 'Firebase', 'SQLite', 'Redis', 'PostgreSQL']},
        {
            name:'Others',
            skills:['Version Control (Git)', 'Docker', 'RESTFul API\'s', 'gRPC', 'GraphQL', 'Problem Solving Skills']
        }

    ],
    publications: [
        {
            title: 'HsvGvas: HSV Color Model to Recognize Greenness of Forest Land for the Estimation of Change in the Vegetation Areas',
            description: 'In the last two decades there have been a widespread ascent in ecological difficulties being looked at by urban areas and nations internationally. In India, challenges identified with air contamination, squander the executives, shortage of water, protection of standard assets, and loss of biodiversity have been expanding. To oblige our expanding population, immense zones that once had tree cover have been deforested. In recent years, unnatural weather changes and forest fires have essentially influenced woodland cover in different pieces of the world. It is getting extremely hard to appropriately survey the harm to the vegetation, even with satellite imagery. An answer for this issue lies in distinguishing the measure of vegetation of a district utilizing satellite images which are then used to ascertain the green space of the land. This measurement can then measure up to the past green space of the area to survey the harm. The system being proposed takes satellite images of a region. Using computer vision, it calculates the percentage of vegetation or forest cover on land using color recognition in HSV color space. The proposed approach measures the green area by creating a mask of the satellite image using the lower and upper bounds of the HSV color space of the green color. Then, the procedure is followed by applying a morphological transformation of dilation on the image followed by bitwise AND operation between the original image and the mask to specifically detect only the green and shades of green and discard other colors. Using this system, changes in the vegetation area over a period can be estimated.\n' +
                '\n',
            publishedYear: '2022',
            link: 'https://link.springer.com/chapter/10.1007/978-981-16-8225-4_21'
        },{
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
