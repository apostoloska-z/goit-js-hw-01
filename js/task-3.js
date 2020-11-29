const ADMIN_PASSWORD = 'jqueryismyjam';
let message; 
const pass = prompt ('Введите пароль');


if (pass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (pass === null) {
    message = 'Отменено пользователем!';
} else {message='Доступ запрещен, неверный пароль!'}

alert (message);
