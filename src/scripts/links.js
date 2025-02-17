import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "⌂ Home",
    items: {
      "Youtube": "https://www.youtube.com/",
      "Animes": "https://ww3.animeonline.ninja/",
      "Mangas": "https://visortmo.com/",
      "Protomdb": "https://www.protondb.com/",
    },
  },
  {
    label: "</> Dev",
    items: {
      "Hackthebox": "https://www.hackthebox.com",
      "Github": "https://www.github.com",
      "Linkedin": "https://www.linkedin.com/feed/",
      "Reddit": "https://www.reddit.com/",
    },
  },
  {
    label: " ✉ Read",
    items: {
      "Fixit": "https://es.ifixit.com/",
      "Deevmanual": "https://cheatsheets.zip/",
    },
  },
  {
    label: "⌨ Game",
    items: {
      "Tetris": "https://www.freetetris.org/game.php",
      "Typing": "https://monkeytype.com/",
    },
  },
]

injectBookmarks(bookmarks)

// Select a random variant
updateVariant()
// Or set a static variant
// updateVariant("momo-1")

// For debugging
/*
function iterateVariants() {
  updateVariant()
  setTimeout(iterateVariants, 5000)
}
iterateVariants()
*/
