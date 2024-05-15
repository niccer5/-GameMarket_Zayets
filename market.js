//Перевірка підключення
//console.log('Перевірка чи підключено market.js')
// Визначення масиву товарів
//Визначення масиву об'єктів
let itemsArray = [
    {
    firstName: "Віталій",
    lastName: "Шатківський",
    age: 43,
    subject: "CS2",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/", },
 {
    firstName: "Наталія",
    lastName: "Венцель",
    age: 53,
    subject: "Адміністратор",
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg", 
    url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
 },
 {
    firstName: "Наталія",
    lastName: "Кучер",
    age: 45,
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
    subject:"Фізика",
    url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
 {
    firstName: "Анжела",
    lastName: "Лознюк",
    age: 45,
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
    subject:"Укр мова і укр літ",
    url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    },
 {
    firstName: "Наталія",
    lastName: "Кучер",
    age: 45,
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
    subject:"Фізика",
    url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
    {
        firstName: "Наталія",
        lastName: "Кучер",
        age: 45,
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
        subject:"Фізика",
        url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
        },
    {
            firstName: "Наталія",
            lastName: "Кучер",
            age: 45,
            photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
            subject:"Фізика",
            url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
            },
    {
                firstName: "Наталія",
                lastName: "Кучер",
                age: 45,
                photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
                subject:"Фізика",
                url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
                },   
                {
                    firstName: "Наталія",
                    lastName: "Кучер",
                    age: 45,
                    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
                    subject:"Фізика",
                    url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
                    },
                    {
                        firstName: "Наталія",
                        lastName: "Кучер",
                        age: 45,
                        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
                        subject:"Фізика",
                        url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
                        },
                    {
                            firstName: "Наталія",
                            lastName: "Кучер",
                            age: 45,
                            photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
                            subject:"Фізика",
                            url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
                            },
                    {
                                firstName: "Наталія",
                                lastName: "Кучер",
                                age: 45,
                                photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
                                subject:"Фізика",
                                url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
                                },            
                             
    

]

//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//Перевірка існування блоку
if (itemsDiv) {
    //Створення блоків по кількості елементів масиву
    itemsArray.forEach((item,index) => {
        // console.log(item)
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML +=
            `
            <div class = "item">
            <h2>Вчитель № ${index + 1} З ${itemsArray.length}</h2>
            <p>${item.firstName} ${item.lastName}</p>
            <p>Предмет: ${item.subject}</p>
            <p><img src = "${item.photo}" class = "item-image"></p>
            <p><a href = "${item.url}" target="_blank" class = "bonus
            price ">Профіль</a></p>
            </div>
      `
    })

} else {
    //Повідомлення про не знайдений блок
 console.log('Блок товарів не знайдено')

}

//Виведення едементів масиву
itemsArray.forEach((item) => {
    console.log(item)
})
//Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item, index) => {
//     console.log(index + '-й елемент:',item)
// })



// // //Виведення в консоль масиву
// // console.log (itemsArray)
// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль номерів та значень елементів масиву
// for (let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент:',itemsArray[i])
// }