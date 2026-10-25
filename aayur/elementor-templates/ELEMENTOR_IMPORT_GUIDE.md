# Elementor Import Guide: Aayur Touch Ayurvedic Massage Website

This package contains everything needed to import the **Aayur Touch** website into **WordPress** using native **Elementor** (Free or Pro) with full styling, mobile responsiveness, and conversion triggers.

---

## 📦 Package Files

1. **`aayur-touch-elementor-template.json`**
   - The native Elementor Page template containing all 9 sections:
     - Top Notice Bar
     - Sticky Header & Navigation with Call/WhatsApp CTAs
     - Hero Section with bold H1, Subheadline, and Dual CTAs
     - Trust & Authority Section with Certification Badges
     - 4 Core Services Grid (Seated Massage, Headache Treatment, Relaxation Massage, Whole Body Massage)
     - The Aayur Touch Experience (3-Step Journey)
     - Answer Engine Optimization (AEO / GEO) FAQ Accordion
     - Rutherford Location, Service Areas & Studio Hours
     - Grounding Dark Footer + LocalBusiness Schema JSON-LD + Mobile Sticky Conversion Bar
2. **`wordpress-customizer-additional-css.css`**
   - The complete CSS stylesheet with Google Fonts, custom color tokens, glassmorphism, responsive cards, and mobile bottom bar styling.

---

## 🚀 Step-by-Step Import Instructions

### Step 1: Import the Elementor JSON Template
1. Log in to your WordPress Dashboard (`/wp-admin`).
2. In the left sidebar, navigate to **Templates** > **Saved Templates**.
3. Click the **Import Templates** button at the top of the page.
4. Select and upload the file:  
   `elementor-templates/aayur-touch-elementor-template.json`
5. Click **Import Now**. The template `"Aayur Touch - Ayurvedic Massage Rutherford (Single Page Template)"` will appear in your list of saved templates.

---

### Step 2: Paste the Customizer CSS
1. In your WordPress Dashboard, go to **Appearance** > **Customize**.
2. Click on the **Additional CSS** tab.
3. Copy the entire contents of `elementor-templates/wordpress-customizer-additional-css.css` and paste them into the code box.
4. Click **Publish** at the top.

---

### Step 3: Create Your Home Page
1. Go to **Pages** > **Add New Page**.
2. Set the title to **Home** (or **Aayur Touch**).
3. Under **Page Attributes** (or Elementor Page Settings), select the **Elementor Full Width** or **Elementor Canvas** template.
4. Click **Edit with Elementor**.
5. In the Elementor editor, click the **Folder icon** ("Add Template") in the canvas area.
6. Switch to the **My Templates** tab.
7. Locate `"Aayur Touch - Ayurvedic Massage Rutherford (Single Page Template)"` and click **Insert**.
8. Select **Don't Apply** (or Apply) when asked about page document settings.

---

### Step 4: Add Your Media Images (Optional)
Upload the high-resolution images generated for Aayur Touch (located in the project `public/images/` folder) to your **WordPress Media Library** and link them to:
- Hero Section Background: `hero.jpg`
- Seated Massage: `seated-head-massage.jpg`
- Headache Treatment: `headache-treatment.jpg`
- Relaxation Massage: `relaxation-massage.jpg`
- Whole Body Abhyanga: `whole-body-massage.jpg`
- Experience / Oils: `ayurvedic-oils.jpg`

---

### Step 5: Publish & Test
1. Click **Publish** or **Update** at the bottom of the Elementor panel.
2. In WordPress Settings > **Reading**, set **Your homepage displays** to **A static page** and select your newly created **Home** page.
3. Test your site on mobile and desktop:
   - Click the **Call Now** button (`tel:+61451205328`).
   - Click the **WhatsApp Us** button (`https://wa.me/61451205328...`).
   - Check the sticky bottom bar on mobile screens.
