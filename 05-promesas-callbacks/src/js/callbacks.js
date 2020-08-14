
const heroes = {
    capi:{
        nombre: 'Capitan América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider:{
        nombre: 'Spiderman',
        poder: 'Picadura de araña'
    },
}

export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if ( heroe ) {
        callback(null, heroe);
    }else {
        // Error
        callback(`No existe un héroe con el id ${id}`);
    }
        
}