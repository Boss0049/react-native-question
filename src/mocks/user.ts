export interface ILeaderboardEntry {
  name: string;
  score: number;
}

export const leaderboardData: ILeaderboardEntry[] = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 70 },
  { name: "Hello", score: 60 },
  { name: "World", score: 50 },
];

export const rankFiveColor: string[] = [
  "#FE3D00",
  "#FE8125",
  "#ffb714",
  "#DF51CF",
  "#A138DF",
];
