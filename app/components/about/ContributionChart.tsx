'use client';

import React from 'react';
import getContributionList from '@apis/github/apis';
import { IContributionInfo } from '@apis/github/route';
import { getMonthLabels } from '@utils/github/contribution';

export default function ContributionChart({ username }: { username?: string }) {
  const [contributionInfo, setContributionInfo] =
    React.useState<IContributionInfo>();

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
      <div className="relative mt-3 w-full overflow-auto whitespace-nowrap">
        <table className="table-fixed border-separate border-spacing-[3px] ">
          <thead>
            <tr className="h-[30px]">
              <td className="sticky left-0 w-[28px] bg-white duration-300 ease-in-out dark:bg-black">
                <span className="hidden">Day of Week</span>
              </td>
              {getMonthLabels(contributionInfo?.weeks ?? []).map(
                ({ label, colSpan }) => (
                  <td colSpan={colSpan} className="pb-2">
                    <span className="text-xs font-bold text-gray-700 duration-300 ease-in-out dark:text-gray-300">
                      {label}
                    </span>
                  </td>
                ),
              )}
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
                  Mon
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
                  Wen
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
                  Fri
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
