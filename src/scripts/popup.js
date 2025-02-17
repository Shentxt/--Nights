export function togglePopup(popupId) {
  const popup = document.getElementById(popupId);

  if (!popup) return;

  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
    popup.style.opacity = 0;
    popup.style.transform = 'translateY(-30px)';
    popup.offsetHeight; 
    popup.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    popup.style.opacity = 1;
    popup.style.transform = 'translateY(0)';
  
    const input = popup.querySelector('input');
    if (input) {
      input.focus();
    }
   
    
    document.addEventListener('keydown', closeOnEsc);
  } else {
    popup.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    popup.style.opacity = 0;
    popup.style.transform = 'translateY(-30px)';
    setTimeout(function() {
      popup.style.display = 'none';
    }, 500);

    document.removeEventListener('keydown', closeOnEsc);
  }
}

const exceptionPopups = ["name-modal"]; 

function closeOnEsc(event) {
  if (event.key === "Escape") {
    const visiblePopup = document.querySelector('[style*="display: block"]');

    if (visiblePopup && !exceptionPopups.includes(visiblePopup.id)) {
      visiblePopup.style.opacity = 0;
      visiblePopup.style.transform = 'translateY(-30px)';
      setTimeout(function() {
        visiblePopup.style.display = 'none';
      }, 500);
    }
  }
}

window.togglePopup = togglePopup;