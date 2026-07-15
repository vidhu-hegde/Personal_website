import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#FAFAF9",
          color: "#1A1A1A",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #E7E5E4",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 600 }}>Vidhatri Hegde</div>
          <div
            style={{
              fontSize: 18,
              color: "#425166",
              border: "1px solid #D9E1EC",
              background: "#E9EEF5",
              borderRadius: 999,
              padding: "10px 18px",
            }}
          >
            Ranked portfolio
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "880px" }}>
          <div style={{ fontSize: 72, lineHeight: 0.96, fontWeight: 600 }}>
            Product-minded, technically grounded, and very comfortable with messy projects.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#666D78" }}>
            Searchable project notes, ranked work, and structured case studies from Vidhatri Hegde.
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["PM", "Technical", "Leadership", "Research"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #E7E5E4",
                borderRadius: 999,
                padding: "12px 18px",
                fontSize: 20,
                background: "#FFFFFF",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
