exports.pasos =   [
  /*{
    "index":1,
    "pregunta":"Indique el firmware o sistema operativo que utiliza su dispositivo",
    "respuesta":"",
    "opciones":[],
    "tipo":"Libre",
    "fase":"General",
    "foto":"1.jpg",
    "alias":"versionFirm"
  },*/
  {
    "index":2,
    "pregunta":"¿Está actualizado?",
    "respuesta":"",
    "opciones":["Sí","No","No lo sé"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"2.png",
    "alias":"actualizado",
    "warning":"¡Cuidado! Tu dispositivo se encuentra desactualizado.",
    "consejo":"Debes actualizar tu dispositivo cuanto antes"
  },
  {
    "index":3,
    "pregunta":"¿Qué protocolos de comunicación utiliza el dispositivo?",
    "ayudapregunta":"Puedes buscar esta información en Internet, en la web del fabricante o en el manual del dispositivo",
    "respuesta":[],
    "opciones":["WiFi","Bluetooth LE","6LoWPAN","ZigBee","RFID","NFC","Z-Wave","Otros"],
    "ayuda":
    ["",
    "Son las siglas de Bluetooth Low Energy. Si tu dispositivo utiliza otras versiones de Bluetooth, selecciona también esta opción",
    "",
    "Es un protocolo que se emplea para interconectar dispositivos de la Internet de las Cosas a través de un hub o gestor de la red, sin necesidad de conectarse al router. Si tu dispositivo cumple con estas características es probable que emplee este protocolo.",
    "Es un protocolo que se implementa en los dispositivos mediante unas pegatinas identificadores, de manera similar a los QR. Si tu dispositivo cuenta con una de estas, probablemente utilice RFID",
    "Es el protocolo que se utiliza habitualmente a la hora de realizar pagos bancarios desde dispositivos móviles. Funciona a muy cortas distancias.",
    "Es un protocolo muy similar a ZigBee y se utiliza para lo mismo. Si tu dispositivo cumple con las características descritas en ZigBee, deberás revisar la ficha de especificaciones de tu dispositivo para conocer cuál de los dos protocolos utiliza.",
    ""],
    "tipo":"Check",
    "fase":"General",
    "foto":"3.png",
    "alias":"coms",
    "warning":"¡Cuidado! Tu dispositivo emplea el protocolo de comunicación RFID, el cuál resulta muy inseguro ante ataques físicos y a las etiquetas que utilizan.",
  },
  /*{
    "index":4,
    "pregunta":"¿Qué protocolo de transporte y red utiliza?",
    "respuesta":"",
    "opciones":["TCP/IP","UDP/IP"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"4.jpg",
    "alias":"transporteyred"
  },*/
  {
    "index":5,
    "pregunta":"¿Qué protocolos de seguridad utiliza?",
    "respuesta":[],
    "opciones":["TLS","SSL","IPSEC","Ninguno","No lo sé"],
    "ayuda":["Transport Layer Security. Es un protocolo de seguridad que se utiliza para la capa de transporte cuando se utiliza TCP.","Secure Socket Layer. Es un protocolo de seguridad que se utiliza para la capa de transporte cuando se utiliza TCP. ","Protocolo de seguridad asociado a la capa de red","",""],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"5.jpg",
    "alias":"seguridad",
    "warning":"¡Cuidado! Tu dispositivo no cuenta con protocolos de seguridad, la información que envías y que recibes puede estar en peligro y ser obtenida por terceras personas."
  },
  {
    "index":6,
    "pregunta":"¿El dispositivo se encuentra directamente conectado al router de la red o indirectamente?",
    "respuesta":"",
    "opciones":["Directamente","Indirectamente"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"6.jpg",
    "alias":"directamente",
    "warning":"¡Cuidado! Te en cuenta que tu dispositivo se conecta directamente a la red de tu hogar por lo que es más probable que sea objetivo de ataques que buscan infiltrarse en tu red."
  },
  {
    "index":7,
    "pregunta":"Indique la categoría del dispositivo",
    "ayudapregunta":"Si no tienes clara la categoría de tu dispositivo, puedes ver varios ejemplos de cada una en la ayuda de cada opción",
    "respuesta":"",
    "opciones":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "ayuda":[
    "Calefactores, aires acondicionados, bombillas, enchufes.",
    "Reproductores de música, altavoces, televisores",
    "Comederos para bebés o mascotas, camas inteligentes, monitor de presión arterial",
    "Repetidores de señal, gateways",
    "Dispositivos de control por voz, asistentes personales",
    "Frigoríficos, aspiradoras, máquinas de café",
    "Cerrojos inteligentes, cámaras de vigilancia",
    "Sensores de humedad, CO2, movimiento, temperatura"],
    "tipo":"Opciones",
    "fase":"General",
    "foto":"7.png",
    "alias":"categoria",
    "warning":["¡Cuidado! Tu dispositivo trata directamente con datos sensibles. La categoría "," está formada por un conjunto de dispositivos que tratan con información sensible y tu privacidad puede verse puesta en peligro."]
  },
  {
    "index":8,
    "pregunta":"¿Está conectado a una nube?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"8.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"conexnube"
  },
    {
    "index":9,
    "pregunta":"¿Envía datos a la nube?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"9.png",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"envnube",
    "warning":"¡Cuidado! Ten en cuenta que tu dispositivo envía datos a la nube por lo que trata de darle al dispositivo la información estrictamente necesaria para su funcionamiento.",
    "consejo":"Revisa los ajustes de privacidad de tu dispositivo para comprobar que datos está enviando a la nube"
  },
    {
    "index":10,
    "pregunta":"Indique las entradas físicas que tiene su dispositivo",
    "respuesta":[],
    "opciones":["USB","Ethernet","Corriente","Otras","No tiene"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"10.jpg",
    "categoria":["Entretenimiento","Utilidad para la red","Seguridad"],
    "alias":"entradas",
    "warning":"¡Cuidado! El protocolo USB es muy vulnerable si un atacante consigue insertar una memoria USB infectada en tu dispositivo.",
    "consejo":"No permitas que nadie desconocido inserte una memoria USB en tu dispositivo"
  },
  /*{
    "index":11,
    "pregunta":"¿Qué protocolos de comunicación por cable llevan asociadas esas entradas?",
    "respuesta":"",
    "opciones":[],
    "tipo":"Libre",
    "fase":"Especifica",
    "foto":"https://www.metalindustria.com/media/uploads/noticias/wwethernet.jpg",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Utilidad para la red","Seguridad"],
    "alias":"entradascom"
  },*/
    {
    "index":11,
    "pregunta":"¿Cuenta con algún tipo de sensor?",
    "ayudapregunta":"Los sensores de un dispositivo se encargan de recoger la información del entorno. Algunos ejemplos son: una cámara, un micrófono o un sensor de humedad",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"12.png",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"],
    "alias":"sensores"
  },
    {
    "index":12,
    "pregunta":"¿Cuenta con algún micrófono que le permita recibir órdenes por voz o con una cámara?",
    "respuesta":[],
    "opciones":["Micrófono","Cámara","Otros"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"13.jpeg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"],
    "alias":"microcam",
    "warning":["¡Cuidado! Tu dispositivo cuenta con un micrófono. Un atacante podría obtener audios que recoje el micrófono donde puede haber información privada. Además, si el dispositivo cuenta con reconocimiento por voz, el atacante podría ejecutar órdenes sobre este.","¡Cuidado! Tu dispositivo cuenta con una cámara. Si un atacante se hace con el poder de tu dispositivo puede obtener imágenes y vídeos tuyos y de tu hogar sin que te des cuenta."],
    "consejo":["Silencia el dispositivo o apágalo cuando no necesites de su uso. No situes otros dispositivos que reproduzcan audio cerca de tu dispositivo","Cubre la cámara o apaga el dispositivo cuando no necesites de su uso"]
  },
    {
    "index":13,
    "pregunta":"¿Cuenta con actuadores?",
    "ayudapregunta":"Los actuadores ejecutan acciones físicas en función de las órdenes que reciben. Por ejemplo, un robot aspirador cuenta con actuadores para absorber el polvo.",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"14.png",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad"],
    "alias":"actuadores",
    "warning":"¡Cuidado! Tu dispositivo tiene actuadores. Si un atacante toma el control del dispositivo, podrá ejectutar órdenes no deseadas sobre estos actuadores."
  },
    {
    "index":14,
    "pregunta":"¿Tiene algún botón físico?",
    "respuesta":[],
    "opciones":["ON/OFF","Reset","Volumen","Silenciar micrófono","Otros"],
    "tipo":"Check",
    "fase":"Especifica",
    "foto":"15.png",
    "categoria":["Gestión de recursos de energía","Entretenimiento","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"boton",
    "warning":"¡Cuidado! Tu dispositivo tiene micrófono pero no un botón para silenciarlo.",
    "consejo":"Apaga tu dispositivo cuando no lo estés usando"
  },
  {
    "index":15,
    "pregunta":"¿Se puede acceder remotamente al dispositivo a través de una aplicación?",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"16.png",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"remoto",
    "warning":"¡Cuidado! Tu dispositivo es accesible de manera remota, por lo que un atacante podría llegar a controlar tu dispositivo a distancia.",
    "consejo":"Si es posible, desactiva el acceso remoto en caso de que no vayas a utilizarlo"
  },
  {
    "index":16,
    "pregunta":"¿Cuenta con factor de doble autenticación?",
    "ayudapregunta":"El factor de doble autenticación es un sistema de seguridad en el que para el acceso se solicita, además de la contraseña, una segunda confirmación mediante distintos métodos (SMS, e-mail, etc)",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"17.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"dobleaut",
    "warning":"¡Cuidado! Tu dispositivo no cuenta con factor de doble autenticación. Este es una barrera para frenar a un atacante que se haga con tus credenciales de acceso.",
    "consejo":"Si es posible, actívalo en los ajustes de tu dispositivo"
  },
  {
    "index":17,
    "pregunta":"¿Está basada en open source?",
    "ayudapregunta":"Open source es un término que se emplea para referirse a una aplicación que está desarrollada de manera pública y su código es accesible por todos los usuarios",
    "respuesta":"",
    "opciones":["Sí","No"],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"18.png",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Ayuda para los cuidados de la casa","Seguridad","Sensores"],
    "alias":"opensource",
    "warning":"¡Cuidado! La app de tu dispositivo no está basada en open source. Las aplicaciones de código abierto están respaldas por la comunidad y es más improbable encontrar en ellas fallos de seguridad."
  },
  {
    "index":18,
    "pregunta":"¿Es accesible desde la web?",
    "respuesta":"",
    "opciones":["Sí, y utiliza HTTPS","Sí, pero no utiliza HTTPS","No"],
    "ayuda":["Comprueba si la url del sitio web comienza por \"https\"","",""],
    "tipo":"Opciones",
    "fase":"Especifica",
    "foto":"19.jpg",
    "categoria":["Gestión de recursos de energía","Salud y bienestar","Utilidad para la red","Interfaz máquina humano","Seguridad","Sensores"],
    "alias":"web",
    "warning":"¡Cuidado! Hoy en día, las web que no utilizan el protocolo HTTPS son muy vulnerables.",
    "consejo":"Evita acceder via web a la aplicación en la medida de lo posible"
  }
]