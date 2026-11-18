export interface Track {
  title: string;
  artist: string;
  note?: string;
  cover: string;
  /** 网易云歌曲 ID，用于行内播放器 */
  neteaseId: number;
}

/** 喜欢的歌。cover 放在 public/covers/ 下 */
export const tracks: Track[] = [
  { title: '血液型', artist: 'Кино', note: 'Группа крови，1988', cover: '/covers/kino-blood.jpg', neteaseId: 26668133 },
  { title: '夜如此寂静', artist: 'Кино', note: 'Спокойная ночь，1989', cover: '/covers/kino-night.jpg', neteaseId: 26710593 },
  { title: '沧海一粟', artist: '刘森', cover: '/covers/liusen-emei.jpg', neteaseId: 3437177548 },
  { title: '深海', artist: '刘森', cover: '/covers/liusen-shenhai.jpg', neteaseId: 1860234945 },
  { title: '峨眉', artist: '刘森', cover: '/covers/liusen-emei.jpg', neteaseId: 3353911366 },
  { title: 'Promise', artist: '山冈晃', note: '寂静岭 2 OST', cover: '/covers/yamaoka-promise.jpg', neteaseId: 18861490 },
  { title: '微茫', artist: '塞壬唱片-Monster Siren', note: '去咧嘴谷 OST', cover: '/covers/siren-weimang.jpg', neteaseId: 2115755857 },
  { title: '赴大荒', artist: '塞壬唱片-Monster Siren', note: '怀黍离 OST', cover: '/covers/siren-fudahuang.jpg', neteaseId: 2124415181 },
];