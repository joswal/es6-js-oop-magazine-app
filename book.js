//Book class
class Book{

    constructor (title,author,year){
        this.title = title;
        this.author= author;
        this.year= year;
      }

getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

getAge(){
    const years = new Date().getFullYear()- year;
    return `${this.title} is ${years} old`
}

}

module.exports= Book;
  