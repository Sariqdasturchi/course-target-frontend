const form = document.getElementById('sheetdb-form')
const success = document.querySelector('.success')
const danger = document.querySelector('.danger')
const fullName = document.getElementById('lastName')
const phone = document.getElementById('phone')
console.log(phone.nodeType);

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Formani avtomatik jo'natilishini oldini olish

    if (!fullName.value || !phone.value) {
        danger.style.display = 'block'
        success.style.display = 'none'
        setTimeout(() => {
            danger.style.display = 'none'
        }, 4000);
    } 
    else {
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        }).then(res => res.json())
            .then((req) => {
                success.style.display = 'block'
                danger.style.display = 'none'
                setTimeout(() => {
                    success.style.display = 'none'
                }, 6000);
                form.reset(); // Formani tozalash
            })
    }

});

