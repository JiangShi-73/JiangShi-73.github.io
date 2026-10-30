export interface Game {
  title: string;
  subtitle: string;
  year: string;
  platform: string;
  note: string;
  cover: string;
}

/** 喜欢的游戏。cover 放在 public/games/ 下 */
export const games: Game[] = [
  {
    title: '死亡搁浅',
    subtitle: 'DEATH STRANDING',
    year: '2019',
    platform: 'PS5 / PC',
    note: '把送货做成了史诗。走路这件事，被它讲得比战斗还紧张。',
    cover: '/games/g-stranding.svg',
  },
  {
    title: '空洞骑士',
    subtitle: 'HOLLOW KNIGHT',
    year: '2017',
    platform: 'PC / Switch',
    note: '地图会骗你，音乐不会。圣巢是那种走进去就不想出来的地方。',
    cover: '/games/g-hollow.svg',
  },
  {
    title: '塞尔达传说：旷野之息',
    subtitle: 'BREATH OF THE WILD',
    year: '2017',
    platform: 'Switch',
    note: '第一次觉得"看到那座山就能爬上去"是句实话。',
    cover: '/games/g-zelda.svg',
  },
  {
    title: '极乐迪斯科',
    subtitle: 'DISCO ELYSIUM',
    year: '2019',
    platform: 'PC',
    note: '没有一个对话是白写的。玩完之后会想读点政治哲学。',
    cover: '/games/g-disco.svg',
  },
  {
    title: '星际拓荒',
    subtitle: 'OUTER WILDS',
    year: '2019',
    platform: 'PC / PS5',
    note: '唯一一个"知识是唯一存档"的游戏。知道得越多，越不敢往下走。',
    cover: '/games/g-outer.svg',
  },
  {
    title: '明日方舟',
    subtitle: 'ARKNIGHTS',
    year: '2019',
    platform: 'iOS / Android',
    note: '世界观和美术撑着的一部长篇。也是这个站视觉的来处。',
    cover: '/games/g-arknights.svg',
  },
];
