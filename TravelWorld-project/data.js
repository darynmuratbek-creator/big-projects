// Countries Data - 20+ Countries
const countriesData = {
    japan: {
        id: 'japan',
        name: 'Japan',
        region: 'asia',
        capital: 'Tokyo',
        rating: 4.8,
        visitors: '31M',
        price: 150,
        currency: 'JPY',
        timezone: 'GMT+9',
        temperature: '+18°C',
        safety: 'Very High',
        description: 'Japan is a fascinating blend of ancient traditions and cutting-edge modernity. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers an unforgettable experience. Enjoy world-class cuisine, beautiful cherry blossoms, and unique cultural experiences.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200',
        cities: [
            { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400' },
            { name: 'Kyoto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400' },
            { name: 'Osaka', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400' }
        ],
        hotels: [
            { name: 'Park Hyatt Tokyo', location: 'Tokyo', price: 450, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Ryokan Kuruma', location: 'Kyoto', price: 280, rating: 4.7, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' },
            { name: 'Hotel Nikko Osaka', location: 'Osaka', price: 180, rating: 4.5, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400' }
        ],
        coords: [36.2048, 138.2529],
        reviews: [
            { author: 'Alice Kim', rating: 5, text: 'Amazing culture and food! Tokyo is incredible.', date: '2024-01-15' },
            { author: 'Tom Brown', rating: 5, text: 'Best trip ever. Kyoto temples are breathtaking.', date: '2024-02-20' }
        ]
    },
    
    france: {
        id: 'france',
        name: 'France',
        region: 'europe',
        capital: 'Paris',
        rating: 4.7,
        visitors: '90M',
        price: 180,
        currency: 'EUR',
        timezone: 'GMT+1',
        temperature: '+15°C',
        safety: 'High',
        description: 'France is synonymous with romance, art, and gastronomy. Paris, the City of Light, houses iconic landmarks like the Eiffel Tower and Louvre Museum. Beyond the capital, explore the lavender fields of Provence, the beaches of the Riviera, and the wine regions of Bordeaux.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
        cities: [
            { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400' },
            { name: 'Nice', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400' },
            { name: 'Lyon', image: 'https://images.unsplash.com/photo-1567264563885-6c2f5ff95144?w=400' }
        ],
        hotels: [
            { name: 'Le Meurice', location: 'Paris', price: 850, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Hotel Negresco', location: 'Nice', price: 420, rating: 4.8, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' },
            { name: 'Villa Florentine', location: 'Lyon', price: 250, rating: 4.6, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400' }
        ],
        coords: [46.2276, 2.2137],
        reviews: [
            { author: 'Marie Dubois', rating: 5, text: 'Paris is always a good idea! Amazing food and wine.', date: '2024-01-10' }
        ]
    },
    
    italy: {
        id: 'italy',
        name: 'Italy',
        region: 'europe',
        capital: 'Rome',
        rating: 4.8,
        visitors: '65M',
        price: 160,
        currency: 'EUR',
        timezone: 'GMT+1',
        temperature: '+20°C',
        safety: 'High',
        description: 'Italy is a treasure trove of art, history, and culinary excellence. From the ancient ruins of Rome to the canals of Venice and the fashion capital Milan, every corner tells a story. Don\'t miss the Amalfi Coast and Tuscany\'s rolling hills.',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200',
        cities: [
            { name: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400' },
            { name: 'Venice', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400' },
            { name: 'Florence', image: 'https://images.unsplash.com/photo-1543429257-3eb0b65d9c13?w=400' }
        ],
        hotels: [
            { name: 'Hotel Eden', location: 'Rome', price: 550, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Gritti Palace', location: 'Venice', price: 750, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' },
            { name: 'Portrait Firenze', location: 'Florence', price: 480, rating: 4.7, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400' }
        ],
        coords: [41.8719, 12.5674],
        reviews: []
    },
    
    usa: {
        id: 'usa',
        name: 'United States',
        region: 'americas',
        capital: 'Washington D.C.',
        rating: 4.6,
        visitors: '79M',
        price: 200,
        currency: 'USD',
        timezone: 'GMT-5',
        temperature: '+22°C',
        safety: 'High',
        description: 'The USA offers incredible diversity, from New York\'s urban energy to California\'s beaches and the natural wonders of national parks. Experience world-class entertainment, diverse cuisines, and iconic landmarks across 50 states.',
        image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200',
        cities: [
            { name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400' },
            { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400' },
            { name: 'San Francisco', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400' }
        ],
        hotels: [
            { name: 'The Plaza', location: 'New York', price: 650, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Beverly Hills Hotel', location: 'Los Angeles', price: 780, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' },
            { name: 'Fairmont San Francisco', location: 'San Francisco', price: 420, rating: 4.7, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400' }
        ],
        coords: [37.0902, -95.7129],
        reviews: []
    },
    
    brazil: {
        id: 'brazil',
        name: 'Brazil',
        region: 'americas',
        capital: 'Brasília',
        rating: 4.5,
        visitors: '6M',
        price: 80,
        currency: 'BRL',
        timezone: 'GMT-3',
        temperature: '+28°C',
        safety: 'Medium',
        description: 'Brazil is the heart of South America, famous for Carnival, Amazon rainforest, and stunning beaches. Rio de Janeiro offers iconic Christ the Redeemer and Sugarloaf Mountain views. Experience vibrant culture, music, and warm hospitality.',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200',
        cities: [
            { name: 'Rio de Janeiro', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400' },
            { name: 'São Paulo', image: 'https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?w=400' },
            { name: 'Salvador', image: 'https://images.unsplash.com/photo-1570631572383-b2e5b8356dd9?w=400' }
        ],
        hotels: [
            { name: 'Belmond Copacabana Palace', location: 'Rio', price: 450, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Hotel Unique', location: 'São Paulo', price: 380, rating: 4.7, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [-14.2350, -51.9253],
        reviews: []
    },
    
    egypt: {
        id: 'egypt',
        name: 'Egypt',
        region: 'africa',
        capital: 'Cairo',
        rating: 4.4,
        visitors: '13M',
        price: 60,
        currency: 'EGP',
        timezone: 'GMT+2',
        temperature: '+30°C',
        safety: 'Medium',
        description: 'Egypt, the land of pharaohs, offers a journey through ancient history. Marvel at the Pyramids of Giza, cruise the Nile River, and explore the temples of Luxor. The Red Sea provides world-class diving opportunities.',
        image: 'https://images.unsplash.com/photo-1539650116455-251d9a063595?w=1200',
        cities: [
            { name: 'Cairo', image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400' },
            { name: 'Luxor', image: 'https://images.unsplash.com/photo-1566194305770-539a465b9c7a?w=400' },
            { name: 'Sharm El-Sheikh', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400' }
        ],
        hotels: [
            { name: 'Marriott Mena House', location: 'Cairo', price: 280, rating: 4.7, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Hilton Luxor', location: 'Luxor', price: 150, rating: 4.5, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [26.8206, 30.8025],
        reviews: []
    },
    
    australia: {
        id: 'australia',
        name: 'Australia',
        region: 'oceania',
        capital: 'Canberra',
        rating: 4.7,
        visitors: '9M',
        price: 180,
        currency: 'AUD',
        timezone: 'GMT+10',
        temperature: '+25°C',
        safety: 'Very High',
        description: 'Australia is a continent of unique wildlife, stunning beaches, and vibrant cities. Sydney Opera House and Great Barrier Reef are must-sees. Explore the Outback, surf at Bondi Beach, and enjoy laid-back Aussie lifestyle.',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200',
        cities: [
            { name: 'Sydney', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400' },
            { name: 'Melbourne', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400' },
            { name: 'Gold Coast', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400' }
        ],
        hotels: [
            { name: 'Park Hyatt Sydney', location: 'Sydney', price: 650, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Crown Towers', location: 'Melbourne', price: 420, rating: 4.8, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [-25.2744, 133.7751],
        reviews: []
    },
    
    thailand: {
        id: 'thailand',
        name: 'Thailand',
        region: 'asia',
        capital: 'Bangkok',
        rating: 4.6,
        visitors: '40M',
        price: 50,
        currency: 'THB',
        timezone: 'GMT+7',
        temperature: '+32°C',
        safety: 'Medium',
        description: 'Thailand is the Land of Smiles, offering tropical beaches, ornate temples, and vibrant street life. Bangkok buzzes with energy, while islands like Phuket and Koh Samui provide paradise beaches. Amazing food and friendly locals await.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200',
        cities: [
            { name: 'Bangkok', image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400' },
            { name: 'Phuket', image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400' },
            { name: 'Chiang Mai', image: 'https://images.unsplash.com/photo-1598935898639-33d885d54861?w=400' }
        ],
        hotels: [
            { name: 'Mandarin Oriental', location: 'Bangkok', price: 380, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Amanpuri', location: 'Phuket', price: 1200, rating: 5.0, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [15.8700, 100.9925],
        reviews: []
    },
    
    spain: {
        id: 'spain',
        name: 'Spain',
        region: 'europe',
        capital: 'Madrid',
        rating: 4.7,
        visitors: '84M',
        price: 140,
        currency: 'EUR',
        timezone: 'GMT+1',
        temperature: '+22°C',
        safety: 'High',
        description: 'Spain enchants with its passionate culture, stunning architecture, and diverse landscapes. Barcelona\'s Gaudi masterpieces, Madrid\'s art museums, and Seville\'s flamenco create unforgettable experiences. Enjoy tapas, siestas, and fiestas!',
        image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200',
        cities: [
            { name: 'Barcelona', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400' },
            { name: 'Madrid', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400' },
            { name: 'Seville', image: 'https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=400' }
        ],
        hotels: [
            { name: 'Hotel Arts', location: 'Barcelona', price: 450, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Ritz Madrid', location: 'Madrid', price: 520, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [40.4637, -3.7492],
        reviews: []
    },
    
    greece: {
        id: 'greece',
        name: 'Greece',
        region: 'europe',
        capital: 'Athens',
        rating: 4.8,
        visitors: '31M',
        price: 130,
        currency: 'EUR',
        timezone: 'GMT+2',
        temperature: '+25°C',
        safety: 'High',
        description: 'Greece is where ancient history meets Mediterranean beauty. Athens\' Acropolis, Santorini\'s sunsets, and Mykonos\' beaches create postcard-perfect memories. Enjoy Mediterranean cuisine and warm hospitality on 6,000 islands.',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4c79e4284?w=1200',
        cities: [
            { name: 'Athens', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400' },
            { name: 'Santorini', image: 'https://images.unsplash.com/photo-1613395877344-13d4c79e4284?w=400' },
            { name: 'Mykonos', image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?w=400' }
        ],
        hotels: [
            { name: 'Hotel Grande Bretagne', location: 'Athens', price: 480, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Canaves Oia', location: 'Santorini', price: 850, rating: 5.0, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [39.0742, 21.8243],
        reviews: []
    },
    
    turkey: {
        id: 'turkey',
        name: 'Turkey',
        region: 'asia',
        capital: 'Ankara',
        rating: 4.5,
        visitors: '51M',
        price: 70,
        currency: 'TRY',
        timezone: 'GMT+3',
        temperature: '+20°C',
        safety: 'Medium',
        description: 'Turkey bridges Europe and Asia, offering rich history and diverse landscapes. Istanbul\'s Hagia Sophia, Cappadocia\'s hot air balloons, and Mediterranean beaches await. Experience Turkish hospitality and cuisine.',
        image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200',
        cities: [
            { name: 'Istanbul', image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400' },
            { name: 'Cappadocia', image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=400' },
            { name: 'Antalya', image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=400' }
        ],
        hotels: [
            { name: 'Çırağan Palace', location: 'Istanbul', price: 550, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Museum Hotel', location: 'Cappadocia', price: 380, rating: 4.8, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [38.9637, 35.2433],
        reviews: []
    },
    
    morocco: {
        id: 'morocco',
        name: 'Morocco',
        region: 'africa',
        capital: 'Rabat',
        rating: 4.4,
        visitors: '13M',
        price: 55,
        currency: 'MAD',
        timezone: 'GMT+1',
        temperature: '+24°C',
        safety: 'Medium',
        description: 'Morocco offers exotic markets, stunning riads, and Sahara Desert adventures. Marrakech\'s medina, Fes\' ancient streets, and Chefchaouen\'s blue city create magical experiences. Rich culture and hospitality await.',
        image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200',
        cities: [
            { name: 'Marrakech', image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=400' },
            { name: 'Fes', image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400' },
            { name: 'Casablanca', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400' }
        ],
        hotels: [
            { name: 'La Mamounia', location: 'Marrakech', price: 650, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Royal Mansour', location: 'Marrakech', price: 1200, rating: 5.0, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [31.7917, -7.0926],
        reviews: []
    },
    
    mexico: {
        id: 'mexico',
        name: 'Mexico',
        region: 'americas',
        capital: 'Mexico City',
        rating: 4.5,
        visitors: '45M',
        price: 85,
        currency: 'MXN',
        timezone: 'GMT-6',
        temperature: '+26°C',
        safety: 'Medium',
        description: 'Mexico offers ancient Mayan ruins, colonial cities, and Caribbean beaches. Cancun\'s resorts, Mexico City\'s culture, and Oaxaca\'s cuisine showcase the country\'s diversity. Vibrant festivals and warm people welcome you.',
        image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200',
        cities: [
            { name: 'Cancun', image: 'https://images.unsplash.com/photo-1552074291-ad4dfdc360d2?w=400' },
            { name: 'Mexico City', image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400' },
            { name: 'Tulum', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400' }
        ],
        hotels: [
            { name: 'Ritz-Carlton Cancun', location: 'Cancun', price: 520, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Four Seasons CDMX', location: 'Mexico City', price: 480, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [23.6345, -102.5528],
        reviews: []
    },
    
    india: {
        id: 'india',
        name: 'India',
        region: 'asia',
        capital: 'New Delhi',
        rating: 4.3,
        visitors: '18M',
        price: 40,
        currency: 'INR',
        timezone: 'GMT+5:30',
        temperature: '+30°C',
        safety: 'Medium',
        description: 'India is a sensory explosion of colors, flavors, and spirituality. Taj Mahal, Rajasthan\'s palaces, and Kerala\'s backwaters showcase its diversity. Experience yoga, Ayurveda, and incredible hospitality.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200',
        cities: [
            { name: 'New Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400' },
            { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400' },
            { name: 'Jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400' }
        ],
        hotels: [
            { name: 'The Oberoi', location: 'New Delhi', price: 320, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Taj Mahal Palace', location: 'Mumbai', price: 380, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [20.5937, 78.9629],
        reviews: []
    },
    
    newzealand: {
        id: 'newzealand',
        name: 'New Zealand',
        region: 'oceania',
        capital: 'Wellington',
        rating: 4.9,
        visitors: '4M',
        price: 170,
        currency: 'NZD',
        timezone: 'GMT+12',
        temperature: '+18°C',
        safety: 'Very High',
        description: 'New Zealand is an adventure playground with stunning landscapes. Milford Sound, Queenstown\'s thrills, and Hobbiton attract nature lovers. Perfect for hiking, skiing, and Middle-earth exploration.',
        image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200',
        cities: [
            { name: 'Auckland', image: 'https://images.unsplash.com/photo-1507699622177-388898d9903d?w=400' },
            { name: 'Queenstown', image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400' },
            { name: 'Wellington', image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=400' }
        ],
        hotels: [
            { name: 'Huka Lodge', location: 'Taupo', price: 950, rating: 5.0, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Eichardt\'s', location: 'Queenstown', price: 580, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [-40.9006, 174.8860],
        reviews: []
    },
    
    southafrica: {
        id: 'southafrica',
        name: 'South Africa',
        region: 'africa',
        capital: 'Pretoria',
        rating: 4.5,
        visitors: '10M',
        price: 90,
        currency: 'ZAR',
        timezone: 'GMT+2',
        temperature: '+20°C',
        safety: 'Medium',
        description: 'South Africa offers wildlife safaris, wine country, and stunning coastlines. Cape Town\'s Table Mountain, Kruger National Park, and Garden Route showcase its beauty. Experience the Rainbow Nation\'s diversity.',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200',
        cities: [
            { name: 'Cape Town', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400' },
            { name: 'Johannesburg', image: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=400' },
            { name: 'Durban', image: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?w=400' }
        ],
        hotels: [
            { name: 'One&Only Cape Town', location: 'Cape Town', price: 650, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Saxon Hotel', location: 'Johannesburg', price: 420, rating: 4.8, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [-30.5595, 22.9375],
        reviews: []
    },
    
    vietnam: {
        id: 'vietnam',
        name: 'Vietnam',
        region: 'asia',
        capital: 'Hanoi',
        rating: 4.6,
        visitors: '18M',
        price: 45,
        currency: 'VND',
        timezone: 'GMT+7',
        temperature: '+28°C',
        safety: 'High',
        description: 'Vietnam captivates with emerald waters, terraced rice fields, and ancient towns. Halong Bay, Hoi An\'s lanterns, and Ho Chi Minh City\'s energy create lasting memories. Delicious street food everywhere.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200',
        cities: [
            { name: 'Hanoi', image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=400' },
            { name: 'Ho Chi Minh City', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400' },
            { name: 'Da Nang', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400' }
        ],
        hotels: [
            { name: 'Sofitel Legend', location: 'Hanoi', price: 280, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Park Hyatt Saigon', location: 'HCMC', price: 320, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [14.0583, 108.2772],
        reviews: []
    },
    
    switzerland: {
        id: 'switzerland',
        name: 'Switzerland',
        region: 'europe',
        capital: 'Bern',
        rating: 4.9,
        visitors: '12M',
        price: 250,
        currency: 'CHF',
        timezone: 'GMT+1',
        temperature: '+15°C',
        safety: 'Very High',
        description: 'Switzerland is Alpine perfection with pristine lakes and snow-capped peaks. Zurich\'s elegance, Interlaken\'s adventures, and Zermatt\'s Matterhorn offer year-round beauty. Precision, chocolate, and watches.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200',
        cities: [
            { name: 'Zurich', image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400' },
            { name: 'Geneva', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400' },
            { name: 'Lucerne', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=400' }
        ],
        hotels: [
            { name: 'Baur au Lac', location: 'Zurich', price: 850, rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Fairmont Le Montreux', location: 'Montreux', price: 580, rating: 4.8, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [46.8182, 8.2275],
        reviews: []
    },
    
    uae: {
        id: 'uae',
        name: 'UAE',
        region: 'asia',
        capital: 'Abu Dhabi',
        rating: 4.6,
        visitors: '22M',
        price: 200,
        currency: 'AED',
        timezone: 'GMT+4',
        temperature: '+35°C',
        safety: 'Very High',
        description: 'UAE dazzles with futuristic cities and luxury. Dubai\'s Burj Khalifa, Abu Dhabi\'s Sheikh Zayed Mosque, and desert safaris offer unique experiences. Shopping, entertainment, and innovation hub.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200',
        cities: [
            { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400' },
            { name: 'Abu Dhabi', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=400' },
            { name: 'Sharjah', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400' }
        ],
        hotels: [
            { name: 'Burj Al Arab', location: 'Dubai', price: 1500, rating: 5.0, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Emirates Palace', location: 'Abu Dhabi', price: 680, rating: 4.9, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [23.4241, 53.8478],
        reviews: []
    },
    
    singapore: {
        id: 'singapore',
        name: 'Singapore',
        region: 'asia',
        capital: 'Singapore',
        rating: 4.8,
        visitors: '19M',
        price: 180,
        currency: 'SGD',
        timezone: 'GMT+8',
        temperature: '+30°C',
        safety: 'Very High',
        description: 'Singapore is a futuristic city-state where nature meets urban innovation. Marina Bay Sands, Gardens by the Bay, and hawker centers offer unique experiences. Clean, efficient, and culturally diverse.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200',
        cities: [
            { name: 'Singapore City', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400' }
        ],
        hotels: [
            { name: 'Marina Bay Sands', location: 'Singapore', price: 550, rating: 4.8, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
            { name: 'Raffles Singapore', location: 'Singapore', price: 950, rating: 5.0, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' }
        ],
        coords: [1.3521, 103.8198],
        reviews: []
    }
};

// Helper functions
function getCountryById(id) {
    return countriesData[id];
}

function getAllCountries() {
    return Object.values(countriesData);
}

function getCountriesByRegion(region) {
    if (region === 'all') return getAllCountries();
    return getAllCountries().filter(c => c.region === region);
}