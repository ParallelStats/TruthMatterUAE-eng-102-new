"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  BarChart2,
  Share2,
  TrendingUp,
  CheckCircle,
  Smartphone,
  Video,
  MessageCircle,
  Newspaper,
  ArrowRight,
  ChevronDown,
  Search,
  Lightbulb,
  Target,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  Cell,
} from "recharts"
import Link from "next/link"

// Animated Counter Component
const AnimatedCounter = ({ value, label, description, color, delay = 0, icon }) => {
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: false, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame
    const duration = 2000 // 2 seconds

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      setDisplayValue(Math.floor(easedProgress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      } else {
        setHasAnimated(true)
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

  return (
    <motion.div
      ref={counterRef}
      className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>{icon}</div>
        <div className="flex-1">
          <div className="flex items-baseline">
            <motion.span
              className={`text-4xl font-bold text-${color}-600`}
              animate={hasAnimated ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {displayValue}
            </motion.span>
            <span className="text-2xl font-bold ml-1">%</span>
          </div>
          <h3 className="text-lg font-semibold mt-1">{label}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>

          {/* Progress indicator */}
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3 overflow-hidden">
            <motion.div
              className={`h-full bg-${color}-500`}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${value}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: delay / 1000 + 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Pulse effect when counter finishes */}
      {hasAnimated && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{
            boxShadow: `0 0 0 0 rgba(${color === "blue" ? "59, 130, 246" : color === "red" ? "239, 68, 68" : color === "green" ? "34, 197, 94" : "139, 92, 246"}, 0)`,
          }}
          animate={{
            boxShadow: [
              `0 0 0 0 rgba(${color === "blue" ? "59, 130, 246" : color === "red" ? "239, 68, 68" : color === "green" ? "34, 197, 94" : "139, 92, 246"}, 0)`,
              `0 0 0 8px rgba(${color === "blue" ? "59, 130, 246" : color === "red" ? "239, 68, 68" : color === "green" ? "34, 197, 94" : "139, 92, 246"}, 0.3)`,
              `0 0 0 0 rgba(${color === "blue" ? "59, 130, 246" : color === "red" ? "239, 68, 68" : color === "green" ? "34, 197, 94" : "139, 92, 246"}, 0)`,
            ],
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
    </motion.div>
  )
}

// Animated Radial Progress Chart
const AnimatedRadialProgress = ({ data, colors }) => {
  const chartRef = useRef(null)
  const isInView = useInView(chartRef, { once: false, amount: 0.5 })
  const [animationProgress, setAnimationProgress] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const animationDuration = 2000 // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate progress with easing
      const progress = Math.min(elapsed / animationDuration, 1)
      // Use easeOutCubic for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setAnimationProgress(easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)

    return () => {
      // Cleanup if needed
    }
  }, [isInView])

  return (
    <div ref={chartRef} className="w-full h-full transition-all duration-300 relative">
      <div className="grid grid-cols-2 gap-6">
        {data.map((item, index) => {
          const isHovered = hoveredIndex === index
          const animatedValue = item.value * animationProgress

          return (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  {/* Background circle */}
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>

                  {/* Progress circle with SVG */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="transparent"
                      stroke={colors[index % colors.length]}
                      strokeWidth="8"
                      strokeDasharray={`${animatedValue * 3.51}px ${351 - animatedValue * 3.51}px`}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                      style={{
                        filter: isHovered ? "drop-shadow(0 0 6px rgba(0, 0, 0, 0.2))" : "none",
                      }}
                    />
                  </svg>

                  {/* Percentage text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-2xl font-bold text-${colors[index % colors.length].replace("#", "")}`}>
                      {Math.round(animatedValue)}%
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-center">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500 text-center">{item.description}</p>
              </div>

              {/* Pulse effect on hover */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  initial={{ boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0, 0, 0, 0)",
                      `0 0 0 8px rgba(${colors[index % colors.length].replace("#", "")}, 0.2)`,
                      "0 0 0 0 rgba(0, 0, 0, 0)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// Animated Segmented Bar Chart
const AnimatedSegmentedBar = ({ data, colors }) => {
  const chartRef = useRef(null)
  const isInView = useInView(chartRef, { once: false, amount: 0.5 })
  const [animationProgress, setAnimationProgress] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const animationDuration = 2000 // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate progress with easing
      const progress = Math.min(elapsed / animationDuration, 1)
      // Use easeOutCubic for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setAnimationProgress(easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)

    return () => {
      // Cleanup if needed
    }
  }, [isInView])

  // Calculate cumulative positions for segments
  const segments = []
  let cumulative = 0

  data.forEach((item, index) => {
    const width = item.value * animationProgress
    segments.push({
      ...item,
      start: cumulative,
      width: width,
      color: colors[index % colors.length],
    })
    cumulative += width
  })

  return (
    <div ref={chartRef} className="w-full h-full flex flex-col justify-center transition-all duration-300">
      <div className="space-y-8">
        {/* Main segmented bar */}
        <div className="relative h-16 bg-gray-100 rounded-lg overflow-hidden">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              className="absolute top-0 h-full"
              style={{
                left: `${segment.start}%`,
                width: `${segment.width}%`,
                backgroundColor: segment.color,
                zIndex: hoveredIndex === index ? 10 : 5 - index,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                zIndex: 20,
              }}
            >
              {/* Percentage label */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-white font-bold transition-opacity duration-300 ${
                  segment.width < 10 ? "opacity-0" : "opacity-100"
                }`}
              >
                {Math.round(segment.value)}%
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: colors[index % colors.length] }}></div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Timeline data for interactive timeline
const timelineData = {
  research: {
    title: "Research Phase",
    icon: <Search className="h-8 w-8 text-blue-600" />,
    content:
      "The initiative began with comprehensive research at Khalifa University, surveying students to understand the prevalence and impact of misinformation. We discovered that 54% of students encounter misinformation daily, with social media being the primary source (43%).",
    stat: 54,
    statDescription: "Students encounter misinformation daily",
  },
  discovery: {
    title: "Discovery Phase",
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    content:
      "Analysis of our research revealed concerning trends: students with lower GPAs were more susceptible to misinformation, and 44% of misconceptions were health-related. We identified critical thinking and source verification as key strategies, with 42% and 46% of students recommending these approaches respectively.",
    stat: 44,
    statDescription: "Misconceptions are health-related",
  },
  response: {
    title: "Response Development",
    icon: <Share2 className="h-8 w-8 text-blue-600" />,
    content:
      "Based on our findings, we developed targeted solutions including media literacy education, critical thinking programs, and source verification practices. We're creating educational resources designed to address the specific challenges identified in our research.",
    stat: 46,
    statDescription: "Students suggest verification as solution",
  },
  today: {
    title: "Today",
    icon: <Target className="h-8 w-8 text-blue-600" />,
    content:
      "TruthMattersUAE now focuses on implementing our research-backed solutions across UAE universities. We're developing educational resources, conducting workshops, and building partnerships to create a more informed student population that can navigate the complex information landscape of the digital age.",
    stat: 43,
    statDescription: "Misinformation comes from social media",
  },
}

// Interactive Timeline Component with Roller-Coaster Animation
const InteractiveTimeline = () => {
  const [activePhase, setActivePhase] = useState("research")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  const phases = Object.keys(timelineData)

  return (
    <motion.div
      ref={containerRef}
      className="relative py-16 overflow-hidden"
      style={{
        opacity: springOpacity,
        scale: springScale,
        y: springY,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 -z-10"></div>

      {/* Floating elements for roller-coaster effect */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow the evolution of our initiative from initial research to impactful solutions
          </p>
        </motion.div>

        {/* Interactive timeline navigation */}
        <div className="relative mb-16">
          <div className="h-1 bg-gray-200 w-full rounded-full">
            <motion.div
              className="h-1 bg-blue-600 rounded-full"
              initial={{ width: "25%" }}
              animate={{
                width:
                  activePhase === "research"
                    ? "25%"
                    : activePhase === "discovery"
                      ? "50%"
                      : activePhase === "response"
                        ? "75%"
                        : "100%",
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex justify-between mt-2">
            {phases.map((phase, index) => (
              <motion.button
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={`relative flex flex-col items-center transition-all duration-300 ${
                  activePhase === phase ? "scale-110" : "opacity-70 hover:opacity-100"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`h-5 w-5 rounded-full ${activePhase === phase ? "bg-blue-600" : "bg-gray-300"}`}
                  animate={
                    activePhase === phase
                      ? {
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(37, 99, 235, 0)",
                            "0 0 0 8px rgba(37, 99, 235, 0.3)",
                            "0 0 0 0 rgba(37, 99, 235, 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: activePhase === phase ? Number.POSITIVE_INFINITY : 0 }}
                />
                <span
                  className={`mt-2 text-sm font-medium ${activePhase === phase ? "text-blue-600" : "text-gray-500"}`}
                >
                  {timelineData[phase].title}
                </span>

                {/* Vertical line connecting to content */}
                {activePhase === phase && (
                  <motion.div
                    className="absolute top-6 w-0.5 bg-blue-600 h-8"
                    initial={{ height: 0 }}
                    animate={{ height: 32 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Timeline content with roller-coaster animation */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -50, rotateX: 10 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.div
                    className="inline-block p-4 rounded-full bg-blue-100 mb-4"
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    {timelineData[activePhase].icon}
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {timelineData[activePhase].title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {timelineData[activePhase].content}
                  </motion.p>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Button className="group" variant="outline">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-6 h-64 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                >
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-5xl font-bold text-blue-600 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      {timelineData[activePhase].stat}%
                    </motion.div>
                    <motion.div
                      className="text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      {timelineData[activePhase].statDescription}
                    </motion.div>
                  </div>

                  {/* Decorative elements */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-blue-600 opacity-10"
                      style={{
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, Math.random() * 50 - 25, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        scale: [1, Math.random() * 0.3 + 0.8, 1],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between mt-8">
          <Button
            variant="ghost"
            onClick={() => {
              const currentIndex = phases.indexOf(activePhase)
              if (currentIndex > 0) {
                setActivePhase(phases[currentIndex - 1])
              }
            }}
            disabled={phases.indexOf(activePhase) === 0}
            className={phases.indexOf(activePhase) === 0 ? "opacity-50 cursor-not-allowed" : ""}
          >
            Previous
          </Button>

          <Button
            variant="ghost"
            onClick={() => {
              const currentIndex = phases.indexOf(activePhase)
              if (currentIndex < phases.length - 1) {
                setActivePhase(phases[currentIndex + 1])
              }
            }}
            disabled={phases.indexOf(activePhase) === phases.length - 1}
            className={phases.indexOf(activePhase) === phases.length - 1 ? "opacity-50 cursor-not-allowed" : ""}
          >
            Next
          </Button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-sm text-gray-500 mb-2">Scroll to explore more</p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProblemPage() {
  const [activeTab, setActiveTab] = useState("sources")
  const [isVisible, setIsVisible] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Data for key findings visualization
  const keyFindingsData = [
    {
      name: "Daily Exposure",
      value: 54,
      description: "Students encountering misinformation every day",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "blue",
    },
    {
      name: "Social Media",
      value: 43,
      description: "Primary source of misinformation",
      icon: <Smartphone className="h-6 w-6" />,
      color: "red",
    },
    {
      name: "Health Myths",
      value: 44,
      description: "Misconceptions related to health topics",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "green",
    },
    {
      name: "Verification",
      value: 46,
      description: "Students suggesting verification as solution",
      icon: <Share2 className="h-6 w-6" />,
      color: "purple",
    },
  ]

  // Colors for sources pie chart - professional, academic palette
  const sourcesColors = ["#4573a7", "#aa4644", "#71a063", "#8064a1"]

  // Data for pie chart - sources of misinformation
  const sourcesData = [
    { name: "Social Media", value: 43, description: "Platforms like Instagram, TikTok, and Twitter" },
    { name: "Video Platforms", value: 27, description: "YouTube and other video sharing sites" },
    { name: "Messaging Apps", value: 24, description: "WhatsApp, Telegram, and other messaging services" },
    { name: "News Platforms", value: 6, description: "Traditional and online news sources" },
  ]

  // Data for misconceptions chart
  const misconceptionsData = [
    { name: "Health", value: 44, description: "Medical and health-related misconceptions" },
    { name: "Celebrity", value: 17, description: "False information about public figures" },
    { name: "Food", value: 17, description: "Nutrition and food safety myths" },
    { name: "Unreliable Sources", value: 11, description: "Information from questionable origins" },
    { name: "General", value: 11, description: "Other common misconceptions" },
  ]

  // Data for academic performance correlation
  const academicData = [
    { gpa: "3.5-4.0", susceptibility: 25 },
    { gpa: "3.0-3.49", susceptibility: 38 },
    { gpa: "2.5-2.99", susceptibility: 52 },
    { gpa: "2.0-2.49", susceptibility: 68 },
    { gpa: "Below 2.0", susceptibility: 75 },
  ]

  // Data for prevalence of misinformation
  const prevalenceData = [
    { name: "Daily", value: 54, color: "#4573a7" },
    { name: "Weekly", value: 38, color: "#aa4644" },
    { name: "Rarely", value: 8, color: "#71a063" },
  ]

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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div ref={pageRef} className="overflow-hidden">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
              The Problem of Misinformation
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              Understanding the impact of misinformation on college students in the UAE
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Alert className="mt-8 bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle>The Challenge We Face</AlertTitle>
            <AlertDescription>
              Our research with Khalifa University students reveals that over half (54%) encounter misinformation daily,
              while another 38% face it weekly. Only a small minority (8%) report rarely encountering false information.
            </AlertDescription>
          </Alert>
        </motion.div>

        <div className="mt-12 space-y-16">
          {/* Key Findings Section with Animated Counters */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="py-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
                Key Findings at a Glance
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Our research reveals concerning trends about misinformation among college students
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFindingsData.map((item, index) => (
                <AnimatedCounter
                  key={index}
                  value={item.value}
                  label={item.name}
                  description={item.description}
                  color={item.color}
                  delay={index * 200}
                  icon={item.icon}
                />
              ))}
            </div>
          </motion.section>

          {/* Survey Results Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="py-8"
          >
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
              Survey Results
            </h2>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="sources">Sources</TabsTrigger>
                <TabsTrigger value="prevalence">Prevalence</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="sources" className="p-6 border rounded-md mt-4 bg-white">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Primary Sources of Misinformation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                          className="h-[350px]"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <AnimatedSegmentedBar data={sourcesData} colors={sourcesColors} />
                        </motion.div>
                        <div className="flex flex-col justify-center space-y-4">
                          <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 rounded-full bg-[#4573a7]/20">
                              <Smartphone className="h-5 w-5 text-[#4573a7]" />
                            </div>
                            <div>
                              <h4 className="font-medium">Social Media (43%)</h4>
                              <p className="text-sm text-gray-500">Platforms like Instagram, TikTok, and Twitter</p>
                            </div>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 rounded-full bg-[#aa4644]/20">
                              <Video className="h-5 w-5 text-[#aa4644]" />
                            </div>
                            <div>
                              <h4 className="font-medium">Video Platforms (27%)</h4>
                              <p className="text-sm text-gray-500">YouTube and other video sharing sites</p>
                            </div>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 rounded-full bg-[#71a063]/20">
                              <MessageCircle className="h-5 w-5 text-[#71a063]" />
                            </div>
                            <div>
                              <h4 className="font-medium">Messaging Apps (24%)</h4>
                              <p className="text-sm text-gray-500">WhatsApp, Telegram, and other messaging services</p>
                            </div>
                          </motion.div>
                          <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 rounded-full bg-[#8064a1]/20">
                              <Newspaper className="h-5 w-5 text-[#8064a1]" />
                            </div>
                            <div>
                              <h4 className="font-medium">News Platforms (6%)</h4>
                              <p className="text-sm text-gray-500">Traditional and online news sources</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="prevalence" className="p-6 border rounded-md mt-4 bg-white">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Prevalence of Misinformation</h3>
                      <motion.div
                        className="h-[350px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={prevalenceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis label={{ value: "Percentage (%)", angle: -90, position: "insideLeft" }} />
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Legend />
                            <Bar dataKey="value" name="Percentage" animationDuration={1500} animationBegin={300}>
                              {prevalenceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </motion.div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <motion.div
                          className="p-4 border rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h4 className="font-semibold mb-2">Daily Exposure (54%)</h4>
                          <p className="text-sm text-gray-500">
                            More than half of UAE students encounter misinformation every day, making it a pervasive
                            issue in their daily lives.
                          </p>
                        </motion.div>
                        <motion.div
                          className="p-4 border rounded-lg"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h4 className="font-semibold mb-2">Verification Strategy (46%)</h4>
                          <p className="text-sm text-gray-500">
                            Nearly half of students identified research and verification as the primary strategy to
                            combat misinformation.
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="impact" className="p-6 border rounded-md mt-4 bg-white">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Impact on Students</h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        <motion.div
                          className="h-[300px]"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.7 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={academicData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="gpa" />
                              <YAxis label={{ value: "Susceptibility (%)", angle: -90, position: "insideLeft" }} />
                              <Tooltip formatter={(value) => `${value}%`} />
                              <Legend />
                              <Line
                                type="monotone"
                                dataKey="susceptibility"
                                name="Susceptibility to Misinformation"
                                stroke="#4573a7"
                                strokeWidth={2}
                                animationDuration={2000}
                                dot={{ r: 6 }}
                                activeDot={{ r: 8 }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </motion.div>
                        <div className="space-y-4">
                          <motion.div
                            className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <h4 className="font-semibold mb-2">Academic Performance Link</h4>
                            <p className="text-sm">
                              Our research uncovered that students with lower GPAs were more susceptible to
                              misinformation, suggesting critical thinking skills may serve as a protective factor for
                              academic success.
                            </p>
                          </motion.div>
                          <motion.div
                            className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <h4 className="font-semibold mb-2">Health Misinformation (44%)</h4>
                            <p className="text-sm">
                              The majority of misconceptions were health-related, including beliefs like "antibiotics
                              work against viruses" and "we only use 10% of our brains."
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </motion.section>

          {/* Key Findings Cards */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariants}
            className="py-8"
          >
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
              Key Findings
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital Platform Influence</h3>
                    <p className="text-gray-600">
                      Our research identified social media (43%) as the leading source of misinformation among UAE
                      university students, with video platforms (27%) and messaging apps (24%) also playing significant
                      roles in spreading false information.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Academic Performance Connection</h3>
                    <p className="text-gray-600">
                      Students with higher academic achievement demonstrated greater resistance to misinformation,
                      suggesting that developing critical thinking skills may both improve academic outcomes and reduce
                      vulnerability to false information.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Health Misinformation</h3>
                    <p className="text-gray-600">
                      Health-related misconceptions dominated our findings (44% of reported misconceptions), with
                      students commonly believing myths like "we only use 10% of our brains" and incorrectly thinking
                      antibiotics work against viral infections.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Share2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Critical Thinking Gap</h3>
                    <p className="text-gray-600">
                      The prevalence of misconceptions among otherwise well-educated university students highlights a
                      gap in critical thinking skills and scientific literacy that needs to be addressed through
                      targeted educational interventions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-6">
              <motion.h2
                className="text-2xl font-bold tracking-tighter md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Take Action
              </motion.h2>
              <motion.p
                className="mt-2 text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Now that you understand the problem, explore our solutions to combat misinformation
              </motion.p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/solutions">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/resources">
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Resources
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

