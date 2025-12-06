// src/components/TablesPage.jsx
import React from "react";
import GroupsTable from "./GroupsTable";

function TablesPage() {
  const pageStyle = {
    marginTop: "16px",
  };

  return (
    <section style={pageStyle}>
      <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
        Tournament Tables
      </h2>
      <GroupsTable />
    </section>
  );
}

export default TablesPage;
