#!/bin/bash


# Download property images
curl -o public/hero-home.jpg "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"

# Main properties
curl -o public/properties/property-1.jpg "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
curl -o public/properties/property-2.jpg "https://images.unsplash.com/photo-1567496898669-ee935f5f647a"
curl -o public/properties/property-3.jpg "https://images.unsplash.com/photo-1506126613408-eca07ce68773"

# Additional properties for variety
curl -o public/properties/property-4.jpg "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
curl -o public/properties/property-5.jpg "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
curl -o public/properties/property-6.jpg "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
curl -o public/properties/property-7.jpg "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
curl -o public/properties/property-8.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"

# Testimonial images
curl -o public/testimonials/sarah.jpg "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
curl -o public/testimonials/michael.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
curl -o public/testimonials/emily-david.jpg "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3"

# Create SVG patterns
cat > public/patterns/grid.svg << EOL
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5" />
  </pattern>
  <rect width="100" height="100" fill="url(#grid)" />
</svg>
EOL

cat > public/patterns/dots.svg << EOL
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5" />
  </pattern>
  <rect width="100" height="100" fill="url(#dots)" />
</svg>
EOL

cat > public/patterns/waves.svg << EOL
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <pattern id="waves" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M0 20 Q 10 15, 20 20 T 40 20" fill="none" stroke="currentColor" stroke-width="0.5" />
  </pattern>
  <rect width="100" height="100" fill="url(#waves)" />
</svg>
EOL

echo "Images and patterns downloaded successfully!" 
