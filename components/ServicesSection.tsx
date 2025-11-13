'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ServicesSection() {
  const services = [
    {
      title: '遺品整理',
      description: 'ご家族の大切な思い出の詰まった品を丁寧に整理いたします。',
      image: '/images/ihinseiri.jpg',
      width: 400,
      height: 300
    },
    {
      title: '不用品回収・買取',
      description: '遺品整理等で出た大型家具などの回収もいたします。また、リサイクル法に基づき処理いたします。',
      image: '/images/fuyouhin.jpg',
      width: 400,
      height: 300
    },
    {
      title: 'ハウスクリーニング・ゴミ屋敷清掃',
      description: 'ゴミ屋敷もスッキリキレイにクリーニングいたします。安心してお任せください。',
      image: '/images/gomiyashiki.jpg',
      width: 400,
      height: 300
    }
  ]

  const titleAnimation = useScrollAnimation(0.1)
  const serviceAnimations = [
    useScrollAnimation(0.1),
    useScrollAnimation(0.2),
    useScrollAnimation(0.3)
  ]

  return (
    <section id="services" className="relative pt-12 md:pt-16 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleAnimation.ref} className={`text-center mb-12 md:mb-16 fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">主な回収メニュー</h2>
          <p className="text-2xl md:text-3xl text-accent font-semibold">
            幅広いニーズに対応します
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={serviceAnimations[index].ref}
              className={`text-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 fade-in-up ${serviceAnimations[index].isVisible ? 'visible' : ''}`}
              style={{ backgroundColor: '#8DC33C' }}
            >
              <div className="relative h-64 bg-white">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-justify">{service.title}</h3>
                <div className="border-t-2 border-white/30 mb-3"></div>
                <p className="text-lg leading-relaxed text-justify">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
