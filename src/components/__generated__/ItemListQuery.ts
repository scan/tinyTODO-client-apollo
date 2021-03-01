/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ItemListQuery
// ====================================================

export interface ItemListQuery_items_edges_node {
  __typename: "Item";
  id: string;
  title: string;
  content: string | null;
}

export interface ItemListQuery_items_edges {
  __typename: "ItemEdge";
  node: ItemListQuery_items_edges_node;
}

export interface ItemListQuery_items_pageInfo {
  __typename: "PageInfo";
  endCursor: any;
  hasNextPage: boolean;
}

export interface ItemListQuery_items {
  __typename: "ItemConnection";
  edges: ItemListQuery_items_edges[];
  pageInfo: ItemListQuery_items_pageInfo;
}

export interface ItemListQuery {
  items: ItemListQuery_items;
}

export interface ItemListQueryVariables {
  count: number;
  cursor?: any | null;
}
