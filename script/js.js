"use strict";
let Goods = [{ratingRevievs: "264 отзыва", price: {oldUan: "4 333 грн", newUan: "3 799 грн"}, name: "Motorola MOTO G4 (XT1622) Black"}, {ratingRevievs: "1355 отзывов", price: "4 999 грн", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"}, {ratingRevievs: "426 отзывов", price: "5 199 грн", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"}, {ratingRevievs: "403 отзыва", price: "4 349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"}, {ratingRevievs: "488 отзывов", price: "6 199 грн", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"}, {ratingRevievs: "198 отзывов", price: {oldUan: "3 495 грн", newUan: "2 995 грн"}, name: "Lenovo K5 (A6020a40) Silver"}, {ratingRevievs: "352 отзыва", price: {oldUan: "9 799 грн", newUan: "7 999 грн"}, name: "Apple iPhone 5s 16GB Space Gray"}, {ratingRevievs: "59 отзывов", price: "5 999 грн", name: "Nokia 5 Dual Sim Tempered Blue"}, {ratingRevievs: "119 отзывов", price: "11 999 грн", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"}, {ratingRevievs: "1106 отзывов", price: "3 999 грн", name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"}, {ratingRevievs: "380 отзывов", price: "2 199 грн", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"}, {ratingRevievs: "86 отзывов", price: {oldUan: "24 999 грн", newUan: "22 999 грн"}, name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"}, {ratingRevievs: "177 отзывов", price: "6 499 грн", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"}, {ratingRevievs: "347 отзывов", price: "4 299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"}, {ratingRevievs: "709 отзывов", price: "2 799 грн", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"}, {ratingRevievs: "527 отзывов", price: "3 999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"}, {ratingRevievs: "66 отзывов", price: "16 499 грн", name: "Apple iPhone 6s 32GB Gold"}, {ratingRevievs: "14 отзывов", price: "11 499 грн", name: "Apple iPhone 6 32GB Space Gray"}, {ratingRevievs: "70 отзывов", price: {oldUan: "7 399 грн", newUan: "5 999 грн"}, name: "Asus ZenFone 2 32GB (ZE551ML) Black"}, {ratingRevievs: "45 отзывов", price: "4 299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"}, {ratingRevievs: "376 отзывов", price: "3 899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)"}, {ratingRevievs: "111 отзывов", price: {oldUan: "9 999 грн", newUan: "7 999 грн"}, name: "Sony Xperia X Dual (F5122) White"}, {ratingRevievs: "40 отзывов", price: "2 222 грн", name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"}, {ratingRevievs: "93 отзыва", price: "18 999 грн", name: "Apple iPhone 7 32GB Black"}, {ratingRevievs: "33 отзыва", price: "16 999 грн", name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"}, {ratingRevievs: "71 отзыв", price: {oldUan: "2 399 грн", newUan: "1 999 грн"}, name: "LG K5 X220ds Gold"}, {ratingRevievs: "39 отзывов", price: "2 995 грн", name: "Lenovo C2 Power (K10a40) Black"}, {ratingRevievs: "156 отзывов", price: "2 599 грн", name: "Nous NS 5006 Gold"}, {ratingRevievs: "40 отзывов", price: "19 689 грн", name: "LG G6 Mystic White"}, {ratingRevievs: "24 отзыва", price: "5 995 грн", name: "Motorola MOTO G5 (XT1676) Grey"}, {ratingRevievs: "7 отзывов", price: {oldUan: "10 999 грн", newUan: "9 999 грн"}, name: "HTC One X10 Dual Sim Silver"}, {ratingRevievs: "18 отзывов", price: {oldUan: "5 999 грн", newUan: "4 999 грн"}, name: "Sony Xperia L1 Dual Black"}];

function SortPrice(first, second) {
    let fPrice;
    let sPrice;
        if (first.price.newUan == undefined)
        fPrice = parseInt(first.price.replace(/ /g, ''));
        else
        fPrice = parseInt(first.price.newUan.replace(/ /g, ''));
        if (second.price.newUan == undefined)
        sPrice = parseInt(second.price.replace(/ /g, ''));
        else
        sPrice = parseInt(second.price.newUan.replace(/ /g, ''));
        return fPrice - sPrice;
}
Goods.sort(SortPrice);

var ContainerForPhones = document.createElement('div');
for (let i = 0; i < Goods.length; i++) {

    let PhoneBlock = document.createElement('div');
    let PhoneImg = document.createElement('img');
    let PhoneName = document.createElement('div');
    let PhonePrice = document.createElement('div');
    let PhonePriceOld = document.createElement('div');
    let PhonePriceNew = document.createElement('div');
    let PhoneReview = document.createElement('div');

    PhoneReview.className = "PhoneReview";
    PhoneName.className = "PhoneName";
    PhonePriceOld.className = "PhonePriceOld";
    PhonePriceNew.className = "PhonePriceNew";
    PhoneImg.className = "PhoneImg";
    PhoneBlock.className = "PhoneBlock";
    ContainerForPhones.className = "flex-container";

    PhoneName.innerText = Goods[i].name;
    PhoneImg.src = "images/tel.png";
    PhoneReview.innerText = Goods[i].ratingRevievs;

    PhoneBlock.append(PhoneName);

    PhoneBlock.append(PhoneImg);
    if (Object.keys(Goods[i].price).length == 2) {
        PhonePriceNew.innerText = Goods[i].price.newUan;
        PhonePriceOld.innerText = Goods[i].price.oldUan;
        PhoneBlock.appendChild(PhonePriceOld);
        PhoneBlock.appendChild(PhonePriceNew);

    } else {
        PhonePrice.innerText = Goods[i].price;
        PhoneBlock.appendChild(PhonePrice);
    }
    PhoneBlock.appendChild(PhoneReview);
    ContainerForPhones.appendChild(PhoneBlock);
    if (i == Goods.length - 1) {
        document.body.appendChild(ContainerForPhones);
    }


}