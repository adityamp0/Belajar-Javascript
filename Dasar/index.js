// // const name = "John Doe";
// // const value = 42;
// // const template = `Name : ${name}, lulus dengan nilai : ${value > 60 ? "A" : "B"}`;

// // console.info(template);

// // let multiLineString = `Ini adalah contoh string
// // yang ditulis dalam
// // beberapa baris menggunakan
// // template literals.`;

// // document.writeln("<pre>");
// // document.writeln(multiLineString);
// // document.writeln("</pre>");

// // const value1 = 10;
// // const value2 = 20;
// // const sum = value1 + value2;

// // document.writeln(`<p>Hasil penjumlahan ${value1} + ${value2} = ${sum}</p>`);

// // document.writeln(`<p>${parseInt("1.1")}</p>`);
// // document.writeln(`<p>${parseFloat("1.1")}</p>`);
// // document.writeln(`<p>${Number("1.1")}</p>`);

// const value1 = Number("salah");
// const value2 = 20;
// const sum = value1 + value2;

// document.writeln(`<p>${value1} + ${value2} = ${sum}</p>`);

// let arrayKosong = [];

// let arrayNames = ["Andi", "Budi", "Caca"];

// const names = [];
// names.push("Andi");
// names.push("Budi", "Caca");

// console.table(names);

// names[0] = "Siti";

// console.table(names);
// console.info(`Panjang array names : ${names.length}`);

// const orang = {};

// orang["name"] = "Andi";
// orang["age"] = 30;
// orang["isMarried"] = false;

// delete orang["isMarried"];
// console.table(orang);

// const orang2 = {
//   name: "Budi",
//   age: 25,
//   isMarried: true,
// };

// console.table(orang2);
// console.info(`Nama : ${orang2.name}`);
// console.info(`Umur : ${orang2.age}`);
// console.info(`Status Menikah : ${orang2.isMarried}`);

// const examValues = [70, 85, 90, 60, 75];

// if (examValues > 80) {
//   console.info("Lulus dengan predikat A");
// } else if (examValues > 70) {
//   console.info("Lulus dengan predikat B");
// } else if (examValues > 60) {
//   console.info("Lulus dengan predikat C");
// } else {
//   console.info("Tidak lulus");
// }

// // alert("Selamat datang di situs kami!");

// // const name = prompt("Masukkan nama Anda:");
// // alert(`Hello, ${name}! Senang bertemu dengan Anda.`);

// const masuk = confirm("Apakah Anda ingin melanjutkan?");
// if (masuk) {
//     const name = prompt("Masukkan nama Anda:");
//     alert(`Hello, ${name}! Senang bertemu dengan Anda.`);
// } else {
//     alert("Terima kasih! Sampai jumpa lagi.");
// }

// const name2 = ["Ali", "Budi", "Citra"];

// if (name2[2] === undefined) {
//     alert("Variabel 'name2' belum didefinisikan.");
// } else {
//     alert(`Nama Anda adalah ${name2[2]}.`);
// }

// let person = {};

// if (person.name2 === undefined) {
//     alert("Hello, Guest!");
// } else {
//     alert(`Hello, ${person.name2}!`);
// }

let firstName = null;
if (firstName === undefined) {
    alert("Hello, Undefined");
} else if (firstName === null) {
    alert("Hello, Null");
} else {
    alert(`Hello, ${firstName}!`);
}

switch (nilai) {
    case "A":
        document.writeln("<p>Nilai Anda sangat baik.</p>");
        break;
    case "B":
    case "C":
        document.writeln("<p>Nilai Anda cukup baik.</p>");
        break;
    case "D":
        document.writeln("<p>Nilai Anda kurang.</p>");
        break;
    default:
        document.writeln("<p>Nilai tidak valid.</p>");
}

let data = 100;

if (typeof data === "number") {
    alert("Data adalah tipe number.");
} else if (typeof data === "string") {
    alert("Data adalah tipe string.");
} else if (typeof data === "boolean") {
    alert("Data adalah tipe boolean.");
} else if (typeof data === "object") {
    alert("Data adalah tipe object.");
} else {
    alert("Tipe data tidak dikenali.");
}   

const person = {
    firstName: "Andi",
    lastName: "Saputra",
}

const result = "firstName" in person;
document.writeln(`<p>Apakah properti 'firstName' ada dalam objek person? ${result}</p>`);