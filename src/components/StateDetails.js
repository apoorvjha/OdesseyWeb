/*import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Hooks to read URL and navigate
import { State } from 'country-state-city';
import { ArrowLeft, MapPin } from 'lucide-react';

const StateDetails = () => {
  const { stateCode } = useParams(); // Get "GA" from the URL
  const navigate = useNavigate();
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    // Find the specific state using the library
    const state = State.getStateByCodeAndCountry(stateCode, 'IN');
    setStateData(state);
  }, [stateCode]);

  if (!stateData) return <div className="p-10 text-center">Loading state details...</div>;

  // Mock data for "Places to Explore" (Since we don't have a real database yet)
  const places = [
    { name: "City Center Heritage", img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80" },
    { name: "National Park Safari", img: "https://images.unsplash.com/photo-1519955266818-0231b63402bc?auto=format&fit=crop&w=500&q=80" },
    { name: "Ancient Temple", img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=500&q=80" },
    { name: "Sunset Viewpoint", img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=500&q=80" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Header Image Banner *}
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=80" 
          alt={stateData.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">{stateData.name}</h1>
          <p className="text-xl opacity-90">Explore the beauty of India</p>
        </div>
        
        {/* Back Button *}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-24 left-10 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* 2. Description Section *}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About {stateData.name}</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Welcome to {stateData.name}, a region known for its rich cultural heritage and stunning landscapes. 
          Whether you are looking for spiritual peace, adventure in the wild, or a quiet retreat in nature, 
          {stateData.name} offers a sustainable travel experience like no other.
        </p>

        {/* 3. Places to Visit Grid *}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <MapPin className="mr-2 text-green-600" /> 
          Top Places to Visit in {stateData.name}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src={place.img} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-800">{place.name}</h4>
                <p className="text-sm text-green-600 font-medium mt-1">View Details →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default StateDetails;
*/

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { State } from 'country-state-city';
import { ArrowLeft, MapPin } from 'lucide-react';

