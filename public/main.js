
const topMenu = document.getElementById('bin-top-menu');
const toggleTopMenuIcon = document.getElementById('bin-toggle-top-menu-icon');

document.addEventListener('click',(e) => {
    if(toggleTopMenuIcon.contains(e.target)){
        // Click to Toggle menu icon
        topMenu.classList.toggle('bin-topmenu-expanded');
        topMenu.classList.toggle('hidden');
    }
    else{
        // Click outside from Toggle top menu icon
        if(topMenu.classList.contains('bin-topmenu-expanded')){
            topMenu.classList.remove('bin-topmenu-expanded');
            topMenu.classList.add('hidden');
        }
    }
})