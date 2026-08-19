export type Project = {
  title: string;
  year: string;
  role: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "TouchDesigner Bangkok Meetup",
    year: "2026",
    role: "Live AV Performance",
    description: "ZDepth UG와 함께한 방콕 투어. Bangkok Kunsthalle에서 라이브 오디오비주얼 퍼포먼스.",
    techStack: ["TouchDesigner", "Live AV Performance"],
    demoUrl: "https://youtu.be/Wnl0ChdBteg?si=QfY5PU8Dya62gyP5",
  },
  {
    title: "Value of Fragment",
    year: "2026",
    role: "Live AV Performance",
    description: "VIRA와 Beton Brut [CROSSBREED]에서 선보인 라이브 셋. 파편적 사운드와 생성 비주얼의 실험적 결합.",
    techStack: ["Hardware Synthesizers", "Generative Visual", "TouchDesigner"],
    demoUrl: "https://www.instagram.com/p/DU5x5Hwk3jQ",
  },
  {
    title: "APE CAMP",
    year: "2026",
    role: "AV Performance",
    description: "한국문화예술위원회 지원 프로그램. 마곡 COEX에서 진행된 APE CAMP 참여 퍼포먼스.",
    techStack: ["Live AV Performance", "Sound Design"],
  },
  {
    title: "shinnjiwoong 〈Release Showcase〉",
    year: "2026",
    role: "VJ",
    description: "신지웅 <목신의 오후> 쇼케이스 VJ. @01.haus House Eternal에서 진행.",
    techStack: ["Resolume Arena", "VJ"],
  },
  {
    title: "Ordinary Latency",
    year: "2026",
    role: "Sound · Media Art · Interactive Art",
    description: "성남문화재단 지원. 청년예술활동지원사업 개인전. Art×Tech Creative Lab에서 사운드, 미디어아트, 인터랙티브 아트 작업 발표 (8월 예정).",
    techStack: ["TouchDesigner", "Interactive Art", "Sound Design"],
    demoUrl: "https://youtu.be/byYgvR-OdDI?si=D7TlQibJ9Ta9zKkn",
  },
  {
    title: "City in hz",
    year: "2026",
    role: "Sound · Laser Art",
    description: "성남문화재단 기술융합실험실 참여 작품. 사운드와 레이저 아트의 결합. 신효흔 협업 (11월 예정).",
    techStack: ["Sound Design", "Laser Art", "TouchDesigner"],
  },
  {
    title: "아트코리아랩 수퍼테스트베드",
    year: "2025",
    role: "Sound Advisor · System Design",
    description: "<달리와보기> 사운드 어드바이저 및 VCV Rack 사운드 생성 시스템 설계. <Drivephonic> BGM/SFX 제작 및 TouchDesigner 사운드 인터랙티브 시스템 설계.",
    techStack: ["VCV Rack", "TouchDesigner", "Sound Design"],
  },
  {
    title: "Immersive Nature — 성남페스티벌",
    year: "2025",
    role: "BGM · AI Audio · Interactive Art",
    description: "성남페스티벌 T.A.G. SEONGNAM (Technology · Arts · Game) 참여. 희망대 근린공원에서 몰입형 자연 체험 설치.",
    techStack: ["AI Audio", "Sound Design", "Interactive Art"],
  },
  {
    title: "Seongnam Upscaling",
    year: "2025",
    role: "Performance · BGM · Interactive Art",
    description: "성남문화재단 지원 프로그램 참여. 전시 내 퍼포먼스, BGM 제작, 인터랙티브 아트, 오디오 시스템 프로덕션.",
    techStack: ["Sound Design", "Interactive Art", "Audio System"],
  },
  {
    title: "Reality Realization",
    year: "2025",
    role: "Media Art",
    description: "경기창조경제혁신센터 7F, 경기콘텐츠코리아랩에서 선보인 미디어아트 전시.",
    techStack: ["TouchDesigner", "Media Art", "Projection Mapping"],
  },
  {
    title: "고흥분청사기 미디어아트",
    year: "2024",
    role: "Audiovisual Media Art · Projection Mapping",
    description: "문화재청·고흥군 지원. 전통 분청사기를 디지털 인터랙티브 미디어로 재해석. 고흥분청문화박물관 (2024.09.13–10.06). 공모전 대상 수상.",
    techStack: ["Projection Mapping", "TouchDesigner", "Media Art"],
  },
  {
    title: "Seocho M.Stars",
    year: "2023–2025",
    role: "Album Production · Performance",
    description: "서초문화재단 지원 프로그램. 기획 앨범 제작 및 퍼포먼스.",
    techStack: ["Sound Design", "Ableton Live", "Performance"],
  },
  {
    title: "Eminsen 2023 — Selective Illusion",
    year: "2023",
    role: "Audiovisual Performance",
    description: "에민센과 함께한 오디오비주얼 퍼포먼스 <Selective Illusion>.",
    techStack: ["Live AV Performance", "Hardware Synthesizers", "Generative Visual"],
  },
];
