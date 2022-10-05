const inboxOptionHoverEl = document.querySelectorAll('.side__inbox-options-hover');

const optionsHover = (e) => {
  e.target.parentElement.style.background = '#FFFFFF';
}

const optionsMouseOut = (e) => {
  e.target.parentElement.style.background = '';
}

inboxOptionHoverEl.forEach(item => {
  item.addEventListener('mouseenter', optionsHover);
  item.addEventListener('mouseleave', optionsMouseOut);
})

