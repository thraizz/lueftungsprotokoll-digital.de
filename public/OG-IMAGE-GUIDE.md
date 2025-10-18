# Open Graph Image Guide

## Requirements

Create an Open Graph image with the following specifications:

### Dimensions
- **Size**: 1200 × 630 pixels
- **Format**: PNG or JPG
- **File name**: `og-image.png` (place in `/public/` directory)

### Content Recommendations

Your OG image should include:

1. **Main Headline**: "Lüftungsprotokoll Digital"
2. **Subheadline**: "Kostenlos & Rechtssicher"
3. **Key Benefits** (pick 2-3):
   - ✓ Keine Anmeldung
   - ✓ DSGVO-konform
   - ✓ Nach DIN 1946-6
   - ✓ 100% Kostenlos

4. **Brand Colors**:
   - Primary: `#059669` (Green)
   - Background: `#FFFFFF` (White) or `#F9FAFB` (Light Gray)
   - Text: `#1A1A1A` (Dark Gray)

5. **Visual Style**:
   - Clean, minimalist design
   - Bold typography
   - Generous white space
   - Optional: Icon of a window or ventilation symbol

### Design Tools

You can create this image using:
- **Figma** (free): https://figma.com
- **Canva** (free): https://canva.com
- **Photopea** (free, browser-based): https://photopea.com

### Testing

After creating the image:

1. Save it as `/public/og-image.png`
2. Build your site: `npm run build`
3. Test with [Open Graph Preview](https://www.opengraph.xyz/)
4. Share a test link on social media to verify appearance

### Optional Additional Images

Consider creating these additional social images:

- `apple-touch-icon.png` (180 × 180 px) - iOS home screen icon
- `logo.png` (minimum 200 × 200 px) - For Schema.org Organization
- `screenshot.png` (1280 × 720 px) - App screenshot for Schema.org

## Example Layout

```
┌─────────────────────────────────────────┐
│                                         │
│     Lüftungsprotokoll Digital           │ (Large, bold)
│     Kostenlos & Rechtssicher            │ (Medium)
│                                         │
│     ✓ Keine Anmeldung                   │
│     ✓ DSGVO-konform nach DIN 1946-6     │
│     ✓ 100% Kostenlos                    │
│                                         │
│         [Window/Ventilation Icon]       │ (Optional)
│                                         │
└─────────────────────────────────────────┘
      1200px × 630px
```
