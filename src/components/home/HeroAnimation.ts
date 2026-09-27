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

  function sync(section: HTMLElement, black: HTMLElement, white: HTMLElement) {
    const sr = section.getBoundingClientRect(),
      br = black.getBoundingClientRect(),
      mx = state.mouseX - br.left,
      half = state.width / 2;
    const lp = gsap.utils.clamp(0, 100, ((mx - half) / br.width) * 100),
      rp = gsap.utils.clamp(0, 100, 100 - ((mx + half) / br.width) * 100);
    gsap.set(white, {
      top: br.top - sr.top,
      left: br.left - sr.left,
      width: br.width,
      height: br.height,
      clipPath: 'inset(0 ' + rp + '% 0 ' + lp + '%)',
    });
  }

  function update() {
    const hr = hero.getBoundingClientRect(),
      wr = work.getBoundingClientRect();
    gsap.set(heroBar, { left: state.mouseX - hr.left, width: state.width });
    gsap.set(workBar, { left: state.mouseX - wr.left, width: state.width });
    sync(hero, heroBlack, heroWhite);
    sync(work, workBlack, workWhite);
  }

  hero.addEventListener('mousemove', (e) => {
    if (isMobile()) return;
    const r = hero.getBoundingClientRect(),
      p = gsap.utils.clamp(0.05, 0.95, (e.clientX - r.left) / r.width);
    gsap.to(state, {
      mouseX: p * innerWidth,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: true,
      onUpdate: update,
    });
  });

  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: () => hero.offsetHeight + work.offsetHeight * 0.75,
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (s) => {
      state.width = gsap.utils.interpolate(90, innerWidth * 2, s.progress);
      update();
    },
  });

  update();

  addEventListener('resize', () => {
    state.mouseX = innerWidth * (isMobile() ? 0.75 : 0.55);
    ScrollTrigger.refresh();
    update();
  });

  document.fonts?.ready.then(() => {
    ScrollTrigger.refresh();
    update();
  });

  addEventListener('load', () => {
    ScrollTrigger.refresh();
    update();
  });
}
