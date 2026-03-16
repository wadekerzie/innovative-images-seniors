import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Senior Portrait Photography by Innovative Images Photography — McKinney, TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2c2c2c",
          position: "relative",
        }}
      >
        {/* Coral accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: "#c97b6b",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={320}
            height={80}
            style={{ objectFit: "contain", marginBottom: 36 }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 60,
                height: 1,
                backgroundColor: "#c97b6b",
              }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#c97b6b",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                width: 60,
                height: 1,
                backgroundColor: "#c97b6b",
              }}
            />
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Senior Portrait Photography
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#c97b6b",
              textAlign: "center",
              letterSpacing: "4px",
              textTransform: "uppercase" as const,
              fontWeight: 400,
              marginBottom: 20,
            }}
          >
            Creative &bull; Fun &bull; Unforgettable
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#9e9892",
              textAlign: "center",
              letterSpacing: "2px",
            }}
          >
            McKinney, TX &bull; Serving the DFW Metroplex
          </div>
        </div>

        {/* Coral accent line at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: "#c97b6b",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
