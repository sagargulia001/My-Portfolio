import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Download, MapPin } from 'lucide-react'
import { skills } from '@/data'
import Link from 'next/link'
import Hero from './Hero'
import { TABS } from '../(root)/page'
import IconCloud from '@/components/IconCloud'
import GitHubSnake from '@/components/GitHubSnake'

const techIconSlugs = [
    "typescript", "javascript", "react", "nextdotjs", "nodedotjs",
    "python", "postgresql", "mongodb", "cplusplus", "tailwindcss",
    "git", "github", "linux", "visualstudiocode",
]

interface ProfileProps {
    setActiveTab: (tab: typeof TABS[number]) => void
}

export default function Profile({ setActiveTab }: ProfileProps) {
    return (
        <>
            <Hero setActiveTab={setActiveTab} />

            <div className="space-y-4 sm:space-y-8">
                {/* Bio Section */}
                <Card>
                    <CardHeader className="pb-2 sm:pb-4">
                        <CardTitle className="text-base sm:text-xl">Bio</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0!">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
                            {/* Left: Bio text */}
                            <div className="space-y-3 sm:space-y-4">
                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                    I'm an aspiring Software Engineer focused on building modern, type-safe web applications using Next.js, React, and TypeScript. With a background in competitive programming and a 2-star rating on CodeChef, I'm driven by the challenge of solving complex logic puzzles and turning them into clean, functional code.
                                </p>
                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                    When I'm away from the terminal, I'm usually catching up on sleep, gaming, or listening to music. I enjoy playing football, a game of chess occasionally, and hitting the gym when the mood strikes—otherwise, you'll find me staying low-key and recharging for the next big build.
                                </p>
                                <div className="flex gap-2 sm:gap-0 sm:items-center flex-col sm:flex-row sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                                        Haryana, India
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                                        Open to work
                                    </div>
                                </div>
                                <div>
                                    <Link
                                        href="/Sagar_Resume.pdf"
                                        target='_blank'
                                        className="inline-flex items-center text-xs sm:text-sm text-primary hover:underline"
                                        aria-label="Download Resume"
                                        download="Sagar_Resume.pdf"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                                        Download Resume
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Icon Cloud */}
                            <div className="flex items-center justify-center w-full">
                                <IconCloud iconSlugs={techIconSlugs} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* GitHub Snake */}
                <Card className="overflow-hidden">
                    <CardContent className="p-2 sm:p-4">
                        <GitHubSnake />
                    </CardContent>
                </Card>

                {/* Skills Section */}
                <Card>
                    <CardHeader className="pb-2 sm:pb-4">
                        <CardTitle className="text-base sm:text-xl">Skills & Technologies</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Technologies I work with regularly</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                            {skills.map((skill) => (
                                <div key={skill.name} className="space-y-1 sm:space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <skill.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                                            <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                                        <div
                                            className="h-1.5 sm:h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${skill.level}%`, backgroundColor: 'var(--skill-bar)' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}