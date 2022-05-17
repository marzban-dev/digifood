import { TFood } from "components/Food/types";
import FoodIngredientPic1 from "assets/img/food-ingredient-1.jpg";
import FoodIngredientPic2 from "assets/img/food-ingredient-2.jpg";
import FoodIngredientPic3 from "assets/img/food-ingredient-3.jpg";
import FoodIngredientPic4 from "assets/img/food-ingredient-4.jpg";
import FoodIngredientPic5 from "assets/img/food-ingredient-5.jpg";
import BaconBurgerImage from "assets/img/bacon-burger.jpg";
import BolognaSandwichImage from "assets/img/bologna-sandwich.jpg";
import CheeseburgerImage from "assets/img/cheeseburger.jpg";
import ChickenBurgerImage from "assets/img/chicken-burger.jpg";
import CocacolaImage from "assets/img/cocacola.png";
import PepsiImage from "assets/img/pepsi.jpeg";
import FantaImage from "assets/img/fanta.jpeg";
import FrenchPotatosImage from "assets/img/french-potatos.jpg";
import HamburgerImage from "assets/img/hamburger.jpg";
import SaladImage from "assets/img/salad1.png";
import TacoChickenImage from "assets/img/taco-chicken.jpg";
import TacoMeatImage from "assets/img/taco-meat.jpg";
import SaladSezarImage from "assets/img/sala-sezar.png";
import HotdogImage from "assets/img/hotdog.jpg";
import KentacyImage from "assets/img/kentacy.jpeg";
import PizzaPepperoniImage from "assets/img/pizza-pepperoni.jpg";
import PizzaVegterianImage from "assets/img/pizza-vegterian.jpg";
import WaterImage from "assets/img/water.jpg";
import NoodleImage from "assets/img/Noodle.png";
import Salad2Image from "assets/img/Salad.png";

const ingredients = [
    { id: 0, title: "Food1", picture: FoodIngredientPic1 },
    { id: 1, title: "Food2", picture: FoodIngredientPic2 },
    { id: 2, title: "Food3", picture: FoodIngredientPic3 },
    { id: 3, title: "Food4", picture: FoodIngredientPic4 },
    { id: 4, title: "Food5", picture: FoodIngredientPic5 },
];

export const sandwichMenu: TFood[] = [];
export const humberMenu: TFood[] = [];
export const hotdogMenu: TFood[] = [];
export const drinksMenu: TFood[] = [
    {
        id: 5,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Cocacola",
        rate: 4.9,
        orderTime: 0,
        price: 5,
        picture: CocacolaImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 750,
            organic: false,
        },
        ingredients: [],
    },
    {
        id: 6,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Pepsi",
        rate: 4.8,
        orderTime: 0,
        price: 6,
        picture: PepsiImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 780,
            organic: false,
        },
        ingredients: [],
    },
    {
        id: 7,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Water",
        rate: 5,
        orderTime: 0,
        price: 2,
        picture: WaterImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 300,
            organic: true,
        },
        ingredients: [],
    },
];
export const tacoMenu: TFood[] = [];
export const friedMenu: TFood[] = [];

export const fakeFoods: TFood[] = [
    {
        id: 1,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Bacon Burger",
        rate: 4.6,
        orderTime: 25,
        price: 30,
        picture: BaconBurgerImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 2400,
            organic: false,
        },
        ingredients: ingredients,
        discount: 20,
    },
    {
        id: 2,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Bologna Sandwich",
        rate: 3.9,
        orderTime: 15,
        price: 18,
        picture: BolognaSandwichImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 1850,
            organic: false,
        },
        ingredients: ingredients,
    },
    {
        id: 3,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Cheese Burger",
        rate: 4.7,
        orderTime: 30,
        price: 32,
        picture: CheeseburgerImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 2450,
            organic: false,
        },
        ingredients: ingredients,
    },
    {
        id: 4,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Chicken Burger",
        rate: 4.3,
        orderTime: 35,
        price: 29,
        picture: ChickenBurgerImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 1970,
            organic: true,
        },
        ingredients: ingredients,
    },
    {
        id: 5,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Cocacola",
        rate: 4.9,
        orderTime: 0,
        price: 5,
        picture: CocacolaImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 750,
            organic: false,
        },
        ingredients: [],
    },
    {
        id: 6,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Pepsi",
        rate: 4.8,
        orderTime: 0,
        price: 6,
        picture: PepsiImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 780,
            organic: false,
        },
        ingredients: [],
    },
    {
        id: 7,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Water",
        rate: 5,
        orderTime: 0,
        price: 2,
        picture: WaterImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 300,
            organic: true,
        },
        ingredients: [],
    },
];