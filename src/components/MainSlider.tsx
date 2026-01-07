import Image from "next/image";

const BANNER_IMAGE = "/images/main/mv2.jpg";

export default function MainSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[320px] md:h-[520px]">
        <Image
          src={BANNER_IMAGE}
          alt="메인 배너"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <p className="text-xl font-semibold leading-snug md:text-4xl">
            <span className="block">안전을 기본으로 책임을 원칙으로</span>
            <span className="block">신뢰에 보답하겠습니다.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
