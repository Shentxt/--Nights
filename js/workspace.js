window.addEventListener('load', function() {
    let ultimoWorkspace = localStorage.getItem('work.ultimoWorkspace');
    if(ultimoWorkspace) {
        cambiarWorkspace(ultimoWorkspace);
    }
});

let workspaces = {
    workspace1: [
    {nombre: 'Github', enlace: 'https://github.com/'}, 
    {nombre: 'Hackthebox', enlace: 'https://www.hackthebox.com/'}, 
    {nombre: 'VSCode', enlace: 'https://vscode.dev/'},
    {nombre: 'Gitlabs', enlace: 'https://about.gitlab.com/'},
    {nombre: 'Monkey', enlace: 'https://monkeytype.com/'},
    {nombre: 'Linkelind', enlace: 'https://www.linkedin.com/feed/'},
    {nombre: 'Godot', enlace: 'https://godotengine.org/'},
    {nombre: 'Unreal', enlace: 'https://www.unrealengine.com/es-ES'},
    {nombre: 'Unity', enlace: 'https://unity.com/es'}
    ],
    workspace2: [
    {nombre: 'Youtube', enlace: 'https://www.youtube.com/'}, 
    {nombre: 'Pinterest', enlace: 'https://ar.pinterest.com/'}, 
    {nombre: 'Reddit', enlace: 'https://www.reddit.com/'},
    {nombre: 'Discord', enlace: 'https://discord.com/'},
    {nombre: 'Intagram', enlace: 'https://www.instagram.com/'},
    {nombre: 'Anime', enlace: 'https://ww3.animeonline.ninja/'},
    {nombre: 'Manga', enlace: 'https://visortmo.com/'},
    {nombre: 'Whastsapp', enlace: 'https://web.whatsapp.com/'},
    {nombre: 'Tiktok', enlace: 'https://www.tiktok.com/'}
    ],
    workspace3: [
    {nombre: 'Epic', enlace: 'https://store.epicgames.com/es-ES/'}, 
    {nombre: 'Steam', enlace: 'https://store.steampowered.com/?l=spanish'}, 
    {nombre: 'Steamdb', enlace: 'https://steamdb.info/'},
    {nombre: 'Twich', enlace: 'https://www.twitch.tv/'},
    {nombre: 'Ubisoft', enlace: 'https://store.ubisoft.com/'},
    {nombre: 'Electronic', enlace: 'https://www.ea.com/es-es?isLocalized=true'},
    {nombre: 'Solitario', enlace: 'https://solitarios-online.com/'},
    {nombre: 'Buscaminas', enlace: 'https://buscaminas.eu/'},
    {nombre: 'Tetris', enlace: 'https://www.freetetris.org/game.php'}
    ],
    workspace4: [
    {nombre: 'Gmail', enlace: 'https://mail.google.com/mail/'}, 
    {nombre: 'Drive', enlace: 'https://drive.google.com/drive/u/0/'}, 
    {nombre: 'Keep', enlace: 'https://keep.google.com/'},
    {nombre: 'Dropbox', enlace: 'https://www.dropbox.com/'},
    {nombre: 'Photos', enlace: 'https://photos.google.com/u/0/albums?hl=es'},
    {nombre: 'Earth', enlace: 'https://earth.google.com/web/'},
    {nombre: 'Phorm', enlace: 'https://www.phorm.ai/'},
    {nombre: 'Canvas', enlace: 'https://www.canva.com/es_419/'},
    {nombre: 'Erarse', enlace: 'https://www.remove.bg/'}
    ],
};

function cambiarWorkspace(workspace) {
    let contenedores = workspaces[workspace];
    if(!contenedores) {
        return;
    }

    let divContenedores = document.getElementById('contenedores');
    divContenedores.innerHTML = '';
    for(let i = 0; i < contenedores.length; i++) {
        let nuevoContenedor = document.createElement('div');
        nuevoContenedor.classList.add('card'); 

	let boton = document.createElement('buton');
        boton.innerText = '+';
        boton.onclick = function(event) {
            event.stopPropagation();
	
      	let nuevoEnlace = prompt('new enlace:');
            if (nuevoEnlace) {
                enlace.href = nuevoEnlace;
                enlace.innerText = nuevoEnlace;	
            }
        };
        nuevoContenedor.appendChild(boton);	

        if (typeof contenedores[i] === 'object') {
            let enlace = document.createElement('span');
            enlace.innerText = contenedores[i].nombre;
	    enlace.classList.add('name'); 
            nuevoContenedor.appendChild(enlace);

            let favicon = document.createElement('img');
            favicon.src = 'http://www.google.com/s2/favicons?domain=' + contenedores[i].enlace;
            favicon.alt = 'Favicon';
            favicon.classList.add('name');

            nuevoContenedor.insertBefore(favicon, enlace);

            nuevoContenedor.onclick = function() {
                window.location.href = contenedores[i].enlace;
            };
        } else {
            nuevoContenedor.innerText = contenedores[i];
        }

        divContenedores.appendChild(nuevoContenedor);
    }

    localStorage.setItem('work.ultimoWorkspace', workspace);
}
