import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/innovativeimages/portraitphoneconsultation";
const WEBSITE_URL = "https://www.innovativeimagesphotos.com";
const PHONE = "972-335-3686";

/* ─── Components ─── */

function ElegantDivider() {
  return (
    <div className="elegant-divider">
      <span className="elegant-divider__line" />
      <span className="elegant-divider__diamond" />
      <span className="elegant-divider__line" />
    </div>
  );
}

function ProcessCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <div
        style={{
          width: 44,
          height: 44,
          margin: "0 auto 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "var(--color-coral-dim)",
          color: "var(--color-coral)",
          fontFamily: "var(--font-heading)",
          fontSize: "1.1rem",
          fontWeight: 400,
        }}
      >
        {step}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.15rem",
          marginBottom: 8,
          color: "var(--color-text)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          lineHeight: 1.7,
          color: "var(--color-text-muted)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function Testimonial({ quote, cite }: { quote: string; cite: string }) {
  return (
    <div className="card" style={{ padding: "36px 28px" }}>
      <svg
        style={{
          width: 22,
          height: 22,
          margin: "0 auto 14px",
          color: "var(--color-coral)",
          opacity: 0.35,
          display: "block",
        }}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote
        style={{
          fontSize: "0.9rem",
          fontStyle: "italic",
          color: "var(--color-text)",
          marginBottom: 14,
          lineHeight: 1.8,
          maxWidth: 380,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        {quote}
      </blockquote>
      <cite
        style={{
          fontStyle: "normal",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          color: "var(--color-coral)",
          textTransform: "uppercase",
        }}
      >
        {cite}
      </cite>
    </div>
  );
}

/* ─── Page ─── */

export default function SeniorPortraitPhotography() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/senior-hero.jpg"
          alt="Senior portrait on location with classic truck — Innovative Images Photography"
          fill
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(250,248,245,0.7), rgba(250,248,245,0.65), var(--color-bg-cream))",
          }}
        />

        <div
          className="section-container section-container--narrow"
          style={{ position: "relative", zIndex: 10, textAlign: "center", paddingTop: 48, paddingBottom: 48 }}
        >
          <Image
            src="/logo.png"
            alt="Innovative Images Photography by Kurt Nelson"
            width={280}
            height={70}
            style={{ marginBottom: 20, objectFit: "contain" }}
          />

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              lineHeight: 1.1,
              color: "var(--color-text)",
              marginBottom: 20,
            }}
          >
            Your Senior Year,{" "}
            <span style={{ color: "var(--color-coral)" }}>Captured Beautifully</span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "var(--color-text)",
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 32,
              lineHeight: 1.8,
            }}
          >
            Creative, fun senior portraits that show off the real you —
            outdoor, urban, studio, wherever your personality shines brightest.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
              Book Your Session
            </a>
            <a href={WEBSITE_URL} rel="noopener noreferrer" className="cta-btn cta-btn--outline">
              Visit Our Website
            </a>
          </div>

          <p style={{ marginTop: 20, fontSize: "1rem", color: "var(--color-text)" }}>
            Ready to talk to Kurt now?{" "}
            <a
              href={`tel:+1${PHONE.replace(/-/g, "")}`}
              style={{ color: "var(--color-coral)", fontWeight: 600, textDecoration: "none" }}
            >
              Call {PHONE}
            </a>
          </p>
        </div>
      </section>

      {/* ===== SOCIAL PROOF STRIP ===== */}
      <section
        style={{
          backgroundColor: "var(--color-bg-white)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "24px 0",
        }}
      >
        <div className="section-container" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px 40px",
              fontSize: "0.85rem",
              color: "var(--color-text-muted)",
              fontWeight: 400,
            }}
          >
            {[
              { num: "20+", label: "Years Experience" },
              { num: "500+", label: "Seniors Photographed" },
              { num: "#1", label: "McKinney\u0027s Favorite" },
            ].map((stat, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <strong style={{ color: "var(--color-coral)", fontWeight: 700, fontSize: "1rem" }}>
                  {stat.num}
                </strong>
                {stat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-cream)", paddingTop: 72, paddingBottom: 56 }}>
        <div className="section-container section-container--narrow" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.3rem)", marginBottom: 24, color: "var(--color-text)" }}>
            This Is Your Moment — Let&apos;s Make It Unforgettable
          </h2>

          <div style={{ maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.9, marginBottom: 16, textAlign: "center" }}>
              Senior year goes by fast. The late nights, the game days, the
              friendships — it all deserves to be remembered. Kurt has been
              creating{" "}
              <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>
                stunning senior portraits for over 20 years,
              </strong>{" "}
              capturing the energy, personality, and style that make each
              senior unique.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.9, textAlign: "center" }}>
              Whether you want golden hour at your favorite outdoor spot, an
              urban downtown vibe, or a polished studio look — Kurt delivers
              images you&apos;ll be proud to share, frame, and keep forever.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PORTRAIT GALLERY — mosaic layout ===== */}
      <section style={{ padding: "12px 0", backgroundColor: "var(--color-bg-warm)" }}>
        <div className="section-container section-container--wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "200px",
              gap: 10,
            }}
          >
            {/* Jumping action shot — tall portrait */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 8, gridRow: "span 2" }}>
              <Image
                src="/senior-jumping.jpg"
                alt="Senior portrait — energetic jumping shot outdoors"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            {/* Garden portrait — landscape */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 8 }}>
              <Image
                src="/senior-garden.jpg"
                alt="Senior portrait — girl in garden with flowers"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            {/* Formal blue dress — tall portrait */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 8, gridRow: "span 2" }}>
              <Image
                src="/senior-formal.jpg"
                alt="Senior portrait — formal blue dress in wildflower field"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            {/* Baseball player — landscape */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 8 }}>
              <Image
                src="/senior-baseball.jpg"
                alt="Senior portrait — baseball player in dugout"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            {/* Cowboy hat — portrait */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 8 }}>
              <Image
                src="/senior-cowboy.jpg"
                alt="Senior portrait — young man in cowboy hat outdoors"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
            {/* Lakefront — wide landscape */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 8, gridColumn: "span 2" }}>
              <Image
                src="/senior-lakefront.jpg"
                alt="Senior portrait — elegant lakefront portrait by stone chapel"
                fill
                style={{ objectFit: "cover", objectPosition: "center 25%" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ===== THE EXPERIENCE ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-cream)", paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.3rem)", marginBottom: 12, color: "var(--color-text)" }}>
            How It Works
          </h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: 44, maxWidth: 460, marginLeft: "auto", marginRight: "auto", fontSize: "0.95rem" }}>
            From first call to final images — Kurt makes the entire experience
            fun and stress-free.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <ProcessCard
              step="1"
              title="Plan Your Session"
              description="A quick call or text to talk about your vision — locations, outfits, vibe. Kurt helps you plan every detail so you feel confident and excited."
            />
            <ProcessCard
              step="2"
              title="The Photo Session"
              description="A relaxed, fun session at your chosen locations across DFW. Multiple outfit changes and Kurt's expert direction."
            />
            <ProcessCard
              step="3"
              title="Your Images"
              description="In a couple of days, you'll sit with Kurt looking over your image choices. And with his help and years of experience, together, you'll pick your favorite images."
            />
          </div>
        </div>
      </section>

      {/* ===== WHY KURT ===== */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "72px 0",
          backgroundColor: "var(--color-bg-accent-soft)",
        }}
      >
        <div className="section-container" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.3rem)", marginBottom: 24, color: "var(--color-text)" }}>
            Why Seniors (and Their Parents) Love Kurt
          </h2>

          <div style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginBottom: 32,
              }}
            >
              {[
                { label: "20+ Years", desc: "Photographing seniors across DFW" },
                { label: "On-Location", desc: "Your favorite spots, not just a studio" },
                { label: "Expert Direction", desc: "You'll look amazing, guaranteed" },
                { label: "Fast Delivery", desc: "Gallery ready in days, not weeks" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "24px 20px",
                    backgroundColor: "var(--color-bg-white)",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--color-coral)", marginBottom: 4 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.9, textAlign: "center" }}>
              Kurt knows that senior portraits aren&apos;t just pictures — they&apos;re a
              milestone. He brings the experience, the gear, and the patience to
              make every senior feel like a star. And parents? They love that
              Kurt handles everything from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-cream)", paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.3rem)", marginBottom: 44, color: "var(--color-text)" }}>
            What Families Are Saying
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Testimonial
              quote="Kurt made my daughter feel so comfortable — the photos turned out absolutely stunning. We've already ordered canvases for the whole family!"
              cite="Sarah M., McKinney Parent"
            />
            <Testimonial
              quote="I was nervous about posing, but Kurt made it so fun and easy. My friends couldn't believe how good my pictures turned out!"
              cite="Emma T., Class of 2025"
            />
            <Testimonial
              quote="We've used Kurt for all three of our kids' senior photos. He never disappoints — each session feels unique and special."
              cite="The Rodriguez Family, Frisco"
            />
          </div>

          <p style={{ marginTop: 24, fontSize: "0.7rem", color: "var(--color-text-dim)", fontStyle: "italic" }}>
            Placeholder testimonials — to be replaced with verified reviews
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-warm)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container section-container--narrow" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", marginBottom: 20, color: "var(--color-text)" }}>
            Ready to Book Your{" "}
            <span style={{ color: "var(--color-coral)" }}>Senior Session?</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 36,
              lineHeight: 1.9,
            }}
          >
            Spots fill up fast — especially during peak senior season. A quick
            phone call is all it takes to get on the calendar and start
            planning your dream session.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 28,
            }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
              Book Your Session Now
            </a>
            <a href={WEBSITE_URL} rel="noopener noreferrer" className="cta-btn cta-btn--outline">
              Visit Our Website
            </a>
          </div>

          <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
            Or call / text Kurt directly:{" "}
            <a
              href={`tel:+1${PHONE.replace(/-/g, "")}`}
              style={{
                color: "var(--color-coral)",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              {PHONE}
            </a>
          </p>

          <p
            style={{
              marginTop: 36,
              fontSize: "0.6rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--color-text-dim)",
            }}
          >
            Innovative Images Photography &bull; McKinney, Texas
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          textAlign: "center",
          padding: "32px 0",
          backgroundColor: "var(--color-bg-cream)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="section-container">
          <Image
            src="/logo.png"
            alt="Innovative Images Photography by Kurt Nelson"
            width={200}
            height={50}
            style={{ objectFit: "contain", marginBottom: 8 }}
          />
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: 4 }}>
            <a
              href={`tel:+1${PHONE.replace(/-/g, "")}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {PHONE}
            </a>{" "}
            &bull; McKinney, TX 75072
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-dim)" }}>
            &copy; {new Date().getFullYear()} Innovative Images. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
