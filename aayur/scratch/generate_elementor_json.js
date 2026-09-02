const fs = require('fs');
const path = require('path');

function uid() {
  return Math.random().toString(36).substring(2, 9);
}

// Color palette
const COLORS = {
  sageDark: "#1b2d24",
  sagePrimary: "#2a4336",
  sageLight: "#e5ece7",
  sageSoft: "#f4f7f5",
  gold: "#cca058",
  goldLight: "#e0b06b",
  cream: "#FBF9F5",
  earth: "#8c5a3c",
  earthLight: "#eedecd",
  white: "#ffffff",
  textDark: "#243029",
  textMuted: "#426953",
  whatsappGreen: "#25D366"
};

const PHONE_NUMBER = "+61451205328";
const PHONE_DISPLAY = "0451 205 328";
const WHATSAPP_URL = "https://wa.me/61451205328?text=Hello%20Aayur%20Touch,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20Ayurvedic%20massage%20session%20in%20Rutherford.";

// Section 1: Top Announcement Bar
const sectionAnnouncement = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.sageDark,
    padding: { unit: "px", top: "8", right: "15", bottom: "8", left: "15", isLinked: false },
    custom_css_class: "aayur-announcement-bar"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100, custom_css_class: "aayur-announcement-col" },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<div style="text-align: center; color: #e5ece7; font-size: 13px; font-weight: 500;">
              🌿 <strong>Certified Ayurvedic Massage in Rutherford, NSW</strong> • Mon–Sat By Appointment • 
              <span style="color: ${COLORS.gold};">Serving Rutherford, Maitland & Hunter Valley</span>
            </div>`,
            text_color: "#e5ece7",
            typography_font_size: { unit: "px", size: 13 },
            align: "center"
          }
        }
      ]
    }
  ]
};

// Section 2: Header Navigation
const sectionHeader = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.cream,
    padding: { unit: "px", top: "15", right: "20", bottom: "15", left: "20", isLinked: false },
    border_border: "solid",
    border_width: { unit: "px", top: "0", right: "0", bottom: "1", left: "0", isLinked: false },
    border_color: COLORS.sageLight,
    custom_css_class: "aayur-sticky-header"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 50, _inline_size: 50 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Aayur Touch",
            header_size: "h2",
            link: { url: "#" },
            title_color: COLORS.sageDark,
            typography_typography: "custom",
            typography_font_family: "Playfair Display",
            typography_font_size: { unit: "px", size: 28 },
            typography_font_weight: "700"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<p style="margin: -5px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: ${COLORS.earth}; font-weight: 600;">Ayurvedic Massage • Rutherford NSW</p>`
          }
        }
      ]
    },
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 50, _inline_size: 50, custom_css_class: "aayur-header-actions" },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "button",
          settings: {
            text: `Call: ${PHONE_DISPLAY}`,
            link: { url: `tel:${PHONE_NUMBER}` },
            align: "right",
            size: "sm",
            button_text_color: "#ffffff",
            background_color: COLORS.sagePrimary,
            border_radius: { unit: "px", top: "30", right: "30", bottom: "30", left: "30", isLinked: true },
            icon: { value: "fas fa-phone-alt", library: "fa-solid" },
            icon_align: "left",
            custom_css_class: "aayur-btn-call"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "button",
          settings: {
            text: "WhatsApp Us",
            link: { url: WHATSAPP_URL, is_external: "on" },
            align: "right",
            size: "sm",
            button_text_color: "#ffffff",
            background_color: COLORS.whatsappGreen,
            border_radius: { unit: "px", top: "30", right: "30", bottom: "30", left: "30", isLinked: true },
            icon: { value: "fab fa-whatsapp", library: "fa-brands" },
            icon_align: "left",
            custom_css_class: "aayur-btn-whatsapp"
          }
        }
      ]
    }
  ]
};

