import { TContributionDayType } from '@apis/github/route';
import { DEFAULT_MONTH_LABELS } from '@constants/label';
import dayjs from 'dayjs';

export const getMonthLabels = (
  weeks: {
    contributionDays: TContributionDayType[];
  }[],
) => {
  return weeks
    .reduce<{ label: string; index: number }[]>((prev, cur, idx) => {
      const firstDay = dayjs(cur.contributionDays[0].date).month();
      const currentMonth = DEFAULT_MONTH_LABELS[firstDay];
      const prevMonth = prev[prev.length - 1]?.label;

      if (idx === 0 || currentMonth !== prevMonth) {
        return [...prev, { label: currentMonth, index: idx }];
      }
      return prev;
    }, [])
    .reduce<{ label: string; colSpan: number }[]>(
      (labels, current, idx, origin) => {
        if (idx === origin.length - 1) {
          const span = weeks.length - idx;
          return [
            ...labels,
            {
              label: current.label,
              colSpan: span,
            },
          ];
        }
        const currentSpan = origin[idx + 1].index - current.index;
        return [
          ...labels,
          {
            label: current.label,
            colSpan: currentSpan,
          },
        ];
      },
      [],
    );
};
