import type { Position } from '~/models/Position';
/**
 * Todo:
 * ・線を引く際の計算方法（例: 30度)
 *  ・tan30 = 0.57735026919... ≒ 0.6
 *  ・0.6 = 6/10 = 3/5
 *  ・X=5進むとY=3進む
 *      ・ここの計算ロジック深掘る
 * ・精度
 *  ・基本は精度1倍（小数点以下第1位まで）
 *      ・精度を2, 3, 4倍まで選べ、小数点以下の桁数が増える
 * ・or プレゼンハムのアルゴリズムなど？
 *  ・https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%8F%E3%83%A0%E3%81%AE%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0
 */

/**
 * 決められた範囲の中で任意の角度でドットを描画するときの周期の範囲を求める
 * @param deg 角度
 * @param maxIter 範囲
 * @returns [0, 0]から見た時その角度の直線を描画する際最初に中心近くを通る座標
 */
export function findClosestCell(deg: number, maxIter = 256): Position {
  const radians = (deg * Math.PI) / 180;
  const dx = Math.cos(radians);
  const dy = Math.sin(radians);

  let bestX = 0,
    bestY = 0;
  let minError = Infinity;

  // (0,0) から進む
  for (let t = 1; t < maxIter; t++) {
    const x = Math.round(t * dx);
    const y = Math.round(t * dy);

    const cx = x + 0.5;
    const cy = y + 0.5;

    // 直線 y = (dy/dx) * x + C に対する誤差
    const error = Math.abs(cx * dy - cy * dx);

    if (error < minError) {
      minError = error;
      bestX = x;
      bestY = y;
    }

    // 完全に直線を通るなら即終了
    if (error === 0) break;
  }

  return { x: bestX, y: bestY };
}
