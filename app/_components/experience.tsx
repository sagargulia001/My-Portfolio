import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BriefcaseIcon } from 'lucide-react'
import { experience } from '@/data'

export default function Experience() {
    return (
        <div className="space-y-4 sm:space-y-6">
            <div>
                <h2 className="text-xl sm:text-2xl font-medium mb-1 sm:mb-2">Work Experience</h2>
                <p className="text-muted-foreground text-xs sm:text-sm">My professional journey and achievements</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
                {experience.length === 0 ? (
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center py-10 sm:py-16 text-center gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 rounded-full bg-muted">
                                <BriefcaseIcon className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-medium text-base sm:text-lg">The Journey is Just Beginning</h3>
                                <p className="text-muted-foreground text-xs sm:text-sm max-w-sm">
                                    Currently focused on building strong foundations and exciting projects.
                                    Professional experience coming soon — watch this space.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    experience.map((job, index) => (
                        <Card key={index}>
                            {/* <CardContent className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                                <div className="flex justify-between flex-col sm:flex-row items-start gap-1">
                                    <div>
                                        <h3 className="text-base sm:text-lg font-medium">{job.title}</h3>
                                        <p className="text-base sm:text-lg font-medium text-primary">{job.company}</p>
                                    </div>
                                    <div className="sm:text-right text-xs sm:text-sm text-muted-foreground">
                                        <div>{job.period}</div>
                                        <div>{job.location}</div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm">{job.description}</p>
                                <div>
                                    <h4 className="font-medium mb-2 text-sm sm:text-base">Key Achievements:</h4>
                                    <ul className="space-y-1">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start space-x-2">
                                                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary mt-0.5 shrink-0" />
                                                <span className="text-xs sm:text-sm text-muted-foreground">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent> */}
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}