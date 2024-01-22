let showPicBtn = $('.img');
let hideImageBtn = $('#hideImg');

showPicBtn.on('click', () => {
    $('.profileImg').show();
});

hideImageBtn.on('click', () => {
    $('.profileImg').hide();
});
