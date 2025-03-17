import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - Brainy Security News",
  description: "Learn about our mission to provide the latest insights and analysis in cybersecurity and IT management",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Brainy</h1>
            <p className="text-xl text-gray-600">
              Providing expert insights and analysis in cybersecurity and IT management since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Brainy, our mission is to empower organizations with the knowledge and insights they need to navigate
                the complex world of cybersecurity and IT management.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that security is not just about technology—it's about people, processes, and a deep
                understanding of the evolving threat landscape. Through our expert analysis and practical guidance, we
                help security professionals make informed decisions to protect their organizations.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experienced security professionals and analysts work tirelessly to bring you the most
                relevant and actionable content in the industry.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Brainy team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                title: "Security Analyst",
                bio: "John is a cybersecurity expert with over 10 years of experience in the field.",
                avatar: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Sarah Johnson",
                title: "CISO",
                bio: "Sarah is a Chief Information Security Officer with expertise in security strategy.",
                avatar: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Michael Chen",
                title: "Security Engineer",
                bio: "Michael specializes in cloud security architecture and implementing secure DevOps practices.",
                avatar: "/placeholder.svg?height=200&width=200",
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#3D2E2E] mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3D2E2E] text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-gray-300 mb-8">
                We'd love to hear from you. Reach out to our team for any inquiries about our content, partnerships, or
                speaking opportunities.
              </p>
              <Button
                asChild
                className="bg-white text-[#3D2E2E] hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium"
              >
                <a href="mailto:elyons@homeownersrights.org">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

