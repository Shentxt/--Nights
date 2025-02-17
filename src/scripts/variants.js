import { togglePopup } from './popup.js';

const variants = { 
  "Predeterm": {
  //  localStorage 
  },
}

const pinAction = document.getElementById("pin-action");

function getPinned() {
  return localStorage.getItem("pinnedImage");
}

function setPinned(imageUrl) {
  const label = pinAction.querySelector("span.visually-hidden");
  const icon = pinAction.querySelector("svg");

  if (!imageUrl) {
    localStorage.removeItem("pinnedImage");
    pinAction.ariaChecked = "false";
    icon.style.fill = "transparent";
    pinAction.title = label.innerText = "Pin image";
  } else {
    localStorage.setItem("pinnedImage", imageUrl);
    pinAction.ariaChecked = "true";
    icon.style.fill = "currentColor";
    pinAction.title = label.innerText = "Unpin image";
  }
}

function extractColors(imageUrl, callback) {
  const img = new Image();

  if (imageUrl.startsWith('/src/')) {
    img.src = imageUrl;  
  } else {
    img.crossOrigin = "Anonymous";  
    img.src = `https://api.allorigins.win/raw?url=${encodeURIComponent(imageUrl)}`; 
  }

  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let r = 0, g = 0, b = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      r += pixels[i];     // Red
      g += pixels[i + 1]; // Green
      b += pixels[i + 2]; // Blue
    }

    const pixelCount = pixels.length / 4;
    r = Math.floor(r / pixelCount);
    g = Math.floor(g / pixelCount);
    b = Math.floor(b / pixelCount);

    const hsl = rgbToHsl(r, g, b);
    callback(hsl);
  }
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; 
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

export function updateVariant(variant) {
  const variantId = variant ?? getPinned();

  const modal = document.getElementById('search-modal');
  const urlInput = document.getElementById('image-url-input');

  pinAction.addEventListener("click", () => {
    togglePopup('search-modal'); 
  });

  urlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const newImageUrl = urlInput.value.trim();

      if (newImageUrl && isValidUrl(newImageUrl)) {
        setPinned(newImageUrl); 
        updateImage(newImageUrl); 

        extractColors(newImageUrl, (hsl) => {
          updateStyles(hsl);
        });
        
        togglePopup('search-modal'); 
      } else {
      }
    }
  });

  const current = variants[variantId];
  const imageUrl = getPinned() || `https://i.pinimg.com/736x/83/fe/5d/83fe5d882eddf12a08baff79b3dfa423.jpg`;

  updateImage(imageUrl);

  extractColors(imageUrl, (hsl) => {
    updateStyles(hsl);
  });
}

function updateImage(imageUrl) {
  const img = document.getElementById("character");

  img.src = imageUrl; 

  img.onload = () => {
    img.classList.add('flip-in'); 

    setTimeout(() => {
      img.classList.remove('flip-in'); 
    }, 1250);
  }; 
}

function updateStyles(hsl) {
  const root = document.documentElement;
  root.style.transition = "background-color 0.5s ease, color 0.5s ease";
  root.style.setProperty("--primary", hsl); 
  root.style.setProperty("--secondary", hsl); 
  root.style.setProperty("--shade-color", hsl);
  
  root.classList.add("curtainClose");

  setTimeout(() => {
    root.classList.remove("curtainClose"); 
  }, 300);
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}