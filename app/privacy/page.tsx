import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import EmailAddress from '@/components/EmailAddress'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">プライバシーポリシー</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              株式会社メイプル（以下「当社」といいます。）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全社員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">個人情報の管理</h2>
              <p>
                当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">個人情報の利用目的</h2>
              <p>
                お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">個人情報の第三者への開示・提供の禁止</h2>
              <p>
                当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>お客さまの同意がある場合</li>
                <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
                <li>法令に基づき開示することが必要である場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">個人情報の安全対策</h2>
              <p>
                当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">ご本人の照会</h2>
              <p>
                お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">法令、規範の遵守と見直し</h2>
              <p>
                当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-primary pb-2">お問い合わせ</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-lg mb-3">株式会社メイプル</p>
                <p>〒732-0029</p>
                <p>広島市東区福田1丁目838-1</p>
                <p className="mt-3">TEL：082-516-7800</p>
                <p className="mt-3"><EmailAddress /></p>
                <p className="mt-3 text-sm text-gray-600">受付時間：9時〜18時（土日対応可）</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-accent hover:bg-orange-600 text-white hover:text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md no-underline"
            >
              トップページへ戻る
            </Link>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold mb-4">メイプルのお片付け</h3>
              <p className="text-sm text-gray-400 lg:mr-10 leading-relaxed">
                広島県全域で不用品回収、遺品整理、解体前のお片付けを承っております。お客様のご要望に合わせた柔軟な対応と、丁寧な作業で信頼をいただいております。少量のお片付けから大規模な整理まで、まずはお気軽にご相談ください。土日対応も可能です。
              </p>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Image
                    src="/images/freedial.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <a
                    href="tel:0120-551-669"
                    className="hover:opacity-60 transition pb-0.5"
                    style={{ color: "#4a9eff" }}
                  >
                    0120-551-669
                  </a>
                </p>
                <p className="text-gray-400 text-sm">
                  受付日時: 土日対応可能 9時〜18時
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-4">会社概要</h3>
              <div className="space-y-2">
                <p>
                  <a
                    href="https://hiroshima-maple.com/company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition"
                    style={{ color: "#4a9eff" }}
                  >
                    株式会社メイプル
                  </a>
                </p>
                <p className="text-gray-400">
                  対応地域：広島県全域<span className='text-sm'>（※一部地域を除く）</span>
                </p>
                <p>
                  <Link
                    href="/privacy"
                    className="hover:opacity-60 transition"
                    style={{ color: "#4a9eff" }}
                  >
                    プライバシーポリシー
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 株式会社メイプル All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
