import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Satosushi";
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          color: "#ffffff",
          fontSize: 38,
          fontWeight: 700,
          letterSpacing: 0,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        S
      </div>
    ),
    size
  );
}
