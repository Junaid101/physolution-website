import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initHeroAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.getElementById('heroSection')!,
    work = document.getElementById('services')!,
    heroBar = document.getElementById('heroBlueBar')!,
    workBar = document.getElementById('scrollBluePanel')!,
    heroBlack = document.getElementById('heroBlackContent')!,
    workBlack = document.getElementById('workBlackContent')!,
    heroWhite = document.getElementById('heroWhiteContent')!,
    workWhite = document.getElementById('workWhiteContent')!;

  heroWhite.innerHTML = heroBlack.innerHTML;
  workWhite.innerHTML = workBlack.innerHTML;

  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  const state = { mouseX: innerWidth * (isMobile() ? 0.75 : 0.55), width: 90 };

  function render(section: DOMRect, black: DOMRect, bar: HTMLElement, white: HTMLElement) {
    // Skip sections that are entirely off-screen.
    if (section.bottom < 0 || section.top > innerHeight) return;
    const mx = state.mouseX - black.left,
      half = state.width / 2;
    const lp = gsap.utils.clamp(0, 100, ((mx - half) / black.width) * 100),
      rp = gsap.utils.clamp(0, 100, 100 - ((mx + half) / black.width) * 100);
    gsap.set(bar, { left: state.mouseX - section.left, width: state.width });
    gsap.set(white, {
      top: black.top - section.top,
      left: black.left - section.left,
      width: black.width,
      height: black.height,
      clipPath: 'inset(0 ' + rp + '% 0 ' + lp + '%)',
    });
  }

  function update() {
    // Read all layout first, then write, so layout is computed once per frame.
    const hr = hero.getBoundingClientRect(),
      wr = work.getBoundingClientRect(),
      hbr = heroBlack.getBoundingClientRect(),
      wbr = workBlack.getBoundingClientRect();
    render(hr, hbr, heroBar, heroWhite);
    render(wr, wbr, workBar, workWhite);
  }

  // Coalesce mouse + scroll updates into a single render per tick.
  let dirty = true;
  const invalidate = () => {
    dirty = true;
  };
  gsap.ticker.add(() => {
    if (!dirty) return;
    dirty = false;
    update();
  });

  const moveTo = gsap.quickTo(state, 'mouseX', {
    duration: 0.3,
    ease: 'power3.out',
    onUpdate: invalidate,
  });

  hero.addEventListener('mousemove', (e) => {
    if (isMobile()) return;
    const r = hero.getBoundingClientRect(),
      p = gsap.utils.clamp(0.05, 0.95, (e.clientX - r.left) / r.width);
    moveTo(p * innerWidth);
  });

  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: () => hero.offsetHeight + work.offsetHeight * 0.75,
    scrub: 0.3,
    invalidateOnRefresh: true,
    onUpdate: (s) => {
      state.width = gsap.utils.interpolate(90, innerWidth * 2, s.progress);
      invalidate();
    },
  });

  // iOS Safari fires resize when the URL bar shows/hides; only react to width changes.
  let lastWidth = innerWidth;
  addEventListener('resize', () => {
    if (innerWidth === lastWidth) return;
    lastWidth = innerWidth;
    gsap.set(state, { mouseX: innerWidth * (isMobile() ? 0.75 : 0.55) });
    invalidate();
  });

  document.fonts?.ready.then(() => {
    ScrollTrigger.refresh();
    invalidate();
  });

  addEventListener('load', () => {
    ScrollTrigger.refresh();
    invalidate();
  });
}
