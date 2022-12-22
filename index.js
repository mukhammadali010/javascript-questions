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

// {
//     // 12 What is a first order function

//     // Birinchi darajali funktsiya boshqa funktsiyani argument sifatida qabul qilmaydigan va funktsiyani qaytarish qiymati sifatida qaytarmaydigan funktsiyadir.
// const func = ()=> {console.log("I am a first order function!");}
// func();
// }

// {
//     // 13 What is a higher order function bu shunchaki arrow function argument ola oladi funcsiya qaytara oladi
//     const firstOrderFunc = ()=>{
//         console.log("I am high order function !");
//     }

//     const highOrderFunc = (returnfirstOrderFunc)=> returnfirstOrderFunc();
//     highOrderFunc(firstOrderFunc);

// }
// {
//     //14  What is a unary function

//     // unary funksiya bu faqat bitta argument oladi xolos

//     const unaryFunc = (a) =>{
//         console.log(a+10);
//     }
//     unaryFunc(20);
// }

// {
//     // 15 What is the currying function
//     // currying function bu ko'p argumentlari qalub qiluvchi funcsiya hisoblanadi
//     // const curryFunc = (a,b,c)=>{
//     //     console.log(a+b+c);
//     // }
//     // curryFunc(1,2,3);

// }

// {
//     // 16 What is a pure function
//    // Pure function bu funksiya ichidagi qiymatlarga tashqi tomondan tasir ko'rsata olmaymiz

// function pureFunc(name) {
//    return `hello ${name}`
//}
// pureFunc("Akbar");
// bu xolatda ismni berganimizda biz hello biz bergan ism chiqishini oldindan bilamiz hello sozini tashiqi tomondan ozgartirmadik

// }

// {
//     //17 18 What is the purpose of the let keyword , What is the difference between let and var

//     function varTest() {
//         var x = 1;
//         {
//           var x = 2;  // same variable!
//           console.log(x);  // 2
//         }
//         console.log(x);  // 2
//       }

//       function letTest() {
//         let x = 1;
//         {
//           let x = 2;  // different variable
//           console.log(x);  // 2
//         }
//         console.log(x);  // 1
//       }
// }

// {
//   // 19 What is the reason to choose the name let as a keyword

//   // chunki u ananaviy
//   let a = 10;
// }

// 20 How do you redeclare variables in switch block without an error

// buning uchun {} ichida yozish kerak
// let counter = 1;
// switch (x) {
//   case 1:
//     {let name;
//     break;}

//   case 2:
//     {let name;
//     break;}
//   default:
//     break;
// }

// {
//     // 21 What is the Temporal Dead Zone
//     // var orqali o'zgaruvchi elon qilganimizda elon qilishdan oldin bu o'garuvchini ishlatsak shu oraliq teporal dead zone deyiladi ... let va const da ReferenceError chiqadi
//     function func(){
//         console.log(a);

//         var a = 10;
//     }
//     func()
// }

// {
//     // 22 What is IIFE(Immediately Invoked Function Expression) darhol chaqiriladigan funksiya ifodasi deb tarjima qilinadi
// (function func(){
//     return "Hello"
// })();
// (function () {
//     var message = 'IIFE';
//     console.log(message);
//   })();
// }

// {
//     // 22 	How do you decode or encode a URL in JavaScript?
//     // encodeURL() funksiyasi URL manzilini parametr sifatida oladi va string qaytaradi
//     // let  encode_URI  = encodeURL(url manzil);
//     // ler decode_URI = decodeURL(encode_URI)
// }

// {
//     // 23 What is memoization
// }
// const memoizAddition = () => {
//     let cache = {};
//     console.log(cache);
//     return (value) => {
//       if (value in cache) {
//         console.log("Fetching from cache");
//         return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//       } else {
//         console.log("Calculating result");
//         let result = value + 30;
//         cache[value] = result;
//         return result;
//       }
//     };
//   };
//   // returned function from memoizAddition
//   const addition = memoizAddition();
//   console.log(addition(20)); //output: 40 calculated
//   console.log(addition(20)); //output: 40 cached

// {
// //24 What is Hoisting
// // hoistingga qisqacha misol bu faqat var kalit so'zi bilan ishlaydi va function declarations and classes larda ham ishlaydi arrow function daishlamaydi 
//   ("use strict");
//   a = 10;
//   console.log(a);
//   let a;


// message("Good morning"); //Good morning

// function message(name) {
//   console.log(name);
// }

// }


// {
//     //25 What are classes in ES6
//     // class lar ES6 versiyadan boshlab kirib kelgan (OOP)
//     class Bike {
//         constructor(color , price){
//             this.color = color;
//             this.price = price;
//         }
//         getDetails(){
//            return "Bike is " + this.price +" pound" + " and " + "it's color is " + this.color

//         }
//     }   

