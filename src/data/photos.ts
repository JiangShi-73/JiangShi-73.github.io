export interface Photo {
  src: string;
  title: string;
  place: string;
  date: string;
  ratio?: 'portrait' | 'landscape';
}

/** 想换图：把文件丢进 public/photos/，然后改这里的 src */
export const photos: Photo[] = [
  { src: '/photos/dusk.svg', title: '傍晚六点的天', place: '杭州 · 西湖边', date: '2026.09' },
  { src: '/photos/forest.svg', title: '雨后', place: '莫干山', date: '2026.07' },
  { src: '/photos/ocean.svg', title: '海雾', place: '舟山', date: '2026.05' },
  { src: '/photos/neon.svg', title: '霓虹', place: '上海 · 静安', date: '2026.03' },
  { src: '/photos/desert.svg', title: '沙丘边缘', place: '敦煌', date: '2025.10' },
  { src: '/photos/snow.svg', title: '落雪', place: '哈尔滨', date: '2025.12' },
  { src: '/photos/blossom.svg', title: '樱花开了', place: '无锡 · 鼋头渚', date: '2026.03' },
  { src: '/photos/city.svg', title: '夜里的窗', place: '杭州', date: '2026.01' },
];
