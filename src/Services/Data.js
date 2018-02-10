export function getProducts(product) {
  const productList = [
    {
      id: 'kevinmurphy',
      name: 'KEVIN.MURPHY',
      image: "https://s3.amazonaws.com/modifyhair-images/product/kevinmurphy.jpg",
      productImage: "https://s3.amazonaws.com/modifyhair-images/product/kevinmurphy-product.jpg",
      alt: "Kevin Murphy Logo",
      desc: [
        "Born from the same philosophy as skincare, KEVIN.MURPHY products are WEIGHTLESSLY designed to deliver PERFORMANCE, STRENGTH and LONGEVITY.",
        "When searching the world for their ingredients, KEVIN.MURPHY looked for companies that use micro cultivation, organic growing practices, or ecologically sound wild harvesting techniques to ensure the KEVIN.MURPHY range is of the very highest natural quality. Vitamins and amino acids repair the outer surface of the hair, thickening the hair and reducing the formation of split ends."
      ],
      url: "http://kevinmurphy.com.au/the-brand"
    },
    {
      id: 'evo',
      name: 'EVO',
      image: "https://s3.amazonaws.com/modifyhair-images/product/evo.svg",
      productImage: "https://s3.amazonaws.com/modifyhair-images/product/evo-product.png",
      alt: "EVO Logo",
      desc: [
        "evo is an innovative, professional hair and beauty product manufacturer with individuality and integrity; a manufacturer that speaks the truth.",
        "Born from a desire to produce an exclusive salon range (and not sell it as the answer to life, love and other woes), evo steps outside the normal realm of truth-stretching invention in a 'wake up and smell the coffee' crusade of twisted honesty - designed to make people think. And so comes the catch phrase - saving ordinary humans from themselves™.",
        "Inside bottles of evo that are bursting with personality, you'll find luxurious products that are sulphate, paraben, dea, tea and propylene glycol free; products that give professional results while respecting the environment."
      ],
      url: "http://www.evohair.com/evo/about-evo"
    },
    {
      id: 'onesta',
      name: 'ONESTA',
      image: "https://s3.amazonaws.com/modifyhair-images/product/onesta.png",
      productImage: "https://s3.amazonaws.com/modifyhair-images/product/onesta-product.png",
      alt: "ONESTA Logo",
      desc: [
        "Onesta knows that by enjoying nature’s offerings they must do their part to protect our world’s resources and be ecologically sustainable. This mission of environmental responsibility is at the core of what they do at Onesta.",
        "From the products they make, to the ways in which they give back to society, Onesta demonstrates a deep belief in the essential unity of all things. We care about the world we live in and we believe eco-consciousness and sustainability to be integral parts of our business strategy."
      ],
      url: "http://www.onestahaircare.com/our-philosophy/"
    }
  ];

  if (product !== undefined) {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id.toLowerCase() === product) {
        return productList[i];
      }
    }
  } else {
    return productList;
  }
}

export const GALLERY_IMAGES = [
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery1.jpg",
    alt: "stylist station by window with large mirror"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery2.jpg",
    alt: "hair product close-up"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery3.jpg",
    alt: "shampoo and conditioner close-up"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery4.jpg",
    alt: "front desk next to two shampoo bowls"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery5.jpg",
    alt: "stylist station close-up"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery6.jpg",
    alt: "entry to the salon with seating area"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery7.jpg",
    alt: "another angle of entry to the salon"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery8.jpg",
    alt: "stylist stations with large mirrors and leather chairs"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery9.jpg",
    alt: "wide shot of the salon and stylist stations"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery10.jpg",
    alt: "another angle of salon and stylist stations"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery11.jpg",
    alt: "stylist station near a window"
  },
  {
    image: "https://s3.amazonaws.com/modifyhair-images/gallery/gallery12.jpg",
    alt: "stylist station close-up"
  }
];

export const SERVICES = [
  {
    name: "Women's Hair Cut",
    cost: "$55 and up"
  },
  {
    name: "Men's Hair Cut",
    cost: "$45 and up"
  },
  {
    name: "Color Retouch",
    cost: "$60 and up"
  },
  {
    name: "Single Process Color",
    cost: "$75 and up"
  },
  {
    name: "Specialty Color",
    cost: "$150 and up"
  },
  {
    name: "Highlights",
    cost: "$100 and up"
  },
  {
    name: "Corrective Color",
    cost: "Upon consult"
  },
  {
    name: "Regular Shampoo & Blow Dry",
    cost: "$45 and up"
  },
  {
    name: "Extended Shampoo & Blow Dry",
    cost: "$55 and up"
  },
  {
    name: "Stylist Education Session",
    cost: "$55 and up"
  },
  {
    name: "Extensions",
    cost: "Upon Consult (Hana only)"
  },
  {
    name: "Keratin Smoothing System",
    cost: "Upon Consult (Tina only)"
  }
];
