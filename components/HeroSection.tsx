'use client'

import Image from 'next/image'
import CTAButton from './CTAButton'
import { FaBolt, FaHeart, FaYenSign } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // ページロード時にアニメーションを開始（一度だけ）
    if (!animate) {
      const timer = setTimeout(() => {
        setAnimate(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative bg-secondary pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 xl:pb-16">
      <div className="container mx-auto px-4 relative z-10">
        {/* PC版レイアウト */}
        <div className="hidden xl:block">
          {/* タイトル */}
          <h1
            className="text-9xl font-bold mb-24 text-center text-white"
            style={{ lineHeight: "0.6" }}
          >
            解体前のお片付け
            <br />
            <span className="text-4xl">
              解体前の不用品回収や遺品整理もお任せください
            </span>
          </h1>

          <div className="grid grid-cols-5 gap-8 items-start mb-16 max-w-7xl mx-auto">
            {/* 左側：吹き出しとバッジ */}
            <div className="relative col-span-2">
              {/* 吹き出し */}
              <div
                className="relative mb-8"
                style={{
                  transform: "scale(1.5)",
                  transformOrigin: "left center",
                }}
              >
                <Image
                  src="/images/fukidashi_pc.svg"
                  alt=""
                  width={1000}
                  height={500}
                  className="w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-16 py-8">
                  <h4 className="text-xl leading-relaxed text-gray-700">
                    ごみ屋敷、荒れた納屋、倉庫
                    <br />
                    家財の回収・仕分け・運び出しまで
                    <br />
                    解体専門のプロに
                    <br />
                    まとめてお任せください。
                  </h4>
                </div>
              </div>

              {/* バッジ */}
              <div className="flex gap-6 relative z-20 justify-start">
                <div
                  className={`rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-white flex-shrink-0 ${
                    animate ? "animate-badge-1" : ""
                  }`}
                  style={{
                    width: "220px",
                    height: "220px",
                    backgroundColor: "#ffd700",
                    transform: animate ? "" : "scale(0)",
                    aspectRatio: "1",
                  }}
                >
                  <FaBolt
                    className="text-6xl mb-2"
                    style={{ color: "#572A06" }}
                  />
                  <div
                    className="text-2xl leading-tight text-center font-bold"
                    style={{ color: "#572A06" }}
                  >
                    <div>スピード対応</div>
                    <div>最速即日</div>
                  </div>
                </div>
                <div
                  className={`rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-white flex-shrink-0 ${
                    animate ? "animate-badge-2" : ""
                  }`}
                  style={{
                    width: "220px",
                    height: "220px",
                    backgroundColor: "#ffcdec",
                    transform: animate ? "" : "scale(0)",
                    aspectRatio: "1",
                  }}
                >
                  <FaHeart
                    className="text-6xl mb-2"
                    style={{ color: "#572A06" }}
                  />
                  <div
                    className="text-2xl leading-tight text-center font-bold"
                    style={{ color: "#572A06" }}
                  >
                    <div>きめ細やかな</div>
                    <div>女性が対応</div>
                  </div>
                </div>
                <div
                  className={`rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-white flex-shrink-0 ${
                    animate ? "animate-badge-3" : ""
                  }`}
                  style={{
                    width: "220px",
                    height: "220px",
                    backgroundColor: "#97cfff",
                    transform: animate ? "" : "scale(0)",
                    aspectRatio: "1",
                  }}
                >
                  <FaYenSign
                    className="text-6xl mb-2"
                    style={{ color: "#572A06" }}
                  />
                  <div
                    className="text-2xl leading-tight text-center font-bold"
                    style={{ color: "#572A06" }}
                  >
                    <div>県内最安値を</div>
                    <div>目指します</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：キャラクター */}
            <div className="flex flex-col items-end col-span-3 -mt-12">
              <div
                className={animate ? "animate-character" : ""}
                style={{ width: "70%", transform: animate ? "" : "scale(0)" }}
              >
                <Image
                  src="/images/character.svg"
                  alt="メイプルキャラクター"
                  width={780}
                  height={780}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="max-w-6xl mx-auto">
            <div className="border-t-2 border-secondary-dark mb-16"></div>
            <div className="flex gap-6 justify-center">
              <div className="flex-1">
                <CTAButton
                  variant="phone"
                  size="2xl"
                  fullWidth
                  showDescription
                  className="!h-20 !px-8 [&_span]:!text-4xl [&_img]:!w-14 [&_img]:!h-14 [&_p]:!text-[#572a06]"
                />
              </div>
              <div className="flex-1">
                <CTAButton
                  variant="form"
                  size="2xl"
                  fullWidth
                  showDescription
                  className="!h-20 !px-8 [&_span]:!text-4xl [&_svg]:!text-[3.5rem] [&_p]:!text-[#572a06]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* タブレット版レイアウト */}
        <div className="hidden md:block xl:hidden">
          {/* タイトル */}
          <h1
            className="text-7xl font-bold mb-12 text-center text-white"
            style={{ lineHeight: "0.9" }}
          >
            解体前のお片付け
            <br />
            <span className="text-3xl">
              解体前の不用品回収や遺品整理もお任せください
            </span>
          </h1>

          {/* バッジ */}
          <div className="flex gap-4 mb-6 justify-center relative z-20">
            <div
              className={`rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-white flex-shrink-0 ${
                animate ? "animate-badge-1" : ""
              }`}
              style={{
                width: "180px",
                height: "180px",
                backgroundColor: "#ffd700",
                transform: animate ? "" : "scale(0)",
                aspectRatio: "1",
              }}
            >
              <FaBolt className="text-5xl mb-2" style={{ color: "#572A06" }} />
              <div
                className="text-lg leading-tight text-center font-bold"
                style={{ color: "#572A06" }}
              >
                <div>スピード対応</div>
                <div>最速即日</div>
              </div>
            </div>
            <div
              className={`rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-white flex-shrink-0 ${
                animate ? "animate-badge-2" : ""
              }`}
              style={{
                width: "180px",
                height: "180px",
                backgroundColor: "#ffcdec",
                transform: animate ? "" : "scale(0)",
                aspectRatio: "1",
              }}
            >
              <FaHeart className="text-5xl mb-2" style={{ color: "#572A06" }} />
              <div
                className="text-lg leading-tight text-center font-bold"
                style={{ color: "#572A06" }}
              >
                <div>きめ細やかな</div>
                <div>女性が対応</div>
              </div>
            </div>
            <div
              className={`rounded-full shadow-lg flex flex-col items-center justify-center border-4 border-white flex-shrink-0 ${
                animate ? "animate-badge-3" : ""
              }`}
              style={{
                width: "180px",
                height: "180px",
                backgroundColor: "#97cfff",
                transform: animate ? "" : "scale(0)",
                aspectRatio: "1",
              }}
            >
              <FaYenSign
                className="text-5xl mb-2"
                style={{ color: "#572A06" }}
              />
              <div
                className="text-lg leading-tight text-center font-bold"
                style={{ color: "#572A06" }}
              >
                <div>県内最安値を</div>
                <div>目指します</div>
              </div>
            </div>
          </div>

          {/* 吹き出し */}
          <div className="relative mb-6 -mt-16 z-10 max-w-2xl mx-auto">
            <Image
              src="/images/fukidashi_mobile.svg"
              alt=""
              width={600}
              height={400}
              className="w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 px-10">
              <h4 className="text-3xl leading-relaxed text-gray-700">
                ごみ屋敷、荒れた納屋、倉庫
                <br />
                家財の回収・仕分け・運び出しまで
                <br />
                解体専門のプロに
                <br />
                まとめてお任せください。
              </h4>
            </div>
          </div>

          {/* キャラクター */}
          <div className="flex justify-center mb-20 -mt-16">
            <div
              className={`${animate ? "animate-character" : ""}`}
              style={{ width: "90%", transform: animate ? "" : "scale(0)" }}
            >
              <Image
                src="/images/character.svg"
                alt="メイプルキャラクター"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* モバイル版レイアウト */}
        <div className="md:hidden pt-4">
          <h1
            className="font-bold leading-relaxed mb-6 text-center text-white"
            style={{ fontSize: "2.3rem", lineHeight: "0.9" }}
          >
            解体前のお片付け
            <br />
            <span className="text-sm">
              解体前の不用品回収や遺品整理もお任せください
            </span>
          </h1>

          {/* バッジ */}
          <div className="flex justify-center gap-3 mb-6 relative z-20">
            <div
              className={`rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-white ${
                animate ? "animate-badge-1" : ""
              }`}
              style={{
                width: "104px",
                height: "104px",
                backgroundColor: "#ffd700",
                transform: animate ? "" : "scale(0)",
              }}
            >
              <FaBolt className="text-2xl mb-1" style={{ color: "#572A06" }} />
              <div
                className="text-[14px] leading-tight text-center font-bold"
                style={{ color: "#572A06" }}
              >
                <div>スピード対応</div>
                <div>最速即日</div>
              </div>
            </div>
            <div
              className={`rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-white ${
                animate ? "animate-badge-2" : ""
              }`}
              style={{
                width: "104px",
                height: "104px",
                backgroundColor: "#ffcdec",
                transform: animate ? "" : "scale(0)",
              }}
            >
              <FaHeart className="text-2xl mb-1" style={{ color: "#572A06" }} />
              <div
                className="text-[14px] leading-tight text-center font-bold"
                style={{ color: "#572A06" }}
              >
                <div>きめ細やかな</div>
                <div>女性が対応</div>
              </div>
            </div>
            <div
              className={`rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-white ${
                animate ? "animate-badge-3" : ""
              }`}
              style={{
                width: "104px",
                height: "104px",
                backgroundColor: "#97cfff",
                transform: animate ? "" : "scale(0)",
              }}
            >
              <FaYenSign
                className="text-2xl mb-1"
                style={{ color: "#572A06" }}
              />
              <div
                className="text-[14px] leading-tight text-center font-bold"
                style={{ color: "#572A06" }}
              >
                <div>県内最安値を</div>
                <div>目指します</div>
              </div>
            </div>
          </div>

          {/* 吹き出しモバイル */}
          <div className="relative mb-6 -mt-12 z-10">
            <Image
              src="/images/fukidashi_mobile.svg"
              alt=""
              width={400}
              height={250}
              className="w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 px-8">
              <h4
                className="leading-relaxed text-gray-700"
                style={{ fontSize: "1.05rem" }}
              >
                ごみ屋敷、荒れた納屋、倉庫
                <br />
                家財の回収・仕分け・運び出しまで
                <br />
                解体専門のプロに
                <br />
                まとめてお任せください。
              </h4>
            </div>
          </div>

          {/* キャラクター */}
          <div className="flex flex-col items-center mb-4 -mt-12 w-full">
            <div
              className={`w-full ${animate ? "animate-character" : ""}`}
              style={{ transform: animate ? "" : "scale(0)" }}
            >
              <Image
                src="/images/character.svg"
                alt="メイプルキャラクター"
                width={350}
                height={365}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
