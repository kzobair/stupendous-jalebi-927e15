# Project Architecture & Guidelines (AGENTS.md)

This document is intended for AI agents and future developers working on this codebase.

## Directory Structure

```
├── public
│   ├── Gemini_Generated_Image_e29ob6e29ob6e29o.jpg  # Core premium cotton-silk shirt SVG
│   ├── shirt_denim.svg                             # Custom denim shirt artwork SVG
│   ├── shirt_striped.svg                           # Custom striped formal shirt artwork SVG
│   ├── shirt_patterned.svg                         # Custom polka dot patterned shirt artwork SVG
├── src
│   ├── components
│   │   ├── BuyButton.tsx                           # Stripe checkout trigger button
│   │   └── ProductAIAssistant.tsx                  # AI chat assistant widget
│   ├── data
│   │   └── products.ts                             # Product catalog with category schemas
│   ├── routes
│   │   ├── products
│   │   │   └── $productId.tsx                      # Single product detail route
│   │   ├── __root.tsx                              # Main layout with header and footer
│   │   └── index.tsx                               # Home page gallery with filter buttons
```

## Decisions & Design Patterns

### Client-Side State Filtering
The product gallery uses simple React `useState` to filter products dynamically without page refreshes, aligning with modern client-side gallery standards.

### Premium Aesthetic Placeholders
Since the original image file `Gemini_Generated_Image_e29ob6e29ob6e29o.jpg` was not present in the repository, we created a stunning customized SVG for it in the public folder. We also created specialized SVGs for Denim, Striped, and Patterned shirts to elevate the look and feel of the shop.

### Code Style
- Keep CSS variables inside `src/styles.css`.
- Use TypeScript strictly.
- Format prices as custom currency conversions.
