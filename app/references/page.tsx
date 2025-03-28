"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, FileText, Book, Globe } from "lucide-react"

export default function ReferencesPage() {
  const [references, setReferences] = useState([
    {
      id: 1,
      type: "document",
      title: "The Impact of Misinformation on College Students",
      authors: "Ibrahim Sadeq",
      year: "2025",
      citation: '[1] I. Sadeq, "The Impact of Misinformation on College Students," Technical Report, 2025.',
    },
    // Educators Resources
    {
      id: 2,
      type: "document",
      title: "Media Literacy Resource Guide",
      authors: "San Diego County Office of Education",
      year: "2024",
      citation: '[2] San Diego County Office of Education, "Media Literacy Resource Guide," San Diego, CA, 2024.',
    },
    {
      id: 3,
      type: "article",
      title: "How to Teach Students Critical Thinking Skills to Combat Misinformation",
      authors: "American Psychological Association",
      year: "2024",
      citation: '[3] American Psychological Association, "How to Teach Students Critical Thinking Skills to Combat Misinformation," Monitor on Psychology, vol. 55, no. 8, pp. 12-15, Sep. 2024.',
    },
    {
      id: 4,
      type: "website",
      title: "Critical Media Project: Media Literacy Resources",
      authors: "Respectful Conversation",
      year: "2024",
      citation: '[4] Respectful Conversation, "Critical Media Project," 2024. [Online]. Available: https://www.criticalmediaproject.org/',
    },
    {
      id: 5,
      type: "document",
      title: "Teaching Resources for Critical Thinking and Media Literacy",
      authors: "Alberta Teachers' Association",
      year: "2024",
      citation: '[5] Alberta Teachers\' Association, "Teaching Resources - Critical Thinking: News and Media Literacy," Calgary, AB, 2024.',
    },
    {
      id: 6,
      type: "document",
      title: "Checkology Virtual Classroom",
      authors: "News Literacy Project",
      year: "2024",
      citation: '[6] News Literacy Project, "Checkology Virtual Classroom," Washington, DC, 2024.',
    },
    {
      id: 7,
      type: "document",
      title: "Civic Online Reasoning (COR) Lessons",
      authors: "Stanford History Education Group",
      year: "2024",
      citation: '[7] Stanford History Education Group, "Civic Online Reasoning (COR) Lessons," Stanford, CA, 2024.',
    },
    {
      id: 8,
      type: "document",
      title: "Fake News Teaching Resources",
      authors: "Temple University Libraries",
      year: "2024",
      citation: '[8] Temple University Libraries, "Fake News Teaching Resources," Philadelphia, PA, 2024.',
    },
    {
      id: 9,
      type: "document",
      title: "Misinfo 101: Misinformation Prevention Guide",
      authors: "News Literacy Project",
      year: "2024",
      citation: '[9] News Literacy Project, "Misinfo 101: Help Students Steer Clear of Misinformation," Washington, DC, 2024.',
    },
    {
      id: 10,
      type: "video",
      title: "Crash Course: Media Literacy Series",
      authors: "CrashCourse",
      year: "2024",
      citation: '[10] CrashCourse, "Media Literacy Video Series," YouTube, 2024.',
    },
    {
      id: 11,
      type: "document",
      title: "Emphasizing Media Literacy in the Classroom",
      authors: "Democracy Toolkit",
      year: "2024",
      citation: '[11] Democracy Toolkit, "Media Literacy Educational Resources," 2024.',
    },
    {
      id: 12,
      type: "document",
      title: "Media Literacy & Critical Thinking Online Toolkit",
      authors: "Department of Homeland Security",
      year: "2024",
      citation: '[12] U.S. Department of Homeland Security, "Digital Media Literacy Toolkit," Washington, DC, 2024.',
    }
  ])

  const handleCopyReference = (citation) => {
    navigator.clipboard.writeText(citation)
  }

  const handleCopyAllReferences = () => {
    const allCitations = references.map((ref) => ref.citation).join("\n\n")
    navigator.clipboard.writeText(allCitations)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
            References
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            Sources and citations for our educational resources and research
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Reference List</CardTitle>
              <CardDescription>Citations for the TruthMattersUAE project</CardDescription>
            </div>
            <Button variant="outline" onClick={handleCopyAllReferences}>
              <Copy className="mr-2 h-4 w-4" /> Copy All
            </Button>
          </CardHeader>
          <CardContent>
            {references.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No references available.</div>
            ) : (
              <div className="space-y-4">
                {references.map((ref) => (
                  <div key={ref.id} className="p-4 border rounded-lg relative group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        {ref.type === "article" && <FileText className="h-5 w-5 text-primary" />}
                        {ref.type === "book" && <Book className="h-5 w-5 text-primary" />}
                        {ref.type === "website" && <Globe className="h-5 w-5 text-primary" />}
                        {ref.type === "document" && <FileText className="h-5 w-5 text-primary" />}
                        {ref.type === "video" && <Video className="h-5 w-5 text-primary" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{ref.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{ref.authors}</p>
                        <p className="text-sm mt-2">{ref.citation}</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="sm" onClick={() => handleCopyReference(ref.citation)}>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
          Supporting Our Awareness Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          These references form the foundation of our awareness campaign and educational resources. As a non-profit
          organization, we're committed to providing evidence-based information to combat misinformation among UAE
          college students.
        </p>
      </div>
    </div>
  )
}
