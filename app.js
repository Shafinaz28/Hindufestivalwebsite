function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("mobileMenuBtn");
  if (!menu || !btn) return;

  const isOpen = !menu.classList.contains("hidden");
  if (isOpen) {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    // change icon to menu
    btn.innerHTML = `<i data-feather="menu" class="w-6 h-6 text-white"></i>`;
  } else {
    menu.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
    // change icon to x
    btn.innerHTML = `<i data-feather="x" class="w-6 h-6 text-white"></i>`;
  }
  feather.replace();
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("mobileMenuBtn");
  if (!menu || !btn) return;
  menu.classList.add("hidden");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = `<i data-feather="menu" class="w-6 h-6 text-white"></i>`;
  feather.replace();
}

/* ===== Utilities ===== */
function safeText(v) { return (v === undefined || v === null) ? "" : String(v); }
function $(id) { return document.getElementById(id); }

/* ===== Global Data (Store) ===== */
const storeServices = [
  {
    key: "rituals",
    icon: "sun",
    title: "Ritual Procedures / Sacred Events",
    images: "Ritual-Procedures-Sacred-Events.jpg",
    intro: "Clear, practical blueprints for sacred events like Shanti Puja and Griha Pravesha.",

    whatPoints: [
      "Pratham Sanskruti brings timeless Hindu tradition into a clear, practical format.",
      "We help families plan sacred events like Shanti Puja and Griha Pravesha smoothly.",
      "Every ritual is structured with both spiritual meaning and practical clarity.",
      "Our guidance makes ceremonies feel authentic, organized, and stress free."
    ],

    whyPoints: [
      "Sacred timing aligns worship with tithi, nakshatra, and muhurat.",
      "Rituals strengthen family bonds and connect generations.",
      "Festivals uplift community energy through devotion and shared celebration.",
      "These traditions preserve living samskruti in modern daily life."
    ],

    more: [
      {
        title: "Overview",
        points: [
          "Hindu culture includes many sacred rituals and observances.",
          "These are connected to life milestones and devotion.",
          "Practices vary by tradition and region.",
          "They emphasize purification, prayer, and meaning."
        ]
      },
      {
        title: "Samskaras (Rites of Passage)",
        points: [
          "Garbhadhana",
          "Pumsavana",
          "Simantonnayana",
          "Jatakarman",
          "Namakarana",
          "Vivaha"
        ]
      },
      {
        title: "Puja Steps (Daily Worship)",
        points: [
          "Dhyana",
          "Avahana",
          "Padya",
          "Arghya",
          "Naivedya",
          "Namaskara"
        ]
      },
      {
        title: "Major Festivals (Sacred Events)",
        table: true,
        headers: ["Festival", "Timing (Lunar)", "Key Observance"],
        rows: [
          ["Diwali", "Kartika Amavasya", "Lakshmi Puja"],
          ["Holi", "Phalguna Purnima", "Colors & Holika Dahan"],
          ["Navaratri", "Ashwina Shukla Paksha", "Devi Worship"],
          ["Ganesh Chaturthi", "Bhadrapada Shukla Chaturthi", "Ganapati Puja"]
        ]
      }
    ]
  },

  {
    key: "calendar",
    icon: "calendar",
    title: "Hindu Calendar",
    images: "Hindu-Calendar.jpg",
    intro: "Timely reminders for key Hindu calendar events (Upcoming Upavas and Festivals).",

    whatPoints: [
      "We help families stay aligned with sacred dates through timely reminders.",
      "Important vrats, tithis, and festivals are made easy to follow.",
      "Users get support for planning events as per their needs.",
      "Every sacred day can be observed on time and with clarity."
    ],

    whyPoints: [
      "The Hindu calendar guides rituals through tithi, nakshatra, and seasonal rhythm.",
      "It helps identify auspicious days for puja, vrat, and family ceremonies.",
      "Regional festivals and muhurats can be planned correctly.",
      "It keeps households connected to spiritual time and tradition."
    ],

    more: [
      {
        title: "Calendar Guidance",
        points: [
          "Track upcoming upavas and festivals.",
          "Follow monthly sacred events clearly.",
          "Plan family rituals using proper dates.",
          "Stay spiritually aligned through reminders."
        ]
      }
    ]
  },

  {
    key: "aarti",
    icon: "music",
    title: "Aarti and Mantra",
    images: "Aarti-and-Mantra.jpg",
    intro: "Guided audio and video resources so your family can chant confidently.",

    whatPoints: [
      "We provide guided audio and video for aarti and mantra chanting.",
      "Families can follow pooja and aarti step by step.",
      "Children can learn rituals in the correct way from the beginning.",
      "Daily worship becomes simpler and more confident."
    ],

    whyPoints: [
      "Correct chanting creates spiritual vibration and focus.",
      "Traditional sequence brings clarity and discipline to worship.",
      "Proper pronunciation makes devotion more meaningful.",
      "Mantra, intention, and action become aligned."
    ],

    more: [
      {
        title: "Aarti Support",
        points: [
          "Simple guided chanting support",
          "Step-by-step ritual help",
          "Family-friendly learning format",
          "Audio/video links can be added later"
        ]
      }
    ]
  },

  {
    key: "seva",
    icon: "heart",
    title: "Sevā–Dān",
    images: "Seva-Daan.jpg",
    intro: "Donation drives rooted in dharma and compassion.",

    whatPoints: [
      "Pratham Sanskruti organizes structured donation-based events every year.",
      "Families get trusted ways to contribute meaningfully.",
      "Giving is made easier and more purposeful.",
      "Each event is rooted in dharma and compassion."
    ],

    whyPoints: [
      "Dāna is a core expression of selfless giving in Hindu tradition.",
      "It supports society through food, clothing, money, and knowledge.",
      "Giving builds inner humility and positive karma.",
      "It turns spiritual values into social action."
    ],

    more: [
      {
        title: "Annadān",
        points: [
          "Provides food to the hungry",
          "Highly valued in dharmic giving",
          "Supports basic wellbeing",
          "Encourages compassion"
        ]
      },
      {
        title: "Vastra Dān",
        points: [
          "Offers clothing support",
          "Protects dignity",
          "Provides warmth and comfort",
          "Helps those in need"
        ]
      },
      {
        title: "Dhana Dān",
        points: [
          "Supports temples and good causes",
          "Can aid education and relief",
          "Encourages responsible charity",
          "Builds positive karma"
        ]
      },
      {
        title: "Vidyā Dān",
        points: [
          "Sharing knowledge is a noble gift",
          "Knowledge multiplies when given",
          "Supports growth and learning",
          "Creates long-term impact"
        ]
      }
    ]
  },

  {
    key: "workshops",
    icon: "users",
    title: "Cultural Workshops",
    images: "Cultural-Workshops.jpg",
    intro: "Small, engaging workshops for children—stories, crafts, bhajans, festival games.",

    whatPoints: [
      "Children learn culture through stories, bhajans, crafts, and games.",
      "Workshops are small, engaging, and age appropriate.",
      "Traditions are introduced in a joyful format.",
      "Culture becomes a living experience for young minds."
    ],

    whyPoints: [
      "Workshops help children build strong cultural roots.",
      "They combine values, manners, and spiritual awareness.",
      "Parents get support in passing tradition to the next generation.",
      "Learning becomes memorable and meaningful."
    ],

    more: [
      {
        title: "Key Spiritual Benefits",
        points: [
          "Ahimsa builds empathy",
          "Satya builds honesty",
          "Seva builds generosity",
          "Dharma supports right choices"
        ]
      }
    ]
  },

  {
    key: "hampers",
    icon: "gift",
    title: "Pooja Items / Hamper and Gifting",
    images: "Pooja-Hampers.jpg",
    intro: "Premium pooja hampers and gifting options for festivals, weddings, and religious days.",

    whatPoints: [
      "We offer pooja hampers for festivals, weddings, and religious occasions.",
      "Gift options can be tailored for sacred events.",
      "Products support meaningful traditional gifting.",
      "Offerings are suitable for both family and community use."
    ],

    whyPoints: [
      "Pooja gifting adds value to sacred celebrations.",
      "It helps people prepare thoughtfully for ritual occasions.",
      "Members receive special discounts on purchases.",
      "It combines devotion with convenience."
    ],

    more: [
      {
        title: "Hamper Highlights",
        points: [
          "Festival-ready gifting",
          "Wedding pooja support",
          "Religious day hamper options",
          "Member discounts available"
        ]
      }
    ]
  }
];

