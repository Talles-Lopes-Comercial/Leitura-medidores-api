export interface reading {
  id: number;
  type: 'water' | 'gas';
  value: number;
  date: Date;
}
