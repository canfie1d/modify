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
import Hana from '../Assets/Images/Stylists/avatar.jpg';
import Polly from '../Assets/Images/Stylists/avatar.jpg';
import Dusty from '../Assets/Images/Stylists/dusty.jpg';
import Gayle from '../Assets/Images/Stylists/gale.jpg';
import Alysia from '../Assets/Images/Stylists/alysia.jpg';
import Kat from '../Assets/Images/Stylists/kat.jpg';

export function galleryArr() {
  return [
    {
      image : gallery1,
      alt : 'stylist station by window with large mirror'
    },
    {
      image : gallery2,
      alt : 'hair product close-up'
    },
    {
      image : gallery4,
      alt : 'shampoo and conditioner close-up'
    },
    {
      image : gallery6,
      alt : 'front desk next to two shampoo bowls'
    },
    {
      image : gallery5,
      alt : 'stylist station close-up'
    },
    {
      image : gallery3,
      alt : 'entry to the salon with seating area'
    },
    {
      image : gallery7,
      alt : 'another angle of entry to the salon'
    },
    {
      image : gallery9,
      alt : 'stylist stations with large mirrors and leather chairs'
    },
    {
      image : gallery8,
      alt : 'wide shot of the salon and stylist stations'
    },
    {
      image : gallery10,
      alt : 'another angle of salon and stylist stations'
    },
    {
      image : gallery11,
      alt : 'stylist station near a window'
    },
    {
      image : gallery12,
      alt : 'stylist station close-up'
    }
  ];
}

