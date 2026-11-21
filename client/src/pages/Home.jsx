import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

import heroVideo from "../videos/c6340-hero.mp4";
import { Reveal, HeroReveal } from "../components/Motion";
import { Eyebrow, FeatureCard } from "../components/Primitives";

const pillars = [
  [
    "Be the Proof",
    "Affiliates don't promote the platform. They are the proof it works.",
  ],
  [
    "Transformation First",
    "The course is the product. Everything else supports it.",
  ],
  ["Beyond Limits", "Where you come from does not decide where you can go."],
  [
    "Community Over Marketplace",
    "A private community of buyers, not a public marketplace.",
  ],
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="hero-scrim" />
        <HeroReveal className="hero-content">
          <Eyebrow>BEYOND LIMITS</Eyebrow>
          <h1>
            Beyond Content.
            <br />
            Beyond Ordinary.
            <br />
            <em>Beyond Limits.</em>
          </h1>
          <p>
            I'm building something bigger than content. A 6-hour intensive to
            transform how you speak, connect and show up. Built by me. For you.
            For society.
          </p>
          <div className="hero-actions">
            <a
              className="button button-secondary"
              href="http://www.youtube.com/@GuiluiPanmei"
              target="_blank"
              rel="noreferrer"
            >
              <PlayCircle size={18} /> Watch on YouTube
            </a>
          </div>
        </HeroReveal>
        <div className="hero-scroll">
          SCROLL <span />
        </div>
      </section>

      <Reveal as="section" className="stats-strip">
        <div className="container stats-grid">
          <article>
            <strong>1 lakh+</strong>
            <span>subscribers who trust me with their time</span>
          </article>
          <article>
            <strong>2019</strong>
            <span>the year I started, with an Android phone and a dream</span>
          </article>
          <article>
            <strong>First</strong>
            <span>
              from the Rongmei Naga community to receive the YouTube Silver Play
              Button
            </span>
          </article>
        </div>
      </Reveal>

      <Reveal as="section" className="section story-section" id="story">
        <div className="container story-grid">
          <div className="founder-art">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWzJCg51LFdQFmfVC5i-lPzW2LxKvq0B_V0HPpMNZk9L7jAIz4TcviaNKmODy9Eqnc6YP_XUJkLLHO4kAr3MPIQOFAWiMDW5TtWvHAjNA0oijkJveEx-o2AK8DiXW4e4kM_yetrMLvHfUrt8v59ZmM8IRc4_AqxT5NX0LytF9xoID7Tsnfoph993xRW2mMEzKuiOHF2ViO38nlnxZvBSfJWVtBFtjxW4GJMR1ig3MxTy1HLWC__3Q"
              alt="Guiluiyang Panmei portrait"
            />
            <span>GUILUI PANMEI · FOUNDER</span>
          </div>
          <div className="story-copy">
            <Eyebrow>MY STORY</Eyebrow>
            <h2>
              From Tamenglong to <em>Beyond Limits</em>
            </h2>
            <p>
              In 2019, I had nothing but an Android phone and a dream that felt
              too big for the life I was living. No equipment. No connections.
              No guarantee anyone would listen.
            </p>
            <p>
              Today, over 1 lakh people trust me with their time, and I became
              the first from the Rongmei Naga community to receive the YouTube
              Silver Play Button. That moment wasn't just mine. It belonged to
              everyone who was ever told where they come from decides where they
              can go.
            </p>
            <p>
              Now I'm building something bigger than content, bigger than views.
              Something for you. Something for society.
            </p>
            <p className="signature">“Built by me. For you. For society.”</p>
            {/* <Link className="text-link" to="/about">
              Read my story <ArrowRight size={16} />
            </Link> */}
          </div>
        </div>
        <div className="container pillars-grid">
          {pillars.map(([title, desc], i) => (
            <FeatureCard
              key={title}
              number={String(i + 1).padStart(2, "0")}
              title={title}
            >
              {desc}
            </FeatureCard>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section contact-teaser">
        <div className="container contact-row">
          <div>
            <Eyebrow>COMMUNICATION</Eyebrow>
            <h2>
              Let's <em>talk.</em>
            </h2>
            <p>
              Have a question about the course, your account or the programme?
            </p>
          </div>
          <Link to="/contact" className="button button-gold">
            Contact the team <ArrowRight size={17} />
          </Link>
        </div>
      </Reveal>
    </main>
  );
}