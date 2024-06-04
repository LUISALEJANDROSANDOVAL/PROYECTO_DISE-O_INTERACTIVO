const locationData = {
    santa_cruz: {
        central: {
            direccion: "3º Anillo Interno entre Alemana y Mutualista",
            encargado: "Guiver Flores",
            telefono: "686-82040"
        },
        sucursal1: {
            direccion: "Av. Radial 13 entre 4º y 5º Anillo",
            encargado: "Silvana Vaca",
            telefono: "713-91763"
        },
        fabrica: {
            direccion: "Carretera al Norte Km.23 Warnes",
            encargado: "Lucia Acosta",
            telefono: "771-63222"
        }
    },
    cochabamba: {
        sucursal1: {
            direccion: "Av. Blanco Galindo Km 11/2",
            encargado: "Andreina Machicado",
            telefono: "722-42055"
        },
        sucursal2: {
            direccion: "Av. Panamericana dos cuadras del puente Tamborada",
            encargado: "Jose Luis Anagua",
            telefono: "713-57936"
        },
        sucursal3: {
            direccion: "Av. Reducto Km 9 Colcapirhua",
            encargado: "Adrian Balver",
            telefono: "603-68474"
        }
    },
    la_paz: {
        sucursal: {
            direccion: "Av. Estructurante #33 zona San Juan altura de Acribol",
            encargado: "Franz Cordova",
            telefono: "722-21245"
        }
    },
    sucre: {
        sucursal: {
            direccion: "Av. Los Andes #20 por la parada a Ravelo",
            encargado: "Elizabeth Colque",
            telefono: "771-15173"
        }
    },
    oruro: {
        sucursal: {
            direccion: "Calle Bolivar entre Pisagua y Antofagasta",
            ubicacion: "https://bit.ly/UbicaciónMadePlusCenterOruro",
            telefono: "683-50017"
        }
    },
    tarija: {
        sucursal: {
            direccion: "Av. Circunvalación pasando Av. La Paz",
            encargado: "Daysi Marlene Ochoa",
            telefono: "717-21242"
        }
    },
};

function updateFooter(location) {
    const footerContent = document.getElementById('footer-content');
    footerContent.innerHTML = '';

    const locationInfo = locationData[location];
    for (let key in locationInfo) {
        const section = locationInfo[key];
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('footer-section');
        const title = document.createElement('h3');
        title.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
        sectionDiv.appendChild(title);

        for (let infoKey in section) {
            const infoPara = document.createElement('p');
            if (infoKey === 'ubicacion') {
                const link = document.createElement('a');
                link.href = section[infoKey];
                link.textContent = "Ubicación en GoogleMaps";
                link.target = "_blank";
                infoPara.appendChild(link);
            } else {
                infoPara.textContent = `${infoKey.charAt(0).toUpperCase() + infoKey.slice(1)}: ${section[infoKey]}`;
            }
            sectionDiv.appendChild(infoPara);
        }
        footerContent.appendChild(sectionDiv);
    }
}

document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const location = this.getAttribute('data-location');
        updateFooter(location);
    });
});

// Inicializar el footer con la información de Santa Cruz
updateFooter('santa_cruz');