// Section 3: Hero Section
const sectionHero = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    height: "min-height",
    custom_height: { unit: "vh", size: 85 },
    column_position: "middle",
    background_background: "classic",
    background_color: COLORS.sageDark,
    background_overlay_background: "classic",
    background_overlay_color: "rgba(27, 45, 36, 0.75)",
    padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
    custom_css_class: "aayur-hero-section"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<div style="text-align: center; margin-bottom: 20px;">
              <span class="aayur-pill">🌿 Certified Ayurvedic Practitioner • Rutherford, NSW 2320</span>
            </div>`,
            align: "center"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Authentic Ayurvedic Massage in Rutherford, NSW",
            header_size: "h1",
            align: "center",
            title_color: "#FBF9F5",
            typography_typography: "custom",
            typography_font_family: "Playfair Display",
            typography_font_size: { unit: "px", size: 52 },
            typography_font_weight: "700",
            typography_line_height: { unit: "em", size: 1.15 }
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<p style="text-align: center; max-width: 720px; margin: 20px auto 35px auto; font-size: 18px; line-height: 1.6; color: #e5ece7;">
              Personalised, certified massage therapies expertly designed to relax, rejuvenate, and restore your body and mind.
            </p>`,
            text_color: "#e5ece7",
            align: "center"
          }
        },
        {
          id: uid(),
          elType: "section",
          isInner: true,
          settings: {
            layout: "boxed",
            custom_css_class: "aayur-hero-cta-wrapper"
          },
          elements: [
            {
              id: uid(),
              elType: "column",
              isInner: true,
              settings: { _column_size: 50, _inline_size: 50 },
              elements: [
                {
                  id: uid(),
                  elType: "widget",
                  widgetType: "button",
                  settings: {
                    text: `Tap to Call: ${PHONE_DISPLAY}`,
                    link: { url: `tel:${PHONE_NUMBER}` },
                    align: "right",
                    size: "md",
                    button_text_color: COLORS.sageDark,
                    background_color: COLORS.gold,
                    border_radius: { unit: "px", top: "40", right: "40", bottom: "40", left: "40", isLinked: true },
                    icon: { value: "fas fa-phone-alt", library: "fa-solid" },
                    icon_align: "left",
                    typography_font_weight: "700",
                    custom_css_class: "aayur-cta-gold"
                  }
                }
              ]
            },
            {
              id: uid(),
              elType: "column",
              isInner: true,
              settings: { _column_size: 50, _inline_size: 50 },
              elements: [
                {
                  id: uid(),
                  elType: "widget",
                  widgetType: "button",
                  settings: {
                    text: "Book via WhatsApp",
                    link: { url: WHATSAPP_URL, is_external: "on" },
                    align: "left",
                    size: "md",
                    button_text_color: "#ffffff",
                    background_color: COLORS.whatsappGreen,
                    border_radius: { unit: "px", top: "40", right: "40", bottom: "40", left: "40", isLinked: true },
                    icon: { value: "fab fa-whatsapp", library: "fa-brands" },
                    icon_align: "left",
                    typography_font_weight: "700",
                    custom_css_class: "aayur-cta-green"
                  }
                }
              ]
            }
          ]
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<div class="aayur-hero-trust-badges">
              <div class="aayur-trust-pill"><span>⭐ 100% Certified Practitioner</span></div>
              <div class="aayur-trust-pill"><span>🌿 Pure Medicated Herbal Oils</span></div>
              <div class="aayur-trust-pill"><span>🏡 Quiet Rutherford Sanctuary</span></div>
            </div>`,
            align: "center"
          }
        }
      ]
    }
  ]
};

// Section 4: Trust & Authority
const sectionTrustAuthority = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.cream,
    padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
    custom_css_class: "aayur-trust-section"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Certified Care for Your Well-being",
            header_size: "h2",
            align: "center",
            title_color: COLORS.sageDark,
            typography_typography: "custom",
            typography_font_family: "Playfair Display",
            typography_font_size: { unit: "px", size: 38 },
            typography_font_weight: "700"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<p style="text-align: center; max-width: 780px; margin: 15px auto 45px auto; font-size: 16px; line-height: 1.7; color: ${COLORS.textMuted};">
              At Aayur Touch, you receive expert, tailored care from a practitioner fully certified in <strong>Whole Body Massage</strong> and <strong>Relaxation Massage</strong>. We bring the ancient healing traditions of Ayurveda to the Rutherford community in a professional, serene environment.
            </p>
            <div class="aayur-trust-grid">
              <div class="aayur-card">
                <div class="aayur-card-icon">🛡️</div>
                <div class="aayur-card-badge">Verified Standard</div>
                <h4>Certified in Whole Body Massage</h4>
                <p>Accredited practitioner specializing in systemic circulation and deep muscular restoration.</p>
              </div>
              <div class="aayur-card">
                <div class="aayur-card-icon">🏆</div>
                <div class="aayur-card-badge">Verified Standard</div>
                <h4>Certified in Relaxation Massage</h4>
                <p>Trained in rhythmic parasympathetic nervous system calming therapies.</p>
              </div>
              <div class="aayur-card">
                <div class="aayur-card-icon">🌿</div>
                <div class="aayur-card-badge">Verified Standard</div>
                <h4>Traditional Ayurvedic Lineage</h4>
                <p>Pure herb-infused organic medicated oils customized to your unique Dosha constitution.</p>
              </div>
              <div class="aayur-card">
                <div class="aayur-card-icon">📍</div>
                <div class="aayur-card-badge">Verified Standard</div>
                <h4>Private Rutherford Sanctuary</h4>
                <p>A serene, quiet, and spotless retreat environment right here in Rutherford, NSW.</p>
              </div>
            </div>`,
            align: "center"
          }
        }
      ]
    }
  ]
};

