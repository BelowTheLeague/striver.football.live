// src/components/LiveNowStrip.jsx
import React from "react";

function LiveNowStrip({ matches }) {
  const all = matches || [];
  const live = all.filter((m) => m.status === "live");

  const now = new Date();

  // Find next upcoming fixture
  const upcoming = all
    .filter((m) => m.status === "not_started" && m.kickOff)
    .sort(
      (a, b) =>
        new Date(a.kickOff).getTime() - new Date(b.kickOff).getTime()
    );

  const nextFixture = upcoming[0] || null;

  const getCountdown = (kickOff) => {
    if (!kickOff) return "";
    const ko = new Date(kickOff);
    const diffMs = ko.getTime() - now.getTime();
    if (diffMs <= 0) return "Kicking off now";

    const totalMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(totalMins / 60);
    const mins = totalMins % 60;

    if (hours <= 0) return `${mins} min`;
    return `${hours}h ${mins}m`;
  };

  const nextCountdown = nextFixture
    ? getCountdown(nextFixture.kickOff)
    : "No upcoming fixture";

  const nextFixtureLabel = nextFixture
    ? `${nextFixture.homeTeam} v ${nextFixture.awayTeam}`
    : "—";

  const nextFixtureTime =
    nextFixture && nextFixture.kickOff
      ? new Date(nextFixture.kickOff).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

  // Placeholder top scorer data – swap later when you have real stats
  const topScorer = {
    name: "Vincent Aboubakar",
    goals: 5,
    country: "Cameroon",
    photo: "/players/aboubakar.png", // update path when you have it
    badge: "/badges/cameroon.png",
  };

  const sectionStyle = {
    marginTop: "24px",
  };

  const summaryRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "12px",
  };

  const summaryCardBase =
