"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"

export function FreeCourseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#9DA59C] relative overflow-hidden py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Cloud Illustrations */}
          <div ref={ref} className="relative mx-auto w-[90%] md:w-[70%] max-w-[500px] h-[200px] lg:h-[250px] pointer-events-none">
            <img src="/Illustrations/clouds_00.svg" alt="" className={`absolute inset-0 w-full h-full object-contain object-bottom duration-1000 ${isVisible ? 'animate-in fade-in zoom-in-95 fill-mode-both' : 'opacity-0'}`} />
            <img src="/Illustrations/clouds_01.svg" alt="" className={`absolute inset-0 w-full h-full object-contain object-bottom duration-1000 delay-150 ${isVisible ? 'animate-in fade-in slide-in-from-bottom-4 fill-mode-both' : 'opacity-0'}`} />
            <img src="/Illustrations/clouds_02.svg" alt="" className={`absolute inset-0 w-full h-full object-contain object-bottom duration-1000 delay-300 ${isVisible ? 'animate-in fade-in slide-in-from-right-4 fill-mode-both' : 'opacity-0'}`} />
          </div>

          <Typography variant="span" color="inverse" className="text-sm font-bold uppercase tracking-[0.2em] block">
            Bezplatný 3denní program
          </Typography>
          <Typography variant="h2" className="mt-4">
            Start-to-PAUSE: Tři dny k větší rovnováze
          </Typography>
          <Typography variant="p" className="mt-6">
            Naučíte se zastavit uprostřed rušeného dne. Budete schopni rychleji zklidnit mysl a uvolnit tělo.
          </Typography>
          <Typography variant="p" className="mt-4">
            Odnesete si 3 konkrétní nástroje, které vám pomohou přepnout během pěti minut ze stresu do uvolnění.
          </Typography>
          <div className="mt-10 mx-auto max-w-md">
            <form className="flex flex-col sm:flex-row gap-4">
               <Input 
                 type="email" 
                 placeholder="Váš e-mail" 
                 required
                 className="h-auto py-[18px] px-[24px] flex-1 rounded-full border border-border-subtle bg-surface-white text-[18px] text-typography-body shadow-sm placeholder:text-muted-foreground focus-visible:ring-primary-green" 
               />
               <Button type="submit" variant="primary-orange" size="default" className="group shadow-md gap-0">
                 <span className="flex items-center gap-2">Začít hned <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
               </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
