const elDarkMode = document.querySelector('.dark-mode-button');

elDarkMode.addEventListener('click', function(){
document.body.classList.add('dark-mode');
});
elDarkMode.addEventListener('doubleclick', function(){
document.body.classList.remove('dark-mode');
});