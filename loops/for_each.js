const players = ['Nadal', 'Federer', "Murray", "Djokovic"]

// function printName(name) {
//     console.log(name)
// }

// players.forEach(

// (player) => console.log(player)

// )

//players.forEach(printName)

const nums = [1,2,3,4,5,6,7,8,9]

//-------------------FILTER ------------------------

// Filter has return value unlike forEach

// const newNums = nums.filter(
//     (num) => num > 4 // take num as argument and chk condition num> 4
// )

//console.log(newNums)

const newNums = []

nums.forEach(
    (num) => {
        if (num>3) {
            newNums.push(num)
        }
    }
)

// console.log(newNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const userBooks = books.filter(
    (book) => book['publish'] > 2000 // books published after 2000.
  )

//   const userBooks = books.filter(
//     (book) => book['genre'] === "History" // all books with genre history
//   )


  console.log(userBooks)
