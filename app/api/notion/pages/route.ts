import { NextRequest, NextResponse } from 'next/server';

export async function GET({ nextUrl }: NextRequest) {
  const { searchParams } = nextUrl;
  const id = searchParams.get('id');
  try {
    const response = await fetch(
      `${process.env.NOTION_PUBLIC_URL}/pages/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
      },
    );
    const responseJSON = await response.json();
    return NextResponse.json(responseJSON);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}
