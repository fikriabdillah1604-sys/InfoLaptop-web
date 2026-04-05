// Product data with full specs
const products = {
    dell: {
        name: 'Dell XPS 15',
        img: 'https://s.yimg.com/uu/api/res/1.2/MOHqxex_efRXmAcFBKifyg--~B/aD0xMjE2O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/5e8c1f20-e8c7-11ec-bfdf-846a6ce9c468.cf.jpg',
        specs: {
            'Processor': 'Intel Core i7-13700H (14 cores)',
            'RAM': '16GB LPDDR5X',
            'Storage': '512GB SSD NVMe',
            'Display': '15.6" OLED 3.5K 60Hz',
            'Graphics': 'NVIDIA RTX 4050 6GB',
            'Battery': 'Up to 12 hours',
            'Weight': '1.8 kg',
            'Price': 'Rp 35.999.000'
        }
    },
   hp: { 
    name: 'HP Victus 16 (2025)',
    img: 'https://m.media-amazon.com/images/I/71Q+47iEdbL._AC_.jpg',
    specs: {
        'Processor': 'Intel Core i7-14700HX (20 cores)',
        'RAM': '32GB DDR5',
        'Storage': '1TB SSD NVMe',
        'Display': '16.1" FHD 144Hz IPS',
        'Graphics': 'NVIDIA RTX 4060 8GB',
        'Battery': 'Up to 6 hours',
        'Weight': '2.3 kg',
        'Price': 'Rp 24.999.000'
    }
},
   Lenovo : {
    name: 'Lenovo Legion 9i Gen 10',
    img: 'https://gamesmea.com/wp-content/uploads/2023/09/02_Legion_9i_Hero_RTX_Gaming.jpg',
    specs: {
        'Processor': 'Intel Core Ultra 9 275HX (24 cores)',
        'RAM': '64GB DDR5',
        'Storage': '2TB SSD NVMe',
        'Display': '18" WQUXGA Mini LED 240Hz (100% DCI-P3)',
        'Graphics': 'NVIDIA RTX 5090 24GB',
        'Battery': 'Up to 5 hours',
        'Weight': '3.5 kg',
        'Price': 'Rp 109.999.000'
    }
},
   MSI: {
        name: 'MSI Titan 18 HX',
        img: 'https://www.gadgetpilipinas.net/wp-content/uploads/2024/01/MSI-Titan-HX-06.jpg',
        specs: {
            'Processor': 'Intel Core i9-14900HX (24 cores)',
            'RAM': '96GB LPDDR5X',
            'Storage': '6TB SSD NVMe',
            'Display': '18" WQXGA IPS 100% sRGB',
            'Graphics': 'NVIDIA RTX 5090 24GB',
            'Battery': 'Up to 4 hours',
            'Weight': '3.6   kg',
            'Price': 'Rp 109.999.000'
        }
    },
Alienware: {
    name: 'Alienware Area-51 16',
    img: 'https://cdn.wccftech.com/wp-content/uploads/2025/01/Alienware-Area-51-Laptops-4-scaled.jpeg',
    specs: {
        'Processor': 'Intel Core Ultra 9 185HX (24 cores)',
        'RAM': '64GB DDR5',
        'Storage': '4TB SSD NVMe',
        'Display': '16" QHD+ 240Hz',
        'Graphics': 'NVIDIA RTX 5090 24GB',
        'Battery': 'Up to 5 hours',
        'Weight': '3.2 kg',
        'Price': 'Rp 95.000.000'
    }
},
    asus: {
        name: 'Asus ROG Strix G17',
        img: 'https://dlcdnwebimgs.asus.com/files/media/B6E6970A-9728-4F44-A81E-4175939B8925/v1/img/kv/kv@2x.jpg',
        specs: {
            'Processor': 'Intel Core i9-14900HX (24 cores)',
            'RAM': '32GB DDR5 4800MHz',
            'Storage': '1TB SSD NVMe',
            'Display': '17.3" QHD 240Hz',
            'Graphics': 'NVIDIA RTX 4080 12GB',
            'Battery': 'Up to 6 hours',
            'Weight': '2.8 kg',
            'Price': 'Rp 55.999.000'
        }
    }
};

// Elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalSpecs = document.getElementById('modal-specs');
const closeBtn = document.querySelector('.close');

// Event listeners
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const brand = card.dataset.brand;
        const product = products[brand];
        
        modalImg.src = product.img;
        modalImg.alt = product.name;
        
        modalSpecs.innerHTML = '';
        Object.entries(product.specs).forEach(([key, value]) => {
            const item = document.createElement('div');
            item.className = 'spec-item';
            item.innerHTML = `<h3>${key}</h3><p>${value}</p>`;
            modalSpecs.appendChild(item);
        });
        
        document.querySelector('.modal-content h2') || modal.querySelector('.modal-content').insertAdjacentHTML('afterbegin', `<h2 style="grid-column: 1/-1; text-align: center; margin-bottom: 1rem; color: #333;">${product.name}</h2>`);
        
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

