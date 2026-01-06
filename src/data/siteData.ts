export type ProductItem = {
  title: string;
  description: string;
  image?: string;
};

export type ProductCategory = {
  key: string;
  label: string;
  heroImage: string;
  items: ProductItem[];
  specs?: string[];
};

export const productCategories: ProductCategory[] = [
  {
    key: "general",
    label: "일반가스",
    heroImage: "/images/common/sv2.jpg",
    items: [
      {
        title: "산소 (O₂)",
        image: "/images/products/oxygen.png",
        description:
          "산소는 불연성이며, 가연성 물질과 반응하는 조연성 가스입니다. RFCC, SRU, EO 및 VCM 산화 공정, 철강·유리 산업의 연소 공정에 활용됩니다. 용접·절단, 제지, 수처리, 의료, 2차전지 소재 제조 등 다양한 산업에 사용됩니다. 고순도 기체 및 액체 산소 형태로 공급 가능합니다.",
      },
      {
        title: "질소 (N₂)",
        image: "/images/products/nitrogen.png",
        description:
          "질소는 비활성 기체로, 반응 방지와 분위기 조성용으로 널리 사용됩니다. 반도체, 식품 포장, 화학 공정, 제약 산업에서 필수적인 공정용 가스입니다. 또한 극저온 냉각제 및 퍼지·가압용으로 활용됩니다. 고순도 기체 및 액체 질소 공급이 가능합니다.",
      },
      {
        title: "이산화탄소 (CO₂)",
        image: "/images/products/co2.png",
        description:
          "이산화탄소는 식음료 탄산화, 식품 보존, 용접 등에 사용됩니다. 드라이아이스 제조, 냉각 공정 및 화재 진압용으로도 활용됩니다. 화학·환경·플랜트 분야에서도 다양하게 쓰입니다. 기체 및 액체 상태로 안정적으로 공급 가능합니다.",
      },
      {
        title: "알곤 (Ar)",
        image: "/images/products/argon.jpg",
        description:
          "알곤은 비활성 기체로, 산화를 방지해야 하는 용접 및 반도체 공정에 필수입니다. TIG, MIG 용접과 금속 열처리, 특수 전구 제조 등에 사용됩니다. 반응성이 없어 고온·진공 환경에서도 안정적입니다. 고순도 알곤 가스 형태로 제공됩니다.",
      },
      {
        title: "수소 (H₂)",
        image: "/images/products/hydrogen.jpg",
        description:
          "수소는 고열 연소 특성을 지닌 가연성 가스로, 환원제 및 에너지원으로 사용됩니다. 반도체, 유리, 금속 열처리, 연료전지 및 수소에너지 분야에 활용됩니다. 고압 실린더, 트레일러, 액체 형태로 공급 가능합니다. 다양한 산업용 고순도 수소 제공이 가능합니다.",
      },
      {
        title: "아산화질소 (N₂O)",
        image: "/images/products/n2o.png",
        description:
          "아산화질소는 산화제 성격을 지닌 기체로, 의료용 마취제 및 진정제로 사용됩니다. 식품 산업에서는 휘핑크림 가스 등에도 활용됩니다. 반도체 공정이나 특수 화학 반응에도 사용 가능합니다. 안전한 용기로 기체 상태로 공급됩니다.",
      },
      {
        title: "헬륨 (He)",
        image: "/images/products/helium.png",
        description:
          "헬륨은 반응성이 거의 없는 비활성 기체로, 반도체, 광섬유, MRI 냉각, 누설 검사, 풍선 충전 등에 활용됩니다. 극저온 특성과 경량성을 갖춘 안정적인 가스입니다. 고순도 헬륨을 다양한 용기 형태로 공급합니다.",
      },
    ],
  },
  {
    key: "medical",
    label: "의료용가스",
    heroImage: "/images/common/sv2.jpg",
    items: [
      {
        title: "의료용 산소 (Medical Oxygen)",
        image: "/images/products/medical-oxygen.png",
        description:
          "호흡 치료 및 마취 보조용으로 사용되는 필수 의료 가스입니다. 응급처치, 중환자실, 수술실, 산소요법 등에 널리 활용됩니다. 고순도(99% 이상) 산소를 정밀하게 관리된 조건에서 공급합니다. 의료기기 및 병원용 실린더 형태로 안전하게 제공됩니다.",
      },
      {
        title: "의료용 질소 (Medical Nitrogen)",
        image: "/images/products/medical-nitrogen.jpg",
        description:
          "의료기기 작동, 의약품 저장 및 냉각에 사용되는 불활성 가스입니다. 조직 냉동 보존, 피부 냉동 치료 및 백신 유통에도 활용됩니다. 극저온 특성으로 안정적인 온도 유지가 가능합니다. 의료용 규격에 맞춰 액체 및 기체 형태로 공급됩니다.",
      },
      {
        title: "의료용 이산화탄소 (Medical Carbon Dioxide)",
        image: "/images/products/medical-co2.png",
        description:
          "수술 시 복부 확장용, 혈관 조영 및 호흡 자극에 사용됩니다. 의료용 레이저 장비나 pH 조절 용도로도 활용됩니다. 의료용 기준에 적합한 고순도 CO2를 안전하게 공급합니다. 기체 상태로 정밀한 압력·용량 관리가 가능합니다.",
      },
      {
        title: "의료용 아산화질소",
        image: "/images/products/medical-n2o.jpg",
        description:
          "의료 현장에서 진정 및 진통 목적으로 사용되는 의료용 가스입니다. 진료 시 환자의 긴장과 불안을 완화하며 편안한 처치를 돕습니다. 빠르게 작용하고 짧은 반감기로 안정적인 치료 지원이 가능합니다. 치과, 산부인과, 수술실 등 다양한 의료 영역에서 활용됩니다. 의료 규격에 맞춰 고순도 상태로 기체 용기에 충전되어 공급됩니다.",
      },
      {
        title: "멸균용 가스 (Sterilization Gases)",
        image: "/images/products/sterilization-gas.png",
        description:
          "EO(Ethylene Oxide), H2O2 등 의료기기 멸균에 사용되는 특수가스입니다. 저온에서도 살균 효과가 뛰어나 열에 민감한 기기 멸균에 적합합니다. 제약, 의료기기 산업에서 필수적인 멸균 솔루션을 제공합니다. 안전 규정에 맞춘 정밀한 농도 조절 및 포장 시스템을 운용합니다.",
      },
    ],
  },
  {
    key: "liquid",
    label: "액체가스",
    heroImage: "/images/common/sv2.jpg",
    items: [
      {
        title: "액체질소 (LN2)",
        image: "/images/products/nitrogen.png",
        description:
          "극저온 액체질소는 급속 냉각과 장기 보존에 적합해 금속 열처리, 식품·바이오 보관, 연구용 냉각에 널리 사용됩니다. 시료 보관, 콜드트랩, 공정 냉각 등 다양한 분야에서 안정적인 성능을 제공합니다. 안전한 취급이 가능한 LGC 용기로 판매합니다.",
      },
      {
        title: "액체알곤 (LAr)",
        image: "/images/products/argon.jpg",
        description:
          "불활성 액체알곤은 용접·금속가공 공정의 보호가스 용도로 활용되며, 고순도 공정에서도 안정적인 분위기 유지를 돕습니다. 산화 방지와 균일한 품질 확보가 필요한 생산 라인에 적합합니다. LGC 용기로 판매합니다.",
      },
      {
        title: "액체산소 (LO2)",
        image: "/images/products/liquid-oxygen.png",
        description:
          "고농도 산소를 액체 상태로 공급해 산업용 연소 효율 향상과 의료·연구 분야에 폭넓게 활용됩니다. 절단·용해 공정, 산소 농도 관리가 필요한 설비에도 안정적으로 공급됩니다. 안전한 취급이 가능한 LGC 용기로 판매합니다.",
      },
    ],
    specs: ["DPL-175MP", "DPL-175HP", "DPL-175XP"],
  },
  {
    key: "special",
    label: "특수가스",
    heroImage: "/images/common/sv2.jpg",
    items: [
      {
        title: "혼합가스 (Mixed Gases)",
        image: "/images/products/mixed-gas.png",
        description:
          "산업 및 연구 목적에 맞춘 맞춤형 조성 가스입니다. 분석용, 교정용, 용접, 의료, 환경 측정 등 다양한 용도에 적용됩니다. 정밀한 농도 제어 및 국제 규격 인증이 가능합니다. 사용 목적에 맞춘 고압 실린더 및 패키지 제공이 가능합니다.",
      },
      {
        title: "실험·분석용 희귀가스 (Rare Gases for Lab & Analysis)",
        image: "/images/products/rare-gas.png",
        description:
          "분석기기, 연구개발, 표준 교정용으로 사용되는 고순도 희귀가스입니다. He, Ne, Kr, Xe 등 고가·고순도 기체를 안정적으로 공급합니다.",
      },
    ],
  },
  {
    key: "lpg",
    label: "LPG",
    heroImage: "/images/common/sv2.jpg",
    items: [
      {
        title: "LPG (Liquefied Petroleum Gas)",
        image: "/images/products/lpg.jpg",
        description:
          "프로판(C3H8)과 부탄(C4H10)을 주성분으로 하는 고효율 청정에너지원입니다. 산업용 연료, 보일러, 난방, 조리, 차량 연료 등 다양한 용도로 사용됩니다. 에너지 밀도가 높고 연소 시 탄소 배출이 적어 친환경적입니다. 고압 용기 및 벌크 저장 탱크 형태로 안정적으로 공급됩니다.",
      },
    ],
  },
];

