import { reading } from '../models/reading';
let reading: reading[] = [
  {
    id: 1,
    type: 'water',
    value: 120,
    date: new Date()
  },
  {
    id: 2,
    type: 'gas',
    value: 80,
    date: new Date()
  },
      ];
export const readingService =
{
  getreading: (): reading[] => {
            return reading;
  },
  getreadingById: (id: number): reading | undefined => {
        return reading.find(reading => reading.id === id);
  },
  createreading: (getreading: reading): reading => {
    getreading.id = reading.length + 1; reading.push(getreading);
    return getreading;
  },
  updatedreading: (id: number, _Readingupdated: reading): reading | undefined => {
    const index = reading.findIndex(
      reading => reading.id === id);
    if (index !== -1) {
      reading[index] = { ..._Readingupdated , id };
      return reading[index];
    }
        return undefined;
  },
  deletereading: (id: number): boolean => {
    const index = reading.findIndex((reading: { id: number; }) => reading.id === id); if (index !== -1) {
        reading.splice(index, 1); return true;
    }
    return false;
  }
};