// --- 1. THE DATA DATABASE ---
// We map the State Name (from the library) to your custom text.
const stateDescriptions = {
  "Andhra Pradesh": {
    desc: "Andhra Pradesh on India’s southeastern coast is often called the “Koh-i-Noor of India” for its wealth of natural and cultural attractions. The state’s landscape ranges from Bay of Bengal beaches to the misty hills of the Eastern Ghats, with tribal villages and coffee plantations nestled in the highlands. It has a rich heritage – remnants of 3rd‑century BCE Buddhist monuments at Amaravati speak to an ancient past.",
    places: [
      { name: "Tirumala Venkateswara Temple", detail: "Hilltop Vaishnavite shrine, one of the world’s richest and most-visited Hindu temples." },
      { name: "Araku Valley", detail: "Scenic Eastern Ghats hill station known for lush coffee estates, waterfalls and tribal culture." },
      { name: "Ancient Stupa of Amaravati", detail: "Ruins of a grand 3rd‑century BCE Buddhist stupa and university, emblematic of Andhra’s ancient Buddhist heritage." }
    ]
  },
  "Arunachal Pradesh": {
    desc: "Arunachal Pradesh (“Land of the Dawn-Lit Mountains”) is India’s far-northeast Himalayan state. Remote and mountainous, it is India’s least densely populated state, home to over 20 tribal peoples with distinct traditions. The state’s culture blends Buddhist, Hindu and animist influences.",
    places: [
      { name: "Tawang Monastery", detail: "Vast 17th‑century Tibetan Buddhist monastery (one of India’s largest) with spectacular mountain views." },
      { name: "Ziro Valley", detail: "Picturesque terraced valley famous for the Apatani tribal villages and an annual outdoor music festival." },
      { name: "Namdapha National Park", detail: "Biodiverse park in the eastern Himalaya, with rainforests, clouded leopards and the only tropical lowland evergreen forest in India." }
    ]
  },
  "Assam": {
    desc: "Assam spans the Brahmaputra valley in India’s northeast, famous for tea gardens and rich wildlife. The broad Brahmaputra River defines its fertile plains. Assam produces world-renowned black tea and silk, and it shelters two-thirds of the world’s one-horned rhinos.",
    places: [
      { name: "Kaziranga National Park", detail: "UNESCO World Heritage park famed for two-thirds of the world’s one-horned Indian rhinoceroses." },
      { name: "Majuli Island", detail: "World’s largest river island on the Brahmaputra, renowned for Assamese Vaishnavite Satras (monasteries) and tribal arts." },
      { name: "Kamakhya Temple", detail: "Ancient hilltop shrine to Goddess Kamakhya, a preeminent Shakti (Tantric) pilgrimage site." }
    ]
  },
  "Bihar": {
    desc: "Bihar in eastern India is a cradle of ancient history and religion. Its plains were the core of the Magadha Empire and the Mauryan-Gupta golden age. Bodh Gaya is the holiest Buddhist pilgrimage site, where Siddhartha Gautama attained enlightenment under the Bodhi Tree.",
    places: [
      { name: "Mahabodhi Temple", detail: "5th-century UNESCO-listed Buddhist shrine marking the Buddha’s enlightenment under the Bodhi tree." },
      { name: "Nalanda Ruins", detail: "Archaeological remains of a great 5th-century Buddhist university and monastery complex." },
      { name: "Rajgir", detail: "Ancient Magadha capital; features hot springs, Son Bhandar rock caves and historic Bihar Jain and Buddhist sites." }
    ]
  },
  "Chhattisgarh": {
    desc: "Chhattisgarh, in central India, is often called the “Sea of Green” for its extensive forests. It has a strong tribal identity and many waterfalls and caves. Bastar’s Chitrakote Falls (“Niagara of India”) is a dramatic horseshoe waterfall on the Indravati River.",
    places: [
      { name: "Chitrakote Falls", detail: "Horseshoe-shaped cascade (the widest waterfall in India) on the Indravati River." },
      { name: "Danteshwari Temple", detail: "Ancient Shakti shrine to Goddess Danteshwari, one of India’s 52 sacred Shakti Peethas." },
      { name: "Bhoramdeo Temple", detail: "11th-century Hindu temple noted for intricate erotic stone carvings, often compared to Khajuraho." },
      { name: "Kanger Valley National Park", detail: "Lush tropical park with Tirathgarh Falls and limestone caves." }
    ]
  },
  "Goa": {
    desc: "Goa, on India’s southwest coast, blends tropical beaches with a unique Indo-Portuguese heritage. It was a Portuguese colony for about 450 years, and today pastel-colored churches and fish curries reflect that legacy. Goa’s sandy shores and coconut groves make it a top beach destination.",
    places: [
      { name: "Basilica of Bom Jesus", detail: "16th-century Baroque church holding the tomb of St. Francis Xavier (UNESCO World Heritage site)." },
      { name: "Anjuna Beach", detail: "Lively beach known for its flea market, beach parties and water sports." },
      { name: "Dudhsagar Falls", detail: "Spectacular four-tiered waterfall in Bhagwan Mahavir Wildlife Sanctuary, surrounded by jungles." }
    ]
  },
  "Gujarat": {
    desc: "Gujarat, on India’s west coast, has India’s longest coastline and a storied trade history. It was home to ancient Indus Valley cities and celebrates vibrant folk traditions. The Kutch Salt Desert has ethereal white sands, and Gir Wildlife Sanctuary protects the world’s only wild Asiatic lions.",
    places: [
      { name: "Gir National Park", detail: "UNESCO-protected forest sanctuary, the sole habitat of India’s rare Asiatic lions." },
      { name: "Dholavira", detail: "Archaeological site of a major Harappan (Indus Valley) city (open-air ruins of granaries, reservoirs)." },
      { name: "Somnath Temple", detail: "Historic 12th-c. Shiva temple, one of India’s twelve Jyotirlinga shrines." },
      { name: "Rann of Kutch", detail: "Vast white salt desert, famous for the annual Rann Utsav festival under the full moon." }
    ]
  },
  "Haryana": {
    desc: "Haryana, in north India around Delhi, combines fertile plains with deep historical roots. It lies over the Sarasvati River basin and is mentioned in the Mahabharata. Today, Haryana’s villages celebrate lively Punjabi-Haryanvi folk culture.",
    places: [
      { name: "Kurukshetra", detail: "Legendary Mahabharata war site; features sacred lakes (Brahma Sarovar) and historic temples." },
      { name: "Pinjore Gardens", detail: "17th-century terraced Mughal garden near Chandigarh." },
      { name: "Rakhigarhi", detail: "Site of one of the largest Indus Valley (Harappan) cities, with an archaeology museum." }
    ]
  },
  "Himachal Pradesh": {
    desc: "Himachal Pradesh (“Snow-laden province”) is a Himalayan state of pine-clad mountains and hill resorts. Over two-thirds of the land is forested, studded with apple orchards and rhododendron blooms. The state is famed for trekking and wildlife.",
    places: [
      { name: "Shimla", detail: "Colonial-era mountain city (The Ridge, Viceregal Lodge) known for its mall road and panoramic views." },
      { name: "Manali", detail: "High-altitude resort town in Kullu Valley, gateway to Rohtang Pass and Lahaul-Spiti." },
      { name: "Dharamshala", detail: "Hill station complex that is the Tibetan diaspora center (home of the Dalai Lama)." },
      { name: "Great Himalayan National Park", detail: "UNESCO World Heritage park protecting pristine alpine ecosystems and wildlife." }
    ]
  },
  "Jharkhand": {
    desc: "Jharkhand is a plateau of forests, rivers and waterfalls. It is rich in mineral resources and tribal culture. The capital Ranchi has scenic surrounds and the Hundru and Dassam waterfalls. A major pilgrimage is at Deoghar’s Baba Baidyanath Temple.",
    places: [
      { name: "Baba Baidyanath Temple", detail: "One of India’s 12 Jyotirlinga temples (ancient Shiva shrine)." },
      { name: "Dassam Falls", detail: "Broad, multi-tiered waterfall on the Kanchi River, set in forested hills." },
      { name: "Palamu Tiger Reserve", detail: "Woodland park in the Chotanagpur plateau home to Bengal tigers and leopards." }
    ]
  },
  "Karnataka": {
    desc: "Karnataka in southern India offers a blend of tech cities and heritage sites. Its history ranges from ancient empires to modern innovation. The ruins of Vijayanagara at Hampi are famed for huge carved temples and palaces. The lush Western Ghats run along its west.",
    places: [
      { name: "Hampi", detail: "UNESCO World Heritage ruins of the 14th‑century Vijayanagara Empire (stone temples, royal pavilions)." },
      { name: "Mysore Palace", detail: "Lavishly decorated summer palace of the Wodeyar dynasty, illuminated at night." },
      { name: "Coorg", detail: "Misty hill region famous for coffee plantations, waterfalls (Iruppu) and Kodava culture." },
      { name: "Jog Falls", detail: "One of India’s highest plunge waterfalls, dropping dramatically from the Western Ghats." }
    ]
  },
  "Kerala": {
    desc: "Kerala, on India’s tropical Malabar coast, is renowned for its serene backwaters, palm beaches and Ayurvedic culture. Coconut groves, spice farms and tea hills paint its landscape. Its network of lakes, canals and the Vembanad Lake can be explored by traditional houseboat.",
    places: [
      { name: "Alleppey", detail: "Hub of the Kerala backwaters; famous for houseboat cruises on the Vembanad lagoon." },
      { name: "Munnar", detail: "Hill station set among vast tea gardens and shola forests." },
      { name: "Kochi", detail: "Historic coastal city (Fort Kochi) with a blend of Indian, Portuguese and Dutch architecture." },
      { name: "Periyar Wildlife Sanctuary", detail: "Protected area for elephants and tigers in the Western Ghats." }
    ]
  },
  "Madhya Pradesh": {
    desc: "Madhya Pradesh, in India’s heartland, has more UNESCO sites than any other state. Its terrain includes the Vindhya hills and Narmada valley. Medieval capitals have stunning forts and cenotaphs. It is also home to famous tiger reserves.",
    places: [
      { name: "Khajuraho Group of Monuments", detail: "10th-century Chandela-era temples known for their intricate erotic sculptures (UNESCO site)." },
      { name: "Sanchi Stupa", detail: "3rd-century BCE Buddhist stupa built by Emperor Ashoka (UNESCO World Heritage site)." },
      { name: "Bandhavgarh National Park", detail: "Tiger reserve with dense Sal forests and a hilltop fort." },
      { name: "Gwalior Fort", detail: "Massive hilltop fortress with palaces and temples, overlooking the city." }
    ]
  },
  "Maharashtra": {
    desc: "Maharashtra, on India’s western coast, stretches from the Arabian Sea to central India. It is famed for its UNESCO cave temples: Ajanta and Ellora, with ancient Buddhist, Hindu and Jain carvings. Hill stations dot the Sahyadri range, and forts of Shivaji’s Maratha Empire overlook lush valleys.",
    places: [
      { name: "Ajanta Caves", detail: "30 rock-cut Buddhist cave monuments (2nd century BCE – 5th century CE), adorned with murals (UNESCO site)." },
      { name: "Ellora Caves", detail: "34 multi-religious rock-cut temples (6th–10th c.) including the colossal Kailasa temple (UNESCO site)." },
      { name: "Gateway of India", detail: "Iconic 20th-century arch overlooking the Arabian Sea." },
      { name: "Shirdi Sai Baba Temple", detail: "Pilgrimage shrine of the 19th-c. saint Sai Baba, attracting devotees nationwide." }
    ]
  },
  "Manipur": {
    desc: "Manipur, nestled in the eastern Himalayas, is renowned for its classical Manipuri dance and polo heritage. Imphal (capital) sits near Loktak Lake – Northeast India’s largest freshwater lake, famous for its floating vegetation.",
    places: [
      { name: "Loktak Lake", detail: "Largest freshwater lake in NE India, known for floating phumdis and Sangai deer habitat." },
      { name: "Kangla Fort", detail: "Historic palace complex of Manipur’s kings, considered the cradle of Meitei civilization." },
      { name: "Imphal", detail: "Capital city with attractions like the Shri Govindaji Temple and Keibul Lamjao National Park on its doorstep." }
    ]
  },
  "Meghalaya": {
    desc: "Meghalaya, literally the “Abode of Clouds,” is famous for its lush subtropical forests and heavy monsoon rains. Its Khasi, Jaintia and Garo tribal cultures add to its uniqueness. Cherrapunji and Mawsynram receive some of the world’s highest rainfall.",
    places: [
      { name: "Cherrapunji", detail: "Perennially rainy town; see Nohkalikai Falls (India’s tallest plunge waterfall) and the living root bridges." },
      { name: "Dawki", detail: "Village on the India–Bangladesh border with the crystal-clear Umngot River." },
      { name: "Mawsmai Caves", detail: "Limestone cave network with impressive stalactite formations." }
    ]
  },
  "Mizoram": {
    desc: "Mizoram, in India’s far northeast, is a green, hilly state blanketed by bamboo and pine. The predominantly Christian Mizo people are known for dances like Cheraw (bamboo dance). Aizawl, the capital, is perched on a ridge with mountain views.",
    places: [
      { name: "Aizawl", detail: "Hilltop capital city known for its bazaars (Bara Bazar) and viewpoints (Hmuifang)." },
      { name: "Palak Lake", detail: "Picturesque lake set amid reedlands, ideal for boating and birdwatching." },
      { name: "Dampa Tiger Reserve", detail: "Thick evergreen forest sanctuary near Mizoram–Myanmar border, habitat for elephants and big cats." }
    ]
  },
  "Nagaland": {
    desc: "Nagaland is known for its vibrant tribal heritage and misty mountains. The 16 Naga tribes celebrate colorful festivals (Hornbill Festival) with dance and headgear. Kohima, the capital, holds a somber WWII Battle of Kohima Cemetery on a hill.",
    places: [
      { name: "Kohima War Cemetery", detail: "Memorial to soldiers of the 1944 Battle of Kohima, located on a scenic hilltop." },
      { name: "Khonoma Village", detail: "Historic Angami Naga village known for community conservation and scenic vistas." },
      { name: "Dzukou Valley", detail: "Serene high-altitude valley, famous for its flowers and as a trekking destination." }
    ]
  },
  "Odisha": {
    desc: "Odisha (formerly Orissa), on India’s eastern coast, is famed for its classical arts and temples. Bhubaneswar, the “City of Temples,” has hundreds of ancient shrines. The 13th-century Konark Sun Temple is sculpted like a giant stone chariot of the Sun God.",
    places: [
      { name: "Sun Temple", detail: "13th-century UNESCO-listed stone temple fashioned as a colossal chariot (Sun God’s temple)." },
      { name: "Jagannath Temple", detail: "12th-century temple of Lord Jagannath; site of the annual Rath Yatra (chariot festival)." },
      { name: "Chilika Lake", detail: "Vast coastal lagoon (over 1,100 km²) with flamingos and Irrawaddy dolphins; ideal for birdwatching." }
    ]
  },
  "Punjab": {
    desc: "Punjab, in northwestern India, is India’s “Land of Five Rivers” – a fertile agricultural state. It is the cradle of Sikhism. The Golden Temple in Amritsar is Sikhism’s holiest shrine. Punjab’s culture is exuberant, with harvest festivals and warrior-themed celebrations.",
    places: [
      { name: "Golden Temple", detail: "Sikhism’s holiest gurudwara; a gilded 16th-century shrine and pilgrims’ spiritual center." },
      { name: "Wagah Border", detail: "India–Pakistan border crossing famous for its daily flag-lowering ceremony with military pageantry." },
      { name: "Anandpur Sahib", detail: "Historic Sikh city; site of the Hola Mohalla festival and important gurdwaras." }
    ]
  },
  "Rajasthan": {
    desc: "Rajasthan, India’s largest state, is the desert land of royal forts, palaces and folk culture. The pink lanes of Jaipur, the blue houses of Jodhpur and the golden sandstone city of Jaisalmer capture its romance. Rural Rajasthan still celebrates folk music and dance.",
    places: [
      { name: "Amber Fort", detail: "Majestic hilltop fort and palace complex (UNESCO World Heritage, part of Rajasthan’s hill forts)." },
      { name: "Jaisalmer Fort", detail: "Living sandstone fort in the Thar Desert, housing shops, temples and guests." },
      { name: "Lake Palace", detail: "Opulent island palace on Lake Pichola, now a luxury hotel." },
      { name: "Pushkar", detail: "Ancient town with one of the few Brahma temples; famous for its annual camel and livestock fair." }
    ]
  },
  "Sikkim": {
    desc: "Sikkim, high in the eastern Himalayas, is India’s least populous state. It is a sanctuary of snow-capped peaks, Buddhist monasteries and alpine lakes. Mount Kanchenjunga (8586 m), the world’s third-highest peak, dominates its northern sky.",
    places: [
      { name: "Rumtek Monastery", detail: "Prominent 20th-century monastery of the Karma Kagyu lineage of Tibetan Buddhism." },
      { name: "Khangchendzonga National Park", detail: "High-altitude UNESCO biosphere park surrounding Mt. Kanchenjunga." },
      { name: "Tsomgo Lake", detail: "High-altitude glacial lake (Sikkim’s sacred lake), frozen in winter and emerald-blue in summer." }
    ]
  },
  "Tamil Nadu": {
    desc: "Tamil Nadu in southern India is famed for its Dravidian temple architecture and classical arts. The Great Living Chola Temples are 11th-century UNESCO World Heritage marvels. Cultural richness includes Bharatanatyam dance and Carnatic music.",
    places: [
      { name: "Brihadeeswara Temple", detail: "Immense 11th-century Chola Shiva temple (UNESCO Great Living Chola Temple)." },
      { name: "Meenakshi Amman Temple", detail: "Vast temple complex with towering gateway towers (gopurams) richly covered in sculpture." },
      { name: "Mahabalipuram Group", detail: "UNESCO site of 7th–8th-century Pallava rock-cut temples and monoliths on the Coromandel Coast." },
      { name: "Ooty", detail: "Popular hill station known for tea gardens, botanical gardens and scenic train rides." }
    ]
  },
  "Telangana": {
    desc: "Telangana is India’s newest state, centered on Hyderabad. Hyderabad blends royal history with modern IT. Its landmark is the Charminar. Nearby, Golconda Fort was a diamond-trade citadel of the Qutb Shahi sultans. Telangana’s culture features Telugu traditions and festivals.",
    places: [
      { name: "Charminar", detail: "Iconic 16th-century mosque/monument with four arches, symbol of old Hyderabad." },
      { name: "Golconda Fort", detail: "Grand 16th-century fortress and former capital of the Qutb Shahi dynasty." },
      { name: "Nagarjuna Sagar Dam", detail: "One of India’s largest masonry dams (also a bird sanctuary on the reservoir)." },
      { name: "Kaleshwaram Temple", detail: "New Shiva temple at the confluence of the Godavari and Pranhita rivers, major pilgrimage site." }
    ]
  },
  // --- UNION TERRITORIES ---
  "Andaman and Nicobar Islands": {
    desc: "The Andaman & Nicobar Islands are a tropical archipelago in the Bay of Bengal, famed for pristine beaches, turquoise waters and coral reefs. The islands’ forests are home to unique wildlife and indigenous tribes.",
    places: [
      { name: "Cellular Jail", detail: "Colonial-era prison (British penal colony), now a national memorial museum." },
      { name: "Radhanagar Beach", detail: "Powdery white-sand beach beside clear blue waters, consistently rated among Asia’s best." },
      { name: "Ross Island", detail: "Ruins of the old British administrative base, now a quiet island with gardens and fauna." }
    ]
  },
  "Chandigarh": {
    desc: "Chandigarh is India’s first modern planned city, designed by Le Corbusier. It serves as the capital of both Punjab and Haryana. Renowned for its architecture and greenery, it is spotlessly clean and pedestrian-friendly.",
    places: [
      { name: "Rock Garden", detail: "Vast open-air garden of sculptures and structures made from recycled materials." },
      { name: "Sukhna Lake", detail: "Scenic man-made lake at the foothills of the Himalayas, popular for boating." },
      { name: "Capitol Complex", detail: "UNESCO site comprising Le Corbusier-designed buildings and the Open Hand sculpture." }
    ]
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    desc: "This union territory combines the former Portuguese enclaves of Dadra & Nagar Haveli and Daman & Diu. It offers peaceful beaches, colonial forts and churches. The region’s distinct heritage and uncrowded beaches are gradually drawing tourists.",
    places: [
      { name: "Diu Fort", detail: "16th-century sea fort with a church inside, built by the Portuguese overlooking the Arabian Sea." },
      { name: "St. Jerome Church", detail: "Baroque-style church (16th century) in Daman with a mermaid motif fountain." },
      { name: "Silvassa", detail: "Administrative capital, known for tribal museums, gardens and Sri Satya Sai Baba ashram." }
    ]
  },
  "Delhi": {
    desc: "Delhi, India’s National Capital Territory, blends over a millennium of history with the dynamism of a modern metropolis. Old Delhi preserves Mughal heritage, while New Delhi features wide boulevards and landmarks.",
    places: [
      { name: "Red Fort", detail: "17th-century Mughal fortress-palace (UNESCO World Heritage)." },
      { name: "Qutub Minar", detail: "73-m tall 12th-century minaret, part of a medieval mosque complex (UNESCO site)." },
      { name: "Lotus Temple", detail: "Baháʼí house of worship, notable for its lotus-like flower architecture." },
      { name: "India Gate", detail: "Iconic war memorial arch (20th century) honoring Indian soldiers of WWI." }
    ]
  },
  "Jammu and Kashmir": {
    desc: "Jammu & Kashmir spans the snowy Himalayas and lush valleys. The Kashmiri portion is famed for alpine scenery: Dal Lake’s houseboats and Mughal gardens define Srinagar’s charm. Jammu city is known for the holy Vaishno Devi Shrine.",
    places: [
      { name: "Dal Lake", detail: "Famous lake with floating gardens and Houseboat accommodations, set against snow-capped mountains." },
      { name: "Vaishno Devi Temple", detail: "Sacred Hindu cave shrine on Trikuta Hills, one of the most-visited pilgrimage sites in India." },
      { name: "Shalimar Bagh", detail: "Persian-style Mughal terraced garden overlooking Dal Lake." }
    ]
  },
  "Ladakh": {
    desc: "Ladakh is a high-altitude frontier region of great deserts and Buddhist culture. Leh, its main town, is ringed by stark mountains and monasteries. The barren valleys of Nubra and Zanskar are famous for double-humped camels.",
    places: [
      { name: "Pangong Lake", detail: "High-altitude brackish lake (on the India-China border) known for its changing blue colors." },
      { name: "Hemis Monastery", detail: "Largest and wealthiest Ladakhi Buddhist monastery, hosting an annual masked festival." },
      { name: "Khardung La Pass", detail: "One of the world’s highest motorable roads (~5,359 m), gateway to Nubra Valley." },
      { name: "Leh Palace", detail: "17th-century royal palace with views over Leh city and Indus Valley." }
    ]
  },
  "Lakshadweep": {
    desc: "Lakshadweep is a union territory of 36 small coral islands off India’s southwest coast, known for their unspoiled beauty. The islands’ turquoise lagoons and white-sand beaches are ideal for snorkeling, diving and water sports.",
    places: [
      { name: "Agatti Island", detail: "Main transportation hub (small airport) with coral reefs ideal for scuba diving." },
      { name: "Bangaram Island", detail: "Serene closed atoll with clear shallow waters and abundant marine life." },
      { name: "Minicoy Island", detail: "Southernmost atoll with distinct Dhivehi culture and a picturesque lighthouse." }
    ]
  },
  "Puducherry": {
    desc: "Puducherry (formerly Pondicherry) is a union territory with French colonial roots. Its capital area has wide boulevards, mustard-yellow colonial villas and the famed Promenade Beach. South Indian Tamil culture blends with French flavors.",
    places: [
      { name: "French Quarter", detail: "District of pastel-coloured colonial villas, artisanal shops and café culture." },
      { name: "Promenade Beach", detail: "Scenic seaside esplanade with landmarks (Statue of Dupleix, old lighthouse)." },
      { name: "Auroville", detail: "International township focused on human unity; famous for its golden “Matrimandir” meditation dome." }
    ]
  }
};

