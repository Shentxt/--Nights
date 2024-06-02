window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();  
        var modal = document.getElementById('modal');
        if (modal.style.display === 'none') {
            openModal();
        } else {
            closeModal();
        }
    }
});

window.addEventListener('load', function() {
	var savedImage = localStorage.getItem('unique.box.profileImage');
	if (savedImage) {
		document.getElementById('profile-img').src = savedImage;
	} else {
		document.getElementById('profile-img').src = 'img/bg-1.gif';
	}
});

var modal = document.getElementById('modal');

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function openModal() { 
	document.getElementById('modal').style.display = "block";   
	document.getElementById('update-btn').style.display = "none"; 
}


function closeModal() { 
	document.getElementById('modal').style.display = "none";   
	document.getElementById('update-btn').style.display = "block"; 
}

function isValidImage(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

function isValidUrl(string) {
	try {
		new URL(string);
	} catch (_) {
		return false;  
	}
	return true;
}

function updateImage() {
    var imageUrl = document.getElementById('img-url').value;
    if (imageUrl && isValidUrl(imageUrl)) {
        isValidImage(imageUrl, function(isValid) {
            if (isValid) {
                document.getElementById('profile-img').src = imageUrl;
                localStorage.setItem('box.profileImage', imageUrl);
            } else {
                document.getElementById('profile-img').src = 'img/bg-1.gif';
            }
        });
    } else {
        document.getElementById('profile-img').src = 'img/bg-1.gif';
    }
    closeModal();
}

window.onload = function() {
	var savedImage = localStorage.getItem('box.profileImage');
	if (savedImage) {
		document.getElementById('profile-img').src = savedImage;
	} else {
		document.getElementById('profile-img').src = 'img/bg-1.gif';
	}
}
