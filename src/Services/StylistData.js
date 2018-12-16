export function getStylists(stylist) {
  const stylistList = [
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/jodi.jpg',
      name: 'Jodi',
      position: 'Owner & Stylist',
      bio: [
        "As a stylist in the industry for over 20 years, Jodi’s passion shines through with the diversity that she gets with every guest she sees. Every client has a different story to tell as well as a different identity of what they want their hair to evoke, and Jodi's favorite part of what she does is building long term relationships. She makes it a priority to actively listen and understand what her clients are looking for, as well as educating them on how to duplicate their style at home.",
        "Jodi’s education started as a graduate of the Aveda Institute in Minneapolis in 1998, and has continued her education with a wide range of educators to actively keep herself challenged with different brands and techniques. Feel free to schedule a complimentary consultation to discuss your needs."
      ],
      schedule: "Jodi works Tuesdays, Fridays, and alternating Thursdays & Saturdays and welcomes scheduling appointments in advance.",
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
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/lelia.jpg',
      name: 'Lelia',
      position: 'Stylist',
      bio: [
        "Lelia Carroll is our resident “mixologist”. She loves concocting special cocktails of color much like she used to tend bar. She is the ultimate multi tasker! Lelia brings a no nonsense, get it done east coast mentality to her work and fuses it with her laid back Hawaiian attitude. Both areas she used to call home.",
        "Lelia is excellent in all areas of hairdressing. While she loves blondes, brunettes, grey coverage and classic haircutting, Lelia has a special affection for razor cutting with a straight edge, beautiful red toned colors, Foilyage, Balyage, and Ombré, fun color placement techniques, and men's cuts. Give Lelia a try if you love a person that is very outgoing, exuberant, and will make you the focus of their attention."
      ],
      contact: "Lelia works Wednesday, Friday and every other Saturday. She welcomes scheduling appointments in advance and loves to take walk-ins when she can!",
      phone: "206-919-7805",
      pricing: [
        {
          desc: "Women's Cut",
          cost: "$75"
        },
        {
          desc: "Men's Cut",
          cost: "$65"
        },
        {
          desc: "Shampoo/Dry/Style",
          cost: "$65"
        },
        {
          desc: "Root Retouch",
          cost: "$85+"
        },
        {
          desc: "Cellophane",
          cost: "$95+"
        },
        {
          desc: "Single Process Color",
          cost: "$115+"
        },
        {
          desc: "Partial Foil",
          cost: "$175+"
        },
        {
          desc: "Full Foil",
          cost: "$185+"
        },
        {
          desc: "Balyage/Ombré",
          cost: "$185+"
        },
        {
          desc: "Foilyage",
          cost: "$220+"
        },
        {
          desc: "Toner",
          cost: "$45+"
        },
        {
          desc: "Extra Product Charge",
          cost: "$10+"
        }
      ]
    },
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/hana.jpg',
      name: 'Hana',
      position: 'Stylist',
      bio: [
        "Being a stylist for 9 years, I have accomplished so much but I learn something new every day that is what keeps me passionate about this industry. I am always looking to learn and gather more influence from those around me and by constantly continuing my education. I do a wide range of color services including foiling and balayage as well as keeping up with the latest trends in styles and cuts.",
        "I have specialized in Hot Heads Hair extensions for the last 7 years. I love working with extensions because there are so many ways you can utilize them, from adding length, volume, or both as well as using them for a temporary accent color. Also clients that are experiencing thinning hair and hair loss have had wonderful results with these extensions.",
        "I have experience doing special occasion styling with small and large bridal parties. As an independent stylist I have the opportunity to collaborate with the bride to customize their style whether they are in the salon or on location. Creating lasting relationships with clients is one of the best parts of being a stylist. Communication is most important to ensure that you leave with the style love."
      ],
      phone: "206-856-8569",
      email: 'hasumner23@gmail.com',
      pricing: [
        {
          desc: "Women's Cut",
          cost: "$60"
        },
        {
          desc: "Root Retouch",
          cost: "$70+"
        },
        {
          desc: "Single Process Color",
          cost: "$100+"
        },
        {
          desc: "Partial Foil/Balayage",
          cost: "$95+"
        },
        {
          desc: "Full Foil/Balayage",
          cost: "$145"
        },
        {
          desc: "Specialty Color",
          cost: "$150+"
        },
        {
          desc: "Blow Dry",
          cost: "$45"
        },
        {
          desc: "Brazillian Blowout",
          cost: "$200+"
        },
        {
          desc: "Special Occasion/Bridal",
          cost: "By Consultation"
        },
        {
          desc: "Extensions",
          cost: "$250"
        }
      ]
    },
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/polly.png',
      name: 'Polly',
      position: 'Stylist',
      bio: [
        ""
      ],
      email: "polly22johnson@yahoo.com"
    },
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/dusty.jpg',
      name: 'Dusty',
      position: 'Stylist',
      bio: [
        "I started my career 6 years ago at Mood Swings Salon, a popular Aveda salon in Tempe, Arizona. While there, I had the opportunity to refine my craft and learn new techniques from a number of successful stylists.",
        "My specialties are precision cuts, balayage, and blondes! I provide a customized look for each of my guests based on personal style, hair type and lifestyle. I look forward to making you look and feel your absolute best!"
      ],
      website: "http://dustywynn.com"
    },
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/robin.jpg',
      name: 'Robin',
      position: 'Stylist',
      bio: [
        "I am freelance hair stylist working behind the chair since 2004. Passionate about the artistry that is formulating color and sculpting hair, I specialize in bespoke color application, cutting and event styling. Working together with clients, I strive to create beautiful everyday wearable hair."
      ],
      website: "http://robinsalas.com",
      phone: "206-650-9822",
      pricing: [
        {
          desc: "Haircut",
          cost: "$75"
        },
        {
          desc: "Express/Young Adult Cut",
          cost: "$50"
        },
        {
          desc: "Kid's Cut (12-17 yrs)",
          cost: "$35"
        },
        {
          desc: "Bang/Neck Trim",
          cost: "$15"
        },
        {
          desc: "Shampoo & Blow Dry",
          cost: "$40"
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
          desc: "Framing Foil",
          cost: "$75"
        },
        {
          desc: "Partial Foil",
          cost: "$115+"
        },
        {
          desc: "Full Foil",
          cost: "$150+"
        },
        {
          desc: "Custom Color",
          cost: "$175+"
        },
        {
          desc: "Bleach and Tone",
          cost: "$175+"
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
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/mitch.jpg',
      name: 'Mitch',
      position: 'Stylist',
      bio: [
        "Mitch is an inspired artist/colorist/barber/craftsman/stylist who prioritizes you as an individual, and the art of service.  He has been regarded as a high quality professional since 2004 by peers, mentors, clients and hair heroes alike.  Come book a complimentary consultation to address your hair needs and wants, so that you can look good, feel good, and do good!"
      ],
      website: "http://vagaro.com/goseemitch",
      phone: "206-348-6661",
      pricing: [
        {
          desc: "Haircut",
          cost: "$70"
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
    },
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/tina.jpg',
      name: 'Tina',
      position: 'Stylist',
      bio: [
        "After working with a diverse clientele at a non-profit agency, as well as studying Social Science at the University of Washington, Tina finally decided to pursue her true passion in the hair industry. During her career, she has mastered a wide range of techniques that allow her to create personalized looks to showcase your best features.",
        "Tina excels working with long hair and curls and loves working with rich color tones and dimension. In addition to her extensive knowledge with cutting and coloring, Tina also specializes in performing the Coppola Keratin Complex Smoothing System and is fantastic with makeup.",
        "Tina is committed to hard work, continued education and being the best at what she does but also  enjoys taking time out of work to relax, travel and check out live music when she can."
      ],
      phone: "425-502-5174"
    },
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/avatar.jpg',
      name: 'Sarah',
      position: 'Stylist',
      bio: [
        ""
      ],
      phone: "206-235-8304"
    },
    {
      image: 'https://s3.amazonaws.com/modifyhair-images/stylists/avatar.jpg',
      name: 'Schona',
      position: 'Stylist',
      bio: [
        "We are all naturally beautiful. My approach as a stylist is to enhance the natural beauty everyone inhabits. I am a down to earth hairstylist and makeup artist who views her trade as an art form. Hair is my favorite canvas to create wearable works of art that fit into everyone's lifestyle. I love spending my day designing hair that can easily be styled, and looks good all the way up until your next appointment. Dramatic change, whether that's a different cut, new color, updo, or a makeup application is a space where I thrive and let my creativity flow. I take the time to truly look at you as a person: your bone structure, face shape, and how you carry yourself, to find the optimal haircut and/or color that enhances what makes you uniquely beautiful. You don't have to spend hours styling your hair to look good and my job is to match the amount of styling that fits your personality and lifestyle."
      ],
      website: "http://vagaro.com/schona",
      phone: "206-371-8683",
      instagram: 'Schonachristie_Hairandmakeup'
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
