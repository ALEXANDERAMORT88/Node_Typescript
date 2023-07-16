
//1
const firstName: string = "Alexander";

//2
const number: number = 88;

//3
let animals: string[] = [
    "dog",
    "cat",
    "tiger",
    "lion",
    "hippo",
    "eagle",
    "shark",
    "tortoise",
    "gireffe",
    "elephant"
];

//4
interface Organization {
    name: string;
    slogan: string;
    numberOfWokers: string;
    openingHours: string;
    remoteWork: boolean;
    creationDate: string;
};

const organization: Organization[] = [
    {
        name: "Alexander",
    slogan: "",
    numberOfWokers: "100",
    openingHours: "7:15 am - 5:00 pm",
    remoteWork: true,
    creationDate: "14/07/2023"
    }
];


//5
interface Students {
    name: string;
    age: number;
    course: string;
    address: string;
    attendant: string
};

const students: Students[] = [
    {
        name: "Vivina",
        age : 37,
        course: "Belleza",
        address: "Conjunto Miro Lindo",
        attendant: "Jose"
    }
];

//6
function circleArea(radio: number) {
    const pi: number = 3.1416;
    const area: number = pi * (radio * 2);
return area
};

let radio : number = 7;
const circleAreaResult: number = circleArea(radio);
console.log(circleAreaResult);


//7
function biggerNumber(num1: number, num2: number, num3: number) {
    let mayor: number = num1
    if (num2 > mayor) {
        mayor = num2;
    };
    if (num3 > mayor) {
        mayor = num3;
    };
    return mayor
};

let num1: number = 10;
let num2: number = 50;
let num3: number = 20;

const mayornumero: number = biggerNumber(num1,num2,num3);
console.log(mayornumero);


//8
function person(name: string) {
    console.log("hola soy " + name);
    return person
}

person("juan")







