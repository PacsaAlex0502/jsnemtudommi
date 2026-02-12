// //Tetszőleges betűvel tetszőleges (1-10) sort töltsünk fel a képernyőn

// let sorokSzama = 6
// let betu = "*"
// for(let i = 0; i < sorokSzama; i++) {
//     console.log(betu.repeat(i))
// }


// for (let i = 99; i > 0; i--) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }




// const n = 100; // Itt add meg, meddig szeretnéd az összeget
// const osszeg = (n * (n + 1)) / 2;

// console.log(`Az első ${n} természetes szám összege: ${osszeg}`);

// let N2 = 6
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${N2} = ${i*N2}`)
// }

// let dobasszam = 0
// let dobasokosszege = 0

// while(true) {
//     let dobas = Math.floor(Math.random() * 6) + 1
//     console.log(dobas);

//     dobasszam++
//     dobasokosszege += dobas
//     if (dobas === 6) {
//         break;
//     }
// }

// let dobasokatlaga = dobasokosszege / dobasszam
// console.log(`A dobások száma: ${dobasszam}`);
// console.log(`A dobások összege: ${dobasokosszege}`);
// console.log(`A dobások átlaga: ${dobasokatlaga}`);

// let dobasszam = 0
// let dobasokosszege = 0
// let hatosdobasokszama = 0
// while(true) {
//     let dobas = Math.floor(Math.random() * 6) + 1
//     console.log(dobas);
//     dobasszam++
//     dobasokosszege += dobas
//     if (dobas === 6) {
//         hatosdobasokszama++
//     }
//     if (hatosdobasokszama === 3) {
//         break;
//     }
// }
// let dobasokatlaga = dobasokosszege / dobasszam

// console.log(`A dobások száma: ${dobasszam}`);
// console.log(`A dobások összege: ${dobasokosszege}`);
// console.log(`A dobások átlaga: ${dobasokatlaga}`);

// Kérjen be a program számokat mindaddig, amíg 0-át nem írunk be! Ezután írja ki, hogy
// páros szám volt a beírt számok között!

// let voltparos = false;
// while (true) {
//     let szam = parseInt(prompt("Adj meg egy számot (0-át írj be a kilépéshez):"));
//     if (szam === 0) {
//         break;
//     }
//     if (szam % 2 === 0) {
//         voltparos = true;
//     }
// }
// if (voltparos) {
//     console.log("Volt páros szám a beírt számok között.");
// } else {
//     console.log("Nem volt páros szám a beírt számok között.");
// }



