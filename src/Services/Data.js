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

import Jodi from '../Assets/Images/Stylists/jodi.jpg';
import Tina from '../Assets/Images/Stylists/avatar.jpg';
import Lelia from '../Assets/Images/Stylists/lelia.jpg';
import Hana from '../Assets/Images/Stylists/hana.jpg';
import Polly from '../Assets/Images/Stylists/polly.jpg';
import Sarah from '../Assets/Images/Stylists/avatar.jpg';
import Dusty from '../Assets/Images/Stylists/dusty.jpg';
import Gayle from '../Assets/Images/Stylists/gale.jpg';
import Alysia from '../Assets/Images/Stylists/alysia.jpg';
import Robin from '../Assets/Images/Stylists/robin.jpg';
import Mitch from '../Assets/Images/Stylists/mitch.jpg';

import evo from '../Assets/Images/Products/evo.svg';
import onm from '../Assets/Images/Products/onm.png';
import onesta from '../Assets/Images/Products/onesta.png';
import ref from '../Assets/Images/Products/ref.svg';

export const PRODUCTS = [
  { src: evo, alt: 'EVO Logo' },
  { src: onm, alt: 'ONM Logo' },
  { src: ref, alt: "REF LOGO" },
  { src: onesta, alt: "ONESTA Logo" }
];

export const GALLERY_IMAGES = [
  {
    image: gallery1,
    alt: 'stylist station by window with large mirror'
  },
  {
    image: gallery2,
    alt: 'hair product close-up'
  },
  {
    image: gallery4,
    alt: 'shampoo and conditioner close-up'
  },
  {
    image: gallery6,
    alt: 'front desk next to two shampoo bowls'
  },
  {
    image: gallery5,
    alt: 'stylist station close-up'
  },
  {
    image: gallery3,
    alt: 'entry to the salon with seating area'
  },
  {
    image: gallery7,
    alt: 'another angle of entry to the salon'
  },
  {
    image: gallery9,
    alt: 'stylist stations with large mirrors and leather chairs'
  },
  {
    image: gallery8,
    alt: 'wide shot of the salon and stylist stations'
  },
  {
    image: gallery10,
    alt: 'another angle of salon and stylist stations'
  },
  {
    image: gallery11,
    alt: 'stylist station near a window'
  },
  {
    image: gallery12,
    alt: 'stylist station close-up'
  }
];

