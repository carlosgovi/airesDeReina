/** @type {import('next').NextConfig} */
const nextConfig = {images: {
  formats: ['image/avif', 'image/webp'], // Habilita formatos de alta eficiencia
  deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Ajusta a los anchos de tus dispositivos principales
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Dimensiones optimizadas según tus necesidades
},
};

