const tickets = [
    {title: 'Проектор не включается ', room: '203 ', category: 'Оборудование ', done:  false},
    {title: 'Окно в аудитории не открывается ', room: '106 ', category: 'Аудитория ', done:  false},
    {title: 'В коридоре не горит свет ', room: 'Коридор, 2-й этаж ', category: 'Другое ', done:  true},
]

const TicketsList = document.getElementById('TicketsList')
const OpenTickets = document.getElementById('OpenTickets')
const TitleName = document.getElementById('TitleName')
const RoomNumber = document.getElementById('RoomNumber')
const CategoryName = document.getElementById('CategoryName')
const ButtonPushHelp = document.querySelector('#ButtonPushHelp')

ButtonPushHelp.addEventListener('click', () => {
    const nametitle = TitleName.value
    const roomnum = RoomNumber.value
    const categoryname = CategoryName.value
    if (!nametitle || !roomnum) {
        return
    } 
    const newticket = {title: `${nametitle} `, room: `${roomnum} `, category: `${categoryname} `, done: false}
    tickets.push(newticket)
    renderTickets()

    TitleName.value = ''
    RoomNumber.value = ''
})

function renderTickets() {
    TicketsList.innerHTML = ' '

    tickets.forEach((tickets) => {
        const item = document.createElement('li')
        const title = document.createElement('span')
        title.textContent = tickets.title

        const room = document.createElement('span')
        room.textContent = tickets.room

        const category = document.createElement('span')
        category.textContent = tickets.category

        const done = document.createElement('span')
        if (done === true) {
            tickets.done = 'Выполнена'
        }
        else if (done === false) {
            tickets.done = 'Открыта'
        }
        done.textContent = tickets.done

        TicketsList.append(item)
        item.append(title, room, category, done)
        
    });
}
renderTickets();