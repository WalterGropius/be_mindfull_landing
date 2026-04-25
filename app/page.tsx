import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ThemeCarousel } from "@/components/theme-carousel"
import { VideoSection } from "@/components/video-section"
import { FeaturesSection } from "@/components/features-section"
import { FreeCourseSection } from "@/components/free-course-section"
import { CoursesSection } from "@/components/courses-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"

import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Header />
      <Hero />
      <ThemeCarousel />
      <VideoSection />
      <FeaturesSection />
      <FreeCourseSection />
      <CoursesSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
