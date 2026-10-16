document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const inputs = form.querySelectorAll('.formInputCustom');

    const notificationOverlay = document.getElementById('notificationOverlay');
    const notificationCloseBtn = document.getElementById('notificationCloseBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.remove('inputError');
            if (input.value.trim() === '') {
                isFormValid = false;
                input.classList.add('inputError');
            }
        });

        if (isFormValid) {
            form.reset();
            notificationOverlay.classList.add('active');
        } else {
            console.log('Пожалуйста, заполните все поля');
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.remove('inputError');
            }
        });
    });

    notificationCloseBtn.addEventListener('click', () => {
        notificationOverlay.classList.remove('active');
    });

    notificationOverlay.addEventListener('click', (e) => {
        if (e.target === notificationOverlay) {
            notificationOverlay.classList.remove('active');
        }
    });
});