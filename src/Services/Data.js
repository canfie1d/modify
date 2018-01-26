import gallery1 from '../Assets/Images/Gallery/gallery1.jpg';
import gallery2 from '../Assets/Images/Gallery/gallery2.jpg';
import gallery3 from '../Assets/Images/Gallery/gallery3.jpg';
import gallery4 from '../Assets/Images/Gallery/gallery4.jpg';
import gallery5 from '../Assets/Images/Gallery/gallery5.jpg';
import gallery6 from '../Assets/Images/Gallery/gallery6.jpg';
import gallery7 from '../Assets/Images/Gallery/gallery7.jpg';
import gallery8 from '../Assets/Images/Gallery/gallery8.jpg';
import gallery9 from '../Assets/Images/Gallery/gallery9.jpg';
import gallery10 from '../Assets/Images/Gallery/gallery10.jpg';
import gallery11 from '../Assets/Images/Gallery/gallery11.jpg';
import gallery12 from '../Assets/Images/Gallery/gallery12.jpg';

import kevinmurphy from '../Assets/Images/Products/kevinmurphy.jpg';
import evo from '../Assets/Images/Products/evo.svg';
import onesta from '../Assets/Images/Products/onesta.png';
import kevinMurphyProduct from '../Assets/Images/Products/kevinmurphy-product.jpg';
import evoProduct from '../Assets/Images/Products/evo-product.png';
import onestaProduct from '../Assets/Images/Products/onesta-product.png';

export function getProducts(product) {
  const productList = [
    {
      id: 'kevinmurphy',
      name: 'KEVIN.MURPHY',
      image: kevinmurphy,
      productImage: kevinMurphyProduct,
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
      image: evo,
      productImage: evoProduct,
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
      image: onesta,
      productImage: onestaProduct,
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
    image: gallery1,
    alt: "stylist station by window with large mirror"
  },
  {
    image: gallery2,
    alt: "hair product close-up"
  },
  {
    image: gallery4,
    alt: "shampoo and conditioner close-up"
  },
  {
    image: gallery6,
    alt: "front desk next to two shampoo bowls"
  },
  {
    image: gallery5,
    alt: "stylist station close-up"
  },
  {
    image: gallery3,
    alt: "entry to the salon with seating area"
  },
  {
    image: gallery7,
    alt: "another angle of entry to the salon"
  },
  {
    image: gallery9,
    alt: "stylist stations with large mirrors and leather chairs"
  },
  {
    image: gallery8,
    alt: "wide shot of the salon and stylist stations"
  },
  {
    image: gallery10,
    alt: "another angle of salon and stylist stations"
  },
  {
    image: gallery11,
    alt: "stylist station near a window"
  },
  {
    image: gallery12,
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
    cost: "Upon Consult (Tina & Alysia only)"
  }
];
