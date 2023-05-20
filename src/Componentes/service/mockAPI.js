const data = [
    {
      id: 1,
      brand: "Casio G-Shock",
      model: "TW5M43200",
      img: "/assets/relojes/Casio G-Shock.jpg",
      category: "Smart",
      price: 32000,
      stock: 3,
    },
    {
      id: 2,
      brand: "Tommy Hilfiger",
      model: "791861",
      img: "/assets/relojes/tomy.jpg",
      category: "Hombre",
      price: 52250,
      stock: 2,
    },
    {
      id: 3,
      brand: "Caterpillar",
      model: "ME.145.21.137",
      img: "/assets/relojes/cat.jpg",
      category: "Hombre",
      price: 93000,
      stock: 2,
    },
    {
      id: 4,
      brand: "Tressa",
      model: "SW-141 BK",
      img: "/assets/relojes/tressa.jpg",
      category: "Smart",
      price: 62000,
      stock: 3,
    },
    {
      id: 5,
      brand: "Timex",
      model: "Mujer",
      img: "/assets/relojes/timexblanco.jpg",
      category: "TW2V37200",
      price: 69925,
      stock: 4,
    },
    {
      id: 6,
      brand: "Montreal",
      model: "MA-327",
      img: "/assets/relojes/montreal.jpg",
      category: "Hombre",
      price: 82440,
      stock: 7,
    },
    {
      id: 7,
      brand: "GARMIN",
      model: "VIVOMOVE STYLE ROSE",
      img: "/assets/relojes/garmin.jpg",
      category: "Smart",
      price: 100000,
      stock: 2,
    },
    {
      id: 8,
      brand: "Mixo",
      model: "MWDT800 NE",
      img: "/assets/relojes/mixo.jpg",
      category: "Smart",
      price: 98000,
      stock: 3,
    },
    {
      id: 9,
      brand: "Citizen",
      model: "NH835059L",
      img: "/assets/relojes/citizen.jpg",
      category: "Hombre",
      price: 11000,
      stock: 2,
    },
    {
      id: 10,
      brand: "Timex",
      model: "TW2V01400",
      img: "/assets/relojes/timex.jpg",
      category: "Mujer",
      price: 93000,
      stock: 3,
    },
    {
      id: 10,
      brand: "Casio G-Shock",
      model: "NH835059L",
      img: "/assets/relojes/Casio G-Shock.jpg",
      category: "Hombre",
      price: 11000,
      stock: 2,
    },
  ];
  
  export default function getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });
  }
  
  export function getItemsByCategory(cat) {
    return new Promise((resolve, reject) => {
      let itemFind = data.filter((item) => {
        return item.category === cat;
      });
      setTimeout(() => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("Item no encontrado"));
      }, 1500);
    });
  }
  
  export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
      let itemFind = data.find((item) => {
        return item.id === Number(idItem);
      });
      setTimeout(() => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("Item no encontrado"));
      }, 1500);
    });
  }