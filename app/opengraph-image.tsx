import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Satosushi - Simple software for online businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafafa",
          color: "#111111",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: 0,
          }}
        >
          <span>Satosushi</span>
          <span style={{ color: "#737373" }}>satosushi.co</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              width: 64,
              height: 2,
              background: "#111111",
            }}
          />
          <h1
            style={{
              margin: 0,
              maxWidth: 820,
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            Simple software for online businesses.
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 680,
              color: "#525252",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            Focused tools for founders, creators, and small teams.
          </p>
        </div>
      </div>
    ),
    size
  );
}
