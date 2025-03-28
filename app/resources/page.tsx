import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Video,
  BookOpen,
  Download,
  ExternalLink,
  BookMarked,
  Smartphone,
  School,
  CheckSquare,
  Newspaper,
} from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Resources & Materials
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            Educational tools and resources to raise awareness and help combat misinformation
          </p>
        </div>
      </div>

      <Tabs defaultValue="educators" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="educators">For Educators</TabsTrigger>
          <TabsTrigger value="students">For Students</TabsTrigger>
          <TabsTrigger value="institutions">For Institutions</TabsTrigger>
        </TabsList>
        <TabsContent value="educators" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Media Literacy Resource Guide</CardTitle>
                <CardDescription>SDCOE</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive guide providing educators with tools to foster digital literacy and critical thinking
                  skills among students.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://www.sdcoe.net/about-sdcoe/news/post/~board/news/post/media-literacy-resource-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Get Resource
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BookMarked className="h-6 w-6 text-primary mb-2" />
                <CardTitle>APA's Guide on Teaching Critical Thinking</CardTitle>
                <CardDescription>American Psychological Association</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Strategies and insights from psychologists to help educators teach students how to identify and combat
                  misinformation.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://www.apa.org/monitor/2024/09/media-literacy-misinformation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Read Guide
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Video className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Critical Media Project</CardTitle>
                <CardDescription>Respectful Conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A free media literacy web resource aimed at enhancing young people's critical thinking and empathy,
                  suitable for educators and students aged 8-21.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href="https://www.criticalmediaproject.org/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Explore Resources
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <School className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Teaching Resources - Critical Thinking</CardTitle>
                <CardDescription>Alberta Teachers' Association</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A collection of resources to help educators guide students in exploring the implications of the
                  information they create, share, and consume, fostering critical thinking skills.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://teachers-ab.libguides.com/criticalthinking/teaching"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Access Resources
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Media Literacy & Critical Thinking Online Toolkit</CardTitle>
                <CardDescription>Department of Homeland Security</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tools and resources provided by the Department of Homeland Security to enhance digital media literacy
                  and critical thinking skills.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://www.dhs.gov/sites/default/files/publications/digital_media_literacy_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download Toolkit
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="students" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Checkology Virtual Classroom</CardTitle>
                <CardDescription>News Literacy Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  An interactive platform offering lessons on news literacy, empowering students to discern credible information and recognize misinformation.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://newslit.org/educators/checkology/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Read Details
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Smartphone className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Civic Online Reasoning (COR) Lessons</CardTitle>
                <CardDescription>Stanford History Education Group</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Research-backed lessons that teach students how to evaluate online information critically, distinguishing credible sources from misinformation.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://cor.stanford.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Details
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Fake News Teaching Resources</CardTitle>
                <CardDescription>Temple University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive guide offering lessons, activities, and materials to help students identify and avoid false information.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://guides.temple.edu/fakenews/teaching"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Details
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CheckSquare className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Misinfo 101: Help Students Steer Clear of Misinformation</CardTitle>
                <CardDescription>News Literacy Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A resource providing strategies for students to determine the credibility of evidence and sources.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://newslit.org/misinfo-101/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download Preview
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Newspaper className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Crash Course: Media Literacy</CardTitle>
                <CardDescription>CrashCourse</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A 12-episode video series that explores the history and psychology of media, equipping students with skills to critically analyze media messages and recognize misinformation.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Video className="mr-2 h-4 w-4" /> Watch Details
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="institutions" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <FileText className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Media Literacy Resource Guide</CardTitle>
                <CardDescription>SDCOE</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A comprehensive guide providing institutions with tools to foster digital literacy and critical
                  thinking skills among educators and students.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://www.sdcoe.net/about-sdcoe/news/post/~board/news/post/media-literacy-resource-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Get Guide
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <School className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Emphasizing Media Literacy in the Classroom</CardTitle>
                <CardDescription>Democracy Toolkit</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Trainings, lesson plans, and resources for integrating media literacy into lessons across all grade
                  levels.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://democracytoolkit.press/resources/emphasize-media-literacy-classroom/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Explore Toolkit
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Media Literacy & Critical Thinking Online Toolkit</CardTitle>
                <CardDescription>Department of Homeland Security</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tools and resources provided by the Department of Homeland Security to enhance digital media literacy
                  and critical thinking skills within institutions.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href="https://www.dhs.gov/sites/default/files/publications/digital_media_literacy_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Download Toolkit
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <div className="bg-primary/10 rounded-lg p-6 md:p-8 lg:p-10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
              Need Custom Resources?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-300">
              We can develop tailored materials specific to your institution's needs and context.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary">
                  Contact Us for Custom Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
