"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Users,
  Search,
  Lightbulb,
  Share2,
  Target,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Updated timeline data with more relevant statistics for each phase
const timelineData = {
  research: {
    title: "Research Phase",
    icon: <Search className="h-6 w-6 text-teal-600" />,
    content:
      "We conducted a mixed-methods study with undergraduate students at Khalifa University to investigate how misinformation affects college-aged students in the UAE. Our research examined exposure patterns, identified primary sources of false information, and assessed students' abilities to recognize common misconceptions across various knowledge domains, particularly focusing on health-related topics.",
    stats: [
      { value: 54, label: "Students encounter misinformation daily", color: "teal" },
      { value: 43, label: "Identified social media as primary source", color: "amber" },
      { value: 38, label: "Encounter misinformation weekly", color: "indigo" },
    ],
    achievement: "Established baseline data on misinformation prevalence among UAE students",
  },
  discovery: {
    title: "Discovery Phase",
    icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
    content:
      "Our research revealed striking insights about misinformation's impact on UAE college students. We discovered a significant correlation between academic performance and susceptibility to misinformation, with concerning patterns emerging across different student demographics. The prevalence of health-related misconceptions among technically-minded university students highlighted critical gaps in scientific literacy and evaluation skills.",
    stats: [
      { value: 44, label: "Health-related misconceptions", color: "teal" },
      { value: 42, label: "Students recommended critical thinking", color: "amber" },
      { value: 75, label: "Students with lower GPAs more susceptible", color: "indigo" },
    ],
    achievement: "Identified key vulnerability factors and misconception categories",
  },
  response: {
    title: "Response Development",
    icon: <Share2 className="h-6 w-6 text-indigo-600" />,
    content:
      "Based on our findings, we developed targeted solutions including media literacy education, critical thinking programs, and source verification practices. Our approach was guided by both quantitative data and qualitative insights from student interviews, focusing on practical interventions to strengthen students' ability to distinguish between accurate and false information.",
    stats: [
      { value: 46, label: "Students suggested verification as solution", color: "teal" },
      { value: 12, label: "Recommended media literacy courses", color: "amber" },
      { value: 42, label: "Students identified critical thinking as key", color: "indigo" },
    ],
    achievement: "Created evidence-based intervention strategies tailored to UAE context",
  },
  today: {
    title: "Implementation",
    icon: <Target className="h-6 w-6 text-rose-600" />,
    content:
      "We're providing comprehensive resources through our website to mitigate the effects of misinformation among UAE college students. Our platform offers curated educational materials, verification tools, critical thinking guides, and awareness content tailored for students, educators, and institutions. By making these resources freely accessible, we aim to spread awareness about misinformation's impact while equipping the academic community with practical tools to combat false information in their daily lives and educational environments.",
    stats: [
      { value: 1, label: "University partnership established", color: "teal" },
      { value: 43, label: "Social media as primary misinformation source", color: "amber" },
      { value: 46, label: "Students suggesting verification as solution", color: "indigo" },
    ],
    achievement: "Building a network of informed students across UAE universities",
  },
}

// Animated Stat Component
const AnimatedStat = ({ value, label, color, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame
    const duration = 1500 // 1.5 seconds

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      setDisplayValue(Math.floor(easedProgress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      }
    }

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(updateCounter)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, delay])

  const getColorClasses = () => {
    switch (color) {
      case "teal":
        return {
          bg: "bg-teal-100 dark:bg-teal-900/30",
          text: "text-teal-700 dark:text-teal-400",
          border: "border-teal-200 dark:border-teal-800",
        }
      case "amber":
        return {
          bg: "bg-amber-100 dark:bg-amber-900/30",
          text: "text-amber-700 dark:text-amber-400",
          border: "border-amber-200 dark:border-amber-800",
        }
      case "indigo":
        return {
          bg: "bg-indigo-100 dark:bg-indigo-900/30",
          text: "text-indigo-700 dark:text-indigo-400",
          border: "border-indigo-200 dark:border-indigo-800",
        }
      default:
        return {
          bg: "bg-blue-100 dark:bg-blue-900/30",
          text: "text-blue-700 dark:text-blue-400",
          border: "border-blue-200 dark:border-blue-800",
        }
    }
  }

  const colorClasses = getColorClasses()

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-3 p-3 rounded-lg ${colorClasses.bg} border ${colorClasses.border}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className={`text-2xl font-bold ${colorClasses.text}`}>
        {displayValue}
        {value === 1 || value === 50 ? "" : "%"}
      </div>
      <div className="text-sm">{label}</div>
    </motion.div>
  )
}

