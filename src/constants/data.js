import {
    // expeditionapi,
    findmovies,
    nicework,
    wastepoint,
    html,
    css,
    bootstrap,
    github,
    gitlab,
    javascript,
    laravel,
    mongodb,
    mysql,
    nodejs,
    php,
    python,
    reactjs,
    tailwind,
    envelope,
    githubImage,
    instagram,
    linkedin,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        link: "#home",
        title: "Home",
    },
    {
        id: "projects",
        link: "#project",
        title: "Project",
    },
    {
        id: "contacts",
        link: "#contact",
        title: "Contact",
    },
];

export const description =
    "I’m a fresh graduate of Information System with passion for develop application from requirement analysis, design, implementation, testing and evaluation. Able to collaborate or work together in a team. Have a passion for learning to keep up with current developments in information technology.";

export const techStacks = [
    {
        id: "html",
        icon: html,
    },
    {
        id: "css",
        icon: css,
    },
    {
        id: "bootstrap",
        icon: bootstrap,
    },
    {
        id: "tailwind",
        icon: tailwind,
    },
    {
        id: "javascript",
        icon: javascript,
    },
    {
        id: "nodejs",
        icon: nodejs,
    },
    {
        id: "reactjs",
        icon: reactjs,
    },
    {
        id: "php",
        icon: php,
    },
    {
        id: "laravel",
        icon: laravel,
    },
    {
        id: "python",
        icon: python,
    },
    {
        id: "mongodb",
        icon: mongodb,
    },
    {
        id: "mysql",
        icon: mysql,
    },
    {
        id: "gitlab",
        icon: gitlab,
    },
    {
        id: "github",
        icon: github,
    },
];

export const projects = [
    {
        id: 1,
        img: nicework,
        name: "Nicework",
        content:
            "A simple web user interface that describes the profile of a working space provider company. This website is just a landing page with full responsiveness. The case study raised is a fake case used as an exercise to develop a website. The tools used in this project are <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.",
        link: "https://github.com/muhammadramadhann/nicework",
    },
    {
        id: 2,
        img: findmovies,
        name: "Find Movies App",
        content:
            "A web application for searching movies by title and get information about movie details obtained from the OMDb API, which is an opensource API that provides RESTful web services to get movie information, starting from poster images, ratings, cast, and more. The tools used in this project are <strong>React</strong> with <strong>Tailwind</strong>.",
        link: "https://github.com/muhammadramadhann/find-movies",
    },
    // {
    //     id: 3,
    //     img: expeditionapi,
    //     name: "Expedition API",
    //     content:
    //         "API that provides a RESTful web service to get information about expeditions or shipping data from a fake shipping company called Express Ways. The operations used in this API start from processing CRUD and searching data using a receipt number or tracking number. The tools used in this project are <strong>Express</strong>, with <strong>MongoDB</strong> database.",
    //     link: "https://github.com/muhammadramadhann/express-expedition-api"
    // },
    {
        id: 3,
        img: wastepoint,
        name: "Waste Point",
        content:
            "A web application with the main feature of exchanging waste with accumulated points. Points earned can be exchanged for various groceries packages. This application also has user authentication and an admin page for content and data management. The tools used in this project are <strong>Bootstrap</strong>, <strong>JavaScript</strong> and <strong>Laravel</strong> with <strong>MySQL</strong> database.",
        link: "https://github.com/muhammadramadhann/waste-point",
    },
];

export const contacts = [
    {
        id: "email",
        name: "Email",
        icon: envelope,
        username: "ramadhannkurniawan@gmail.com",
        link: "mailto:ramadhannkurniawan@gmail.com",
    },
    {
        id: "github",
        name: "GitHub",
        icon: githubImage,
        username: "muhammadramadhann",
        link: "https://github.com/muhammadramadhann?tab=repositories",
    },
    {
        id: "linkedin",
        icon: linkedin,
        name: "LinkedIn",
        username: "muhammadramadhankurniawan",
        link: "https://www.linkedin.com/in/muhammadramadhankurniawan/",
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: instagram,
        username: "ramadhanman_",
        link: "https://www.instagram.com/ramadhanman_/",
    },
];
