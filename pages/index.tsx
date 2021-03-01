import * as React from "react";
import type { NextPage } from "next";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Home: NextPage = () => (
  <Container>
    <Typography component="h1" variant="h3">
      List of Todos
    </Typography>
  </Container>
);

Home.displayName = "Home";

export default Home;
