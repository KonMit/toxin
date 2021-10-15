const dropdown = document.querySelector('.dropdown');
const dropdownBox = document.querySelectorAll('.dropdown__box');
const body = document.querySelector('body');

const openDropdown = (item, open) => {
  if (open)
    item.classList.remove('active');
  else
    item.classList.toggle('active');
}
// openDropdown
const counter = (item, scoreOld, dropdownBtnCancel) => {
  let counterScore = item.parentElement.parentElement.querySelector('.counter__score'),
      score = parseInt(counterScore.textContent);
  if (item.classList.contains('counter__btn_plus')) {
    if (score === 0) {
      dropdownBtnCancel.removeAttribute('hidden');
      dropdownBtnCancel.addEventListener('click', () => {
        score = scoreOld;
        counterScore.textContent = `${score}`;
        dropdownBtnCancel.setAttribute('hidden', '');
        dropdownBtnCancel.removeEventListener('click', () => {})
      })
    }
    score++;
    counterScore.textContent = `${score}`;
  }
  if (item.classList.contains('counter__btn_minus') && (score != 0)) {
    score--;
    counterScore.textContent = `${score}`;
    if (score === 0) {
      dropdownBtnCancel.setAttribute('hidden', '');
      dropdownBtnCancel.removeEventListener('click', () => {})
    }
  }
}
// counter



dropdown.addEventListener('click', (event) => {
  body.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      openDropdown(dropdownModal, true);
      openDropdown(dropdownBox, true);
    }

  });

    const dropdownBtnCancel = dropdown.querySelector('.dropdown-btns_cancel'),
          dropdownBtnApply = dropdown.querySelector('.dropdown-btns_apply'),
          dropdownModal = dropdown.querySelector('.dropdown-modal'),
          dropdownBox = dropdown.querySelector('.dropdown__box');
          counterScore = dropdown.querySelector('.counter__score');

    dropdownBtnApply.addEventListener('click', () => {
      dropdownModal.classList.remove('active');
    })
    if (event.target.closest('.dropdown__box')){
      openDropdown(dropdownModal);
      openDropdown(dropdownBox);
    }


    if(event.target.closest('.counter__image')) {
      let scoreOld = parseInt(counterScore.textContent);
      counter(event.target, scoreOld, dropdownBtnCancel);
    }
});
