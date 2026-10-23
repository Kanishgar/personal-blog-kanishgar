const { useState, useEffect, useMemo, useCallback } = React;

// --------------------------------------------------------------------------
// Data Configuration for Kanishgar M
// --------------------------------------------------------------------------
const LINKS_DATA = [
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "in/kanishgar-m-ba7203299",
    url: "https://linkedin.com/in/kanishgar-m-ba7203299",
    category: "social",
    categoryLabel: "Network",
    description: "Professional network, career highlights, and engineering recommendations.",
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
    description: "Personal repositories, full-stack open-source projects, and code contributions.",
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
    description: "300+ problems solved, continuous streak badges, and algorithm mastery.",
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
    description: "Contest ratings, speed problem solving, and math-oriented competitive programming.",
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
    description: "Problem of the Day (POTD), data structures practice, and core interview prep.",
    brandColor: "var(--gfg-color)",
    bgColor: "var(--gfg-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 6.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-5 11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75zm6.5 0c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm-1.5-6.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"/>
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
    description: "Verified problem solving badges, domain skills, and language certifications.",
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
    description: "Get in touch directly for engineering roles, project inquiries, or conversations.",
    brandColor: "var(--email-color)",
    bgColor: "var(--email-bg)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  }
];

const INITIAL_TRACKING = [
  { id: "TRK-01", category: "DSA", task: "Solve 350+ LeetCode DSA Problems", target: "350 problems", progress: "310 problems", progressPct: 88, status: "in-progress", updated: "2026-10-22" },
  { id: "TRK-02", category: "DSA", task: "Maintain 100-Day Problem Solving Streak on LeetCode", target: "100 days", progress: "100 days", progressPct: 100, status: "completed", updated: "2026-10-20" },
  { id: "TRK-03", category: "DSA", task: "GeeksforGeeks POTD & Core Interview Preparation", target: "150 problems", progress: "150 problems", progressPct: 100, status: "completed", updated: "2026-10-18" },
  { id: "TRK-04", category: "Projects", task: "Deploy Personal Blog & Public Progress Hub to GitHub", target: "1 live site", progress: "Completed", progressPct: 100, status: "completed", updated: "2026-10-23" },
  { id: "TRK-05", category: "DSA", task: "Codeforces Contest Rating Milestone (Pupil Target)", target: "1400 rating", progress: "Active rounds", progressPct: 75, status: "in-progress", updated: "2026-10-21" },
  { id: "TRK-06", category: "Career", task: "Network & Share Technical Insights on LinkedIn", target: "50+ connections", progress: "Active network", progressPct: 100, status: "completed", updated: "2026-10-23" },
  { id: "TRK-07", category: "Learning", task: "System Design & Distributed Architecture Foundations", target: "15 chapters", progress: "11 chapters", progressPct: 73, status: "in-progress", updated: "2026-10-19" },
  { id: "TRK-08", category: "Projects", task: "Open-Source Full Stack Web App on GitHub", target: "1 repo", progress: "1 repo deployed", progressPct: 100, status: "completed", updated: "2026-10-15" }
];

