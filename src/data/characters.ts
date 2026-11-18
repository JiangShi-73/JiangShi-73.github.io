export interface Character {
  name: string;
  source: string;
  original?: string;
  note?: string;
  image: string;
}

/** 喜欢的角色。image 放在 public/characters/ 下 */
export const characters: Character[] = [
  { name: '泥岩', source: '明日方舟', note: '精英二立绘', image: '/characters/mudrock-1.png' },
  { name: '泥岩', source: '明日方舟', note: '音律联觉 · 2022', image: '/characters/mudrock-2.png' },
  { name: '泥岩', source: '明日方舟', note: '皮肤立绘', image: '/characters/mudrock-3.png' },
];