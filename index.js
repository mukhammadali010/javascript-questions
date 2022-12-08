// // 1  What are the possible ways to create objects in JavaScript

// // {
// //   // 1- way Object constructor
// //   const obj0 = new Object();

// //   // 2- way Object's create method

// //   const obj1 = Object.create();

// //   // 3- way  Object literal syntax
// //   const obj2 = {
// //     name: "Ali",
// //     age: 24,
// //   };

// //   // 4- way Function constructor
// //   function Func(name) {
// //     this.name = name;
// //     this.age = 25;
// //   }
// //   var obj3 = new Func("Ali");

// //   // 5- way Function constructor with prototype

// //   function Person() {}
// //   Person.prototype.name = "Ali ";
// //   let obj4 = new Person();
// //   console.log(obj2);

// //   // 6-way Class syntax

// //   class Person {
// //     constructor(name , age){
// //         this.name = name;
// //         this.age = age;
// //     }
// //   }

// //   let user = new Person("Alex" , 23)
// //   console.log(user);

// //   // 7- way Singleton pattern

// //   let object  = new (function (){
// //     this.name = "Ali";
// //   })();
// // }

// // 2 What is a prototype chain

// {
//   // Mavjud obyektlar asosida yangi obyektlar qurish uchun ishlatiadi
//   const Obj = {
//     name: "Anvar",
//     age: 20,
//     func() {
//       return "Hello";
//     },
//   };
//   console.log(Object.getPrototypeOf(Obj));
// }

// // 3 What is the difference between Call, Apply and Bind

// {
//   let obj1 = {
//     name: "Ali ",
//     age: 23,
//   };

//   let obj2 = {
//     name: "John ",
//     age: 30,
//   };

//   function User(a, b) {
//     console.log(a + " " + this.name + " " + this.age + " " + b);
//   }

//   // User.call(obj1 , "Hello" , " How are you"); // call da biz obj ni chaqiramiz va parametrlarini shundoq yozaveramiz
//   // User.call(obj2 , "Hello" , "How are you");
//   User.apply(obj1, "Hello", [" How are you"]); // apply da biz obj ni chaqiramiz va parametrlarini [] ni ichiga yozaveramiz
//   User.apply(obj2, "Hello", [" How are you"]);

//   User.bind(obj1, "Hello", [" How are you"])(); // bind bizda funcsiya qaytaradi shuning uchun uni chaqirib qo'yishimiz kerak
//   User.bind(obj1, "Hello", [" How are you"])();
// }

// 4 What is JSON and its common operations

// {
//     // JSON bu front va backend ni orasifda malumot tashuvchi vosita
//     // json dagi malumotlar oddiy matn ko'rinishida bo'ladi
//     // backend dan kelgan malumotlar string tipida keladi biz uni object ko'rinishiga olib kelishimiz kerak
//     obja = {
//         name: "Ali",
//         age: 24
//     }
//     let req = JSON.stringify(obja);
//     let res = JSON.parse(req)
//     console.log(req);
//     console.log(res);
// }

// 5 What is the purpose of the array slice method

// {
//     // bu metod tanlangan elementlari yangi arrayda qaytaradi
//     let arr = ["olma" , "anor" , "behi" , "orik"];
//     let s = arr.slice(0 , 2) // bu yerda 2 gacha oladi 2 kirmaydi
//     console.log(s);
//     console.log(arr);
// }

// 6 What is the purpose of the array splice method

// {
//     // bu metodda ham elementlarni qirqib olsak bo'ladi faqat farqi bu original arrayga tasir qiladi
//     arr = [1,2,3,4,5,6,7];
//     let s = arr.splice(0 , 2  , 'a' , 'b');
//     console.log(s);
//     console.log(arr);
// }

// 7 What is the difference between slice and splice
// {
//     //1 slice original arr ga tasir qilmaydi , splice tasir qiladi
//     //2 slice original arr ni elementlarini qaytaradi , splice o'chirilgan elementlari qaytaradi
//     //3 slice massivdan elementlarni tanlash uchun foydalaniladi  , splice esa kritish va ochirish uchun foydalaniladi

// }

// 8 How do you compare Object and Map

// {

//     // Map ham Object bilan deyarli bir xil farqi istalgan turdagi key ga ega bo'la oladi key o'rnida object kelsa ham bo'laveradi

//     let john = {name: "John"}
//     let map = new Map();
//     map.set(john , 'string tip');
//     console.log(map.get(john));
//     console.log(map.has('1'));
//     console.log(map.size);
// }

// 9 What is the difference between == and === operators

// {
//     // == faqat value larini tenglab beradi
//     // === value sini ham type larini ham tenglab beradi

//     let a = 1;
//     let b = '1'
//     console.log(a == b); // true
//     console.log(a === b); // false
// }

//10 What are lambda or arrow functions

// {
//   // bu chiziqqli funksiya va this, arguments , super yoki new.target ga ega emas

//   const func = () => {console.log("click");};
//   func()
// }

// 11
// {
//   const handler = () => console.log("This is a click handler function");
//   document.addEventListener("click", handler);
// }

//12
{
    
}