export function getStylists(stylist) {
  let stylistList = [
    {
      image: Jodi,
      name: 'Jodi',
      position: 'Owner & Stylist',
      bio: [
        "As a stylist in the industry for nearly 18 years, Jodi’s passion shines through with the diversity that she gets with every guest she sees.  Every client has a different story to tell as well as a different identity of what they want their hair to evoke, and Jodi's favorite part of what she does is building long term relationships.  She makes it a priority to actively listen and understand what her clients are looking for, as well as educating them on how to duplicate their style at home.  Jodi’s education started as a graduate of the Aveda Institute in Minneapolis in 1998, and has continued her education with a wide range of educators  to actively keep herself challenged with different brands and techniques. Feel free to schedule a complimentary consultation to discuss your needs."
      ],
      contact: "Jodi works Tuesdays, Fridays, and alternating Thursdays & Saturdays and welcomes scheduling appointments in advance. You can reach her directly at",
      phone: "206-486-6566",
      pricing: [
        {
          desc: "Women's Cut",
          cost: "$75"
        },
        {
          desc: "Men's Cut",
          cost: "$60"
        },
        {
          desc: "Single Process Color",
          cost: "$90+"
        },
        {
          desc: "Root Retouch",
          cost: "$85"
        },
        {
          desc: "Highlights/Lowlights",
          cost: "$130+"
        },
        {
          desc: "Shampoo Blow Dry",
          cost: "$50+"
        },
        {
          desc: "Extended Blow Dry",
          cost: "$65"
        },
        {
          desc: "Special Occasion Style",
          cost: "$70+"
        },
        {
          desc: "Cellophane",
          cost: "$90+"
        },
        {
          desc: "Specialty Color",
          cost: "$165+"
        }
      ]
    },
    {
      image: Tina,
      name: 'Tina',
      position: 'Stylist',
      bio: [
        "After working with a diverse clientele at a non-profit agency, as well as studying Social Science at the University of Washington, Tina finally decided to pursue her true passion in the hair industry.  During her career, she has mastered a wide range of techniques that allow her to create personalized looks to showcase your best features. Tina excels working with long hair and curls and loves working with rich color tones and dimension. In addition to her extensive knowledge with cutting and coloring, Tina also specializes in performing the Coppola Keratin Complex Smoothing System and is fantastic with makeup. Tina is committed to hard work, continued education and being the best at what she does but also  enjoys taking time out of work to relax, travel and check out live music when she can."
      ],
      contact: "To schedule a appointment directly with Tina you can call her at",
      phone: "425-502-5174"
    },
    {
      image: Lelia,
      name: 'Leilia',
      position: 'Stylist',
      bio: [
        "Lelia Singleton is our resident “mixologist”. She loves concocting special cocktails of color much like she used to tend bar. She is the ultimate multi tasker! Lelia brings a no nonsense, get it done east coast mentality to her work and fuses it with her laid back Hawaiian attitude. Both areas she used to call home.",
        "Lelia is excellent in all areas of hairdressing. While she loves blonds, brunettes, grey coverage and classic haircutting, Lelia has a special affection for razor cutting with a straight edge, beautiful red toned colors, Ombré, fun color placement techniques, and men's cuts. Give Lelia a try if you love a person that is very outgoing, exuberant, and will make you the focus of their attention."
      ],
      contact: "Lelia works Tuesday, Wednesday, Friday and every other Saturday and welcomes scheduling appointments in advance and loves to take walk-ins when she can! You can reach her at",
      phone: "206-919-7805",
      pricing: [
        {
          desc: "Women's Cut",
          cost: "$60"
        },
        {
          desc: "Men's Cut",
          cost: "$60"
        },
        {
          desc: "Shampoo/Dry/Style",
          cost: "$60"
        },
        {
          desc: "Root Retouch",
          cost: "$70+"
        },
        {
          desc: "Cellophane",
          cost: "$85+"
        },
        {
          desc: "Single Process Color",
          cost: "$90+"
        },
        {
          desc: "Partial Foil",
          cost: "$120+"
        },
        {
          desc: "Full Foil",
          cost: "$130+"
        },
        {
          desc: "Ombré/Balyage",
          cost: "$160"
        },
        {
          desc: "Extra Product Charge",
          cost: "$10+"
        }
      ]
    },
    {
      image: Hana,
      name: 'Hana',
      position: 'Stylist',
      bio: [
        "Being a stylist for 8 years I have accomplished so much already but I learn something new every day that is what keeps me passionate about this industry. I am always looking to learn and gather more influence from those around me and by constantly continuing my education. I do a wide range of color services including foiling and balayage as well as keeping up with the latest trends in styles and cuts. I have specialized in Hot Heads Hair extensions for the last 3 years. I love working with extensions because there are so many ways you can utilize them, from adding length, volume, or both as well as using them for a temporary accent color. Also clients that are experiencing thinning hair and hair loss have had wonderful results with these extensions. I have experience doing special occasion styling with small and large bridal parties. As independent stylist I have the opportunity to collaborate with the bride to customize their style whether they are in the salon or on location. Creating lasting relationships with clients is one of the best parts of being a stylist. Communication is most important to ensure that you leave with the style love."
      ],
      contact: "Hana's hours are Tuesdays and Thursdays 10 to 7 and Saturdays 9 to 6. To schedule an appointment you can call Hana directly at",
      phone: "206-856-8569",
      pricing: [
        {
          desc: "Women's Cut",
          cost: "$55"
        },
        {
          desc: "Single Process Color",
          cost: "$75+"
        },
        {
          desc: "Specialty Color",
          cost: "$150+"
        },
        {
          desc: "Retouch",
          cost: "$55+"
        },
        {
          desc: "Partial Highlight",
          cost: "$95+"
        },
        {
          desc: "Full Highlight",
          cost: "$125"
        },
        {
          desc: "Blow Dry",
          cost: "$45"
        },
        {
          desc: "Special Occasion",
          cost: "$55+"
        },
        {
          desc: "Bridal",
          cost: "Consultation"
        },
        {
          desc: "Extensions",
          cost: "Consultation"
        }
      ]
    },
    {
      image: Polly,
      name: 'Polly',
      position: 'Stylist',
      bio: [
        ""
      ],
      contact: "To schedule an appointment with Polly and get detailed prices, you can contact her directly at",
      phone: "206-910-8680"
    },
    {
      image: Sarah,
      name: 'Sarah',
      position: 'Stylist',
      bio: [
        ""
      ],
      contact: "To schedule an appointment with Sarah, call",
      phone: "206-235-8304"
    },
    {
      image: Dusty,
      name: 'Dusty',
      position: 'Stylist',
      bio: [
        "Arizona native recently transplanted to the beautiful Pacific Northwest! I graduated from Brillare Hairdressing Academy in 2012, where I had the privilege to learn from some of Arizona's top stylists. I immediately found my home at a busy Aveda salon in Tempe, Arizona, where I worked my way up to earn the title of Senior Stylist and Educator. While at Mood Swings Salon, I had the opportunity to refine my craft and learn new techniques from numerous successful stylists.",
        "I am excited to settle into my new home here in the Wallingford neighborhood, and to fill my chair with beautiful smiling faces! I specialize in short women's cuts, men's scissor cuts, balayage, and blondes! I see each guest based on personal style, hair type and lifestyle. I would love to get to know you and make you look and feel your absolute best!"
      ],
      contact: "To schedule an appointment with Dusty, visit",
      website: "http://dustywynn.com",
      instagram: "dusty_locks"
    },
    {
      image: Gayle,
      name: 'Gayle',
      position: 'Stylist',
      bio: [
        "Gayle has been a stylist in the Queen Anne area for the last 25 years, and is happy and excited to call Modify her new home. She has clients that have been with her for as little as a year, to as long as 25 years. She loves doing color work and finding the perfect pallet to complement your perfect style. She listens to what you want and makes suggestions based on your wants and needs, but lets you know what will work best for you too!",
        "When not at work, Gayle is a busy mom of a 14 year old girl and a 10 year old boy. When not running to soccer or basketball games, she and her family are off camping and enjoying family life. Gayle is happily accepting new clients as well."
      ],
      contact: "To schedule an appointment with Gayle, you can contact her directly at",
      phone: "206-601-8215",
      pricing: [
        {
          desc: "Women's Cut",
          cost: "$55"
        },
        {
          desc: "Men's Cut",
          cost: "$50"
        },
        {
          desc: "Partial Foil",
          cost: "$80+"
        },
        {
          desc: "Cut & Color",
          cost: "$120+"
        },
        {
          desc: "Retouch",
          cost: "$65+"
        },
        {
          desc: "All Over Color",
          cost: "$120+"
        },
        {
          desc: "Full Foil",
          cost: "$100+"
        },
        {
          desc: "Cut, Color and Small Foil",
          cost: "$150+"
        }
      ]
    },
    {
      image: Alysia,
      name: 'Alysia',
      position: 'Stylist',
      bio: [
        "Loving what it do is an understatement. My passion for the beauty industry started when I was just 17 years old while working at Karin's Beauty Supplies retailing professional products. I graduated from Toni & Guy Hairdressing Academy in 2012. After graduation I immediately started as a 6 month apprenticeship at Domino Beauty Boutique where I remained a busy Stylist, Colorist and Makeup artist for almost four years. Whithin that four years, I have established a niche for Creative Color, Balayage, fun haircuts, and makeup applications. Advancing my education to keep up with the ever changing ways of hair is a must. I have attended many advanced education classes over the years, here are a few: Mens Barbering, Kaeratin Complex, S.R Cutting classes (men, women and creative), Advanced Glo Minerals Makeup application, and have extensive color education with Davines as well as Pravana Vivids creative color. I use Davines color because I love that they care about the earth and sustaining beauty. Check them out! I offer onsite and in salon bridal services and special event styling with a consultation. Please feel free to check out my Instagram for pictures of my work @ a.ransonhair as well as reach me personally to ask any questions and to book your next service."
      ],
      contact: "To book an appointment with Alysia, call, text or email her at",
      phone: "206-446-7093",
      email: "alysia.ransom@gmail.com",
      instagram: "a.ransombeauty",
      pricing: [
        {
          desc: "Women's Cut",
          cost: "$55"
        },
        {
          desc: "Men's Cut",
          cost: "$45"
        },
        {
          desc: "Partial Foil",
          cost: "$130"
        },
        {
          desc: "Full Foil",
          cost: "$150"
        },
        {
          desc: "Kid's Cut",
          cost: "$30"
        },
        {
          desc: "Retouch",
          cost: "$70+"
        },
        {
          desc: "All Over Color",
          cost: "$85+"
        },
        {
          desc: "Balayage",
          cost: "$150+"
        },
        {
          desc: "Ombre",
          cost: "$150+"
        },
        {
          desc: "Face Frame",
          cost: "$70"
        }
      ]
    },
    {
      image: Robin,
      name: 'Robin',
      position: 'Stylist',
      bio: [
        "I am freelance hair stylist working behind the chair since 2004. Passionate about the artistry that is formulating color and sculpting hair, I specialize in bespoke color application, cutting and event styling. Working together with clients, I strive to create beautiful everyday wearable hair."
      ],
      contact: "To schedule an appointment with Robin, visit",
      website: "http://robinsalas.com",
      phone: "206-650-9822",
      pricing: [
        {
          desc: "Haircut",
          cost: "$65"
        },
        {
          desc: "Kid's Cut (12-17 yrs)",
          cost: "$40"
        },
        {
          desc: "Bang/Neck Trim",
          cost: "$15 (complimentary between services)"
        },
        {
          desc: "Blowout",
          cost: "$65"
        },
        {
          desc: "Single Process Color",
          cost: "$75+"
        },
        {
          desc: "Face Frame Foil",
          cost: "$65"
        },
        {
          desc: "Partial Foil",
          cost: "$110+"
        },
        {
          desc: "Full Foil",
          cost: "$140+"
        },
        {
          desc: "Custom Color",
          cost: "$150+"
        },
        {
          desc: "Bleach and Tone",
          cost: "$150+"
        },
        {
          desc: "Corrective Color",
          cost: "Consultation"
        },
        {
          desc: "Keratin Treatment",
          cost: "$250+"
        },
        {
          desc: "Iron Work",
          cost: "$20"
        },
        {
          desc: "Kevin Murphy Treat.Me",
          cost: "$30"
        },
        {
          desc: "Glossing",
          cost: "$40"
        }
      ]
    },
    {
      image: Mitch,
      name: 'Mitch',
      position: 'Stylist',
      bio: [
        "Mitch is an inspired artist/colorist/barber/craftsman/stylist who prioritizes you as an individual, and the art of service.  He has been regarded as a high quality professional since 2004 by peers, mentors, clients and hair heroes alike.  Come book a complimentary consultation to address your hair needs and wants, so that you can look good, feel good, and do good!"
      ],
      contact: "To schedule an appointment with Mitch, visit",
      website: "www.vagaro.com/goseemitch",
      phone: "206-348-6661",
      pricing: [
        {
          desc: "Haircut",
          cost: "$70"
        },
        {
          desc: "Frequent Flyer Cut(under 4 weeks)",
          cost: "$45"
        },
        {
          desc: "Youth Cut (4-17 yrs)",
          cost: "$35"
        },
        {
          desc: "Bang,Neck or Beard Trim",
          cost: "$10"
        },
        {
          desc: "Shampoo & Blow Dry (natural)",
          cost: "$40"
        },
        {
          desc: "Blowout",
          cost: "$60"
        },
        {
          desc: "Single Process Color",
          cost: "$80+"
        },
        {
          desc: "Partial Highlight",
          cost: "$125+"
        },
        {
          desc: "Full Highlight",
          cost: "$150+"
        },
        {
          desc: "Face Frame Highlight",
          cost: "$70"
        },
        {
          desc: "Custom Color",
          cost: "$150+"
        },
        {
          desc: "Bleach & Tone",
          cost: "$150+"
        },
        {
          desc: "Corrective Color",
          cost: "$100/hr"
        },
        {
          desc: "Kevin Murphy Treat.Me",
          cost: "$30"
        },
        {
          desc: "Glossing",
          cost: "$40"
        },
        {
          desc: "Extra Product Charge",
          cost: "$10"
        }
      ]
    }
  ];

  if (stylist !== undefined) {
    for (let i = 0; i < stylistList.length; i++) {
      if (stylistList[i].name.toLowerCase() === stylist) {
        return stylistList[i];
      }
    }
  } else {
    return stylistList;
  }
}

export function getServices() {
  return [
    {
      name: "Women's Hair Cut",
      cost: "$50 and up"
    },
    {
      name: "Men's Hair Cut",
      cost: "$50 and up"
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
      name: "Extensions*",
      cost: "Upon Consult"
    },
    {
      name: "Keratin Smoothing System**",
      cost: "Upon Consult"
    }
  ];
}
