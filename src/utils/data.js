import { spCart, prToy1, prToy2, prToy3, prToy4, review } from '@static';

export const catalogList = [
  { id: '1', name: 'For cat', code: 'forCat' },
  { id: '2', name: 'For dog', code: 'forDog' },
];

export const products = [
  {
    id: '1',
    name: 'Ball for a dog «Denta Fun» d=5 см (rubber)',
    scu: '1541428774',
    stars: 5,
    reviews: 2,
    images: [prToy1, prToy1, prToy1, prToy1],
    sizes: ['Small (Ø 2 inch)', 'Large (Ø 3 inch)'],
    colors: [prToy1, prToy1],
    price: 4,
    quantity: 1,
    discount: {
      isDiscount: false,
      price: 2,
    },
    image: prToy1,
    isNew: false,
    type: 'Ball',
    animal: 'Dog',
    material: 'Polymer',
    size: 'Ø 2 inch',
    color: 'Red',
    country: 'China',
    details:
      'The KONG Squeezz Ball has a recessed squeaker that ' +
      'gives the safest and funnest squeak of any toy out there. ' +
      'Great for games of fetch, the erratic bounce and squeak ' +
      'guarantee tons of fun for you and your dog.',
    features: [
      "Perfect for games of fetch because it's easy and fun to squeak",
      'Recessed, hidden squeakers keep the squeak going even when punctured',
      'Fun, erratic bounce keeps your dog engaged',
      'Ideal for play indoors and out',
    ],
    catalog: 'forCat',
  },
];

export const popularProducts = [
  {
    id: 1,
    image: prToy1,
    name: 'Ball for a dog «Denta Fun» d=5 см (rubber)',
    reviews: 2,
    isNew: false,
    price: 4,
    stars: 5,
    discount: {
      isDiscount: false,
    },
    catalog: 'forCat',
  },
  {
    id: 2,
    image: prToy2,
    name: 'Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy',
    reviews: 5,
    isNew: false,
    price: 10,
    stars: 5,
    discount: {
      isDiscount: true,
      currPrice: 5,
    },
    catalog: 'forCat',
  },
  {
    id: 3,
    image: prToy3,
    name: 'Mammoth Cottonblend 3 Knot Dog Rope Toy, Color Varies, Large',
    reviews: 10,
    isNew: true,
    price: 8.5,
    stars: 5,
    discount: {
      isDiscount: false,
    },
    catalog: 'forCat',
  },
  {
    id: 4,
    image: prToy4,
    name: 'Frisco Bird Teaser with Feathers Cat Toy',
    reviews: 10,
    isNew: false,
    price: 3.42,
    stars: 5,
    discount: {
      isDiscount: false,
    },
    catalog: 'forCat',
  },
  {
    id: 5,
    image: prToy4,
    name: 'Frisco Bird Teaser with Feathers Cat Toy',
    reviews: 10,
    isNew: false,
    price: 3.42,
    stars: 5,
    discount: {
      isDiscount: false,
    },
    catalog: 'forDog',
  },
  {
    id: 6,
    image: prToy4,
    name: 'Frisco Bird Teaser with Feathers Cat Toy',
    reviews: 10,
    isNew: false,
    price: 3.42,
    stars: 5,
    discount: {
      isDiscount: false,
    },
    catalog: 'forDog',
  },
  {
    id: 7,
    image: prToy4,
    name: 'Frisco Bird Teaser with Feathers Cat Toy',
    reviews: 10,
    isNew: false,
    price: 3.42,
    stars: 5,
    discount: {
      isDiscount: false,
    },
  },
];
export const reviewsList = [
  {
    id: 1,
    date: '19.07.2022',
    username: 'Alex',
    stars: 5,
    body:
      'Dog loved this thing even before I got it completely out of the box. ' +
      'Within 1 hr. cover was torn and inside exposed. Tossing, chewing and ' +
      'shaking went on for an hour straight. Removed it from her mouth and ' +
      'all goes back to good. Might have been a one off, but be watchful. ' +
      'Would buy again. ',
    images: [review, review, review, review, review, review],
  },
  {
    id: 2,
    date: '19.07.2022',
    username: 'Richard',
    stars: 5,
    body:
      "This is our dog's favorite toy. She plays with it indoors and outdoors. " +
      'It is not very durable, because she is a chewer. She pulls the "threads" ' +
      'out one by one until she takes the cover off, then chews the foam football ' +
      'apart bite by bite. We let her play indoors with it until she starts ' +
      'leaving little white pieces of foam around house, + then we leave it ' +
      'outdoors until she pulls the cover off and destroys the rest of it. ',
    images: [],
  },
  {
    id: 3,
    date: '19.07.2022',
    username: 'Alex',
    stars: 5,
    body:
      'Our 6 month old German Shepherd puppy loves this dragon! It has quickly ' +
      "become a favorite in just a few days. The dragon's wings make a crinkle noise " +
      "and it's belly squeaks. It's perfect for fetch and tug of war. He also " +
      'loves to just carry it around, squeak and shake It. Will definitely buy more toys.',
    images: [review, review],
  },
  {
    id: 4,
    date: '19.07.2022',
    username: 'Richard',
    stars: 5,
    body:
      'Our 6 month old German Shepherd puppy loves this dragon! It has quickly ' +
      "become a favorite in just a few days. The dragon's wings make a crinkle noise " +
      "and it's belly squeaks. It's perfect for fetch and tug of war. He also " +
      'loves to just carry it around, squeak and shake It. Will definitely buy more toys.',
    images: [review, review, review],
  },
  {
    id: 5,
    date: '19.07.2022',
    username: 'Richard',
    stars: 5,
    body:
      'Our 6 month old German Shepherd puppy loves this dragon! It has quickly ' +
      "become a favorite in just a few days. The dragon's wings make a crinkle noise " +
      "and it's belly squeaks. It's perfect for fetch and tug of war. He also " +
      'loves to just carry it around, squeak and shake It. Will definitely buy more toys.',
    images: [review, review, review],
  },
  {
    id: 6,
    date: '19.07.2022',
    username: 'Richard',
    stars: 5,
    body:
      'Our 6 month old German Shepherd puppy loves this dragon! It has quickly ' +
      "become a favorite in just a few days. The dragon's wings make a crinkle noise " +
      "and it's belly squeaks. It's perfect for fetch and tug of war. He also " +
      'loves to just carry it around, squeak and shake It. Will definitely buy more toys.',
    images: [review, review, review],
  },
];

export const specialOffer = [
  {
    id: 1,
    image: spCart,
    title1: 'free',
    title2: 'shipping',
    title3: 'Go to your shopping cart and use promocode',
  },
  {
    id: 2,
    image: spCart,
    title1: 'free',
    title2: 'shipping',
    title3: 'Go to your shopping cart and use promocode',
  },
  {
    id: 3,
    image: spCart,
    title1: 'free',
    title2: 'shipping',
    title3: 'Go to your shopping cart and use promocode',
  },
];
