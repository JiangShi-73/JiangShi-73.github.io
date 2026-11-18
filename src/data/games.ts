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
    title: '明日方舟',
    subtitle: 'ARKNIGHTS',
    year: '2019',
    platform: 'iOS / Android',
    note: 'ID 威远纤夫。希望大家来加我好友。',
    cover: '/games/g-arknights.jpg',
  },
  {
    title: 'CS2',
    subtitle: 'COUNTER-STRIKE 2',
    year: '2023',
    platform: 'PC',
    note: '打得很菜，但还在打。',
    cover: '/games/g-cs2.jpg',
  },
];