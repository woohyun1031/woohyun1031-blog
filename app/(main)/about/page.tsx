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
} from '@components/about';
import { getArticlesDataFromDB, IPage } from '@api/notion/notion';
import Link from 'next/link';
import { Metadata } from 'next';
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
    const notitonList = await getArticlesDataFromDB({
      page_size: 5,
      filter: {
        property: 'Status',
        status: {
          equals: '완료',
        },
      },
    });
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
                <div className="mb-2">
                  <Description>
                    안녕하세요, 2년차 프론트엔드 개발자
                    <BordDescription> 김우현</BordDescription>
                    입니다<span className="text-2xl">👋</span>
                  </Description>
                </div>

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
