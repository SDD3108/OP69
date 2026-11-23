// const btn = document.querySelector("#btn");
// btn.addEventListener("click",()=>{
//     console.log("test");
//     // alert("test");
// })

// const title = document.querySelector("#title")
// const changeBtn = document.querySelector("#but")
// let counter = 0;
// const old = "Welcome to ";
// changeBtn.addEventListener("click",()=>{
//     counter++;
//     console.log(counter);
//     if(counter > 1){
//         counter -= 2;
//         title.textContent = old;
//         return;
//     }
//     title.textContent += "Hell";
// })

// const changeColor = document.querySelector("#btnColor");
// let count = 0;
// changeColor.addEventListener("click",()=>{
//     count++;
//     if(count > 1){
//         count -= 2;
//         title.style.backgroundColor = "white";
//         return;
//     }
//     title.style.backgroundColor = "lightblue";
// });

// const clicker = document.querySelector("#clicker");
// const counterr = document.querySelector("#counter");
// let counter1 = 1000;
// clicker.addEventListener("click",()=>{
//     counter1++;
//     counterr.textContent = `Clicks: ${counter1}`;
    
// })

// const inputName = document.querySelector("#name");
// const textResult = document.querySelector("#result");
// const textLength = document.querySelector("#length");

// inputName.addEventListener("input",()=>{
//     textResult.textContent = `Hello, ${inputName.value}`;
//     textLength.textContent = `length: ${inputName.value.length}`;
// })

// const inputUsername = document.querySelector("#username");
// const btnSent = document.querySelector("#sent");
// const textResult1 = document.querySelector("#resultat");
// const form = document.querySelector("#form");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     textResult1.textContent = `hello, ${inputUsername.value}`
// })

// const btns = document.querySelectorAll("button");

// btns.forEach(element => {
//     element.addEventListener("click",(event)=>{
//         alert(event.target.id);
//     })
// });

// const textMouse = document.querySelector("#text");
// textMouse.addEventListener("mouseover",()=>{
//     textMouse.style.color = "red";
// })
// textMouse.addEventListener("mouseout",()=>{
//     textMouse.style.color = "black";
// })

// document.addEventListener("keydown",(event)=>{
//     alert(`нажата клавиша ${event.key}`)
//     if(event.key == "w"){
//         alert("даблю даблю");
//     }
// })

// 2.
// const form = document.querySelector("#form");
// const inputName = document.querySelector("#name");
// const inputAge = document.querySelector("#age");
// const textResult = document.querySelector("#result");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     if(inputName.value.trim() !== "" && inputAge.value){
//         textResult.textContent = `Hello, ${inputName.value}! you're ${inputAge.value} y.o.`;
//     }
// })

// 3.
// Требования:
// 1. Создать заголовок «Заказ билетов».
// 2. Добавить поле для ввода имени.
// 3. Добавить поле для ввода электронной почты.
// 4. Добавить выпадающий список с выбором мероприятия:
// Концерт — 5000 тг.
// Выставка — 3000 тг.
// Кино — 2500 тг.
// 5. Добавить поле для указания количества билетов.
// 6. Добавить кнопку «Рассчитать стоимость».
// 7. При отправке формы:
// Проверить, заполнены ли все поля.
// Проверить корректность количества билетов (от 1 до 10).
// Рассчитать общую стоимость.
// Вывести информацию о заказе на странице.
// 8. После успешного оформления заказа очистить поля формы.
// 9. Не допускать стандартную перезагрузку страницы при отправке формы.

// const form = document.querySelector("#form")
// const inputName = document.querySelector("#name");
// const inputAge = document.querySelector("#age");
// const list = document.querySelector("#list");

// const array = [
//     {
//         id:1,
//         name: "Концерт",
//         price: 5000,
//     },
//     {
//         id:2,
//         name:"Выставка",
//         price: 3000,
//     },
//     {
//         id:3,
//         name:"Кино",
//         price: 2500,
//     }
// ]
// array.forEach(element => {
//     list.innerHTML += `
//     <li id="li-${element.id}">${element.name} - ${element.price}</li>
//     `
// });
// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     const name = inputName.value.trim();
//     const email = inputEmail.value.trim();
//     const count = Number(inputCount.value);
//     const selected = array.find(element=>element.id===Number(list.value));

//     if(name==="" || email==="" || list.value==="" || inputCount.value===""){
//         result.textContent = "Заполните все поля!"
//         return;
//     }
//     if(!Number.isInteger(count) || count<1 || count>10){
//         result.textContent = "Введите количество билетов от 1 до 10!"
//         return;
//     }
//     if(!inputEmail.validity.valid){
//         result.textContent = "Введите корректный email!"
//         return;
//     }
//     if(!selected){
//         result.textContent = "Выберите мероприятие!"
//         return;
//     }

//     const total = selected.price*count;
//     result.textContent = `Order confirmed!\nИмя: ${name}\nEmail: ${email}\nМероприятие: ${selected.name}\nБилетов: ${count}\nTotal: ${total} тг`
//     form.reset()
// })
