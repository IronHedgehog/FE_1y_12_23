(() => {
  const refs = {
    // Знаходимо кнопку яка відкриває модальне вікно та у якої є АТРИБУТ data-modal-open
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Знаходимо кнопку яка закриває модальне вікно та у якої є АТРИБУТ data-modal-close
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Знаходимо БЕКДРОП  МОДАЛКИ  у якого є АТРИБУТ data-modal
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
