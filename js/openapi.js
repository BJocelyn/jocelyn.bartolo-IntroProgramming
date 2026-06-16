document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const query = document.getElementById("searchInput").value.trim();
    if(!query){
        alert("Please type something to search");
        return;
    }

    //Which button was click
    const clickButton = e.submitter.id;

    if (clickButton === "searchTitle") {
        searchByTitle(query);
    }

    if (clickButton === "searchAuthor") {
        searchByAuthor(query);
    }

    // Something to keep working on later
    // if (clickButton === "searchGenre") {
    //     searchByGenre(query);
    // }
});

async function searchByTitle(title) {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.docs);
    } catch (error) {
        console.error("Couldn't find any result for that title. Try Again.", error);
    }
}

async function searchByAuthor(author) {
    const url = `https://openlibrary.org/search.json?author=${encodeURIComponent(author)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.docs);
    } catch (error) {
        console.error("Couldn't find any result for that Author. Try again.", error);
        
    }
}

//Something to keep working on and try later
// async function searchByGenre(genre) {
//     const url = `https://openlibrary.org/subjects/${encodeURIComponent(genre)}.json`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         displayResults(data.works);
//     } catch (error) {
//         console.error("Couldn't load genre data at the moment. Try again.", error);
//     }
// }

function displayResults(books) {
    const booksFinds = document.getElementById("results");
    booksFinds.innerHTML = "";

    if(!books || books.length === 0) {
        booksFinds.innerHTML = "<p>No results found</p>";
        return;
    }

    books.forEach(book => {
    const coverId = book.cover_i;
    const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

    const card = `
    <div class="book-card">
    <img src="${coverUrl}" alt="Book Cover">
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
    <p><strong>Year:</strong> ${book.first_publish_year || "N/A"}</p>
    </div>
    `;

    booksFinds.innerHTML += card;
    });
}