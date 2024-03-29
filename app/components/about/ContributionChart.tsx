'use client';

import React from 'react';
import getContributionList from '@apis/github/apis';
import { IContributionInfo, TContributionDayType } from '@apis/github/route';

export default function ContributionChart({ username }: { username?: string }) {
  const [contributionInfo, setContributionInfo] =
    React.useState<IContributionInfo>();

  const contributionDays = contributionInfo?.weeks.reduce((prev, cur) => {
    return prev.concat(cur.contributionDays);
  }, [] as TContributionDayType[]);

  console.log(contributionInfo?.weeks);

  React.useState(() => {
    getContributionList(username)
      .then(async (res) => await res.json())
      .then((result: IContributionInfo) => {
        setContributionInfo(result);
      })
      .catch((e) => {});
  });

  return (
    <>
      <div>
        <span className="font-sansM text-base text-gray-700 duration-300 ease-in-out dark:text-gray-300 sm:text-lg">
          {contributionInfo?.totalContributions}
        </span>
        <span className="font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base">
          {' '}
          contributions in the last year
        </span>
      </div>
      <div className="relative w-full overflow-auto whitespace-nowrap">
        <table className="table-fixed border-separate border-spacing-[3px]">
          <thead>
            <tr className="h-[13px]">
              <td className="w-[28px]">
                <span className="hidden">Day of Week</span>
              </td>
            </tr>
          </thead>

          <tbody>
            <tr className="table-row">
              <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                <span className="text-xs"></span>
              </td>
              {contributionInfo?.weeks
                .filter((week) => !!week.contributionDays?.[0])
                .map((week) => {
                  const targetCnt = week.contributionDays[0].contributionCount;
                  return (
                    <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                      <span
                        className={`${
                          targetCnt
                            ? 'text-sm text-gray-700 dark:text-gray-50'
                            : 'text-xs text-gray-300 dark:text-gray-500'
                        }`}
                      >
                        {targetCnt}
                      </span>
                    </td>
                  );
                })}
            </tr>
            <tr className="table-row">
              <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                <span className="text-xs font-bold text-gray-700 duration-300 ease-in-out dark:text-gray-300">
                  MON
                </span>
              </td>
              {contributionInfo?.weeks
                .filter((week) => !!week.contributionDays?.[1])
                .map((week) => {
                  const targetCnt = week.contributionDays[1].contributionCount;
                  return (
                    <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                      <span
                        className={`${
                          targetCnt
                            ? 'text-sm text-gray-700 dark:text-gray-50'
                            : 'text-xs text-gray-300 dark:text-gray-500'
                        }`}
                      >
                        {targetCnt}
                      </span>
                    </td>
                  );
                })}
            </tr>
            <tr className="table-row">
              <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                <span className="text-xs"></span>
              </td>
              {contributionInfo?.weeks
                .filter((week) => !!week.contributionDays?.[2])
                .map((week) => {
                  const targetCnt = week.contributionDays[2].contributionCount;
                  return (
                    <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                      <span
                        className={`${
                          targetCnt
                            ? 'text-sm text-gray-700 dark:text-gray-50'
                            : 'text-xs text-gray-300 dark:text-gray-500'
                        }`}
                      >
                        {targetCnt}
                      </span>
                    </td>
                  );
                })}
            </tr>
            <tr className="table-row">
              <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                <span className="text-xs font-bold text-gray-700 duration-300 ease-in-out dark:text-gray-300">
                  WEN
                </span>
              </td>
              {contributionInfo?.weeks
                .filter((week) => !!week.contributionDays?.[3])
                .map((week) => {
                  const targetCnt = week.contributionDays[3].contributionCount;
                  return (
                    <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                      <span
                        className={`${
                          targetCnt
                            ? 'text-sm text-gray-700 dark:text-gray-50'
                            : 'text-xs text-gray-300 dark:text-gray-500'
                        }`}
                      >
                        {targetCnt}
                      </span>
                    </td>
                  );
                })}
            </tr>
            <tr className="table-row">
              <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                <span className="text-xs"></span>
              </td>
              {contributionInfo?.weeks
                .filter((week) => !!week.contributionDays?.[4])
                .map((week) => {
                  const targetCnt = week.contributionDays[4].contributionCount;
                  return (
                    <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                      <span
                        className={`${
                          targetCnt
                            ? 'text-sm text-gray-700 dark:text-gray-50'
                            : 'text-xs text-gray-300 dark:text-gray-500'
                        }`}
                      >
                        {targetCnt}
                      </span>
                    </td>
                  );
                })}
            </tr>
            <tr className="table-row">
              <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                <span className="text-xs font-bold text-gray-700 duration-300 ease-in-out dark:text-gray-300">
                  FRI
                </span>
              </td>
              {contributionInfo?.weeks
                .filter((week) => !!week.contributionDays?.[5])
                .map((week) => {
                  const targetCnt = week.contributionDays[5].contributionCount;
                  return (
                    <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                      <span
                        className={`${
                          targetCnt
                            ? 'text-sm text-gray-700 dark:text-gray-50'
                            : 'text-xs text-gray-300 dark:text-gray-500'
                        }`}
                      >
                        {targetCnt}
                      </span>
                    </td>
                  );
                })}
            </tr>
            <tr className="table-row">
              <td className="sticky left-0 table-cell min-w-[40px] bg-white pr-2 text-right duration-300 ease-in-out dark:bg-black">
                <span className="text-xs"></span>
              </td>
              {contributionInfo?.weeks
                .filter((week) => !!week.contributionDays?.[6])
                .map((week) => {
                  const targetCnt = week.contributionDays[6].contributionCount;
                  return (
                    <td className="table-cell min-w-[28px] cursor-pointer rounded-sm border border-gray-300 text-center dark:border-gray-500">
                      <span
                        className={`${
                          targetCnt
                            ? 'text-sm text-gray-700 dark:text-gray-50'
                            : 'text-xs text-gray-300 dark:text-gray-500'
                        }`}
                      >
                        {targetCnt}
                      </span>
                    </td>
                  );
                })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
