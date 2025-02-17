document.getElementById("search-form").addEventListener("submit", function (event) {
    const input = document.getElementById("search-input");
    const query = input.value.trim();
    
    const searchEngines = {
      "p!": "https://www.pinterest.com/search/pins/?q=",
      "y!": "https://www.youtube.com/results?search_query=",
      "r!": "https://www.reddit.com/search/?q=",
      "g!": "https://chat.openai.com/?q=",
    };
  
    for (const prefix in searchEngines) {
      if (query.startsWith(prefix)) {
        event.preventDefault(); 
        const searchTerm = encodeURIComponent(query.replace(prefix, "").trim());
        const searchUrl = searchEngines[prefix] + searchTerm;
        window.location.href = searchUrl;
        return;
      }
    }
  
  });
  