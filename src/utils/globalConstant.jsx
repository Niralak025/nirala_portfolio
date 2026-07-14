export const appColor = {
    PRIMARY_COLOR: '#3e58a3',
    SECONDARY_COLOR: '#cee4ff'
}

export const educationsContent = {
    heading: 'Educations',
    courseName: 'Bachlore in Technology(B.Tech)',
    collegeName: 'Technocrats intitute of Technology Bhopal (M.P)',
    stream: 'Electronics and communication Engineering'
}

export const educationCardData = [
    {
        imageUrl: require('../assets/images/btech_college.jpg'),
        title: 'Bachlore in technology',
        subTitle: 'Electronics and communication engineering',
        description: 'Technocrats institute of technology, Bhopal(M.P)'
    },
    {
        imageUrl: require('../assets/images/intermediate_school_2.jpg'),
        title: 'Intermediate',
        subTitle: 'Intermediate in Science',
        description: 'Kunwar Singh College Darbhanga (Bihar)'
    },
    {
        imageUrl: require('../assets/images/school_image.jpg'),
        title: 'Matriculation',
        subTitle: '',
        description: 'CKN High School Singhwara Darbhanga (Bihar)'
    },
]

export const introductionContent = {
    roles: [
        "Software Engineer",
        "React Native Developer",
        "Mobile Application Developer",
        "Web Developer",
    ],
    greeting: "Hi,",
    authorName: "I'm Nirala Kumar",
    description: "A passionate Software Engineer specializing in crafting high-performance, user-centric mobile and web applications. Dedicated to translating complex requirements into seamless, pixel-perfect, and scalable digital solutions.",
    resumeBtnLabel: "Resume",
    hireMeBtnLabel: "Hire me",
    profileImageAlt: "Nirala Kumar"
}


export const skillsContent = {
    heading: "Skills",
    skillsData: [
        {
            name: 'React Native',
            logo: 'https://eshan-nayanapriya.github.io/My_Portfolio/assets/icon_1-CK8t-rk6.png',
        },
        {
            name: 'React Redux',
            logo: 'https://files.gitbook.com/v0/b/gitbook-legacy-files/o/spaces%2F-L5fXeqUzwsNMXiitz-3%2Favatar.png?alt=media',
        },
        {
            name: 'JavaScript',
            logo: 'https://pngset.com/images/javascript-logo-number-symbol-text-label-transparent-png-560960.png',
        },
        {
            name: 'Java',
            logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png',
        },
        {
            name: 'GitHub',
            logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        },
        {
            name: 'HTML',
            logo: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-html-file-document-icon-png-image_4187497.jpg',
        },
        {
            name: 'CSS',
            logo: 'https://logospng.org/download/css-3/logo-css-3-2048.png',
        },
    ]
}

export const projectsContent = {
    heading: "Projects and Experience",
    projectsData: [
        { name: 'WeChat', className: 'inner-container' },
        { name: 'Advertisement Management', className: 'inner-container-2' },
        { name: 'FlatFund', className: 'inner-container-3', link: "https://play.google.com/store/apps/details?id=com.flatfund" },
    ]
}

export const experienceData = [
    {
        role: "Software Engineer",
        company: "Hidden Brains Infotech",
        duration: "June 2023 - Present",
        location: "Ahmedabad (Gujarat)",
        description: [
            "Developed and deployed high-performance cross-platform mobile applications using React Native.",
            "Integrated Redux Toolkit for state management and optimized application load times by 25%.",
            "Collaborated with UI/UX designers to translate Figma designs into pixel-perfect interactive interfaces.",
            "Handled deployment and release management on Google Play Store and Apple App Store."
        ],
        skills: ["React Native", "React Redux", "JavaScript", "GitHub"]
    }
];


export const connectContent = {
    title: "Let's Talk!",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    messagePlaceholder: "Message...",
    sendButtonText: "Send",
    emailjsConfig: {
        serviceId: 'service_n56zm91',
        templateId: 'template_j7qu8nq',
        recipientEmail: 'nirala1rampura@gmail.com',
        publicKey: 'NFOqHQfYuiXxV_GEW'
    }
}

export const footerContent = {
    authorName: "Nirala Kumar",
    rightsReserved: "All rights reserved."
}

export const sideMenuContent = {
    brandName: "Nirala Kumar",
    menuItems: [
        { id: 1, name: 'Introduction' },
        { id: 2, name: 'Education' },
        { id: 3, name: 'Skills' },
        { id: 4, name: 'Projects and Experience' }
    ]
}
