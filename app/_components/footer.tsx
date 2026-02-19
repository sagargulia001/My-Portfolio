import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border mt-8">
            <div className="container mx-auto px-4 py-4 lg:px-20 xl:px-32">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-muted-foreground text-[11px] sm:text-sm">© 2026 Sagar Gulia.</p>
                    <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-9 sm:w-9" asChild>
                            <a href="https://github.com/sagargulia001" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-9 sm:w-9" asChild>
                            <a href="https://linkedin.com/in/sagargulia001/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-9 sm:w-9" asChild>
                            <a href="mailto:sagargulia1689@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email to Sagar">
                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}