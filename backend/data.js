import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
  products1: [
    {
      name: 'Apoio de Pulso',
      slug: 'apoio-de-pulso',
      category: 'acessórios',
      image: '/public/Images/Apoio_de_Pulso.png',
      price: 24.99,
      countInStock: 40,
      brand: 'comfort tech',
      rating: null,
      numReviews: null,
      description:
        'Apoio de pulso ergonômico para conforto durante o uso do teclado.',
    },
    {
      name: 'Porta-copos (descanso de copos)',
      slug: 'porta-copos',
      category: 'acessórios',
      image: '/public/Images/Porta_Copos.png',
      price: 14.99,
      countInStock: 30,
      brand: 'home decor',
      rating: null,
      numReviews: null,
      description: 'Conjunto de porta-copos elegantes para sua mesa.',
    },
    {
      name: 'HighBeam Pro - Iluminação Premium para Videoconferência',
      slug: 'highbeam-pro-iluminacao-premium',
      category: 'acessórios',
      image: '/public/Images/HighBeam_Pro_Iluminacao_Premium.png',
      price: 129.99,
      countInStock: 25,
      brand: 'tech light',
      rating: null,
      numReviews: null,
      description: 'Iluminação profissional para videoconferências.',
    },
    {
      name: 'Prateleira de Mesa',
      slug: 'prateleira-mesa',
      category: 'acessórios',
      image: '/public/Images/Prateleira_Mesa.png',
      price: 59.99,
      countInStock: 20,
      brand: 'design home',
      rating: null,
      numReviews: null,
      description: 'Prateleira versátil para otimizar seu espaço de trabalho.',
    },
    {
      name: 'Prateleira de Mesa em Nogueira Preta',
      slug: 'prateleira-mesa-nogueira-preta',
      category: 'acessórios',
      image: '/public/Images/Prateleira_Mesa_Nogueira_Preta.png',
      price: 79.99,
      countInStock: 15,
      brand: 'design home',
      rating: null,
      numReviews: null,
      description: 'Elegante prateleira de mesa em nogueira preta.',
    },
    {
      name: 'Caderno Anotações',
      slug: 'caderno-anotacoes',
      category: 'acessórios',
      image: '/public/Images/Caderno_anotacoes.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'caderno skill',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Laptop Suporte',
      slug: 'laptop-suporte',
      category: 'acessórios',
      image: '/public/Images/Laptop_suporte.png',
      price: 80,
      countInStock: 15,
      brand: 'support tech',
      rating: 4.2,
      numReviews: 8,
      description: 'ergonomic laptop support',
    },
    {
      name: 'Luzes de Vídeo para Conferência',
      slug: 'luces-video-conferencia',
      category: 'eletrônicos',
      image: '/public/Images/Luzes_video_conferencia.png',
      price: 150,
      countInStock: 12,
      brand: 'video lights co.',
      rating: 4.8,
      numReviews: 15,
      description: 'high-quality video conference lights',
    },
    {
      name: 'Mouse Pad Preto',
      slug: 'mouse-pad-preto',
      category: 'acessórios',
      image: '/public/Images/Mouse_pad_preto.png',
      price: 15,
      countInStock: 20,
      brand: 'black pad',
      rating: 4.0,
      numReviews: 5,
      description: 'simple and elegant black mouse pad',
    },
    {
      name: 'Suporte Headfone',
      slug: 'suporte-headfone',
      category: 'acessórios',
      image: '/public/Images/Suporte_headfone.png',
      price: 25,
      countInStock: 18,
      brand: 'audio stand',
      rating: 4.7,
      numReviews: 12,
      description: 'headphone stand with sleek design',
    },
    {
      name: 'Planta de Mesa',
      slug: 'planta-mesa',
      category: 'decoração',
      image: '/public/Images/Planta_mesa.png',
      price: 30,
      countInStock: 25,
      brand: 'green decor',
      rating: 4.5,
      numReviews: 9,
      description: 'artificial desktop plant for decoration',
    },
    {
      name: 'Suporte Vertical de Laptop',
      slug: 'suporte-vertical-laptop',
      category: 'acessórios',
      image: '/public/Images/Suporte_vertical_laptop.png',
      price: 45,
      countInStock: 14,
      brand: 'vertical tech',
      rating: 4.3,
      numReviews: 11,
      description: 'vertical laptop stand for space-saving',
    },
    {
      name: 'Mesa Regulável',
      slug: 'mesa-regulavel',
      category: 'móveis',
      image: '/public/Images/Mesa_regulavel.png',
      price: 200,
      countInStock: 8,
      brand: 'adjustable desk co.',
      rating: 4.9,
      numReviews: 20,
      description: 'adjustable desk for ergonomic workspace',
    },
  ],
};

export default data;
