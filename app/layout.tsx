import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'メイプルのお片付け | 広島の不用品回収・遺品整理・解体前片付け専門',
  description: '広島で不用品回収、遺品整理、解体前のお片付けならメイプルにお任せください。最短即日対応、明朗会計、女性スタッフ対応可能。ごみ屋敷、荒れた納屋、倉庫の片付けもお任せください。',
  keywords: '不用品回収,遺品整理,解体前片付け,ごみ屋敷,広島,メイプル',
  openGraph: {
    title: 'メイプルのお片付け | 広島の不用品回収・遺品整理専門',
    description: '広島で不用品回収、遺品整理、解体前のお片付けならメイプルにお任せください。最短即日対応、明朗会計、女性スタッフ対応可能。',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'メイプルのお片付け',
    description: '広島で不用品回収、遺品整理、解体前のお片付けを承っております',
    telephone: '0120-551-669',
    address: {
      '@type': 'PostalAddress',
      addressRegion: '広島県',
      addressCountry: 'JP',
    },
    areaServed: {
      '@type': 'State',
      name: '広島県',
    },
    priceRange: '¥3,300 - ¥31,900',
    openingHours: 'Mo-Su 09:00-18:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '不用品回収・遺品整理サービス',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '遺品整理',
            description: 'ご家族の大切な思い出の詰まった品を丁寧に整理いたします',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '不用品回収・買取',
            description: '遺品整理等で出た大型家具などの回収',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ハウスクリーニング・ゴミ屋敷清掃',
            description: 'ゴミ屋敷もスッキリキレイにクリーニング',
          },
        },
      ],
    },
  }

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=M+PLUS+Rounded+1c:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-900">{children}</body>
    </html>
  )
}
