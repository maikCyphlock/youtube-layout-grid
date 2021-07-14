const input_btn = document.querySelector('#input-comment');
const btns_comment = document.querySelector('#btns-comment');



input_btn.addEventListener('focusout', function () {
    btns_comment.classList.add('hidden')
  
})

input_btn.addEventListener('click', function () {
    btns_comment.classList.remove('hidden')
  
})


