export interface Film {
  title: string;
  original: string;
  year: string;
  kind: '电影' | '剧集' | '动画';
  note?: string;
  cover: string;
}

/** 喜欢看的剧与电影。cover 放在 public/films/ 下 */
export const films: Film[] = [
  { title: '星际穿越', original: 'INTERSTELLAR', year: '2014', kind: '电影', cover: '/films/f-interstellar.jpg' },
  { title: '流浪地球', original: 'THE WANDERING EARTH', year: '2019', kind: '电影', cover: '/films/f-wandering-earth.jpg' },
  { title: '潜伏', original: 'LURK', year: '2009', kind: '剧集', cover: '/films/f-lurk.jpg' },
  { title: '进击的巨人', original: 'ATTACK ON TITAN', year: '2013', kind: '动画', cover: '/films/f-aot.jpg' },
  { title: '命运石之门', original: 'STEINS;GATE', year: '2011', kind: '动画', cover: '/films/f-steins-gate.jpg' },
];