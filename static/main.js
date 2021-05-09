const form = document.getElementById('upload-form')
const input = document.getElementById('id_image')
const alertBox = document.getElementById('alert-box')
const imageBox = document.getElementById('image-box')
const progress = document.getElementById('progress-box')
const cancelBox = document.getElementById('cancel-box')
const cancelBtn = document.getElementById('cancel-btn')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

input.addEventListener('change', ()=>{
    progress.classList.remove('not-visible')
    cancelBox.classList.remove('not-visible')

    const imageData = input.files[0]
    
    const fd = new FormData()
    fd.append('csrfmiddlewaretoken',csrf[0].value)
    fd.append('image',imageData)

    $.ajax({
        type:'POST',
        url: form.action,
        enctype:'multipart/form-data',
        data=fd,
        cache: false,
        processData:false,
        contentType:false,
        beforeSend: function(){

        },
        xhr: function(){

        },
        success: function(response){

        },
        error: function(error){

        }
    })
})