// Section 5: Services Grid (4 Core Services)
const sectionServices = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.sageSoft,
    padding: { unit: "px", top: "90", right: "20", bottom: "90", left: "20", isLinked: false },
    custom_css_class: "aayur-services-section"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Our Services",
            header_size: "h2",
            align: "center",
            title_color: COLORS.sageDark,
            typography_typography: "custom",
            typography_font_family: "Playfair Display",
            typography_font_size: { unit: "px", size: 42 },
            typography_font_weight: "700"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "text-editor",
          settings: {
            editor: `<p style="text-align: center; max-width: 700px; margin: 12px auto 50px auto; font-size: 16px; color: ${COLORS.textMuted}; line-height: 1.6;">
              Discover tailored Ayurvedic treatments formulated with warm, therapeutic herbal oils and traditional bodywork techniques to relieve tension, reduce stress, and restore total vitality.
            </p>`,
            align: "center"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "html",
          settings: {
            html: `<div class="aayur-services-grid">
              <!-- Service 1 -->
              <div class="aayur-service-card">
                <div class="aayur-service-badge">Most Popular for Desk Workers</div>
                <div class="aayur-service-duration">⏱️ 30 – 45 Min • <em>Shiro & Griva Abhyanga</em></div>
                <h3>Seated Head, Neck & Shoulder Massage</h3>
                <p>Relieve deep-seated tension, improve blood circulation, and ease muscle stiffness with our targeted upper-body therapies. Ideal for professionals and those managing daily postural stress, desk fatigue, or upper-spine strain.</p>
                <ul class="aayur-benefits-list">
                  <li>✔ Releases chronic shoulder tightness & knots</li>
                  <li>✔ Improves cerebral circulation & focus</li>
                  <li>✔ Relieves upper cervical strain from screen time</li>
                </ul>
                <div class="aayur-oil-pill"><strong>Herbal Blend:</strong> Warm Brahmi & Rosemary Infusion</div>
                <div class="aayur-card-actions">
                  <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="aayur-btn-service-whatsapp">💬 Book via WhatsApp</a>
                  <a href="tel:${PHONE_NUMBER}" class="aayur-btn-service-call">📞 Inquire: ${PHONE_DISPLAY}</a>
                </div>
              </div>

              <!-- Service 2 -->
              <div class="aayur-service-card">
                <div class="aayur-service-badge">Targeted Natural Relief</div>
                <div class="aayur-service-duration">⏱️ 45 Min • <em>Marma Shiro Chikitsa</em></div>
                <h3>Headache Treatment</h3>
                <p>Specialised Ayurvedic techniques designed to target the root causes of headaches and migraines, providing natural, soothing relief from stress-related discomfort and ocular strain through delicate marma point activation.</p>
                <ul class="aayur-benefits-list">
                  <li>✔ Alleviates tension headaches & temple throbbing</li>
                  <li>✔ Targets cranial marma points for relief</li>
                  <li>✔ Reduces sinus congestion & forehead pressure</li>
                </ul>
                <div class="aayur-oil-pill"><strong>Herbal Blend:</strong> Cooling Ksheerabala & Peppermint Oil</div>
                <div class="aayur-card-actions">
                  <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="aayur-btn-service-whatsapp">💬 Book via WhatsApp</a>
                  <a href="tel:${PHONE_NUMBER}" class="aayur-btn-service-call">📞 Inquire: ${PHONE_DISPLAY}</a>
                </div>
              </div>

              <!-- Service 3 -->
              <div class="aayur-service-card">
                <div class="aayur-service-badge">Restorative Nervous Calm</div>
                <div class="aayur-service-duration">⏱️ 60 – 75 Min • <em>Prashamana Therapy</em></div>
                <h3>Relaxation Massage</h3>
                <p>Soothe your body and quiet your mind. This gentle, flowing therapy reduces cortisol levels, lowers anxiety, and promotes deep, restorative relaxation using warm organic botanicals and rhythmic long strokes.</p>
                <ul class="aayur-benefits-list">
                  <li>✔ Lowers stress hormones (cortisol)</li>
                  <li>✔ Induces restful sleep states & tranquility</li>
                  <li>✔ Deeply hydrates skin with antioxidant oils</li>
                </ul>
                <div class="aayur-oil-pill"><strong>Herbal Blend:</strong> Warm Bala Ashwagandha & Lavender Essence</div>
                <div class="aayur-card-actions">
                  <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="aayur-btn-service-whatsapp">💬 Book via WhatsApp</a>
                  <a href="tel:${PHONE_NUMBER}" class="aayur-btn-service-call">📞 Inquire: ${PHONE_DISPLAY}</a>
                </div>
              </div>

              <!-- Service 4 -->
              <div class="aayur-service-card">
                <div class="aayur-service-badge">Signature Ayurvedic Therapy</div>
                <div class="aayur-service-duration">⏱️ 60 – 90 Min • <em>Sarvanga Abhyanga</em></div>
                <h3>Whole Body Massage</h3>
                <p>A comprehensive, rhythmic treatment that improves overall circulation, relieves widespread muscle tension, and restores complete physical harmony and energy balance from head to toe.</p>
                <ul class="aayur-benefits-list">
                  <li>✔ Full lymphatic drainage & detox stimulation</li>
                  <li>✔ Deep muscular rejuvenation for spine & limbs</li>
                  <li>✔ Balances Vata, Pitta & Kapha energies</li>
                </ul>
                <div class="aayur-oil-pill"><strong>Herbal Blend:</strong> Authentic Mahanarayana & Dhanwantharam</div>
                <div class="aayur-card-actions">
                  <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="aayur-btn-service-whatsapp">💬 Book via WhatsApp</a>
                  <a href="tel:${PHONE_NUMBER}" class="aayur-btn-service-call">📞 Inquire: ${PHONE_DISPLAY}</a>
                </div>
              </div>
            </div>`
          }
        }
      ]
    }
  ]
};

