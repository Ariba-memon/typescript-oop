// import { Console } from "console";
// import input from "inquirer/lib/prompts/input";

// // using System;
// namespace OOP_Introduction_Explained {
//     class Program {
//         static void: any Main(string: any[]: any, args: any) {
//             try {
//          string input;
//          string name;
//                 console.log("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself :");
//                 input = Console.ReadLine();
//        Person const MyPerson = new Person()
//                 MyPerson.AskQuestion(int.Parse(input));
//                 console.log("You are" + MyPerson.GetPersonality());

//                 console.log("What is your name:");
//                 name = Console.ReadLine();

//                 Student MyStudent = new Student();
//                 MyStudent.Name = name;

//                 console.log("Your Name is :" + MyStudent.Name + "and your personality type is :" + MyStudent.GetPersonality());



//             }
//             catch {
//                 console.log("Please enter an integar value");

//             }

//         }
//     }
// }

// {
//     class Person {
//         //Declare a field to represent the personality
//         private string: any personality: any;

//         //Constructor
//         public Person() {
//             this.personality = "Mystery"
//         }

//         public void: any AskQuestion(int: any answer: number) {
//             if (answer == 1) {
//                 this.personality = ""
//             }
//             else if (answer == 2) {
//                 this.personality = "Introvert"
//             }
//             else {
//                 this.personality = "You are still a Mystery"
//             }
//         }

//         //This method returns the value of the Personality
//         public string GetPersonality() {
//             return this.personality
//         }
//     }
// }

// {
//     //Here we can either write or read data to this class
//     class Student : Person;
//     {
//        //private field (backing field) hold any data assigned Name property
//        private string _name;

//        public new Student(){
//             _name = "";
//         }

//         // This is the Name Property
//         public string Name{
//             //use the Get accessor to read data from the class
//             get{
//                 return _name;
//             }
//             set {
//                 //the value property of the set accessor is automatically created by the compiler
//                 _name = value;

//             }
//         }
//     }
// }

abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;

    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
    }

    public abstract populationGrowth(): number;
}

class OICCountry extends Country {
    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowthRate: number
    ) {
        super(name, language, population, populationGrowthRate);
    }

    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 300000000, 2.5);
console.info(Pakistan);


Pakistan.populationGrowth();

console.info(Pakistan);

Pakistan.populationGrowth();

console.info(Pakistan);