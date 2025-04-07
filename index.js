const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('¡Conexión exitosa! 🚀');
});

client.on('message', message => {
    const msg = message.body.toLowerCase(); // Convertir a minúsculas para evitar problemas de mayúsculas

    switch (msg) {
        case 'hola':
            client.sendMessage(
                message.from,
                'Hola, soy tu asistente virtual 🤖.\nElige cualquiera de estas opciones para resolver tu duda:\n1️⃣ ¿Cuáles son tus productos más vendidos?\n2️⃣ ¿Cuáles son los tamaños de tus jabones?\n3️⃣ ¿Si compro por mayoreo, obtengo algún descuento?\n4️⃣ ¿Cuentas con productos para toda ocasión?'
            );
            break;
        case '1':
            client.sendMessage(
                message.from,
                'Mis productos más vendidos son:\n1️⃣ Crema para manos 👐.\n2️⃣ Bálsamo labial 💋.\n3️⃣ Desmaquillante 🧼.\n4️⃣ Espuma limpiadora 🧽.'
            );
            break;
        case '2':
            client.sendMessage(
                message.from,
                'Los tamaños de los jabones son:\n1️⃣ Jabón de 100g 📏.\n2️⃣ Jabón de 80g 📏.\n3️⃣ Jabón de 50g 📏.'
            );
            break;
        case '3':
            client.sendMessage(
                message.from,
                '❌ No, lamentablemente no contamos con ningún descuento en compras por mayoreo.'
            );
            break;
        case '4':
            client.sendMessage(
                message.from,
                'Sí, contamos con productos para:\n1️⃣ Baby Shower 👶.\n2️⃣ San Valentín ❤️.\n3️⃣ Cumpleaños 🎂.\n4️⃣ Graduaciones 🎓.'
            );
            break;
        case 'gracias':
            client.sendMessage(
                message.from,
                'De nada, estoy aquí para resolver tus dudas 😊.'
            );
            break;
        default:
            client.sendMessage(
                message.from,
                '⚠️ Tu respuesta es inválida, por favor verifica la opción a elegir.'
            );
    }
});

client.initialize();
