import { ICommitData } from '#pages/api/github';
import dayjs from 'dayjs';
import GithubCalendar from '#components/about/GithubCalendar';
import { getNotionPages, IPage } from '#pages/api/notion';
import Link from 'next/link';
import { BlockWrapper, Title } from '#components/about';
import { LinkButton } from '#components/LinkButton';
import {
  Description,
  BordDescription,
  SoftDescription,
} from '#components/about/Description';
import SubTitle from '#components/about/SubTitle';
import { Metadata } from 'next';
import Block from '#components/Block';
import ogs from 'open-graph-scraper';
import React from 'react';

export const metadata: Metadata = {
  title: '김우현 프론트엔드 엔지니어 이력서',
  description: '김우현 프론트엔드 엔지니어의 이력서',
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  async function getNotionPageList() {
    const notitonList = await getNotionPages(5);
    return notitonList;
  }

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
                    <BordDescription> 함수형 패러다임을 </BordDescription>
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
                      <BordDescription> Socket.IO </BordDescription>
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
                  <div className="mb-2">
                    <Description>
                      ·<BordDescription> HTML5/CSS/ES6</BordDescription>: 기본
                      지식 및 마크업 능력과 ES6 표준 스펙을 활용한 개발 지향
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
                      <Description>
                        비즈니스 요구사항에 맞는 기능 개발 및 유지보수
                      </Description>
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <div className="mb-2">
                        <Description>
                          · 프론트엔드 기술 환경 (Webpack, Babel, ESlint ...)
                          구성 및 기능, 인터페이스 구현
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · 프로젝트 파일 시스템, 상태 관리 시스템(Redux, React
                          Query) 디자인
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>· Module & Package 디자인</Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · CSS3 library(SCSS, styled component...), Component
                          Library(AntD, MUI...)를 사용한 UI 구현
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · NextAuth, middleware 제어를 통한 프로젝트 내 인증,
                          인가 시스템 구축 및 관리
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · KCP API 결합한 결제 시스템 구현 등 써드파티 시스템
                          및 API와 결합한 모듈 구축
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · 기획자, 디자이너와 밀접한 협업 경험
                        </Description>
                      </div>
                    </div>

                    <div className="mt-4">
                      <SubTitle>Projects</SubTitle>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>Bizprint</BordDescription> - CMS기반
                          맞춤상품 입점 쇼핑몰 구축
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          Bizprint 리뉴얼 쇼핑몰 페이지 및 CMS System 개발
                        </SoftDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>
                            ReviewMaster 사내 프로젝트
                          </BordDescription>{' '}
                          - Front 개발
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          Review 등록 및 관리 시스템 Front 구현, Front 리드
                        </SoftDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>
                            Pangaia(신세계아이앤씨)
                          </BordDescription>{' '}
                          - CMS 시스템 Front 개발
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          Spvrkd 쇼핑몰 앱의 웹 CMS System 구현
                        </SoftDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>Pulmoowon</BordDescription> - 사내 앱
                          개발
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          풀무원 사내 앱, 다국어 기능 추가 프로젝트 개발
                        </SoftDescription>
                      </div>
                    </div>

                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, NextJS 13, React 18, ReactNative,
                        ReactQuery, Redux, styled-components, SCSS, Less,
                        GitLab, AWS S3
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
                      Notion CMS 기반 개인 블로그{' '}
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
                      <Description>
                        Notion에 주기적으로 작성하는 공부 내용 공유 목적의
                        블로그 제작
                      </Description>
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <div className="mb-2">
                        <Description>
                          · Notion API 기반
                          <BordDescription> 자체 구조 트리 </BordDescription>
                          제작
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription>
                            {' '}
                            Notion, Github API{' '}
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
                        TypeScript, NextJS 13, Tailwind, Notion API, Github API,
                        AWS S3
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
                          <BordDescription>
                            {' '}
                            React18, Typescript{' '}
                          </BordDescription>
                          기반 웹 서비스 개발/운영
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · 전역상태 관리로
                          <BordDescription> Redux Toolkit</BordDescription>을
                          도입하여 props 복잡도 개선
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · Store, Data Fetching 영역 분리(
                          <BordDescription>React Query 도입</BordDescription>
                          )로 전체 Store의 코드량 80% 축소
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·<BordDescription> Socket.io</BordDescription>
                          라이브러리 활용한 채팅, Interaction 반응 기능 구현
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·
                          <BordDescription>
                            {' '}
                            ThemeProvider(Styled Component)
                          </BordDescription>
                          로 중복 style 분리, 50% style 재사용
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·<BordDescription> Git-Flow</BordDescription>
                          Branch 전략 도입
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · 백앤드, 디자이너와 협업 진행
                        </Description>
                      </div>
                    </div>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, React, styled-components, Socket.IO
                      </Description>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 lg:flex lg:justify-between">
                <div className="mb-4">
                  <div>
                    <SubTitle>
                      북마크 수집 사이트
                      <LinkButton url="https://github.com/woohyun1031/React_Ref_Everything_Project" />
                    </SubTitle>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>2022.06 ~ 2022.07</SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div>
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        component 단위로 북마크 수집 및 공유 프로젝트
                      </Description>
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <div className="mb-2">
                        <Description>
                          ·<BordDescription> Atomic </BordDescription>
                          디자인 시스템 구축 경험, 80%의 element 재사용
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          ·<BordDescription> Firebase</BordDescription>
                          기반
                          <BordDescription> static hosting</BordDescription>
                          구축, Firestore 및 서비스 활용
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · <BordDescription>Styled Componet </BordDescription>
                          라이브러리 활용
                          <BordDescription> DarkMode </BordDescription>
                          구현
                        </Description>
                      </div>
                    </div>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, React18, StyledComponent, Firestore,
                        Firebase Storage, Firebase Hosting
                      </Description>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 lg:flex lg:justify-between">
                <div className="mb-4">
                  <div>
                    <SubTitle>
                      개발 지식 공유 프로젝트
                      <LinkButton url="https://github.com/woogod1031/hanghae_1_week" />
                    </SubTitle>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>2022.01 ~ 2022.01</SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div>
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        개발 도중 겪는 어려움과 질문들을 올려 답변을 얻고
                        공유하는 개발 지식 공유 프로젝트
                      </Description>
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <div className="mb-2">
                        <Description>
                          · 프레임워크 없이
                          <BordDescription> HTML5/CSS3</BordDescription>와
                          <BordDescription> jQuery</BordDescription>를 사용하여
                          웹 표준 스펙을 고려한 개발
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · <BordDescription>Ajax, jQuery </BordDescription>
                          활용한 MVC 패턴 디자인
                        </Description>
                      </div>
                      <div className="mb-2">
                        <Description>
                          · 서비스 성능을 고려
                          <BordDescription> SSG </BordDescription> 랜더링 진행
                        </Description>
                      </div>
                    </div>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        jQuery, CSS3, python3, Flask, FireStore, MongoDB
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
                {await getNotionPageList()?.then((value) => {
                  return value?.results?.map((value: IPage) => {
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
                  });
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
