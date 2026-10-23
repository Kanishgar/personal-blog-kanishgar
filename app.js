/* ==========================================================================
   PERSONAL BLOG & TRACKER HUB - CLIENT SCRIPT
   Tailored for Kanishgar M - Software Engineer & Competitive Programmer
   ========================================================================== */

// Initial Tracking Data for Kanishgar M
let trackingData = [
  {
    id: "TRK-01",
    category: "DSA",
    task: "Solve 350+ LeetCode DSA Problems (Arrays, Trees, Graphs, DP)",
    target: "350 problems",
    progress: "310 problems",
    progressPct: 88,
    status: "in-progress",
    updated: "2026-10-22"
  },
  {
    id: "TRK-02",
    category: "DSA",
    task: "Maintain 100-Day Problem Solving Streak on LeetCode",
    target: "100 days",
    progress: "100 days",
    progressPct: 100,
    status: "completed",
    updated: "2026-10-20"
  },
  {
    id: "TRK-03",
    category: "DSA",
    task: "GeeksforGeeks POTD & Core Interview Preparation",
    target: "150 problems",
    progress: "150 problems",
    progressPct: 100,
    status: "completed",
    updated: "2026-10-18"
  },
  {
    id: "TRK-04",
    category: "Projects",
    task: "Deploy Personal Blog & Public Progress Hub to GitHub",
    target: "1 live site",
    progress: "Completed",
    progressPct: 100,
    status: "completed",
    updated: "2026-10-23"
  },
  {
    id: "TRK-05",
    category: "DSA",
    task: "Codeforces Contest Rating Milestone (Pupil/Specialist Target)",
    target: "1400 rating",
    progress: "Active rounds",
    progressPct: 75,
    status: "in-progress",
    updated: "2026-10-21"
  },
  {
    id: "TRK-06",
    category: "Career",
    task: "Network & Share Technical Insights on LinkedIn",
    target: "50+ connections",
    progress: "Active network",
    progressPct: 100,
    status: "completed",
    updated: "2026-10-23"
  },
  {
    id: "TRK-07",
    category: "Learning",
    task: "System Design & Distributed Architecture Foundations",
    target: "15 chapters",
    progress: "11 chapters",
    progressPct: 73,
    status: "in-progress",
    updated: "2026-10-19"
  },
  {
    id: "TRK-08",
    category: "Projects",
    task: "Open-Source Full Stack Web App on GitHub",
    target: "1 repository",
    progress: "1 repo deployed",
    progressPct: 100,
    status: "completed",
    updated: "2026-10-15"
  }
];