const BLOG_ARTICLES = [
  {
    id: 1,
    title: "Mastering LeetCode & Codeforces: What Actually Helped Me Improve",
    category: "DSA & CP",
    date: "Oct 22, 2026",
    readTime: "4 min read",
    excerpt: "Solving 300+ problems taught me that quality analysis beats brute force quantity. Here is how I structure my practice across LeetCode, GFG, and Codeforces.",
    content: `
      <h2>The Quality vs. Quantity Dilemma</h2>
      <p>When starting competitive programming, the instinct is to solve as many easy problems as possible. But real breakthroughs only happen when you start tracking patterns rather than just problem counts.</p>
      <blockquote>"Do not just solve a problem once. Optimize time and space complexity, and write down the pattern in your tracking sheet."</blockquote>
      <h2>My Weekly Problem-Solving Routine</h2>
      <ul>
        <li><strong>LeetCode (<a href="https://leetcode.com/u/Kanishgar05/" target="_blank" style="color:var(--accent-primary);">Kanishgar05</a>):</strong> Core topic drills (Dynamic Programming, Graph traversals, Sliding Window).</li>
        <li><strong>Codeforces (<a href="https://codeforces.com/profile/Kanishgar" target="_blank" style="color:var(--accent-primary);">Kanishgar</a>):</strong> Weekly live contests for time pressure and edge cases.</li>
        <li><strong>GeeksforGeeks (<a href="https://www.geeksforgeeks.org/profile/kanishgar" target="_blank" style="color:var(--accent-primary);">kanishgar</a>):</strong> Core CS fundamentals and classical interview questions.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Building in Public: Why Every Developer Needs a Personal Hub",
    category: "Engineering",
    date: "Oct 20, 2026",
    readTime: "3 min read",
    excerpt: "Why linking your LeetCode, GitHub, LinkedIn, and live Excel progress sheets on a single personal React SPA makes you stand out.",
    content: `
      <h2>Beyond the Traditional One-Page Resume</h2>
      <p>A static resume only says so much. A live personal React SPA showcases proof of work in real-time:</p>
      <ul>
        <li><strong>One-Click Copy & Open:</strong> Instant access to all profiles for recruiters and peers.</li>
        <li><strong>Real Progress Tracking:</strong> Demonstrates real consistency and discipline.</li>
        <li><strong>Free Hosting:</strong> Deployed in minutes on GitHub Pages with zero server fees.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "How I Approach Dynamic Programming Without Memorizing",
    category: "Tutorial",
    date: "Oct 15, 2026",
    readTime: "5 min read",
    excerpt: "A simple 4-step framework to identify state transitions, base cases, and memoization in tricky DP interview problems.",
    content: `
      <h2>The 4-Step DP Framework</h2>
      <ol>
        <li><strong>Identify the Decision:</strong> At each step, what choices do you have?</li>
        <li><strong>Define the State Clearly:</strong> What variables uniquely define where you are?</li>
        <li><strong>Write the Recursive Relation:</strong> Express state N in terms of sub-problems.</li>
        <li><strong>Add Memoization or Tabulate:</strong> Cut exponential complexity to polynomial time.</li>
      </ol>
    `
  }
];

