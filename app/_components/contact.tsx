"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import mailFormSchema from "@/lib/validation/mail-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send } from "lucide-react"
import { Spinner } from 'react-hot-spinner'
import { useForm } from "react-hook-form"
import { MailFormData } from "@/types/mail-form"
import { sendMail } from "@/lib/mails/send-mail"
import { toast } from "sonner"
import ContactCard from "./ContactCard"

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<MailFormData>({
        resolver: zodResolver(mailFormSchema)
    })

    const onSubmit = async (formData: MailFormData) => {
        const res = await sendMail(formData)
        if (res.success) {
            toast.success("Message sent successfully!")
            reset()
        } else {
            toast.error(`Error: ${res.error}`)
        }
    }

    return (
        <div className="space-y-4 sm:space-y-6 mt-3 sm:mt-5 max-w-5xl gap-6 sm:gap-10 mx-auto grid grid-cols-1 md:grid-cols-[0.75fr_1fr]">
            <div className="flex flex-col gap-4 sm:gap-10">
                <div className="text-left">
                    <h2 className="text-xl sm:text-3xl font-medium mb-1 sm:mb-2">Get In Touch</h2>
                    <p className="text-muted-foreground text-sm">I'm always interested in new opportunities and collaborations</p>
                </div>
                <ContactCard />
            </div>

            {isSubmitting ? (
                <Card>
                    <CardContent className="flex min-h-60 sm:min-h-80 flex-col items-center justify-center h-full">
                        <Spinner size={25} />
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader className="pb-3 sm:pb-6">
                        <CardTitle className="font-medium text-base sm:text-xl">Send me a message</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Fill out the form below and I'll get back to you as soon as possible</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                <div className="space-y-1 sm:space-y-2">
                                    <Label htmlFor="name" className="text-muted-foreground text-xs sm:text-sm">Name</Label>
                                    <Input id="name" placeholder="Your name" {...register('name')} aria-label="Your name" className="h-8 sm:h-10 text-sm" />
                                    {errors.name && <span className="text-xs text-red-600">{errors.name.message}</span>}
                                </div>
                                <div className="space-y-1 sm:space-y-2">
                                    <Label htmlFor="email" className="text-muted-foreground text-xs sm:text-sm">Email</Label>
                                    <Input id="email" type="email" placeholder="your.email@example.com" {...register('email')} aria-label="Your email address" className="h-8 sm:h-10 text-sm" />
                                    {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div className="space-y-1 sm:space-y-2">
                                <Label htmlFor="subject" className="text-muted-foreground text-xs sm:text-sm">Subject</Label>
                                <Input id="subject" placeholder="What's this about?" {...register('subject')} aria-label="Subject of your message" className="h-8 sm:h-10 text-sm" />
                                {errors.subject && <span className="text-xs text-red-600">{errors.subject.message}</span>}
                            </div>
                            <div className="space-y-1 sm:space-y-2">
                                <Label htmlFor="message" className="text-muted-foreground text-xs sm:text-sm">Message</Label>
                                <Textarea id="message" placeholder="Your message..." rows={4} {...register('message')} aria-label="Your message" className="text-sm" />
                                {errors.message && <span className="text-xs text-red-600">{errors.message.message}</span>}
                            </div>
                            <Button
                                type="submit"
                                className="w-full hover:opacity-80 h-8 sm:h-10 text-sm"
                                style={{ backgroundColor: 'var(--submit-button)' }}
                                disabled={isSubmitting}
                            >
                                <Send className="w-3.5 h-3.5 mr-2" />
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}