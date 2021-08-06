import {AssessmentOutlined, Facebook, GitHub, Instagram, LinkedIn, Telegram, WebOutlined} from "@material-ui/icons";
import {AiOutlineDeliveredProcedure} from "react-icons/all";
import screenImg from '../images/Screenshot1.png'
// eslint-disable-next-line
import screenImg1 from '../images/Screenshot1.1.png'
import screenImg2 from '../images/Screenshot2.png'
import screenImg3 from '../images/Screenshot3.png'
// eslint-disable-next-line
import screenImg4 from '../images/Screenshot4.png'

// eslint-disable-next-line
export default {
    name:'Lazizbek',
    title: 'Web fullstack developer',

    birthday: '2004, Nov, 06',
    number: '+998 99 037 39 14',
    email: 'dev.iProger@gmail.com',
    address: 'Andijon, Baliqchi',

    socials: {
        facebook: {
            url: 'https://facebook.com/',
            title: 'Facebook',
            icon: <Facebook/>
        },
        instagram: {
            url: 'https://instagram.com/mern.me/',
            title: 'Instagram',
            icon: <Instagram/>
        },
        telegram: {
            url: 'https://t.me/devMernStack/',
            title: 'Telegram',
            icon: <Telegram/>
        },
        linkedIn: {
            url: 'https://linkedin.com/',
            icon: <LinkedIn/>,
            title: 'LinkedIn'},
        gitHub: {
            url: 'https://github.com/lazizbekdev',
            icon: <GitHub/>,
            title: 'GitHub'}
    },

    about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.\n" +
        "\n" +
        "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
    experience: [
        {
            title: 'Front-end web developer',
            date: '2019-2020',
            description: 'Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.'
        },
        {
            title: 'Fullstack web developer',
            date: '2020-2021',
            description: 'Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.'
        },
        {
            title: 'Front-end at saleX',
            date: 'NOW',
            description: 'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.'
        }
    ],
    educate: [
        {
            title: 'Web development Course',
            date: '2019-2020',
            description: 'Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.'
        },
        {
            title: 'Fullstack developing',
            date: '2020-2021',
            description: 'Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.'
        },
        {
            title: 'MERN at online',
            date: '2021',
            description: 'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.'
        }
    ],
    services : [
        {
            title: 'Web development',
            description: `I have been a baddies for ${new Date().getFullYear() - 2019} years`,
            icon: <WebOutlined/>
        },
        {
            title: 'Branding Identity',
            description: `We will make you a brand that is catchy and leaves a trace.`,
            icon: <AssessmentOutlined/>
        },
        {
            title: 'Fast Delivery',
            description: `I deliver your business as fast as possible`,
            icon: <AiOutlineDeliveredProcedure/>
        },
    ],
    skills : [
        {
            title: "Front-end",
            description: [
                'HTML',
                'CSS',
                'JS',
                'React',
                'Bootstrap',
                'Material-ui'
            ]
        },
        {
            title: "Back-end",
            description: [
                'Node Js',
                'Express Js',
                'PHP'
            ]
        },
        {
            title: "Data base",
            description: [
                'MongoDB',
                'MySQL',
                'FireBase'
            ]
        },
        {
            title: "Course control",
            description: [
                'Git',
                'GitHub',
                'GitLab'
            ]
        },
    ],

    portfolio: [
        {
            tag: 'Mern',
            screenImg: screenImg3,
            title: 'E-Commerce website',
            description: 'this web site my first real project, it\'s very awesome for me.' +
                ' I was used React, Node, express and mongoDb technologies',
            url: 'https://my-own-shopper.herokuapp.com/'
        },
        {
            tag: 'HTML, CSS',
            screenImg: screenImg,
            title: 'Cakes UI',
            description: 'this web site my first real project, it\'s very awesome for me.' +
                ' I was used React, Node, express and mongoDb technologies',
            url: 'https://choco-lt.netlify.app/'
        },
        {
            tag: 'React',
            screenImg: screenImg2,
            title: 'Weather App',
            description: 'this web site my first real project, it\'s very awesome for me.' +
                ' I was used React, Node, express and mongoDb technologies',
            url: 'https://weather-uz.netlify.app'
        },
        {
            tag: 'Coming soon...',
            screenImg: screenImg4,
            title: 'Adolat-Media.uz',
            description: 'this web site my first real project, it\'s very awesome for me.' +
                ' I was used React, but not yet. i\'m building now',
            url: ''
        },
        {
            tag: 'Coming soon...',
            screenImg: 'no image yet',
            title: 'Namoz Vatqlari',
            description: 'this web site my first real project, it\'s very awesome for me.' +
                ' I was used React, but not yet. i\'m building now',
            url: ''
        },
    ]
}