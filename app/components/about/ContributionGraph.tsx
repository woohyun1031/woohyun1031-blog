'use client';

import React from 'react';
import getContributionList from '@api/github/apis';
import { IContributionInfo, TContributionDayType } from '@api/github/route';
import { getMonthLabels } from '@utils/github/contribution';
import { label } from '@constants/label';

export default function ContributionGraph({ username }: { username?: string }) {
  const [totalContributions, setTotalContributions] = React.useState<number>(0);
  const [weeks, setWeeks] = React.useState<
    {
      contributionDays: TContributionDayType[];
    }[]
  >([]);

  React.useEffect(() => {
    getContributionList(username)
      .then((res) => res.json())
      .then((result: IContributionInfo) => {
        setTotalContributions(result.totalContributions);
        setWeeks(result.weeks);
      })
      .catch(() => {});
  }, [username]);

  return (
    <>
      <div>
        <span className="font-sansM text-base text-gray-700 duration-300 ease-in-out dark:text-gray-300 sm:text-lg">
          {totalContributions}
        </span>
        <span className="font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base">
          {' '}
          contributions in the last year
        </span>
      </div>
      <div className="relative mt-3 w-full overflow-auto whitespace-nowrap">
        <table className="table-fixed border-separate border-spacing-[3px] ">
          <thead>
            <tr className="h-[30px]">
              <td className="sticky left-0 w-[28px] bg-white duration-300 ease-in-out dark:bg-black">
                <span className="hidden">Day of Week</span>
              </td>
              {getMonthLabels(weeks).map(({ label: text, colSpan }) => (
                <td colSpan={colSpan} className="pb-2">
                  <span className="text-xs font-bold text-gray-700 duration-300 ease-in-out dark:text-gray-300">
                    {text}
                  </span>
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {label.week.map((day, index) => {
              const isOdd = Boolean(index % 2);
              return (
                <tr key={day} className="table-row">
                  <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                    <span className="text-xs font-bold text-gray-700 duration-300 ease-in-out dark:text-gray-300">
                      {isOdd && day}
                    </span>
                  </td>
                  {weeks
                    ? weeks
                        .filter((week) => !!week.contributionDays?.[index])
                        .map((week) => {
                          const target = week.contributionDays[index];
                          return (
                            <td
                              key={target.date}
                              className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500"
                            >
                              <span
                                className={`${
                                  target.contributionCount
                                    ? 'text-sm text-gray-700 dark:text-gray-50'
                                    : 'text-xs text-gray-300 dark:text-gray-500'
                                }`}
                              >
                                {target.contributionCount}
                              </span>
                            </td>
                          );
                        })
                    : [...new Array(7).fill(0)].map(() => (
                        <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                          <span className="text-xs text-gray-300 dark:text-gray-500">
                            0
                          </span>
                        </td>
                      ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
