import * as React from "react";
import { useQuery, gql } from "@apollo/client";

import Grid from "@material-ui/core/Grid";

import type { ItemListQuery } from "./__generated__/ItemListQuery";
import Item, { LIST_ITEM_FRAGMENT } from "./Item";

const ITEM_LIST_QUERY = gql`
  query ItemListQuery($count: Int! = 5, $cursor: Cursor) {
    items(first: $count, after: $cursor) {
      edges {
        node {
          id
          ...ListItem
        }
      }
    }
  }

  ${LIST_ITEM_FRAGMENT}
`;

const ItemList: React.FC = () => {
  const { loading, data, error } = useQuery<ItemListQuery>(ITEM_LIST_QUERY);

  if (error) {
    return <p>Error loading items</p>;
  }

  if (loading || !data) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {data.items.edges.map((edge) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={edge.node.id}>
          <Item item={edge.node} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