//     const bikeInfo = new Bike("red" , "1300 $")
//    console.log( bikeInfo.getDetails());

// }

// {
//     //26 What are closures
//     // Quyidagi funksiyada Welcome funksiyasini ichidagi greetingInfo funksiyasi welcome ning name parametridan foydalanmoqda mana shu  closure deyiladi yani o'zini o'rab turgan funksiyani parametrlaridan foydalana oladi ichida turgan funksiya

//     function Welcome(name) {
//         var greetingInfo = function (message) {
//           console.log(message + " " + name);
//         };
//         return greetingInfo;
//       }
//       var myFunction = Welcome("John");
//       myFunction("Welcome "); //Output: Welcome John
//       myFunction("Hello Mr."); //output: Hello Mr.John
// }

// {
//     // 27 Modules 
//     // Modullar nima
// // Modullar mustaqil, qayta foydalanish mumkin bo'lgan kodning kichik birliklariga ishora qiladi va ko'plab JavaScript dizayn naqshlarining asosi bo'lib xizmat qiladi. JavaScript modullarining aksariyati ob'ektni, funktsiyani yoki konstruktorni eksport qiladi
// }

// {
//     //28 Why do you need modules
//     // 1) Maintainability
//     // 2) Reusability
//     // 3) Namespacing
// }

// {
//     //30 What is scope in javascript
//     // bu ish vaqtida kodingizning ma'lum bir qismidagi o'zgaruvchilar, funktsiyalar va ob'ektlardan foydalanish imkoniyati. Boshqacha qilib aytganda, qamrov sizning kodingiz sohalarida o'zgaruvchilar va boshqa resurslarning ko'rinishini aniqlaydi.

// }

// {
//     //31 What is a service worker
//     // Xizmat xodimi asosan fonda ishlaydigan skript (JavaScript fayli), veb-sahifadan ajratilgan va veb-sahifa yoki foydalanuvchining oʻzaro taʼsirini talab qilmaydigan xususiyatlarni taqdim etadi. Xizmat xodimlarining asosiy xususiyatlaridan ba'zilari - bu boy oflayn tajribalar (oflayn birinchi veb-ilovalarni ishlab chiqish), davriy fon sinxronizatsiyasi, push-bildirishnomalar, tarmoq so'rovlarini ushlab turish va boshqarish va javoblar keshini dasturiy ravishda boshqarish.
// }

// {
//     //32 How do you manipulate DOM using a service worker
//     // Xizmat xodimi DOMga bevosita kira olmaydi. Lekin u postMessage interfeysi orqali yuborilgan xabarlarga javob berish orqali o‘zi boshqaradigan sahifalar bilan bog‘lana oladi va bu sahifalar DOMni boshqarishi mumkin.
// }

// {
//     //37 What is a cookie 
//     // cookie bu bizning brauzerimizdagi cookie  dagi key va value juftligi hisoblanadi
// }

//39 Why do you need a Cookie
// cookie lar bizga userlar haqidagi axborotlarni eslab qolishda kerak boladi misol uchun username larni eslab qoladi 
// ikkita qadamni o'z ichiga oladi 1) qachonki user web page ga kirganda uni profili cookie ga joylanadi , 2) keyingi marta web page ga kirganda uning profilini cookie eslab qoladi 

// 40 How do you delete a cookie
// Yaroqlilik muddatini o'tgan sana sifatida belgilash orqali cookie faylini o'chirishingiz mumkin
// document.cookie =
//   "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";

//41 What are the differences between cookie, local storage and session storage
/// cookie - client-side va server-side ga boglana oladi local va session storage lar esa faqat client-side da ishlaydi
// lifetime : cookie sozlangan muddati tugaydi , local storage -> ochirib yuborilguncha ,  session storage -> yangi tab ochilguncha 
// SSl : cookie -> supported ,  local va session -> not supported
// maximum data size : cookie -> 4 KB , local va session -> 5 MB

// 43 How do you access web storage
// localstorage.setItem("key" , "value") -> malumotni joylash 
// localstorage.getItem("key" , "value") - > maulotni olish

// 44 What are the methods available on session storage
// Save data to sessionStorage
// sessionStorage.setItem("key", "value");

// // Get saved data from sessionStorage
// let data = sessionStorage.getItem("key");

// // Remove saved data from sessionStorage
// sessionStorage.removeItem("key");

// // Remove all saved data from sessionStorage
// sessionStorage.clear();

// 45 What is a storage event and its event handler ?

// 46 Why do you need web storage
// qisqa va muhim malumotlarini  saqlash uchun ishlatiladi va bu malumotlari server ga o'tkazmaydi
// 47 How do you check web storage browser support
// if (typeof Storage !== "undefined") {
//     // Code for localStorage/sessionStorage.
//   } else {
//     // Sorry! No Web Storage support..
//   }