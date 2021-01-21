import vino1 from "../../assets/img/Felino-Malbec.jpg"
import vino2 from "../../assets/img/Felino-Cabernet.jpg"
import vino3 from "../../assets/img/Felino-Blend.jpg"
import vino4 from "../../assets/img/Felino-Chardonnay.jpg"
import vino5 from "../../assets/img/Cocodrilo-Blend.jpg"
import vino6 from "../../assets/img/Bramare-LC-Cabernet.jpg"
import vino7 from "../../assets/img/Bramare-LC-Malbec.jpg"
import vino8 from "../../assets/img/Bramare-Patagonia-PinotNoir.jpg"
import vino9 from "../../assets/img/Bramare-VU-Chardonnay.jpg"
import vino10 from "../../assets/img/Bramare-VU-Cabernet.jpg"
import vino11 from "../../assets/img/Bramare-VU-Malbec.jpg"
import vino12 from "../../assets/img/Bramare-VU-PinotNoir.jpg"
import vino13 from "../../assets/img/Bramare-Chañares-CabernetFranc.jpg"
import vino14 from "../../assets/img/Bramare-Chañares-Malbec.jpg"
import vino15 from "../../assets/img/Bramare-LosArbolitos-Chardonnay.jpg"
import vino16 from "../../assets/img/Bramare-Marchiori-Chardonnay.jpg"
import vino17 from "../../assets/img/Bramare-Marchiori-Malbec.jpg"
import vino18 from "../../assets/img/Bramare-Rebon-Malbec.jpg"
import vino19 from "../../assets/img/Bramare-Touza-Malbec.jpg"
import vino20 from "../../assets/img/Bramare-Zingaretti-Malbec.jpg"
import vino21 from "../../assets/img/Bramare-Zingaretti-Chardonnay.jpg"
import vino22 from "../../assets/img/Volturno-CabernetSauvignon.jpg"
import vino23 from "../../assets/img/Cobos-Malbec.jpg"

