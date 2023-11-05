class Hamburger {
  static SIZE_SMALL = 'small'
  static SIZE_BIG = 'big'
  static STUFFING_CHEESE  = 'cheese'
  static STUFFING_SALAD  = 'salad'
  static STUFFING_POTATO  = 'potato'
  static TOPPING_MAYO = 'mayo'
  static TOPPING_SEASONING = 'seasoning'

  constructor(size, fillings){
    this.size = size;
    this.fillings = fillings;
    this.topping = [];
  }

  addTopping(value){
    this.topping.push(value);
  }

  calculate(){
    let calories = 0;

    switch(this.size){
      case Hamburger.SIZE_SMALL: 
        calories += 20;
        break;
      case Hamburger.SIZE_BIG: 
        calories += 40;
        break;
      default:
        calories += 0;
        break;
    }

    switch(this.fillings){
      case Hamburger.STUFFING_CHEESE: 
        calories += 20;
        break;
      case Hamburger.STUFFING_SALAD: 
        calories += 5;
        break;
      case Hamburger.STUFFING_POTATO: 
        calories += 10;
        break;
      default:
        calories += 0;
        break;
    }

    for (let i = 0; i < this.topping.length; i++){
      switch(this.topping[i]){
        case Hamburger.TOPPING_SEASONING:
          calories += 0;
          break;
        case Hamburger.TOPPING_MAYO:
          calories += 5;
          break;
        default:
          calories += 0;
          break;
      }
    }

    return calories;
  }

  calculatePrice(){
    let price = 0;

    switch(this.size){
      case Hamburger.SIZE_SMALL:
        price += 50;
        break;
      case Hamburger.SIZE_BIG:
        price += 100;
        break;
      default:
        price += 0;
        break;
    }

    switch(this.fillings){
      case Hamburger.STUFFING_CHEESE:
        price += 10;
        break;
      case Hamburger.STUFFING_SALAD:
        price += 20;
        break;
      case Hamburger.STUFFING_POTATO:
        price += 15;
        break;
      default:
        price += 0;
        break;
    }

    for (let i = 0; i < this.topping.length; i++){
      switch(this.topping[i]){
        case Hamburger.TOPPING_SEASONING:
          price += 15;
          break;
        case Hamburger.TOPPING_MAYO:
          price += 20;
          break;
        default:
          price += 0;
        break;
      }
    }

    return price;
  }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate ());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());