let currentService = null;

/* ===== Store UI ===== */
function buildStoreCards() {
  const grid = $("storeCardsGrid");
  if (!grid) return;

  grid.innerHTML = storeServices.map(s => `
    <div class="bg-white rounded-2xl border border-[var(--stroke)] shadow-sm overflow-hidden cursor-pointer hover:bg-[rgba(240,137,5,.10)] transition"
        onclick="openStoreDetail('${s.key}')">
      <div class="h-40 w-full bg-stone-100">
        <img src="images/${s.images}" alt="${s.title}" class="w-full h-full object-cover" onerror="this.src='images/placeholder.jpg'">
      </div>
      <div class="p-6">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-[rgba(240,137,5,.18)] border border-[var(--stroke)]">
            <i data-feather="${s.icon}" class="w-7 h-7 text-[var(--primary-2)]"></i>
          </div>
          <div class="max-w-sm">
            <h4 class="font-black text-[var(--chandan)] leading-tight text-lg">${s.title}</h4>
            <p class="text-sm text-stone-600 mt-2 leading-relaxed font-semibold">${s.intro}</p>
            <div class="mt-4 text-[10px] font-black uppercase tracking-widest text-[var(--primary-2)]">Tap to view details →</div>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  feather.replace();
}

function openStoreDetail(key) {
  const s = storeServices.find(x => x.key === key);
  if (!s) return;
  currentService = s;

  const cards = $("storeCardsGrid");
  const detail = $("storeDetailView");
  if (!cards || !detail) return;

  cards.classList.add("hidden");
  detail.classList.remove("hidden");

  $("detailTitle").innerText = s.title;
  $("detailIntro").innerText = s.intro;

  const img = $("detailImg");
  img.src = `images/${s.images}`;
  img.alt = s.title;
  img.onerror = function () { this.src = "images/placeholder.jpg"; };

  const iconEl = $("detailIcon");
  iconEl.setAttribute("data-feather", s.icon);


function togglePoints(wrapId, btn) {
  const wrap = document.getElementById(wrapId);
  if (!wrap) return;

  wrap.classList.toggle("hidden");
  btn.innerText = wrap.classList.contains("hidden") ? "Read More" : "Show Less";
}

$("detailBody").innerHTML = `
  <div class="service-drop-card">
    <div class="service-drop-head">
      <div>
        <div class="service-mini-title">WHAT WE DO</div>
        <h4 class="service-main-title">What</h4>
      </div>
      ${(s.whatPoints && s.whatPoints.length) ? `
        <button type="button"
          class="service-read-btn"
          onclick="togglePoints('whatPointsWrap', this)">
          Read More
        </button>
      ` : ""}
    </div>

    <div id="whatPointsWrap" class="hidden service-drop-body">
      <ul class="service-bullet-list">
        ${(s.whatPoints || []).map(point => `<li>${point}</li>`).join("")}
      </ul>
    </div>
  </div>
`;

$("detailWhy").innerHTML = `
  <div class="service-drop-card">
    <div class="service-drop-head">
      <div>
        <div class="service-mini-title">WHY IT MATTERS</div>
        <h4 class="service-main-title">Why</h4>
      </div>
      ${(s.whyPoints && s.whyPoints.length) ? `
        <button type="button"
          class="service-read-btn"
          onclick="togglePoints('whyPointsWrap', this)">
          Read More
        </button>
      ` : ""}
    </div>

    <div id="whyPointsWrap" class="hidden service-drop-body">
      <ul class="service-bullet-list">
        ${(s.whyPoints || []).map(point => `<li>${point}</li>`).join("")}
      </ul>
    </div>
  </div>
`;

  $("detailMoreWrap").innerHTML = "";
  $("detailMoreWrap").className = "more-grid";

  const moreBtn = $("moreBtn");
  if (s.key === "calendar") {
    moreBtn.classList.remove("hidden");
    moreBtn.innerText = "Open Calendar";
  } else if (s.more && s.more.length) {
    moreBtn.classList.remove("hidden");
    moreBtn.innerText = "Show All";
  } else {
    moreBtn.classList.add("hidden");
  }

  feather.replace();
  detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function backToStoreCards() {
  const cards = $("storeCardsGrid");
  const detail = $("storeDetailView");
  if (!cards || !detail) return;
  detail.classList.add("hidden");
  cards.classList.remove("hidden");
  feather.replace();
}

function getMoreIcon(serviceKey, title) {
  const t = (title || "").toLowerCase();
  if (serviceKey === "seva") {
    if (t.includes("annad")) return "coffee";
    if (t.includes("vastra")) return "shopping-bag";
    if (t.includes("dhana")) return "dollar-sign";
    if (t.includes("vidy")) return "book-open";
    if (t.includes("picture")) return "image";
    return "heart";
  }
  if (serviceKey === "rituals") {
    if (t.includes("samskara")) return "layers";
    if (t.includes("puja")) return "feather";
    if (t.includes("festival")) return "sun";
    if (t.includes("overview")) return "info";
    return "star";
  }
  if (serviceKey === "aarti") {
    if (t.includes("link")) return "link";
    return "music";
  }
  if (serviceKey === "calendar") return "calendar";
  if (serviceKey === "workshops") {
    if (t.includes("benefit")) return "award";
    return "users";
  }
  if (serviceKey === "hampers") {
    if (t.includes("picture")) return "image";
    return "gift";
  }
  return "star";
}

function showMoreAll() {
  if (!currentService) return;

  // Special case for Hindu Calendar
  if (currentService.key === "calendar") {
    if (!festivalData || !festivalData.length) {
      const wrap = $("detailMoreWrap");
      wrap.className = "";
      wrap.innerHTML = `
        <div class="more-card">
          <div class="font-black text-[var(--chandan)] mb-2">Calendar not loaded</div>
          <div class="text-sm text-stone-600 leading-relaxed">
            Please keep <b>festivals.json</b> in the same folder and run using Live Server / local server.
          </div>
        </div>`;
      $("moreBtn").classList.add("hidden");
      feather.replace();
      return;
    }

    const now = new Date();
    mwMonthIndex = (now.getFullYear() === YEAR) ? now.getMonth() : 0;
    renderMonthWiseCalendar();
    $("moreBtn").classList.add("hidden");
    return;
  }

  if (!currentService.more || !currentService.more.length) return;

  const wrap = $("detailMoreWrap");
  wrap.className = "more-grid";
  wrap.innerHTML = "";

  currentService.more.forEach((item, index) => {
    const icon = item.icon || getMoreIcon(currentService.key, item.title);

    let insideHTML = "";

    if (item.table && item.headers && item.rows) {
      insideHTML = `
        <div class="overflow-x-auto rounded-2xl border border-[var(--stroke)]">
          <table class="min-w-full text-sm bg-white">
            <thead style="background: rgba(240,137,5,.15);">
              <tr>
                ${item.headers.map(h => `<th class="px-4 py-3 text-left font-black text-[var(--chandan)]">${h}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${item.rows.map(row => `
                <tr class="border-t">
                  ${row.map(cell => `<td class="px-4 py-3 text-stone-600 font-medium">${cell}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    } else {
      insideHTML = `
        <ul class="list-disc pl-5 space-y-2 text-sm text-stone-600 leading-relaxed font-medium">
          ${(item.points || []).map(point => `<li>${point}</li>`).join("")}
        </ul>
      `;
    }

    const card = document.createElement("div");
    card.className = "more-card";
    card.innerHTML = `
      <div class="flex flex-col items-center text-center gap-4">
        <div style="width:56px;height:56px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:rgba(240,137,5,.18);border:2px solid var(--stroke);">
          <i data-feather="${icon}" class="w-6 h-6 text-[var(--primary-2)]"></i>
        </div>
        <div class="w-full">
          <div class="font-black text-[var(--chandan)] text-lg mb-4">${item.title || "More"}</div>
          ${insideHTML}
        </div>
      </div>
    `;
    wrap.appendChild(card);
  });

  $("moreBtn").classList.add("hidden");
  feather.replace();
  wrap.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ===== Join Modal ===== */
function openJoinForm() {
  const m = $("joinModal");
  if (!m) return;
  m.style.display = "flex";
  document.body.style.overflow = "hidden";
  feather.replace();
}
function closeJoinForm() {
  const m = $("joinModal");
  if (!m) return;
  m.style.display = "none";
  document.body.style.overflow = "auto";
}

/* ===== Festival Modal ===== */
function closeFestivalModal() {
  const m = $("festivalModal");
  if (!m) return;
  m.style.display = "none";
  document.body.style.overflow = "auto";
}

/* ===== Calendar Logic ===== */
const YEAR = 2026;
const MONTHS_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_ABBR = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let festivalData = [];
let calendarView = "grid";

let monthDayFest = {};
let mwMonthIndex = 0;

function parseDayNumber(dateStr) {
  const s = (dateStr || "").trim();
  const m1 = s.match(/^(\d{1,2})/);
  if (m1) return parseInt(m1[1], 10);
  const m2 = s.match(/-(\d{1,2})-?$/);
  if (m2) return parseInt(m2[1], 10);
  return null;
}

function getMonthIndexFromFestival(f, monthName) {
  const s = (safeText(f.date) || "");
  const ab = MONTHS_ABBR.findIndex(a => s.toLowerCase().includes(a.toLowerCase()));
  if (ab !== -1) return ab;
  const full = MONTHS_FULL.findIndex(m => m.toLowerCase() === safeText(monthName).toLowerCase());
  return full;
}

function buildMonthDayFest() {
  monthDayFest = {};
  festivalData.forEach((mBlock) => {
    const monthName = safeText(mBlock.month);
    (mBlock.items || []).forEach((f) => {
      const mi = getMonthIndexFromFestival(f, monthName);
      const day = parseDayNumber(f.date);
      if (mi == null || day == null || Number.isNaN(mi) || Number.isNaN(day)) return;

      if (!monthDayFest[mi]) monthDayFest[mi] = {};
      if (!monthDayFest[mi][day]) monthDayFest[mi][day] = [];
      monthDayFest[mi][day].push(f);
    });
  });
}

function renderMonthWiseCalendar() {
  const wrap = $("detailMoreWrap");
  if (!wrap) return;

  wrap.className = "";
  wrap.innerHTML = `
    <div class="mw-wrap">
      <div class="mw-head">
        <div>
          <div class="text-[10px] font-black tracking-[0.35em] uppercase text-stone-500">Festival Calendar</div>
          <div class="brand-font text-[var(--primary-2)] text-2xl">${MONTHS_FULL[mwMonthIndex]} ${YEAR}</div>
        </div>

        <div class="flex items-center gap-2">
          <button class="mw-btn" type="button" onclick="mwPrev()">
            <span class="inline-flex items-center gap-2">
              <i data-feather="chevron-left" class="w-4 h-4"></i> Previous
            </span>
          </button>

          <select class="mw-dd" onchange="mwSelect(this.value)">
            ${MONTHS_FULL.map((m, i) => `<option value="${i}" ${i === mwMonthIndex ? "selected" : ""}>${m}</option>`).join("")}
          </select>

          <button class="mw-btn" type="button" onclick="mwNext()">
            <span class="inline-flex items-center gap-2">
              Next <i data-feather="chevron-right" class="w-4 h-4"></i>
            </span>
          </button>
        </div>
      </div>

      <div class="mw-grid" id="mwGridHead"></div>
      <div class="mw-grid" id="mwGridBody"></div>
    </div>
  `;

  const dow = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  $("mwGridHead").innerHTML = dow.map(d => `<div class="mw-dow">${d}</div>`).join("");

  const firstDay = new Date(YEAR, mwMonthIndex, 1).getDay();
  const daysInMonth = new Date(YEAR, mwMonthIndex + 1, 0).getDate();

  const totalCells = 42;
  let html = "";
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - firstDay + 1;
    const inMonth = dayNum >= 1 && dayNum <= daysInMonth;

    if (!inMonth) {
      html += `<div class="mw-cell mw-off"></div>`;
      continue;
    }

    const fests = (monthDayFest[mwMonthIndex] && monthDayFest[mwMonthIndex][dayNum]) ? monthDayFest[mwMonthIndex][dayNum] : [];
    const pills = fests.slice(0, 3).map(f => {
      const name = safeText(f.englishname || "Festival");
      return `<div class="mw-pill" title="${name}">
        <span class="mw-dot"></span>
        <span class="min-w-0">${name}</span>
      </div>`;
    }).join("");

    const moreCount = fests.length > 3 ? `<div class="mt-2 text-[11px] font-extrabold text-stone-500">+${fests.length - 3} more</div>` : "";

    html += `
      <div class="mw-cell">
        <div class="mw-daynum">${dayNum}</div>
        ${pills}
        ${moreCount}
      </div>
    `;
  }

  $("mwGridBody").innerHTML = html;
  feather.replace();
}

function mwPrev() { mwMonthIndex = (mwMonthIndex - 1 + 12) % 12; renderMonthWiseCalendar(); }
function mwNext() { mwMonthIndex = (mwMonthIndex + 1) % 12; renderMonthWiseCalendar(); }
function mwSelect(v) { mwMonthIndex = parseInt(v, 10); if (Number.isNaN(mwMonthIndex)) mwMonthIndex = 0; renderMonthWiseCalendar(); }

function setCalendarView(view) {
  calendarView = view;
  $("viewGridBtn")?.classList.toggle("active", view === "grid");
  $("viewTableBtn")?.classList.toggle("active", view === "table");
  buildCalendar();
}

function metaLine(f) {
  const a = [safeText(f.date), safeText(f.day), safeText(f.tithimonth)].filter(Boolean);
  return a.join(" • ");
}

function buildMonthsNav() {
  const nav = $("monthsGrid");
  if (!nav) return;

  nav.innerHTML = "";
  festivalData.forEach((m, idx) => {
    const b = document.createElement("button");
    b.className = "month-btn";
    b.innerText = (safeText(m.month).slice(0, 3) || "---").toUpperCase();
    b.onclick = () => {
      setActiveMonth(idx);
      $(`month-block-${idx}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    nav.appendChild(b);
  });
  setActiveMonth(0);
}

function setActiveMonth(activeIdx) {
  const btns = [...document.querySelectorAll("#monthsGrid .month-btn")];
  btns.forEach((b, i) => b.classList.toggle("active", i === activeIdx));
}

function buildCalendar() {
  const dir = $("festivalDirectory");
  if (!dir) return;
  dir.innerHTML = "";

  festivalData.forEach((m, idx) => {
    const monthName = safeText(m.month) || "";
    const items = (m.items || []);
    const section = document.createElement("section");
    section.id = `month-block-${idx}`;
    section.className = "scroll-mt-28";

    const header = `
      <div class="flex items-center gap-4 mb-6">
        <h3 class="brand-font text-3xl text-[var(--chandan)] uppercase">${monthName}</h3>
        <div class="h-px bg-[var(--haldi)] flex-grow"></div>
      </div>
    `;

    const gridHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${items.map(f => {
          const encF = encodeURIComponent(JSON.stringify(f));
          const encM = encodeURIComponent(monthName);
          return `
            <div class="fest-card" onclick="openFestivalModal('${encF}','${encM}')">
              <div class="flex items-center justify-between gap-3">
                <div class="min-w-0">
                  <div class="font-extrabold text-lg text-stone-800 truncate">${safeText(f.englishname)}</div>
                  <div class="text-[10px] font-black uppercase tracking-tight text-[var(--primary-2)]">${metaLine(f)}</div>
                </div>
                <i data-feather="chevron-right" class="w-4 h-4 text-stone-300 flex-shrink-0"></i>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    const tableHTML = `
      <div class="overflow-x-auto bg-white rounded-2xl border border-[var(--stroke)] shadow-sm">
        <table class="min-w-full text-sm">
          <thead style="background: rgba(240,137,5,.18);">
            <tr class="text-left">
              <th class="px-4 py-3 font-black text-[var(--chandan)]">Date</th>
              <th class="px-4 py-3 font-black text-[var(--chandan)]">Festival</th>
              <th class="px-4 py-3 font-black text-[var(--chandan)]">Day</th>
              <th class="px-4 py-3 font-black text-[var(--chandan)]">Tithi</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(f => {
              const encF = encodeURIComponent(JSON.stringify(f));
              const encM = encodeURIComponent(monthName);
              return `
                <tr class="border-t hover:bg-[rgba(240,137,5,.10)] cursor-pointer" onclick="openFestivalModal('${encF}','${encM}')">
                  <td class="px-4 py-3 whitespace-nowrap font-extrabold text-stone-700">${safeText(f.date) || "—"}</td>
                  <td class="px-4 py-3">
                    <div class="font-extrabold text-stone-800">${safeText(f.englishname) || "—"}</div>
                    <div class="text-xs text-stone-500">${safeText(f.hindiname) || ""}</div>
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap text-stone-600 font-semibold">${safeText(f.day) || "—"}</td>
                  <td class="px-4 py-3 whitespace-nowrap text-stone-600 font-semibold">${safeText(f.tithimonth) || "—"}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    section.innerHTML = header + (calendarView === "grid" ? gridHTML : tableHTML);
    dir.appendChild(section);
  });

  feather.replace();
}

async function loadFestivals() {
  const err = $("calendarError");
  if (err) { err.classList.add("hidden"); err.innerText = ""; }

  try {
    const res = await fetch("festivals.json", { cache: "no-store" });
    if (!res.ok) throw new Error("festivals.json not found");
    const data = await res.json();
    const months = data.months || data.Months || data.MONTHS || [];
    if (!Array.isArray(months) || !months.length) throw new Error("Invalid JSON structure. Expected {months:[{month:'January',items:[...]}]}");
    festivalData = months;

    buildMonthDayFest();
    buildMonthsNav();
    setCalendarView("grid");
  } catch (e) {
    if (!err) return;
    err.classList.remove("hidden");
    err.innerHTML = `
      <div class="font-extrabold text-[var(--primary-2)] mb-2">Calendar not loading</div>
      <div>Make sure <b>festivals.json</b> is in the same folder and you are running a local server (Live Server / python http.server).</div>
      <div class="mt-2 text-xs text-stone-500 font-semibold">Error: ${safeText(e.message)}</div>
    `;
  }
}

function openFestivalModal(encodedFestival, encodedMonth) {
  const f = JSON.parse(decodeURIComponent(encodedFestival));
  const mName = decodeURIComponent(encodedMonth);

  $("modalTitle").innerText = safeText(f.englishname);
  $("modalHindi").innerText = safeText(f.hindiname);

  $("modalMeta").innerText =
    [mName, f.date, f.day, f.type, f.tithimonth, f.muhurat, f.focus].filter(Boolean).join(" • ");

  const modalImg = $("modalImg");
  modalImg.src = f.images ? ("images/" + f.images) : "images/placeholder.jpg";
  modalImg.alt = safeText(f.englishname);
  modalImg.onerror = function () { this.src = "images/placeholder.jpg"; };

  $("modalSign").innerText = safeText(f.significance) || "—";

  const kBlock = $("modalKathaBlock");
  if (f.katha) { kBlock.classList.remove("hidden"); $("modalKatha").innerText = f.katha; }
  else { kBlock.classList.add("hidden"); }

  const procItems = [
    f.morning && { label: "Morning", text: f.morning },
    f.daytime && { label: "Daytime", text: f.daytime },
    f.mainpuja && { label: "Main Puja", text: f.mainpuja }
  ].filter(Boolean);

  const pBlock = $("modalProcBlock");
  const pEl = $("modalProc");
  if (procItems.length) {
    pBlock.classList.remove("hidden");
    pEl.innerHTML = procItems.map(x => `<p><strong class="text-stone-700">${x.label}:</strong> ${safeText(x.text)}</p>`).join("");
  } else {
    pBlock.classList.add("hidden");
    pEl.innerHTML = "";
  }

  const fastBlock = $("modalFastBlock");
  if (f.fastingrules) { fastBlock.classList.remove("hidden"); $("modalFast").innerText = f.fastingrules; }
  else { fastBlock.classList.add("hidden"); }

  const daanBlock = $("modalDaanBlock");
  if (f.daan) { daanBlock.classList.remove("hidden"); $("modalDaan").innerText = f.daan; }
  else { daanBlock.classList.add("hidden"); }

  const notesBlock = $("modalNotesBlock");
  if (f.notes) { notesBlock.classList.remove("hidden"); $("modalNotes").innerText = f.notes; }
  else { notesBlock.classList.add("hidden"); }

  $("festivalModal").style.display = "flex";
  document.body.style.overflow = "hidden";
  feather.replace();
}

/* ===== Init (runs on every page safely) ===== */
// footer year
const y = document.getElementById("yearNow");
if (y) y.textContent = new Date().getFullYear();

// close mobile menu when clicking any mobile link
const mobileMenu = document.getElementById("mobileMenu");
if (mobileMenu) {
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => closeMobileMenu());
  });
}

// close mobile menu on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) closeMobileMenu();
});

// hero

  const slides = document.querySelectorAll("#heroSlider .slide");
  let currentSlide = 0;

  function changeSlide() {
    slides[currentSlide].classList.remove("opacity-100");
    slides[currentSlide].classList.add("opacity-0");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-100");
  }

  setInterval(changeSlide, 4000); // change every 4 seconds


  const sampradayaDescriptions = {
    Vaishnavism: `
      <strong>Vaishnavism</strong>
      Vaishnavism festivals are centered on Vishnu and his avatars like Rama and Krishna.
      These traditions strongly emphasize bhakti, devotion, nama japa, temple worship,
      Ekadashi observances, Janmashtami, Rama Navami, and other Vishnu-related celebrations.
    `,
    Shaivism: `
      <strong>Shaivism</strong>
      Shaivism festivals focus on Lord Shiva, with special importance given to
      Maha Shivaratri, Pradosha Vratam, monthly Shivaratri, ascetic vigils, abhishekam,
      and lingam-centered worship practices.
    `,
    Shaktism: `
      <strong>Shaktism</strong>
      Shaktism is goddess-centric, honoring Devi in forms such as Durga, Lakshmi,
      Saraswati, Kali, and Lalita. Navaratri, Durga Puja, Varalakshmi Vrata,
      and other Devi festivals are especially important, often observed with intense rituals and community celebrations.
    `,
    Smartism: `
      <strong>Smartism</strong>
      Smartism follows a non-exclusive approach and often includes Panchayatana puja,
      honoring Shiva, Vishnu, Devi, Surya, and Ganesha together. It observes shared
      pan-Hindu festivals with a balanced and inclusive spiritual outlook.
    `,
    Other: `
      <strong>Other</strong>
      You may follow a regional, family-based, temple-based, guru-based, or personal
      spiritual tradition that does not fit into one category. You can still register
      and receive reminders and updates based on your needs.
    `,
    None: `
      <strong>None</strong>
      Even if you do not primarily follow a specific sampradaya, you can still join
      Pratham Sanskruti to receive cultural guidance, festival reminders, puja support,
      and family-friendly resources.
    `
  };

  const sampradayaSelect = document.getElementById("sampradayaSelect");
  const sampradayaInfo = document.getElementById("sampradayaInfo");

  if (sampradayaSelect && sampradayaInfo) {
    sampradayaSelect.addEventListener("change", function () {
      const value = this.value;

      if (value && sampradayaDescriptions[value]) {
        sampradayaInfo.innerHTML = sampradayaDescriptions[value];
        sampradayaInfo.classList.remove("hidden");
      } else {
        sampradayaInfo.innerHTML = "";
        sampradayaInfo.classList.add("hidden");
      }
    });
  }

  const joinForm = document.getElementById("joinForm");
  if (joinForm) {
    joinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Registration submitted. OTP / email verification can be connected in backend.");
      closeJoinForm();
    });
  }
