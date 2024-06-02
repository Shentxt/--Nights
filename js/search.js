document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();  
        var searchContainer = document.getElementById('search');
        if (searchContainer.style.display === 'none') {
            searchContainer.style.display = 'block';
        } else {
            searchContainer.style.display = 'none';
        }
    }
});

function search() {
    var query = document.getElementById('searchInput').value.trim();
    var searchEngine = query.split('!')[0];
    var searchQuery = query.split('!')[1];

    switch(searchEngine) {
        case 'g':
            window.open('https://www.google.com/search?q=' + searchQuery);
            break;
        case 'd':
            window.open('https://duckduckgo.com/?q=' + searchQuery);
            break;
        case 'b':
            window.open('https://www.bing.com/search?q=' + searchQuery);
            break;
        case 'y':
            window.open('https://search.yahoo.com/search?p=' + searchQuery);
            break;
        default:
    }
}
