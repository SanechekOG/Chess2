function openTabIndex() {
    window.open('index.html', '_blank');
}
function openTabPlay() {
    window.open('Play_chess.html', '_blank');
}
function openTabLearn() {
    window.open('Learn_chess.html', '_blank');
}
function openTabHistory() {
    window.open('History_of_chess.html', '_blank');
}
function openTabNews() {
    window.open('News_of_chess.html', '_blank');
}
function openTabChat() {
    window.open(href ='https://vk.me/join/ZROR67exYmlpGquBjG2luuFEDaD6KzLI6_g=', '_blank');
}



document.addEventListener('DOMContentLoaded', function() {
    const imgContainers = document.querySelectorAll('.image');

    function checkVisibility() {
        imgContainers.forEach(imgContainer => {
            if (isElementVisible(imgContainer)) {
                imgContainer.classList.add('img-visible');
            }
        });
    }

    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    checkVisibility();
});



