import { useEffect } from "react";

/**
 * useScrollReveal – elegant fade-in + staggered cascade on scroll.
 * Apply className="scroll-reveal" to any element you want to animate.
 * 
 * @param {string} selector - CSS selector for elements to animate (default: ".scroll-reveal")
 * @param {Array} dependencies - Dependencies to re-run the observer (default: [])
 */
export default function useScrollReveal(selector = ".scroll-reveal", dependencies = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // Only add delay if element doesn't already have active class
            if (!el.classList.contains("active")) {
              el.style.transitionDelay = `${index * 100}ms`;
              el.classList.add("active");
            }
            // Don't unobserve - allow re-animation if needed
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    elements.forEach((el) => {
      // If element is already visible, activate it immediately
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("active");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [selector, ...dependencies]);
}