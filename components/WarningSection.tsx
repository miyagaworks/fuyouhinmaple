'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

export default function WarningSection() {
  const headerAnimation = useScrollAnimation(0.1)
  const warningAnimation = useScrollAnimation(0.2)
  const promiseAnimation = useScrollAnimation(0.3)

  return (
    <section className="relative pt-12 md:pt-16 pb-12 md:pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden" style={{ backgroundColor: '#F0F8E4' }}>
      {/* 警告テープ風の装飾 */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-repeat-x opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffcc00, #ffcc00 10px, #000 10px, #000 20px)'
        }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー */}
          <div ref={headerAnimation.ref} className={`text-center mb-8 fade-in-up ${headerAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 mt-6">ご注意ください</h2>
            <p className="text-2xl md:text-3xl text-accent font-semibold mb-4">
              悪質業者にご用心
            </p>
            <div className="inline-flex items-center bg-red-700 px-6 py-3 rounded-full mb-6">
              <svg className="text-yellow-300 w-10 h-10 pt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xl pb-1 pr-2 md:text-2xl font-bold text-left md:text-center">悪質な不用品回収業者にご注意ください</span>
            </div>
            <div className="flex justify-center">
              <p className="text-gray-300 text-justify max-w-2xl">
                近年、法外な料金を請求する悪質業者が後を絶ちません。彼らの手口は巧妙化しており、お客様が思わぬトラブルに巻き込まれるケースが増加しています。
              </p>
            </div>
          </div>

          {/* 悪徳業者の主な手口 */}
          <div ref={warningAnimation.ref} className={`bg-red-900/50 border-2 border-red-600 rounded-xl p-8 mb-8 fade-in-up ${warningAnimation.isVisible ? 'visible' : ''}`}>
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <svg className="text-red-400 pt-1 w-8 h-8 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  悪徳業者の主な手口
                </h3>
                <ul className="space-y-4">
                  {[
                    '「見積もり後」の高額請求：トラックへの積み込みが完了した後、「作業費」「運搬費」などの名目で不当な追加料金を上乗せする。',
                    '不透明な料金表示：本来税金であるリサイクル料金やオプション費用を曖昧にし、後から詳細不明な費用を請求する。',
                    '虚偽の宣伝：自作自演のランキングサイトで自社を1位に見せかけたり、「詰め放題」と謳いながら実際は高額な見積もりを提示する。',
                    '最悪のリスク：回収物を不法投棄し、お客様の個人情報を流出させるなど、違法行為や重大な情報漏洩リスクを引き起こす。'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 font-bold mr-3">•</span>
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <Image src="/images/aku_img.png" alt="悪徳業者注意" width={252} height={280} className="rounded-2xl" />
              </div>
            </div>
          </div>

          {/* メイプルのお約束 */}
          <div ref={promiseAnimation.ref} className={`bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-8 mb-8 fade-in-up ${promiseAnimation.isVisible ? 'visible' : ''}`}>
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Image src="/images/maple_face.svg" alt="メイプル" width={36} height={36} className="mr-3 w-9 h-9" />
                  メイプルがお約束する安心のサービス
                </h3>
                <p className="text-lg mb-6">
                  メイプルは、お客様に心からご安心いただくことを最優先にしています。料金の透明性を徹底し、不当な請求は一切いたしません。
                </p>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-4">メイプルの徹底事項</h4>
                  <ul className="space-y-3">
                    {[
                      '明朗会計の定額パック：料金体系は定額パックでシンプル。お見積もり後の不当な追加請求・高額請求は一切ありません。',
                      '「納得」の上の契約：料金案内前に作業を開始することは絶対にありません。必ずお客様にサービス内容と料金をご納得いただいた上でのご契約・作業となります。'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-300 font-bold mr-3">✓</span>
                        <span className="text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-2xl font-bold text-justify mt-6">
                  安心でクリーンな不用品回収は、信頼できると評判のメイプルにお任せください。
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image src="/images/maple_img.png" alt="メイプル安心サービス" width={266} height={420} className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 警告テープ風の装飾 (下部) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #ffcc00, #ffcc00 10px, #000 10px, #000 20px)'
        }}
      ></div>
    </section>
  )
}
