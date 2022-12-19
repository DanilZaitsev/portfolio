const data = [
    {
        _id: '1aaa',
        title: "Profile",
        themes: [
            {
                highlight: "About Me",
                icon: "img/introduction.png",
                details_title: "Introduction",
                details: "Hi I'm Danil.<br><p>My roots are from Ukraine, but most time of my life I lived in Israel. Now I'm living in " +
                    "Vancouver with my wife and 12 years old son.</p>" +
                    "I'm a Senior Software Developer at IronSource. The powerful company, " +
                    "which bought SpotAd startup in 2022, where I worked as RTB(Real-Time Bidding) team leader and " +
                    "senior software developer for 8 years. Under my responsibility is a complex and scalable " +
                    "architecture consisting of many micro services and servers, designed and created by me from the scratch."
            },
            {
                highlight: "Languages",
                icon: "img/lenguages.png",
                details_title: "Languages",
                details: "English: Advanced (IELTS 5.5)<br>Russian: Native<br>Hebrew: Native<br>Ukrainian: Fluent"
            },
            {
                highlight: "Hobbies",
                icon: "img/hobbies.png",
                details_title: "Hobbies",
                details: "Working out: I work out several times a week - strength training and running<br>" +
                    "Traveling: I have been to many places in Europe and US<br>" +
                    "Fishing: especially in childhood, but sometimes even now<br>" +
                    "Beginner in skiing: I love that great sport combined with nature"
            },
            {
                highlight: "Contacts",
                icon: "img/contacts.png",
                details_title: "Contacts",
                details: "Email: zdanil86@gmail.com<br>LinkedIn: " +
                    "<a style='color: #0a417c;' href='https://www.linkedin.com/in/danil-zaitsev-116a2757/' target='_blank'>Danil Zaitsev</a>"
            }
        ],
        imgUrl: 'img/about_me.jpg',
        imgUrlT: 'img/projects_t.png',
        order: "icon-left",
        clicked: true,
    },
    {
        _id: '2aaa',
        title: 'Work Experience',
        themes: [
            {
                highlight: "2022-now: RTB Backend Developer at Iron Source",
                icon: "img/is.jfif",
                details_title: "RTB Backend Developer at Iron Source",
                details: "• Continued SpotAd duties, see below.<br><br>"
            },
            {
                highlight: "2014-2022: RTB Team Lead and Backend Developer at Spotad",
                icon: "img/spotad.jfif",
                details_title: "RTB Team Lead and Backend Developer at Spotad - 8 years",
                details: "• Under my responsibility is a complex and scalable architecture consisting of many micro " +
                    "services and servers, designed and created by me from the scratch.<br>" +
                    "• The system is able to work under high pressure and process billions of requests.<br>" +
                    "• During last year a lot of work with K8S integration, usage of: Dockers, EKS, ECS, AWS, Grafana.<br>" +
                    "• Main projects environment: Linux, C++, Nodejs, Java Script, Python, AWS, MongoDB, Redis, Graphite.<br>" +
                    "• Also have experience at PHP, AngularJs, JQuery, Html, Css, Ajax."
            },
            {
                highlight: "2014-2014: Full Stack Developer at BUY2",
                icon: "img/buy2.jfif",
                details_title: "Full Stack Developer at Netex - half year",
                details: "• .Net development environments(Asp.Net, MVC), writing Web Services.<br>" +
                    "• Development in C#, Java Script, JQuery, Html, Css, Ajax.<br>" +
                    "• MSSql data base."
            },
            {
                highlight: "2012-2014: Full Stack Developer at Production Map",
                icon: "img/empty.png",
                details_title: "Full Stack Developer at Production Map - 1.5 years",
                details: "Developer in Production automation services in complex environments.<br>" +
                    "• DotNet development environments(Asp.Net, MVC), writing Web Services.<br>" +
                    "• Development in C#, Sencha, Java Script, JQuery, Html, Css, Ajax.<br>" +
                    "• Working with data bases MSSql and MySQL."
            },
            {
                highlight: "2011-2012: Frontend Developer at DolphinSoft",
                icon: "img/DS.jfif",
                details_title: "Frontend Developer at DolphinSoft - year",
                details: "Development in Asp.Net, C#, Java Script, JQuery, Html, Css, Ajax.<br><br>"
            },
            {
                highlight: "2011-2012: Real-Time Speaker Recognition - first degree project",
                icon: "img/motorola.jfif",
                details_title: "Real-Time Speaker Recognition - year",
                details: "Outstanding Final Project<br> " +
                    "• Development of a real-time speaker recognition<br>" +
                    "• The project included the development and implementation of algorithms in Matlab.<br> " +
                    "• Implementation in C language on DSP of TI, using the principles of sound processing.<br> " +
                    "• Working with R.T EMBEDDED."
            }
        ],
        imgUrl: 'img/me_working.jpg',
        imgUrlT: 'img/me_working_t.png',
        order: "icon-right",

    },
    {
        _id: '3aaa',
        title: "Education",
        themes: [
            {
                highlight: "Amazon EKS Starter",
                icon: "img/k8s.png",
                details_title: "Amazon EKS Starter: Docker on AWS EKS with Kubernetes",
                details: "Deploy Docker Containers on Kubernetes on AWS EKS & Fargate: Kubernetes Stateful & Stateless apps using ELB, EBS & EFS."
            },
            {
                highlight: "Docker and Kubernetes",
                icon: "img/docker.png",
                details_title: "Docker and Kubernetes: The Complete Guide",
                details: "Build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows."
            },
            {
                highlight: "Node.js Developer Course",
                icon: "img/node.png",
                details_title: "The Complete Node.js Developer Course (3rd Edition)",
                details: "Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!"
            },
            {
                highlight: "Full Stack Web Development Course",
                icon: "img/fullstack.png",
                details_title: "Full Stack Web Development: HTML, CSS, React & Node",
                details: "Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node."
            },
            {
                highlight: "2008-2012: Ruppin Academic Center, Israel",
                icon: "img/ruppin.jfif",
                details_title: "Ruppin Academic Center, Israel",
                details: "• Graduated Bachelor of Science (B.Sc.) Computer Engineering. " +
                    "An average score of 83 which is considered very high for this faculty.<br>" +
                    "• Completed many projects as part of my studies, see the next Projects card."
            },
            {
                highlight: "1999-2006: Netanya Sharet School, Israel",
                icon: "img/school.jfif",
                details_title: "Netanya Sharet School, Israel",
                details: "An average score of 95."
            }
        ],
        imgUrl: 'img/ruppin.jpg',
        imgUrlT: 'img/ruppin_t.png',
        order: "icon-left"
    },
    {
        _id: '4aaa',
        title: "Projects",
        themes: [
            {
                highlight: "Final Project: Building a speaker recognition - 2012",
                icon: "img/ruppin.jfif",
                details_title: "Speaker recognition - 2012",
                details: "Final Project: Building a speaker recognition system in real-time (DSP processor) with MOTOROLA SOLUTIONS company."
            },
            {
                highlight: "Computer graphics - 2011",
                icon: "img/ruppin.jfif",
                details_title: "Three-dimensional game - 2011",
                details: "Computer graphics: a three-dimensional game with lighting, shadow, reflection, depending on " +
                    "light source (using C#, OPENGL engine, Windows forms).<br>" +
                    "<video class=\"videoInsert\" controls autoplay><source src=\"video/game.mp4\" type=\"video/mp4\"></source></video>"
            },
            {
                highlight: "Creating a processor in Xilinx program - 2011",
                icon: "img/ruppin.jfif",
                details_title: "VHDL Lab - 2011",
                details: "VHDL Lab: Creating a processor in Xilinx program, Synthesis and burning on FPGA."
            },
            {
                highlight: "Image/Signal processing - 2010",
                icon: "img/ruppin.jfif",
                details_title: "Image reconstruction - 2010",
                details: "Image/Signal processing: Image reconstruction rotary motions blur (Matlab)."
            },
            {
                highlight: "Real-time operating systems - 2010",
                icon: "img/ruppin.jfif",
                details_title: "Building an operating system using FreeRTOS - 2010",
                details: "Real-time operating systems: building an operating system using FreeRTOS, " +
                    "on MSP430, supports a number of processes running in parallel."
            },
            {
                highlight: "Library web site - 2009",
                icon: "img/ruppin.jfif",
                details_title: "Library - 2009",
                details: "Software Engineering: Building a library web site on (C#) .Net."
            }
        ],
        imgUrl: 'img/danil.jfif',
        imgUrlT: 'img/danil_t.png',
        order: "icon-right",
    }
];

export default data;