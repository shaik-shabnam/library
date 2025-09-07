const apiUrl="http://localhost:2220/api/books";

async function loadBooks(){
	try {
	    const res = await fetch(apiUrl);
	    const books = await res.json();
		console.log(res)
		console.log(books)
	    const list = document.getElementById("book-list");
	    list.innerHTML = "";

	    books.forEach((b, index) => {
	      const li = document.createElement("li");
	      li.classList.add("card");
	      li.style.animationDelay = '${index * 0.1}';

	      li.innerHTML = `
	        <h3>${b.title}</h3>
	        <p><strong>Author:</strong> ${b.author}</p>
	        <p><strong>Category:</strong> ${b.category}</p>
	        <p><strong>Available:</strong> ${b.available}</p>
	        <p><strong>ID:</strong> ${b.id}</p>
	      `;

	      list.appendChild(li);
	    });
	  } catch (err) {
	    console.error("Failed to load books:", err);
	}
}

loadBooks();