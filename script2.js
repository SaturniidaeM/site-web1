document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay1 = document.getElementById('modalOverlay1');
    const modalOverlay2 = document.getElementById('modalOverlay2');
    const notificationOverlay = document.getElementById('notificationOverlay');
    const openModalButtons = document.querySelectorAll('.openModalBtn');

    const modalBackBtn1 = document.getElementById('modalBackBtn1');
    const modalNextBtn1 = document.getElementById('modalNextBtn1');
    const modalBackBtn2 = document.getElementById('modalBackBtn2');
    const modalNextBtn2 = document.getElementById('modalNextBtn2');
    const notificationCloseBtn = document.getElementById('notificationCloseBtn');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            resetModal1();
            modalOverlay1.classList.add('active');
        });
    });

    function resetModal1() {
        const firstRadio = document.querySelector('#modalForm1 input[value="yes"]');
        if (firstRadio) firstRadio.checked = true;
        const form2 = document.getElementById('modalForm2');
        if (form2) form2.reset();
    }

    modalBackBtn1.addEventListener('click', () => modalOverlay1.classList.remove('active'));

    modalNextBtn1.addEventListener('click', () => {
        modalOverlay1.classList.remove('active');
        modalOverlay2.classList.add('active');
    });

    modalBackBtn2.addEventListener('click', () => {
        modalOverlay2.classList.remove('active');
        modalOverlay1.classList.add('active');
    });

    modalNextBtn2.addEventListener('click', () => {
        const form = document.getElementById('modalForm2');

        if (form.checkValidity()) {
            const formData = new FormData(form);
            const name = formData.get('name');
            const phone = formData.get('phone');

            console.log('Заявка отправлена!');
            console.log('Имя:', name);
            console.log('Телефон:', phone);

            modalOverlay2.classList.remove('active');
            notificationOverlay.classList.add('active');

            form.reset();
        } else {
            form.reportValidity();
        }
    });

    notificationCloseBtn.addEventListener('click', () => {
        notificationOverlay.classList.remove('active');
    });

    [modalOverlay1, modalOverlay2, notificationOverlay].forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });
});