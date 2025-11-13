'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ReasonsSection() {
  const reasons = [
    {
      number: '1',
      title: '年間工事100件以上、30年以上の圧倒的な実績と経験',
      description: 'メイプルでは年間工事100件以上、30年以上にわたり圧倒的な実績と経験で、迅速かつ確実に工事を行います。',
      image: '/images/chiiki.jpg'
    },
    {
      number: '2',
      title: '近隣クレーム0件を目指す、安心安全な施工・管理',
      description: 'お客様とお客様のご家族のために、メイプルは「近隣クレーム0件」を目指す安心安全な施工・管理に徹底して取り組んでいます。',
      image: '/images/shitauke.jpg'
    },
    {
      number: '3',
      title: '中間マージンを抑えた納得の料金体系',
      description: '解体のプロであるメイプルなら中間マージンを削ぎ、さまざまなコストカットの実現により、納得の料金体系でクオリティの高いサービスをご提供しています。',
      image: '/images/fuyouhin.jpg'
    }
  ]

  const titleAnimation = useScrollAnimation(0.1)
  const reasonAnimations = [
    useScrollAnimation(0.1),
    useScrollAnimation(0.2),
    useScrollAnimation(0.3)
  ]

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleAnimation.ref} className={`text-center mb-12 md:mb-16 fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">選ばれる理由</h2>
          <p className="text-2xl md:text-3xl text-accent font-semibold">
            地域密着で安心の実績
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={reasonAnimations[index].ref}
              className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition fade-in-up ${reasonAnimations[index].isVisible ? 'visible' : ''}`}
              style={{ backgroundColor: '#F5E6D3' }}
            >
              {/* 上部：画像（半円形の下部分） */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* 下部を半円形にマスク */}
                <div className="absolute bottom-0 left-0 right-0 h-16" style={{ backgroundColor: '#F5E6D3', clipPath: 'ellipse(100% 100% at 50% 100%)' }}></div>
              </div>

              {/* 下部：ベージュ背景でテキスト */}
              <div className="px-6 pb-6" style={{ backgroundColor: '#F5E6D3', marginTop: '-6px' }}>
                {/* タイトルと番号を横並び */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-justify leading-relaxed flex-1" style={{ color: '#572A06' }}>{reason.title}</h3>
                  <div className="text-8xl font-bold text-secondary flex-shrink-0">
                    {reason.number}
                  </div>
                </div>
                <p className="text-base leading-relaxed text-gray-700 text-justify">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
