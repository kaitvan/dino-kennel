const dinos = [
    {
        id: 'dino1',
        name: 'Rex',
        type: 'T Rex',
        age: 100,
        owner: 'Jacob',
        adventures: [],
        health: 92,
        imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
      },
      {
        id: 'dino2',
        name: 'Steve',
        type: 'Velociraptor',
        age: 1,
        owner: 'Jacob',
        adventures: [],
        health: 1,
        imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
      },
      {
        id: 'dino3',
        name: 'Susan',
        type: 'stegosaurus',
        age: 55,
        owner: 'Jacob',
        adventures: [],
        health: 0,
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
      },
      {
        id: 'dino4',
        name: 'Barry',
        type: 'Brontosaurus',
        age: 100,
        owner: 'Abbey',
        adventures: [],
        health: 100,
        imageUrl: 'https://www.extinctanimals.org/wp-content/uploads/2015/09/Brontosaurus.jpg'
      },
      {
        id: 'dino5',
        name: 'Steph',
        type: 'Spinosaurus',
        age: 100,
        owner: 'Dr. T',
        adventures: [],
        health: 75,
        imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
      },
      {
        id: 'dino6',
        name: 'Tim',
        type: 'Talarurus',
        age: 100,
        owner: 'Dr. T',
        adventures: [],
        health: 55,
        imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
      },
      {
        id: 'dino7',
        name: 'Tracy',
        type: 'Triceratops',
        age: 100,
        owner: 'Abbey',
        adventures: [],
        health: 0,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
      },
      {
        id: 'dino8',
        name: 'Percy',
        type: 'Pterodactyl',
        age: 10,
        owner: 'Jacob',
        adventures: [],
        health: 10,
        imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
      },
      {
        id: 'dino9',
        name: 'Betty',
        type: 'brontosaurus',
        age: 22,
        owner: 'Dr. T',
        adventures: [],
        health: 22,
        imageUrl: 'https://vignette.wikia.nocookie.net/jurassicpark/images/7/74/Apatosaurus.png/revision/latest?cb=20150103191434'
      }
];

const adventures = [
    {
      id: 'adventure1',
      title: 'BRAWL',
      healthHit: 50
    },
    {
      id: 'adventure2',
      title: 'Cave exploration',
      healthHit: 10
    },
    {
      id: 'adventure3',
      title: 'Ropes course',
      healthHit: 13
    },
    {
      id: 'adventure4',
      title: 'Playing in traffic',
      healthHit: 3
    },
    {
      id: 'adventure5',
      title: 'Baking',
      healthHit: 70
    },
    {
      id: 'adventure6',
      title: 'Welding',
      healthHit: 4
    },
    {
      id: 'adventure7',
      title: 'Underwater Basket Weaving',
      healthHit: 99
    },
    {
      id: 'adventure8',
      title: 'Surfing',
      healthHit: 39
    },
    {
      id: 'adventure9',
      title: 'Fishing',
      healthHit: 23
    },
    {
      id: 'adventure10',
      title: 'Shot from a cannon',
      healthHit: 60
    }
];

const dinoCardHtml = (dino) => {
    return `<div class="card m-2" style="width: 18rem;">
        <div class="d-flex align-items-center dino-img">
            <img src="${dino.imageUrl}" class="card-img-top" alt="${dino.type}">
        </div>
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">${dino.name}</h5>
            <div class="d-flex justify-content-around">
                <button class="btn" id="feed-button"><i class="fa fa-cutlery"></i></button>
                <button class="btn" id="pet-button"><i class="fa fa-hand-paper-o"></i></i></button>
                <button class="btn" id="adventure-button"><i class="fa fa-suitcase"></i></button>
                <button class="btn" id="remove-button"><i class="fa fa-trash-o"></i></button>
            </div>
        </div>
    </div>`
}

const dinoSort = () => {
    dinos.forEach((dino) => {
        if (dino.health === 0) {
            $('#dino-graveyard').append(dinoCardHtml(dino))
        } else if (dino.health < 50) {
            $('#dino-hospital').append(dinoCardHtml(dino))
        } else {
            $('#dino-kennel').append(dinoCardHtml(dino))
        }
    });
}

export { dinoSort }