// src/components/FixturesPage.jsx
import React from "react";
import { getFixtures } from "../data/matches";
import FixturesList from "./FixturesList";

function FixturesPage() {
  const fixtures = getFixtures();

  const pageStyle = {
    marginTop: "16px",
  };

  return (
    <section style={pageStyle}>
      <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
        Fixtures
      </h2>
      <FixturesList fixtures={fixtures} />
    </section>
  );
}

export default FixturesPage;
