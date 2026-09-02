const countriesData = {

    japan: {
        id: "japan", name: "Japan", region: "asia", capital: "Tokyo",
        rating: 4.8, visitors: "31M", price: 150, currency: "JPY",
        timezone: "GMT+9", temperature: "+18°C", safety: "Very High",
        description: "Japan is a fascinating blend of ancient traditions and cutting-edge modernity. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers an unforgettable experience. Enjoy world-class cuisine, beautiful cherry blossoms, and unique cultural experiences that will stay with you forever.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
        cities: [
            { name: "Tokyo",     image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80" },
            { name: "Kyoto",     image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80" },
            { name: "Osaka",     image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80" },
            { name: "Hiroshima", image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?w=600&q=80" },
            { name: "Nara",      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80" }
        ],
        hotels: [
            { name: "Park Hyatt Tokyo",  location: "Tokyo", price: 450, rating: 4.9, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80" },
            { name: "Ryokan Kuruma",     location: "Kyoto", price: 280, rating: 4.7, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" },
            { name: "Ritz-Carlton Osaka",location: "Osaka", price: 320, rating: 4.8, image: "https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?w=600&q=80" },
            { name: "Aman Tokyo",        location: "Tokyo", price: 680, rating: 5.0, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80" },
            { name: "Hoshinoya Kyoto",   location: "Kyoto", price: 520, rating: 4.9, image: "https://images.unsplash.com/photo-1589308454676-22f0e1cf4a32?w=600&q=80" }
        ],
        coords: [36.2048, 138.2529],
        reviews: [
            { author: "Alice Kim", rating: 5, text: "Amazing culture and food! Tokyo is absolutely incredible.", date: "2024-01-15" },
            { author: "Tom Brown", rating: 5, text: "Best trip ever. Kyoto temples are breathtaking.", date: "2024-02-20" }
        ]
    },

    france: {
        id: "france", name: "France", region: "europe", capital: "Paris",
        rating: 4.7, visitors: "90M", price: 180, currency: "EUR",
        timezone: "GMT+1", temperature: "+15°C", safety: "High",
        description: "France is synonymous with romance, art, and gastronomy. Paris, the City of Light, houses iconic landmarks like the Eiffel Tower and the Louvre. Beyond the capital, explore lavender fields of Provence, glamorous Riviera beaches, and legendary Bordeaux wine regions.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
        cities: [
            { name: "Paris",     image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" },
            { name: "Nice",      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" },
            { name: "Lyon",      image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=80" },
            { name: "Bordeaux",  image: "https://images.unsplash.com/photo-1587491439149-bd2ff295d450?w=600&q=80" },
            { name: "Marseille", image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=600&q=80" }
        ],
        hotels: [
            { name: "Le Meurice",           location: "Paris", price: 850,  rating: 4.9, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80" },
            { name: "Hotel Negresco",        location: "Nice",  price: 420,  rating: 4.8, image: "https://images.unsplash.com/photo-1601918774516-3f37aa6e0fc5?w=600&q=80" },
            { name: "Villa Florentine",      location: "Lyon",  price: 250,  rating: 4.6, image: "https://images.unsplash.com/photo-1549014938-befe76f83e64?w=600&q=80" },
            { name: "Four Seasons George V", location: "Paris", price: 1100, rating: 5.0, image: "https://images.unsplash.com/photo-1616604426203-b83c5af0de54?w=600&q=80" },
            { name: "Chateau Les Crayeres",  location: "Reims", price: 380,  rating: 4.7, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80" }
        ],
        coords: [46.2276, 2.2137],
        reviews: [{ author: "Marie Dubois", rating: 5, text: "Paris is always a good idea! Amazing food, wine, and culture.", date: "2024-01-10" }]
    },

    italy: {
        id: "italy", name: "Italy", region: "europe", capital: "Rome",
        rating: 4.8, visitors: "65M", price: 160, currency: "EUR",
        timezone: "GMT+1", temperature: "+20°C", safety: "High",
        description: "Italy is a treasure trove of art, history, and culinary excellence. From ancient Rome to Venetian canals, fashion-forward Milan, and the rolling hills of Tuscany — every corner tells a magnificent story. The Amalfi Coast and Cinque Terre are among the most breathtaking places on Earth.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
        cities: [
            { name: "Rome",     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80" },
            { name: "Venice",   image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80" },
            { name: "Florence", image: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c13?w=600&q=80" },
            { name: "Milan",    image: "https://images.unsplash.com/photo-1512497405173-5e1d0513fa56?w=600&q=80" },
            { name: "Amalfi",   image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=600&q=80" }
        ],
        hotels: [
            { name: "Hotel Eden",     location: "Rome",     price: 550, rating: 4.8, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" },
            { name: "Gritti Palace",  location: "Venice",   price: 750, rating: 4.9, image: "https://images.unsplash.com/photo-1548966773-e5b7c5b3ba13?w=600&q=80" },
            { name: "Portrait Firenze",location:"Florence",  price: 480, rating: 4.7, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80" },
            { name: "Bulgari Hotel",  location: "Milan",    price: 820, rating: 4.9, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
            { name: "Santa Caterina", location: "Amalfi",   price: 420, rating: 4.8, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" }
        ],
        coords: [41.8719, 12.5674],
        reviews: []
    },

    usa: {
        id: "usa", name: "United States", region: "americas", capital: "Washington D.C.",
        rating: 4.6, visitors: "79M", price: 200, currency: "USD",
        timezone: "GMT-5", temperature: "+22°C", safety: "High",
        description: "The USA offers incredible diversity from New York's electric energy to California's golden beaches and the Grand Canyon's vastness. Experience world-class entertainment, diverse cuisines, iconic national parks, and legendary landmarks across 50 remarkable states.",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=80",
        cities: [
            { name: "New York",      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80" },
            { name: "Los Angeles",   image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&q=80" },
            { name: "San Francisco", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80" },
            { name: "Miami",         image: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=600&q=80" },
            { name: "Chicago",       image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80" }
        ],
        hotels: [
            { name: "The Plaza",              location: "New York",      price: 650, rating: 4.8, image: "https://images.unsplash.com/photo-1549294413-26f195200463?w=600&q=80" },
            { name: "Beverly Hills Hotel",    location: "Los Angeles",   price: 780, rating: 4.9, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80" },
            { name: "Fairmont San Francisco", location: "San Francisco", price: 420, rating: 4.7, image: "https://images.unsplash.com/photo-1506059612708-99d6128a4ace?w=600&q=80" },
            { name: "Mandarin Oriental",      location: "Miami",         price: 560, rating: 4.8, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80" },
            { name: "Four Seasons Chicago",   location: "Chicago",       price: 480, rating: 4.7, image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=600&q=80" }
        ],
        coords: [37.0902, -95.7129],
        reviews: []
    },

    brazil: {
        id: "brazil", name: "Brazil", region: "americas", capital: "Brasília",
        rating: 4.5, visitors: "6M", price: 80, currency: "BRL",
        timezone: "GMT-3", temperature: "+28°C", safety: "Medium",
        description: "Brazil is the soul of South America, famous for Carnival, the Amazon rainforest, and stunning beaches. Rio de Janeiro offers the iconic Christ the Redeemer and Copacabana. Experience vibrant samba culture, world-famous music, incredible biodiversity, and the warmth of the Brazilian people.",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80",
        cities: [
            { name: "Rio de Janeiro", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80" },
            { name: "São Paulo",      image: "https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?w=600&q=80" },
            { name: "Salvador",       image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=80" },
            { name: "Manaus",         image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=600&q=80" },
            { name: "Florianópolis",  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" }
        ],
        hotels: [
            { name: "Copacabana Palace", location: "Rio",       price: 450, rating: 4.9, image: "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=600&q=80" },
            { name: "Hotel Unique",      location: "São Paulo", price: 380, rating: 4.7, image: "https://images.unsplash.com/photo-1563720223809-b2a67fd8e2a9?w=600&q=80" },
            { name: "Fasano Rio",        location: "Rio",       price: 520, rating: 4.8, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" },
            { name: "Tivoli Mofarrej",   location: "São Paulo", price: 290, rating: 4.6, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80" }
        ],
        coords: [-14.2350, -51.9253],
        reviews: []
    },

    egypt: {
        id: "egypt", name: "Egypt", region: "africa", capital: "Cairo",
        rating: 4.4, visitors: "13M", price: 60, currency: "EGP",
        timezone: "GMT+2", temperature: "+30°C", safety: "Medium",
        description: "Egypt, the land of pharaohs, offers a breathtaking journey through ancient history. Marvel at the Pyramids of Giza, cruise the legendary Nile, and explore the temples of Luxor and Karnak. The Red Sea coast provides world-class snorkeling and diving in crystal-clear waters.",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200&q=80",
        cities: [
            { name: "Cairo",           image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80" },
            { name: "Luxor",           image: "https://images.unsplash.com/photo-1566194305770-539a465b9c7a?w=600&q=80" },
            { name: "Aswan",           image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?w=600&q=80" },
            { name: "Sharm El-Sheikh", image: "https://images.unsplash.com/photo-1544098485-2a2f34e9b678?w=600&q=80" },
            { name: "Alexandria",      image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80" }
        ],
        hotels: [
            { name: "Marriott Mena House",  location: "Cairo",           price: 280, rating: 4.7, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80" },
            { name: "Hilton Luxor",         location: "Luxor",           price: 150, rating: 4.5, image: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&q=80" },
            { name: "Sofitel Aswan",        location: "Aswan",           price: 180, rating: 4.6, image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80" },
            { name: "Four Seasons Sharm",   location: "Sharm El-Sheikh", price: 320, rating: 4.8, image: "https://images.unsplash.com/photo-1535209039648-9b4dee3ac3b7?w=600&q=80" }
        ],
        coords: [26.8206, 30.8025],
        reviews: []
    },

    australia: {
        id: "australia", name: "Australia", region: "oceania", capital: "Canberra",
        rating: 4.7, visitors: "9M", price: 180, currency: "AUD",
        timezone: "GMT+10", temperature: "+25°C", safety: "Very High",
        description: "Australia is a continent of unique wildlife, stunning coastlines, and vibrant cities. Sydney's Opera House and Great Barrier Reef are bucket-list essentials. Explore the ancient red rock Outback, surf Bondi Beach, sip wine in the Barossa Valley, and enjoy the famous laid-back Aussie lifestyle.",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80",
        cities: [
            { name: "Sydney",    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80" },
            { name: "Melbourne", image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=80" },
            { name: "Brisbane",  image: "https://images.unsplash.com/photo-1529994645193-3e75dab0a0f7?w=600&q=80" },
            { name: "Perth",     image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=600&q=80" },
            { name: "Cairns",    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80" }
        ],
        hotels: [
            { name: "Park Hyatt Sydney",  location: "Sydney",    price: 650, rating: 4.9, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" },
            { name: "Crown Towers",       location: "Melbourne", price: 420, rating: 4.8, image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&q=80" },
            { name: "Sofitel Brisbane",   location: "Brisbane",  price: 280, rating: 4.6, image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&q=80" },
            { name: "COMO The Treasury",  location: "Perth",     price: 350, rating: 4.7, image: "https://images.unsplash.com/photo-1619494134808-1a0ebf9c9fa0?w=600&q=80" },
            { name: "Crystalbrook Flynn", location: "Cairns",    price: 220, rating: 4.5, image: "https://images.unsplash.com/photo-1614265929960-e2e7a1ee5aef?w=600&q=80" }
        ],
        coords: [-25.2744, 133.7751],
        reviews: []
    },

    thailand: {
        id: "thailand", name: "Thailand", region: "asia", capital: "Bangkok",
        rating: 4.6, visitors: "40M", price: 50, currency: "THB",
        timezone: "GMT+7", temperature: "+32°C", safety: "Medium",
        description: "Thailand is the Land of Smiles offering tropical beaches, ornate temples, and vibrant street life. Bangkok buzzes with energy while Phuket and Koh Samui deliver paradise-level beaches. Chiang Mai offers ancient temples and elephant sanctuaries. The street food is phenomenal everywhere you go.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
        cities: [
            { name: "Bangkok",    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&q=80" },
            { name: "Phuket",     image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80" },
            { name: "Chiang Mai", image: "https://images.unsplash.com/photo-1598935898639-33d885d54861?w=600&q=80" },
            { name: "Koh Samui",  image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80" },
            { name: "Krabi",      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80" }
        ],
        hotels: [
            { name: "Mandarin Oriental Bangkok", location: "Bangkok",    price: 380,  rating: 4.9, image: "https://images.unsplash.com/photo-1618441206600-a0e882c6a8e8?w=600&q=80" },
            { name: "Amanpuri",                  location: "Phuket",     price: 1200, rating: 5.0, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" },
            { name: "Anantara Chiang Mai",        location: "Chiang Mai", price: 220,  rating: 4.7, image: "https://images.unsplash.com/photo-1611315764756-64a0bc7de889?w=600&q=80" },
            { name: "Four Seasons Samui",         location: "Koh Samui", price: 680,  rating: 4.9, image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600&q=80" },
            { name: "Rayavadee Krabi",            location: "Krabi",     price: 550,  rating: 4.8, image: "https://images.unsplash.com/photo-1572601614399-c9a6baa2f5c7?w=600&q=80" }
        ],
        coords: [15.8700, 100.9925],
        reviews: []
    },

    spain: {
        id: "spain", name: "Spain", region: "europe", capital: "Madrid",
        rating: 4.7, visitors: "84M", price: 140, currency: "EUR",
        timezone: "GMT+1", temperature: "+22°C", safety: "High",
        description: "Spain enchants with its passionate culture, Gaudi's surreal architecture, and stunning landscapes. Barcelona's masterpieces, Madrid's world-class museums, Seville's flamenco, and sun-soaked Ibiza create unforgettable memories. Enjoy tapas, sangria, and the infectious Spanish way of life.",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80",
        cities: [
            { name: "Barcelona", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80" },
            { name: "Madrid",    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80" },
            { name: "Seville",   image: "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?w=600&q=80" },
            { name: "Granada",   image: "https://images.unsplash.com/photo-1568914504912-6e8e8b7e3aaa?w=600&q=80" },
            { name: "Ibiza",     image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80" }
        ],
        hotels: [
            { name: "Hotel Arts Barcelona", location: "Barcelona", price: 450, rating: 4.8, image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" },
            { name: "Ritz Madrid",          location: "Madrid",    price: 520, rating: 4.9, image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80" },
            { name: "Hotel Alfonso XIII",   location: "Seville",   price: 380, rating: 4.8, image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80" },
            { name: "Parador de Granada",   location: "Granada",   price: 290, rating: 4.7, image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80" },
            { name: "Seven Pines Ibiza",    location: "Ibiza",     price: 480, rating: 4.8, image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80" }
        ],
        coords: [40.4637, -3.7492],
        reviews: []
    },

    greece: {
        id: "greece", name: "Greece", region: "europe", capital: "Athens",
        rating: 4.8, visitors: "31M", price: 130, currency: "EUR",
        timezone: "GMT+2", temperature: "+25°C", safety: "High",
        description: "Greece is where ancient history meets Mediterranean paradise. Athens' magnificent Acropolis, Santorini's iconic sunsets, Mykonos's vibrant nightlife, and hidden Cretan villages create postcard-perfect memories. Enjoy legendary Mediterranean cuisine and warm Greek hospitality on 6,000 sun-drenched islands.",
        image: "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?w=1200&q=80",
        cities: [
            { name: "Athens",    image: "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?w=600&q=80" },
            { name: "Santorini", image: "https://images.unsplash.com/photo-1613395877344-13d4c79e4284?w=600&q=80" },
            { name: "Mykonos",   image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80" },
            { name: "Crete",     image: "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=600&q=80" },
            { name: "Rhodes",    image: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?w=600&q=80" }
        ],
        hotels: [
            { name: "Hotel Grande Bretagne", location: "Athens",    price: 480, rating: 4.9, image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&q=80" },
            { name: "Canaves Oia",           location: "Santorini", price: 850, rating: 5.0, image: "https://images.unsplash.com/photo-1499678329028-101435549a02?w=600&q=80" },
            { name: "Belvedere Hotel",       location: "Mykonos",   price: 620, rating: 4.8, image: "https://images.unsplash.com/photo-1573843981267-be1480e65a4d?w=600&q=80" },
            { name: "Blue Palace Crete",     location: "Crete",     price: 380, rating: 4.7, image: "https://images.unsplash.com/photo-1583349358049-64bb7c06c69c?w=600&q=80" },
            { name: "Elafos Hotel Rhodes",   location: "Rhodes",    price: 250, rating: 4.5, image: "https://images.unsplash.com/photo-1622978093890-a0ded5b71a55?w=600&q=80" }
        ],
        coords: [39.0742, 21.8243],
        reviews: []
    },

    turkey: {
        id: "turkey", name: "Turkey", region: "asia", capital: "Ankara",
        rating: 4.5, visitors: "51M", price: 70, currency: "TRY",
        timezone: "GMT+3", temperature: "+20°C", safety: "Medium",
        description: "Turkey bridges East and West, offering extraordinary history and landscapes. Istanbul's Hagia Sophia and Grand Bazaar, Cappadocia's magical hot air balloons, and the turquoise Mediterranean coast create truly unforgettable experiences. Turkish hospitality, cuisine, and culture are legendary worldwide.",
        image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80",
        cities: [
            { name: "Istanbul",   image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&q=80" },
            { name: "Cappadocia", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80" },
            { name: "Antalya",    image: "https://images.unsplash.com/photo-1549180030-48bf079fb38a?w=600&q=80" },
            { name: "Bodrum",     image: "https://images.unsplash.com/photo-1561501878-aabd62634533?w=600&q=80" },
            { name: "Pamukkale",  image: "https://images.unsplash.com/photo-1553194587-b010d08c6c56?w=600&q=80" }
        ],
        hotels: [
            { name: "Çırağan Palace",        location: "Istanbul",   price: 550, rating: 4.9, image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&q=80" },
            { name: "Museum Hotel Cappadocia",location: "Cappadocia", price: 380, rating: 4.8, image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=600&q=80" },
            { name: "Rixos Premium Belek",   location: "Antalya",    price: 280, rating: 4.7, image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80" },
            { name: "Mandarin Bodrum",       location: "Bodrum",     price: 720, rating: 4.9, image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
            { name: "Four Seasons Bosphorus",location: "Istanbul",   price: 820, rating: 5.0, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80" }
        ],
        coords: [38.9637, 35.2433],
        reviews: []
    },

    morocco: {
        id: "morocco", name: "Morocco", region: "africa", capital: "Rabat",
        rating: 4.4, visitors: "13M", price: 55, currency: "MAD",
        timezone: "GMT+1", temperature: "+24°C", safety: "Medium",
        description: "Morocco offers a mesmerizing blend of ancient medinas, Sahara Desert adventures, and stunning coastlines. Marrakech's vibrant souks, Fes's labyrinthine alleyways, and Chefchaouen's ethereal blue city create experiences unlike anywhere else. Rich Berber culture and legendary hospitality await every traveler.",
        image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=80",
        cities: [
            { name: "Marrakech",   image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80" },
            { name: "Fes",         image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80" },
            { name: "Chefchaouen", image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80" },
            { name: "Casablanca",  image: "https://images.unsplash.com/photo-1583010271580-b824f8670c57?w=600&q=80" },
            { name: "Sahara",      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80" }
        ],
        hotels: [
            { name: "La Mamounia",    location: "Marrakech", price: 650,  rating: 4.9, image: "https://images.unsplash.com/photo-1537625326007-5cf8e7b73079?w=600&q=80" },
            { name: "Royal Mansour",  location: "Marrakech", price: 1200, rating: 5.0, image: "https://images.unsplash.com/photo-1484821582734-6c6a0a9a4d01?w=600&q=80" },
            { name: "Riad Fes",       location: "Fes",       price: 280,  rating: 4.7, image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80" },
            { name: "Kasbah Tamadot", location: "Atlas Mtns",price: 480,  rating: 4.8, image: "https://images.unsplash.com/photo-1548702401-72b9f0e7fb2a?w=600&q=80" },
            { name: "Scarabeo Camp",  location: "Sahara",    price: 320,  rating: 4.7, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80" }
        ],
        coords: [31.7917, -7.0926],
        reviews: []
    },

    mexico: {
        id: "mexico", name: "Mexico", region: "americas", capital: "Mexico City",
        rating: 4.5, visitors: "45M", price: 85, currency: "MXN",
        timezone: "GMT-6", temperature: "+26°C", safety: "Medium",
        description: "Mexico blends ancient Mayan and Aztec civilizations with colonial architecture and Caribbean paradise. Cancun's powdery beaches, Mexico City's extraordinary food scene, Tulum's mystical cenotes and ruins, and Oaxaca's incredible gastronomy showcase this country's breathtaking diversity.",
        image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=80",
        cities: [
            { name: "Mexico City",   image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80" },
            { name: "Cancun",        image: "https://images.unsplash.com/photo-1552074291-ad4dfdc360d2?w=600&q=80" },
            { name: "Tulum",         image: "https://images.unsplash.com/photo-1598430111014-d2eb46861d75?w=600&q=80" },
            { name: "Oaxaca",        image: "https://images.unsplash.com/photo-1568838640672-d7d8ee45e7be?w=600&q=80" },
            { name: "Cabo San Lucas",image: "https://images.unsplash.com/photo-1602341879937-9e17cce6f3bb?w=600&q=80" }
        ],
        hotels: [
            { name: "Four Seasons CDMX",      location: "Mexico City", price: 480, rating: 4.9, image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&q=80" },
            { name: "Ritz-Carlton Cancun",    location: "Cancun",      price: 520, rating: 4.8, image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80" },
            { name: "Azulik Tulum",           location: "Tulum",       price: 380, rating: 4.7, image: "https://images.unsplash.com/photo-1567930014-3e0b4e1e1d0f?w=600&q=80" },
            { name: "Las Ventanas al Paraíso",location: "Cabo",        price: 900, rating: 5.0, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80" },
            { name: "Rosewood San Miguel",    location: "San Miguel",  price: 420, rating: 4.8, image: "https://images.unsplash.com/photo-1562280963-8a5475740a10?w=600&q=80" }
        ],
        coords: [23.6345, -102.5528],
        reviews: []
    },

    india: {
        id: "india", name: "India", region: "asia", capital: "New Delhi",
        rating: 4.3, visitors: "18M", price: 40, currency: "INR",
        timezone: "GMT+5:30", temperature: "+30°C", safety: "Medium",
        description: "India is a sensory explosion of colors, flavors, and ancient spirituality. The Taj Mahal, Rajasthan's magnificent palaces, Kerala's tranquil backwaters, and Goa's palm-fringed beaches showcase breathtaking diversity. Experience yoga, Ayurveda, and the incredible warmth of Indian hospitality.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
        cities: [
            { name: "New Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80" },
            { name: "Mumbai",    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80" },
            { name: "Jaipur",    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80" },
            { name: "Varanasi",  image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&q=80" },
            { name: "Kerala",    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80" }
        ],
        hotels: [
            { name: "The Oberoi New Delhi", location: "New Delhi", price: 320, rating: 4.8, image: "https://images.unsplash.com/photo-1555016751-e34b9a11b11c?w=600&q=80" },
            { name: "Taj Mahal Palace",     location: "Mumbai",    price: 380, rating: 4.9, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" },
            { name: "Rambagh Palace",       location: "Jaipur",    price: 480, rating: 4.9, image: "https://images.unsplash.com/photo-1483168527879-c66136b56105?w=600&q=80" },
            { name: "Svasara Jungle Lodge", location: "Karnataka", price: 220, rating: 4.6, image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80" },
            { name: "Niraamaya Retreats",   location: "Kerala",    price: 280, rating: 4.7, image: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=600&q=80" }
        ],
        coords: [20.5937, 78.9629],
        reviews: []
    },

    newzealand: {
        id: "newzealand", name: "New Zealand", region: "oceania", capital: "Wellington",
        rating: 4.9, visitors: "4M", price: 170, currency: "NZD",
        timezone: "GMT+12", temperature: "+18°C", safety: "Very High",
        description: "New Zealand is the world's greatest adventure playground with staggeringly beautiful landscapes. Milford Sound's majesty, Queenstown's adrenaline thrills, the rolling green Hobbiton hills, and volcanic Rotorua attract nature lovers worldwide. Perfect for hiking, skiing, bungee jumping, and Middle-earth exploration.",
        image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&q=80",
        cities: [
            { name: "Auckland",     image: "https://images.unsplash.com/photo-1507699622177-388898d9903d?w=600&q=80" },
            { name: "Queenstown",   image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=600&q=80" },
            { name: "Wellington",   image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&q=80" },
            { name: "Rotorua",      image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=600&q=80" },
            { name: "Christchurch", image: "https://images.unsplash.com/photo-1549918864-91df8e5e0c50?w=600&q=80" }
        ],
        hotels: [
            { name: "Huka Lodge",          location: "Taupo",      price: 950,  rating: 5.0, image: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=600&q=80" },
            { name: "Eichardt's Private", location: "Queenstown", price: 580,  rating: 4.9, image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80" },
            { name: "Park Hyatt Auckland", location: "Auckland",   price: 450,  rating: 4.8, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
            { name: "The Rees Hotel",      location: "Queenstown", price: 380,  rating: 4.7, image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80" },
            { name: "Blanket Bay Lodge",   location: "Glenorchy",  price: 1100, rating: 5.0, image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80" }
        ],
        coords: [-40.9006, 174.8860],
        reviews: []
    },

    southafrica: {
        id: "southafrica", name: "South Africa", region: "africa", capital: "Pretoria",
        rating: 4.5, visitors: "10M", price: 90, currency: "ZAR",
        timezone: "GMT+2", temperature: "+20°C", safety: "Medium",
        description: "South Africa offers the world's finest wildlife safaris, acclaimed wine estates, and spectacular coastlines. Cape Town's iconic Table Mountain, Kruger National Park's Big Five, the scenic Garden Route, and vibrant Soweto showcase the Rainbow Nation's extraordinary beauty and diversity.",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
        cities: [
            { name: "Cape Town",    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80" },
            { name: "Johannesburg", image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=600&q=80" },
            { name: "Kruger Park",  image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" },
            { name: "Stellenbosch", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
            { name: "Durban",       image: "https://images.unsplash.com/photo-1544144433-d50aff500b91?w=600&q=80" }
        ],
        hotels: [
            { name: "One&Only Cape Town",  location: "Cape Town",    price: 650,  rating: 4.9, image: "https://images.unsplash.com/photo-1540202404-a2a87834d073?w=600&q=80" },
            { name: "Saxon Hotel",         location: "Johannesburg", price: 420,  rating: 4.8, image: "https://images.unsplash.com/photo-1559827261-83679b1af30b?w=600&q=80" },
            { name: "Singita Ebony Lodge", location: "Kruger Park",  price: 1500, rating: 5.0, image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=600&q=80" },
            { name: "Delaire Graff",       location: "Stellenbosch", price: 480,  rating: 4.8, image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=600&q=80" },
            { name: "The Oyster Box",      location: "Durban",       price: 280,  rating: 4.6, image: "https://images.unsplash.com/photo-1601158935942-52255782d322?w=600&q=80" }
        ],
        coords: [-30.5595, 22.9375],
        reviews: []
    },

    vietnam: {
        id: "vietnam", name: "Vietnam", region: "asia", capital: "Hanoi",
        rating: 4.6, visitors: "18M", price: 45, currency: "VND",
        timezone: "GMT+7", temperature: "+28°C", safety: "High",
        description: "Vietnam captivates with emerald limestone karsts, terraced rice fields, and ancient lantern-lit towns. Halong Bay's mystical islands, Hoi An's golden atmosphere, and Ho Chi Minh City's electric energy create unforgettable memories. Vietnam's street food culture is among the very best in the world.",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80",
        cities: [
            { name: "Hanoi",            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80" },
            { name: "Ho Chi Minh City", image: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=600&q=80" },
            { name: "Hoi An",           image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80" },
            { name: "Halong Bay",       image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80" },
            { name: "Da Nang",          image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80" }
        ],
        hotels: [
            { name: "Sofitel Metropole Hanoi",   location: "Hanoi",  price: 280, rating: 4.8, image: "https://images.unsplash.com/photo-1566488935591-e0a4fb1c3c07?w=600&q=80" },
            { name: "Park Hyatt Saigon",         location: "HCMC",   price: 320, rating: 4.9, image: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=600&q=80" },
            { name: "Four Seasons Hoi An",       location: "Hoi An", price: 450, rating: 4.9, image: "https://images.unsplash.com/photo-1611095789843-b05e8d78196d?w=600&q=80" },
            { name: "Paradise Halong Cruise",    location: "Halong", price: 380, rating: 4.7, image: "https://images.unsplash.com/photo-1499936751029-44ae7dfd02b0?w=600&q=80" },
            { name: "InterContinental Da Nang",  location: "Da Nang",price: 260, rating: 4.6, image: "https://images.unsplash.com/photo-1615369794001-0a0898c2a4d0?w=600&q=80" }
        ],
        coords: [14.0583, 108.2772],
        reviews: []
    },

    switzerland: {
        id: "switzerland", name: "Switzerland", region: "europe", capital: "Bern",
        rating: 4.9, visitors: "12M", price: 250, currency: "CHF",
        timezone: "GMT+1", temperature: "+15°C", safety: "Very High",
        description: "Switzerland is Alpine perfection — pristine glacier lakes, snow-capped peaks, and picture-perfect villages. Zurich's cosmopolitan elegance, Interlaken's adventure sports, and Zermatt's legendary Matterhorn views deliver year-round magic. World-renowned for chocolate, watches, and the most breathtaking train journeys on Earth.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80",
        cities: [
            { name: "Zurich",     image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=600&q=80" },
            { name: "Geneva",     image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80" },
            { name: "Interlaken", image: "https://images.unsplash.com/photo-1541197371521-2a38f9db7c46?w=600&q=80" },
            { name: "Zermatt",    image: "https://images.unsplash.com/photo-1473862169591-9ba8d5b28f63?w=600&q=80" },
            { name: "Lucerne",    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80" }
        ],
        hotels: [
            { name: "Baur au Lac",         location: "Zurich",     price: 850, rating: 4.9, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
            { name: "Beau-Rivage Geneva",  location: "Geneva",     price: 680, rating: 4.8, image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&q=80" },
            { name: "Victoria-Jungfrau",   location: "Interlaken", price: 520, rating: 4.8, image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" },
            { name: "Mont Cervin Palace",  location: "Zermatt",    price: 720, rating: 4.9, image: "https://images.unsplash.com/photo-1442570468985-f63ed5de9086?w=600&q=80" },
            { name: "Palace Luzern",       location: "Lucerne",    price: 460, rating: 4.7, image: "https://images.unsplash.com/photo-1613415206752-8ba2cc48f9b7?w=600&q=80" }
        ],
        coords: [46.8182, 8.2275],
        reviews: []
    },

    uae: {
        id: "uae", name: "UAE", region: "asia", capital: "Abu Dhabi",
        rating: 4.6, visitors: "22M", price: 200, currency: "AED",
        timezone: "GMT+4", temperature: "+35°C", safety: "Very High",
        description: "The UAE dazzles with futuristic skylines and unparalleled luxury. Dubai's iconic Burj Khalifa, Abu Dhabi's magnificent Sheikh Zayed Mosque, thrilling desert safaris, and world-class shopping offer unique experiences. The UAE sets the global standard for modern luxury travel.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
        cities: [
            { name: "Dubai",          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" },
            { name: "Abu Dhabi",      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=600&q=80" },
            { name: "Sharjah",        image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=600&q=80" },
            { name: "Fujairah",       image: "https://images.unsplash.com/photo-1617142137117-e48c5d9ee7a2?w=600&q=80" },
            { name: "Ras Al Khaimah", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80" }
        ],
        hotels: [
            { name: "Burj Al Arab",      location: "Dubai",     price: 1500, rating: 5.0, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80" },
            { name: "Emirates Palace",   location: "Abu Dhabi", price: 680,  rating: 4.9, image: "https://images.unsplash.com/photo-1615715874051-786047e40c19?w=600&q=80" },
            { name: "Atlantis The Palm", location: "Dubai",     price: 520,  rating: 4.7, image: "https://images.unsplash.com/photo-1594563703937-fdc640497dcd?w=600&q=80" },
            { name: "Aman Dubai",        location: "Dubai",     price: 950,  rating: 5.0, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80" },
            { name: "Qasr Al Sarab",     location: "Abu Dhabi", price: 420,  rating: 4.8, image: "https://images.unsplash.com/photo-1619714253455-b07e555b7c37?w=600&q=80" }
        ],
        coords: [23.4241, 53.8478],
        reviews: []
    },

    singapore: {
        id: "singapore", name: "Singapore", region: "asia", capital: "Singapore",
        rating: 4.8, visitors: "19M", price: 180, currency: "SGD",
        timezone: "GMT+8", temperature: "+30°C", safety: "Very High",
        description: "Singapore is a breathtaking futuristic city-state where architecture meets tropical nature. Marina Bay Sands' iconic infinity pool, Gardens by the Bay's Supertrees, and legendary hawker centers create an experience unlike anywhere else. Exceptionally clean, safe, and wonderfully multicultural.",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
        cities: [
            { name: "Marina Bay",   image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80" },
            { name: "Sentosa",      image: "https://images.unsplash.com/photo-1634660040764-a2a87834d073?w=600&q=80" },
            { name: "Chinatown",    image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600&q=80" },
            { name: "Orchard Road", image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=80" },
            { name: "Little India", image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=600&q=80" }
        ],
        hotels: [
            { name: "Marina Bay Sands",  location: "Marina Bay", price: 550, rating: 4.8, image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80" },
            { name: "Raffles Singapore", location: "City Centre",price: 950, rating: 5.0, image: "https://images.unsplash.com/photo-1526295684528-34e7f3c99170?w=600&q=80" },
            { name: "Capella Singapore", location: "Sentosa",    price: 680, rating: 4.9, image: "https://images.unsplash.com/photo-1621544402532-78c3b5786816?w=600&q=80" },
            { name: "Andaz Singapore",   location: "Bugis",      price: 380, rating: 4.7, image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=600&q=80" },
            { name: "The St. Regis",     location: "Orchard",    price: 480, rating: 4.8, image: "https://images.unsplash.com/photo-1622219809260-ce065fc5277f?w=600&q=80" }
        ],
        coords: [1.3521, 103.8198],
        reviews: []
    }
};

function getCountryById(id) { return countriesData[id]; }
function getAllCountries() { return Object.values(countriesData); }
function getCountriesByRegion(region) {
    if (region === "all") return getAllCountries();
    return getAllCountries().filter(c => c.region === region);
}
