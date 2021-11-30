import { Product } from "./email.model";
export const IMAGE_CROP_SIZE = 800;

export const SEND_EMAIL_GENERAL_TEXT = 'https://indahbody.africa/api/general-email.php';
export const COMPANY_EMIAL = 'support@indahbody.africa';
export const ORDER = 'ORDER';
export const COMPANYID = 'indahbody';
export const ITEM_TYPES = {
  PRODUCT: {
    Id: 'product',
    Name: 'Product',
  },
  PROMOTION: {
    Id: 'promotion',
    Name: 'Promotion',
  }
};




export const SKIN_TYPES: any[] = [
  {
    Id: 'Normal-Skin',
    Name: 'Normal Skin',
    Description: `This skin is neither too dry nor too oily.
       It has regular texture, minimal blemish and a clean, soft appearance, and does not need special care.`,
    Icon: 'assets/images/i1.png'
  },
  {
    Id: 'Sensitive-Skin',
    Name: 'Sensitive Skin',
    Description: `
      Sensitive skin is more prone to react to stimuli to which normal skin has no reaction.
      It is a fragile skin, usually accompanied by feelings of discomfort, such as heat, tightness, redness or itching.
      It is a delicate skin that needs more care to fight dryness, roughness and its usual appearance.
      `,
    Icon: 'assets/images/i2.png'
  },
  {
    Id: 'Dry-Skin',
    Name: 'Dry Skin',
    Description: `
      In many cases, dry skin is caused by external factors such as the weather ,
      low air humidity and immersion in hot water, and it is usually temporary.
It is generally characterized by a feeling of tightness and roughness.
  It may also acquire an ashy gray color, with occurrence of desquamation, itching, redness and small cracks.
      `,
    Icon: 'assets/images/i3.png'
  },

  {
    Id: 'Oily-Skin',
    Name: 'Oily  Skin',
    Description: `
    Oily skin occurs when the sebaceous glands produce too much sebum, or oil, 
    which can make it look shiny or greasy. Excess sebum can also block pores and lead to pimples.
     Areas most affected are the face, neck, chest and back.

    Many people have oily skin during puberty, but some people’s skin is oily all their life,
     because of predisposing genes or hormones. If your parents had oily skin, you may have it, too.
      And any hormonal changes – due to menstruation, pregnancy, emotional situations, 
    the transition into menopause – can also cause skin to become oily.
      `,
    Icon: 'assets/images/oily.png'
  },
  {
    Id: 'Combination-Skin',
    Hided: true,
    Name: 'Combination   Skin',
    Description: `
    Combination Skin Type
Your skin can be dry or normal in some areas
 and oily in others, such as the T-zone (nose, forehead, and chin).
  Many people have this type. It may need slightly different care in different areas.
\n

  Combination skin can have:

  Pores that look larger than normal, because they’re more open
  Blackheads
  Shiny skin
      `,
    Icon: 'assets/images/comp.png'
  },


];


// export const PRODUCTS: Product[] = [
//   {
//     Name: 'Foaming facial cleanser - 150ml',
//     Description: `
//     <p>
//     This beautiful foaming cleanser gently but effectively cleans the skin removing makeup and daily grime and impurities. Its combination of natural ingredients and essential oils leave skin clean, shine free and refreshed! This sulfate-free and paraben-free foaming facial cleanser 
//     is suitable for all skin types, but is especially ideal for balancing oily and combination skin.
//     </p>
//     `,
//     Icon: 'assets/images/products/Foaming-facial-cleanser.png',
//     Price: 225,
//     Quantity: 1,
//     Category: 'All skin types'
//   },
//   {
//     Name: 'Body polish - 150g',
//     Description: `
//     <p>
//     The skin is in a constant state of turnover: Dead skin rises to the surface, sheds naturally and reveals the baby soft skin underneath. This process slows over time, contributing to a build-up of dead cells on the skin’s surface. Add pollution and other
//      forms environmental stresses to the mix, and you have a recipe for dull, rough and itchy skin.
//     </p>
//     <p>
//     As with all exfoliators, the goal of a body scrub is to remove dead skin cells and encourage the healthy production of new ones.
//      This type of mechanical exfoliation not only smooths and polishes the skin but also draws out impurities
//     </p>

//     <p>
//     <u> <b>  benefits of body polish include:</b> </u> <br> <br>
//     •	Promoting efficient circulation and skin cell turnover<br>
//     •	Removing dead cells from the skin’s surface<br>
//     •	Smoothing and softening rough, dry skin<br>
//     •	Drawing out impurities and clearing congestion<br>
//     •	Freeing ingrown hairs and smoothing razor bumps<br><br>
    

