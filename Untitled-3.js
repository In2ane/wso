const div = document.querySelector('.div')
const wso = document.querySelector('.wso')
wso.addEventListener('click', function () {
    wso.classList.toggle('active')
    div.classList.toggle('active')
})

const mk2Items = document.querySelectorAll('.mk2');

mk2Items.forEach(item => {
  const audio = item.firstElementChild;
  item.addEventListener('mouseenter',  function() {
    audio.play()
  });
  item.addEventListener('mouseleave', () => audio.pause());
})
