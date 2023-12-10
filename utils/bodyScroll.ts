export function disableScroll() {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
};

export function enableScroll() {
  document.body.style.overflow = "unset";
};
