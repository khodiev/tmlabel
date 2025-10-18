document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    
    burgerMenu.addEventListener('click', function() {
        // Переключаем классы для анимации бургера и открытия меню
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Блокируем прокрутку body когда меню открыто
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрываем меню при клике на ссылку
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});