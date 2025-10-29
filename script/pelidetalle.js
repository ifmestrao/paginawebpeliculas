// Movie Details JavaScript
document.addEventListener('DOMContentLoaded', function() {
  loadMovieDetails();
  setupActionButtons();
});

// Datos extendidos de películas con toda la información
const moviesData = {
  24: {
    id: 24,
    title: "Jurassic World: El Renacer",
    year: 2025,
    poster: "imagenes/jurasic.jpg",
    rating: 6.1,
    quality: " Full HD Bluray",
    description: "Cinco años después de los eventos de Jurassic World Dominion, la ecología del planeta resulta inhóspita para los dinosaurios. Los que quedan se mantienen en entornos ecuatoriales. Las tres criaturas más grandes en esta biosfera tropical tienen la clave para una droga que tiene increíbles beneficios para la humanidad.",
    titles: "Jurassic World: El Renacer | Jurassic World: Renace | Jurassic World: Rebirth",
    genres: ["Acción" , "Aventura" , "Ciencia ficción" , "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Gareth Edwards",
    cast: ["Scarlett Johansson, Mahershala Ali, Jonathan Bailey, Rupert Friend, Manuel Garcia-Rulfo, Luna Blaise, David Iacono, Audrina Miranda, Philippine Velge, Bechir Sylvain"],
    trailerUrl: "",
    watchUrl: "https://drive.google.com/file/d/14VmBzK8uXfwQnwZqnixWFr8L8dU8YbMk/view?usp=sharing",
    downloadUrl: ""
  },
  23: {
    id: 23,
    title: "Capitán América: Un nuevo mundo",
    year: 2025,
    poster: "imagenes/captain-america.jpg",
    rating: 5.8, 
    quality: "Full HD Bluray",
    description: "Sam Wilson ha tomado oficialmente la responsabilidad de ser Capitán América. Después de reunirse con el recién elegido presidente de Estados Unidos, Sam se encuentra en medio de un incidente internacional. Debe descubrir la razón detrás de un nefasto plan antes de que la mente maestra tenga a todo el mundo viendo rojo.",
    titles: "Capitán América: Un nuevo mundo | Captain America: Brave New World",
    genres: ["Acción", "Aventura", "Ciencia ficción"],
    audio: "Latino y Inglés subtitulada",
    director: "Julius Onah",
    cast: ["Anthony Mackie, Harrison Ford, Danny Ramirez, Shira Haas, Carl Lumbly, Tim Blake Nelson, Giancarlo Esposito, Liv Tyler, Xosha Roquemore"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  22: {
    id: 22,
    title: "Estado eléctrico",
    year: 2025,
    poster: "imagenes/electric.jpg",
    rating: 6.1, 
    quality: "Full HD Bluray",
    description: "Una adolescente huérfana vive en una sociedad donde los robots conscientes de caricaturas y mascotas, que una vez sirvieron en paz entre los humanos, ahora viven en el exilio tras una rebelión fallida. Pronto ella se embarca en un viaje con un misterioso robot para encontrar a su hermano perdido, juntándose con un contrabandista y su curioso compañero.",
    titles: "Estado eléctrico | The Electric State",
    genres: ["Acción", "Aventura"],
    audio: "Latino y Inglés subtitulada",
    director: "Anthony Russo, Joe Russo",
    cast: ["Chris Pratt, Millie Bobby Brown, Woody Harrelson, Ke Huy Quan, Woody Norman, Ann Russo, Greg Cromer, Vince Pisani, Camrus Johnson, Juan Uribe Brandi"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  21: {
    id: 21,
    title: "Oni-Goroshi: Ciudad de los demonios",
    year: 2025,
    poster: "imagenes/oni.jpg",
    rating: 5.4,
    quality: "Full HD Bluray", 
    description: "Inculpado por el asesinato de su familia y dado por muerto, un ex sicario no se detendrá ante nada para obtener su venganza sobre, los demonios enmascarados que se han apoderado de su ciudad.",
    titles: "Oni-Goroshi: Ciudad de los demonios | Demon City | Oni Goroshi",
    genres: ["Acción", "Crimen", "Fantasía", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Seiji Tanaka",
    cast: ["Tôma Ikuta, Masahiro Higashide, Miou Tanaka, Ami Tôma, Tarô Suruga, Mai Kiryû, Naoto Takenaka, Takuma Otoo, Masanobu Takashima, Matsuya Onoe"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  20: {
    id: 20,
    title: "El conjuro 4: Últimos ritos",
    year: 2025,
    poster: "imagenes/conjuro4.jpg",
    rating: 6.3,
    quality: "Full HD Bluray", 
    description: "Los investigadores de lo paranormal Ed y Lorraine Warren toman un último y aterrador caso que involucra a misteriosas entidades que deben enfrentar, Trivia: La escalofriante historia de la familia Smurl; Será la última película de la serie El Conjuro con Ed y Lorraine. Otras películas podrían producirse pero sin ellos.Serie El Conjuro",
    titles: "El conjuro 4: Últimos ritos | Expediente Warren: El último rito | The Conjuring: Last Rites",
    genres: ["Terror", "Misterio", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Michael Chaves",
    cast: ["Patrick Wilson, Vera Farmiga, Mia Tomlinson, Ben Hardy, Steve Coulter, Rebecca Calder, Elliot Cowan, Beau Gadsdon, Kíla Lord Cassidy, John Brotherton, Shannon Kook"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  19: {
    id: 19,
    title: "Liga de la Justicia",
    year: 2024,
    poster: "imagenes/ligadejusticia.webp",
    rating: 8.2,
    quality: "HD",
    description: "Decidido a garantizar que el último sacrificio de Superman no fuera en vano, Bruce Wayne alinea fuerzas con Diana Prince con planes de reclutar un equipo de metahumanos para proteger al mundo de una amenaza inminente de proporciones catastróficas.",
    titles: "La Liga de la Justicia de Zack Snyder | Zack Snyder's Justice League",
    genres:["Acción", "Aventura", "Fantasía"],
    audio: "Latino e Inglés subtitulada",
    director: "Zack Snyder",
    cast: ["Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot, Ray Fisher, Jason Momoa, Ezra Miller, Willem Dafoe, Jesse Eisenberg, Jeremy Irons, Diane Lane, Connie Nielsen"],
    trailerUrl: "https://www.youtube.com/watch?v=1c66wfYbNEs",
    watchUrl: "https://drive.google.com/file/d/1HWc738L7aPLMQ9XKzejn762boIhJmIyv/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1HWc738L7aPLMQ9XKzejn762boIhJmIyv/view?usp=sharing"
  },
  18: {
    id: 18,
    title: "Mufasa: El rey león",
    year: 2024,
    poster: "imagenes/mufasa.jpg",
    rating: 6.7, 
    quality: " Full HD Bluray",
    description: "Mufasa, un cachorro de león perdido y solo, conoce a un comprensivo león llamado Taka, el heredero al linaje real. El encuentro fortuito pone en marcha un extenso viaje de un grupo de personajes en busca de su destino.",
    titles: "Mufasa: El rey león | Mufasa: The Lion King",
    genres: ["Aventura", "Animación", "Familiar", "Fantasía"],
    audio: "Latino y Inglés subtitulada",
    director: "Barry Jenkins",
    cast: ["Aaron Pierre, Kelvin Harrison Jr., Tiffany Boone, Kagiso Lediga, Preston Nyman, Blue Ivy Carter, John Kani, Mads Mikkelsen, Seth Rogen, Billy Eichner"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  17: {
    id: 17,
    title: "Kraven el cazado",
    year: 2024,
    poster: "imagenes/kraven.jpg",
    rating: 5.4,
    quality: "Full HD Bluray", 
    description: "La compleja relación de Kraven con su despiadado padre, Nikolai Kravinoff, lo lleva hacia un camino de venganza con consecuencias brutales, motivándolo a convertirse en no solo el mejor cazador del mundo, sino uno de los más temidos.",
    titles: "Kraven el cazador | Kraven the Hunter",
    genres: ["Acción", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "J.C. Chandor",
    cast: ["Aaron Taylor-Johnson, Ariana DeBose, Fred Hechinger, Alessandro Nivola, Christopher Abbott, Russell Crowe, Yuri Kolokolnikov, Levi Miller, Tom Reed"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  16: {
    id: 16,
    title: "Lift: Un robo de primera clase",
    year: 2024,
    poster: "imagenes/lift.jpg",
    rating: 5.5,
    quality: "Full HD Bluray", 
    description: "Un ladrón experimentado y su ex novia que es agente de la Interpol, forman un equipo para robar 500 millones de dólares en oro que está siendo transportado en el vuelo de pasajeros A380. Trivia: A $2000 la onza, el oro pesaría 7.8 toneladas.",
    titles: "Lift: Un robo de primera clase | Lift",
    genres: ["Acción", "Comedia", "Crimen", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "F. Gary Gray",
    cast: ["Kevin Hart, Gugu Mbatha-Raw, Sam Worthington, Vincent D'Onofrio, Úrsula Corberó, Billy Magnussen, Yun Jee Kim, Viveik Kalra, Jean Reno, Jacob Batalon"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  15: {
    id: 15,
    title: "Bad Boys: Hasta la muerte",
    year: 2024,
    poster: "imagenes/bad.jpg",
    rating: 7.7,
    quality: "Full HD Bluray", 
    description: "Después de que su difunto capitán Conrad Howard es acusado póstumamente de estar involucrado con la mafia mexicana, Mike Lowrey y Marcus Burnett buscan limpiar su nombre, solo para terminar ellos mismos como fugitivos de la ley mientras investigan el caso.",
    titles: "Bad Boys: Hasta la muerte | Bad Boys: Ride or Die",
    genres: ["Acción", "Aventura", "Comedia"],
    audio: "Latino y Inglés subtitulada",
    director: "Adil El Arbi, Bilall Fallah",
    cast: ["Will Smith, Martin Lawrence, Vanessa Hudgens, Alexander Ludwig, Paola Núñez, Eric Dane, Ioan Gruffudd, Jacob Scipio, Melanie Liburd, Tasha Smith"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  14: {
    id: 14,
    title: "Oppenheimer",
    year: 2023,
    poster: "imagenes/oppenheimer.webp",
    rating: 8.4,
    quality: "Full HD Bluray",
    description: "La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica. Durante la Segunda Guerra Mundial, el teniente Leslie Grove enlista al físico Oppenheimer para trabajar en el ultra confidencial Proyecto Manhattan. El equipo pasa años desarrollando y diseñando la bomba atómica. Su trabajo rinde frutos el 16 de julio de 1945 cuando son testigos de la primer explosión nuclear, cambiando el curso de la historia.",
    titles: "Oppenheimer",
    genres: ["Biografía", "Drama", "Historia"],
    audio: "Latino y Inglés subtitulada",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr., Alden Ehrenreich, Scott Grimes, Jason Clarke, Kurt Koehler, Tony Goldwyn, John Gowans, Macon Blair"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  13: {
    id: 13,
    title: "Megalodón 2: El gran abismo",
    year: 2023,
    poster: "imagenes/megalodon2.webp",
    rating: 6.8,
    quality: "Full HD",
    description: "Después de escapar del ataque de algo que él afirma era una criatura gigante durante un rescate submarino, Jonas Taylor debe enfrentar sus miedos y salvar a las personas atrapadas en un sumergible en el fondo del mar.",
    titles: "Megalodón 2: El Gran Abismo",
    genres: ["Acción", "Terror", "Ciencia ficción"],
    audio: "Latino y Inglés subtitulada",
    director: "Ben Wheatley",
    cast: ["Jason Statham, Bingbing Li, Rainn Wilson, Cliff Curtis, Winston Chao, Shuya Sophia Cai, Ruby Rose, Page Kennedy, Robert Taylor, Ólafur Darri Ólafsson, Masi Oka"],
    trailerUrl: "https://www.youtube.com/watch?v=7wuK5PhzcNY",
    watchUrl: "https://drive.google.com/file/d/1IRY3czDp_PVPLbuTRIyzs8RnTVNz_r05/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1IRY3czDp_PVPLbuTRIyzs8RnTVNz_r05/view?usp=sharing"
  },
  12: {
    id: 12,
    title: "Indiana Jones y el llamado del destino",
    year: 2023,
    poster: "imagenes/indiana jones.webp",
    rating: 5.9,
    quality: "Full HD",
    description: "El arqueólogo Indiana Jones deberá emprender otra aventura contra el tiempo para intentar recuperar un dial legendario que puede cambiar el curso de la historia. Acompañado por su ahijada, Jones pronto se encuentra enfrentándose a Jürgen Voller, un ex nazi que trabaja para la NASA.",
    titles: "Indiana Jones y el Dial del Destino",
    genres: ["Acción", "Aventura", "Fantasía"],
    audio: "Latino y Inglés subtitulada",
    director: "James Mangold",
    cast: ["Harrison Ford, Phoebe Waller-Bridge, Mads Mikkelsen"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  11: {
    id: 11,
    title: "Drácula: El último viaje del Demeter",
    year: 2023,
    poster: "imagenes/Fantasma.webp",
    rating: 6.1, 
    quality: "4K UHD",
    description: "El barco mercante Demeter está llevando cincuenta cajas sin marcar de Carpathia a Londres. Eventos extraños comienzan a ocurrirle a la tripulación minetras intentan sobrevivir el viaje por el océano, acechados cada noche por una presencia despiadada a bordo. Trivia: El director la describió como, básicamente Alien (1979) en un barco en 1897; Estuvo 20 años en desarrollo, con cambios de directores, escritores y el mismo guión varias veces; Basada en el capítulo de la clásica novela Drácula de Bram Stoker.",
    titles: "Drácula: Mar de sangre | El último viaje del Demeter ",
    genres: ["Fantasía", "Terror"],
    audio: "Latino y Inglés subtitulada",
    director: "André Øvredal",
    cast: ["Corey Hawkins, Aisling Franciosi, Liam Cunningham, David Dastmalchian, Chris Walley, Jon Jon Briones, Stefan Kapicic, Martin Furulund, Nikolai Nikolaeff"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  10: {
    id: 10,
    title: "Misión imposible: sentencia mortal",
    year: 2023,
    poster: "imagenes/mision imposible.webp",
    rating: 7.7, 
    quality: "Full HD Bluray",
    description: "Ethan Hunt y su equipo se embarcan en su misión más peligrosa: rastrear y recuperar una nueva arma que amenaza a toda la humanidad antes de que caiga en las manos equivocadas. Con el control por el futuro y el destino del mundo en juego, una mortal carrera por el mundo da comienzo. Confrontado por un misterioso y poderoso enemigo, Ethan debe considerar que nada importa más que esta misión, ni siquiera las vidas de quienes más le importan.",
    titles: "Misión: Imposible - Sentencia Morta",
    genres: ["Acción", "Aventura", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Christopher McQuarries",
    cast: ["Tom Cruise, Hayley Atwell, Ving Rhames, Simon Pegg, Rebecca Ferguson, Vanessa Kirby, Esai Morales, Pom Klementieff, Henry Czerny, Shea Whigham"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  9: {
    id: 9,
    title: "Implacable",
    year: 2023,
    poster: "imagenes/implacable.jpg",
    rating: 5.1, 
    quality: "Full HD Bluray",
    description: "Harry es un entrenador de lucha de secundaria que se recupera por la pérdida de su hija que fue asesinada en un brutal ataque. Cuando una de sus estudiantes desaparece de manera similar a su hija, Harry decide buscar a los hombres responsables por su secuestro y no se detendrá ante nada para rescatarla.",
    titles: "Implacable | Ruthless",
    genres: ["Acción", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Art Camacho",
    cast: ["Dermot Mulroney, Jeff Fahey, Mauricio Mendoza, Kesia Elwin, Tonantzin Esparza, Melissa Diaz, Texas Battle, Manu Intiraymi, Hani Al Naimi, Peter Nikkos"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  8: {
    id: 8,
    title: "Pecadores",
    year: 2025,
    poster: "imagenes/sinners.jpg",
    rating: 7.9, 
    quality: "Full HD Bluray",
    description: "Tratando de dejar sus vidas problemáticas en el pasado, dos hermanos gemelos regresan a su pueblo de infancia para empezar de nuevo, solo para descubrir que un mal aún más grande los está esperando para darles la bienvenida.",
    titles: "Pecadores | Sinners",
    genres: ["Acción", "Drama", "Terror", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Ryan Coogler",
    cast: ["Michael B. Jordan, Miles Caton, Saul Williams, Andrene Ward-Hammond, Jack O'Connell, Tenaj L. Jackson, Dave Maldonado, Aadyn Encalarde, Helena Hu, Yao"],
    trailerUrl: "",
    watchUrl: "",
    downloadUrl: ""
  },
  7: {
    id: 7,
    title: "Halloween: La noche final",
    year: 2022,
    poster: "imagenes/halloween.jpg",
    rating: 5.0,
    quality: "Full HD", 
    description: "Cuatro años después de los eventos de Halloween en 2018, Laurie decide liberarse del miedo y apreciar la vida. Pero cuando un joven es acusado de matar a un niño que cuidaba, enciende una cascada de violencia y terror que obligará a Laurie a finalmente confrontar el mal que no puede controlar, de una vez por todas.",
    titles: "Halloween: La noche final | Halloween Ends",
    genres: ["Drama", "Terror", "Misterio", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "David Gordon Green",
    cast: ["Jamie Lee Curtis, Andi Matichak, James Jude Courtney, Rohan Campbell, Will Patton, Jesse C. Boyd, Michael Barbieri, Destiny Moné, Joey Harris, Marteen"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  6: {
    id: 6,
    title: "Ferrari",
    year: 2023,
    poster: "imagenes/ferrari.jpg",
    rating: 6.5,
    quality: "Full HD", 
    description: "El ex piloto Enzo Ferrari, está en crisis. Durante los años 50, la bancarrota está por alcanzar a su compañía que junto con su esposa Laura construyeron 10 años antes. Su matrimonio tambalea por la muerte de su hijo, mientras Ferrari trata de reconocer a otro. La ambición de sus corredores los lleva al límite. Apuesta todo en una carrera, la traicionera carrera de 1000 millas a través de Italia, la Mille Miglia.",
    titles: "Ferrari",
    genres: ["Biografía", "Drama", "Historia"],
    audio: "Latino y Inglés subtitulada",
    director: "Michael Mann",
    cast: ["Adam Driver, Shailene Woodley, Giuseppe Festinese, Alessandro Cremona, Derek Hill, Leonardo Caimi, Penélope Cruz, Gabriel Leone, Michele Savoia, Jacopo Bruno"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  5: {
    id: 5,
    title: "Tren bala",
    year: 2022,
    poster: "imagenes/bullet.jpg",
    rating: 7.3,
    quality: "Full HD", 
    description: "Cinco sicarios que están a bordo de un tren bala descubren que sus misiones tienen algo en común. Con poca suerte, el asesino Ladybug está determinado en completar pacíficamente su trabajo después de muchas misiones descarriladas. Pero el destino tiene otros planes cuando su última misión lo pone en rumbo de colisión con otros adversarios letales de todo el mundo, en el tren más rápido del planeta.",
    titles: "Tren bala | Bullet Train",
    genres: ["Acción", "Comedia", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "David Leitch",
    cast: ["Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry, Andrew Koji, Hiroyuki Sanada, Michael Shannon, Sandra Bullock, Bad Bunny, Logan Lerman"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  4: {
    id: 4,
    title: "Turno de día",
    year: 2022,
    poster: "imagenes/day.jpg",
    rating: 6.2,
    quality: "Full HD", 
    description: "Un padre trabajador solo quiere proveer una buena vida para su lista niña de 8 años. Su trabajo mundano de limpiador de piscinas en el valle de San Francisco es una fachada para su verdadera fuente de ingresos: cazar y matar vampiros. Tratar de ganarse la vida podría matarlo.",
    titles: "Turno de día | Day Shift",
    genres: ["Acción", "Comedia", "Fantasía"],
    audio: "Latino y Inglés subtitulada",
    director: "J.J. Perry",
    cast: ["Jamie Foxx, Dave Franco, Natasha Liu Bordizzo, Meagan Good, Karla Souza, Steve Howey, Scott Adkins, Oliver Masucci, Snoop Dogg, Eric Lange, Peter Stormare"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  3: {
    id: 3,
    title: "Asesino sin memoria",
    year: 2022,
    poster: "imagenes/asesino.jpg",
    rating: 5.6,
    quality: "Full HD Bluray", 
    description: "Alex, un asesino a sueldo, descubre que se ha convertido en un blanco después de rehusarse a completar un trabajo para una peligrosa organización criminal. Con el sindicato del crimen y el FBI persiguiéndolo, Alex tiene las habilidades para mantenerse un paso por delante, excepto por una cosa: tiene un severo problema de pérdida de memoria, lo cual afecta cada uno de sus movimientos. Alex debe cuestionar cada una de sus acciones y en quién puede confiar realmente.",
    titles: "Asesino sin memoria | La memoria de un asesino | Memory",
    genres: ["Acción", "Crimen", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Martin Campbell",
    cast: ["Liam Neeson, Guy Pearce, Taj Atwal, Harold Torres, Ray Fearon, Monica Bellucci, Ray Stevenson, Mia Sanchez, Daniel De Bourg, Natalie Anderson, Rebecca Calder"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  2: {
    id: 2,
    title: "Depredador: La Presa",
    year: 2022,
    poster: "imagenes/",
    rating: 7.3,
    quality: "Full HD Bluray", 
    description: "La historia origen de Depredador en el mundo de la nación Comanche hace 300 años. Naru, una extremadamente hábil guerrera, descubre que la presa que está siguiendo es un altamente evolucionado alien con un arsenal tecnológicamente avanzado. Ella debe proteger a su tribu de uno de los primeros Depredadores que llega a la Tierra.",
    titles: "Depredador: La Presa | Predator: La presa | Prey",
    genres: ["Acción", "Drama", "Terror"],
    audio: "Latino y Inglés subtitulada",
    director: "Dan Trachtenberg",
    cast: ["Amber Midthunder, Dakota Beavers, Dane DiLiegro, Stormee Kipp, Michelle Thrush, Julian Black Antelope, Stefany Mathias, Bennett Taylor, Mike Paterson"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },
  1: {
    id: 1,
    title: "Rápidos y furiosos 9",
    year: 2021,
    poster: "imagenes/f9.jpg",
    rating: 5.2,
    quality: "Full HD Bluray", 
    description: "Dom Toretto lleva una vida apacible fuera del sistema con Letty y su hijo, el pequeño Brian, pero saben que siempre hay peligro. Esta vez, la amenaza forzará a Dom a confrontar a sus pecados del pasado si piensa salvar a quienes más le importan. Todo el equipo se une para detener al más hábil asesino y conductor que hayan enfrentado.",
    titles: "Rápidos y furiosos 9 | Fast & Furious 9 | F9: The Fast Saga",
    genres: ["Acción", "Crimen", "Suspenso"],
    audio: "Latino y Inglés subtitulada",
    director: "Justin Lin",
    cast: ["Vin Diesel, Michelle Rodriguez, Jordana Brewster, Tyrese Gibson, Ludacris, Nathalie Emmanuel, Charlize Theron, John Cena, Finn Cole, Sung Kang, Anna Sawai"],
    trailerUrl: "", 
    watchUrl: "",
    downloadUrl: ""
  },


  
  
};

function loadMovieDetails() {
  // Obtener el ID de la película desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id');
  
  if (!movieId || !moviesData[movieId]) {
    // Si no hay ID o no existe la película, redirigir al inicio
    window.location.href = 'index.html';
    return;
  }
  
  const movie = moviesData[movieId];
  
  // Actualizar el título de la página
  document.title = `${movie.title} - CineCalidad`;
  
  // Llenar los elementos con la información de la película
  document.getElementById('movie-poster').src = movie.poster;
  document.getElementById('movie-poster').alt = movie.title;
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-description').textContent = movie.description;
  document.getElementById('movie-titles').textContent = movie.titles;
  document.getElementById('movie-audio').textContent = movie.audio;
  document.getElementById('movie-quality').textContent = movie.quality;
  document.getElementById('movie-director').textContent = movie.director;
  
  // Crear las estrellas de rating
  createStarRating(movie.rating);
  
  // Crear los géneros
  createGenreTags(movie.genres);

  
  // Crear el elenco
  createCastList(movie.cast);
  
  // Configurar los enlaces de los botones
  setupMovieLinks(movie);
}

function createStarRating(rating) {
  const starsContainer = document.getElementById('movie-stars');
  const ratingText = document.getElementById('movie-rating');
  
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = (rating % 2) >= 1;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHTML = '';
  
  // Estrellas llenas
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star star"></i>';
  }
  
  // Media estrella
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt star"></i>';
  }
  
  // Estrellas vacías
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star star empty"></i>';
  }
  
  starsContainer.innerHTML = starsHTML;
  ratingText.textContent = `${rating}/10 de 34K votos`;
}

function createGenreTags(genres) {
  const genresContainer = document.getElementById('movie-genres');
  
  // Manejar diferentes formatos de géneros
  let genreArray = [];
  
  if (Array.isArray(genres)) {
    // Si ya es un array, usarlo directamente
    genreArray = genres;
  } else if (typeof genres === 'string') {
    // Si es string, separar por | o por comas
    if (genres.includes('|')) {
      genreArray = genres.split('|').map(g => g.trim());
    } else if (genres.includes(',')) {
      genreArray = genres.split(',').map(g => g.trim());
    } else {
      genreArray = [genres.trim()];
    }
  } else {
    genreArray = ['Sin género especificado'];
  }
  
  // Limpiar géneros vacíos o duplicados
  genreArray = genreArray.filter((genre, index, self) => 
    genre && genre.trim() !== '' && self.indexOf(genre) === index
  );
  
  // Crear enlaces separados por comas
  const genreLinks = genreArray.map(genre => {
    const genreClean = genre.trim();
    const category = getCategoryFromGenre(genreClean);
    return `<a class="genre-link" href="categorias.html?categoria=${category}">${genreClean}</a>`;
  });
  
  // Unir con comas
  genresContainer.innerHTML = genreLinks.join('');
}

function getCategoryFromGenre(genre) {
  const genreMap = {
    'Acción': 'accion',
    'Comedia': 'comedia',
    'Suspenso': 'suspenso',
    'Aventura': 'aventura',
    'Drama': 'drama',
    'Crimen': 'crimen',
    'Romance': 'romance',
    'Terror': 'terror',
    'Ciencia Ficción': 'ciencia-ficcion',
    'Ciencia ficción': 'ciencia-ficcion',
    'Biografía': 'drama',
    'Historia': 'drama',
    'Fantasía': 'aventura',
    'Misterio': 'suspenso',
    'Animación': 'aventura',
    'Familiar': 'aventura'
  };
  
  return genreMap[genre] || 'destacado';
}

function createCastList(cast) {
  const castContainer = document.getElementById('movie-cast');
  const castHTML = cast.map(actor => 
    `<span class="cast-member">${actor}</span>`
  ).join(', ');
  
  castContainer.innerHTML = castHTML;
}

/*
 
const genresContainer = document.getElementById('movie-genres');
  const genreTags = genres.map(genre => 
    `<a class="genre-tag" href="/peliculas?genero=${encodeURIComponent(genre)}">${genre}</a>`
  ).join('');
  
  genresContainer.innerHTML = genreTags;

  --

  const castContainer = document.getElementById('movie-cast');
  // Si cast es string, convertirlo a array
  const castArray = Array.isArray(cast) ? cast : cast.split(',').map(a => a.trim());
  
  // Tomar solo los primeros 3 actores para no hacer muy largo el listado
  const mainCast = castArray.slice(0, 3);
  
  const castHTML = mainCast.map(actor =>
    `<a class="cast-member" href="categorias.html?search=${encodeURIComponent(actor)}">${actor}</a>`
  ).join(', ');
  
  // Agregar "y más..." si hay más actores
  if (castArray.length > 3) {
    castContainer.innerHTML = castHTML + ` y <a href="categorias.html?search=${encodeURIComponent(castArray[0].split(' ')[0])}">más...</a>`;
  } else {
    castContainer.innerHTML = castHTML;
  }

*/

function setupMovieLinks(movie) {
  // Guardar las URLs en los botones para uso posterior
  document.getElementById('trailer-btn').dataset.url = movie.trailerUrl;
  document.getElementById('watch-online-btn').dataset.url = movie.watchUrl;
  document.getElementById('download-btn').dataset.url = movie.downloadUrl;
}

function setupActionButtons() {
  const trailerBtn = document.getElementById('trailer-btn');
  const watchBtn = document.getElementById('watch-online-btn');
  const downloadBtn = document.getElementById('download-btn');
  
  trailerBtn.addEventListener('click', function() {
    const url = this.dataset.url;
    if (url && url !== 'https://www.youtube.com/watch?v=example1') {
      window.open(url, '_blank');
    } else {
      alert('Trailer no disponible en este momento');
    }
  });
  
  watchBtn.addEventListener('click', function() {
    const url = this.dataset.url;
    if (url && url !== 'https://example.com/watch/1') {
      window.open(url, '_blank');
    } else {
      alert('Enlace de visualización no disponible en este momento');
    }
  });
  
  downloadBtn.addEventListener('click', function() {
    const url = this.dataset.url;
    if (url && url !== 'https://example.com/download/1') {
      window.open(url, '_blank');
    } else {
      alert('Enlace de descarga no disponible en este momento');
    }
  });
}