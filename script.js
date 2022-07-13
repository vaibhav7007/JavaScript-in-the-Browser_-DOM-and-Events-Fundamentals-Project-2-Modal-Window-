'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  //console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //console.log(e.key); if we log this then whatever button we press will show in the console

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
// console.log(e.key);
/* 
  }*/

// querySelectorAll returns all element descendants of node that matches selectors
// in line 6 we used querySelectorAll instead of querySelector because whenever we use querySelector with a selector which actually matches multiple elements onlt the first one will get selected but in line 6 we needed another one that why we used querySelectorAll

// after adding Button clicked to console now each of these three buttons here has their own event handler function attached to it

// console.log(btnsOpenModal);
// the Nodelist in the console work as an array

// we will call the add event listner method in order to respond to a click event we will attach an event handler function to the element and event handler and event listner are pretty much the same thing here click is the event
