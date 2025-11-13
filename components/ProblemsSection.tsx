'use client'

import Image from 'next/image'
import CTAButton from './CTAButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ProblemsSection() {
  const problems = [
    {
      number: '1',
      title: '家具や家電が重くて運べない...',
      description: {
        text: `当社にご依頼いただく方には、ご高齢の方が最も多いです。皆さま口をそろえておっしゃるのが、「こんなことから依頼していいの？」。しかし、メイプルにはお気遣いいただく必要はございません！

むしろ、「自分ではちょっと...」程度の片づけにこそ、メイプルのお片付けをご利用いただければと思います。`,
        highlight: 'こんなことから依頼していいの？'
      },
      image: '/images/tansu.png'
    },
    {
      number: '2',
      title: '料金が不透明で、いくらかかるか心配...',
      description: {
        text: `不用品回収業界の料金は不透明でわかりにくいという話がよくあります。
メイプルのお片付けは、Webサイトに記載している料金で実施しています。
地元密着で長年広島の皆様にご愛顧いただいておりますメイプルは、明朗会計でやらせていただきますので、ご安心ください！`,
        highlight: '不用品回収業界の料金は不透明でわかりにくい'
      },
      image: '/images/akutoku.png'
    },
    {
      number: '3',
      title: '遺品整理をしなきゃいけないけど疲れ果ててしまった...',
      description: {
        text: `お気持ち、大変よくわかります。ご家族を亡くされた中での遺品整理などはどうしても心身ともに疲弊してしまうものです。
弊社では専門のスタッフがご供養からしっかりさせて頂きますので、ぜひお任せください。`,
        highlight: '遺品整理などはどうしても心身ともに疲弊してしまうもの'
      },
      image: '/images/photowoman.png'
    }
  ]

  const titleAnimation = useScrollAnimation(0.1)
  const problemAnimations = [
    useScrollAnimation(0.1),
    useScrollAnimation(0.2),
    useScrollAnimation(0.3)
  ]
  const ctaAnimation = useScrollAnimation(0.1)

  return (
    <>
      <section className="relative" style={{ backgroundColor: '#F0F8E4' }}>
        <div className="container mx-auto px-4 pt-12 md:pt-16 pb-12 md:pb-16">
          <div ref={titleAnimation.ref} className={`text-center mb-12 md:mb-16 fade-in-up ${titleAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">こんなお悩みありませんか？</h2>
            <p className="text-2xl md:text-3xl text-accent font-semibold">
              お気軽にご相談ください
            </p>
          </div>

          <div className="space-y-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                ref={problemAnimations[index].ref}
                className={`text-white rounded-2xl shadow-lg p-8 md:p-12 fade-in-up ${problemAnimations[index].isVisible ? 'visible' : ''}`}
                style={{ backgroundColor: '#c6ac4e' }}
              >
                {/* スマホ：元のレイアウト */}
                <div className="md:hidden grid grid-cols-1 gap-8">
                  <div>
                    <div className="inline-block bg-white text-2xl font-bold px-4 py-2 rounded-full mb-4" style={{ color: '#c6ac4e' }}>
                      {problem.number}
                    </div>
                    <h3 className="text-3xl font-bold mb-3 text-justify">{problem.title}</h3>
                    <div className="border-t-2 border-white/30 mb-6"></div>
                    <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
                      {problem.description.text.split(problem.description.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className={`font-bold px-1 py-0.5 rounded ${problemAnimations[index].isVisible ? 'animate-highlighter' : ''}`} style={{ backgroundImage: 'linear-gradient(transparent 50%, #7ed957 50%)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom', backgroundSize: problemAnimations[index].isVisible ? undefined : '0% 60%' }}>
                              {problem.description.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="relative w-full h-48 bg-white rounded-lg overflow-hidden">
                    <Image
                      src={problem.image}
                      alt={problem.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      style={{ objectPosition: 'center 40%' }}
                    />
                  </div>
                </div>

                {/* タブレット：上部にタイトル、下部左にテキスト、右に画像 */}
                <div className="hidden md:block xl:hidden">
                  {/* 上部：番号とタイトル横並び */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white text-2xl font-bold px-4 py-2 rounded-full flex-shrink-0" style={{ color: '#c6ac4e' }}>
                      {problem.number}
                    </div>
                    <h3 className="text-3xl font-bold text-justify">{problem.title}</h3>
                  </div>

                  {/* 下部：左にテキスト、右に画像 */}
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
                      {problem.description.text.split(problem.description.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className={`font-bold px-1 py-0.5 rounded ${problemAnimations[index].isVisible ? 'animate-highlighter' : ''}`} style={{ backgroundImage: 'linear-gradient(transparent 50%, #7ed957 50%)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom', backgroundSize: problemAnimations[index].isVisible ? undefined : '0% 60%' }}>
                              {problem.description.highlight}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>

                    <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        fill
                        sizes="(max-width: 1280px) 50vw, 33vw"
                        className="object-cover scale-125"
                        style={{ objectPosition: 'center 40%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* PC：左側に番号・タイトル・テキスト、右側に画像 */}
                <div className="hidden xl:block">
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="inline-block bg-white text-2xl font-bold px-4 py-2 rounded-full mb-4" style={{ color: '#c6ac4e' }}>
                        {problem.number}
                      </div>
                      <h3 className="text-3xl font-bold mb-3 text-justify">{problem.title}</h3>
                      <div className="border-t-2 border-white/30 mb-6"></div>
                      <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
                        {problem.description.text.split(problem.description.highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className={`font-bold px-1 py-0.5 rounded ${problemAnimations[index].isVisible ? 'animate-highlighter' : ''}`} style={{ backgroundImage: 'linear-gradient(transparent 50%, #7ed957 50%)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom', backgroundSize: problemAnimations[index].isVisible ? undefined : '0% 60%' }}>
                                {problem.description.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden">
                      <Image
                        src={problem.image}
                        alt={problem.title}
                        fill
                        sizes="50vw"
                        className="object-cover"
                        style={{ objectPosition: 'center 40%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - PC版のみ表示 */}
      <section className="hidden xl:block text-white py-16 md:py-20" style={{ backgroundColor: '#EC6C26' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
              最短即日で伺います！
            </h3>
            <p className="text-xl md:text-2xl">今すぐお問い合わせください</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto">
            <div className="flex-1">
              <CTAButton variant="phone" size="2xl" fullWidth showDescription className="!h-20 !px-8 [&_span]:!text-4xl [&_img]:!w-14 [&_img]:!h-14" />
            </div>
            <div className="flex-1">
              <CTAButton variant="form" size="2xl" fullWidth showDescription className="!h-20 !px-8 [&_span]:!text-4xl [&_svg]:!text-[3.5rem]" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
