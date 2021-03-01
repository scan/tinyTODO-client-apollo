/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateItemMutation
// ====================================================

export interface CreateItemMutation_addItem {
  __typename: "Item";
  id: string;
}

export interface CreateItemMutation {
  addItem: CreateItemMutation_addItem | null;
}

export interface CreateItemMutationVariables {
  title: string;
  content?: string | null;
}