//     </p>

//     <p>
//     Sugar granules are rounder and less abrasive than salt, making them a gentler exfoliant. A natural source of glycolic acid (an AHA), sugar breaks down layers of dead skin and smooths the skin’s surface. It also speeds up rehydration, keeping skin conditioned and moisturized.
//      For this reason, sugar scrubs are a fantastic pick for dry and dehydrated types. 
//     </p>
    
//     `,
//     Icon: 'assets/images/products/Sugar-polish.png',
//     Icon2: 'assets/images/products/body-polish2.png',
//     Price: 115,
//     Quantity: 1,
//     Category: 'Normal-skin & sensitive-skin'
//   },
//   {
//     Name: 'Body wash',
//     Description: `
//     <p>
//     The jojoba enriched shower gel in the fragrance lavender and 
//     ylang ylang is formulated to nourish your skin with enriching 
//     oils  and bring an elevated mood to your mood 
//     </p>
//     `,
//     Icon: 'assets/images/products/body-wash1.png',
//     Icon2: 'assets/images/products/body-wash2.png',
//     Price: 95,
//     Quantity: 1,
//     Category: 'Oily-skin & Combination-skin'
//   },
//   {
//     Name: 'Vitamin C Serum - 50ml',
//     Description: `
//     <p>
//     Use ONLY at night time. 2-3 drops of serum in palms, gently rub together and smooth over your face & decolletage area. Active Vitamin C will have a tingly effect on your skin. If too intense, for the first week we suggest you dilute the serum with a drop of water.
//      Test on small area of skin for a reaction. If burning or redness occurs discontinue use.
//     </p>
//     `,
//     Icon: 'assets/images/products/Vitamin-C-Serum.png',
//     Price: 280,
//     Quantity: 1,
//     Category: 'Combination-skin & Normal-Skin'
//   },
//   {
//     Name: 'Kaoline Clay mask - 100g',
//     Description: `
//     <p>
//     The kaolin clay mask is a paste kaolin mask your face and body formulated for even tone , 
//     enriched with Vitamin B3,almond oil, vegetable glycerine and kaoline.
//     </p>
//     `,
//     Icon: 'assets/images/products/Kaoline-Clay-mask.png',
//     Price: 110,
//     Quantity: 1,
//     Category: 'Sensitive-skin & oily-skin'
//   },
//   {
//     Name: 'Bath milk - 500g',
//     Description:
//       `
//     <p>
// <u> <b>   Bath Milk has 5 Benefits</b> </u> <br>
//     Research is limited on the effectiveness of milk baths on the treatment of skin conditions. Where scientific research is lacking, there’s anecdotal evidence. 
//     Always talk with your doctor before using milk baths for the treatment of skin conditions. 
//     <br> <br>

//     <b> 1. Dry Skin</b> <br>
// If you live with dry skin, milk baths may help replenish lost moisture. Milk contains: 
// Proteins, fat vitamins, minerals, lactic acid
// The proteins and fat may help soften and soothe the skin. And lactic acid is a gentle exfoliator. Exfoliation is important for shedding dead skin cells, which can lead to softer skin. 
// In one study about skin care for women over age 65, researchers also found milk baths to provide effective relief from pruritus, or itchy skin. 
// <br> <br>

// <b>2. Eczema</b> <br>
// Eczema often causes rashes, bumpy skin, and irritation. Studies about the efficacy of milk baths for eczema are limited. 

// One trusted found that topically applying human breast milk was as effective for treating babies with eczema as hydrocortisone ointment. But more research is needed. 

// There isn’t currently any evidence that milk baths for adults are an effective treatment for eczema. It shouldn’t replace your prescribed skin medication. 
// If you find milk baths soothing, talk to your dermatologist to confirm they are safe for your skin. 
// <br> <br>
// <b>3. Psoriasis</b> <br>
// A milk bath may help treat psoriasis symptoms, including
//  itchy, flaky, or patchy skin. However, scientific research 
//  is limited on the effectiveness of a milk bath to treat psoriasis.
//   If you enjoy milk baths, confirm with your doctor that they are safe for you to take.  <br> <br>

// <b>4. Poison ivy</b> <br>
// Milk baths may help relieve poison ivy symptoms. The milk may help soothe redness, itchiness, and inflammation. But studies on the efficacy of a milk bath for treating poison ivy are limited. 

// <br> <br>


