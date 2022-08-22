import { IEvent } from '@/interfaces';


export const getEventFields = (arr: any[]): IEvent[] => arr.map(
  ({ start, summary, id }) => ({
    id,
    summary,
    time: start.dateTime.slice(11, 16)
  })
);

export const getTime = (date: Date) => {
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return {
    time: time.slice(0, -2),
    timeFormat: time.slice(-2)
  };
};

export const getDay = (date: Date) => date.toLocaleDateString('en-GB', {
  day: 'numeric',
  weekday: 'long',
  month: 'long',
  year: 'numeric',
});