// Section 6: Ayurvedic 3-Step Experience
const sectionExperience = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.cream,
    padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
    custom_css_class: "aayur-experience-section"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "The Aayur Touch Experience",
            header_size: "h2",
            align: "center",
            title_color: COLORS.sageDark,
            typography_typography: "custom",
            typography_font_family: "Playfair Display",
            typography_font_size: { unit: "px", size: 38 },
            typography_font_weight: "700"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "html",
          settings: {
            html: `<div class="aayur-steps-wrapper">
              <div class="aayur-step-item">
                <div class="aayur-step-number">01</div>
                <h4>Dosha & Body Assessment</h4>
                <p>Mindful consultation to understand your physical tension points, stress levels, and comfort preferences.</p>
              </div>
              <div class="aayur-step-item">
                <div class="aayur-step-number">02</div>
                <h4>Warm Medicated Oil Infusion</h4>
                <p>Pure organic oils infused with herbs like Ashwagandha, Brahmi & Bala heated to body temperature.</p>
              </div>
              <div class="aayur-step-item">
                <div class="aayur-step-number">03</div>
                <h4>Targeted Marma & Rhythmic Therapy</h4>
                <p>Rhythmic, synchronized strokes combined with vital energy point activation to release deep tension.</p>
              </div>
            </div>`
          }
        }
      ]
    }
  ]
};

