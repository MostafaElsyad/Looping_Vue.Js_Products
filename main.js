const {createApp} = Vue;

createApp({
    data() {
        return {
            products: [
                {img: "img/airpods.jpg", heading: "airpods", price: 30, id: 1, colors: ["red", "yellow", "green", "blue", "black", "white",],},
                {img: "img/hp.jpg", heading: "hp", price: 300, id: 2, colors: ["red", "yellow", "green", "blue", "black", "white",],},
                {img: "img/infinix.jpg", heading: "infinix phone", price: 60, id: 3, colors: ["red", "yellow", "green", "blue", "black", "white",],},
                {img: "img/NinjaH2R.jpg", heading: "Ninja H2R motorbike", price: 25000, id: 4, colors: ["red", "yellow", "green", "blue", "black", "white",],},
                {img: "img/PistolGun.jpg", heading: "PistolGun", price: 90, id: 5, colors: ["red", "yellow", "green", "blue", "black", "white",],},
                {img: "img/RangeRover.jpg", heading: "RangeRover car", price: 150000, id: 6, colors: ["red", "yellow", "green", "blue", "black", "white",],},
                {img: "img/samsung.jpg", heading: "samsung phone", price: 90, id: 7, colors: ["red", "yellow", "green", "blue", "black", "white",],},
                {img: "img/speakers.jpg", heading: "speakers", price: 45, id: 8, colors: ["red", "yellow", "green", "blue", "black", "white",],},
            ],
        };
    },
}).mount("#app");