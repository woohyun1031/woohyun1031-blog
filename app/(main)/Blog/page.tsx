import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-14 mb-8">
            <span className="font-sansM text-3xl text-gray-900">개발</span>
          </div>

          <div className="flex w-full align-middle flex-col lg:flex-row mt-14">
            <img
              src="https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png"
              className="rounded-xl lg:w-56 w-full h-56 object-cover mr-12"
            />
            <div>
              <span className="font-sansM text-3xl text-gray-800 inline-block mt-4 mb-4 lg:mt-0">
                tosspayments-restdocs: 선언형 문서 작성 라이브러리
              </span>
              <span className="font-sansM text-xl text-gray-700 inline-block mb-4">
                REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게
                대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에
                녹인 기술들을 소개합니다.
              </span>
              <span className="font-sansM text-base text-gray-600 inline-block">
                2023-03-27
              </span>
            </div>
          </div>

          <div className="flex w-full align-middle flex-col lg:flex-row mt-14 lg:items-center">
            <img
              className="rounded-xl lg:w-56 w-full h-56 object-cover mr-12"
              src="https://toss.tech/wp-content/uploads/2023/03/declarative.png"
            />
            <div className="flex flex-col">
              <span className="font-sansM text-3xl text-gray-800 inline-block mt-4 mb-4 lg:mt-0">
                선언적인 코드 작성하기
              </span>
              <span className="font-sansM text-xl text-gray-700 inline-block mb-4">
                선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고
                있을까요?
              </span>
              <span className="font-sansM text-base text-gray-600 inline-block">
                2023-03-26
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