// Section 7: FAQ / AEO / GEO Section
const sectionFaq = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.sageSoft,
    padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
    custom_css_class: "aayur-faq-section"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "heading",
          settings: {
            title: "Your Wellness Questions, Answered",
            header_size: "h2",
            align: "center",
            title_color: COLORS.sageDark,
            typography_typography: "custom",
            typography_font_family: "Playfair Display",
            typography_font_size: { unit: "px", size: 38 },
            typography_font_weight: "700"
          }
        },
        {
          id: uid(),
          elType: "widget",
          widgetType: "accordion",
          settings: {
            tabs: [
              {
                tab_title: "Why choose Ayurvedic massage in Rutherford, NSW?",
                tab_content: "Ayurvedic massage at Aayur Touch goes beyond standard muscle manipulation. It uses personalised, certified techniques to balance your body's vital energy, offering both physical relief and mental clarity right here in Rutherford."
              },
              {
                tab_title: "How do I book a personalized massage appointment?",
                tab_content: `Booking your restorative session is simple and immediate. We prioritise direct, personal communication to ensure your treatment is perfectly tailored to your needs. Simply tap the Call Now button (${PHONE_DISPLAY}) or reach out via WhatsApp to secure your preferred time.`
              },
              {
                tab_title: "What should I expect during my first Ayurvedic treatment?",
                tab_content: "Your initial session begins with a brief consultation to understand your physical tension points, stress levels, and comfort preferences. You will be welcomed into our serene, heated treatment room where customized warm herbal oil is applied using traditional, rhythmic strokes."
              },
              {
                tab_title: "What type of massage oils are used at Aayur Touch?",
                tab_content: "We use only 100% pure, natural, certified Ayurvedic herbal oils formulated with potent botanical extracts such as Ashwagandha, Brahmi, Bala, and Ksheerabala to deeply nourish nerve endings and soothe muscular inflammation."
              },
              {
                tab_title: "Is Ayurvedic massage suitable for tension headaches and neck stiffness?",
                tab_content: "Yes, absolutely. Our Seated Head, Neck & Shoulder Massage and specialised Headache Treatment target the suboccipital muscles, trapezius tension, and cranial marma points that trigger chronic headaches and posture fatigue from desk work."
              },
              {
                tab_title: "Where is Aayur Touch located and is parking available?",
                tab_content: "Aayur Touch is located in a quiet, accessible sanctuary setting in Rutherford, NSW 2320, serving clients from Rutherford, Maitland, Aberglasslyn, Farley, Telarah, and the greater Hunter Valley. Free, convenient private parking is available directly on-site."
              }
            ],
            icon: { value: "fas fa-plus", library: "fa-solid" },
            icon_active: { value: "fas fa-minus", library: "fa-solid" },
            title_color: COLORS.sageDark,
            tab_active_color: COLORS.sageDark,
            border_color: COLORS.sageLight
          }
        }
      ]
    }
  ]
};

// Section 8: Rutherford Location & Hours
const sectionLocation = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.cream,
    padding: { unit: "px", top: "80", right: "20", bottom: "80", left: "20", isLinked: false },
    custom_css_class: "aayur-location-section"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "html",
          settings: {
            html: `<div class="aayur-location-grid">
              <div class="aayur-location-info">
                <span class="aayur-pill">📍 Rutherford Sanctuary</span>
                <h2>Visit Us in Rutherford, NSW</h2>
                <p>Located in a quiet, private sanctuary in Rutherford, NSW 2320. Dedicated to authentic Ayurvedic care in a pristine, warm environment.</p>
                <div class="aayur-suburbs-list">
                  <strong>Serving:</strong> Rutherford • Maitland • Aberglasslyn • Farley • Telarah • Hunter Valley NSW
                </div>
                <div class="aayur-amenities">
                  <div>🚗 Free On-Site Parking</div>
                  <div>✨ Sanitized Private Sanctuary</div>
                  <div>🌿 1-on-1 Dedicated Sessions</div>
                </div>
              </div>
              <div class="aayur-hours-card">
                <h3>Studio Hours</h3>
                <div class="aayur-hour-row"><span>Monday – Friday</span><strong>9:00 AM – 7:00 PM</strong></div>
                <div class="aayur-hour-row"><span>Saturday</span><strong>9:00 AM – 5:00 PM</strong></div>
                <div class="aayur-hour-row"><span>Sunday</span><strong style="color: ${COLORS.gold};">By Appointment</strong></div>
                <div class="aayur-hours-actions">
                  <a href="tel:${PHONE_NUMBER}" class="aayur-cta-gold">📞 Call Now: ${PHONE_DISPLAY}</a>
                  <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="aayur-cta-green">💬 WhatsApp Message</a>
                </div>
              </div>
            </div>`
          }
        }
      ]
    }
  ]
};

