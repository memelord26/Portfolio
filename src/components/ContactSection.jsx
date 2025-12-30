import { Gamepad2, Linkedin, Mail, MapPin, MessageCircleMore, Phone, SendHorizonal, SendIcon } from "lucide-react";
import {cn} from "@/lib/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";


export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] =useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast.success("Your message have been sent!");
            setIsSubmitting(false);
        }, 2000);
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary"> Touch</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discuss opportunities. Feel free to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary"/></div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a href="mailto:phoebelau2603@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        phoebelau2603@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary"/></div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a href="tel:+6592336680" className="text-muted-foreground hover:text-primary transition-colors">
                                        +(65) 92336680
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary"/></div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Tampines, Singapore
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/phoebelau-cs" target="_blank" className="hover:text-primary transition-colors">
                                    <Linkedin />
                                </a>
                                <a href="https://wa.me/+6592336680" target="_blank" className="hover:text-primary transition-colors">
                                    <MessageCircleMore />
                                </a>
                                <a href="https://t.me/memelord26" target="_blank" className="hover:text-primary transition-colors">
                                    <SendIcon />
                                </a>
                                <a href="https://discord.com/users/760028594122260501" target="_blank" className="hover:text-primary transition-colors">
                                    <Gamepad2 />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your name..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="john@gmail.com..."
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message </label>
                                <textarea  
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I would like to connect..."
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <SendHorizonal size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </section>
    );
}