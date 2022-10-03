const items = [
    {
        id: '1',
        title: 'GPU MSI NVIDIA Geforce RTX 3090 24GB DDR6',
        price: 400000,
        category: 'component',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_709853-MLA44632409785_012021-O.jpg',
        stock: 10,
        description: 'La tarjeta gráfica más potente del mercado'
    },
    {
        id: '2',
        title: 'Notebook Gamer MSI Katana Gf66 15.6" FHD 144Hz Core i7 16GB',
        price: 380000,
        category: 'notebook',
        pictureUrl: 'https://gorilagames.com/img/Public/1019-producto-msi-notebook-katana-gf66-3-5406.jpg',
        stock: 15,
        description: 'Msi katana gf66 te proporciona un alto rendimiento en todo tipo de actividades'
    },
    {
        id: '3',
        title: 'Mouse Logitech G Pro Hero',
        price: 10000,
        category: 'mouse',
        pictureUrl: 'https://shiftdigital.com.ar/images/Logitech_Mouse_G_Pro_1.jpg',
        stock: 30,
        description: 'El mejor mouse para tus juegos FPS'
    },
    {
        id: '4',
        title: 'SONY PlayStation 5',
        price: 300000,
        category: 'console',
        pictureUrl: 'https://respawnfirst.com/wp-content/uploads/2020/09/619BkvKW35L._SL1500_.jpg',
        stock: 20,
        description: 'Obtene la consola mas utilizada del día y disfruta de tus mejores juegos'
    },
    {
        id: '5',
        title: 'PC Gamer Ryzen 7 7700 16GB RAM RTX 3070 8GB, 1TB HDD 500GB SDD',
        price: 250000,
        category: 'pc',
        pictureUrl: 'https://d10mhq06fikmnr.cloudfront.net/catalog/product/h/u/hunter_rev2_os_rgb-min_4_1_1_1.jpg',
        stock: 10,
        description: 'Computadora de escritorio preparada para todos los juegos de actualidad a un máximo rendimiento'
    },
    {
        id: '6',
        title: 'Fuente Corsair CV550 80+ Bronze',
        price: 15000,
        category: 'component',
        pictureUrl: 'https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-6529285.jpg',
        stock: 50,
        description: 'Esta fuente garantizara que tu equipo funcione siempre con buena alimentación'
    }
]


export const getItems = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? items.filter(item => item.category === categoryId) : items)
        }, 2000)
    })
}


export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(prod=>prod.id === id))
        }, 2000)
    })
}