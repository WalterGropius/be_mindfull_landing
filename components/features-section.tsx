import { TrendingUp } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h2 className="text-balance text-3xl font-bold text-[#2D2C2B] lg:text-4xl">
            The scientifically proven approach to better health, wellbeing and resilience
          </h2>
          <p className="mt-8 text-base font-bold text-[#4B4C4D]">This is for you, if you want to:</p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <img src="/brain1.svg" alt="Emotional Resilience" className="w-8 h-8 flex-shrink-0" />
              <p className="text-base text-[#4B4C4D]">
                <span className="font-bold">Build Emotional Resilience:</span> handle difficult emotions and life challenges with greater stability.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <img src="/brain2.svg" alt="Thought Control" className="w-8 h-8 flex-shrink-0" />
              <p className="text-base text-[#4B4C4D]">
                <span className="font-bold">Improve Thought Control & Break Cycles:</span> escape repetitive patterns and break mental cycles, that are no longer serving.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <img src="/brain00.svg" alt="Physical Health" className="w-8 h-8 flex-shrink-0" />
              <p className="text-base text-[#4B4C4D]">
                <span className="font-bold">Improve Physical Health Benefits:</span> reduce stress-related symptoms like insomnia and anxiety.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <img src="/brain01.svg" alt="Manage Stress" className="w-8 h-8 flex-shrink-0" />
              <p className="text-base text-[#4B4C4D]">
                <span className="font-bold">Manage daily stress better</span> for more calmness in work and life.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <img src="/brain02.svg" alt="Compassion" className="w-8 h-8 flex-shrink-0" />
              <p className="text-base text-[#4B4C4D]">
                <span className="font-bold">Gain more compassion and kindness</span> and strengthen your relationships.
              </p>
            </div>
          </div>
          <p className="mt-12 text-lg font-bold text-[#2D2C2B]">
            Start to care about your own well-being and you will impact all the world around you in a positive way
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="aspect-[4/5] w-full lg:min-h-[600px] overflow-hidden rounded-[2rem] shadow-xl">
            <img src="/AdobeStock_313540527.jpeg" alt="Wellbeing" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