export function getStylists(stylist) {
  let stylistList = [
    {
      image : Jodi,
      name : 'Jodi',
      position: 'Owner & Stylist',
      bio : [
        "As a stylist in the industry for nearly 18 years, Jodi’s passion shines through with the diversity that she gets with every guest she sees.  Every client has a different story to tell as well as a different identity of what they want their hair to evoke, and Jodi's favorite part of what she does is building long term relationships.  She makes it a priority to actively listen and understand what her clients are looking for, as well as educating them on how to duplicate their style at home.  Jodi’s education started as a graduate of the Aveda Institute in Minneapolis in 1998, and has continued her education with a wide range of educators  to actively keep herself challenged with different brands and techniques. Feel free to schedule a complimentary consultation to discuss your needs."
      ],
      contact: "Jodi works Tuesdays, Fridays, and alternating Thursdays & Saturdays and welcomes scheduling appointments in advance. You can reach her directly at",
      phone: "206-486-6566"
    },
    {
      image : Tina,
      name : 'Tina',
      position: 'Stylist',
      bio : [
        "After working with a diverse clientele at a non-profit agency, as well as studying Social Science at the University of Washington, Tina finally decided to pursue her true passion in the hair industry.  During her career, she has mastered a wide range of techniques that allow her to create personalized looks to showcase your best features. Tina excels working with long hair and curls and loves working with rich color tones and dimension. In addition to her extensive knowledge with cutting and coloring, Tina also specializes in performing the Coppola Keratin Complex Smoothing System and is fantastic with makeup. Tina is committed to hard work, continued education and being the best at what she does but also  enjoys taking time out of work to relax, travel and check out live music when she can."
      ],
      contact: "To schedule a appointment directly with Tina you can call her at",
      phone: "425-502-5174"
    },
    {
      image : Lelia,
      name : 'Leilia',
      position: 'Stylist',
      bio : [
        "Lelia Singleton is our resident “mixologist”. She loves concocting special cocktails of color much like she used to tend bar. She is the ultimate multi tasker! Lelia brings a no nonsense, get it done east coast mentality to her work and fuses it with her laid back Hawaiian attitude. Both areas she used to call home.",
        "Lelia is excellent in all areas of hairdressing. While she loves blonds, brunettes, grey coverage and classic haircutting, Lelia has a special affection for razor cutting with a straight edge, beautiful red toned colors, Ombré, fun color placement techniques, and men's cuts. Give Lelia a try if you love a person that is very outgoing, exuberant, and will make you the focus of their attention."
      ],
      contact: "Lelia works Tuesday, Wednesday, Friday and every other Saturday and welcomes scheduling appointments in advance and loves to take walk-ins when she can! You can reach her at",
      phone: "206-919-7805"
    },
    {
      image : Hana,
      name : 'Hana',
      position: 'Stylist',
      bio : [
        "Being a stylist for 8 years I have accomplished so much already but I learn something new every day that is what keeps me passionate about this industry. I am always looking to learn and gather more influence from those around me and by constantly continuing my education. I do a wide range of color services including foiling and balayage as well as keeping up with the latest trends in styles and cuts. I have specialized in Hot Heads Hair extensions for the last 3 years. I love working with extensions because there are so many ways you can utilize them, from adding length, volume, or both as well as using them for a temporary accent color. Also clients that are experiencing thinning hair and hair loss have had wonderful results with these extensions. I have experience doing special occasion styling with small and large bridal parties. As independent stylist I have the opportunity to collaborate with the bride to customize their style whether they are in the salon or on location. Creating lasting relationships with clients is one of the best parts of being a stylist. Communication is most important to ensure that you leave with the style love."
      ],
      contact: "Hana's hours are Tuesdays and Thursdays 10 to 7 and Saturdays 9 to 6. To schedule an appointment you can call Hana directly at",
      phone: "206-856-8569"
    },
    {
      image : Polly,
      name : 'Polly',
      position: 'Stylist',
      bio : [
        ""
      ],
      contact: "To schedule an appointment with Polly and get detailed prices, you can contact her at directly at",
      phone: "206-910-8680"
    },
    {
      image : Dusty,
      name : 'Dusty',
      position: 'Stylist',
      bio : [
        "Arizona native recently transplanted to the beautiful Pacific Northwest! I graduated from Brillare Hairdressing Academy in 2012, where I had the privilege to learn from some of Arizona's top stylists. I immediately found my home at a busy Aveda salon in Tempe, Arizona, where I worked my way up to earn the title of Senior Stylist and Educator. While at Mood Swings Salon, I had the opportunity to refine my craft and learn new techniques from numerous successful stylists.",
        "I am excited to settle into my new home here in the Wallingford neighborhood, and to fill my chair with beautiful smiling faces! I specialize in short women's cuts, men's scissor cuts, balayage, and blondes! I see each guest based on personal style, hair type and lifestyle. I would love to get to know you and make you look and feel your absolute best!"
      ],
      contact: "To schedule an appointment with Dusty, visit",
      website: "http://dustywynn.com",
      instagram: "dusty_locks"
    },
    {
      image : Gayle,
      name : 'Gayle',
      position: 'Stylist',
      bio : [
        "Gayle has been a stylist in the Queen Anne area for the last 25 years, and is happy and excited to call Modify her new home. She has clients that have been with her for as little as a year, to as long as 25 years. She loves doing color work and finding the perfect pallet to complement your perfect style. She listens to what you want and makes suggestions based on your wants and needs, but lets you know what will work best for you too!",
        "When not at work, Gayle is a busy mom of a 14 year old girl and a 10 year old boy. When not running to soccer or basketball games, she and her family are off camping and enjoying family life. Gayle is happily accepting new clients as well."
      ],
      contact: "To schedule an appointment with Gayle, you can contact her directly at",
      phone: "206-601-8215"
    },
    {
      image : Alysia,
      name : 'Alysia',
      position: 'Stylist',
      bio : [
        "Loving what it do is an understatement. My passion for the beauty industry started when I was just 17 years old while working at Karin's Beauty Supplies retailing professional products. I graduated from Toni & Guy Hairdressing Academy in 2012. After graduation I immediately started as a 6 month apprenticeship at Domino Beauty Boutique where I remained a busy Stylist, Colorist and Makeup artist for almost four years. Whithin that four years, I have established a niche for Creative Color, Balayage, fun haircuts, and makeup applications. Advancing my education to keep up with the ever changing ways of hair is a must. I have attended many advanced education classes over the years, here are a few: Mens Barbering, Kaeratin Complex, S.R Cutting classes (men, women and creative), Advanced Glo Minerals Makeup application, and have extensive color education with Davines as well as Pravana Vivids creative color. I use Davines color because I love that they care about the earth and sustaining beauty. Check them out! I offer onsite and in salon bridal services and special event styling with a consultation. Please feel free to check out my Instagram for pictures of my work @ a.ransonhair as well as reach me personally to ask any questions and to book your next service."
      ],
      contact: "To book an appointment with Alysia, call, text or email her at",
      phone: "206-446-7093",
      email: "alysia.ransom@gmail.com",
      instagram: "a.ransombeauty"
    },
    {
      image : Kat,
      name : 'Kat',
      position: 'Stylist',
      bio : [
        "The immediate, visible outcome of helping her clients manifest the best versions of themselves is Kat’s professional dream-come-true. The core of her approach is to help clients feel like their best selves: beautiful, unique, emboldened, empowered, and proud. Kat is a self-proclaimed hair-nerd and can geek out on anything hair-related. She loves loves all of it: the technicality of cuts, the science of color, the art and aesthetics of styling, and the opportunity to work with diverse hair types and textures, including ethnic and multi-cultural hair.",
        "Besides great hair, another of Kat’s primary goals is to connect with her clients who give her the honor and privilege of traveling through life with them: styling them so they feel gorgeous on their wedding days, watching their children grow up and then doing their kids’ hair when they’re old enough, helping them look great for a new job or leveling-up in their careers, pampering them when they’re going through hardships like divorce or the death of a loved one. She aims to be a trusted, caring, and consistent force in her client’s lives.",
        "Kat was a member of the lead hair stylist team for the Fashion XT awards, which was featured in Time magazine, and has worked with Wella, Goldwell, Redken, Scruples, Pravana, Kenra, Neuma, Kevin Murphy, Davines, Tigi, Matrix, and Chi. She specializes in balayage, ombré, blonding, vivid colors for all hair types in addition to vintage to classic up-dos."
      ],
      contact: "To schedule an appointment, contact Kat directly at",
      phone: "503-410-9436",
      instagram: "katperrihair"
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
