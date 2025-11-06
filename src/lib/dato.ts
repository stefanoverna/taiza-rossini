export async function request<TResult = unknown, TVariables = Record<string, unknown>>(
  query: string,
  variables?: TVariables
): Promise<TResult> {
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_TOKEN}`,
      "X-Exclude-Invalid": "true",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Failed request: ${response.statusText}`);
  }

  const result = await response.json();
  return result.data;
}
