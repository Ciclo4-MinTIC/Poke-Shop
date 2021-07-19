import React from 'react'
import Catalogo from './Catalogo'
import Umbreon from "../assets/Umbreon.jpg";
import Luxray from "../assets/Luxray.jpg";
import Pikachu from "../assets/Pikachu.jpg";
import Eevee from "../assets/Eevee.png";
import Absol from "../assets/Absol.jpg";
import Arcanine from "../assets/Arcanine.png";
import Articuno from "../assets/Articuno.png";
import Beedrill from "../assets/Beedrill.jpg";
import Blaziken from "../assets/Blaziken.jpg";
import Bulbasaur from "../assets/Bulbasaur.png";
import Charmander from "../assets/Charmander.jpg";
import Dialga from "../assets/Dialga.jpg";
import Entei from "../assets/Entei.jpg";
import Gengar from "../assets/Gengar.jpg";
import Glaceon from "../assets/Glaceon.jpg";
import Greninja from "../assets/Greninja.jpg";
import Gyarados from "../assets/Gyarados.jpg";
import Koffing from "../assets/Koffing.jpg";
import Kyogre from "../assets/Kyogre.jpg";
import Kyurem from "../assets/Kyurem.jpg";
import Lucario from "../assets/Lucario.jpg";
import Lugia from "../assets/Lugia.jpg";
import Meowth from "../assets/Meowth.png";
import Pidgeot from "../assets/Pidgeot.jpg";
import Raikou from "../assets/Raikou.jpg";
import Scyther from "../assets/Scyther.jpg";
import Snorlax from "../assets/Snorlax.jpg";
import Suicune from "../assets/Suicune.jpg";
import Talonflame from "../assets/Talonflame.png";
import Vaporeon from "../assets/Vaporeon.jpg";
import Xerneas from "../assets/Xerneas.jpg";
import Zapdox from "../assets/Zapdox.jpg";

