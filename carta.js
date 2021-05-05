const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`que comience el juego!`);
});
client.on('message', msg => {
let piropos = ["Mi amor por ti es tan grande que el mundo entero empezó a parecer chico.","Mi cielo, ahora también soy astronauta, pues a tu lado vivo en la luna.","Te vi y me dio hambre","si quieres salud y energia dame 3 besos al dia","Puedes quedarte con mi corazon pero devuelveme la vida con tus besos","Mi amor, ¿De quién eres? ¡Porque tu belleza, loca pero loca mal, me tiene!","que bonitos ojos tienes","quisiera ser tu sombra, para estar a tu lado todo el dia","QUE WAPO ESTAS!!!","estas soltero,solo pregunto","te como a besos","acaso estoy viendo un angel","rico rico"]

    switch (msg.content) {
        case "!list":
            const mensajeList = new Discord.MessageEmbed();
            mensajeList.setColor('#F61107')
            mensajeList.setAuthor(msg.author.username,msg.author.displayAvatarURL())
	        mensajeList.setTitle('Lista de comandos')
	        mensajeList.addFields(
                {name:"Verdad", value:"!v"},
                {name:"Verdad Hot", value:"!vh",inline: true},
                {name:"Reto", value:"!r",inline: true},
                {name:"Reto Hot", value:"!rh"},
                {name:"Modo Random", value:"!random",inline: true},
                {name:"Ver avatar", value:"!avatar", inline: true},
                {name:"Saludo bot", value:"!carta"},
                );
            msg.reply(mensajeList);
            break;
        case "!carta":
            msg.reply('Soy un bot diseñado para hacer reir a la gente, puedes jugar verdad o reto(esperamos tener pronto mas juegos para ti BEBE HERMOSO)');
            break;
        case "!v":
            const mensajeTruth = new Discord.MessageEmbed();
            mensajeTruth.setColor('#0099ff')
            mensajeTruth.setAuthor(msg.author.username,msg.author.displayAvatarURL())
	        mensajeTruth.setTitle('Verdad')
	        mensajeTruth.setDescription(truthDare(msg.content));
            mensajeTruth.setImage("https://i.pinimg.com/originals/c1/59/ae/c159aea2452114bf2d9dfe28b22a667b.jpg")
            msg.reply(mensajeTruth);
            break;
        case "!r":
            const mensajeR = new Discord.MessageEmbed();
            mensajeR.setColor('#09CF08')
            mensajeR.setAuthor(msg.author.username,msg.author.displayAvatarURL())
	        mensajeR.setTitle('Reto')
	        mensajeR.setDescription(truthDare(msg.content));
            mensajeR.setImage("https://cdn.alfabetajuega.com/wp-content/uploads/2020/08/rock-lee-780x405.jpg")
            msg.reply(mensajeR);
            break;
        case "!vh":
            const mensajeVH = new Discord.MessageEmbed();
            mensajeVH.setColor('#F10909')
            mensajeVH.setAuthor(msg.author.username,msg.author.displayAvatarURL())
	        mensajeVH.setTitle('Verdad Hot')
	        mensajeVH.setDescription(truthDare(msg.content));
            mensajeVH.setImage("https://i.pinimg.com/originals/9a/86/29/9a86292ed18d65e985dbd983fa80ebf5.jpg")
            msg.reply(mensajeVH);
            break;
        case "!rh":
            const mensajeRH = new Discord.MessageEmbed();
            mensajeRH.setColor('#F10909')
            mensajeRH.setAuthor(msg.author.username,msg.author.displayAvatarURL())
	        mensajeRH.setTitle('Reto Hot')
	        mensajeRH.setDescription(truthDare(msg.content));
            mensajeRH.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_tJWr_Svgm2OuGhpUmRRoP6t2vfVTeAwxg&usqp=CAU");
            msg.reply(mensajeRH);
            break;
        case "!random":
            const mensajeRandom = new Discord.MessageEmbed();
            mensajeRandom.setColor('#F61107')
            mensajeRandom.setAuthor(msg.author.username,msg.author.displayAvatarURL())
	        mensajeRandom.setTitle('Random¿?')
	        mensajeRandom.setDescription(truthDare(msg.content));
            mensajeRandom.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNDtFtue7w2nztaVpkrPt3_tqcxoK6R3VfAygvrzHKJ-V6MHpWcv7yYJaTA80qW8VSBE&usqp=CAU")
            msg.reply(mensajeRandom);
            break;
            case "!avatar":
                const mensajeAvatar = new Discord.MessageEmbed();
                mensajeAvatar.setColor('#0099ff')
                mensajeAvatar.setAuthor(msg.author.username)
                mensajeAvatar.setTitle('Verdad')
                mensajeAvatar.setDescription(piropos[Math.floor(Math.random()*piropos.length-1)]);
                mensajeAvatar.setImage(msg.author.displayAvatarURL())
                msg.reply(mensajeAvatar);
            
            break;
        default:
            break;
    }
});
let truth = ["pierdes turno","pierdes turno","pierdes turno","pierdes turno","pierdes turno","pierdes turno","pierdes turno","pierdes turno","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","Te toca random","Te toca random","Te toca random","Te toca random","Te toca random","Te toca random","Te toca random","Te toca random","¿Alguna vez has visto a alguien o alguien te ha visto desnudo/a por accidente?","¿Qué es lo peor que has hecho por celos?","¿Te  consideras una persona celosa?","¿Cómo rompiste con tu último novio o novia?"," ¿Perdonarías una infidelidad?"," ¿Cuál es la mayor mentira que has contado a tu pareja?","¿Quién tiene mejor físico de esta habitación?","¿Qué es lo peor que has hecho por dinero?","¿Cuál es  el insulto más extraño?","¿Cuál ha sido el piropo más extraño que te han lanzado?","¿Qué es lo peor que has hecho estando borracho?","¿Qué es lo más ridículo que te ha pasado por la calle?","¿Serías capaz de matar a alguien?","Si fueras otra persona, ¿Quién te gustaría ser?"," ¿Le mentirías a un amigo para no hacerle daño?","¿Qué es lo peor que le has dicho a tus padres?","¿Cuál es tu talento más raro?","¿Cuál es tu foto más vergonzosa?","¿Qué es lo más asqueroso que has comido?","¿Cuál ha sido la peor etapa de tu vida?","¿Qué es lo peor que has hecho por amor?"," ¿Qué harías si pudieras viajar en el tiempo?","¿Qué harías si tuvieras el poder de la invisibilidad?","¿Qué harías si fueras rico?","¿Cuál es la peor apuesta que has hecho?"," ¿Cuál es la broma más desagradable que has hecho?","¿Alguna vez has intentado ligar a través de una red social?","¿Qué es lo peor que has publicado en discord?","¿Alguna vez te ha arrestado la policía?","¿Hay algo que ocultes a tus padres?","¿Qué es lo más infantil que has hecho últimamente?","¿Prefieres ser feo y popular o bonito e impopular?","¿Alguna vez te has llenado el sujetador o las bragas?","¿A quién de esta ronda NO invitarías la próxima vez que jueguen","¿Con quién te encuentras más bella en la ronda? Ordenar todas las personas de lindo a feo.","¿Prefieres tatuarte el trasero o perforarte la lengua?","¿Cuál fue tu peor cita?","¿A que temes más?","Te mudas a una isla solitaria, ¿quién de la ronda llevas contigo?","¿Con qué jugador cambiarías de cuerpo por 1 semana y por qué?","¿Alguna vez has robado algo en el pasado?","¿Alguna vez has tenido contacto con drogas?","¿Te pasó algo embarazoso en una cita?","¿Quién en la mesa es probablemente el más delicado?","¿A quién en la ronda te gustaría más besar?","¿Dónde fue tu primer beso?","¿Qué jugador tiene las manos más bonitas?","¿Con qué estrella te gustaría tener una cita?","En el baño: ¿Doblar o enrollar el papel higiénico?","¿Cuántos hombres / mujeres ya has besado?","¿Qué buscas primero en un hombre y qué debes tener para que pienses: awwwww, genial!","¿Qué tiene que hacer un hombre / mujer para seducirte?","¿Qué te hace realmente bueno el sexo?","¿Qué es más importante en una relación - sexo o amor?","¿Cuál es la cosa más bonita que has experimentado con otra persona?","¿Cuál es la cosa más vergonzosa que has hecho?","¿Cuál crees que es tu mejor característica? ¿Y qué es lo peor?","Cuéntame un secreto de tu infancia","¿Cuál es tu mayor vicio (secreto)?","¿Cuál es la cosa más valiente que has hecho?","¿A quién en la ronda te gustaría encantar en un cerdo?","Si fueras ciego, ¿quién en la ronda sería tu perro guía?","Si fueras un dictador, ¿qué ley legislarías primero?","¿Cuál fue la experiencia más vergonzosa en tu tiempo escolar / tiempo de estudio / educación / el año pasado?","¿Cuál fue el mayor error de tu vida?","¿Alguna vez has estado enamorado de uno de los presentes?","Si fueras un vampiro, ¿a quién de nosotros morderías ahora?","¿Qué es lo que más te gusta de tu cuerpo y qué es lo más feo?"]
let truthHot = ["pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta libre","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","pregunta doble","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","ceder pregunta a otro jugador","Te toca random","Te toca random","Te toca random","Te toca random","Te toca random","Te toca random","pierdes turno","pierdes turno","pierdes turno","pierdes turno","pierdes turno","pierdes turno","¿Te gustaría alguna vez realizar un intercambio de pareja (swing)?","¿Tienes algún nombre o le dices de alguna manera específica a tu pene/vagina?","¿Hay algo a lo que le temas o que tengas miedo que suceda en la intimidad?","¿Cuál es la parte más sensible de tu cuerpo?","¿Te gusta que te tiren del cabello mientras lo haces?","¿Tendrías relaciones con alguien que no conoces pero te parece visualmente atractivo/a?","¿Cuándo fue la primera vez que te sentiste excitado y cómo fue?","¿Qué es lo que nunca quisieras probar en la cama?","¿Te gustaría tener sexo mientras manejas?","¿Cómo definirías o qué tendría que hacer una persona para ser buena en la cama?","¿Qué cosa te gustaría que hiciera p tu pareja te en la intimidad  que sería algo sumamente grato para ti?","¿Te gusta más tener relaciones durante la mañana o durante la noche?","¿Qué es lo más estúpido que le has hecho a tu pareja teniendo sexo?","¿Alguna vez has usado anticonceptivos de emergencia?","¿Cuál es la propuesta más indecente que te han hecho?","¿Utilizas juguetes sexuales?","¿Y entre comer y tener sexo?","¿Podrías definir el orgasmo en una palabra?","¿Qué palabras te excitan?","¿Has fingido un orgasmo?","¿Qué tipo de pornografía ves?","¿Tienes algún fetiche raro?","¿Con cuántas personas te has acostado?","¿Con qué frecuencia te masturbas?","¿En quién pensaste la última vez que te masturbaste?","¿Cómo fue tu último sueño erótico?","¿Cómo sería tu experiencia sexual perfecta?","¿Te dejarías ser salpicado por un hombre en la cara?","¿Alguna vez has engañado a alguien?","¿Alguna vez te han pillado en la masturbación?","¿Alguna vez escuchaste a tu hermana / hermano gemir?","¿Te quejas en el clímax?","¿Alguna vez has pagado por sexo?","¿Con quién tuviste el mejor sexo de tu vida?","¿Alguna vez has tenido relaciones sexuales con el mismo sexo?","¿En qué te gusta más pensar cuando te satisfaces?","¿Alguna vez has tenido sexo con un extraño? p.ej. de Tinder?","¿Cuál fue tu experiencia sexual más loca?","¿A quién le darías dinero para dormir contigo?","¿Quién en esta ronda crees que tienes el mejor sexo?","¿Qué es mejor - recortado o sin recortar?","¿Cuál es tu deseo secreto más desagradable?","¿Alguna vez has tenido cibersexo o sexo telefónico, y con quién?","¿Qué es lo más caliente que has hecho?","¿Cuál es tu posición favorita durante el sexo?","¿Qué es un tabú absoluto durante el sexo?","¿Alguna vez te has sentido satisfecho al pensar en uno de esta ronda?","¿Qué buscas primero en una mujer - senos, culo o cara?","¿Cuál es el momento más vergonzoso en el sexo que has tenido?","¿Alguna vez has tenido relaciones sexuales con un buen amigo?","¿Alguna vez has tenido un trío? ¿Y cómo te ha gustado?","¿Qué parte del cuerpo te excita más?","¿Cómo, dónde y con quién tuviste tu primera vez?","Si te tatuaste en el área genital, ¿qué sería allí?","¿Alguna vez has tenido un sueño erótico en el que ocurrió alguien de esta ronda?","¿Cuál es tu fantasía más oscura?","¿A quién de nuestra ronda te gustaría ver desnudo?"]
let dare= ["cambia foto de perfil","reto libre","reto libre","reto libre","reto libre","reto libre","reto libre","reto libre","reto libre","pierdes turno","pierdes turno","pierdes turno","dibuja un pene en tu frente","Compórtate como un pollo por 10 minutos.","Llama a una amiga y di que estás embarazada","Haz la mueca más divertida que puedas imaginar.","Hacer 5 flexiones","Muéstranos tu barriga","declarate a la persona que quiera el publico","ponte una foto de perfil que el publico elija","ponte lo que lpublico diga de estado","Habla 2 rondas largas solo en ingles","Intenta seducir a una persona de tu elección y ve tan lejos como quieras …","Véndame sus genitales como un producto del supermercado / tienda de electrónica / puesto de vegetales / concesionario.","Hacer una persona de su elección de la ronda de una propuesta de matrimonio","Hazlea alguien que elija el publico  una (desagradable / divertida / romántica) declaración de amor.","Compórtate como una prostituta o un estafador e intenta que alguien te compre."]
let dareHot = ["ceder reto a otro jugador","pierdes turno","reto libre","reto libre","reto libre","Llama a un desconocido y ofrece sexo por teléfono","Introduce la mamada perfecta con un plátano o pepino","Manda una foto de tu sosten o calzones"]
function  truthDare(msg){
    let num;
    switch (msg) {
        case "!v":
            console.log(truth.length);
            num = truth[Math.floor(Math.random()*truth.length-1)];
            break;
        case "!vh":
             console.log(truthHot.length);
             num = truthHot[Math.floor(Math.random()*truthHot.length-1)];
            break;
        case "!r":
            console.log(dare.length);
            num = dare[Math.floor(Math.random()*dare.length-1)];
            break;
        case "!rh":
            console.log(dareHot.length);
            num = dareHot[Math.floor(Math.random()*dareHot.length-1)];
            break;
        case "!random":
            num =  random();
            break;
        default:
            break;
    }
    return num;
    
}
function random() {
    let random = Math.floor(Math.random()*4);
    let num;
            console.log(random);
            switch (random) {
                case 0:
                    num = truth[Math.floor(Math.random()*truth.length-1)];
                    break;
                case 1:
                    num = truth[Math.floor(Math.random()*truth.length-1)];
                    break;
                case 2:
                    num = truthHot[Math.floor(Math.random()*truthHot.length-1)];
                    break;
                case 3:
                    num = dare[Math.floor(Math.random()*dare.length-1)];
                    break;
                case 4:
                    num = dare[Math.floor(Math.random()*dareHot.length-1)];
                    break;
                default:
                    break;
            }
            return num
}

client.login('ODM4NTgxOTU1MDEyMTk4NDUy.YI9MTg.e_ZqxbtFRFEiHwY22_WZQPdx2Rw');