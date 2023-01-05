
let preview = false;

if (process.env.VERCEL_ENV === 'preview' || process.env.VERCEL_ENV === 'development') {
  preview = true;
}

export default async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
            ? process.env.CONTENTFUL_PREVIEW_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
