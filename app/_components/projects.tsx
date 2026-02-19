"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
    const { theme } = useTheme()

    return (
        <>
            <div className="space-y-4 sm:space-y-6">
                <div>
                    <h2 className="text-xl sm:text-2xl font-medium mb-1 sm:mb-2">Featured Projects</h2>
                    <p className="text-muted-foreground text-xs sm:text-sm">Some of my recent work and side projects</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden hover:bg-muted/60 transition-all duration-300 min-h-min flex flex-col sm:flex-row group p-1.5 sm:p-2"
                            aria-label={`Project: ${project.title}, Description: ${project.description}, Technologies: ${project.tech.join(', ')}`}
                        >
                            {/* Mobile landscape image */}
                            <div className="sm:hidden w-full h-28 bg-muted overflow-hidden">
                                <img
                                    src={theme === 'dark' ? (project.image_dark || project.image) : project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>

                            {/* Desktop portrait image */}
                            <div className="hidden sm:block sm:h-full sm:min-w-40 sm:max-w-min bg-muted rounded-sm overflow-hidden">
                                <img
                                    src={theme === 'dark' ? (project.image_portrait_dark || project.image_portrait) : project.image_portrait}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <CardHeader className="space-y-0 px-2 sm:px-4 py-1.5 sm:py-2">
                                    <CardTitle className="flex text-sm sm:text-base font-medium items-center justify-between">
                                        {project.title}
                                        <div className="flex group-hover:opacity-100 sm:opacity-0 transition duration-300">
                                            <Button variant="ghost" className="rounded-full h-7 w-7 sm:h-9 sm:w-9" size="icon" asChild>
                                                <Link href={project.github} target="_blank" rel="noopener noreferrer"
                                                    aria-label={`View project: ${project.title} on GitHub`}>
                                                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" className="rounded-full h-7 w-7 sm:h-9 sm:w-9" size="icon" asChild>
                                                <Link href={project.live} target="_blank" rel="noopener noreferrer"
                                                    aria-label={`Visit project: ${project.title} live`}>
                                                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3 sm:line-clamp-4 text-xs sm:text-sm">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="px-2 sm:px-4 py-1.5 sm:py-2">
                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="text-[9px] sm:text-[10px] text-muted-foreground hover:text-foreground font-medium px-1.5 py-0"
                                                aria-label={`Technology used: ${tech}`}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}