"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  image: string;
  text: string[];
  position?: string;
};

const SLIDES: Slide[] = [
  {
    image: "/images/main/mv1.jpg",
    text: ["안전은 모든 것의 시작입니다."],
  },
  {
    image: "/images/main/mv2.jpg",
    text: ["허가받은 의료용 가스 공급,", "정확한 품질 관리와 안전성을 보장합니다."],
    position: "50% 10%",
  },
  {
    image: "/images/main/mv3.jpg",
    text: [
      "신뢰할 수 있는 산업용 가스공급,",
      "고품질 가스를 안정적으로 제공하여 귀사에 효율성을 지원합니다.",
    ],
  },
];

export default function MainSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [playing]);

  const current = useMemo(() => SLIDES[index], [index]);

  const goPrev = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => setIndex((prev) => (prev + 1) % SLIDES.length);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-black">
      <div className="relative h-[320px] md:h-[520px]">
        <img
          src={current.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={current.position ? { objectPosition: current.position } : undefined}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <p className="text-lg font-semibold leading-snug md:text-3xl">
            {current.text.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 w-[90%] -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full bg-black/60 px-4 py-2 text-xs text-white md:text-sm">
          <div className="flex items-center gap-3">
            <span>
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            <div className="h-1 w-20 overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full bg-white"
                style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={goPrev} className="rounded-full bg-white/15 px-3">
              이전
            </button>
            {playing ? (
              <button
                type="button"
                onClick={() => setPlaying(false)}
                className="rounded-full bg-white/15 px-3"
              >
                일시정지
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="rounded-full bg-white/15 px-3"
              >
                재생
              </button>
            )}
            <button type="button" onClick={goNext} className="rounded-full bg-white/15 px-3">
              다음
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
