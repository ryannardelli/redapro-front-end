export function getScoreStyle(score: number): string {
  if (score >= 900) {
    return "bg-emerald-50 text-emerald-700 border-emerald-100";
  }
  if (score >= 600) {
    return "bg-amber-50 text-amber-700 border-amber-100";
  }
  return "bg-rose-50 text-rose-700 border-rose-100";
}