'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaYenSign, FaTruck, FaClipboardList } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-0 flex items-center justify-between h-[60px] md:h-[100px]">
        <Link href="/" className="flex items-center">
          <div className="relative w-48 h-12 md:w-72 md:h-24">
            <Image
              src="/images/head_logo.svg"
              alt="メイプル"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-8">
          <Link href="#plans" className="text-link hover:text-link-hover transition font-medium flex items-center gap-2 border-b-2 border-transparent hover:border-link-hover pt-2 pb-1">
            <FaYenSign className="flex-shrink-0" style={{ transform: 'translateY(1px)' }} />
            <span className="leading-none">料金プラン</span>
          </Link>
          <Link href="#services" className="text-link hover:text-link-hover transition font-medium flex items-center gap-2 border-b-2 border-transparent hover:border-link-hover pt-2 pb-1">
            <FaTruck className="flex-shrink-0 scale-x-[-1]" style={{ transform: 'translateY(1px) scaleX(-1)' }} />
            <span className="leading-none">サービス</span>
          </Link>
          <Link href="#flow" className="text-link hover:text-link-hover transition font-medium flex items-center gap-2 border-b-2 border-transparent hover:border-link-hover pt-2 pb-1">
            <FaClipboardList className="flex-shrink-0" style={{ transform: 'translateY(1px)' }} />
            <span className="leading-none">ご利用の流れ</span>
          </Link>
          <div className="hidden md:flex flex-col items-center">
            <span className="text-sm font-bold text-orange-500 mb-1">毎日お電話対応可能！</span>
            <a
              href="tel:0120-551-669"
              className="flex bg-link hover:bg-link-hover text-white hover:text-white font-bold py-2 px-6 rounded-full transition items-center justify-center gap-2"
            >
              <Image src="/images/freedial.svg" alt="フリーダイヤル" width={28} height={28} className="flex-shrink-0" />
              <span className="text-2xl leading-none -translate-y-0.5">0120-551-669</span>
            </a>
          </div>
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 relative group"
          aria-label="メニュー"
        >
          <span className={`w-6 h-0.5 bg-link block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0 absolute' : 'mb-1.5'}`}></span>
          <span className={`w-6 h-0.5 bg-link block transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
          <span className={`w-6 h-0.5 bg-link block transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0 absolute' : ''}`}></span>
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
          <nav className="flex flex-col p-4">
            <Link
              href="#plans"
              onClick={() => setIsMenuOpen(false)}
              className="text-link hover:text-link-hover transition py-3 font-medium flex items-center gap-4 border-b border-gray-200"
            >
              <FaYenSign className="flex-shrink-0 text-2xl" />
              <div className="flex flex-col gap-2">
                <span className="leading-none font-bold">料金プラン</span>
                <span className="text-xs text-gray-600 leading-tight">お得な料金体系をご確認</span>
              </div>
            </Link>
            <Link
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-link hover:text-link-hover transition py-3 font-medium flex items-center gap-4 border-b border-gray-200"
            >
              <FaTruck className="flex-shrink-0 scale-x-[-1] text-2xl" />
              <div className="flex flex-col gap-2">
                <span className="leading-none font-bold">サービス</span>
                <span className="text-xs text-gray-600 leading-tight">不用品回収・遺品整理など</span>
              </div>
            </Link>
            <Link
              href="#flow"
              onClick={() => setIsMenuOpen(false)}
              className="text-link hover:text-link-hover transition py-3 font-medium flex items-center gap-4"
            >
              <FaClipboardList className="flex-shrink-0 text-2xl" />
              <div className="flex flex-col gap-2">
                <span className="leading-none font-bold">ご利用の流れ</span>
                <span className="text-xs text-gray-600 leading-tight">お問い合わせから作業完了まで</span>
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
