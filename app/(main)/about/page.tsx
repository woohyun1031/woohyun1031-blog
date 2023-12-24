import { ICommitData } from 'app/api/github';
import dayjs from 'dayjs';
import GithubCalendar from 'app/components/about/GithubCalendar';
import { getNotionPages, IPage } from 'app/api/notion';
import Link from 'next/link';
import { BlockWrapper, Title } from 'app/components/about';
import { LinkButton } from 'app/components/LinkButton';
import {
  Description,
  BordDescription,
  SoftDescription,
  LinkDescription,
} from 'app/components/about/Description';
import SubTitle from 'app/components/about/SubTitle';
import { Metadata } from 'next';
import Block from 'app/components/Block';
import ogs from 'open-graph-scraper';
import React from 'react';

export const metadata: Metadata = {
  title: '김우현 프론트엔드 엔지니어 이력서',
  description:
    '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
  openGraph: {
    title: '김우현 프론트엔드 엔지니어 이력서',
    description:
      '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
    type: 'profile',
    url: 'https://woo1031.vercel.app/about',
    images: [
      {
        url: '/image.png',
        alt: 'article image',
      },
    ],
    siteName: 'WooHyun Devlog',
    locale: 'en_US',
  },
  twitter: {
    title: '김우현 프론트엔드 엔지니어 이력서',
    description:
      '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
    card: 'summary',
    creator: '@nextjs',
    images: ['/image.png'],
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'FrondEnd',
    'Portfolio',
    'Resume',
  ],
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
                    WooHyun Kim{' '}
                  </span>
                  <div className="mt-6 block leading-snug  lg:mt-0 lg:inline">
                    <SubTitle>
                      frontend engineer & product engineer & professional
                      student
                    </SubTitle>
                  </div>
                </div>
              </div>
              <div className="mt-2 lg:mt-6 lg:w-3/4">
                <div className="mb-2">
                  <Description>
                    안녕하세요, 2년차 프론트엔드 엔지니어
                    <BordDescription> 김우현</BordDescription>
                    입니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    중견 고객사 애플리케이션의 프론트엔드 파트를 설계하고
                    구축하며 API 연결과 폴백 구현 등 다양한 작업을 해왔습니다.{' '}
                    이 과정에서 Docker와 Gitlab을 활용한 CI/CD와 같은 가벼운
                    인프라 경험을 갖고 있습니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    현재 프론트엔드의 전문성과 정체성을 갖추고 있지만, 백앤드와
                    인프라에도 관심을 가지고 개발하고 있습니다.{' '}
                    <LinkDescription href="https://woo1031.vercel.app/article/%EC%A0%9C%ED%92%88product%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EC%99%80-%ED%94%8C%EB%9E%AB%ED%8F%BCplatform%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4">
                      “Product 엔지니어”라 불리는
                    </LinkDescription>{' '}
                    풀스택 엔지니어로 성장하기 위해 노력하고 있습니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    요즘에는 일과 취미 모두를 개발에 집중하고 있습니다. 웹 CS
                    학습과 맡은 프로젝트의 문제를 해결하는 것을 좋아합니다.
                    이러한 경험과 흥미로운 문제들을 꾸준히
                    <LinkDescription href="https://woo1031.notion.site/development-engineering-study-record-a43f5fe01a5d46efac38f0c6cc0893c5?pvs=4">
                      {' '}
                      노션에 기록하고 있습니다.{' '}
                    </LinkDescription>
                    가끔 직접적으로 접하는 문제들에 대해 노션과 연동하여
                    <LinkDescription href="/article">
                      {' '}
                      블로그에 글을 업로드 하기도 합니다.
                    </LinkDescription>
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    선언적 패턴과 계층적 구조를 기반한 함수형 패러다임을
                    선호합니다. 이를 통해 유지보수성이 뛰어나고, 효율적인 코드를
                    작성하는 것을 목표로 하고 있습니다.
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
                <ul className="mt-6 mb-2 list-disc">
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      <BordDescription> Webpack, Babel, Eslint</BordDescription>
                      와 같은 프론트 기술 환경 구성 및 소규모 프로젝트 리드 경험
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      <BordDescription> React </BordDescription>
                      랜더링 프로세스와 최적화를 고려한 구현 능력, hook를
                      유연하게 사용하여 공통 모듈, 기능 개발
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      요구사항에 적절한 랜더링 환경을 파악하여
                      <BordDescription> Next.js App Routing </BordDescription>
                      기반 프로젝트 디자인
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      <BordDescription>
                        {' '}
                        ContextApi, Redux, React-Query{' '}
                      </BordDescription>
                      등 요구사항에 맞는 클라이언트 상태관리 경험
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      선언적 패턴과 계층적 구조를 기반한
                      <BordDescription> 함수형 패러다임을 </BordDescription>
                      선호하며 유지보수성이 높은, 효율적인 개발 방식을 지향.
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      웹 소켓 프로토콜 기반 라이브러리
                      <BordDescription> Socket.IO </BordDescription>
                      활용한 채팅 및 효율적인 양방향 통신 기능 구현 경험
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      <BordDescription>
                        {' '}
                        Typescript, Javascript{' '}
                      </BordDescription>
                      언어의 패러다임을 이해하고 사용
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      <BordDescription> HTML5,CSS3,ES6+ </BordDescription>의
                      기본 지식 및 마크업 능력과 ES6+ 표준 스펙을 활용한 개발
                      지향
                    </Description>
                  </li>
                  <li className="mb-2 ml-5 pl-2">
                    <Description>
                      Docker와 Gitlab CI를 사용한 프로젝트 CI/CD 파이프라인 구축
                      경험
                    </Description>
                  </li>
                </ul>
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
                    <SoftDescription>2022.08 ~ 2023.12</SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div className="mt-12">
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2 font-sansT text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                      <Description>
                        고객사의 비즈니스 요구사항에 맞는 애플리케이션 개발 및
                        유지보수
                      </Description>
                    </div>

                    <div className="mt-4">
                      <SubTitle>Projects</SubTitle>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>아워홈</BordDescription> -
                          TQMS(통합품질관리시스템) 구축
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          종합식품기업 아워홈 내부에서 관리되는
                          통합품질관리시스템 개발
                        </SoftDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>메이비원</BordDescription> - Bizprint
                          CMS기반 맞춤상품 입점 쇼핑몰 구축
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          온라인 인쇄 서비스 Bizprint 쇼핑몰의 CMS System 개발
                        </SoftDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>
                            신세계아이앤씨 & Spvrkd
                          </BordDescription>{' '}
                          - Back Office 시스템 Front 개발
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          글로벌 쇼핑몰 앱 Spvrkd의 Back Office System 구현
                        </SoftDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mt-2">
                        <Description>
                          <BordDescription>풀무원</BordDescription> - 사내 앱
                          mKWP 개발
                        </Description>
                      </div>
                      <div className="mt-1">
                        <SoftDescription>
                          풀무원 사내 앱 mKWP의 다국어 기능 추가 프로젝트 참여
                        </SoftDescription>
                      </div>
                    </div>

                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <ul className="mt-6 mb-2 list-disc">
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          기능, 인터페이스 API 연결 및 폴백 처리
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          Webpack, Babel, ESlint과 같은 프론트 기술 환경 구성
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          프로젝트 파일 시스템, 클라이언트 상태 관리 디자인
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>Module, Package 디자인</Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          CSS3 library와 Component Library를 사용한 UI 퍼블리싱
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          NextAuth, middleware 제어를 통한 프로젝트 내 인증,
                          인가 시스템 구축 및 관리
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          KCP API 결합한 결제 시스템 구현 등 서드파티 시스템 및
                          API와 결합한 모듈 구축
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          Docker와 Gitlab CI를 사용한 프로젝트 CI/CD 구축 경험
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          기획자, 디자이너와 밀접한 협업 경험
                        </Description>
                      </li>
                    </ul>

                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, NextJS 13, React 18, ReactNative,
                        ReactQuery, Redux, styled-components, SCSS, Less, GitLab
                        CI, AWS S3, Docker
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
                    <ul className="mt-6 mb-2 list-disc">
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          <BordDescription>
                            {' '}
                            Next.js 13+, Notion, Github API{' '}
                          </BordDescription>
                          기반한 자체적으로 블로그 인터페이스 구현
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          GitHub와 Vercel로
                          <BordDescription> CD 파이프라인 구축</BordDescription>
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          빌드 시 동적으로 정적 페이지 생성 후 sitemap 동적
                          컨트롤, Google Search Console 관리, 동적으로 meta
                          데이터 생성을 통해
                          <BordDescription>
                            {' '}
                            검색 엔진 최적화(SEO){' '}
                          </BordDescription>
                          작업 진행
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          아티클 페이지 Chrome Lighthouse 기준 90점 이상으로
                          향상 및 아티클 검색 시 구글 첫 페이지 노출
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          Google Analytics, Vercel Analytics 연결을 통한 사용자
                          데이터 수집 기능 활성화
                        </Description>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, NextJS 13, Tailwind, Notion API, Github API,
                        AWS S3, Google Search Console
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
                        <LinkButton url="https://github.com/woohyun1031/TeamQue-FE" />
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
                    <ul className="mt-6 mb-2 list-disc">
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          <BordDescription>
                            {' '}
                            React 18, Typescript 5{' '}
                          </BordDescription>
                          기반 웹 서비스 개발, 운영
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          <BordDescription> Redux Toolkit</BordDescription>을
                          사용한 전역상태 관리로 props 복잡도 개선
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          <BordDescription> React Query 도입</BordDescription>
                          하여 Store, Fetching 영역 분리시켜 서버 상태와
                          클라이언트 상태 분리
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          <BordDescription> Socket.io</BordDescription>
                          라이브러리 활용한 채팅, 실시간 반응 기능 구현
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          <BordDescription>
                            {' '}
                            ThemeProvider(Styled Component)
                          </BordDescription>
                          로 중복 style 분리시켜 50% style 재사용
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          <BordDescription> Git-Flow</BordDescription>
                          브랜치 전략 도입하여 브랜치 관리
                        </Description>
                      </li>
                      <li className="mb-2 ml-5 pl-2 ">
                        <Description>
                          프론트엔드 2명, 백엔드 2명, 디자이너 2명의 협업
                          프로젝트
                        </Description>
                      </li>
                    </ul>
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
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value={'Study'} />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  의미있는 기록을 작성합니다.
                  <LinkButton url="https://woo1031.notion.site/development-engineering-study-record-a43f5fe01a5d46efac38f0c6cc0893c5?pvs=4" />
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
                <div className="mt-2">
                  <Description>
                    More Information?
                    <LinkButton url="https://woo1031.notion.site/development-engineering-study-record-a43f5fe01a5d46efac38f0c6cc0893c5?pvs=4" />
                  </Description>
                </div>
                {/* <div className="mt-2">
                  <SoftDescription>
                    {dayjs(value.created_time).format('YYYY-MM-DD HH:mm:ss')}
                  </SoftDescription>
                </div> */}
                {/* {await getNotionBlock(
                  'https://woo1031.notion.site/development-engineering-study-record-a43f5fe01a5d46efac38f0c6cc0893c5?pvs=4',
                )} */}
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
