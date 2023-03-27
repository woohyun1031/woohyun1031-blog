import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-14 mb-8">
            <span className="font-sansM text-3xl text-gray-900">블로그</span>
          </div>

          <div className="group mt-14 flex w-full cursor-pointer flex-col align-middle lg:flex-row">
            <img
              src="https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png"
              className="mr-12 h-56 w-full rounded-xl object-cover transition delay-75 duration-500 ease-in-out group-hover:z-0 group-hover:-translate-y-2 group-hover:shadow-lg lg:w-56"
            />
            <div>
              <span className="mt-4 mb-4 inline-block font-sansM text-3xl text-gray-800 transition delay-75 duration-500 ease-in-out group-hover:text-blue-600 lg:mt-0">
                tosspayments-restdocs: 선언형 문서 작성 라이브러리
              </span>
              <span className="mb-4 inline-block font-sansM text-xl text-gray-700">
                REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게
                대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에
                녹인 기술들을 소개합니다.
              </span>
              <span className="inline-block font-sansM text-base text-gray-600">
                2023-03-27
              </span>
            </div>
          </div>

          <div className="mt-14 flex w-full flex-col align-middle lg:flex-row lg:items-center">
            <img
              className="mr-12 h-56 w-full rounded-xl object-cover lg:w-56"
              src="https://toss.tech/wp-content/uploads/2023/03/declarative.png"
            />
            <div className="flex flex-col">
              <span className="mt-4 mb-4 inline-block font-sansM text-3xl text-gray-800 lg:mt-0">
                선언적인 코드 작성하기
              </span>
              <span className="mb-4 inline-block font-sansM text-xl text-gray-700">
                선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고
                있을까요?
              </span>
              <span className="inline-block font-sansM text-base text-gray-600">
                2023-03-26
              </span>
            </div>
          </div>

          <div className="mt-14 flex w-full flex-col align-middle lg:flex-row">
            <img
              src="https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png"
              className="mr-12 h-56 w-full rounded-xl object-cover lg:w-56"
            />
            <div>
              <span className="mt-4 mb-4 inline-block font-sansM text-3xl text-gray-800 lg:mt-0">
                tosspayments-restdocs: 선언형 문서 작성 라이브러리
              </span>
              <span className="mb-4 inline-block font-sansM text-xl text-gray-700">
                REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게
                대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에
                녹인 기술들을 소개합니다.
              </span>
              <span className="inline-block font-sansM text-base text-gray-600">
                2023-03-27
              </span>
            </div>
          </div>

          <div className="mt-14 flex w-full flex-col align-middle lg:flex-row lg:items-center">
            <img
              className="mr-12 h-56 w-full rounded-xl object-cover lg:w-56"
              src="https://toss.tech/wp-content/uploads/2023/03/declarative.png"
            />
            <div className="flex flex-col">
              <span className="mt-4 mb-4 inline-block font-sansM text-3xl text-gray-800 lg:mt-0">
                선언적인 코드 작성하기
              </span>
              <span className="mb-4 inline-block font-sansM text-xl text-gray-700">
                선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고
                있을까요?
              </span>
              <span className="inline-block font-sansM text-base text-gray-600">
                2023-03-26
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
