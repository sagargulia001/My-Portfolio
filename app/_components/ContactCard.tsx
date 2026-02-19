import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const contactItems = [
    {
        icon: <Mail className="size-5 sm:size-7 text-muted-foreground" />,
        title: "Email",
        value: "sagargulia1689@gmail.com",
        link: "mailto:sagargulia1689@gmail.com",
    },
    {
        icon: <Linkedin className="size-5 sm:size-7 text-muted-foreground" />,
        title: "LinkedIn",
        value: "@sagargulia001",
        link: "https://linkedin.com/in/sagargulia001",
    },
    {
        icon: <Github className="size-5 sm:size-7 text-muted-foreground" />,
        title: "GitHub",
        value: "@sagargulia001",
        link: "https://github.com/sagargulia001",
    },
];

export default function ContactCard() {
    return (
        <div className="grid grid-cols-1 gap-2 sm:gap-4 mb-4 sm:mb-8">
            {contactItems.map((item, index) => (
                <Link href={item.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} links`}>
                    <Card className="w-full md:max-w-xs hover:bg-muted/60 transition-all duration-300">
                        <CardContent className="flex items-center gap-2 sm:gap-3 p-2">
                            <div className="h-10 w-10 sm:h-16 sm:w-16 rounded-md border border-border bg-background flex items-center justify-center shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">{item.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
}