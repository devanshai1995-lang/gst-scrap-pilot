* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f7fb;
  --surface: #ffffff;
  --primary: #0f766e;
  --primary-dark: #115e59;
  --text: #0f172a;
  --muted: #475569;
  --border: #dbe2ea;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

.container {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  font-size: 1.3rem;
  font-weight: 700;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
}

.hero {
  padding: 80px 0 56px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 32px;
  align-items: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  color: var(--primary);
  font-weight: 700;
}

h1 {
  font-size: clamp(2.3rem, 5vw, 4rem);
  margin: 12px 0;
  line-height: 1.1;
}

.lead {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 640px;
}

.cta-row {
  margin-top: 24px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 700;
}

.button.primary {
  background: var(--primary);
  color: white;
}

.button.secondary {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
}

.hero-card,
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
}

.hero-card {
  padding: 24px;
}

.hero-card h3 {
  margin-top: 0;
}

.hero-card ul {
  margin: 16px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.9;
}

.section {
  padding: 72px 0;
}

.alt {
  background: #edf6f5;
}

h2 {
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin-bottom: 28px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.card {
  padding: 22px;
}

.card h3 {
  margin-top: 0;
}

.card p {
  color: var(--muted);
  line-height: 1.7;
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.pill-row span {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 600;
}

.steps {
  margin: 0;
  padding-left: 24px;
  line-height: 2;
  color: var(--muted);
  font-size: 1.05rem;
}

.site-footer {
  border-top: 1px solid var(--border);
  background: white;
  padding: 24px 0;
  color: var(--muted);
}

@media (max-width: 768px) {
  .hero-grid,
  .card-grid {
    grid-template-columns: 1fr;
  }

  nav {
    display: none;
  }

  .hero {
    padding-top: 48px;
  }
}
