import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    //uni
    {
        id: 1,
        title: "GroveNet",
        description: "A multi-protocol, fault-tolerant, and low-power sensor network for autonomous greenhouse management using the LilyGo T3S3 dev board. The primary objective is to enable continuous monitoring and maintenance of optimal greenhouse conditions with minimum manual intervention.",
        image: "/projects/embed.png",
        tags: ["C", "IoT"],
        demoUrl: "/Portfolio/projects/GroveNetReport.pdf",
        githubUrl: "https://github.com/c0dn/grovenet"
    },
    {
        id: 2,
        title: "MediDrop",
        description: "A simple IoT project that helps save energey by having the lights and ventilation fan of a room on only when a person is detected. It also dispenses medication to patients with a simple mobile app according to their needs marked by a nurse or doctor.",
        image: "/projects/compnet.jpg",
        tags: ["Python", "RaspberryPi", "IoT"],
        demoUrl: "https://youtu.be/tvQrEuqzRVs",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "TicTacToe",
        description: "A tic tac toe game featuring multiple play modes, including classic single-player, local multiplayer, and a single-player mode against a machine learning opponent. The game includes a persistent score tracker to record wins and losses, and the ML opponent is trained on a fixed dataset to provide increasingly challenging and human-like moves while keeping gameplay predictable and fair.",
        image: "/projects/tictactoe.png",
        tags: ["C", "AI/ML"],
        demoUrl: "https://youtu.be/x_T9Nw-mYz4",
        githubUrl: "#"
    },
    //tp (RPA, Bus App, carrental?)
    {
        id: 4,
        title: "Bus Timetable App",
        description: "A bus timetable application that provides users with real-time information on bus schedules and arrival times. The app aims to enhance the commuting experience by offering accurate and up-to-date transit information.",
        image: "/projects/busapp.png",
        tags: ["Android Studios", "SQL", "PHP"],
        demoUrl: "https://youtu.be/egDUeyIbyEU",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Carousel Book Display Automation",
        description: "Final year project developed for Temasek Polytechnic's library staff to automate their carousel book display process. The system scrapes book details from the library website, identifies books with available cover images, exports the data to an Excel spreadsheet, and sends an automated email notification upon completion.",
        image: "/projects/rpa.png",
        tags: ["UiPath Studio", "Web Scraping", "Email Automation (SMTP)"],
        demoUrl: "https://youtu.be/7d-lXxA4yvI",
        githubUrl: "#"
    },
    //ite (car park, hospital,)
    {
        id: 6,
        title: "Smart Car Parking System",
        description: "A smart car park system that utilizes IoT technology to monitor and manage parking spaces efficiently. The system provides real-time updates on available parking spots, enabling users to find parking quickly and reducing congestion.",
        image: "/projects/carpark.png",
        tags: ["Python", "RaspberryPi", "IoT"],
        demoUrl: "https://www.youtube.com/watch?v=P8aI3vIsd9g",
        githubUrl: "#"
    },
    {
        id: 7,
        title: "Hospital Automation",
        description: "A smart hospital system that automates various tasks such as patient monitoring, medication dispensing, and environmental control using IoT devices. The system aims to improve patient care and operational efficiency within the hospital setting.",
        image: "/projects/hospital.png",
        tags: ["Python", "RaspberryPi", "C++", "Arduino",  "IoT"],
        demoUrl: "https://www.youtube.com/watch?app=desktop&v=XvT4zGkShr4",
        githubUrl: "#"
    },
    //self (tapestry bus)
    {
        id: 8,
        title: "TapestryBus",
        description: "Similar to the Bus Timetable App, but an improved version with more features and better UI/UX design. It is available online for free for the residents of the condo to easlily check the right timetables for the shuttle bus.",
        image: "/projects/tapestrybus.png",
        tags: ["React.js", "HTML/CSS", "APIs"],
        demoUrl: "https://memelord26.github.io/TapestryBus/",
        githubUrl: "https://github.com/memelord26/TapestryBus"
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project are unique and stretches into different fields.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) =>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/> {/*Demo url*/}
                                        </a>
                                        {/*
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/> github url
                                        </a>
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/memelord26">
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}