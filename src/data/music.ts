export interface Track {
  title: string;
  artist: string;
  note?: string;
  link?: string;
}

/** 喜欢的歌。link 可以是网易云 / Spotify / YouTube 的地址 */
export const tracks: Track[] = [
  { title: 'Sunset Lover', artist: 'Petit Biscuit', note: '单曲循环最多的一首', link: 'https://music.163.com/' },
  { title: 'Divenire', artist: 'Ludovico Einaudi', note: '写东西的时候放' },
  { title: 'Weightless', artist: 'Marconi Union', note: '睡不着会听' },
  { title: '夜空中最亮的星', artist: '逃跑计划' },
  { title: 'Intro', artist: 'The xx', note: '前奏比歌更出名' },
  { title: '海上钢琴师 · Playing Love', artist: 'Ennio Morricone' },
  { title: 'Bloom', artist: 'The Paper Kites' },
  { title: 'Merry Christmas Mr. Lawrence', artist: '坂本龍一', note: '每年冬天都会回来听' },
];
