// Small, self-contained line icon set. No CDN or external image requests.
const paths = {
  home: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/>',
  list: '<path d="M9 6h12M9 12h12M9 18h12"/><path d="m3 6 1 1 2-2m-3 7 1 1 2-2m-3 7 1 1 2-2"/>',
  pantry: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M3 12h18M7 7V4h10v3M9 16h6"/>',
  chef: '<path d="M6 14a4 4 0 0 1-1.5-7.7A5 5 0 0 1 12 5a5 5 0 0 1 7.5 1.3A4 4 0 0 1 18 14"/><path d="M6 13v7h12v-7M9 17v3m6-3v3"/>',
  spark: '<path d="m12 2 2 7 7 3-7 2-2 8-2-8-7-2 7-3z"/><path d="m19 2 .5 1.5L21 4l-1.5.5L19 6l-.5-1.5L17 4l1.5-.5z"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  edit: '<path d="m15 5 4 4M4 20l4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11z"/>',
  trash: '<path d="M4 7h16M10 3h4M6 7l1 14h10l1-14M10 11v6m4-6v6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
  cart: '<path d="M2 4h2l2.5 11h12l2.5-8H5"/><circle cx="8" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',
  leaf: '<path d="M20 4C10 4 4 9 4 16a4 4 0 0 0 4 4c7 0 12-6 12-16Z"/><path d="M4 20c2-5 6-8 11-10"/>',
  produce: '<path d="M12 8c-2-3-7-3-8 2-1 4 2 10 6 11l2-1 2 1c4-1 7-7 6-11-1-5-6-5-8-2Z"/><path d="M12 9c0-3 1-5 3-6m-3 5C9 4 7 4 6 4"/>',
  dairy: '<path d="M7 4h10v3l2 3v11H5V10l2-3zM7 7h10M5 11h14M9 15h6"/>',
  meat: '<path d="M20 7c-2-4-8-5-12-2-3 2-4 5-4 8 0 3 2 5 5 6 4 1 7-1 9-4 2-3 3-6 2-8Z"/><circle cx="11" cy="11" r="2"/>',
  snow: '<path d="M12 2v20M4 7l16 10M4 17 20 7M9 5l3 3 3-3m-6 14 3-3 3 3"/>',
  drink: '<path d="M7 4h10l-1 17H8L7 4ZM7 9h10M12 4V2"/>',
  clean: '<path d="M8 3h8v4H8zM6 7h12l2 5v9H4v-9zM9 15h6"/>',
  box: '<path d="m3 7 9-4 9 4-9 4-9-4Zm0 0v10l9 4 9-4V7M12 11v10"/>',
  egg: '<path d="M12 3c-5 0-8 7-8 12a8 8 0 0 0 16 0c0-5-3-12-8-12Z"/>',
  soup: '<path d="M3 12h18a9 9 0 0 1-18 0ZM8 3c-2 2 2 3 0 5m5-5c-2 2 2 3 0 5m5-5c-2 2 2 3 0 5M6 21h12"/>',
  pizza: '<path d="M3 4a19 19 0 0 1 18 0L12 21 3 4Zm1 3a20 20 0 0 1 16 0"/><circle cx="11" cy="11" r="1"/><circle cx="14" cy="8" r="1"/>',
  bowl: '<path d="M2 11h20a10 10 0 0 1-20 0ZM7 21h10M7 7c2-3 7-3 10 0"/>',
  sandwich: '<path d="M3 11 12 4l9 7-9 8-9-8Zm0 4 9 7 9-7M3 11v4m18-4v4"/>',
  wheat: '<path d="M12 21V7m0 2C7 9 6 6 6 4c4 0 6 2 6 5Zm0 4c5 0 6-3 6-5-4 0-6 2-6 5Zm0 4c-5 0-6-3-6-5 4 0 6 2 6 5Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};

export function icon(name, className='') {
  const safeClass=String(className).replace(/[^a-zA-Z0-9 _-]/g,'');
  return `<svg class="icon ${safeClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]||paths.box}</svg>`;
}

export function hydrateIcons(root=document) {
  root.querySelectorAll('[data-icon]').forEach(element=>{
    element.innerHTML=icon(element.dataset.icon);
  });
}
