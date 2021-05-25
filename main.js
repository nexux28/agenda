const _name = document.getElementById('name')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const btnSave = document.getElementById('btnAdd')

const ddbb = window.localStorage



btnSave.onclick = () => {
    let newItem = {
        id: Math.random(1.5),
        name: _name.value,
        phone: phone.value,
        address: address.value
    }
    ddbb.setItem(newItem.id,JSON.stringify(newItem))
    window.location.href = '/'
}

const createNode = contact => {
    const div_node = document.createElement('div')
    const name_node = document.createElement('h3')
    const phone_node = document.createElement('p')
    const address_node = document.createElement('p')
    const icon_node = document.createElement('span')
    const list = document.querySelector('.list')

    div_node.classList.add('file')
    icon_node.classList.add('material-icons', 'icon')

    name_node.innerHTML = contact.name
    phone_node.innerHTML = contact.phone
    address_node.innerHTML = contact.address
    icon_node.innerHTML = 'delete'

    div_node.appendChild(name_node)
    div_node.appendChild(phone_node)
    div_node.appendChild(address_node)
    div_node.appendChild(icon_node)

    list.appendChild(div_node)

    icon_node.onclick = () => {
        ddbb.removeItem(contact.id)
        window.location.href = '/'
    }
}

const loadList = () => {
    let keyContacts = Object.keys(ddbb)

    for (const keyContact of keyContacts) {
        createNode( JSON.parse(ddbb.getItem( keyContact)))
    }
}

loadList ()
