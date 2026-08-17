/* ============================================================
   تتبع تقدم المستخدم — يُحفظ في متصفحه (localStorage)
   ما فيش سيرفر أو قاعدة بيانات مطلوبة لهذا الجزء.
   ============================================================ */

const PROGRESS_KEY = "fiqh_almuslim_progress_v1";

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function isLessonDone(lessonId) {
  return getProgress().includes(lessonId);
}

function markLessonDone(lessonId) {
  const done = getProgress();
  if (!done.includes(lessonId)) {
    done.push(lessonId);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(done));
  }
}

function levelProgress(level) {
  const done = getProgress();
  const doneCount = level.lessons.filter((l) => done.includes(l.id)).length;
  return { done: doneCount, total: level.lessons.length };
}
