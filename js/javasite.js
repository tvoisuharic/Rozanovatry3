document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const callbackForm = document.getElementById('callbackForm');
    const productFormResult = document.getElementById('productFormResult');
    const callbackFormResult = document.getElementById('callbackFormResult');

    // Валидация и обработка формы заказа продукта или услуги
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('productName').value;
        const productQuantity = document.getElementById('productQuantity').value;
        const productEmail = document.getElementById('productEmail').value;
        const productMessage = document.getElementById('productMessage').value;

        let errors = [];

        if (!productName) {
            errors.push('Пожалуйста, введите название продукта.');
        }
        if (!productQuantity || isNaN(productQuantity) || productQuantity <= 0) {
            errors.push('Пожалуйста, введите корректное количество.');
        }
        if (!productEmail || !validateEmail(productEmail)) {
            errors.push('Пожалуйста, введите корректный email.');
        }
        if (!productMessage) {
            errors.push('Пожалуйста, введите сообщение.');
        }

        if (errors.length > 0) {
            productFormResult.innerHTML = errors.map(error => `<p class="error">${error}</p>`).join('');
        } else {
            productFormResult.innerHTML = `
                <p>Название продукта: ${productName}</p>
                <p>Количество: ${productQuantity}</p>
                <p>Email: ${productEmail}</p>
                <p>Сообщение: ${productMessage}</p>
            `;
        }
    });

    // Валидация и обработка формы заказа обратного звонка
    callbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const callbackName = document.getElementById('Name1').value;
        const callbackPhone = document.getElementById('Num').value;
        const callbackEmail = document.getElementById('e-mail').value;
        const callbackMessage = document.getElementById('top').value;

        callbackFormResult.innerHTML = `
            <p>Имя: ${callbackName}</p>
            <p>Телефон: ${callbackPhone}</p>
            <p>Email: ${callbackEmail}</p>
            <p>Сообщение: ${callbackMessage}</p>
        `;
    });

    // Функция для валидации email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Изменение стилей двух элементов на странице
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    header.style.backgroundColor = 'lightblue';
    footer.style.backgroundColor = 'lightgreen';
});