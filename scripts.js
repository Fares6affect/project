"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.review-card');
    const totalCards = cards.length;
    let currentIndex = 0;

    hideAllCards();
    showCard(currentIndex);
    updateCounter();

    document.querySelectorAll('.review-card__arrow').forEach(button => {
        button.addEventListener('click', function () {
            const direction = this.getAttribute('data-direction');
            hideCard(currentIndex);
            if (direction === 'prev') {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            } else if (direction === 'next') {
                currentIndex = (currentIndex + 1) % totalCards;
            }
            showCard(currentIndex);
            updateCounter();
        });
    });
    function hideAllCards() {
        cards.forEach(card => {
            card.classList.remove('active');
        });
    }
    function hideCard(index) {
        if (cards[index]) {
            cards[index].classList.remove('active');
        }
    }
    function showCard(index) {
        if (cards[index]) {
            cards[index].classList.add('active');
        }
    }

    function updateCounter() {
        const counterElements = document.querySelectorAll('.review-card__counter');
        counterElements.forEach(element => {
            element.textContent = `${(currentIndex + 1).toString().padStart(2, '0')} / ${totalCards.toString().padStart(2, '0')}`;
        });
    }






    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();

        const isVisible = dropdownMenu.style.visibility === 'visible';
        dropdownMenu.style.visibility = isVisible ? 'hidden' : 'visible';
         dropdownMenu.style.opacity = isVisible ? '0' : '1';
    });
});