// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(data) {
    let data = {client: {name, phone}, order: {address, sum}, goods: []};
    let address = street + ' ,' + house + ' ,' + entrance + ' ,' + floor + ' ,' + flat;
    let goods = [title, count]; 
    let jsonData = JSON.stringify({data});
}
    return jsonData;

    let name = 'Иван';
    let phone = '+7(987)65-43-210';
    let street = 'ул. Ленина';
    let house = 'дом 2';
    let entrance = '4 подъезд';
    let floor = '5 этаж';
    let flat = 'кв 53';
    let title = 'Пицца';
    let count = 2;
    console.log(sendRequest());

