
class showBooks{
    //display books
   static displayBooks(){
    const book=[
        // create object
    {
        genre:"fiction",
        title:"world",
        author:"david",
    
    },
//     {
//     genre: "Adventure",
//     title: "coro",
//     author:"Rye",
//     },
    {
       genre: "life",
       title: "me",
       author:"jade",
    }
    ];
    const books =book;

books.forEach((book)=>showBooks.addBookToList(book))

   }

  
///display books ends here

   static addBookToList(book){
       const list = document.querySelector('#book-list');
       const row = document.createElement('tr');
       row.innerHTML=`
       <td> ${book.genre}</td>
        <td> ${book.title}</td>
        <td> ${book.author}</td>
       `;
       list.appendChild(row);
       
}

}//class ShowBooks ends here


document.addEventListener('DOMContentLoaded',showBooks.displayBooks);








