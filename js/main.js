        window.onload = function () {
            var menuToggler = document.getElementById("menu-toggler");
            var main = document.querySelector('.hidden-menu');
            menuToggler.addEventListener('click', function (e) {
                main.classList.toggle('hidden-menu');
                e.stopPropagation();
            });
            main.addEventListener('click', function() {
                main.classList.remove('hidden-menu');
            });
        };