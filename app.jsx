const { useState, useEffect, useMemo, useCallback } = React;

// --------------------------------------------------------------------------
// Verified Profiles & Links Configuration for Kanishgar M
// --------------------------------------------------------------------------
const LINKS_DATA = [
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "in/kanishgar-m-ba7203299",
    url: "https://linkedin.com/in/kanishgar-m-ba7203299",
    category: "social",
    categoryLabel: "Network",
    description: "Professional network, career highlights, and recommendations.",
    brandColor: "var(--linkedin-color)",
    bgColor: "var(--linkedin-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    id: "github",
    name: "GitHub",
    handle: "github.com/Kanishgar",
    url: "https://github.com/Kanishgar",
    category: "code",
    categoryLabel: "Code",
    description: "Repositories, full-stack software projects, and open-source contributions.",
    brandColor: "var(--github-color)",
    bgColor: "var(--github-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "leetcode.com/u/Kanishgar05",
    url: "https://leetcode.com/u/Kanishgar05/",
    category: "coding",
    categoryLabel: "DSA",
    description: "Data structures, algorithmic problem solving, and streaks.",
    brandColor: "var(--leetcode-color)",
    bgColor: "var(--leetcode-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 5.86 5.86 0 0 0 3.616-.92 5.952 5.952 0 0 0 2.257-2.693l.021-.053 2.672-6.28 2.052-2.188A1.375 1.375 0 0 0 16.2 6.25l-2.02 2.15-2.428 5.706a3.22 3.22 0 0 1-1.22 1.455 3.167 3.167 0 0 1-1.954.498 3.208 3.208 0 0 1-2.604-2.091 3.045 3.045 0 0 1-.033-1.277 2.9 2.9 0 0 1 .654-1.137l3.854-4.126 5.406-5.788A1.375 1.375 0 0 0 13.483 0zm-2.866 12.815a1.375 1.375 0 0 0-1.375 1.375v.005a1.375 1.375 0 0 0 1.375 1.375h9.625a1.375 1.375 0 0 0 1.375-1.375v-.005a1.375 1.375 0 0 0-1.375-1.375H10.617z"/>
      </svg>
    )
  },
  {
    id: "codeforces",
    name: "Codeforces",
    handle: "codeforces.com/profile/Kanishgar",
    url: "https://codeforces.com/profile/Kanishgar",
    category: "coding",
    categoryLabel: "Contests",
    description: "Competitive programming contests, ratings, and problem sets.",
    brandColor: "var(--codeforces-color)",
    bgColor: "var(--codeforces-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zm7.5-4.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-3 0V4.5A1.5 1.5 0 0 1 12 3zm7.5 7.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 1.5-1.5z"/>
      </svg>
    )
  },
  {
    id: "gfg",
    name: "GeeksforGeeks",
    handle: "geeksforgeeks.org/profile/kanishgar",
    url: "https://www.geeksforgeeks.org/profile/kanishgar",
    category: "coding",
    categoryLabel: "DSA",
    description: "Problem of the Day, algorithms practice, and CS fundamentals.",
    brandColor: "var(--gfg-color)",
    bgColor: "var(--gfg-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 6.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-5 11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75zm6.5 0c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75s.784-1.75 1.75-1.75zm-1.5-6.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"/>
      </svg>
    )
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    handle: "hackerrank.com/kanishgar221",
    url: "https://www.hackerrank.com/profile/kanishgar221",
    category: "coding",
    categoryLabel: "Certificates",
    description: "Domain certifications, algorithmic challenges, and skill badges.",
    brandColor: "var(--hackerrank-color)",
    bgColor: "var(--hackerrank-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm3.48 16.48h-1.92v-3.36h-3.12v3.36H8.52V7.52h1.92v3.36h3.12V7.52h1.92z"/>
      </svg>
    )
  },
  {
    id: "email",
    name: "Email Contact",
    handle: "kanishgar221@gmail.com",
    url: "mailto:kanishgar221@gmail.com",
    copyValue: "kanishgar221@gmail.com",
    category: "contact",
    categoryLabel: "Direct",
    description: "Get in touch for software engineering roles, collaborations, or inquiries.",
    brandColor: "var(--email-color)",
    bgColor: "var(--email-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  }
];

