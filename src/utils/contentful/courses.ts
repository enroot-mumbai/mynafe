import fetchGraphQL from "./graphql";

const POST_GRAPHQL_FIELDS = `
title
slug
description
coverImage {
  url
}
videosCollection(limit:50){
  items{
    courseSlug
    slug
    id
    title
    videoLink
    coverImage {
      url
    }
  }
}
`;

function extractPostEntries(fetchResponse: {
  data: { courseCollection: { items: any } };
}) {
  return fetchResponse?.data?.courseCollection?.items;
}

export async function getAllCourses(): Promise<any> {
  let entries: any[] = [];
  const result = await fetchGraphQL(
    `query {
        courseCollection(order:id_ASC){
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
  );
  entries = entries.concat(extractPostEntries(result));
  return entries;
}

export async function getCourseBySlug(slug: string): Promise<any> {
  const result = await fetchGraphQL(
    `query {
        courseCollection(where: { slug: "${slug}" }, limit: 1){
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`
  );
  return result.data.courseCollection.items[0];
}
