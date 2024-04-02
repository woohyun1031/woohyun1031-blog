import dayjs from 'dayjs';
import {
  Description,
  BordDescription,
  SoftDescription,
  LinkButton,
  SubTitle,
  BlockWrapper,
  Title,
  ContributionGraph,
} from '@components/about';
import { getArticlesFromDB, IPage } from '@apis/notion';
import Link from 'next/link';
import React from 'react';
import URL from '@constants/url';

export const revalidate = 3600;

export default async function Page() {
  async function getNotionPageList() {
    const notitonList = await getArticlesFromDB({
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
                    사용자 문제를 해결하는 기능을 구축하고 기술적으로 고도화하는
                    작업을 하고 있습니다<span className="text-2xl">🚀</span>
                    <br />
                    TypeScript와 React.js, Next.js를 주로 사용하지만
                    Vanilla.js로 개인 작업 하는 것도 선호합니다.
                  </Description>
                </div>
                <div className="mb-2">
                  <Description>
                    요즘에는 일과 취미 모두를 개발에 집중하고 있습니다. 이러한
                    경험과 흥미로운 문제들을 꾸준히
                    <LinkButton url={URL.notion} className="ml-2 mr-1" />
                    노션에 기록하고 있습니다.{' '}
                    {/* <LinkDescription href={URL.notion}>
                      {' '}
                      🔗노션에 기록하고 있습니다.{' '}
                    </LinkDescription> */}
                    가끔 직접적으로 접하는 문제들에 대해 노션과 연동하여
                    <LinkButton url={URL.blog} className="ml-2 mr-1" />
                    이곳에 글을 업로드 하기도 합니다.
                    {/* <LinkDescription href={URL.blog}>
                      {' '}
                      🔗이곳에 글을 업로드 하기도 합니다.
                    </LinkDescription> */}
                  </Description>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap">
                <Link href={URL.mail} target="_blank">
                  <div className="cursor-pointer break-normal font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-xs">
                    e_mail
                  </div>
                </Link>

                <Link href={URL.resume} target="_blank">
                  <div className="ml-6 cursor-pointer break-normal font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-xs">
                    resume
                  </div>
                </Link>
                <Link href={URL.github} target="_blank">
                  <div className="ml-6 cursor-pointer break-normal font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-xs">
                    github
                  </div>
                </Link>

                <Link href={URL.notion} target="_blank">
                  <div className="ml-6 cursor-pointer break-normal font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-xs">
                    notion
                  </div>
                </Link>

                <Link href={URL.blog} target="_blank">
                  <div className="ml-6 cursor-pointer break-normal font-sansM text-sm text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-xs">
                    blog
                  </div>
                </Link>
              </div>
            </div>

            <BlockWrapper>
              <div>
                <Title value="Work Experience" />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  More Information?
                  <LinkButton className="ml-2" url={URL.resume} />
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-10">
                  <div>
                    <Title>
                      Actbase.llc
                      <Description> / Frontend Developer</Description>
                      <LinkButton className="ml-2" url={URL.actbase} />
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
                        첫 회사로 다양한 프로젝트를 진행하며 프론트엔드 개발에
                        대한 전문성을 쌓았습니다. 주로 고객사 어플리케이션의
                        프론트엔드 기술 환경을 구축하고 개발을 진행했습니다.
                      </Description>
                    </div>
                    <div>
                      <Description>
                        React와 Next.js 기반의 프로젝트를 구축하였으며 기획부터
                        배포되는 과정까지 프로젝트의 전반적인 사이클을
                        직접적으로 경험할 수 있었습니다.
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
                        <LinkButton url={URL.resume} className="mr-1" />
                        자세한 내용은 이력서를 확인해주세요
                        {/* <LinkDescription href={URL.resume}>
                          🔗 자세한 내용은 이력서를 확인해주세요
                        </LinkDescription> */}
                      </Description>
                    </div>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value="Study" />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  새롭게 알게 된 흥미로운 문제들을 기록합니다.
                  <LinkButton className="ml-2" url={URL.studyDb} />
                </span>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10">
                {await getNotionPageList()?.then((response) => {
                  return response?.results?.map((value: IPage) => {
                    return (
                      <>
                        <div className="mt-2">
                          <Description>
                            <LinkButton
                              className="mr-2"
                              url={value.url.replace(
                                'https://www.notion.so/',
                                'https://woo1031.notion.site/',
                              )}
                            />
                            {value?.properties.Name?.title[0]?.text?.content}
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
                    <LinkButton className="ml-2" url={URL.studyDb} />
                  </Description>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div className="mb-10">
                <Title value="Commits" />
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  I love programming.
                  <LinkButton className="ml-2" url={URL.github} />
                </span>
                <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
                {/* <div className="mt-10">
                  <GithubCalendar />
                </div> */}
                <div className="mt-10">
                  <ContributionGraph username="woohyun1031" />
                </div>
              </div>
            </BlockWrapper>
            <BlockWrapper>
              <div className="mb-10 text-center">
                <span className="mt-2 block font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base lg:ml-4 lg:inline">
                  More Information?
                  <LinkButton className="ml-2" url={URL.notion} />
                </span>
              </div>
            </BlockWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