let vinos = [
    {
    "id":1,
    "linea":"Felino",
    "varietal":"Malbec",
    "precio":1200,
    "cantidad": 150,
    "img":vino1,
    "descripcion":"De un intenso color rojo con tonos violáceos y azules, este exquisito malbec se caracteriza por exhibir aromas a flores blancas y frutos negros junto con notas de pimienta blanca y clavo de olor. Deleita el paladar con recuerdos de regaliz y chocolate mientras se presenta amplio, suave y de taninos firmes. Es un vino elegante, equilibrado y de persistente final."
    },
{
    "id":2,
    "linea":"Felino",
    "varietal":"Cabernet Sauvignon",
    "precio":1000,
    "cantidad": 120,
    "img":vino2,
    "descripcion":`Felino Cabernet Sauvignon nos deleita con aromas a cerezas negras, zarzamoras, rosa mosqueta, caramelos duros y viruta de lápiz. Brillante y sabroso en boca, con cereza negra, moras, ciruelas, abundante chocolate oscuro y sutiles notas de te earl grey y pimienta que lo mantienen equilibrado. Espeso y redondo, con taninos aterciopelados y un delicioso final.`
},
{
    "id":3,
    "linea":"Felino",
    "varietal":"Blend",
    "precio":1100,
    "cantidad": 130,
    "img":vino3,
    "descripcion":`Criado en roble americano durante 8 meses, surge del cuidadoso balance de nuestras cepas Malbec (70%), Cabernet Sauvignon (28%) y Merlot (2%).
    Rojo rubí con tonos negros. En nariz este especiado blend muestra notas de grosella negra, tabaco y chocolate. Es intenso y fresco. El paladar es concentrado, con gran estructura. Su buena presencia de taninos conduce a un final largo.`
},
{
    "id":4,
    "linea":"Felino",
    "varietal":"Chardonnay",
    "precio":980,
    "cantidad": 118,
    "img":vino4,
    "descripcion":`Este chardonnay se destaca por su color amarillo, límpido y con destellos verdes. Tiene una gran intensidad en nariz, con notas a frutas como pera, durazno, ananá y curuba; además flores blancas, azahar y delicadas notas a cáscara de pan. En boca se aprecia un buen volumen y untuosidad; tiene una acidez vivaz. Es un vino elegante, perfumado con gran equilibrio y persistencia.`
},
{
    "id":5,
    "linea":"Cocodrilo",
    "varietal":"Blend",
    "precio":1500,
    "cantidad": 100,
    "img":vino5,
    "descripcion":`Cocodrilo Corte sigue la tradición del assemblage al estilo Bordeaux. Mantiene su base cabernet sauvignon, variando cada cosecha los demás componentes según el mejor criterio de los enólogos. Es un vino complejo, elegante y refinado.`
},
{
    "id":6,
    "linea":"Bramare Appelation",
    "zona":"Luján de Cuyo",
    "varietal":"Cabernet Sauvignon",
    "precio":2000,
    "cantidad": 95,
    "img":vino6,
    "descripcion":`La tipicidad del cabernet sauvignon se aprecia en su color rojo con tonos violáceos. Encontramos una nariz deliciosa con presencia de fruta roja, cassis y guinda, que se complementa con chocolate, pimiento, hierbas y sutiles notas terrosas.  Es un vino robusto y con gran personalidad. Tiene una entrada dulce, taninos marcados, fruta negra y especias. Es untuoso en boca; un vino complejo y elegante, de prolongado final.`
},
{
    "id":7,
    "linea":"Bramare Appelation",
    "zona":"Luján de Cuyo",
    "varietal":"Malbec",
    "precio":2500,
    "cantidad": 90,
    "img":vino7,
    "descripcion":`Seduce con su color rojo violáceo, muy profundo. En nariz tiene gran presencia de frutas rojas con notas ácidas, cassis, frutilla; lentamente va mostrando notas a caramelo, especias, pimienta blanca, chocolate y grafito, en conjunto con delicadas notas mentoladas y romero. Tiene una notable amplitud en boca, es un vino envolvente, de taninos dulces, elegantes y firmes. Tiene un final muy largo y gran persistencia.`
},
{
    "id":8,
    "linea":"Bramare Appelation",
    "zona":"Patagonia",
    "varietal":"Pinot Noir",
    "precio":2500,
    "cantidad": 85,
    "img":vino8,
    "descripcion":`Este vino es de un delicado color rojo rubí. Es puro y complejo en nariz, con aromas que recuerdan a frambuesas, arándanos y toques herbales; combinados con notas de canela y caja de cigarros. En boca es equilibrado y elegante, presenta taninos de grano fino y textura mineral. El final es largo y sutil.`
},
{
    "id":9,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Chardonnay",
    "precio":2500,
    "cantidad": 80,
    "img":vino9,
    "descripcion":`Amarillo pajizo, con tonos verdes. En nariz es fresco, de gran pureza, floral. Expresa notas de pera, manzana verde y avellanas. Es un vino intenso, muestra un buen equilibrio entre cremosidad y acidez, que repite los aromas percibidos en nariz.`
},
{
    "id":10,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Cabernet Sauvignon",
    "precio":2600,
    "cantidad": 70,
    "img":vino10,
    "descripcion":`De color rojo profundo, este Cabernet Sauvignon presenta aromas vibrantes de frutos azules y negros que se complementan con cassis y pimienta negra. En boca, se presenta redondo, jugoso y enérgico, con una excelente textura y un final largo y persistente.`
},
{
    "id":11,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Malbec",
    "precio":2700,
    "cantidad": 60,
    "img":vino11,
    "descripcion":`Un expresivo Malbec de hermoso color rojo violáceo profundo.  Su carácter es especiado, frutado y complejo. Sus aromas frescos recuerdan a frutos del bosque con notas a violetas, combinadas con especias dulces. De acidez vibrante y textura sedosa y elegante.`
},
{
    "id":12,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Pinot Noir",
    "precio":2800,
    "cantidad": 55,
    "img":vino12,
    "descripcion":`De color rojo carmesí, este Pinot Noir expresa su elegancia desde la nariz donde encontramos fruta roja fresca, cerezas, guindas, que se combinan con notas de bosque, exaltando su frescura. En boca es complejo y vertical, con taninos que se hacen presentes para marcar su particular estilo.`
},
{
    "id":13,
    "linea":"Bramare Vineyard Designate",
    "finca":"Chañares Estate",
    "varietal":"Cabernet Franc",
    "precio":5000,
    "cantidad": 50,
    "img":vino13,
    "descripcion":`Nacido del Viñedo Chañares, muestra un atractivo color rojo rubí con tonos violáceos. Tiene gran expresión aromática y mineralidad, fruta roja madura y sutiles notas de grafito, tabaco y chocolate amargo. En boca es un vino redondo, equilibrado y delicado, con final largo y persistente.`
},
{
    "id":14,
    "linea":"Bramare Vineyard Designate",
    "finca":"Chañares Estate",
    "varietal":"Malbec",
    "precio":5100,
    "cantidad": 45,
    "img":vino14,
    "descripcion":`Nacido del Viñedo Chañares, muestra un atractivo color rojo violáceo intenso con tonos negros. En nariz es complejo, presentando notas de grafito y frutos del bosque. Es elegante, con taninos de grano fino, muestra gran energía y tensión.`
},
{
    "id":15,
    "linea":"Bramare Vineyard Designate",
    "finca":"Los Arbolitos Vineyard",
    "varietal":"Chardonnay",
    "precio":4800,
    "cantidad": 40,
    "img":vino15,
    "descripcion":`Amarillo pajizo con tonos verdes y dorados. En nariz, este vino despliega gran frescura y fineza, con notas de manzana verde, pera, y un costado herbal que recuerda a las hierbas autoctonas, como tomillo, En boca, goza de una gran longitud, caracterizado por una textura mineral y taninos perfectamente integrados.`

},
{
    "id":16,
    "linea":"Bramare Vineyard Designate",
    "finca":"Marchiori Estate",
    "varietal":"Chardonnay",
    "precio":4200,
    "cantidad": 35,
    "img":vino16,
    "descripcion":`El color limpio y vibrante de este chardonnay nos prepara para un vino muy elegante, de gran frescura y vivacidad; amarillo pálido con tonos verdes y destellos dorados. En nariz encontramos un delicado bouquet floral, con notas sutiles a frutas tropicales, manzana verde y un acento herbal. Se destaca su mineralidad, al tiempo que nos deleita con aromas a pan tostado, manteca de cacao, chocolate blanco y vainilla. En boca es redondo, con excelente concentración; tiene una marcada acidez y buen volumen, es untuoso y persistente. Tiene un final pronunciado, largo, con un placentero recuerdo a duraznos secos y mucha fruta.`
},
{
    "id":17,
    "linea":"Bramare Vineyard Designate",
    "finca":"Marchiori Estate",
    "varietal":"Malbec",
    "precio":5200,
    "cantidad": 30,
    "img":vino17,
    "descripcion":`Este malbec nos ofrece un muy buen color rojo con tonos violetas. Es un vino elegante e intenso. En nariz se expresa con gran complejidad, destacándose su mineralidad. Grafito, tabaco, chocolate, fruta roja, especias como clavo de olor y pimienta. En boca es untuoso, agradable, largo y persistente. Presenta taninos dulces, una grata sensación de fruta agridulce, caramelo y cera de abejas. Muy atractivo por su textura sedosa y su largo final.`
},
{
    "id":18,
    "linea":"Bramare Vineyard Designate",
    "finca":"Rebon Estate",
    "varietal":"Malbec",
    "precio":5200,
    "cantidad": 20,
    "img":vino18,
    "descripcion":`Este malbec nos ofrece un muy buen color rojo con tonos violetas. Es un vino elegante e intenso. En nariz se expresa con gran complejidad, destacándose su mineralidad. Grafito, tabaco, chocolate, fruta roja, especias como clavo de olor y pimienta. En boca es untuoso, agradable, largo y persistente. Presenta taninos dulces, una grata sensación de fruta agridulce, caramelo y cera de abejas. Muy atractivo por su textura sedosa y su largo final.`
},
{
    "id":19,
    "linea":"Bramare Vineyard Designate",
    "finca":"Touza Vineyard",
    "varietal":"Malbec",
    "precio":5500,
    "cantidad": 15,
    "img":vino19,
    "descripcion":`Este malbec es de un intenso color rojo con reflejos violáceos. En nariz, presenta mixtura entre aromas de hierbas silvestre smentoladas y frutas frescas como arándanos e higos. En boca es muy equilibrado, con buena estructura,de gran energía, vibrante y con taninos presentes.`

},
{
    "id":20,
    "linea":"Bramare Vineyard Designate",
    "finca":"Zingaretti Estate",
    "varietal":"Malbec",
    "precio":5500,
    "cantidad": 10,
    "img":vino20,
    "descripcion":`El malbec de Zingaretti es un vino distinguido y vigoroso. De color rojo rubí con destellos violetas. Presenta aromas intensos y notas de hierbas silvestres, flores, fruta rojas bien integrados con especias y chocolate amargo. Un vino untuoso que provoca  sensaciones potentes en la boca, y con un final largo y pronunciado.`
},
{
    "id":21,
    "linea":"Bramare Vineyard Designate",
    "finca":"Zingaretti Estate",
    "varietal":"Chardonnay",
    "precio":4600,
    "cantidad": 10,
    "img":vino21,
    "descripcion":`Destaca por su delicadeza, notas florales marcadas y níspero. En boca tiene carácter mineral marcado, sutil, largo y refinado.`
},
{
    "id":22,
    "linea":"Volturno",
    "varietal":"Blend",
    "precio":35000,
    "cantidad": 5,
    "img":vino22,
    "descripcion":`Este exquisito corte tiene como componente principal el cabernet sauvignon (88%), que nos ofrece en esta cosecha una gran predominancia de la fruta y notoria mineralidad. Muestra un color rojo rubí intenso, aromas a fruta roja, regaliz, grafito, pólvora, pimienta y chocolate; una nota muy sutil de hierbabuena complementa el perfil con frescura y elegancia. En boca nos muestra fruta roja, regaliz y  mermelada; es redondo e intenso, amplio y con una textura mineral. Su largo final permite seguir descubriéndolo.`
},
{
    "id":23,
    "linea":"Cobos",
    "varietal":"Malbec",
    "precio":50000,
    "cantidad": 5,
    "img":vino23,
    "descripcion":`Muestra un color rojo rubí brillante con tonos negros. De nariz compleja y elegante. Por primera vez, este blend cuenta con el aporte del Cabernet Franc, que suma a las notas más complejas del blend pólvora y pimienta. En boca es intenso, redondo y de textura mineral. De gran energía y final excepcionalmente balanceado.`
},
]

export default vinos
