import {
  executeQueryWithAutoPagination,
  type ExecuteQueryOptions,
} from '@datocms/cda-client';
import { DATOCMS_API_TOKEN } from 'astro:env/server';
import type { TadaDocumentNode } from 'gql.tada';

export async function request<Result, Variables>(
  query: TadaDocumentNode<Result, Variables>,
  options: Pick<ExecuteQueryOptions<Variables>, 'variables'>
) {
  return executeQueryWithAutoPagination(query, {
    ...options,
    excludeInvalid: true,
    token: DATOCMS_API_TOKEN,
  });
}