// --- 2. THE COMPONENT ---
const StateDetails = () => {
  const { stateCode } = useParams();
  const navigate = useNavigate();
  const [stateName, setStateName] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. Get State Name from Code using the library
    const state = State.getStateByCodeAndCountry(stateCode, 'IN');
    
    if (state) {
      let name = state.name;
      
      // Fix for "Dadra and Nagar Haveli..." naming mismatch
      if (name.includes("Dadra")) name = "Dadra and Nagar Haveli and Daman and Diu";
      // Fix for "Jammu and Kashmir" if it comes as "Jammu & Kashmir"
      if (name.includes("Jammu")) name = "Jammu and Kashmir";

      setStateName(name);
      
      // 2. Look up the custom data
      // We look for a partial match if exact match fails
      const key = Object.keys(stateDescriptions).find(k => k === name || name.includes(k));
      setData(stateDescriptions[key] || null);
    }
  }, [stateCode]);

  if (!stateName) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Header Image Banner */}
      <div className="relative h-[400px]">
        <img 
          src={`https://source.unsplash.com/random/1200x500?${stateName},india,tourism`} 
          alt={stateName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{stateName}</h1>
          <p className="text-xl opacity-90 font-light">Incredible India</p>
        </div>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 md:left-10 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition border border-white/30"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* 2. Content Container */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-4">
            About {stateName}
          </h2>
          {data ? (
            <p className="text-gray-600 text-lg leading-relaxed">
              {data.desc}
            </p>
          ) : (
            <p className="text-gray-500 italic">
              Detailed description for {stateName} is coming soon.
            </p>
          )}
        </div>

        {/* 3. Places to Visit Grid */}
        <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <MapPin className="mr-2 text-green-600" /> 
          Top Destinations in {stateName}
        </h3>

        {data && data.places && data.places.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.places.map((place, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group h-full flex flex-col">
                
                {/* Image Area */}
                <div className="h-56 overflow-hidden relative bg-gray-200">
                  <img 
                    src={`https://source.unsplash.com/random/600x400?${place.name.split('(')[0]},india`} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <h4 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md pr-4">
                    {place.name}
                  </h4>
                </div>

                {/* Text Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {place.detail}
                  </p>
                  <button className="text-green-600 font-semibold text-sm hover:text-green-800 transition flex items-center mt-auto">
                    Explore Stays &rarr;
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="p-10 text-center bg-white rounded-xl shadow-sm">
            <p className="text-gray-500">Destination details are being curated for this state.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default StateDetails;