export type Project = {
  title: string;
  year: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Visual To Audio Series",
    year: "2025",
    description:
      "자연의 시각 데이터를 실시간 음향으로 변환하는 생성 예술 시리즈. 연못의 빗방울, 산불 영상, 백조의 움직임 등 자연 현상을 실시간으로 분석해 반복되지 않는 유일한 소리를 만든다.",
    techStack: ["TouchDesigner", "VCV Rack"],
    demoUrl: "https://vhs60.myportfolio.com/visual-to-audio",
  },
  {
    title: "Audiovisual Series",
    year: "2025",
    description:
      "하드웨어 신시사이저, 드럼 머신, 시퀀서를 실시간 생성 비주얼과 결합하는 오디오비주얼 퍼포먼스 시리즈. 아날로그 장비 특유의 불규칙성과 디지털 생성 이미지가 교차하는 독자적 미학을 구축한다.",
    techStack: ["Hardware Synthesizers", "Drum Machine", "Sequencer", "Generative Visual"],
    demoUrl: "https://vhs60.myportfolio.com/audiovisual",
  },
  {
    title: "아트코리아랩 수퍼테스트베드 2025",
    year: "2025",
    description:
      "아트코리아랩 주최 전시 참여. <달리와보기> 퍼포먼스의 사운드 어드바이저로 참여하고, <Drivephonic>의 사운드 인터랙티브 시스템을 제작. 미니어처 자동차의 실시간 움직임 데이터를 시각·음향 구조로 변환.",
    techStack: ["TouchDesigner", "VCV Rack", "Sound Design"],
    demoUrl: "https://vhs60.myportfolio.com/2025",
  },
  {
    title: "Immersive Nature 성남페스티벌 2025",
    year: "2025",
    description:
      "성남페스티벌에서 선보인 몰입형 자연 체험 설치. BGM 제작 및 AI 오디오 보이스 구현을 담당.",
    techStack: ["Sound Design", "AI Audio"],
    demoUrl: "https://vhs60.myportfolio.com/immersive-nature-2025",
  },
  {
    title: "고흥분청사기 미디어아트 전시 2024",
    year: "2024",
    description:
      "한국 전통 도자기인 분청사기를 디지털 인터랙티브 미디어로 재해석한 전시. 프로젝션 매핑과 인터랙티브 오디오 시스템으로 전통 공예의 질감을 현대적 감각으로 변환. 「고흥분청사기 미디어아트 별빛모색」 대상 수상.",
    techStack: ["Projection Mapping", "Interactive Audio", "Media Art"],
    demoUrl: "https://vhs60.myportfolio.com/exhibition",
  },
];
