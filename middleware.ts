import { NextRequest, NextResponse } from 'next/server';

async function middleware(request: NextRequest) {
  // console.log('request!!:::', request);
  // if (
  //   request.nextUrl.pathname ===
  //   '/article/eaddrinuse-address-already-in-use-error-%ED%95%B4%EA%B2%B0-%EB%B0%8F-%EC%95%88%EC%A0%84%ED%95%98%EA%B2%8C-process%EB%A5%BC-kill-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95'
  // ) {
  //   return NextResponse.redirect(new URL('/auth/login', request.url));
  // }
  return NextResponse.next();
}
export default middleware;
