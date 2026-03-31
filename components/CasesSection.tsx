'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { FaArrowRight } from 'react-icons/fa'

const cases = [
  { before: '/images/case01.jpg', after: '/images/case02.jpg' },
  { before: '/images/case03.jpg', after: '/images/case04.jpg' },
  { before: '/images/case05.jpg', after: '/images/case06.jpg' },
  { before: '/images/case07.jpg', after: '/images/case08.jpg' },
  { before: '/images/case09.jpg', after: '/images/case10.jpg' },
]

export default function CasesSection() {
  const titleAnimation = useScrollAnimation(0.1)

  return (
    <section id="cases" className="bg-white pt-12 md:pt-16 pb-12 md:pb-16">
      <div className="container mx-auto px-4">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-10 md:mb-14 fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">お片付け事例</h2>
          <p className="text-2xl md:text-3xl text-accent font-semibold">
            様々なお片付けに対応します
          </p>
        </div>

        <div className="space-y-8 md:space-y-10 max-w-4xl mx-auto">
          {cases.map((item, index) => (
            <CaseRow key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseRow({ item, index }: { item: typeof cases[number]; index: number }) {
  const animation = useScrollAnimation(0.1)

  return (
    <div
      ref={animation.ref}
      className={`flex items-center gap-2 sm:gap-4 md:gap-6 fade-in-up ${animation.isVisible ? 'visible' : ''}`}
    >
      {/* Before */}
      <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
        <Image
          src={item.before}
          alt={`お片付け事例${index + 1} Before`}
          fill
          sizes="(max-width: 768px) 45vw, 400px"
          className="object-cover"
        />
        <span className="absolute bottom-0 left-0 right-0 text-white text-center text-xs md:text-lg font-bold py-1 bg-black/50">
          Before
        </span>
      </div>

      {/* Green Arrow */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <FaArrowRight className="text-2xl sm:text-3xl md:text-4xl" style={{ color: '#8DC33C' }} />
      </div>

      {/* After */}
      <div className="flex-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
        <Image
          src={item.after}
          alt={`お片付け事例${index + 1} After`}
          fill
          sizes="(max-width: 768px) 45vw, 400px"
          className="object-cover"
        />
        <span className="absolute bottom-0 left-0 right-0 text-white text-center text-xs md:text-lg font-bold py-1 bg-black/50">
          After
        </span>
      </div>
    </div>
  )
}