export const archivePosts = [
  {
    id: 2,
    title: "지난해 모범적인 활동을 이어간 여성기업인들에 대한 포상도 있었다. 제일가스산업 황옥화 대표가 세종시장상을",
    author: "관리자",
    date: "2025-07-24",
    views: 387,
  },
  {
    id: 1,
    title: "[인터뷰] 제일가스산업 황인달 사장",
    author: "관리자",
    date: "2025-07-21",
    views: 361,
  },
];

export const msdsPosts = [
  { id: 11, title: "이오가스 MSDS", author: "관리자", date: "2025-12-04", views: 49 },
  { id: 10, title: "헬륨 MSDS", author: "관리자", date: "2025-09-18", views: 91 },
  { id: 9, title: "에틸렌 MSDS", author: "관리자", date: "2025-09-18", views: 88 },
  { id: 8, title: "액화석유가스 MSDS", author: "관리자", date: "2025-09-18", views: 94 },
  { id: 7, title: "아산화질소 MSDS", author: "관리자", date: "2025-09-18", views: 82 },
  { id: 6, title: "알곤 MSDS", author: "관리자", date: "2025-09-18", views: 125 },
  { id: 5, title: "메탄 MSDS", author: "관리자", date: "2025-09-18", views: 90 },
  { id: 4, title: "수소 MSDS", author: "관리자", date: "2025-09-18", views: 80 },
  { id: 3, title: "이산화탄소 MSDS", author: "관리자", date: "2025-09-18", views: 90 },
  { id: 2, title: "질소 MSDS", author: "관리자", date: "2025-09-18", views: 120 },
  { id: 1, title: "산소 MSDS", author: "관리자", date: "2025-09-18", views: 115 },
];