// Section 9: Footer & Schema
const sectionFooter = {
  id: uid(),
  elType: "section",
  isInner: false,
  settings: {
    layout: "boxed",
    background_background: "classic",
    background_color: COLORS.sageDark,
    padding: { unit: "px", top: "70", right: "20", bottom: "90", left: "20", isLinked: false },
    custom_css_class: "aayur-footer-section"
  },
  elements: [
    {
      id: uid(),
      elType: "column",
      isInner: false,
      settings: { _column_size: 100 },
      elements: [
        {
          id: uid(),
          elType: "widget",
          widgetType: "html",
          settings: {
            html: `<div class="aayur-footer-content">
              <div class="aayur-footer-cta-box">
                <span class="aayur-pill" style="background: rgba(204,160,88,0.2); color: ${COLORS.gold};">Private Ayurvedic Sessions in Rutherford</span>
                <h2>Ready to Relax, Rejuvenate, and Restore?</h2>
                <p>Personalised massage sessions are available by appointment. Contact Aayur Touch today to experience premium Ayurvedic massage in Rutherford, NSW.</p>
                <div class="aayur-footer-btns">
                  <a href="tel:${PHONE_NUMBER}" class="aayur-cta-gold">📞 Tap to Call: ${PHONE_DISPLAY}</a>
                  <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="aayur-cta-green">💬 Chat on WhatsApp</a>
                </div>
              </div>

              <div class="aayur-footer-bottom">
                <p>© ${new Date().getFullYear()} Aayur Touch. All Rights Reserved. Serving Rutherford, NSW 2320, Australia.</p>
              </div>
            </div>

            <!-- Mobile Sticky Bottom CTA Bar -->
            <div class="aayur-mobile-sticky-bar">
              <a href="tel:${PHONE_NUMBER}" class="aayur-m-btn aayur-m-call">📞 Call Now</a>
              <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="aayur-m-btn aayur-m-wa">💬 WhatsApp</a>
            </div>

            <!-- LocalBusiness Schema JSON-LD -->
            <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": ["HealthAndBeautyBusiness", "DaySpa", "LocalBusiness"],
              "name": "Aayur Touch",
              "alternateName": "Aayur Touch Ayurvedic Massage Rutherford",
              "description": "Certified Ayurvedic massage therapies in Rutherford, NSW.",
              "telephone": "${PHONE_NUMBER}",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rutherford",
                "addressLocality": "Rutherford",
                "addressRegion": "NSW",
                "postalCode": "2320",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -32.7167,
                "longitude": 151.5333
              }
            }
            </script>`
          }
        }
      ]
    }
  ]
};

// Full Elementor Template Package
const elementorTemplate = {
  version: "0.4",
  title: "Aayur Touch - Ayurvedic Massage Rutherford (Single Page Template)",
  type: "page",
  content: [
    sectionAnnouncement,
    sectionHeader,
    sectionHero,
    sectionTrustAuthority,
    sectionServices,
    sectionExperience,
    sectionFaq,
    sectionLocation,
    sectionFooter
  ]
};

const outputDir = path.join(__dirname, '..', 'elementor-templates');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'aayur-touch-elementor-template.json');
fs.writeFileSync(outputPath, JSON.stringify(elementorTemplate, null, 2), 'utf-8');
console.log(`Elementor Template JSON successfully generated at: ${outputPath}`);
