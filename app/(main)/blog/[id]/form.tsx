'use client';

import React from 'react';

export default function Form({
  contents,
  title,
}: {
  contents: any;
  title: any;
}) {
  console.log(title);
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-14 mb-14 flex justify-center">
            <span className="font-sansB text-3xl text-gray-900">
              {title.properties.Name.title[0].plain_text}
            </span>
          </div>
          <div
            className="prose prose-gray mx-auto mt-8 md:prose-lg lg:prose-xl "
            dangerouslySetInnerHTML={{ __html: contents.value }}
          />
        </div>
      </div>
    </>
  );
}
