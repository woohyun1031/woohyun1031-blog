import dayjs from 'dayjs';
import {
  GithubCalendar,
  Description,
  BordDescription,
  SoftDescription,
  LinkDescription,
  LinkButton,
  SubTitle,
  BlockWrapper,
  Title,
} from '#components/about';
import { getNotionCompletePageList, IPage } from 'app/api/notion';
import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';
import { ListTag } from '#components/common';

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
    const notitonList = await getNotionCompletePageList(5);
    return notitonList;
  }

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-36 flex w-full flex-col justify-center px-12">
            <div>
              <div>
                <div>
                  <span className="block font-sansM text-4xl leading-snug text-gray-900 duration-300 ease-in-out dark:text-gray-50 sm:text-5xl lg:inline">
                    WooHyun Kim{' '}
                  </span>
                  <div className="mt-6 block leading-snug duration-300 ease-in-out lg:mt-0 lg:inline">
                    <SubTitle>
                      Frontend Developer & Product Engineer & Professional
                      Student
                    </SubTitle>
                  </div>
                </div>
              </div>
              <div className="mt-2 lg:mt-6 lg:w-3/4">
                {/* <ul className="mb-2 mt-2 list-disc">
                  <ListTag>
                    <Description>
                      안녕하세요, 2년차 프론트엔드 엔지니어 김우현입니다.
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      요즘에는 일과 취미 모두를 개발에 집중하고 있습니다.
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      흥미로운 경험과 문제들을 꾸준히 개인 노션에 기록하고
                      가끔은 블로그에도 업로드합니다.
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      프론트엔드 전문성을 갖추면서도 백엔드와 인프라에도 관심을
                      가지고 성장하고 있습니다.
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      개인적으로 풀스택 엔지니어로 발전하기 위해 노력하고
                      있습니다.
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      현재 단기간 내 목표는 한 개발 팀을 이끌 역량이 되는 리드
                      개발자로 성장하는 것입니다.
                    </Description>
                  </ListTag>
                </ul> */}
                <div className="mb-2">
                  <Description>
                    안녕하세요, 2년차 프론트엔드 개발자
                    <BordDescription> 김우현</BordDescription>
                    입니다<span className="text-2xl">👋</span>
                  </Description>
                </div>
                {/* <div className="mb-2">
                  <Description>
                    중견 고객사 애플리케이션의
                    <BordDescription>
                      {' '}
                      프론트엔드 파트를 설계하고 구축하며
                    </BordDescription>{' '}
                    API 연결과 폴백 구현 등 다양한 작업을 해왔습니다. 이
                    과정에서 Docker와 Gitlab을 활용한{' '}
                    <BordDescription>
                      {' '}
                      CI/CD와 같은 가벼운 인프라 경험
                    </BordDescription>
                    을 갖고 있습니다.
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
                </div> */}
                <div className="mb-2">
                  <Description>
                    고객사 어플리케이션의 프론트엔드 파트를 설계하고 구축하는
                    일을 하고 있습니다<span className="text-2xl">🚀</span>{' '}
                    TypeScript와 React.js, Next.js를 사용하지만 Vanilla.js로
                    개인 작업 하는 걸 선호합니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    요즘에는 일과 취미 모두를 개발에 집중하고 있습니다. 이러한
                    경험과 흥미로운 문제들을 꾸준히
                    <LinkDescription href="https://woo1031.notion.site/development-engineering-study-record-a43f5fe01a5d46efac38f0c6cc0893c5?pvs=4">
                      {' '}
                      🔗노션에 기록하고 있습니다.{' '}
                    </LinkDescription>
                    가끔 직접적으로 접하는 문제들에 대해 노션과 연동하여
                    <LinkDescription href="/article">
                      {' '}
                      🔗이곳에 글을 업로드 하기도 합니다.
                    </LinkDescription>
                  </Description>
                </div>
              </div>
              <div className="mt-4">
                <span className="cursor-pointer font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-base">
                  <Link href="mailto:ktkwhms3@gmail.com" target="_blank">
                    e-mail
                  </Link>
                </span>

                <span className="ml-6 cursor-pointer font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-base">
                  <Link
                    href="https://woo1031.notion.site/2-e87c8b2c792c45f0af4fa68b96661411?pvs=4"
                    target="_blank"
                  >
                    resume
                  </Link>
                </span>
                <span className="ml-6 cursor-pointer font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-base">
                  <Link href="https://github.com/woohyun1031" target="_blank">
                    github
                  </Link>
                </span>

                <span className="ml-6 cursor-pointer font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-base">
                  <Link
                    href="https://woo1031.notion.site/woo1031/WooHyun-Kim-69ab520d7e2648d1aec863db6a50a282"
                    target="_blank"
                  >
                    notion
                  </Link>
                </span>

                <span className="ml-6 cursor-pointer font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-base">
                  <Link href="https://woo1031.vercel.app/" target="_blank">
                    blog
                  </Link>
                </span>
              </div>
            </div>

            {/* <BlockWrapper>
              <div>
                <Title value={'Main Point'} />
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10">
                <ul className="mb-2 mt-2 list-disc">
                  <ListTag>
                    <Description>
                      Webpack, Babel, Eslint 와 같은
                      <BordDescription>
                        {' '}
                        프론트 기술 환경 구성 및 소규모 프로젝트 리드 경험
                      </BordDescription>
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      React 랜더링 프로세스와 최적화를 고려한
                      <BordDescription> 구현 능력</BordDescription>, hook를
                      유연하게 사용하여
                      <BordDescription> 공통 모듈, 기능 개발</BordDescription>
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      요구사항에 적절한 랜더링 환경을 파악하여
                      <BordDescription> Next.js App Routing </BordDescription>
                      기반 프로젝트 디자인
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      ContextApi, Redux, React-Query 등 요구사항에 맞는
                      <BordDescription>
                        {' '}
                        클라이언트 상태관리 경험
                      </BordDescription>
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      선언적 패턴과 계층적 구조를 기반한 함수형 패러다임을
                      선호하며
                      <BordDescription>
                        {' '}
                        유지보수성이 높은, 효율적인 개발 방식을 지향.
                      </BordDescription>
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      웹 소켓 프로토콜 기반 라이브러리 Socket.IO 활용한
                      <BordDescription>
                        {' '}
                        채팅 및 효율적인 양방향 통신 기능 구현 경험
                      </BordDescription>
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      <BordDescription>
                        {' '}
                        Typescript, Javascript{' '}
                      </BordDescription>
                      언어의 패러다임을 이해하고 사용
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      HTML5,CSS3,ES6+의 기본 지식 및 마크업 능력과
                      <BordDescription>
                        {' '}
                        ES6+ 표준 스펙을 활용한
                      </BordDescription>{' '}
                      개발 지향
                    </Description>
                  </ListTag>
                  <ListTag>
                    <Description>
                      Docker와 Gitlab CI를 사용한 프로젝트
                      <BordDescription>
                        {' '}
                        CI/CD 파이프라인 핸들링{' '}
                      </BordDescription>
                      경험
                    </Description>
                  </ListTag>
                </ul>
              </div>
            </BlockWrapper> */}

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
                    <Title>
                      Actbase.llc
                      <Description> / Frontend Developer</Description>
                      <LinkButton url="https://actbase.io/" />
                    </Title>
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
                    <div className="mt-2">
                      <Description>
                        고객사의 비즈니스 요구사항에 맞는 애플리케이션 개발 및
                        유지보수를 진행하는 개발팀에서 프론트엔드를
                        담당했습니다.
                      </Description>
                    </div>
                    <div>
                      <Description>
                        애플리케이션의 프론트엔드 파트 설계 및 구축 등 다양한
                        작업을 해왔으며 이 과정에서 Docker와 GitLab을 활용한
                        CI/CD와 인프라 관련 경험을 쌓았습니다.
                      </Description>
                    </div>
                    {/* <div className="mt-6">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <div className="mt-2">
                      <ul className="mb-2 mt-2 list-disc">
                        <ListTag>
                          <Description>
                            고객사 애플리케이션의 프론트엔드 파트 설계 및 구축
                          </Description>
                        </ListTag>
                        <ListTag>
                          <Description>
                            Docker와 GitLab을 활용한 CI/CD와 인프라 관련 경험
                          </Description>
                        </ListTag>
                        <ListTag>
                          <Description>
                            Webpack, Babel, Eslint와 같은 프론트 기술 환경 구축
                            및 소규모 프로젝트 리드 경험
                          </Description>
                        </ListTag>
                      </ul>
                    </div> */}
                    {/* <div className="mt-6">
                      <div className="mt-2">
                        <SubTitle>
                          아워홈
                          <Description>
                            {' '}
                            / TQMS(통합품질관리시스템) 구축
                          </Description>
                        </SubTitle>
                      </div>
                      <div className="mt-2">
                        <SoftDescription>
                          종합식품기업 아워홈 내부에서 관리되는
                          통합품질관리시스템 개발
                        </SoftDescription>
                      </div>
                      <div className="mt-1">
                        <ul className="mb-2 mt-2 list-disc">
                          <ListTag>
                            <Description>
                              클레임 관리, 자가진단 관리 시스템 퍼블리싱, API
                              연결 및 폴백(fallback) 처리
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              Chart.js 다양한 차트를 활용한{' '}
                              <BordDescription>
                                클레임 데이터 분류 및 데이터 시각화 기능
                              </BordDescription>{' '}
                              구현
                            </Description>
                          </ListTag>
                        </ul>
                      </div>
                    </div> */}
                    {/* <div className="mt-4">
                      <div className="mt-2">
                        <SubTitle>
                          메이비원
                          <Description>
                            {' '}
                            / Bizprint CMS기반 맞춤상품 입점 쇼핑몰 구축
                          </Description>
                        </SubTitle>
                      </div>
                      <div className="mt-2">
                        <SoftDescription>
                          온라인 인쇄 서비스 기업 Bizprint 쇼핑몰 페이지의 CMS
                          System 개발
                        </SoftDescription>
                      </div>
                      <div className="mt-1">
                        <ul className="mb-2 mt-2 list-disc">
                          <ListTag>
                            <Description>
                              Next.js app router의
                              <LinkDescription href="mailto:ktkwhms3@gmail.com">
                                {' '}
                                server components{' '}
                              </LinkDescription>{' '}
                              사용한
                              <BordDescription>
                                {' '}
                                공통 페이지네이션, 패칭 컴포넌트 설계
                              </BordDescription>
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              사내 서버에 Docker와 Gitlab CI 를 사용한
                              <BordDescription>
                                {' '}
                                CI/CD 파이프라인 핸들링{' '}
                              </BordDescription>
                              경험
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              CMS 기반하여 동적으로 상품을 입점 시킬 수 있는
                              <BordDescription>
                                {' '}
                                상품 등록 비즈니스 로직
                              </BordDescription>{' '}
                              개발
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              KCP API와 연동하여{' '}
                              <BordDescription>
                                PC표준 결제 로직 및 영수증 표시 로직
                              </BordDescription>{' '}
                              구현
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              <LinkDescription href="mailto:ktkwhms3@gmail.com">
                                middleware
                              </LinkDescription>{' '}
                              활용하여 사용자 권한에 따라 페이지 조회 및 등록
                              분리
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              NextAuth와 middleware 제어를 통한 프로젝트 내{' '}
                              <BordDescription>
                                인증, 인가 시스템 구축 및 관리
                              </BordDescription>
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              상품, 회원 관리, 쿠폰과 상품권 발급 및 관리 등
                              기획과 조건에 맞춰 페이지 퍼블리싱, API 연결 및
                              폴백(fallback) 처리
                            </Description>
                          </ListTag>
                        </ul>
                      </div>
                    </div> */}
                    {/* <div className="mt-4">
                      <div className="mt-2">
                        <SubTitle>
                          풀무원 <Description> / 사내 앱 mKWP 개발</Description>
                        </SubTitle>
                      </div>
                      <div className="mt-2">
                        <SoftDescription>
                          풀무원 사내 앱{' '}
                          <LinkDescription href="mailto:ktkwhms3@gmail.com">
                            mKWP
                          </LinkDescription>
                          의 다국어 기능 추가 프로젝트 참여
                        </SoftDescription>
                      </div>
                      <div className="mt-1">
                        <ul className="mb-2 mt-2 list-disc">
                          <ListTag>
                            <Description>
                              사용자 설정으로 4개(한,영,중,일)국어 지원해주는
                              <BordDescription>
                                {' '}
                                useLocalizations
                              </BordDescription>{' '}
                              훅 구현
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              <LinkDescription href="mailto:ktkwhms3@gmail.com">
                                AppState
                              </LinkDescription>
                              에 따라 인증, 인가 콜백을 실행시키는
                              <BordDescription>
                                {' '}
                                useAppStateChangeEffect
                              </BordDescription>
                              훅 구현
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              다국어 패치와 함께 발생하는 에러 처리
                            </Description>
                          </ListTag>
                        </ul>
                      </div>
                    </div> */}
                    {/* <div className="mt-4">
                      <div className="mt-2">
                        <SubTitle>
                          신세계아이앤씨 & Spvrkd
                          <Description>
                            {' '}
                            / Back Office 시스템 Front 개발
                          </Description>
                        </SubTitle>
                      </div>
                      <div className="mt-2">
                        <SoftDescription>
                          글로벌 쇼핑몰 앱 Spvrkd 웹 Back office 시스템 구현
                        </SoftDescription>
                      </div>
                      <div className="mt-1">
                        <ul className="mb-2 mt-2 list-disc">
                          <ListTag>
                            <Description>
                              상품 관리, 회원 관리, 주문 공정 관리 등 커머스
                              CMS와 관련한 비즈니스 로직 구현 과 API 연결 및
                              폴백(fallback) 처리
                            </Description>
                          </ListTag>
                          <ListTag>
                            <Description>
                              CRACO 기반으로{' '}
                              <BordDescription>
                                jsconfig 수정을 통한 절대경로 도입
                              </BordDescription>
                            </Description>
                          </ListTag>
                        </ul>
                      </div>
                    </div> */}
                    <div className="mt-6">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, Next.js, React.js, ReactNative, ReactQuery,
                        Redux, styled-components, SCSS, Less, GitLab CI, AWS S3,
                        Docker ...
                      </Description>
                    </div>

                    <div className="mt-6">
                      <Description>
                        <LinkDescription href="https://woo1031.notion.site/2-e87c8b2c792c45f0af4fa68b96661411?pvs=4">
                          🔗 자세한 내용은 이력서를 확인해주세요
                        </LinkDescription>
                      </Description>
                    </div>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            {/* <BlockWrapper>
              <div>
                <Title value={'Personal Project'} />
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
                      Notion DB 기반 개인 블로그 제작{' '}
                      <LinkButton url="https://github.com/woohyun1031/effective-memory" />
                    </SubTitle>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>
                      Notion에 주기적으로 작성하는 공부 내용 공유 목적의 블로그
                      제작
                    </SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div>
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        요즘에는 일과 취미 모두를 개발에 집중하고 있습니다. 웹
                        CS 학습과 맡은 프로젝트의 문제를 해결하는 것을
                        좋아합니다. 이러한 경험과 흥미로운 문제들을 꾸준히
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
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <ul className="mb-2 mt-2 list-disc">
                      <ListTag>
                        <Description>
                          Next.js 13+, Notion, Github API 기반한{' '}
                          <BordDescription>
                            자체적으로 블로그 인터페이스 구현
                          </BordDescription>
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          GitHub와 Vercel로
                          <BordDescription> CD 파이프라인 구축</BordDescription>
                        </Description>
                      </ListTag>
                      <ListTag>
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
                      </ListTag>
                      <ListTag>
                        <Description>
                          아티클 페이지 Chrome Lighthouse 기준 90점 이상으로
                          향상 및 아티클 검색 시 구글 첫 페이지 노출
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          Google Analytics, Vercel Analytics 연결을 통한{' '}
                          <BordDescription>
                            사용자 데이터 수집 기능 활성화
                          </BordDescription>
                        </Description>
                      </ListTag>
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
                      QUE!
                      <Description>
                        {' '}
                        / 라이브 스트리밍 에듀 플랫폼
                        <LinkButton url="https://github.com/woohyun1031/TeamQue-FE" />
                      </Description>
                    </SubTitle>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>
                      강사 1명과 다수의 학생들의 실시간 동영상 스트리밍 플랫폼
                    </SoftDescription>
                  </div>
                </div>
                <div className="lg:w-500">
                  <div>
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        비대면 실시간 스트리밍 교육 서비스 제공을 목적으로 만든
                        협업 프로젝트
                      </Description>
                    </div>
                    <div className="mt-4">
                      <SubTitle>What did I do</SubTitle>
                    </div>
                    <ul className="mb-2 mt-2 list-disc">
                      <ListTag>
                        <Description>
                          React 18, Typescript 5 기반{' '}
                          <BordDescription>
                            웹 서비스 개발, 운영
                          </BordDescription>
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          Redux Toolkit을 사용한 전역상태 관리로{' '}
                          <BordDescription>props 복잡도 개선</BordDescription>
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          React Query 도입하여 Store, Fetching 영역 분리시켜{' '}
                          <BordDescription>
                            {' '}
                            서버 상태와 클라이언트 상태 분리
                          </BordDescription>
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          Socket.io 라이브러리 활용한
                          <BordDescription>
                            {' '}
                            채팅, 실시간 반응 기능 구현
                          </BordDescription>
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          ThemeProvider(Styled Component) 로
                          <BordDescription>
                            {' '}
                            중복 style 분리시켜 50% style 재사용
                          </BordDescription>
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          <LinkDescription href="https://woo1031.notion.site/development-engineering-study-record-a43f5fe01a5d46efac38f0c6cc0893c5?pvs=4">
                            Git-Flow{' '}
                          </LinkDescription>
                          브랜치 전략 도입하여 브랜치 관리
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          프론트엔드 2명, 백엔드 2명, 디자이너 2명의 협업
                          프로젝트 진행
                        </Description>
                      </ListTag>
                    </ul>
                    <div className="mt-4">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, React, ReactQuery, Redux Toolkit,
                        styled-components, Socket.IO
                      </Description>
                    </div>
                  </div>
                </div>
              </div>
            </BlockWrapper> */}

            <BlockWrapper>
              <div>
                <Title value={'Study'} />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  새롭게 알게 된 흥미로운 문제들을 기록합니다.
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
                    More Records ?
                    <LinkButton url="https://woo1031.notion.site/development-engineering-database-2d6ebc5912ce4bc38a1ec85b857a62cd" />
                  </Description>
                </div>
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

            {/* <BlockWrapper>
              <div className="mb-10">
                <Title value={'Education'} />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  More Information?
                  <LinkButton url="https://www.notion.so/woo1031/WooHyun-Kim-975fd291ae324dfb87663e2bd9aa35ca?pvs=4#b50ca10036c84fd2a5a2489a10690717" />
                </span>
                <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
                <div className="mt-10">
                  <div className="mb-4">
                    <div>
                      <SubTitle>
                        항해99 부트캠프 5기 심화 웹 프론트엔드 수료
                        <Description>
                          {' '}
                          / 스파르타 코딩 클럽
                          <LinkButton url="https://spartacodingclub.kr/" />
                        </Description>
                      </SubTitle>
                    </div>
                    <div className="mt-2">
                      <SoftDescription>2022.01 ~ 2022.04</SoftDescription>
                    </div>

                    <ul className="mb-2 mt-2 list-disc">
                      <ListTag>
                        <Description>
                          Web CS, 알고리즘, 자료구조에 대한 기초 및 심화 학습
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          백엔드, 디자이너와 팀 프로젝트를 통한 협업 경험
                        </Description>
                      </ListTag>
                      <ListTag>
                        <Description>
                          React 기초,심화 리뉴얼 강의 내 문법, 코드 검수 및
                          테스트 매니저 진행
                        </Description>
                      </ListTag>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="mb-4">
                    <div>
                      <SubTitle>
                        정보처리산업기사 취득
                        <Description>
                          {' '}
                          / 한국산업인력공단
                          <LinkButton url="https://www.hrdkorea.or.kr/" />
                        </Description>
                      </SubTitle>
                    </div>
                    <div className="mt-2">
                      <SoftDescription>2023.11</SoftDescription>
                    </div>
                  </div>
                </div>
              </div>
            </BlockWrapper> */}

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