// --------------------------------------------------------------------------
// Root React SPA Component
// --------------------------------------------------------------------------
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("preferred-theme") || "light");
  const [copiedId, setCopiedId] = useState(null);
  const [linksCategory, setLinksCategory] = useState("all");
  const [trackingData, setTrackingData] = useState(INITIAL_TRACKING);
  const [trackerSearch, setTrackerSearch] = useState("");
  const [trackerCategory, setTrackerCategory] = useState("all");
  const [activeArticle, setActiveArticle] = useState(null);
  const [toast, setToast] = useState(null);

  // Sync theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("preferred-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  // Toast trigger
  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  }, []);

  // Copy to clipboard handler
  const handleCopy = useCallback((item) => {
    const textToCopy = item.copyValue || item.url;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopiedId(item.id);
        showToast(`Copied ${item.name} link to clipboard!`);
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

  // Filter links
  const filteredLinks = useMemo(() => {
    if (linksCategory === "all") return LINKS_DATA;
    return LINKS_DATA.filter(l => l.category === linksCategory);
  }, [linksCategory]);

  // Filter tracking data
  const filteredTracking = useMemo(() => {
    return trackingData.filter(item => {
      const matchCat = trackerCategory === "all" || item.category.toLowerCase().includes(trackerCategory.toLowerCase());
      const matchSearch = !trackerSearch ||
        item.task.toLowerCase().includes(trackerSearch.toLowerCase()) ||
        item.category.toLowerCase().includes(trackerSearch.toLowerCase()) ||
        item.id.toLowerCase().includes(trackerSearch.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [trackingData, trackerCategory, trackerSearch]);

  // KPI stats
  const kpis = useMemo(() => {
    const total = trackingData.length;
    const completed = trackingData.filter(d => d.status.toLowerCase() === "completed").length;
    const inProgress = trackingData.filter(d => d.status.toLowerCase().includes("progress")).length;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, inProgress, rate };
  }, [trackingData]);

  // Upload custom file
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const name = file.name.toLowerCase();

    if (name.endsWith(".csv")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const lines = text.trim().split(/\r\n|\n/);
        if (lines.length > 1) {
          const parsed = [];
          for (let i = 1; i < lines.length; i++) {
            const cols = lines[i].split(",").map(c => c.trim().replace(/^"|"$/g, ""));
            if (cols.length >= 3) {
              parsed.push({
                id: cols[0] || `TRK-0${i}`,
                category: cols[1] || "DSA",
                task: cols[2] || "Goal",
                target: cols[3] || "Target",
                progress: cols[4] || "Progress",
                progressPct: (cols[5] && cols[5].toLowerCase().includes("completed")) ? 100 : 70,
                status: (cols[5] || "in-progress").toLowerCase(),
                updated: cols[6] || new Date().toISOString().slice(0, 10)
              });
            }
          }
          if (parsed.length > 0) {
            setTrackingData(parsed);
            showToast(`Loaded ${parsed.length} milestones from CSV!`);
          }
        }
      };
      reader.readAsText(file);
    } else if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
      if (typeof XLSX !== "undefined") {
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = new Uint8Array(event.target.result);
          const wb = XLSX.read(data, { type: "array" });
          const firstSheet = wb.Sheets[wb.SheetNames[0]];
          const json = XLSX.utils.sheet_to_json(firstSheet);
          if (json && json.length > 0) {
            const parsed = json.map((row, idx) => {
              const keys = Object.keys(row);
              const getVal = (pattern) => {
                const k = keys.find(item => item.toLowerCase().includes(pattern));
                return k ? row[k] : "";
              };
              const statusVal = (getVal("status") || "in-progress").toString().toLowerCase();
              const isDone = statusVal.includes("completed") || statusVal.includes("done");
              return {
                id: (getVal("id") || `TRK-0${idx + 1}`).toString(),
                category: (getVal("cat") || "DSA").toString(),
                task: (getVal("task") || getVal("goal") || getVal("desc") || keys[2] ? row[keys[2]] : "Milestone").toString(),
                target: (getVal("target") || "Target").toString(),
                progress: (getVal("prog") || "In Progress").toString(),
                progressPct: isDone ? 100 : 65,
                status: isDone ? "completed" : "in-progress",
                updated: (getVal("date") || getVal("updated") || new Date().toISOString().slice(0, 10)).toString()
              };
            });
            setTrackingData(parsed);
            showToast(`Parsed ${parsed.length} milestones from Excel!`);
          }
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert("SheetJS is still loading, please retry in a moment.");
      }
    }
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo-badge">
            <span className="logo-icon">K</span>
            <span>Kanishgar<span style={{ color: "var(--accent-primary)" }}>.dev</span></span>
            <span className="react-badge">React SPA</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#links" className="nav-link">Links Hub</a></li>
              <li><a href="#trackers" className="nav-link">Tracker</a></li>
              <li><a href="#blog" className="nav-link">Blog</a></li>
              <li>
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
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* Profile Card */}
        <section id="about" className="hero-section">
          <div className="profile-card">
            <div className="profile-top">
              <div className="avatar-wrapper">
                <img src="assets/avatar-placeholder.svg" alt="Kanishgar M Avatar" className="avatar-img" />
                <span className="status-indicator" title="Active & Solving"></span>
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
                  Welcome to my personal React SPA! Here you can easily copy and open all my verified profiles (LinkedIn, LeetCode, GitHub, Codeforces, GFG), explore my live progress tracker spreadsheet, and read my engineering notes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links Hub (With Copy & Open Buttons!) */}
        <section id="links" className="links-section">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>🔗 Verified Profiles & Links Hub</h2>
              <p>Every link includes a one-click <strong>Copy Button</strong> and <strong>Open Button</strong>.</p>
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

        {/* Tracking Sheet & Live Table */}
        <section id="trackers" className="tracker-section">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>📊 Problem-Solving & Goal Tracking Sheet</h2>
              <p>Live progress table. You can download the actual Excel sheet or upload your own file to test.</p>
            </div>
          </div>

          <div className="tracker-container">
            {/* KPI Cards */}
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-label">Total Milestones</span>
                <span className="stat-value">{kpis.total}</span>
                <span className="stat-note">Across DSA & Projects</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Completed</span>
                <span className="stat-value" style={{ color: "#10b981" }}>{kpis.completed}</span>
                <span className="stat-note">100% finished goals</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">In Progress</span>
                <span className="stat-value" style={{ color: "#f59e0b" }}>{kpis.inProgress}</span>
                <span className="stat-note">Active milestones</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Success Rate</span>
                <span className="stat-value" style={{ color: "var(--accent-primary)" }}>{kpis.rate}%</span>
                <span className="stat-note">Completion ratio</span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="tracker-toolbar">
              <div className="search-filter-group">
                <div className="search-input-wrap">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search tasks, categories..."
                    value={trackerSearch}
                    onChange={(e) => setTrackerSearch(e.target.value)}
                  />
                </div>

                <div className="category-pills">
                  {["all", "dsa", "projects", "career", "learning"].map(cat => (
                    <button
                      key={cat}
                      className={`cat-pill ${trackerCategory === cat ? "active" : ""}`}
                      onClick={() => setTrackerCategory(cat)}
                    >
                      {cat === "all" ? "All" : cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="actions-download-group">
                <a href="assets/sample-tracker.xlsx" download="Kanishgar-Progress-Tracker.xlsx" className="btn-excel">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                  <span>Download Excel (.xlsx)</span>
                </a>

                <a href="assets/sample-tracker.csv" download="Kanishgar-Progress-Tracker.csv" className="btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>Download CSV</span>
                </a>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive-wrapper">
              <table className="tracker-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Goal / Milestone</th>
                    <th>Target</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTracking.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center", padding: "2.5rem", color: "var(--text-muted)" }}>
                        No tracking milestones match your search.
                      </td>
                    </tr>
                  ) : (
                    filteredTracking.map(item => (
                      <tr key={item.id}>
                        <td><span className="id-badge">{item.id}</span></td>
                        <td><span className="category-tag">{item.category}</span></td>
                        <td><strong>{item.task}</strong></td>
                        <td>{item.target}</td>
                        <td>
                          <div className="progress-container">
                            <div className="progress-bar-bg">
                              <div className="progress-bar-fill" style={{ width: `${item.progressPct}%` }}></div>
                            </div>
                            <span className="progress-text">{item.progress}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`status-badge ${item.status}`}>
                            ● {item.status.replace('-', ' ')}
                          </span>
                        </td>
                        <td style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{item.updated}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Upload Test Bar */}
            <div className="custom-file-notice">
              <span>💡 <strong>Want to test your own tracking spreadsheet?</strong> Upload any <code>.xlsx</code> or <code>.csv</code> to view it live:</span>
              <label className="upload-file-label">
                📁 Browse File
                <input type="file" accept=".xlsx, .xls, .csv" onChange={handleFileUpload} style={{ display: "none" }} />
              </label>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="blog-section">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>✍️ Technical Writings & Reflections</h2>
              <p>Notes on competitive programming, data structures, and software architecture.</p>
            </div>
          </div>

          <div className="blog-grid">
            {BLOG_ARTICLES.map(post => (
              <article key={post.id} className="blog-card" onClick={() => setActiveArticle(post)}>
                <div className="blog-meta">
                  <span className="blog-category-tag">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span>Read full article →</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveArticle(null)}>✕</button>
            <div className="blog-meta" style={{ marginBottom: "1rem" }}>
              <span className="blog-category-tag">{activeArticle.category}</span>
              <span>•</span>
              <span>Published {activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>
            <h1 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.3 }}>
              {activeArticle.title}
            </h1>
            <div className="modal-article-body" dangerouslySetInnerHTML={{ __html: activeArticle.content }}></div>
          </div>
        </div>
      )}

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
            <a href="#about">About</a>
            <a href="#links">Links Hub</a>
            <a href="#trackers">Tracker</a>
            <a href="#blog">Blog</a>
            <a href="https://linkedin.com/in/kanishgar-m-ba7203299" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/Kanishgar" target="_blank" rel="noopener">GitHub</a>
            <a href="https://leetcode.com/u/Kanishgar05/" target="_blank" rel="noopener">LeetCode</a>
            <a href="https://codeforces.com/profile/Kanishgar" target="_blank" rel="noopener">Codeforces</a>
          </div>
          <p>© 2026 Kanishgar M. Built with React SPA. Hosted for free on GitHub Pages.</p>
        </div>
      </footer>
    </div>
  );
}

// Mount React Root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
