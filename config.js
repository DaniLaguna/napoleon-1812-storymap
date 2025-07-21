var config = {
  style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  //accessToken: '94uwpe0qxW6KxJAFE3tI',
  showMarkers: false,
  useCustomLayers: false, //set true for enabling custom layers from sources.js
  use3dTerrain: false,
  inset: true, // if inset map is set to true, legend will be disabled.
  bookmarks: false,
  chapterReturn: true,
  logo: '',
  title: '1812: Napoleón y la Tragedia de Rusia',
  subtitle: 'Un viaje interactivo por la invasión que cambió el destino de Europa.',
  byline: 'Por Daniel Laguna',
  mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
  theme: 'dark',
  chapters: [
    {
      id: 'intro-europa',
      title: 'Europa en 1812',
      image: './assets/napoleon-emperador.jpg',
      caption: '"Primera distribución de la Legión de Honor en el campamento de Boulogne", 16 de agosto de 1804, Charles Etienne Pierre Motte (1785-1836), según Victor-Jean Adam (1801-1866), dominio público<br>',
      description: `
                <p>En 1812, Napoleón dominaba casi toda Europa Occidental.</p>
                <p>Después de diez años de guerras, se había extendido hegemónicamente por todo el continente europeo, desde la Península Ibérica hasta Rusia, entre regiones anexionadas al Imperio, estados satélites, y aliados forzosos.
                 Su <em>Grande Armée</em> era la fuerza militar más poderosa jamás reunida: más de <strong>600,000 hombres</strong>.</p>
                <p>Pero su ambición era insaciable. Rusia era el último obstáculo. Una apuesta arriesgada… contra un enemigo inmenso y un territorio implacable.</p>
                <p><strong>Napoleón era imparable, pero Rusia era un desafío gigantesco.</strong></p>
                <p>En este mapa interactivo, exploraremos la invasión de Rusia en 1812, una campaña que se convertiría en una tragedia épica.</p>`,
      location: {
        center: [15.0, 52.0],
        zoom: 3,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        { 'layer': 'ruta-invasion', opacity: 0 },
        { 'layer': 'ruta-retirada', opacity: 0 },
        { 'layer': 'ciudades-puntos', opacity: 0 }
      ],
      onChapterExit: []
    },
    {
      id: "zoom-europa",
      title: "Europa en 1812",
      alignment: 'right',
      description: `<p>Este mapa muestra la situación geopolítica de Europa en 1812 durante el apogeo del Imperio Napoleónico. Francia dominaba directa o indirectamente gran parte del continente a través de anexiones, estados satélite y alianzas.</p>
<p><strong>Leyenda:</strong></p>
<ul style="list-style: none; padding: 0;">
  <li><span style="background-color: #08306b; display: inline-block; width: 12px; height: 12px; margin-right: 5px;"></span>Territorio francés</li>
  <li><span style="background-color: #2171b5; display: inline-block; width: 12px; height: 12px; margin-right: 5px;"></span>Estados satélite</li>
  <li><span style="background-color: #deebf7; display: inline-block; width: 12px; height: 12px; margin-right: 5px;"></span>Aliados</li>
</ul>
`,
      location: {
        center: [10, 48], // [longitud, latitud]
        zoom: 3.5,
        pitch: 0,
        bearing: 0,
        duration: 1000
      },
      onChapterEnter: [
        { layer: "francia-imperial", opacity: 0.75 }
      ],
      onChapterExit: [
        { layer: "francia-imperial", opacity: 0.2 }
      ]
    },
    {
      id: 'ruta-completa',
      title: 'Avance y retirada: estrategia y territorio',
      description: '<p>La invasión se basó en el clásico modelo napoleónico: penetración rápida y decisiva. Pero el ejército ruso evitó la confrontación frontal, adoptando una estrategia de retirada continua, quemando cosechas y pueblos (táctica de tierra quemada).</p><p>En rojo podemos ver la línea de avance y en azul la línea de retirada.</p>',
      location: {
        center: [30, 54],
        zoom: 5,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        { layer: 'ruta-invasion', opacity: 1 },
        { layer: 'ruta-retirada', opacity: 0.5 },
        { layer: 'ciudades-puntos', opacity: 0.3 }
      ],
      onChapterExit: [
        { layer: 'ruta-retirada', opacity: 0.1 },
      ]
    },
    {
      id: 'kaunas',
      alignment: 'left',
      title: 'Kaunas - Inicio de la invasión (24 de junio de 1812)',
      image: './assets/cruzando_niemen.jpg',
      caption: '"El Cruce Jactado del Niemen al Inicio de la Campaña en 1812 por N. Bonaparte", de un dibujo de un oficial, grabado por John Heaviside Clark y Matthew Dubourg · English School, Private Collection / Bridgeman Images<br>',
      description: '<p>Napoleón cruza el río Niemen e inicia la invasión de Rusia con más de 422.000 soldados. Es el comienzo de la Campaña de Rusia.</p><p>Napoleón supervisó personalmente el cruce en Kaunas, con 422.000 soldados divididos en varios cuerpos para avanzar hacia el interior.</p>',
      location: {
        center: [23.8860, 54.8979],
        zoom: 8,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        { layer: 'ciudades-puntos', opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "vilna-avance",
      alignment: 'left',
      title: "Vilna (28 de junio de 1812)",
      location: {
        center: [
          25.2797,
          54.6872
        ],
        zoom: 8
      },
      description: "<p>Vilna cae rápidamente: los rusos se habían retirado, dejando campos quemados. Napoleón estableció un cuartel general en el palacio del gobernador, mientras el calor y la escasez de víveres empezaban a minar a la tropa</p>",
      onChapterEnter: [
        { layer: 'ciudades-puntos', opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "smorgoni",
      alignment: 'left',
      title: "Smorgoni (1 de julio de 1812)",
      location: {
        center: [
          26.4011,
          54.4794
        ],
        zoom: 10
      },
      description: "Napoleón reorganizó a sus fuerzas, pero la disentería, el calor y el agotamiento hacían mella rápidamente en el ejército, que empieza a reducirse.",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "molodexno",
      alignment: 'left',
      title: "Molodexno (4 de julio de 1812)",
      location: {
        center: [
          26.8436,
          54.3181
        ],
        zoom: 10
      },
      description: "La campaña avanzaba monótona hacia el este, sin enfrentamientos, perdiendo efectivos por enfermedad y deserción.",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "glubokoye",
      alignment: 'left',
      title: "Glubokoye (7 de julio de 1812)",
      location: {
        center: [
          27.6856,
          55.1386
        ],
        zoom: 8
      },
      description: "<p>Las condiciones logísticas son muy precarias. El ejército disminuye a 370.000 soldados.</p>",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "minsk",
      alignment: 'left',
      title: "Minsk (10 de julio de 1812)",
      location: {
        center: [
          27.559,
          53.9006
        ],
        zoom: 9
      },
      description: "Ciudad clave en la retaguardia. Se envían suministros desde aquí, pero los rusos habían destruido lo esencial. La logística estaba al límite.",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "orsha-avance",
      alignment: 'left',
      title: "Orsha (15 de julio de 1812)",
      location: {
        center: [
          30.4272,
          54.5082
        ],
        zoom: 8
      },
      description: "<p>La ofensiva continúa. El ejército avanza sin grandes combates, pero está ya muy por debajo de su fuerza inicial.</p>",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "smolensk-avance",
      alignment: 'left',
      title: "Smolensk (16 de agosto de 1812)",
      location: {
        center: [
          32.0453,
          54.7826
        ],
        zoom: 8
      },
      description: "Primera gran batalla: victoria francesa tras destruir gran parte de la ciudad (84% de daños). Fuerte resistencia rusa. La ciudad cae tras intensos combates. Napoleón pierde más de 20.000 hombres. El ejército ruso se retiró y Smolensk fue incendiada para evitar que cayera en manos francesas.</p><p>El ejército francés, aunque victorioso, había sufrido grandes pérdidas y la moral comenzaba a flaquear.</p>",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'borodino',
      alignment: 'left',
      title: 'Borodinó - Batalla decisiva (7 de septiembre de 1812)',
      image: './assets/Battle_of_Borodino_1812.png',
      caption: '"Battle of Borodino 1812" by Louis-François Lejeune (1822), dominio público.<br>',
      description: 'Batalla brutal y sangrienta. Los franceses ganan el campo pero no logran destruir al ejército ruso. El coste es altísimo. Solo 140.000 soldados permanecen. Hay una victoria táctica, pero la estrategia es cuestionada. La batalla de Borodinó es una de las más sangrientas de la historia, con más de 70.000 bajas combinadas.',
      location: {
        center: [35.8164, 55.5297],
        zoom: 8,
        pitch: 30,
        bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'moscu',
      alignment: 'right',
      title: 'Moscú - Objetivo alcanzado (14 de septiembre de 1812)',
      image: './assets/incendio-moscu.jpg',
      caption: '"Napoleón al mando de la Grande Armée en el incendio de Moscú de 1812", Adam Albrecht (1841), dominio público.<br>',
      description: '<p>El ejército de Napoleón entra en Moscú, pero la ciudad está vacía e incendiada por orden del gobernador Rostopchin. Sin rendición ni suministros, el ejército se estanca. La ciudad ardió durante varios días y la ocupación fue insostenible. Napoleón esperaba una rendición que nunca llegó.</p><p>El 7 de septiembre agobiado por los sucesos, Napoleón ordena abandonar la destruida ciudad de Moscú. Así comenzaba la desastrosa derrota del Gran Ejército.</p>',
      location: {
        center: [37.6173, 55.7558],
        zoom: 9,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: [
        { layer: 'ruta-invasion', opacity: 0.5 },
        { layer: 'ruta-retirada', opacity: 1 },
      ]
    },
    {
      id: "maloyaroslavets",
      alignment: 'right',
      title: "Maloyaroslavets (24 de octubre de 1812)",
      location: {
        center: [
          36.4667,
          55.0167
        ],
        zoom: 9
      },
      description: "<p>Los rusos bloquean la ruta sur. Napoleón se ve forzado a regresar por el camino ya devastado. Los Cosacos por poco apresaron a Napoleón; después de ese hecho, Napoleón cargó en su cuello un saquito con veneno.</p><p>Comienza la retirada definitiva. El ejército francés, debilitado y sin suministros, se enfrenta a un invierno implacable.</p>",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "vyazma",
      alignment: 'right',
      title: "Vyazma (3 de noviembre de 1812)",
      location: {
        center: [
          34.295,
          55.21
        ],
        zoom: 9
      },
      description: "<p>Ataque ruso a la retaguardia. Pérdidas severas. El ejército se reduce a 60.000 soldados. El frío arrecia; las temperaturas ya estaban cerca de -10°C.</p><p>El 4 de noviembre de 1812, la retirada se convirtió en huida del ejército de Napoleón. Por su parte Napoleón abandona a su ejército y huye en un trineo a París.</p>",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "smolensk-retirada",
      alignment: 'right',
      image: './assets/retirada-invierno.jpg',
      caption: '"Retirada de Napoleón de Moscú", Adolphe Yvon (1864), dominio público.<br>',
      title: "Smolensk (9 de noviembre de 1812)",
      location: {
        center: [
          32.0453,
          54.7826
        ],
        zoom: 9
      },
      description: "<p>El ejército regresa a Smolensk, pero los suministros son insuficientes. El hambre y el frío hacen estragos.</p><p>La ciudad, que había sido un punto estratégico clave durante la invasión, ahora se convierte en un símbolo de la tragedia de la campaña.</p>",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "orsha-retirada",
      alignment: 'right',
      title: "Orsha (14 de noviembre de 1812)",
      location: {
        center: [
          30.4272,
          54.5082
        ],
        zoom: 9
      },
      description: "<p>Napoleón ordena destruir puentes y materiales para obstaculizar al enemigo. Solo 28.000 soldados siguen en condiciones.</p>",
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'berezina',
      alignment: 'right',
      title: 'Berezina - Catástrofe (28 de noviembre de 1812)',
      description: '<p>Cruce catastrófico: construcción de puentes bajo fuego enemigo, miles de muertos, sólo 20.000 soldados sobreviven al cruce del río.</p><p>El cruce del río Berezina se convirtió en un símbolo de la tragedia de la campaña. Los soldados franceses, agotados y congelados, lucharon por cruzar el río mientras eran atacados por las fuerzas rusas.</p><p>La retirada se convirtió en una masacre, con miles de soldados congelados o ahogados. La Grande Armée había sido prácticamente destruida.</p>',
      location: {
        center: [28.9833, 54.8333],
        zoom: 8,
        pitch: 20,
        bearing: -20
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'vilna-final',
      alignment: 'right',
      image: './assets/vilna-final.jpg',
      caption: '"Vilna, Plaza del Mercado" (V. Timm, 1812), dominio público.<br>',
      title: 'Vilna - El fin de la campaña (6 de diciembre de 1812)',
      description: '<p>Sólo 10.000 soldados quedaron al cruzar el Niemen para regresar. La Grande Armée ha sido destruida.</p><p>Napoleón abandona la campaña. La invasión de Rusia se convierte en una tragedia épica, con más de 400.000 soldados muertos o desaparecidos.</p><p>La campaña de Rusia marcó el principio del fin del Imperio Napoleónico. La derrota en Rusia debilitó a Napoleón y abrió el camino para su eventual caída.</p>',
      location: {
        center: [25.2797, 54.6872],
        zoom: 9,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "sankey-retirada",
      alignment: "center",
      hidden: false,
      title: "El coste humano de la campaña",
      description: `
        <p>La siguiente gráfica de Sankey representa visualmente la dramática reducción del ejército napoleónico durante la campaña de Rusia en 1812. 
        Se parte de más de 400.000 soldados y se muestran las sucesivas pérdidas por batallas, enfermedades, frío y retirada. 
        Es un resumen impactante del coste humano de esta operación militar.</p><p>El azul indica avance y el rojo retirada. Pasa con el puntero del ratón por encima de cada elemento de color para conocer ciudad origen y destino, número de soldados y temperatura</p>
        <iframe src="sankey.html" width="100%" height="450" style="border:none;"></iframe>
      `,
      location: {
        center: [30.5, 55.5],
        zoom: 4,
        pitch: 0,
        bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      onChapterEnter: [],
      onChapterExit: []
    }
  ]
};