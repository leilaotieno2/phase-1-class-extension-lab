class Formatter {
    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    static sanitize(str) {
      return str.replace(/[^a-zA-Z0-9\-\'\s]/g, '');
    }
  
    static titleize(str) {
      const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      const words = str.split(' ');
      const titleizedWords = [];
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (i === 0 || !smallWords.includes(word)) {
          titleizedWords.push(this.capitalize(word));
        } else {
          titleizedWords.push(word);
        }
      }
      return titleizedWords.join(' ');
    }
  }
  
  class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) {
        return false;
      }
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) {
        return false;
      }
      const [a, b, c, d] = this.sides;
      return a === b && b === c && c === d;
    }
  
    get area() {
      return this.sides[0] ** 2;
    }
  }
  