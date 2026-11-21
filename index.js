const tickets = [
    {title: 'Проектор не включается ', room: '203 ', category: 'Оборудование ', done:  false},
    {title: 'Проектор не включается ', room: '106 ', category: 'Аудитория ', done:  false},
    {title: 'В коридоре не горит свет ', room: 'Коридор, 2-й этаж ', category: 'Другое ', done:  true},
]

const TicketsList = document.getElementById('TicketsList')
const OpenTickets = document.getElementById('OpenTickets')
const TitleName = document.getElementById('TitleName')
const RoomNumber = document.getElementById('RoomNumber')
const CategoryName = document.getElementById('CategoryName')
const ButtonPushHelp = document.querySelector('#ButtonPushHelp')