// Enhanced Horizontal Timeline Component
const HorizontalTimeline = () => {
  const [activePhase, setActivePhase] = useState("research")
  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const phases = Object.keys(timelineData)

  const handleNext = () => {
    const currentIndex = phases.indexOf(activePhase)
    if (currentIndex < phases.length - 1) {
      setDirection(1)
      setActivePhase(phases[currentIndex + 1])
    }
  }

  const handlePrev = () => {
    const currentIndex = phases.indexOf(activePhase)
    if (currentIndex > 0) {
      setDirection(-1)
      setActivePhase(phases[currentIndex - 1])
    }
  }

  const handleDotClick = (phase) => {
    const currentIndex = phases.indexOf(activePhase)
    const newIndex = phases.indexOf(phase)
    setDirection(newIndex > currentIndex ? 1 : -1)
    setActivePhase(phase)
  }

  // Calculate progress percentage
  const progressPercentage = ((phases.indexOf(activePhase) + 1) / phases.length) * 100

  return (
    <motion.div
      ref={containerRef}
      className="relative py-16 px-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-sm overflow-hidden"
      initial={{ opacity: 0.6, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`bg-element-${i}`}
            className="absolute bg-teal-500/5 dark:bg-teal-500/10"
            style={{
              width: Math.random() * 100 + 50,
              height: 8,
              borderRadius: 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 90 - 45,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto" ref={contentRef}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow the evolution of our initiative from initial research to impactful solutions
          </p>
        </motion.div>

        {/* Timeline navigation */}
        <div className="relative mb-12">
          {/* Progress bar background */}
          <div className="h-2 bg-gray-200 dark:bg-gray-700 w-full rounded-full overflow-hidden">
            {/* Animated progress indicator */}
            <motion.div
              className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full"
              initial={{ width: "25%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline dots */}
          <div className="flex justify-between absolute w-full top-0 transform -translate-y-1/2">
            {phases.map((phase, index) => {
              const isActive = activePhase === phase
              const phaseColors = {
                research: "from-teal-500 to-teal-600",
                discovery: "from-amber-500 to-amber-600",
                response: "from-indigo-500 to-indigo-600",
                today: "from-rose-500 to-rose-600",
              }

              return (
                <motion.button
                  key={`timeline-dot-${phase}`}
                  onClick={() => handleDotClick(phase)}
                  className="relative group focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Dot */}
                  <motion.div
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      isActive
                        ? `bg-gradient-to-r ${phaseColors[phase]} text-white`
                        : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    }`}
                    animate={
                      isActive
                        ? {
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 0 0 0 rgba(79, 70, 229, 0)",
                              "0 0 0 8px rgba(79, 70, 229, 0.2)",
                              "0 0 0 0 rgba(79, 70, 229, 0)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 1.5, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Label */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <motion.span
                      className={`text-sm font-medium ${
                        isActive
                          ? phase === "research"
                            ? "text-teal-600 dark:text-teal-400"
                            : phase === "discovery"
                              ? "text-amber-600 dark:text-amber-400"
                              : phase === "response"
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-rose-600 dark:text-rose-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {timelineData[phase].title}
                    </motion.span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Content area */}
        <div className="relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`timeline-content-${activePhase}`}
              initial={{
                opacity: 0,
                x: direction === 1 ? 300 : -300,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                x: direction === 1 ? -300 : 300,
                transition: {
                  duration: 0.3,
                },
              }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                <div className="col-span-3 space-y-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`p-3 rounded-lg ${
                        activePhase === "research"
                          ? "bg-teal-100 dark:bg-teal-900/30"
                          : activePhase === "discovery"
                            ? "bg-amber-100 dark:bg-amber-900/30"
                            : activePhase === "response"
                              ? "bg-indigo-100 dark:bg-indigo-900/30"
                              : "bg-rose-100 dark:bg-rose-900/30"
                      }`}
                      initial={{ rotate: -10, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {timelineData[activePhase].icon}
                    </motion.div>
                    <motion.h3
                      className={`text-2xl font-bold ${
                        activePhase === "research"
                          ? "text-teal-700 dark:text-teal-400"
                          : activePhase === "discovery"
                            ? "text-amber-700 dark:text-amber-400"
                            : activePhase === "response"
                              ? "text-indigo-700 dark:text-indigo-400"
                              : "text-rose-700 dark:text-rose-400"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {timelineData[activePhase].title}
                    </motion.h3>
                  </div>

                  <motion.p
                    className="text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {timelineData[activePhase].content}
                  </motion.p>

                  <motion.div
                    className={`p-4 rounded-lg border ${
                      activePhase === "research"
                        ? "border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20"
                        : activePhase === "discovery"
                          ? "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20"
                          : activePhase === "response"
                            ? "border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20"
                            : "border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle
                        className={`h-5 w-5 ${
                          activePhase === "research"
                            ? "text-teal-600 dark:text-teal-400"
                            : activePhase === "discovery"
                              ? "text-amber-600 dark:text-amber-400"
                              : activePhase === "response"
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-rose-600 dark:text-rose-400"
                        }`}
                      />
                      <span className="font-medium">Key Achievement</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{timelineData[activePhase].achievement}</p>
                  </motion.div>

                  <div className="flex items-center gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrev}
                      disabled={activePhase === phases[0]}
                      className={activePhase === phases[0] ? "opacity-50 cursor-not-allowed" : ""}
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNext}
                      disabled={activePhase === phases[phases.length - 1]}
                      className={activePhase === phases[phases.length - 1] ? "opacity-50 cursor-not-allowed" : ""}
                    >
                      Next <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="col-span-2 mt-8 md:mt-0 space-y-4">
                  <motion.div
                    className={`p-4 rounded-lg bg-gradient-to-br ${
                      activePhase === "research"
                        ? "from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20"
                        : activePhase === "discovery"
                          ? "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20"
                          : activePhase === "response"
                            ? "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20"
                            : "from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20"
                    }`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h4 className="text-lg font-semibold mb-3">Key Metrics</h4>
                    <div className="space-y-3">
                      {timelineData[activePhase].stats.map((stat, index) => (
                        <AnimatedStat
                          key={`stat-${activePhase}-${index}`}
                          value={stat.value}
                          label={stat.label}
                          color={stat.color}
                          delay={index * 200}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Phase-specific illustration or visualization */}
                  <motion.div
                    className="h-32 rounded-lg overflow-hidden flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        activePhase === "research"
                          ? "bg-teal-100 dark:bg-teal-900/30"
                          : activePhase === "discovery"
                            ? "bg-amber-100 dark:bg-amber-900/30"
                            : activePhase === "response"
                              ? "bg-indigo-100 dark:bg-indigo-900/30"
                              : "bg-rose-100 dark:bg-rose-900/30"
                      }`}
                    >
                      {activePhase === "research" && <Search className="h-12 w-12 text-teal-600 dark:text-teal-400" />}
                      {activePhase === "discovery" && (
                        <Lightbulb className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                      )}
                      {activePhase === "response" && (
                        <Share2 className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                      )}
                      {activePhase === "today" && <Target className="h-12 w-12 text-rose-600 dark:text-rose-400" />}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)

  const [heroInView, setHeroInView] = useState(false)
  const [statsInView, setStatsInView] = useState(false)
  const [ctaInView, setCtaInView] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observerOptions = { threshold: 0.2 }

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeroInView(true)
      }
    }, observerOptions)

    const statsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsInView(true)
      }
    }, observerOptions)

    const ctaObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCtaInView(true)
      }
    }, observerOptions)

    if (heroRef.current) heroObserver.observe(heroRef.current)
    if (statsRef.current) statsObserver.observe(statsRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current)
      if (statsRef.current) statsObserver.unobserve(statsRef.current)
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <div className="flex flex-col min-h-screen">
      <motion.section
        ref={heroRef}
        className="relative py-24 md:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background gradient with animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-indigo-700 mix-blend-multiply z-0">
          <motion.div
            className="absolute inset-0 bg-black/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center space-y-6 text-center">
            <motion.div
              className="space-y-4 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-sm">
                Combating Misinformation Among College-Aged Students in the UAE
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                A non-profit initiative raising awareness and empowering students with critical thinking skills to
                identify and combat misinformation in the digital age.
              </p>
            </motion.div>

            <motion.div
              className="space-x-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link href="/problem">
                <Button className="bg-white text-teal-700 hover:bg-white/90 shadow-lg">
                  Learn About The Problem <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" className="bg-transparent text-white hover:bg-white/20 border-white/40">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div
                className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{
                    y: [0, 6, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Findings Section */}
      <motion.section
        ref={statsRef}
        className="py-16 md:py-20 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
                Key Research Findings
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                Our research reveals concerning trends about misinformation among college students
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
            <motion.div
              className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                <BarChart2 className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">Digital Platform Impact</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Our research found that social media platforms (43%) are the leading source of misinformation among UAE
                university students.
              </p>
              <motion.div
                className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full mt-2 overflow-hidden"
                initial={{ width: 0 }}
                animate={statsInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={statsInView ? { width: "43%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.div>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">43% from social media</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <BookOpen className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold">Academic Connection</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Students with stronger academic performance showed greater ability to identify and resist misinformation
                in our study.
              </p>
              <motion.div
                className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full mt-2 overflow-hidden"
                initial={{ width: 0 }}
                animate={statsInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={statsInView ? { width: "75%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.div>
              <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">75% correlation with GPA</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center space-y-4 border rounded-lg p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold">Widespread Exposure</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                A concerning 54% of surveyed students encounter misinformation daily, with another 38% facing it on a
                weekly basis.
              </p>
              <motion.div
                className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full mt-2 overflow-hidden"
                initial={{ width: 0 }}
                animate={statsInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={statsInView ? { width: "54%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.div>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">54% daily exposure</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Journey Section - Horizontal Timeline */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <HorizontalTimeline />
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        className="py-16 md:py-20"
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-600 opacity-90"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`cta-bg-${i}`}
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

            <div className="relative z-10 px-6 py-12 md:py-20 md:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Join Our Mission</h2>
                <p className="mx-auto max-w-[600px] mt-4 text-lg text-white/90">
                  Help us promote media literacy and critical thinking skills among students to combat misinformation in
                  the UAE.
                </p>
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90 shadow-lg">
                    Get Involved Today
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

