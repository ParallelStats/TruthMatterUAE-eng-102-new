import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            About Our Initiative
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            Learn about our mission to combat misinformation among college students in the UAE
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-12">
        <section>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
                Our Mission
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                TruthMattersUAE is a non-profit organization dedicated to addressing the growing challenge of
                misinformation among college-aged students in the United Arab Emirates. Our mission is to raise
                awareness and empower students with the critical thinking skills and media literacy necessary to
                identify, evaluate, and combat misinformation in their academic and personal lives.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                This website serves as our primary platform for raising awareness about the prevalence and impact of
                misinformation in the UAE academic community. Through research insights, educational resources, and
                community engagement, we aim to create a more informed student population that can navigate the complex
                information landscape of the digital age.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg bg-primary/10 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Students collaborating" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Our Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <BookOpen className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We believe in the power of education to transform how students interact with information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Building a community of critical thinkers who support each other in the fight against misinformation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Award className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Upholding the highest standards of academic integrity and ethical information sharing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Target className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Developing innovative approaches to combat evolving misinformation challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Our Research
          </h2>
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              Our initiative is founded on rigorous academic research examining the prevalence and impact of
              misinformation among college students in the UAE. Our technical report provides comprehensive insights
              into:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
              <li>The sources and types of misinformation most commonly encountered by UAE students</li>
              <li>The correlation between academic performance and susceptibility to misinformation</li>
              <li>The role of social media platforms in spreading unverified information</li>
              <li>Effective strategies for enhancing media literacy and critical thinking skills</li>
            </ul>
            <p className="text-gray-500 dark:text-gray-400">
              This research forms the foundation of our educational programs and awareness campaigns, ensuring that our
              approach is evidence-based and tailored to the specific needs of the UAE student population.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Our Methodology
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                We employ a mixed-methods approach combining quantitative and qualitative data collection through surveys with 24-30 randomly selected Khalifa University students. Each survey undergoes rigorous peer and faculty review to ensure validity and unbiased assessment.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Our data collection framework includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Demographic information (GPA, college, gender)</li>
                <li>Quantitative measures via multiple-choice and true/false questions</li>
                <li>Qualitative responses through open-ended reflective questions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Data analysis utilizes statistical tools for quantitative interpretation alongside thematic analysis for qualitative responses. This approach allows us to measure misinformation prevalence and understand correlations between academic performance and susceptibility to false information.
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our research identified key patterns: 54% of students encounter misinformation daily, primarily through social media (43%), with significant correlations between GPA and ability to identify false information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Our Team
          </h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="aspect-square overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <svg 
                    className="w-16 h-16 text-gray-400 dark:text-gray-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <CardTitle>Ibrahim Sadeq</CardTitle>
                <CardDescription>Founder & Lead Researcher</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Computer Engineering student at Khalifa University (Student ID: 100065878). As the founder of this
                  non-profit initiative, Ibrahim is dedicated to raising awareness and combating misinformation among
                  college students in the UAE through research-based approaches and educational resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
