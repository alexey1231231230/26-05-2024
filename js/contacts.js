'use strict'

const contactsButton = document.getElementById('phone')
contactsButton.onclick = showContacts
function showContacts(){
    document.body.append(shadow)
}
const shadow = document.createElement('div')
shadow.className = 'contacts-shadow'
shadow.onclick = hideContacts
function hideContacts(){
    shadow.remove()
}

const contacts = document.createElement('div')
contacts.className = 'contacts'
contacts.innerHTML = `
<div>
    <a href="tel:+375291234455" target="_blank">
        +375 (29) 123 - 44 - 55
    </a>
</div>
<div>
    <a href="viber://chat/?number=375291234455" target="_blank">
        <img src="src/images/viber.png" alt="viber иконка">
    </a>
    <a href="https://telegram.me/User_nickname" target="_blank">
        <img src="src/images/telegram.png" alt="telegram иконка">
    </a>
    <a href="https://wa.me/375291234455/" target="_blank">
        <img src="src/images/whatsApp.png" alt="whatsapp иконка">
    </a>
</div>
`
shadow.append(contacts)