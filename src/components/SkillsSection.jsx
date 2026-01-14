import { useState } from "react";
import { cn } from "@/lib/utils";

const skills =[
    //programming languages
    { name: "Python", level: 85, category: ["programming", "Database", "IoT/Embedded"] },
    { name: "Java", level: 80, category: ["programming"] },
    { name: "C", level: 75, category: ["programming", "IoT/Embedded"] },
    { name: "C++", level: 70, category: ["programming"] },
    { name: "C#", level: 70, category: ["programming"] },
    { name: "JavaScript", level: 75, category: ["programming", "web/App"] },
    { name: "Kotlin", level: 70, category: ["programming", "web/App"] },
    { name: "SQL", level: 75, category: ["programming", "Database"] },
    //web
    { name: "HTML/CSS", level: 90, category: ["web/App"] },
    { name: "React", level: 85, category: ["web/App"] },
    { name: "REST APIs", level: 70, category: ["web/App"] },
    { name: "Android Studio", level: 75, category: ["web/App"] },
    //Database
    { name: "PostgreSQL", level: 80, category: ["Database"] },
    { name: "MongoDB", level: 70, category: ["Database"] },
    { name: "NumPy", level: 65, category: ["Database"] },
    { name: "Matplotlib", level: 65, category: ["Database"] },
    { name: "Pandas", level: 65, category: ["Database"] },
    //Automation & DevOps
    { name: "UiPath (RPA)", level: 80, category: ["Automation & DevOps"] },
    { name: "Excel VBA", level: 85, category: ["Automation & DevOps"] },
    { name: "Git/GitHub", level: 90, category: ["Automation & DevOps", "web/App", "IoT/Embedded"] },
    { name: "Docker", level: 65, category: ["Automation & DevOps"] },
    { name: "Kubernetes", level: 65, category: ["Automation & DevOps"] },
    { name: "AWS", level: 65, category: ["Automation & DevOps"] },
    { name: "Linux", level: 70, category: ["Automation & DevOps"] },
    //IoT/Embedded
    { name: "Raspberry Pi", level: 75, category: ["IoT/Embedded"] },
    { name: "Arduino", level: 70, category: ["IoT/Embedded"] },
    { name: "MQTT", level: 70, category: ["IoT/Embedded"] },
    { name: "ESP32s3", level: 65, category: ["IoT/Embedded"] },
    { name: "PCB soldering & electronic components ", level: 75, category: ["IoT/Embedded"] },
];

const categories =["all", "programming", "web/App", "Database", "Automation & DevOps", "IoT/Embedded"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category.includes(activeCategory));
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-5 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}