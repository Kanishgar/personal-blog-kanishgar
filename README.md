# 🚀 Kanishgar M - Personal Blog, Coding Profiles Hub & Progress Tracker

A lightweight, modern, responsive personal website and blog tailored for **Kanishgar M** (Software Engineer & Competitive Programmer). Showcases competitive programming profiles (LeetCode, Codeforces, GeeksforGeeks, HackerRank, GitHub, LinkedIn), hosts technical writings, and shares a problem-solving Excel tracking spreadsheet (`.xlsx` / `.csv`) with interactive on-page previews.

---

## 🌟 Profiles Connected

- **LinkedIn**: [linkedin.com/in/kanishgar-m-ba7203299](https://linkedin.com/in/kanishgar-m-ba7203299)
- **GitHub**: [github.com/Kanishgar](https://github.com/Kanishgar)
- **LeetCode**: [leetcode.com/u/Kanishgar05/](https://leetcode.com/u/Kanishgar05/)
- **GeeksforGeeks**: [geeksforgeeks.org/profile/kanishgar](https://www.geeksforgeeks.org/profile/kanishgar)
- **Codeforces**: [codeforces.com/profile/Kanishgar](https://codeforces.com/profile/Kanishgar)
- **HackerRank**: [hackerrank.com/profile/kanishgar221](https://www.hackerrank.com/profile/kanishgar221)
- **Email**: [kanishgar221@gmail.com](mailto:kanishgar221@gmail.com)

---

## 📁 Project Structure

```text
personal-blog/
├── index.html                  # Main homepage (profile, coding links, tracker, blog)
├── style.css                   # Modern CSS styles with branded badge colors & themes
├── app.js                      # Client logic (filters, table renderer, blog reader, xlsx parser)
├── assets/
│   ├── sample-tracker.xlsx     # The real Excel file downloaded by visitors
│   ├── sample-tracker.csv      # CSV fallback download
│   └── avatar-placeholder.svg  # Avatar graphic
├── generate_xlsx.py            # Standalone generator script for Excel tracker
└── README.md                   # Documentation & deployment guide
```

---

## ⚡ How to Preview Locally (Takes 5 Seconds)

### Method 1: Direct in Browser
Simply double-click `index.html` in your file explorer. It will open immediately in your web browser.

### Method 2: Local HTTP Server
Run this in PowerShell / terminal:
```bash
cd C:\Users\kanis\.gemini\antigravity\scratch\personal-blog
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🌐 Deploy to GitHub Pages for FREE (Under 2 Minutes)

Since you already have GitHub at **[github.com/Kanishgar](https://github.com/Kanishgar)**:

1. Create a new public repository on GitHub named `kanishgar.github.io` (or `personal-blog`).
2. Run these commands inside the `personal-blog` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial launch of Kanishgar's personal blog & tracking hub"
   git branch -M main
   git remote add origin https://github.com/Kanishgar/personal-blog.git
   git push -u origin main
   ```
3. Go to your repo **Settings** → **Pages** → under **Source**, select **Deploy from a branch** (`main` / `/root`).
4. In under 60 seconds, your site will be live on the internet with free HTTPS!