// <b>5. Sunburn </b> <br>
// The proteins, fat, amino acids, and vitamin A and D found in milk can be calming and soothing for sunburned skin. Try soaking for up to 20 minutes. Follow your bath with aloe vera or another moisturizer for best results. 

    
//     </p>
    
    
//     `,
//     Icon: 'assets/images/products/Bath-milk1.png',
//     Icon2: 'assets/images/products/Bath-milk2.png',
//     Price: 110,
//     Quantity: 1,
//     Category: 'Sensitive-skin & normal-skin'
//   },
//   {
//     Name: 'Rosea mist spray - 100ml',
//     Description: `
//     <p>Revered for its hydrating and calming benefits, the rose water is a natural perfume , toner,, make-up remover and general skint refresher. Rose water has healing qualities and helps in healing wounds and sunburn. It is suitable for all skin types, as it balances the oil contents and tones in oily skin, while sensitive skin is cooled and soothed. Rose water further aids to reduce inflammation and increases blood supply to skin.
//     Blends well with almond oi, jojoba oil and olive oil.
//     </p>
//     `,
//     Icon: 'assets/images/products/Rosea-mist-spray.png',
//     Price: 95,
//     Quantity: 1,
//     Category: 'All skin types'
//   },
//   {
//     Name: 'Bath bombs(3s)',
//     Description: `
//      <b>Benefits</b> <br>
// bath bomb adds emollients and softeners to your 
// bath's water that moisturize and indulge your skin. No matter
//  your skin type, the beneficial ingredients in bath bombs leave it soft, supple, and silky. It cleanses your skin, but the ingredients inside will also pamper and soothe it mood-boosting effect.

//     `,
//     Icon: 'assets/images/products/Bathbombs.png',
//     Icon2: 'assets/images/products/Bathbombs2.png',
//     Price: 110,
//     Quantity: 1,
//     Category: 'All skin types'
//   },
//   {
//     Name: 'Honey and Aloe Face Mask',
//     Description: `

//     <b>Benefits</b> <br>
// Aloe vera is a cactus. We use only the gel of the cactus, which is the translucent pulp of the leaves. The leaves are harvested when they are at least 3 years old, to have good enough medicinal properties. Aloe vera gel provides lots of moisture, vitamins, minerals, and antioxidants. soothe all sorts of skin irritations.
// <br>
// <br>
// It fades acne marks and dark spots and give you an even, youthful complexion
// Honey has antibacterial and anti-septic properties, so it gets rid of dirt and bacteria, perfect for both preventing and treating acne. Honey is full of antioxidants and boosts collagen production—two things that are MVPs in preventing aging and boosting glow

   
//     `,
//     Icon: 'assets/images/products/Honey-and-aloe-mask.png',
//     Price: 110,
//     Quantity: 1,
//     Category: 'All skin types'
//   },
//   {
//     Name: 'Himalayan salt scrub - 180g',
//     Description: `
//     <p>
//     <u> <b>  Benefits</b> </u> <br>
//     The abrasive action associated with salt scrubs invigorates the skin and helps to improve circulation. Improved circulation gives skin a natural glow. Scrubbing with salt also helps to remove bacteria from the skin and unclog pores. Salt has antiseptic qualities, and when applied to the skin it may help kill bacteria and
//      reduce inflammation along with any itching and pain associated with bacterial-related skin disease
//     </p>

//     <p>
//     Sloughing away dead skin cells actually promotes the growth of healthy new cells. This regeneration process tightens the skin, giving it a firmer and younger-looking appearance. Skin regeneration also reduces skin discoloration, evening out skin tone and improving texture.


//     </p>
//     `,
//     Icon: 'assets/images/products/Himalayan.png',
//     Icon2: 'assets/images/products/Himalayan2.png',
//     Price: 130,
//     Quantity: 1,
//     Category: 'Oily-skin & Combination-skin'
//   },








  //   {
  //   Name: 'kaoline clay mask',
  //   Description: `It is a long established fact that a reader will be distracted by the 
  //     readable content of a page when looking at its layout. The point of using 
  //     Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
  //     opposed to using 'Content here, content here', making it look like 

  //     `,
  //   Icon: 'assets/images/p1.png',
  //   Price: 70,
  //   Quantity: 1
  // },
  // {
  //   Name: 'Body body polish Sugar ',
  //   Description: `
  //     Body body polish Sugar makes an amazing abrasive ingredient in scrubs. 
  //     les a natural humectant, so it retains moisture and ensures skin is kept
  //      hydrated, making it ideal for delicate and sensitive skin, especially because
  //       it melts away upon contact with water 
  //     `,
  //   Icon: 'assets/images/p2.png',
  //   Price: 70,
  //   Quantity: 1
  // }

// ];