import { calculateDailyPoints, formatPoints } from './utils';

describe('calculateDailyPoints', () => {
  it('returns 2 for the first day', () => {
    const start = new Date('2023-09-01');
    expect(calculateDailyPoints(start, new Date('2023-09-01'))).toBe(2);
  });
  it('returns 3 for the second day', () => {
    const start = new Date('2023-09-01');
    expect(calculateDailyPoints(start, new Date('2023-09-02'))).toBe(3);
  });
  it('calculates points for the third day', () => {
    const start = new Date('2023-09-01');
    // Day 3: 100% of day 1 (2) + 60% of day 2 (3) = 2 + 1.8 = 3.8 => 4
    expect(calculateDailyPoints(start, new Date('2023-09-03'))).toBe(4);
  });
  it('calculates points for the fourth day', () => {
    const start = new Date('2023-09-01');
    // Day 4: prevPrev=3, prev=4; 3 + 0.6*4 = 3 + 2.4 = 5.4 => 5
    expect(calculateDailyPoints(start, new Date('2023-09-04'))).toBe(5);
  });
});

describe('formatPoints', () => {
  it('formats less than 1,000 as is', () => {
    expect(formatPoints(999)).toBe('999');
  });
  it('formats thousands as K', () => {
    expect(formatPoints(1234)).toBe('1.2K');
    expect(formatPoints(999999)).toBe('1000.0K');
  });
  it('formats millions as M', () => {
    expect(formatPoints(1234567)).toBe('1.2M');
    expect(formatPoints(999999999)).toBe('1000.0M');
  });
  it('caps at 999.9M+', () => {
    expect(formatPoints(1000000000)).toBe('999.9M+');
    expect(formatPoints(5000000000)).toBe('999.9M+');
  });
}); 