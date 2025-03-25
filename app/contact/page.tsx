"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    setSubmitted(true)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Contact Us
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            Get in touch with our team to learn more about our initiative or to collaborate
          </p>
        </div>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2">
        <div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
                Get In Touch
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                We welcome inquiries from educators, institutions, students, and organizations interested in combating
                misinformation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    TruthMattersUAE
                    <br />
                    Khalifa University (KU) Main Campus, Building C
                    <br />
                    Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    General Inquiries: 100065878@ku.ac.ae
                    <br />
                    Partnerships: partnerships@truthmattersuae.org
                    <br />
                    Media: media@truthmattersuae.org
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-medium mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          {submitted ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <CardTitle className="text-center">Message Sent Successfully</CardTitle>
                <CardDescription className="text-center">
                  Thank you for contacting us. We will get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Enter your organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="resources">Resource Request</SelectItem>
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How can my institution partner with your initiative?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                We offer various partnership opportunities, from implementing our programs on your campus to
                collaborative research. Contact our partnerships team to discuss possibilities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Are your resources available for free?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Many of our resources are freely available for educational use. Some specialized materials and training
                programs may have associated costs to support our nonprofit mission.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can you provide speakers for our event?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, our team members are available for speaking engagements at conferences, workshops, and campus
                events. Please use the contact form to submit your request.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How can students get involved?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Students can participate through our student ambassador program, internships, or by organizing awareness
                events on their campus. Contact us for more information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

