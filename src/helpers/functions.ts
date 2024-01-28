export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const encounter = (
  encounterCoolDown: number,
  callback: (num: number) => void
): boolean => {
  if (encounterCoolDown <= 0) {
    const ramdomNum: number = Math.floor(Math.random() * 100);

    if (ramdomNum === 50) {
      encounterCoolDown = 5000;
      callback(encounterCoolDown);
      return true;
    }
  }
  return false;
};

export function getRandomElementsFromArray<T>(arr: T[], count: number): T[] {
  const shuffledArray = [...arr]; // 元の配列を複製する
  let currentIndex = shuffledArray.length;

  // フィッシャー・イェーツのアルゴリズムでシャッフル
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 要素を交換
    const temp = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temp;
  }

  // 指定の数だけ要素を取得
  return shuffledArray.slice(0, count);
}