// --------------------------------------------------------------------------
// Main Application Component
// --------------------------------------------------------------------------
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("preferred-theme") || "light");
  const [copiedId, setCopiedId] = useState(null);
  const [linksCategory, setLinksCategory] = useState("all");
  const [toast, setToast] = useState(null);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("preferred-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  // Toast alert
  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 2800);
  }, []);

  // Copy handler
  const handleCopy = useCallback((item) => {
    const textToCopy = item.copyValue || item.url;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedId(item.id);
        showToast(`Copied ${item.name} link!`);
        setTimeout(() => setCopiedId(null), 2000);
      }).catch(() => fallbackCopy(textToCopy, item));
    } else {
      fallbackCopy(textToCopy, item);
    }
  }, [showToast]);

  const fallbackCopy = (text, item) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopiedId(item.id);
    showToast(`Copied ${item.name} link!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered links
  const filteredLinks = useMemo(() => {
    if (linksCategory === "all") return LINKS_DATA;
    return LINKS_DATA.filter(l => l.category === linksCategory);
  }, [linksCategory]);

  return (
    <div>
      {/* Navigation Header */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo-badge">
            <span className="logo-icon">K</span>
            <span>Kanishgar<span style={{ color: "var(--accent-primary)" }}>.dev</span></span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)" }}>
              {filteredLinks.length} Profiles
            </span>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="container" style={{ paddingBottom: "4rem" }}>
        {/* Profile Card */}
        <section id="about" className="hero-section">
          <div className="profile-card">
            <div className="profile-top">
              <div className="avatar-wrapper">
                <img src="assets/avatar-placeholder.svg" alt="Kanishgar M Avatar" className="avatar-img" />
                <span className="status-indicator" title="Active"></span>
              </div>
              <div className="profile-info">
                <div className="name-badge-group">
                  <h1 className="profile-name">Kanishgar M</h1>
                  <span className="open-badge">
                    <span className="open-badge-dot"></span>
                    Open to Opportunities
                  </span>
                </div>
                <p className="profile-tagline">Software Engineer • Competitive Programmer • Problem Solver</p>
                <p className="profile-bio">
                  Welcome! Quick access to all my verified profiles across competitive programming, open source code, and professional networks. Copy any link to your clipboard or open it directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links Hub (Copy & Open) */}
        <section id="links" className="links-section">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>🔗 Verified Links & Profiles</h2>
              <p>Click <strong>Copy Link</strong> to save to your clipboard, or <strong>Open</strong> to view directly.</p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills-bar">
            {[
              { id: "all", label: "All Links" },
              { id: "coding", label: "Competitive Programming & DSA" },
              { id: "code", label: "Open Source Code" },
              { id: "social", label: "Professional Network" },
              { id: "contact", label: "Contact" }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setLinksCategory(cat.id)}
                className={`filter-btn ${linksCategory === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Links Grid */}
          <div className="links-grid">
            {filteredLinks.map(item => {
              const isCopied = copiedId === item.id;
              return (
                <div key={item.id} className="link-card">
                  <div className="link-card-top">
                    <div className="link-icon-box" style={{ background: item.bgColor, color: item.brandColor }}>
                      {item.icon}
                    </div>
                    <div className="link-card-meta">
                      <h3 className="link-platform-name">{item.name}</h3>
                      <span className="link-handle">{item.handle}</span>
                    </div>
                    <span className="link-cat-badge">{item.categoryLabel}</span>
                  </div>

                  <p className="link-description">{item.description}</p>

                  {/* Actions: Copy & Open */}
                  <div className="link-actions-group">
                    <button
                      onClick={() => handleCopy(item)}
                      className={`btn-copy ${isCopied ? "copied" : ""}`}
                      title={`Copy ${item.name} link`}
                    >
                      {isCopied ? (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>

                    <a
                      href={item.url}
                      target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="btn-open"
                      title={`Open ${item.name}`}
                    >
                      <span>Open</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="toast-notification">
          <span>✓</span>
          <span>{toast}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-links">
            <a href="https://linkedin.com/in/kanishgar-m-ba7203299" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/Kanishgar" target="_blank" rel="noopener">GitHub</a>
            <a href="https://leetcode.com/u/Kanishgar05/" target="_blank" rel="noopener">LeetCode</a>
            <a href="https://codeforces.com/profile/Kanishgar" target="_blank" rel="noopener">Codeforces</a>
            <a href="https://www.geeksforgeeks.org/profile/kanishgar" target="_blank" rel="noopener">GeeksforGeeks</a>
            <a href="https://www.hackerrank.com/profile/kanishgar221" target="_blank" rel="noopener">HackerRank</a>
          </div>
          <p>© 2026 Kanishgar M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Mount Root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
