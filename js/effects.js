/* ============================================================
   تأثيرات مشتركة: كشف العناصر عند التمرير + شريط تقدّم أعلى الصفحة
   ============================================================ */

(function () {
  // شريط تقدّم القراءة أعلى الصفحة
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  window.addEventListener(
    "scroll",
    () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      bar.style.width = Math.min(scrolled * 100, 100) + "%";
    },
    { passive: true }
  );

  // كشف العناصر تدريجيًا عند دخولها الشاشة
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  function initReveal() {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }

  // إتاحة إعادة الفحص بعد إضافة عناصر ديناميكيًا (كروت المستويات مثلًا)
  window.rescanReveal = function () {
    document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => observer.observe(el));
  };

  // عداد تصاعدي بسيط للأرقام (يُستخدم في شريط الإحصائيات)
  window.animateCount = function (el, target, duration) {
    duration = duration || 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString("ar-EG");
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
})();
