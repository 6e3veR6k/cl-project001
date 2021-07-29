'use strict';

const uploadButton = document.querySelector('.button');
const buttonText = document.querySelector('.btn-text');

const newText = `<i class='bx bx-loader-circle'></i>
      <span class="btn-text">Uploading...</span>`;

const defaultText = `<i class="bx bx-cloud-upload"></i>
      <span class="btn-text">Upload File</span>`;

uploadButton.addEventListener('click', e => {
    const button = e.currentTarget;
    button.preventDefault;
    button.classList.add('progress');
    button.textContent = '';
    button.insertAdjacentHTML('afterbegin', newText);

    setTimeout(() => {
        button.classList.remove('progress');
        button.textContent = '';
        button.insertAdjacentHTML('afterbegin', defaultText);
    }, 6000);
});

console.log({uploadButton, buttonText});
