"use strict";

// параметри по дефолту

const bookings = [];

const makeBooking = function (flightNum, passengersNum = 1, prise = 99) {
  // ми можемо створювати об'єкти з такими властивостями ,
  // в котрі будуть переданні значення із параметрів функції

  const booking = {
    flightNum,
    passengersNum,
    prise,
  };
  console.log(booking);
  bookings.push(booking);
};

makeBooking("QE123");

// Passing arguments. Values vs Reference

const flightNum = "BHG67";

const passenger1145 = {
  firstName: "Jack",
  lastName: "Brown",
  passport: "874jdf",
};

const checkIn = function (Flight, passenger) {
  // переменная  Flight которая в функции єто совершенно отдельная переменная
  // и коли ми змінюємо її значення, то це ніяк не змінює зовнішню
  Flight = "bhG67";
  passenger.firstName = passenger.firstName.toLowerCase();
  passenger.lastName = passenger.lastName.toLowerCase();

  if (passenger.passport === "874jdf") {
    console.log("welcome");
  } else {
    console.log("Incorrect passport");
  }
};

checkIn(flightNum, passenger1145);
console.log(flightNum);
console.log(passenger1145);
