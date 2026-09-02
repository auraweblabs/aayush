export interface ServiceItem {
  id: string;
  title: string;
  sanskritName?: string;
  duration: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  oilBlend: string;
  badge: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "Aayur Touch",
  tagline: "Authentic Ayurvedic Massage Sanctuary",
  logo: "/images/AAYUR-TOUCH-web sqr.webp",
  address: "19 Turnock Drive, Cameron Park NSW 2285",
  streetAddress: "19 Turnock Drive",
  suburb: "Cameron Park",
  state: "NSW",
  postcode: "2285",
  location: "19 Turnock Drive, Cameron Park NSW 2285, Australia",
  serviceArea: "Cameron Park, Edgeworth, West Wallsend, Minmi, Fletcher, Maryland, Wallsend, Newcastle & Lake Macquarie",
  phone: "+61 451 205 328",
  phoneDisplay: "0451 205 328",
  email: "connect@aayurtouch.com.au",
  whatsappNumber: "61451205328",
  whatsappMessage: "Hello Aayur Touch, I would like to inquire about booking a personalized Ayurvedic massage session in Cameron Park.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  get telUrl() {
    return `tel:${this.phone.replace(/\s+/g, "")}`;
  },
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 7:00 PM",
    saturday: "Saturday: 9:00 AM – 5:00 PM",
    sunday: "Sunday: By Appointment Only",
  },
  certifications: [
    {
      title: "Certified in Whole Body Massage",
      desc: "Accredited practitioner specializing in systemic circulation and deep muscular restoration.",
    },
    {
      title: "Certified in Relaxation Massage",
      desc: "Trained in rhythmic parasympathetic nervous system calming therapies.",
    },
    {
      title: "Traditional Ayurvedic Lineage",
      desc: "Pure herb-infused organic medicated oils customized to your unique Dosha constitution.",
    },
    {
      title: "Private Cameron Park Sanctuary",
      desc: "A serene, quiet, and spotless retreat environment located at 19 Turnock Drive, Cameron Park NSW.",
    },
  ],
  services: [
    {
      id: "seated-head-neck-shoulder",
      title: "Seated Head, Neck & Shoulder Massage",
      sanskritName: "Shiro & Griva Abhyanga",
      duration: "30 – 45 Min",
      badge: "Most Popular for Desk Workers",
      shortDesc: "Relieve deep-seated tension, improve blood circulation, and ease muscle stiffness with our targeted upper-body therapies.",
      fullDesc: "Relieve deep-seated tension, improve blood circulation, and ease muscle stiffness with our targeted upper-body therapies. Ideal for professionals and those managing daily postural stress, desk fatigue, or upper-spine strain.",
      benefits: [
        "Releases chronic shoulder tightness and trapezoid knots",
        "Improves cerebral circulation and mental alertness",
        "Relieves upper cervical strain from screen time",
        "Calms sympathetic nervous overload"
      ],
      oilBlend: "Warm Brahmi & Rosemary Herbal Infusion",
      image: "/images/seated-head-massage.jpg",
    },
    {
      id: "headache-treatment",
      title: "Headache Treatment",
      sanskritName: "Marma Shiro Chikitsa",
      duration: "45 Min",
      badge: "Targeted Natural Relief",
      shortDesc: "Specialised Ayurvedic techniques designed to target the root causes of headaches and migraines, providing natural, soothing relief.",
      fullDesc: "Specialised Ayurvedic techniques designed to target the root causes of headaches and migraines, providing natural, soothing relief from stress-related discomfort and ocular strain through delicate marma point activation.",
      benefits: [
        "Alleviates tension headaches and chronic temple throbbing",
        "Targets cranial marma energy points for instant release",
        "Reduces sinus congestion and forehead pressure",
        "Promotes deep ocular relaxation"
      ],
      oilBlend: "Cooling Ksheerabala & Peppermint Medicated Oil",
      image: "/images/headache-treatment.jpg",
    },
    {
      id: "relaxation-massage",
      title: "Relaxation Massage",
      sanskritName: "Prashamana Therapy",
      duration: "60 – 75 Min",
      badge: "Restorative Nervous System Calm",
      shortDesc: "Soothe your body and quiet your mind. This gentle, flowing therapy reduces cortisol levels and promotes deep, restorative relaxation.",
      fullDesc: "Soothe your body and quiet your mind. This gentle, flowing therapy reduces cortisol levels, lowers anxiety, and promotes deep, restorative relaxation using warm organic botanicals and rhythmic long strokes.",
      benefits: [
        "Reduces stress hormones (cortisol) and eases mental restlessness",
        "Induces restorative parasympathetic sleep states",
        "Nourishes dry skin with antioxidant herbal oils",
        "Restores gentle muscular flow and limb flexibility"
      ],
      oilBlend: "Warm Bala Ashwagandha & Lavender Essence",
      image: "/images/relaxation-massage.jpg",
    },
    {
      id: "whole-body-massage",
      title: "Whole Body Massage",
      sanskritName: "Sarvanga Abhyanga",
      duration: "60 – 90 Min",
      badge: "Signature Ayurvedic Therapy",
      shortDesc: "A comprehensive, rhythmic treatment that improves overall circulation, relieves widespread muscle tension, and restores harmony.",
      fullDesc: "A comprehensive, rhythmic treatment that improves overall circulation, relieves widespread muscle tension, and restores complete physical harmony and energy balance from head to toe.",
      benefits: [
        "Full lymphatic drainage and metabolic detoxification",
        "Deep muscular rejuvenation across back, legs, and spine",
        "Balances Vata, Pitta, and Kapha bio-energies",
        "Enhances joint lubrication and overall vitality"
      ],
      oilBlend: "Authentic Mahanarayana & Dhanwantharam Formulation",
      image: "/images/whole-body-massage.jpg",
    },
  ],
  faqs: [
    {
      question: "Why choose Ayurvedic massage in Cameron Park, NSW?",
      answer: "Ayurvedic massage at Aayur Touch goes beyond standard muscle manipulation. It uses personalised, certified techniques to balance your body's vital energy (Doshas), offering both physical relief and mental clarity right here in Cameron Park. Unlike generic spa sessions, every treatment uses warm, herb-infused organic medicated oils customized for your individual constitution and physical condition.",
    },
    {
      question: "How do I book a personalized massage appointment?",
      answer: "Booking your restorative session is simple and immediate. We prioritise direct, personal communication to ensure your treatment is perfectly tailored to your needs. Simply tap the Call Now button (0451 205 328) or reach out via WhatsApp to secure your preferred time. We also accommodate same-day appointments subject to availability.",
    },
    {
      question: "What should I expect during my first Ayurvedic treatment?",
      answer: "Your initial session begins with a brief consultation to understand your physical tension points, stress levels, and comfort preferences. You will be welcomed into our serene, heated treatment room where customized warm herbal oil is applied using traditional, rhythmic strokes. Modest draping is maintained at all times to ensure utmost comfort and privacy.",
    },
    {
      question: "What type of massage oils are used at Aayur Touch?",
      answer: "We use only 100% pure, natural, certified Ayurvedic herbal oils formulated with potent botanical extracts such as Ashwagandha, Brahmi, Bala, and Ksheerabala. These therapeutic oils deeply penetrate dermal layers to nourish nerve endings, lubricate joints, and soothe muscular inflammation.",
    },
    {
      question: "Is Ayurvedic massage suitable for tension headaches and neck stiffness?",
      answer: "Yes, absolutely. Our Seated Head, Neck & Shoulder Massage and specialised Headache Treatment target the suboccipital muscles, trapezius tension, and cranial marma points that trigger chronic headaches and posture fatigue from desk work.",
    },
    {
      question: "Where is Aayur Touch located and is parking available?",
      answer: "Aayur Touch is located at 19 Turnock Drive, Cameron Park NSW 2285 in a quiet, private sanctuary setting, serving clients from Cameron Park, Edgeworth, West Wallsend, Minmi, Fletcher, Maryland, Wallsend, Newcastle, and Lake Macquarie. Free, convenient private on-site parking is available.",
    },
  ],
};
