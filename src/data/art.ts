export interface ArtPiece {
  title: string;
  src: string;
  meta: string;
  year: string;
}

/** 画。src 放在 public/art/ 下；meta 为作者或媒介 */
export const artworks: ArtPiece[] = [];