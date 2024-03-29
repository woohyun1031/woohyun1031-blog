import { NextRequest, NextResponse } from 'next/server';

export interface IContributionInfo {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionCount: any;
      date: any;
    }[];
  };
}

export interface IUserContributionData {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: IContributionInfo;
      };
    };
  };
  errors?: {
    type: string;
    path: any[];
    locations: any[];
    message: string;
  }[];
}

const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export async function GET({ nextUrl }: NextRequest) {
  const { searchParams } = nextUrl;
  const userName = searchParams.get('username');

  const variables = `
  {
    "userName": "${userName}"
  }
`;
  const body = {
    query,
    variables,
  };

  try {
    const response = await fetch(`${process.env.GITHUB_PUBLIC_URL}/graphql`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify(body),
    });
    const responseJSON = (await response.json()) as IUserContributionData;

    if (responseJSON?.errors) {
      throw new Error(responseJSON.errors[0].message);
    }

    const result =
      responseJSON.data.user.contributionsCollection.contributionCalendar;
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}
