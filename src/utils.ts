import { differenceInCalendarDays, format, isToday, isYesterday } from 'date-fns';

// Returns 'Today', 'Yesterday', weekday, or date string
export function formatTransactionDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  const now = new Date();
  if (differenceInCalendarDays(now, date) < 7) {
    return format(date, 'EEEE');
  }
  return format(date, 'M/d/yy');
}

// Points calculation based on the spec
export function calculateDailyPoints(seasonStart: Date, current: Date): number {
  const day = differenceInCalendarDays(current, seasonStart) + 1;
  if (day === 1) return 2;
  if (day === 2) return 3;
  let prev = 3, prevPrev = 2, points = 0;
  for (let i = 3; i <= day; i++) {
    points = Math.round(prev * 0.6 + prevPrev);
    prevPrev = prev;
    prev = points;
  }
  return points;
}

// Format points as 'K' if over 1000, 'M' if over 1,000,000
export function formatPoints(points: number): string {
  if (points >= 1_000_000_000) return '999.9M+';
  if (points >= 1_000_000) return `${(points / 1_000_000).toFixed(1)}M`;
  if (points >= 1_000) return `${(points / 1_000).toFixed(1)}K`;
  return points.toString();
} 