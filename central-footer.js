/* central-footer.js | ASJ2026 Central Footer (v2) */
class UnifiedFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    // اسم المشروع من عنوان الصفحة + حذف (النسخة النهائية) وأي أقواس زائدة
    const rawTitle = (document.title || "مشروع").toString();
    const projectName = rawTitle
      .replace(/\(.*?النسخة\s*النهائية.*?\)/g, "")
      .replace(/[\(\)]/g, "")
      .replace(/\s+/g, " ")
      .trim();

    // ✅ عدّل هذه القائمة حسب مشاريعكم
    const projects = [
      { name: "مستشار إعادة التمويل المبسّط", url: "https://asj2026-web.github.io/financial-advisor/" },
      { name: "حاسبة المستحقات التقاعدية للمعلمين", url: "https://tr-bwl.pages.dev/?v=1" },
      // أضف مشاريع أخرى هنا...
      // { name: "اسم المشروع", url: "https://..." },
    ];

    // توليد روابط القائمة
    const projectsHTML = projects.map(p => {
      const url = (p.url || "#").trim() || "#";
      return `
        <a class="asj-project-link" href="${url}" target="_blank" rel="noopener">
          <span class="asj-dot"></span>
          <span class="asj-project-name">${p.name}</span>
        </a>
      `;
    }).join("");

    // HTML + CSS (داخل Shadow DOM لعزل التصميم ومنع كسر الصفحة)
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block}
        .asj-footer{
          background: radial-gradient(1200px 420px at 50% 0%, rgba(37,99,235,.25), rgba(15,23,42,1) 55%),
                      linear-gradient(180deg, rgba(2,6,23,0.2), rgba(15,23,42,1));
          color:#f8fafc;
          padding:44px 20px;
          text-align:center;
          border-top:4px solid #2563eb;
          direction:rtl;
          margin-top:40px;
          font-family: system-ui,-apple-system,"Segoe UI",Tahoma,Arial,sans-serif;
          overflow:hidden;
          position:relative;
        }
        .asj-glow{
          position:absolute; inset:-60px -80px auto -80px;
          height:220px;
          background: radial-gradient(circle at 50% 40%, rgba(96,165,250,.35), transparent 60%);
          filter: blur(12px);
          opacity:.9;
          pointer-events:none;
          animation: floatGlow 8s ease-in-out infinite;
        }
        @keyframes floatGlow{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(10px)}
        }
        .asj-title{
          margin:0 0 10px 0;
          color:#60a5fa;
          font-size: clamp(18px, 2.4vw, 28px);
          font-weight: 900;
          letter-spacing:.2px;
        }
        .asj-sub{
          margin: 0 0 18px 0;
          opacity:.85;
          font-size:14px;
        }
        .asj-row{
          display:flex;
          justify-content:center;
          gap:12px;
          flex-wrap:wrap;
          margin:18px 0 8px 0;
        }

        /* زر مشاريعنا (قائمة) */
        details.asj-details{
          position:relative;
          display:inline-block;
          text-align:right;
          min-width: 220px;
        }
        summary.asj-summary{
          list-style:none;
          cursor:pointer;
          background: rgba(30,41,59,.75);
          color:#e2e8f0;
          padding:10px 16px;
          border-radius:999px;
          border:1px solid rgba(51,65,85,.9);
          user-select:none;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          backdrop-filter: blur(6px);
          transition: transform .15s ease, border-color .15s ease, background .15s ease;
        }
        summary.asj-summary:hover{
          transform: translateY(-1px);
          border-color: rgba(96,165,250,.9);
          background: rgba(30,41,59,.9);
        }
        summary.asj-summary:focus{
          outline:none;
          box-shadow: 0 0 0 3px rgba(96,165,250,.25);
        }
        summary.asj-summary::-webkit-details-marker{display:none}
        .asj-chevron{
          display:inline-block;
          transition: transform .18s ease;
          opacity:.9;
        }
        details[open] .asj-chevron{ transform: rotate(180deg); }

        .asj-menu{
          margin-top:10px;
          padding:12px;
          border:1px solid rgba(51,65,85,.95);
          border-radius:18px;
          background: rgba(17,27,46,.96);
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
          animation: pop .18s ease-out;
        }
        @keyframes pop{
          from{ transform: translateY(-6px); opacity:.0; }
          to{ transform: translateY(0); opacity:1; }
        }

        .asj-project-link{
          display:flex;
          align-items:center;
          gap:10px;
          padding:10px 12px;
          text-decoration:none;
          color:#e2e8f0;
          border-radius:14px;
          border:1px solid rgba(51,65,85,.85);
          background: rgba(2,6,23,.35);
          margin-top:10px;
          transition: transform .12s ease, border-color .12s ease, background .12s ease;
        }
        .asj-project-link:hover{
          transform: translateY(-1px);
          border-color: rgba(96,165,250,.9);
          background: rgba(2,6,23,.55);
        }
        .asj-dot{
          width:10px; height:10px; border-radius:999px;
          background: #60a5fa;
          box-shadow: 0 0 0 4px rgba(96,165,250,.18);
          flex: 0 0 auto;
        }
        .asj-project-name{
          font-weight: 800;
          font-size: 13px;
          line-height: 1.4;
        }

        .asj-sep{
          border:0;
          border-top:1px solid rgba(51,65,85,.95);
          margin:24px auto;
          width:min(560px, 85%);
          opacity:.85;
        }

        .asj-email{
          font-size: 13px;
          color:#cbd5e1;
          margin:0;
          line-height:1.8;
        }
        .asj-email strong{
          color:#93c5fd;
          font-weight:900;
          letter-spacing:.2px;
        }

        /* العداد */
        .asj-counter{
          margin-top:16px;
          font-size: 13px;
          color:#cbd5e1;
          display:flex;
          gap:8px;
          justify-content:center;
          align-items:center;
          flex-wrap:wrap;
          opacity:.95;
        }
        .asj-counter b{
          color:#f8fafc;
          font-weight: 950;
          font-size: 15px;
          letter-spacing:.2px;
        }
      </style>

      <footer class="asj-footer" aria-label="تذييل الصفحة">
        <div class="asj-glow"></div>

        <h3 class="asj-title">${projectName}</h3>
        <p class="asj-sub">© ${year} جميع الحقوق محفوظة</p>

        <div class="asj-row">
          <details class="asj-details" id="asjDetails">
            <summary class="asj-summary">
              <span>📁 مشاريعنا</span>
              <span class="asj-chevron">▾</span>
            </summary>
            <div class="asj-menu">
              ${projectsHTML}
            </div>
          </details>
        </div>

        <hr class="asj-sep" />

        <p class="asj-email">
          جميع الحقوق محفوظة لـ<br />
          <strong>mr.abdulrahmanaljaberi@gmail.com</strong>
        </p>

        <div class="asj-counter" aria-label="عداد الزيارات">
          <span>عدد الزيارات:</span>
          <b id="asjCounter">—</b>
        </div>
      </footer>
    `;

    this._wireMenuClose();
    this._initCounter();
  }

  _wireMenuClose() {
    const details = this.shadowRoot?.getElementById("asjDetails");
    if (!details) return;

    // إغلاق القائمة عند الضغط خارجها
    const onDocClick = (e) => {
      const path = e.composedPath ? e.composedPath() : [];
      const clickedInside = path.includes(details);
      if (!clickedInside) details.removeAttribute("open");
    };
    document.addEventListener("click", onDocClick, { passive: true });

    // تنظيف عند إزالة العنصر
    this._cleanup = () => document.removeEventListener("click", onDocClick);
  }

  disconnectedCallback() {
    if (this._cleanup) this._cleanup();
  }

  _animateNumber(el, from, to, durationMs=700) {
    const start = performance.now();
    const fmt = (n) => Number(n).toLocaleString();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(from + (to - from) * eased);
      el.textContent = fmt(val);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  _initCounter() {
    const el = this.shadowRoot?.getElementById("asjCounter");
    if (!el) return;

    // مفتاح عداد لكل صفحة (حتى يكون لكل مشروع عداده)
    const path = (location.pathname || "/").replace(/\/+/g, "/");
    const key = ("asj2026-web" + path).replace(/[^a-zA-Z0-9_-]/g, "_");

    // CountAPI: بدون سيرفر
    const url = `https://api.countapi.xyz/hit/asj2026-web/${key}`;

    fetch(url)
      .then(r => r.ok ? r.json() : Promise.reject(new Error("countapi_failed")))
      .then(data => {
        const value = Number(data?.value ?? 0);
        this._animateNumber(el, 0, value, 900);
      })
      .catch(() => {
        // بديل محلي إذا كان CountAPI محجوب/تعطل
        const lsKey = "asj_counter_" + key;
        const current = Number(localStorage.getItem(lsKey) || "0") + 1;
        localStorage.setItem(lsKey, String(current));
        this._animateNumber(el, 0, current, 650);
      });
  }
}

customElements.define("my-footer", UnifiedFooter);
