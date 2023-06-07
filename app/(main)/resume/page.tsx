import { getGithubCommitList, IPushEventPayload } from '#pages/api/github';
import GitHubCalendar from 'react-github-calendar';
import { ICommitData, IEventData } from '#pages/api/github';
import dayjs from 'dayjs';
import GithubCalendar from './githubCalendar';
import { getNotionPages, IPage } from '#pages/api/notion';
import Link from 'next/link';
import { BlockWrapper, Title } from '#components/resume';
import { LinkButton } from '#components/LinkButton';

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
                  <span className="block font-sansT text-3xl leading-snug  lg:inline">
                    frontend developer
                  </span>
                  <span className="block font-sansT text-6xl leading-snug text-gray-900 dark:text-gray-50 lg:inline">
                    {' '}
                    WOOHYUN KIM
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <span className="ml-2 cursor-pointer font-sansT text-base text-red-400 hover:text-gray-400 dark:text-red-400 dark:hover:text-gray-400">
                  <Link href="https://github.com/woohyun1031" target="_blank">
                    github
                  </Link>
                </span>

                <span className="ml-6 cursor-pointer font-sansT text-base text-red-400 hover:text-gray-400 dark:text-red-400 dark:hover:text-gray-400">
                  <Link href="mailto:ktkwhms3@gmail.com" target="_blank">
                    e-mail
                  </Link>
                </span>
              </div>
            </div>

            <BlockWrapper>
              <div>
                <Title value={'Skill'} />
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-4">
                <div>
                  <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-200">
                    · 프론트 기술 환경(Webpack, Babel, Eslint 등) 구성 및 소규모
                    프로젝트 리드 경험
                  </p>
                  <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-200">
                    · React 랜더링 프로세스와 최적화를 고려한 구현 능력, hook를
                    유연하게 사용하여 공통 모듈, 기능 개발
                  </p>
                  <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-200">
                    · 요구사항에 적절한 랜더링 환경을 파악하여 Nexjs 13 framwork
                    기반 프로젝트 설계 및 개발
                  </p>
                  <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-200">
                    · ContextApi, Redux, React-Query 등 요구사항에 맞는 상태관리
                    경험
                  </p>
                  <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-200">
                    · 웹의 전체적인 흐름을 고려하여 개발
                  </p>
                  <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-200">
                    · Typescript / Javascript 언어를 이해하고 필요한 환경에 따라
                    사용
                  </p>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value={'Work Experience'} />
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-10">
                  <p className="font-sansT text-2xl text-gray-800 dark:text-gray-200">
                    Actbase.llc
                    <LinkButton url="https://actbase.io/" />
                  </p>
                  <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                    frontend developer
                  </p>
                  <p className="mt-2 font-sansT text-sm text-gray-400 dark:text-gray-400">
                    2022.08 ~
                  </p>
                </div>
                <div className="lg:w-500">
                  <div className="mt-12">
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansT text-base text-gray-600 dark:text-gray-400">
                      비즈니스 요구사항에 맞는 기능 개발 및 유지보수
                    </p>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · Next js 13 framwork 기반 프로젝트, RSC 활용한 SSR, CSR
                        구현 경험
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · Core 공통 컴포넌트, 공통 hook, util 제작, 재사용
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · React-Query lib 기반 상태 환경 디자인
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · 프론트엔드 기술환경 구성 및 기본 기능 구현
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · 쇼핑몰 자체 관리 및 회원 관리를 위한 CMS 구축
                      </p>
                    </div>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansT text-base text-gray-600 dark:text-gray-400">
                      TypeScript, Next13, React, React-Query
                    </p>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value={'Project'} />
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-4">
                  <p className="font-sansT text-2xl text-gray-800 dark:text-gray-100">
                    개인 블로그{' '}
                    <LinkButton url="https://github.com/woohyun1031/effective-memory" />
                  </p>
                  <p className="mt-4 font-sansT text-sm text-gray-400 dark:text-gray-400">
                    2022.08 ~
                  </p>
                </div>
                <div className="lg:w-500">
                  <div>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansT text-base text-gray-600 dark:text-gray-400">
                      Notion CMS 기반 블로그 구현
                    </p>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · Notion에 주기적으로 작성하는 공부 내용 공유 목적의
                        블로그 제작
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · Next js 13 framwork 기반 프로젝트
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · Notion, Github api 기반 블로그 인터페이스 구현
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · GitHub Action과 Vercel로 CI, CD 파이프라인 구축
                      </p>
                    </div>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansT text-base text-gray-600 dark:text-gray-400">
                      TypeScript, Next13, Tailwind, GithubAction
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20 lg:flex lg:justify-between">
                <div className="mb-4">
                  <p className="font-sansT text-2xl text-gray-800 dark:text-gray-100">
                    QUE!{' '}
                    <span className="font-sansT text-lg text-gray-800 dark:text-gray-100">
                      라이브 스트리밍 에듀 플랫폼
                      <LinkButton url="https://github.com/Hanghae99-5-Team1/TeamQue-FE" />
                    </span>
                  </p>
                  <p className="mt-4 font-sansT text-sm text-gray-400 dark:text-gray-400">
                    2022.03 ~ 2022.04
                  </p>
                </div>
                <div className="lg:w-500">
                  <div>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansT text-base text-gray-600 dark:text-gray-400">
                      강사 1명과 다수의 학생들의 실시간 동영상 스트리밍 플랫폼을
                      기획으로 진행한 팀프로젝트
                    </p>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · React, Typescript 기반 웹 서비스 개발/운영
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · Redux/Toolkit, React query 도입으로 props, store
                        복잡도 개선
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · Socket.io 라이브러리 활용한 채팅, Interaction 반응
                        기능 구현
                      </p>
                      <p className="mb-2 font-sansT text-base text-gray-700 dark:text-gray-400">
                        · ThemeProvider(Styled Component)로 중복 style 분리 및
                        재사용
                      </p>
                    </div>
                    <p className="mt-4 font-sansT text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansT text-base text-gray-600 dark:text-gray-400">
                      TypeScript, React, StyledComponent, SocketIO
                    </p>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value={'Study'} />
                <span className="mt-2 block font-sansT text-base text-gray-400 dark:text-gray-400 lg:ml-4 lg:inline">
                  의미있는 기록을 작성합니다.
                  <LinkButton url="https://woo1031.notion.site/woo1031/Back-to-Back-2d6ebc5912ce4bc38a1ec85b857a62cd" />
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-4">
                {notitonList?.results?.map((value: IPage) => {
                  return (
                    <>
                      <p className="mt-2 block font-sansT text-base text-gray-700  dark:text-gray-200">
                        {value?.properties.Name?.title[0]?.text?.content}
                        <LinkButton
                          url={value.url.replace(
                            'https://www.notion.so/',
                            'https://woo1031.notion.site/',
                          )}
                        />
                      </p>
                      <p className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400">
                        {dayjs(value.created_time).format(
                          'YYYY-MM-DD HH:mm:ss',
                        )}
                      </p>
                    </>
                  );
                })}
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div className="mb-10">
                <Title value={'Commits'} />
                <span className="mt-2 block font-sansT text-base text-gray-400 dark:text-gray-400 lg:ml-4 lg:inline">
                  I love programming.
                  <LinkButton url="https://github.com/woohyun1031" />
                </span>
                <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
                <div className="mt-10">
                  <GithubCalendar />
                </div>
              </div>
            </BlockWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
