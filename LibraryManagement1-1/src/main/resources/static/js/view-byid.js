const apiUrl="http://localhost:2220/api/books";

async function findBook(){
	const id=document.getElementById("search-id").value;
	if (!id) {
	   document.getElementById("result").textContent = "Please enter a Book ID.";
	   return;
	 }

	 try {
	   const res = await fetch(`${apiUrl}/${id}`);
	   console.log("Response status:", res.status);
	   
	   if (!res.ok) {
	     document.getElementById("result").textContent = "Book Not Found.";
	     return;
	   }

	   const book = await res.json();
	   console.log("Book Data:", book);
	   
	   document.getElementById("result").innerHTML = `
	     <strong>Book Details:</strong><br>
	     ID: ${book.id}<br>
	     Title: ${book.title}<br>
	     Author: ${book.author}<br>
	     Category: ${book.category}<br>
	     Available: ${book.available}
	   `;
	   
	 } catch (err) {
	   console.error("Error fetching book:", err);
	   document.getElementById("result").textContent = `Error: ${err.message}`;
 }
}