// Blog Posts Data tailored for Kanishgar M
const blogPosts = [
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
      
      <blockquote>"Do not just solve a problem once. Solve it, optimize the time and space complexity, and write down the pattern in your tracking sheet."</blockquote>
      
      <h2>My Weekly Problem-Solving Routine</h2>
      <p>Here is the exact schedule I follow to stay sharp across platforms:</p>
      <ul>
        <li><strong>LeetCode (<a href="https://leetcode.com/u/Kanishgar05/" target="_blank" style="color:var(--accent-primary); text-decoration: underline;">Kanishgar05</a>):</strong> Focus on core topic drills (Dynamic Programming, Graph traversals, Sliding Window, Backtracking).</li>
        <li><strong>Codeforces (<a href="https://codeforces.com/profile/Kanishgar" target="_blank" style="color:var(--accent-primary); text-decoration: underline;">Kanishgar</a>):</strong> Weekly live contests for time pressure, edge cases, and mathematical intuition.</li>
        <li><strong>GeeksforGeeks (<a href="https://www.geeksforgeeks.org/profile/kanishgar" target="_blank" style="color:var(--accent-primary); text-decoration: underline;">kanishgar</a>):</strong> Core CS fundamentals, recursion trees, and classical interview questions.</li>
      </ul>

      <h2>Why I Keep an Excel Tracker</h2>
      <p>I log tricky problems with their core algorithmic trick in my tracking spreadsheet. You can download my template above and use it to track your own DSA journey!</p>
    `
  },
  {
    id: 2,
    title: "Building in Public: Why Every Developer Needs a Personal Hub",
    category: "Engineering",
    date: "Oct 20, 2026",
    readTime: "3 min read",
    excerpt: "Why linking your LeetCode, GitHub, LinkedIn, and live Excel progress sheets on a single personal domain makes you stand out to engineering peers and recruiters.",
    content: `
      <h2>Beyond the Traditional One-Page Resume</h2>
      <p>A static PDF resume can only say so much. A live personal hub showcases proof of work in real-time:</p>
      <ul>
        <li><strong>Unified Presence:</strong> Instead of sending 5 separate links, one clean link gives peers access to my LinkedIn, GitHub, LeetCode, and Codeforces profiles.</li>
        <li><strong>Real Accountability:</strong> Publishing an Excel progress sheet keeps me honest about daily milestones.</li>
        <li><strong>Zero Maintenance Cost:</strong> This site is 100% static, fast, responsive, and hosted completely free on GitHub Pages.</li>
      </ul>

      <p>Feel free to fork this project on my <a href="https://github.com/Kanishgar" target="_blank" style="color:var(--accent-primary); text-decoration: underline;">GitHub</a> or connect with me on <a href="https://linkedin.com/in/kanishgar-m-ba7203299" target="_blank" style="color:var(--accent-primary); text-decoration: underline;">LinkedIn</a>!</p>
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
        <li><strong>Identify the Decision:</strong> At each step, what choices do you have? (Take vs. Skip, Left vs. Right, Buy vs. Sell).</li>
        <li><strong>Define the State Clearly:</strong> What variables uniquely define where you are? (e.g. <code>dp(index, remaining_capacity)</code>).</li>
        <li><strong>Write the Recursive Relation:</strong> Express the answer to state <code>N</code> in terms of states <code>N-1</code> or <code>N-2</code>.</li>
        <li><strong>Add Memoization or Tabulate:</strong> Store results in an array or dictionary to cut exponential complexity down to polynomial time.</li>
      </ol>
      <p>Try applying this to classic problems like 0/1 Knapsack, Coin Change, or Longest Increasing Subsequence!</p>
    `
  }
];

// Current Filters State
let currentCategory = "all";
let currentSearch = "";

// DOM Elements
const themeToggleBtn = document.getElementById("themeToggleBtn");
const trackerTableBody = document.getElementById("trackerTableBody");
const searchInput = document.getElementById("trackerSearchInput");
const categoryPills = document.querySelectorAll(".cat-pill");
const totalGoalsEl = document.getElementById("statTotalGoals");
const completedGoalsEl = document.getElementById("statCompletedGoals");
const inProgressGoalsEl = document.getElementById("statInProgressGoals");
const rateGoalsEl = document.getElementById("statRateGoals");
const excelUploadInput = document.getElementById("excelUploadInput");
const blogGridEl = document.getElementById("blogGrid");
const articleModal = document.getElementById("articleModal");
const modalArticleTitle = document.getElementById("modalArticleTitle");
const modalArticleMeta = document.getElementById("modalArticleMeta");
const modalArticleBody = document.getElementById("modalArticleBody");
const closeModalBtn = document.getElementById("closeModalBtn");

/* ==========================================================================
   Theme Management (Light / Dark)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("preferred-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
  
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("preferred-theme", next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === "dark" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>` 
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    themeToggleBtn.setAttribute("aria-label", `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
}

/* ==========================================================================
   Tracking Table & KPI Stats
   ========================================================================== */
function updateKPIStats() {
  const total = trackingData.length;
  const completed = trackingData.filter(d => d.status.toLowerCase() === "completed").length;
  const inProgress = trackingData.filter(d => d.status.toLowerCase().includes("progress")).length;
  const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (totalGoalsEl) totalGoalsEl.textContent = total;
  if (completedGoalsEl) completedGoalsEl.textContent = completed;
  if (inProgressGoalsEl) inProgressGoalsEl.textContent = inProgress;
  if (rateGoalsEl) rateGoalsEl.textContent = `${rate}%`;
}

function renderTable() {
  if (!trackerTableBody) return;

  const filtered = trackingData.filter(item => {
    const matchesCat = currentCategory === "all" || item.category.toLowerCase().includes(currentCategory.toLowerCase());
    const matchesSearch = !currentSearch || 
      item.task.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.id.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    trackerTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding: 2.5rem; color: var(--text-muted);">
          No tracking milestones match your search or filter.
        </td>
      </tr>
    `;
    return;
  }

  trackerTableBody.innerHTML = filtered.map(item => {
    const statusClass = item.status.toLowerCase().replace(/\s+/g, '-');
    const statusLabel = item.status.replace('-', ' ');
    const pct = item.progressPct !== undefined ? item.progressPct : (item.status.toLowerCase() === 'completed' ? 100 : 50);

    return `
      <tr>
        <td><span class="id-badge">${escapeHTML(item.id)}</span></td>
        <td><span class="category-tag">${escapeHTML(item.category)}</span></td>
        <td><strong>${escapeHTML(item.task)}</strong></td>
        <td>${escapeHTML(item.target)}</td>
        <td>
          <div class="progress-container">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
            <span class="progress-text">${escapeHTML(item.progress)}</span>
          </div>
        </td>
        <td>
          <span class="status-badge ${statusClass}">
            ● ${escapeHTML(statusLabel)}
          </span>
        </td>
        <td style="color: var(--text-muted); font-size: 0.8rem;">${escapeHTML(item.updated || 'Recent')}</td>
      </tr>
    `;
  }).join("");
}

function setupTrackerEvents() {
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      renderTable();
    });
  }

  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-category") || "all";
      renderTable();
    });
  });

  // Client-side Custom Excel / CSV File Reader
  if (excelUploadInput) {
    excelUploadInput.addEventListener("change", handleCustomFileUpload);
  }
}

