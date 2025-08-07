document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.js-infinite-append');
  if (!wrapper) return;

  const originalItems = Array.from(wrapper.children).map(child => child.cloneNode(true));

  let isAppending = false;

  wrapper.addEventListener('scroll', () => {
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

    if (!isAppending && wrapper.scrollLeft >= maxScrollLeft - 100) {
      isAppending = true;

      originalItems.forEach(clone => {
        wrapper.appendChild(clone.cloneNode(true));
      });

      setTimeout(() => {
        isAppending = false;
      }, 300);
    }
  });
});
