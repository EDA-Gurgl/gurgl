
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing').del()
    .then(function () {
      return knex('clothing').insert([
        {
          id: 100,
          size_id: 32,
          style_id: 8,
          brand_id: 5,
          condition_id: 22,
          status_id: 51,
          description: 'Very cute neutral babygrow, in nice condition.  Please note there is slight pilling on rear. Fit  comes up slightly small. Suitable as an under-layer or for use in warmer weather.',
          photo1: '/images/babyg_1.jpg',
          photo2: '/images/photo_2.svg'
        },
        {
          id: 120,
          size_id: 35,
          style_id: 4,
          brand_id: 2,
          condition_id: 21,
          status_id: 51,
          description: 'Amazing quality, gold text slightly glittery. Perfect little christmas outfit. Looks like its never been worn.',
          photo1: '/images/babyg_2.jpg',
          photo2: '/images/photo_2.svg'
        },
        {
          id: 121,
          size_id: 34,
          style_id: 3,
          brand_id: 1,
          condition_id: 24,
          status_id: 51,
          description: 'As aborable! The best choice for all you gym mums out there in pretty good condition.  Please note there is a tiny stain at the neck. Seems longer than other onesie suits. Be a great summer option.',
          photo1: '/images/babyg_3.jpg',
          photo2: '/images/photo_2.svg'
        },
        {
          id: 122,
          size_id: 37,
          style_id: 6,
          brand_id: 5,
          condition_id: 22,
          status_id: 51,
          description: 'Very peachy babygrow, in nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Thick cotton - lovely for colder days.',
          photo1: 'https://www.oliverbonas.com/static/media/catalog/product/c/1/c1074512_oliver-bonas_gift_ma-petite-baby-grow.jpg',
          photo2: '/images/photo_2.svg'
        },
        {
          id: 123,
          size_id: 35,
          style_id: 7,
          brand_id: 3,
          condition_id: 21,
          status_id: 51,
          description: 'So funny! What a talking point -  in nice condition. Has small dye mark on cuffs. Fit comes up larger than expected. Would look super cute with jeans and a hoody for winter.',
          photo1: 'http://cdn.shopify.com/s/files/1/1140/3192/products/2012_baby_babygrow_just-done-9-months-inside_lack-_-white_1_grande.png?v=1458568176',
          photo2: '/images/photo_2.svg'
       },
        {
        id: 124,
        size_id: 31,
        style_id: 8,
        brand_id: 5,
        condition_id: 22,
        status_id: 51,
        description: 'Special occasion coming up? Dress your premmy guest of honour in this. Please note it is more creamy coloured than it is white. Fit best for small prems. Suitable for even black tie events.',
        photo1: 'https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/t/h/the-tiny-universe-boys-ivory-the-velvet-tuxedo-babygrow-72320-fb0c4ee943c42ac844df78ee1cd62ba6deb25710.jpg',
          photo2: '/images/photo_2.svg'
      },
      {
        id: 125,
        size_id: 35,
        style_id: 4,
        brand_id: 2,
        condition_id: 21,
        status_id: 51,
        description: ' ... A spread-operator? Somewhat ambiguous but conversation starting suit. There is a small amount of stretching around the neck, but it still fits snuggly and looks gorgeous on. Short sleeves make it better for warmer months.',
        photo1: 'https://cdn.notonthehighstreet.com/system/product_images/images/001/155/842/original_personalised-baby-grow-when-i-grow-up.jpg',
          photo2: '/images/photo_2.svg'
      },
      {
        id: 126,
        size_id: 37,
        style_id: 7,
        brand_id: 5,
        condition_id: 22,
        status_id: 51,
        description: 'Very grown up little dress, in really nice condition. Please note there is slight pilling on rear. Fit comes up slightly small. Suitable as a warm layer or for use in colder weather.',
        photo1: '/images/dress_1.jpg',
          photo2: '/images/photo_2.svg'
      },
      {
        id: 127,
        size_id: 35,
        style_id: 7,
        brand_id: 3,
        condition_id: 21,
        status_id: 51,
        description: 'Perfect for easy summer afternoons, this breezy spotted print dress is crafted in lightweight jersey and features a coordinating nappy cover. Please note there is a grass stain near the hem.',
        photo1: '/images/dress_2.jpg',
        photo2: '/images/photo_2.svg'
     },
      {
        id: 128,
        size_id: 37,
        style_id: 7,
        brand_id: 5,
        condition_id: 22,
        status_id: 51,
        description: 'Navy and almost nautical, this striped dress is fairly lightweight jersey and features buttons that undo. Please note there is a pink mark near the pocket',
        photo1: '/images/dress_3.jpg',
        photo2: '/images/photo_2.svg'
      },
      {
        id: 129,
        size_id: 35,
        style_id: 7,
        brand_id: 3,
        condition_id: 21,
        status_id: 51,
        description: 'Great for warm summer afternoons, or layered with leggings and a long sleeve t-shirt for when its cooler. Please note the elastic on the waste is a little worn, so it fits loosely, great for littlies who do not like being too wrapped up.',
        photo1: '/images/dress_4.jpg',
<<<<<<< Updated upstream
        photo2: ''
      }
=======
        photo2: '/images/photo_2.svg'
      },
      {
        id: 130,
        size_id: 30,
        style_id: 8,
        brand_id: 3,
        condition_id: 21,
        status_id: 51,
        title:'Rainbows for the win',
        description: 'Long sleeved suit, that seems narrow. Lovely thick jersey, so your little rainbow can be as warm as toast! Room to grow if your bubba is going to be tall. Really impressed by the condition of this item.',
        photo1: 'https://littlepeagreen.files.wordpress.com/2012/04/frugi_rainbow_spot-babygrow-2.png',
        photo2: '/images/photo_2.svg'
     },
     {
       id: 131,
       size_id: 30,
       style_id: 8,
       brand_id: 3,
       condition_id: 21,
       status_id: 51,
       title:'Ute will love this!',
       description: 'Little blue VW combie on the front. Hand sewn by a boutique supplier. Very cute, you can just tell the love that goes into creating these little NZ made vests. A great addition to you little ones wardrobe.',
       photo1: 'https://cdn.notonthehighstreet.com/system/product_images/images/000/491/279/original_Blue_campervan_vest.jpg',
       photo2: '/images/photo_2.svg'
    },
    {
      id: 132,
      size_id: 34,
      style_id: 8,
      brand_id: 3,
      condition_id: 21,
      status_id: 51,
      title:'Pink geek',
      description: 'Oh my goodness so pink, honestly the most adorable thing I have seen in ages. It does have a little hole in the back but otherwise in great condition. If your little one knows how to make a statement then this is the outfit for you!',
      photo1: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4a3fc06eb1b04726bf024759db185f2f/b82257af-c06c-4669-bd60-949786611550.jpg',
      photo2: '/images/photo_2.svg'
      },
      {
      id: 133,
      size_id: 37,
      style_id: 8,
      brand_id: 3,
      condition_id: 21,
      status_id: 51,
      title:'Maths Nerd',
      description: 'I do not think you have to be a nerd to love this onesie. Or to get the joke... This top is a lovely soft shade of blue and feels like brushed jersey cotton. The paint has chipped off the poppers, which is not noticeable when pants or skirt are added.',
      photo1: 'https://images-na.ssl-images-amazon.com/images/I/51OKFQZff6L._AC_UL320_SR244,320_.jpg',
      photo2: '/images/photo_2.svg'
      },
      ])
    })
}
