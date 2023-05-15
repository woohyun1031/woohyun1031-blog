import { getGithubCommitList, IPushEventPayload } from '#pages/api/github';
import GitHubCalendar from 'react-github-calendar';
import { ICommitData, IEventData } from '#pages/api/github';
import dayjs from 'dayjs';
import GithubCalendar from './githubCalendar';
import { getNotionPages, IPage } from '#pages/api/notion';
import Link from 'next/link';

interface ICustomCommitData extends ICommitData {
  createAt: string;
}

export default async function Page(props: any) {
  const responseCommit = await getGithubCommitList('woohyun1031');
  const commitList: ICustomCommitData[] | undefined = responseCommit
    ?.filter(
      (commit: IEventData<IPushEventPayload>) => commit.type === 'PushEvent',
    )
    ?.reduce((acc: ICustomCommitData[], cur: IEventData<IPushEventPayload>) => {
      return [
        ...acc,
        ...cur?.payload?.commits?.map((value: ICommitData) => ({
          ...value,
          message: value?.message,
          url: value?.url,
          createAt: cur?.created_at,
        })),
      ];
    }, []);

  const notitonList = await getNotionPages(5);

  return (
    <>
      <div className="flex w-full justify-center ">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-36 flex w-full flex-col justify-center px-12">
            <div>
              <div>
                <div>
                  <span className="block font-sansM text-3xl leading-snug text-blue-500 lg:inline">
                    웹 프론트엔드 개발자
                  </span>
                  <span className="block font-sansM text-6xl leading-snug text-gray-900 dark:text-gray-50 lg:inline">
                    {' '}
                    김우현 입니다.
                  </span>
                </div>
              </div>
              <div className="mt-12 flex flex-col">
                <span className="font-sansM text-xl text-gray-700 dark:text-gray-200">
                  <span>
                    <Link
                      href="https://blog.cmiscm.com/?page_id=3023"
                      target="_blank"
                      className="text-blue-500 underline underline-offset-2"
                    >
                      인터렉티브 디벨로퍼, 김종민님
                    </Link>
                  </span>
                  께 빠져 시작했던 취미로부터, 현재 UX, 사용자 입장에서, 사용자
                  경험을 우선으로 고민을 할 수 있는 작업과 웹의 전반전인
                  파이프라인을 고려하여 데이터와 팩트에 기반한 문제 해결에
                  재미를 느끼면서 꾸준하게 공부를 하고 있습니다.
                </span>
              </div>
            </div>

            <div className="mt-36">
              <div>
                <span className="font-sansB text-4xl text-gray-900 dark:text-white">
                  Tech Skill
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-4">
                <div>
                  <p className="mb-2 font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ React 랜더링 프로세스와 최적화를 고민하여 구현, hook를
                    유연하게 사용하여 공통 모듈, 기능 개발
                  </p>
                  <p className="mb-2 font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ 요구사항에 적절한 랜더링 환경을 파악하여 Nexjs 13 framwork
                    기반 프로젝트 설계 및 개발
                  </p>
                  <p className="mb-2 font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ Typescript / Javascript 언어를 이해하고 필요한 환경에 따라
                    사용
                  </p>
                  <p className="mb-2 font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ 상황에 따른 프론트엔드 기술환경(Webpack, Babel, Eslint 등)
                    구성 및 소규모 프로젝트 리드 경험
                  </p>
                  <p className="mb-2 font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ ContextApi, Redux, React-Query 등 요구사항에 맞는 상태관리
                    경험
                  </p>
                  <p className="mb-2 font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ CS, 웹과 관련된 기초부터 새로운 기술환경까지 깊게 학습하는
                    것을 선호
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-36">
              <div>
                <span className="font-sansB text-4xl text-gray-900 dark:text-white">
                  Work Experience
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-10">
                  <p className="dark:text-gray-1z00 font-sansM text-3xl text-gray-800 dark:text-gray-200">
                    Actbase.llc
                  </p>
                  <p className="mt-4 font-sansM text-xl text-gray-700 dark:text-gray-200">
                    Frontend Developer
                  </p>
                  <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-400">
                    2022.08 ~
                  </p>
                </div>
                <div className="lg:min-w-500">
                  <div className="mt-12">
                    <p className="font-sansM text-2xl text-gray-900 dark:text-gray-200">
                      CMS기반 맞춤상품 입점 쇼핑몰 구축
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      비즈니스 요구사항에 맞는 기능 개발 및 유지보수
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Next js 13 framwork 기반 프로젝트, RSC 활용한 SSR, CSR
                        구현 경험
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Core 공통 컴포넌트, 공통 hook, util 제작, 재사용
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ React-Query lib 기반 상태 환경 디자인
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ 프론트엔드 기술환경 구성 및 기본 기능 구현
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ 쇼핑몰 자체 관리 및 회원 관리를 위한 CMS 구축
                      </p>
                    </div>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      TypeScript, Next13, React-Query
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-36">
              <div>
                <span className="font-sansB text-4xl text-gray-900 dark:text-white">
                  Project
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-4">
                  <p className="font-sansM text-2xl text-gray-800 dark:text-gray-100">
                    Tech블로그
                  </p>
                  <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                    2022.08 ~
                  </p>
                </div>
                <div className="lg:min-w-500">
                  <div>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      Notion CMS 기반 블로그 구현
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Notion, Github official api 기반 페이지 제작
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ any previous podcast episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ List page for episodes of the two categories
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ “Tech Talk” and “Inside Out” Episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Episode detail page with show
                      </p>
                    </div>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      TypeScript, Next13, tailwind
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-36">
              <div>
                <span className="font-sansB text-4xl text-gray-900 dark:text-white">
                  Study
                </span>
                <span className="mt-2 block font-sansM text-base text-gray-400 dark:text-gray-400 lg:ml-4 lg:inline">
                  의미있는 기록을 작성합니다.
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-4">
                {notitonList?.results?.map((value: IPage) => {
                  return (
                    <>
                      <a
                        target="blank"
                        className="mt-2 block font-sansM text-base text-gray-700 underline dark:text-gray-200"
                        href={value.url.replace(
                          'https://www.notion.so/',
                          'https://woo1031.notion.site/',
                        )}
                      >
                        ✓ {value?.properties.Name?.title[0]?.text?.content}
                      </a>
                      <p className="mt-2 block font-sansM text-base text-gray-400 dark:text-gray-400">
                        {dayjs(value.created_time).format(
                          'YYYY-MM-DD HH:mm:ss',
                        )}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="mt-36">
              <div className="mb-10">
                <span className="font-sansB text-4xl text-gray-900 dark:text-white">
                  Commits
                </span>
                <span className="mt-2 block font-sansM text-base text-gray-400 dark:text-gray-400 lg:ml-4 lg:inline">
                  의미있는 커밋을 작성합니다.
                </span>
                <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
                <div className="mt-4">
                  {commitList?.map((commit: ICustomCommitData) => {
                    return (
                      <>
                        <a
                          target="blank"
                          className="mt-2 block font-sansM text-base text-gray-700 underline dark:text-gray-200"
                          href={`https://github.com/woohyun1031/effective-memory/commit/${commit?.sha}`}
                        >
                          ✓ {commit.message}
                        </a>
                        <p className="mt-2 block font-sansM text-base text-gray-400 dark:text-gray-400">
                          {dayjs(commit.createAt).format('YYYY-MM-DD HH:mm:ss')}
                        </p>
                      </>
                    );
                  })}
                </div>
                <div className="mt-10">
                  <GithubCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
