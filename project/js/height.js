class Rectangle {
    // Приватные поля
    #height;
    #weight;

    // Конструктор
    constructor(weight, height) {
        this.#weight = weight;
        this.#height = height;
    }

    // Метод для вычисления площади
    area() {
        return this.#weight * this.#height;
    }
}

// Создание объектов
const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(3, 4);
const rect3 = new Rectangle(7, 2);

// Вывод площади
console.log('Площадь прямоугольника 1: ' + rect1.area());
console.log('Площадь прямоугольника 2: ' + rect2.area());
console.log('Площадь прямоугольника 3: ' + rect3.area());  


    // Приватные поля 
    #height; 
    #weight; 
    // Конструктор 
    constructor(weight, height) {
        this.#weight = weight; 
        this.#height = height; 
}
// Метод для вычисления площади 
area() {
    return this.#weight * this.#height; 
} 
// Геттер для периметра 
get perimeter() {
    return 2 *(this.#weight + this.#height);  
}
    

// Геттер для информации 
get info() {
    return 'Прямоугольник с  шириной ' + this.#weight + ' и высотой' + this.#height; 
}

// Создание обьектов 
const rect1 = new Rectangle(5, 10); 
const rect2 = new Rectangle(3, 4); 
const rect3 = new Rectangle(7, 2); 

// Вывод геттеров 
console.log(rect1.perimeter); 
console.log(rect1.info); 

console.log(rect2.perimeter); 
console.log(rect2.info);

console.log(rect3.perimeter);
console.log(rect3.info);    