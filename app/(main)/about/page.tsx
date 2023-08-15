import { ICommitData } from '#pages/api/github';
import dayjs from 'dayjs';
import GithubCalendar from '#components/about/GithubCalendar';
import { getNotionPages, IPage } from '#pages/api/notion';
import Link from 'next/link';
import { BlockWrapper, Title } from '#components/about';
import { LinkButton } from '#components/LinkButton';
import { Description, BordDescription } from '#components/about/Description';
import SubTitle from '#components/about/SubTitle';
import SoftDescription from '#components/about/SoftDescription';
import { Metadata } from 'next';
import Block from '#components/Block';
import ogs from 'open-graph-scraper';
import React from 'react';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: '김우현 프론트엔드 엔지니어 이력서',
    description: '김우현 프론트엔드 엔지니어의 이력서',
  };
}

export const dynamic = 'force-dynamic';

export default async function Page() {
  const notitonList = await getNotionPages(5);
  async function getNotionBlock(src: string) {
    if (!src) return null;
    const { result, error } = await ogs({
      url: src,
    });
    if (error) {
      return (
        <Block
          block={{
            id: 'notion block',
            type: 'bookmark',
          }}
        />
      );
    }
    const favicon = result.favicon?.startsWith('http')
      ? result.favicon
      : result.favicon?.startsWith('//')
      ? `http:${result.favicon}`
      : new URL(result.requestUrl ?? '').origin + '/favicon.ico';
    const response = await fetch(favicon);
    const status =
      response.status >= 400 && response.status < 600 ? false : true;
    return (
      <Block
        block={{
          id: 'notion block',
          type: 'bookmark',
          title: result?.ogTitle ?? result?.twitterTitle ?? '',
          description: result.ogDescription || result.twitterDescription || '',
          image: result.ogImage?.[0]?.url,
          favicon: status ? favicon : null,
          url: result.requestUrl,
        }}
      />
    );
  }
  return (
    <>
      <div className="flex w-full justify-center ">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-36 flex w-full flex-col justify-center px-12">
            <div>
              <div>
                <div>
                  <span className="block font-sansM text-4xl leading-snug text-gray-900 dark:text-gray-50 sm:text-5xl lg:inline">
                    WOOHYUN KIM{' '}
                  </span>
                  <div className="mt-6 block leading-snug  lg:mt-0 lg:inline">
                    <SubTitle>
                      frontend engineer & professional student
                    </SubTitle>
                  </div>
                </div>
              </div>
              <div className="mt-2 lg:mt-6 lg:w-3/4">
                <div className="mb-2">
                  <Description>
                    2년차 프론트엔드 엔지니어인
                    <BordDescription> 김우현</BordDescription>
                    입니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    요즘 일도 취미도 개발로, 공부하고 문제 해결하는 재미로 살고
                    있습니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    <BordDescription>사용자 경험을 </BordDescription>
                    우선으로 고민을 할 수 있는 작업과
                    <BordDescription> 웹 파이프라인의 </BordDescription>
                    다양한 측면을 고려하여 데이터와 사실을 기반으로 한 문제
                    해결에 높은 흥미를 가지고 있습니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    선언적 패턴과 계층적 구조를 기반한
                    <BordDescription> 함수형 패러다임을</BordDescription>
                    선호하며 유지보수성이 높은, 효율적인 개발 방식을 지향합니다.
                  </Description>
                </div>
              </div>
              <div className="mt-6">
                <span className="cursor-pointer font-sansT text-sm text-red-400 hover:text-gray-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-base">
                  <Link href="https://github.com/woohyun1031" target="_blank">
                    github
                  </Link>
                </span>

                <span className="ml-6 cursor-pointer font-sansT text-sm text-red-400 hover:text-gray-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-base">
                  <Link href="mailto:ktkwhms3@gmail.com" target="_blank">
                    e-mail
                  </Link>
                </span>

                <span className="ml-6 cursor-pointer font-sansT text-sm text-red-400 hover:text-gray-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-base">
                  <Link
                    href="https://woo1031.notion.site/woo1031/WooHyun-Kim-69ab520d7e2648d1aec863db6a50a282"
                    target="_blank"
                  >
                    notion
                  </Link>
                </span>
              </div>
            </div>

            <BlockWrapper>
              <div>
                <Title value={'Skill'} />
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10">
                <div>
                  <div className="mb-2">
                    <Description>
                      ·
                      <BordDescription>
                        {' '}
                        프론트 기술 환경(Webpack, Babel, Eslint 등)
                      </BordDescription>
                      구성 및 소규모 프로젝트 리드 경험
                    </Description>
                  </div>
                  <div className="mb-2">
                    <Description>
                      ·<BordDescription> React </BordDescription>
                      랜더링 프로세스와 최적화를 고려한 구현 능력, hook를
                      유연하게 사용하여 공통 모듈, 기능 개발
                    </Description>
                  </div>
                  <div className="mb-2">
                    <Description>
                      · 요구사항에 적절한 랜더링 환경을 파악하여
                      <BordDescription> Next.js 13 </BordDescription>
                      기반 프로젝트 디자인
                    </Description>
                  </div>
                  <div className="mb-2">
                    <Description>
                      ·
                      <BordDescription>
                        {' '}
                        ContextApi, Redux, React-Query{' '}
                      </BordDescription>
                      등 요구사항에 맞는 상태관리 경험
                    </Description>
                  </div>
                  <div className="mb-2">
                    <Description>
                      · 선언적 패턴과 계층적 구조를 기반한
                      <BordDescription> 함수형 패러다임을 </BordDescription>
                      선호하며 유지보수성이 높은, 효율적인 개발 방식을 지향.
                    </Description>
                  </div>
                  <div className="mb-2">
                    <Description>
                      · 웹소켓 프로토콜 기반
                      <BordDescription> Socket.io </BordDescription>
                      활용 채팅 및 효율적인 양방향 통신 기능 구현 경험
                    </Description>
                  </div>
                  <div className="mb-2">
                    <Description>
                      ·
                      <BordDescription> Typescript/Javascript </BordDescription>
                      언어의 패러다임을 이해하고 사용
                    </Description>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value={'Work Experience'} />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  More Information?
                  <LinkButton url="https://www.notion.so/woo1031/WooHyun-Kim-975fd291ae324dfb87663e2bd9aa35ca?pvs=4#36e875ba7bac4d3693cca9821ac5153e" />
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-10">
                  <div>
                    <SubTitle>
                      Actbase.llc
                      <LinkButton url="https://actbase.io/" />
                    </SubTitle>
                  </div>
                  <div className="mt-4">
                    <Description>frontend developer</Description>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>2022.08 ~</SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div className="mt-12">
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2 font-sansT text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                      비즈니스 요구사항에 맞는 기능 개발 및 유지보수
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <div className="mb-2">
                        <Description>
                          ·<BordDescription> Next.js 13 </BordDescription>
                          framework 기반 프로젝트 진행, RSC 활용한 SSR, CSR 처리
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription>
                            {' '}
                            프론트엔드 기술 환경(Package, Webpack, Eslint...){' '}
                          </BordDescription>
                          및 프로젝트 디자인
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · 재사용 가능한 Core 공통 컴포넌트, 공통 hook, util
                          제작
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · React-Query, Redux 기반
                          <BordDescription> 상태 관리 시스템 </BordDescription>
                          구축
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · CSS 전처리 도구 및 Component Library를 사용한
                          퍼블리싱 경험
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · 기획자, 디자이너와 밀접한 협업 경험
                        </Description>
                      </div>
                    </div>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, Next.js13, React18, React-Query
                      </Description>
                    </div>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value={'Project'} />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  More Information?
                  <LinkButton url="https://www.notion.so/woo1031/WooHyun-Kim-975fd291ae324dfb87663e2bd9aa35ca?pvs=4#ca18c3f0d6144adf884583f80e399fb0" />
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-4">
                  <div>
                    <SubTitle>
                      개인 블로그{' '}
                      <LinkButton url="https://github.com/woohyun1031/effective-memory" />
                    </SubTitle>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>2023.04 ~</SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div>
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>Notion CMS 기반 블로그 구현</Description>
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <div className="mb-2">
                        <Description>
                          · Notion에 주기적으로 작성하는 공부 내용 공유 목적의
                          <BordDescription> 블로그 </BordDescription>
                          제작
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·<BordDescription> Next.js 13 </BordDescription>
                          framework 기반 프로젝트 진행
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · Notion api 기반
                          <BordDescription>
                            {' '}
                            구조 트리 제작하여 자체 인터페이스{' '}
                          </BordDescription>
                          구축
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription>
                            {' '}
                            Notion, Github api{' '}
                          </BordDescription>
                          기반 블로그 인터페이스 구현
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · GitHub와 Vercel로
                          <BordDescription> CD 파이프라인 구축</BordDescription>
                        </Description>
                      </div>
                    </div>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, Next.js13, Tailwind, AWS.S3
                      </Description>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 lg:flex lg:justify-between">
                <div className="mb-4">
                  <div>
                    <SubTitle>
                      QUE!{' '}
                      <Description>
                        라이브 스트리밍 에듀 플랫폼
                        <LinkButton url="https://github.com/Hanghae99-5-Team1/TeamQue-FE" />
                      </Description>
                    </SubTitle>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>2022.03 ~ 2022.04</SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div>
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        강사 1명과 다수의 학생들의
                        <BordDescription>
                          {' '}
                          실시간 동영상 스트리밍{' '}
                        </BordDescription>
                        플랫폼을 기획으로 진행한 팀프로젝트
                      </Description>
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription> React, Typescript </BordDescription>
                          기반 웹 서비스 개발/운영
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription>
                            {' '}
                            Redux/Toolkit, React query 도입
                          </BordDescription>
                          으로 props, store 복잡도 개선
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription>
                            {' '}
                            Socket.io 라이브러리 활용한{' '}
                          </BordDescription>
                          채팅, Interaction 실시간 반응 기능 구현
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription>
                            {' '}
                            ThemeProvider(Styled Component)
                          </BordDescription>
                          로 중복 style 분리 및 재사용
                        </Description>
                      </div>
                    </div>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, React, StyledComponent, SocketIO
                      </Description>
                    </div>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value={'Study'} />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  의미있는 기록을 작성합니다.
                  <LinkButton url="https://woo1031.notion.site/woo1031/Back-to-Back-2d6ebc5912ce4bc38a1ec85b857a62cd" />
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10">
                {notitonList?.results?.map((value: IPage) => {
                  return (
                    <>
                      <div className="mt-2">
                        <Description>
                          {value?.properties.Name?.title[0]?.text?.content}
                          <LinkButton
                            url={value.url.replace(
                              'https://www.notion.so/',
                              'https://woo1031.notion.site/',
                            )}
                          />
                        </Description>
                      </div>
                      <div className="mt-2">
                        <SoftDescription>
                          {dayjs(value.created_time).format(
                            'YYYY-MM-DD HH:mm:ss',
                          )}
                        </SoftDescription>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="mt-10">
                {await getNotionBlock(
                  'https://woo1031.notion.site/Effective-Memory-a43f5fe01a5d46efac38f0c6cc0893c5',
                )}
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div className="mb-10">
                <Title value={'Commits'} />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  I love programming.
                  <LinkButton url="https://github.com/woohyun1031" />
                </span>
                <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
                <div className="mt-10">
                  <GithubCalendar />
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div className="mb-10 text-center">
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  More Information?
                  <LinkButton url="https://woo1031.notion.site/woo1031/WooHyun-Kim-69ab520d7e2648d1aec863db6a50a282" />
                </span>
              </div>
            </BlockWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
