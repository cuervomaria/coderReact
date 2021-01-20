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
    "img":vino1
},
{
    "id":2,
    "linea":"Felino",
    "varietal":"Cabernet Sauvignon",
    "precio":1000,
    "cantidad": 120,
    "img":vino2
},
{
    "id":3,
    "linea":"Felino",
    "varietal":"Blend",
    "precio":1100,
    "cantidad": 130,
    "img":vino3
},
{
    "id":4,
    "linea":"Felino",
    "varietal":"Chardonnay",
    "precio":980,
    "cantidad": 118,
    "img":vino4
},
{
    "id":5,
    "linea":"Cocodrilo",
    "varietal":"Blend",
    "precio":1500,
    "cantidad": 100,
    "img":vino5
},
{
    "id":6,
    "linea":"Bramare Appelation",
    "zona":"Luján de Cuyo",
    "varietal":"Cabernet Sauvignon",
    "precio":2000,
    "cantidad": 95,
    "img":vino6
},
{
    "id":7,
    "linea":"Bramare Appelation",
    "zona":"Luján de Cuyo",
    "varietal":"Malbec",
    "precio":2500,
    "cantidad": 90,
    "img":vino7
},
{
    "id":8,
    "linea":"Bramare Appelation",
    "zona":"Patagonia",
    "varietal":"Pinot Noir",
    "precio":2500,
    "cantidad": 85,
    "img":vino8
},
{
    "id":9,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Chardonnay",
    "precio":2500,
    "cantidad": 80,
    "img":vino9
},
{
    "id":10,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Cabernet Sauvignon",
    "precio":2600,
    "cantidad": 70,
    "img":vino10
},
{
    "id":11,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Malbec",
    "precio":2700,
    "cantidad": 60,
    "img":vino11
},
{
    "id":12,
    "linea":"Bramare Appelation",
    "zona":"Valle de Uco",
    "varietal":"Pinot Noir",
    "precio":2800,
    "cantidad": 55,
    "img":vino12
},
{
    "id":13,
    "linea":"Bramare Vineyard Designate",
    "finca":"Chañares Estate",
    "varietal":"Cabernet Franc",
    "precio":5000,
    "cantidad": 50,
    "img":vino13
},
{
    "id":14,
    "linea":"Bramare Vineyard Designate",
    "finca":"Chañares Estate",
    "varietal":"Malbec",
    "precio":5100,
    "cantidad": 45,
    "img":vino14
},
{
    "id":15,
    "linea":"Bramare Vineyard Designate",
    "finca":"Los Arbolitos Vineyard",
    "varietal":"Chardonnay",
    "precio":4800,
    "cantidad": 40,
    "img":vino15
},
{
    "id":16,
    "linea":"Bramare Vineyard Designate",
    "finca":"Marchiori Estate",
    "varietal":"Chardonnay",
    "precio":4200,
    "cantidad": 35,
    "img":vino16
},
{
    "id":17,
    "linea":"Bramare Vineyard Designate",
    "finca":"Marchiori Estate",
    "varietal":"Malbec",
    "precio":5200,
    "cantidad": 30,
    "img":vino17
},
{
    "id":18,
    "linea":"Bramare Vineyard Designate",
    "finca":"Rebon Estate",
    "varietal":"Malbec",
    "precio":5200,
    "cantidad": 20,
    "img":vino18
},
{
    "id":19,
    "linea":"Bramare Vineyard Designate",
    "finca":"Touza Vineyard",
    "varietal":"Malbec",
    "precio":5500,
    "cantidad": 15,
    "img":vino19
},
{
    "id":20,
    "linea":"Bramare Vineyard Designate",
    "finca":"Zingaretti Estate",
    "varietal":"Malbec",
    "precio":5500,
    "cantidad": 10,
    "img":vino20
},
{
    "id":21,
    "linea":"Bramare Vineyard Designate",
    "finca":"Zingaretti Estate",
    "varietal":"Chardonnay",
    "precio":4600,
    "cantidad": 10,
    "img":vino21
},
{
    "id":22,
    "linea":"Volturno",
    "varietal":"Blend",
    "precio":35000,
    "cantidad": 5,
    "img":vino22
},
{
    "id":23,
    "linea":"Cobos",
    "varietal":"Malbec",
    "precio":50000,
    "cantidad": 5,
    "img":vino23
},
]

export default vinos
