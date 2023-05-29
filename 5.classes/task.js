//ЗАДАЧА 1

class PrintEditionItem {
    #state = 100;
    type = null;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix() {
        this.state = this.#state * 1.5;
    }

    set state(input) {
        if (input < 0) {
            this.#state = 0
            return
        }

        if (input > 100) {
            this.#state = 100
            return
        }

        this.#state = input
    }

    get state() {
        return this.#state
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'book'
        this.author = author
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'novel'
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'fantastic'
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'detective'
    }
}




//ЗАДАЧА 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        let foundBook = null

        for (const book of this.books) {
            if (book[type] === value) {
                foundBook = book
            }
        }

        return foundBook
    }

    giveBookByName(bookName) {
        const foundIndex = this.books.findIndex(book => {
            return book.name === bookName
        })

        if (foundIndex < 0) {
            return null
        }

        const book = this.books[foundIndex]
        this.books.splice(foundIndex, 1);
        return book
    }
}
//Протестируйте корректность работы классов и методов, реализовав тестовый сценарий:
// создайте библиотеку;
// добавьте в библиотеку несколько печатных изданий разных типов;
// найдите книгу, изданную в 1919 году, или создайте её при необходимости;
// выдайте любую книгу;
// повредите выданную книгу;
// восстановите выданную книгу;
// попытайтесь добавить восстановленную книгу обратно в библиотеку.

let myLibrary = new Library('My library')

const magazin = new Magazine('name', 2023, 122);
const book1 = new NovelBook('Nicole Chung', 'A Living Remedy', 2023, 155) // author, name, releaseDate, pagesCount
const book2 = new FantasticBook('Camonghne Felix', 'Dyscalculia', 2021, 233) // author, name, releaseDate, pagesCount
const book3 = new DetectiveBook('Pico Iyer', 'The Half Known Life', 1919, 155) // author, name, releaseDate, pagesCount

myLibrary.addBook(magazin)
myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)

myLibrary.findBookBy('releaseDate', 1919)

const mybook = myLibrary.giveBookByName('A Living Remedy')
mybook.state = 80

console.log(mybook.state)
mybook.fix()
console.log(mybook.state)

console.log('before add book', myLibrary.books)
myLibrary.addBook(mybook)
console.log('after add book', myLibrary.books)



//ЗАДАЧА 3
class Student {
    constructor(name) {
        this.name = name
        this.marks = {}
    }

    addMark(mark, type) {
        if (mark < 2 || mark > 5) return

        if (this.marks[type]) {
            this.marks[type].push(mark)
        } else {
            this.marks[type] = [mark]
        }
    }

    getAverageBySubject(type) {
        if (!this.marks[type]) {
            return 0
        }

        const marksSum = this.marks[type].reduce((sum, mark) => {
            return sum += mark
        }, 0)

        return marksSum / this.marks[type].length
    }

    getAverage() {
        const averageMarks = Object.keys(this.marks).reduce((acc, type) => {
            return acc += this.getAverageBySubject(type)
        }, 0)

        return averageMarks / Object.keys(this.marks).length
    }
}