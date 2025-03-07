@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-900;
  font-family: 'Space Grotesk', sans-serif;
}

/* Tech font styles */
.font-tech {
  font-family: 'JetBrains Mono', monospace;
}

.tech-gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400;
}

/* Pattern grid */
.pattern-grid {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Card and hover effects */
.service-card {
  @apply transition-all duration-500;
}

.service-card:hover {
  @apply transform -translate-y-2;
}

/* Scale utility */
.scale-102 {
  --tw-scale-x: 1.02;
  --tw-scale-y: 1.02;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

/* Glass effect */
.glass-effect {
  @apply bg-white/10 backdrop-blur-sm border border-white/20;
}

/* Text effects */
.text-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.text-gradient {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white;
}

/* Navigation glow effect */
.shadow-glow {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
               0 0 20px rgba(255, 255, 255, 0.3),
               0 0 30px rgba(255, 255, 255, 0.2);
}

/* Service Detail Enhancements */
.service-detail-text {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.service-detail-card {
  @apply backdrop-blur-sm shadow-xl;
}

/* WhatsApp chat animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Focus styles */
.focus-within\:ring:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}