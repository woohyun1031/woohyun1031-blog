import dayjs from 'dayjs';
import {
  Description,
  BordDescription,
  SoftDescription,
  LinkButton,
  SubTitle,
  BlockWrapper,
  Title,
} from '@components/about';
import { getArticlesFromDB, IPage } from '@api/notion';
import Link from 'next/link';
import React from 'react';
import URL from '@constants/url';
import ContributionTable from '@components/about/ContributionTable';
import Desk from '@components/Desk';

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
        <div className="min-h-screen w-full max-w-container">
          <div className="mt-36 flex w-full flex-col justify-center px-12">
            <div>
              <div className="mt-12 flex justify-center sm:mt-12 lg:mt-20">
                <div>
                  <Desk />
                  <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                    <LinkButton
                      url={URL.personality}
                      className="ml-1 mr-1 text-sm"
                    />
                    &quot; my identity &quot;
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-12 w-full lg:mt-20">
                  <div className="mb-2">
                    <Description>
                      안녕하세요, 프론트엔드 개발자
                      <BordDescription> 김우현</BordDescription>
                      입니다.
                    </Description>
                  </div>

                  <div className="mb-2">
                    <Description>
                      사용자 문제를 해결하는 기능을 구축하고 기술적으로
                      고도화하는 작업을 하고 있습니다. <br />
                      TypeScript와 React.js, Next.js를 주로 사용하지만
                      Vanilla.js로 개인 작업 하는 것도 선호합니다.
                    </Description>
                  </div>
                  <div className="mb-2">
                    <Description>
                      요즘에는 일과 취미 모두를 개발에 집중하고 있습니다. 이러한
                      경험과 흥미로운 문제들을 꾸준히
                      <LinkButton url={URL.notion} className="ml-2 mr-1" />
                      노션에 기록하고 있습니다. <br />
                      가끔 직접적으로 접하는 문제들에 대해 노션과 연동하여
                      <LinkButton url={URL.blog} className="ml-2 mr-1" />
                      이곳에 글을 업로드 하기도 합니다.
                    </Description>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-6">
                  <Link href={URL.mail} target="_blank">
                    <div
                      className="cursor-pointer break-normal font-sansT text-sm 
                    text-red-400 duration-300 ease-in-out 
                    hover:text-gray-700 
                    dark:text-red-400 dark:hover:text-gray-300 
                    sm:text-xs"
                    >
                      e_mail
                    </div>
                  </Link>

                  <Link href={URL.resume} target="_blank">
                    <div
                      className="cursor-pointer break-normal font-sansT text-sm 
                    text-red-400 duration-300 ease-in-out 
                    hover:text-gray-700 
                    dark:text-red-400 dark:hover:text-gray-300 
                    sm:text-xs"
                    >
                      resume
                    </div>
                  </Link>
                  <Link href={URL.github} target="_blank">
                    <div
                      className="cursor-pointer break-normal font-sansT text-sm 
                    text-red-400 duration-300 ease-in-out 
                    hover:text-gray-700 
                    dark:text-red-400 dark:hover:text-gray-300 
                    sm:text-xs"
                    >
                      github
                    </div>
                  </Link>

                  <Link href={URL.notion} target="_blank">
                    <div
                      className="cursor-pointer break-normal font-sansT text-sm 
                    text-red-400 duration-300 ease-in-out 
                    hover:text-gray-700 
                    dark:text-red-400 dark:hover:text-gray-300 
                    sm:text-xs"
                    >
                      notion
                    </div>
                  </Link>

                  <Link href={URL.blog} target="_blank">
                    <div
                      className="cursor-pointer break-normal font-sansT text-sm 
                    text-red-400 duration-300 ease-in-out 
                    hover:text-gray-700 
                    dark:text-red-400 dark:hover:text-gray-300 
                    sm:text-xs"
                    >
                      blog
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <BlockWrapper>
              <div>
                <Title value="Work Experience" />
                <div className="mt-2 block text-xs text-gray-400 dark:text-gray-500 lg:ml-4 lg:inline">
                  More Information?
                  <LinkButton url={URL.resume} className="ml-2 text-sm" />
                </div>
              </div>
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
              <div className="mt-10">
                <div className="mb-10">
                  <div>
                    <Title>
                      Actbase.llc
                      <Description>
                        {' '}
                        /{' '}
                        <span className="mt-6 text-xs text-gray-400 dark:text-gray-500">
                          Frontend Developer
                          <LinkButton
                            url={URL.actbase}
                            className="ml-2 text-sm"
                          />
                        </span>
                      </Description>
                    </Title>
                  </div>
                  <div className="mt-2">
                    <SoftDescription>2022.08 ~ 2023.12</SoftDescription>
                  </div>
                </div>
                <div className="">
                  <div className="mt-12">
                    <div className="mt-4">
                      <SubTitle>Description</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        개발팀의 신입 팀원으로 다양한 프로젝트를 경험하고
                        프론트엔드 개발에 대한 전문성을 쌓았습니다.
                      </Description>
                    </div>
                    <div>
                      <Description>
                        React와 Next.js 기반의 프로젝트를 구축하고 기획부터
                        배포되는 과정까지 프로젝트의 전반적인 사이클을
                        직접적으로 경험할 수 있었습니다.
                      </Description>
                    </div>

                    {/* <div className="mt-6">
                      <SubTitle>Tech Stack</SubTitle>
                    </div>
                    <div className="mt-2">
                      <Description>
                        TypeScript, Next.js, React.js, ReactNative, ReactQuery,
                        Redux, styled-components, SCSS, Less, GitLab CI, AWS S3,
                        Docker ...
                      </Description>
                    </div> */}

                    <div className="mt-6 text-xs text-gray-400 dark:text-gray-500">
                      <LinkButton
                        url={URL.resume}
                        className="ml-1 mr-1 text-sm"
                      />
                      자세한 내용은 이력서를 확인해주세요
                    </div>
                  </div>
                </div>
              </div>
            </BlockWrapper>

            <BlockWrapper>
              <div>
                <Title value="Study" />
                <div className="mt-2 block text-xs text-gray-400 dark:text-gray-500 lg:ml-4 lg:inline">
                  새롭게 알게 된 흥미로운 문제들을 노션에 기록합니다.
                  <LinkButton url={URL.studyDb} className="ml-2 text-sm" />
                </div>
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

            <BlockWrapper keyword="Commits">
              <div className="mb-10">
                <Title value="Commits" />
                <div className="mt-2 block text-xs text-gray-400 dark:text-gray-500 lg:ml-4 lg:inline">
                  I love programming.
                  <LinkButton url={URL.github} className="ml-2 text-sm" />
                </div>
                <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
                <div className="mt-10">
                  <ContributionTable />
                </div>
                <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                  <LinkButton
                    url={URL.react_contribution_viewer}
                    className="ml-1 mr-1 text-sm"
                  />
                  &quot;react-contribution-viewer&quot; project, you can find it
                  on npm
                </div>
              </div>
            </BlockWrapper>
            <BlockWrapper>
              <div className="mb-10 text-center">
                <span className="mt-2 block text-xs text-gray-400 dark:text-gray-500 lg:ml-4 lg:inline">
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
