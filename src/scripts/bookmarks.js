const getFaviconUrl = (url) => {
  const urlObj = new URL(url);
  return `https://www.google.com/s2/favicons?domain=${urlObj.hostname}`;
};


const createLink = (text, url) => {
  const link = document.createElement("a");

  const faviconUrl = getFaviconUrl(url);

  const icon = document.createElement("img");
  icon.src = faviconUrl;  
  icon.alt = `${text} icon`; 
  icon.classList.add("icon");   

  link.appendChild(icon);

  const textNode = document.createTextNode(text);
  link.appendChild(textNode); 

  link.href = url;
  link.setAttribute("data-text", text);
  return link;
}

const nav = document.getElementById("bookmarks")

export function injectBookmarks(bookmarks) {
  // Remove all existing content before adding new content
  nav.innerHTML = ""

  bookmarks.map(({ label, items }) => {
    const list = document.createElement("ul")

    const groupLabel = document.createElement("label")
    groupLabel.innerText = label
    list.append(groupLabel)

    Object.entries(items).forEach(([name, url]) => {
      const item = document.createElement("li")
      const link = createLink(name, url)
      item.appendChild(link)
      list.appendChild(item)
    })
    nav.appendChild(list)
  })
}