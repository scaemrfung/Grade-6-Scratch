function coverSrc(n) {
  return `img/cover-${n}.svg`;
}

function thumbSrc(n) {
  return `img/thumb-${n}.svg`;
}

function sceneSVG(kind) {
  const scenes = {
    editor: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#cde8de"/><rect x="10" y="12" width="88" height="58" rx="8" fill="#f6fbf8"/><rect x="18" y="20" width="36" height="8" rx="4" fill="#ffbf00"/><rect x="18" y="32" width="44" height="8" rx="4" fill="#4c97ff"/><rect x="18" y="44" width="28" height="8" rx="4" fill="#9966ff"/><circle cx="128" cy="40" r="16" fill="#f4a261"/><circle cx="122" cy="36" r="2" fill="#12241d"/><circle cx="134" cy="36" r="2" fill="#12241d"/><path d="M122 46c4 4 10 4 14 0" fill="none" stroke="#12241d" stroke-width="2" stroke-linecap="round"/></svg>`,
    letters: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#d7efe6"/><text x="22" y="58" font-size="36" font-weight="700" fill="#e07a5f" font-family="Georgia,serif">A</text><text x="58" y="50" font-size="36" font-weight="700" fill="#f2cc8f" font-family="Georgia,serif">N</text><text x="96" y="60" font-size="36" font-weight="700" fill="#0b6b56" font-family="Georgia,serif">I</text></svg>`,
    character: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#e7f2ee"/><ellipse cx="80" cy="78" rx="48" ry="8" fill="#cde8de"/><circle cx="80" cy="40" r="18" fill="#f4a261"/><rect x="68" y="56" width="24" height="16" rx="6" fill="#0b6b56"/></svg>`,
    story: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#f3efe4"/><circle cx="48" cy="50" r="14" fill="#81b29a"/><circle cx="108" cy="50" r="14" fill="#e07a5f"/><rect x="62" y="18" width="36" height="20" rx="10" fill="#f6fbf8"/></svg>`,
    music: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#e7f2ee"/><rect x="24" y="50" width="14" height="24" rx="3" fill="#e07a5f"/><rect x="42" y="40" width="14" height="34" rx="3" fill="#f2cc8f"/><rect x="60" y="30" width="14" height="44" rx="3" fill="#81b29a"/><rect x="78" y="36" width="14" height="38" rx="3" fill="#4c97ff"/><circle cx="120" cy="28" r="8" fill="#cf63cf"/></svg>`,
    fly: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#9ad0c0"/><ellipse cx="40" cy="30" rx="18" ry="10" fill="#f6fbf8"/><ellipse cx="120" cy="22" rx="22" ry="12" fill="#f6fbf8"/><circle cx="86" cy="46" r="14" fill="#f4a261"/><path d="M70 46c-12 4-20 14-22 22" fill="none" stroke="#0b6b56" stroke-width="3"/></svg>`,
    chase: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#d7efe6"/><circle cx="52" cy="54" r="14" fill="#f4a261"/><polygon points="110,28 122,54 98,54" fill="#ffbf00"/></svg>`,
    pong: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#cde8de"/><rect x="18" y="30" width="8" height="36" rx="4" fill="#0b6b56"/><circle cx="88" cy="44" r="8" fill="#e07a5f"/><rect x="134" y="22" width="8" height="36" rx="4" fill="#0b6b56"/></svg>`,
    video: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#e7f2ee"/><rect x="38" y="18" width="84" height="54" rx="8" fill="#12241d"/><rect x="46" y="26" width="68" height="38" rx="4" fill="#5cb1d6"/><circle cx="80" cy="45" r="10" fill="#f4a261"/></svg>`,
    catch: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#d7efe6"/><circle cx="50" cy="22" r="7" fill="#e07a5f"/><circle cx="90" cy="16" r="6" fill="#ffbf00"/><circle cx="120" cy="24" r="7" fill="#e07a5f"/><rect x="60" y="58" width="40" height="12" rx="6" fill="#0b6b56"/></svg>`,
    jump: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#e7f2ee"/><rect x="20" y="66" width="120" height="8" rx="4" fill="#81b29a"/><rect x="70" y="54" width="28" height="14" rx="3" fill="#6d4c41"/><circle cx="96" cy="30" r="12" fill="#f4a261"/></svg>`,
    pet: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#f3efe4"/><ellipse cx="80" cy="52" rx="22" ry="16" fill="#f4a261"/><circle cx="80" cy="34" r="12" fill="#f4a261"/><rect x="30" y="64" width="18" height="10" rx="4" fill="#cde8de"/><rect x="112" y="64" width="18" height="10" rx="4" fill="#5cb1d6"/></svg>`,
    share: `<svg viewBox="0 0 160 90" aria-hidden="true"><rect width="160" height="90" rx="12" fill="#0b6b56"/><circle cx="80" cy="44" r="16" fill="#f2cc8f"/><circle cx="52" cy="58" r="8" fill="#cde8de"/><circle cx="108" cy="58" r="8" fill="#cde8de"/></svg>`
  };
  return scenes[kind] || scenes.editor;
}

const LESSON_SCENE = {
  0: "editor", 1: "letters", 2: "character", 3: "story", 4: "music",
  5: "fly", 6: "chase", 7: "pong", 8: "video", 9: "catch",
  10: "jump", 11: "pet", 12: "share"
};

function coverFigure(n, title) {
  const scene = sceneSVG(LESSON_SCENE[n]);
  return `<figure class="lesson-cover">
    <div class="scene-cover">${scene}</div>
    <img src="${coverSrc(n)}" alt="${esc(title)} illustration" width="880" height="586" onerror="this.remove()"/>
    <div class="scene-chip">${scene}</div>
  </figure>`;
}
