import { ImageResponse } from "next/og";

export const alt = "GEORGIAN";
export const contentType = "image/png";
export const size = {
  height: 630,
  width: 1200,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(181,139,66,0.24), transparent 22%), linear-gradient(135deg, #0b0d10 0%, #15181d 55%, #1f2328 100%)",
          color: "#f4eee3",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            alignItems: "center",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            color: "rgba(244,238,227,0.75)",
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.4em",
            padding: "14px 22px",
            textTransform: "uppercase",
          }}
        >
          Capítulo 01
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 118,
              letterSpacing: "0.32em",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            GEORGIAN
          </div>
          <div
            style={{
              color: "rgba(244,238,227,0.72)",
              display: "flex",
              fontSize: 34,
              letterSpacing: "0.06em",
              maxWidth: "760px",
            }}
          >
            Lujo accesible, destilado para armarios contemporáneos.
          </div>
        </div>

        <div
          style={{
            color: "rgba(244,238,227,0.58)",
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.2em",
            justifyContent: "space-between",
            textTransform: "uppercase",
            width: "100%",
          }}
        >
          <span>Sevilla</span>
          <span>Comercio editorial</span>
          <span>Sastrería moderna</span>
        </div>
      </div>
    ),
    size,
  );
}
