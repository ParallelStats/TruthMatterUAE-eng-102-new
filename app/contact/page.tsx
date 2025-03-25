"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  CheckCircle,
  FileText,
  Video,
  Quote,
  Mail,
  Calendar,
  ArrowRight,
  Brain,
  Search,
  Users,
  School,
} from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("education")
  const headerRef = useRef(null)
  const featuredRef = useRef(null)
  const ctaRef = useRef(null)

  const headerInView = useInView(headerRef, { once: false, amount: 0.2 })
  const featuredInView = useInView(featuredRef, { once: false, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.5 })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Solution data with enhanced visuals and animations
  const solutionData = {
    education: {
      color: "teal",
      icon: <BookOpen className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
      quote:
        "I think more media awareness and literacy courses should be implemented to help people navigate the overwhelming amount of information online.",
      title: "Media Literacy Education",
      description:
        "Our research indicates that structured media literacy education can significantly reduce susceptibility to misinformation among college students. 12% of surveyed students specifically recommended implementing media literacy courses into the current education system.",
      points: [
        "Integration of media literacy modules into core curriculum across all disciplines",
        "Workshops focused on identifying common misinformation tactics and manipulation techniques",
        "Regular exposure to case studies of misinformation and its consequences",
        "Development of UAE-specific media literacy resources that address local context",
      ],
      stats: [
        { value: 12, label: "Students recommended media literacy courses" },
        { value: 46, label: "Students suggesting verification as solution" },
      ],
      buttonText: "Explore Our Media Literacy Resources",
      buttonLink: "/resources",
    },
    critical: {
      color: "amber",
      icon: <Brain className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      quote:
        "Younger people should be wary of any piece of information they may hear, both online and in real life, and be able to criticize it and challenge it freely.",
      title: "Critical Thinking Programs",
      description:
        "Our research found that 42% of students identified critical thinking as a key strategy against misinformation. We're developing specialized critical thinking courses designed to equip students with the analytical skills needed to evaluate information effectively.",
      points: [
        "Practical frameworks for evaluating claims and assessing evidence quality",
        "Training in identifying logical fallacies and reasoning errors",
        "Case-based learning using real-world examples relevant to UAE students",
        "Collaborative analysis exercises to strengthen peer learning",
      ],
      stats: [
        { value: 42, label: "Students identified critical thinking as key" },
        { value: 54, label: "Students encounter misinformation daily" },
      ],
      buttonText: "Access Critical Thinking Materials",
      buttonLink: "/resources",
    },
    verification: {
      color: "indigo",
      icon: <Search className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      quote:
        "Trusting only reliable sources and verified publications is essential in our current information landscape. Every student deserves the skills to differentiate fact from fiction.",
      title: "Source Verification Practices",
      description:
        '46% of surveyed students proposed researching and verifying information as the primary strategy to combat misinformation. One student advised, "Trusting only reliable sources and verified publications."',
      points: [
        "Quick verification techniques that can be applied before sharing information",
        "Training on using fact-checking websites and tools",
        "Development of a UAE-specific fact-checking resource for local context",
        'Promotion of a "verify before share" culture on campus',
      ],
      stats: [
        { value: 46, label: "Students suggested verification as solution" },
        { value: 43, label: "Identified social media as primary source" },
      ],
      buttonText: "Learn Verification Techniques",
      buttonLink: "/resources",
    },
  }

  // Get color classes based on the active tab
  const getColorClasses = (tab) => {
    switch (tab) {
      case "education":
        return {
          bg: "bg-teal-100 dark:bg-teal-900/30",
          text: "text-teal-600 dark:text-teal-400",
          border: "border-teal-200 dark:border-teal-800",
          gradient: "from-teal-500 to-teal-600",
          light: "bg-teal-50 dark:bg-teal-900/20",
        }
      case "critical":
        return {
          bg: "bg-amber-100 dark:bg-amber-900/30",
          text: "text-amber-600 dark:text-amber-400",
          border: "border-amber-200 dark:border-amber-800",
          gradient: "from-amber-500 to-amber-600",
          light: "bg-amber-50 dark:bg-amber-900/20",
        }
      case "verification":
        return {
          bg: "bg-indigo-100 dark:bg-indigo-900/30",
          text: "text-indigo-600 dark:text-indigo-400",
          border: "border-indigo-200 dark:border-indigo-800",
          gradient: "from-indigo-500 to-indigo-600",
          light: "bg-indigo-50 dark:bg-indigo-900/20",
        }
      default:
        return {
          bg: "bg-blue-100 dark:bg-blue-900/30",
          text: "text-blue-600 dark:text-blue-400",
          border: "border-blue-200 dark:border-blue-800",
          gradient: "from-blue-500 to-blue-600",
          light: "bg-blue-50 dark:bg-blue-900/20",
        }
    }
  }

  const colorClasses = getColorClasses(activeTab)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <motion.div
        ref={headerRef}
        className="flex flex-col items-center justify-center space-y-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Solutions & Recommendations
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            As part of our awareness mission, we've developed evidence-based approaches to combat misinformation among
            UAE college students
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="education" value={activeTab} onValueChange={setActiveTab} className="mt-12">
        <TabsList className="grid w-full grid-cols-3 p-1 rounded-lg bg-gray-100 dark:bg-gray-800">
          <TabsTrigger
            value="education"
            className={`rounded-md transition-all duration-300 ${activeTab === "education" ? "bg-white dark:bg-gray-700 shadow-sm" : ""}`}
          >
            <div className="flex items-center gap-2">
              <BookOpen
                className={`h-4 w-4 ${activeTab === "education" ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:text-gray-400"}`}
              />
              <span>Media Literacy</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="critical"
            className={`rounded-md transition-all duration-300 ${activeTab === "critical" ? "bg-white dark:bg-gray-700 shadow-sm" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Brain
                className={`h-4 w-4 ${activeTab === "critical" ? "text-amber-600 dark:text-amber-400" : "text-gray-500 dark:text-gray-400"}`}
              />
              <span>Critical Thinking</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="verification"
            className={`rounded-md transition-all duration-300 ${activeTab === "verification" ? "bg-white dark:bg-gray-700 shadow-sm" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Search
                className={`h-4 w-4 ${activeTab === "verification" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-500 dark:text-gray-400"}`}
              />
              <span>Source Verification</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          {Object.keys(solutionData).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6 relative">
              {activeTab === tab && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`relative mb-8 p-6 ${colorClasses.light} rounded-lg border ${colorClasses.border}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className={`absolute -top-4 left-6 bg-background px-2 ${colorClasses.bg} rounded-full p-1`}>
                      <Quote className={`h-6 w-6 ${colorClasses.text}`} />
                    </div>
                    <blockquote className="italic text-lg text-gray-700 dark:text-gray-300">
                      "{solutionData[tab].quote}"
                    </blockquote>
                    <p className="mt-2 text-right text-sm text-gray-500">
                      — Khalifa University student, survey respondent
                    </p>
                  </motion.div>

                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-full ${colorClasses.bg}`}>{solutionData[tab].icon}</div>
                        <h2 className={`text-2xl font-bold tracking-tighter ${colorClasses.text}`}>
                          {solutionData[tab].title}
                        </h2>
                      </div>

                      <div className={`h-1 w-20 bg-gradient-to-r ${colorClasses.gradient} rounded-full`}></div>

                      <p className="text-gray-600 dark:text-gray-300">{solutionData[tab].description}</p>

                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        {solutionData[tab].points.map((point, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          >
                            <CheckCircle className={`mr-2 h-5 w-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <Link href={solutionData[tab].buttonLink}>
                          <Button className={`bg-gradient-to-r ${colorClasses.gradient} text-white hover:opacity-90`}>
                            {solutionData[tab].buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    <div className="space-y-6">
                      <motion.div
                        className={`aspect-video overflow-hidden rounded-lg ${colorClasses.bg} flex items-center justify-center relative`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <img
                          src={
                            tab === "education"
                              ? "https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                              : tab === "critical"
                              ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                              : "https://images.unsplash.com/photo-1581092333200-4c9c46fa7bac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                          }
                          alt={solutionData[tab].title}
                          className="object-cover z-10 relative"
                        />

                        {/* Animated background elements */}
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute ${colorClasses.border} opacity-30 rounded-full`}
                              style={{
                                width: Math.random() * 100 + 50,
                                height: Math.random() * 100 + 50,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                x: [0, Math.random() * 30 - 15],
                                y: [0, Math.random() * 30 - 15],
                                opacity: [0.2, 0.4, 0.2],
                              }}
                              transition={{
                                duration: Math.random() * 8 + 7,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        className={`p-6 rounded-lg border ${colorClasses.border} ${colorClasses.light}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <h3 className={`text-lg font-semibold mb-4 ${colorClasses.text}`}>Key Statistics</h3>
                        <div className="space-y-4">
                          {solutionData[tab].stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</span>
                                <span className={`font-bold ${colorClasses.text}`}>{stat.value}%</span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${colorClasses.gradient}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${stat.value}%` }}
                                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>

      <motion.section
        ref={featuredRef}
        className="mt-20"
        variants={containerVariants}
        initial="hidden"
        animate={featuredInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400"
          variants={itemVariants}
        >
          Featured Initiative
        </motion.h2>

        <motion.div className="grid gap-6 md:grid-cols-2" variants={itemVariants}>
          <Card className="md:col-span-2 overflow-hidden border-0 shadow-lg">
            <div className="md:grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto overflow-hidden bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center md:h-full relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white/10 rounded-full"
                      style={{
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        borderRadius: "50%",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 50 - 25],
                        y: [0, Math.random() * 50 - 25],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Critical thinking course development"
                  className="object-cover h-full w-full opacity-90 z-10 relative"
                />
              </div>
              <div className="p-6 md:p-8">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                      <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-indigo-400 dark:to-teal-400">
                      Critical Thinking Course Development
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Developing analytical skills for the digital age
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-gray-600 dark:text-gray-300">
                    We're developing an innovative critical thinking course specifically designed to address the
                    challenges of misinformation in the digital age. This course will equip students with practical
                    tools to evaluate information critically and make evidence-based decisions.
                  </p>
                  <div className="mt-6 space-y-3">
                    <motion.div
                      className="flex items-center text-sm p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <FileText className="mr-3 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <span>Practical frameworks for information evaluation</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center text-sm p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <Video className="mr-3 h-5 w-5 text-teal-600 dark:text-teal-400" />
                      <span>Interactive case studies and real-world applications</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center text-sm p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <BookOpen className="mr-3 h-5 w-5 text-amber-600 dark:text-amber-400" />
                      <span>Customized for UAE context and student needs</span>
                    </motion.div>
                  </div>
                </CardContent>
                <CardFooter className="px-0 pt-6">
                  <div className="w-full space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Interested in bringing this course to your institution or learning more about our initiatives?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/contact" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:opacity-90">
                          <Mail className="mr-2 h-4 w-4" /> Contact Us
                        </Button>
                      </Link>
                      <Link href="/resources" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                        >
                          <Calendar className="mr-2 h-4 w-4" /> Request Workshop
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        ref={ctaRef}
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-600 opacity-90"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/10 rounded-full"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  borderRadius: "50%",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 px-6 py-12 md:py-20 md:px-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl text-white">Get Involved</h2>
                <p className="text-white/90">
                  Our solutions are most effective when implemented with broad participation from students, faculty, and
                  administrators. Join our efforts to combat misinformation in UAE universities.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90 shadow-lg">
                      <Users className="mr-2 h-4 w-4" /> Partner With Us
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                      <School className="mr-2 h-4 w-4" /> Access Resources
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="aspect-video overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Collaboration session"
                  className="object-cover opacity-90 z-10"
                />

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 z-0"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}