const catalogos =
[
    {
        id: 1,
        title: 'Umbreon',
        image: Umbreon,
        text: 'Cuando se enfurece, secreta un sudor venenoso por los poros que lanza a los ojos de sus enemigos. En las noches de luna llena, ocuando se exalta, le empiezan a brillar los anillos de color dorado.'
        
        
    },
    {
        id: 2,
        title: 'Luxray',
        image: Luxray,
        text: 'Tiene la capacidad de ver a través de cualquier cosa. Encuentra enseguida su presa, aunque se oculte tras una pared de gran grosor.'

    },
    {
        id: 3,
        title: 'Pikachu',
        image: Pikachu,
        text: 'Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas. Los miembros de esta especie se saludan entre sí uniendo sus colas y transmitiéndose corriente eléctrica.'
       
       
    },
    {
        id: 4,
        title: 'Eevee',
        image: Eevee,
        text:'Es capaz de alterar la composición de su cuerpo para adaptarse al entorno.'
       
       
    },
    {
        id: 5,
        title: 'Absol',
        image: Absol,
        text:'Es capaz de alterar la composición de su cuerpo para adaptarse al entorno.'
       
       
    },
    {
        id: 6,
        title: 'Arcanine',
        image: Arcanine,
        text:'Es capaz de correr 10 000 km al día, lo que deja embelesados a todos los que lo ven pasar.'
    },
    {
        id: 7,
        title: 'Beedrill',
        image: Beedrill,
        text:'Tiene tres aguijones venenosos, dos en las patas anteriores y uno en la parte baja del abdomen, con los que ataca a sus enemigos una y otra vez.'
       
       
    },
    {
        id: 8,
        title: 'Blaziken',
        image: Blaziken,
        text:'En combate, Blaziken expulsa vivas llamas por las muñecas y ataca al enemigo con fiereza. Cuanto más fuerte sea el enemigo, más intensas serán las llamas.'
       
    },
    {
        id: 9,
        title: 'Bulbasaur',
        image: Bulbasaur,
        text:'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.'
       
       
    },
    {
        id: 10,
        title: 'Charmander',
        image: Charmander,
        text:'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.'
       
       
    },
    {
        id: 11,
        title: 'Dialga',
        image: Dialga,
        text:'Un Pokémon de leyenda. Se dice que el tiempo comenzó a avanzar cuando Dialga nació.'
       
       
    },
    {
        id: 12,
        title: 'Glaceon',
        image: Glaceon,
        text:'Desprende cristales de hielo. Sus presas se quedan congeladas sin darse cuenta, encandiladas por su belleza.'
       
       
    },
    {
        id: 13,
        title: 'Greninja',
        image: Greninja,
        text:'Comprime el agua y crea estrellas ninja con las que ataca al enemigo. Cuando las hace girar a gran velocidad cortan en dos hasta el metal.'
       
       
    },
    {
        id: 14,
        title: 'Gyarados',
        image: Gyarados,
        text:'Es exageradamente agresivo. El Hiperrayo que lanza por la boca reduce a cenizas todo lo que encuentra.'
       
       
    },
    {
        id: 15,
        title: 'Koffing',
        image: Koffing,
        text:'Su cuerpo está lleno a rebosar de gas venenoso. Acude a los vertederos atraído por el putrefacto olor que emana de los desperdicios.'
       
       
    },
    {
        id: 16,
        title: 'Kyogre',
        image: Kyogre,
        text:'Kyogre se sirve de la energía de la naturaleza para realizar su Regresión Primigenia y recobrar su apariencia primitiva. Con tal poder, puede desencadenar tempestades para expandir los océanos.'
       
       
    },
    {
        id: 17,
        title: 'Kyurem',
        image: Kyurem,
        text:'Pokémon legendario que aguarda al héroe que compense el vacío de su cuerpo de hielo con verdad e ideales.'
       
       
    },
    {
        id: 18,
        title: 'Lucario',
        image: Lucario,
        text:'Caza a sus presas manipulando una energía, denominada aura, cuya potencia es capaz incluso de hacer añicos rocas enormes.'
       
       
    },
    {
        id: 19,
        title: 'Lugia',
        image: Lugia,
        text:'La fuerza que tiene Lugia en las alas es devastadora; con nada que las bata es capaz de derribar edificios enteros. Por eso mismo, prefiere vivir donde no haya nadie, en lo más profundo del mar.'
       
       
    },
    {
        id: 20,
        title: 'Meowth',
        image: Meowth,
        text:'Le encanta reunir objetos brillantes. Cuando está de buen humor, hasta le muestra la colección a su Entrenador.'
       
       
    },
    {
        id: 21,
        title: 'Pidgeot',
        image: Pidgeot,
        text:'Este Pokémon vuela a una velocidad de 2 mach en busca de presas. Sus grandes garras son armas muy peligrosas.'
       
       
    },
    {
        id: 22,
        title: 'Raikou',
        image: Raikou,
        text:'Raikou tiene la velocidad del rayo. Los rugidos de este Pokémon emiten ondas de choque que se esparcen vibrando por el aire y sacuden el suelo como si fueran auténticas descargas de rayo.'
       
       
    },
    {
        id: 23,
        title: 'Scyther',
        image: Scyther,
        text:'Sus guadañas se vuelven más afiladas con cada combate. Es capaz de rebanar troncos gruesos de un tajo.'
       
       
    },
    {
        id: 24,
        title: 'Snorlax',
        image: Snorlax,
        text:'No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.'
       
       
    },
    {
        id: 25,
        title: 'Suicune',
        image: Suicune,
        text:'Suicune emana la pureza de los manantiales. Suele corretear por el campo con gran elegancia. Este Pokémon tiene el poder de purificar el agua contaminada.'
       
       
    },
    {
        id: 26,
        title: 'Talonflame',
        image: Talonflame,
        text:'Su presa predilecta son los Pokémon pájaro. Intimida a sus rivales lanzando ascuas desde los intersticios de su plumaje.'
       
       
    },
    {
        id: 27,
        title: 'Vaporeon',
        image: Vaporeon,
        text:'Cuando las aletas de Vaporeon comienzan a vibrar, significa que lloverá en las próximas horas.'
       
       
    },
    {
        id: 28,
        title: 'Xerneas',
        image: Xerneas,
        text:'Según las leyendas, puede compartir el secreto de la vida eterna. Ha despertado tras dormir durante mil años bajo la apariencia de un árbol.'
       
       
    },
    {
        id: 29,
        title: 'Zapdos',
        image: Zapdox,
        text:'Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta.'
       
       
    },
    {
        id: 30,
        title: 'Articuno',
        image: Articuno,
        text:'Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.'
       
       
    },
]


function Catalogos(){
    
    return (
        <div className="container d-flex justify-content-center aligh-items-center">
            
            <div className="row">  
                {
                    catalogos.map(catalogo =>(
                    <div className="col-md-4" key={catalogo.id}>
                        <Catalogo title={catalogo.title} imageSource={catalogo.image} text={catalogo.text}/>
                    </div>
                    ))
                }     
            </div>
        </div>
    )
}

export default Catalogos