// Handle file upload from user
function handleCustomFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const fileName = file.name.toLowerCase();
  
  if (fileName.endsWith(".csv")) {
    const reader = new FileReader();
    reader.onload = function(e) {
      parseCSVContent(e.target.result);
    };
    reader.readAsText(file);
  } else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
    if (typeof XLSX !== "undefined") {
      const reader = new FileReader();
      reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        parseXLSXJson(jsonData);
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("SheetJS library is loading. Please try again in a few seconds or use a CSV file.");
    }
  } else {
    alert("Please select a valid .xlsx or .csv file.");
  }
}

function parseCSVContent(text) {
  const lines = text.trim().split(/\r\n|\n/);
  if (lines.length < 2) return;

  const newItems = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",").map(c => c.trim().replace(/^"|"$/g, ""));
    if (cols.length >= 3) {
      newItems.push({
        id: cols[0] || `TRK-0${i}`,
        category: cols[1] || "General",
        task: cols[2] || "Tracked Milestone",
        target: cols[3] || "100%",
        progress: cols[4] || cols[3] || "50%",
        progressPct: (cols[5] && cols[5].toLowerCase().includes("completed")) ? 100 : 60,
        status: (cols[5] || "in-progress").toLowerCase(),
        updated: cols[6] || new Date().toISOString().slice(0, 10)
      });
    }
  }

  if (newItems.length > 0) {
    trackingData = newItems;
    updateKPIStats();
    renderTable();
    showToast(`Loaded ${newItems.length} items from your file!`);
  }
}

function parseXLSXJson(rows) {
  if (!rows || rows.length === 0) return;

  const newItems = rows.map((row, idx) => {
    const keys = Object.keys(row);
    const getVal = (pattern) => {
      const matched = keys.find(k => k.toLowerCase().includes(pattern));
      return matched ? row[matched] : "";
    };

    const statusVal = (getVal("status") || "in-progress").toString().toLowerCase();
    const isCompleted = statusVal.includes("completed") || statusVal.includes("done");

    return {
      id: (getVal("id") || `TRK-0${idx + 1}`).toString(),
      category: (getVal("cat") || "DSA").toString(),
      task: (getVal("task") || getVal("goal") || getVal("desc") || keys[2] ? row[keys[2]] : "Tracked Item").toString(),
      target: (getVal("target") || "Target").toString(),
      progress: (getVal("prog") || "In Progress").toString(),
      progressPct: isCompleted ? 100 : 70,
      status: isCompleted ? "completed" : "in-progress",
      updated: (getVal("date") || getVal("updated") || new Date().toISOString().slice(0, 10)).toString()
    };
  });

  trackingData = newItems;
  updateKPIStats();
  renderTable();
  showToast(`Parsed and displayed ${newItems.length} milestones from your Excel sheet!`);
}

/* ==========================================================================
   Blog Posts Rendering & Modal Reader
   ========================================================================== */
function renderBlogPosts() {
  if (!blogGridEl) return;

  blogGridEl.innerHTML = blogPosts.map(post => `
    <article class="blog-card" onclick="openArticleModal(${post.id})">
      <div class="blog-meta">
        <span class="blog-category-tag">${escapeHTML(post.category)}</span>
        <span>•</span>
        <span>${escapeHTML(post.date)}</span>
        <span>•</span>
        <span>${escapeHTML(post.readTime)}</span>
      </div>
      <h3 class="blog-title">${escapeHTML(post.title)}</h3>
      <p class="blog-excerpt">${escapeHTML(post.excerpt)}</p>
      <div class="blog-footer">
        <span>Read full article →</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </article>
  `).join("");
}

window.openArticleModal = function(id) {
  const post = blogPosts.find(p => p.id === id);
  if (!post || !articleModal) return;

  modalArticleTitle.textContent = post.title;
  modalArticleMeta.innerHTML = `
    <span class="blog-category-tag">${escapeHTML(post.category)}</span>
    <span>•</span>
    <span>Published ${escapeHTML(post.date)}</span>
    <span>•</span>
    <span>${escapeHTML(post.readTime)}</span>
  `;
  modalArticleBody.innerHTML = post.content;

  articleModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeArticleModal() {
  if (!articleModal) return;
  articleModal.classList.remove("active");
  document.body.style.overflow = "";
}

function setupModalEvents() {
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeArticleModal);
  }

  if (articleModal) {
    articleModal.addEventListener("click", (e) => {
      if (e.target === articleModal) {
        closeArticleModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && articleModal && articleModal.classList.contains("active")) {
      closeArticleModal();
    }
  });
}

/* ==========================================================================
   Helper Utilities
   ========================================================================== */
function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: var(--accent-primary);
      color: #fff;
      padding: 0.85rem 1.4rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      font-weight: 600;
      font-size: 0.9rem;
      z-index: 999;
      transition: opacity 0.3s ease, transform 0.3s ease;
      transform: translateY(20px);
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 3500);
}

/* ==========================================================================
   Initial Boot
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateKPIStats();
  renderTable();
  setupTrackerEvents();
  renderBlogPosts();
  setupModalEvents();
});
