import img1 from "./assets/person1.png";
import img2 from "./assets/person2.png";
import img3 from "./assets/person3.png";

export const testimonialsSection = {
  title: "Das sagen unsere Kunden",
  subheading1_1: "Erfahrungen unserer",
  subheading1_2: " zufriedenen Kunden aus der Region",
  testimonials: [
    {
      name: "Familie Weber",
      visual: img1,
      occupation: "Eigenheimbesitzer, Heinsberg",
      quote:
        "Herr Scheeren hat uns ausführlich beraten und eine Wärmepumpe empfohlen, die perfekt zu unserem Haus passt. Die Installation lief reibungslos und wir sparen jetzt deutlich bei den Heizkosten. Top Service!",
    },
    {
      name: "Thomas Müller",
      visual: img2,
      occupation: "Geschäftsführer, Heinsberg",
      quote:
        "Als Unternehmer schätze ich Zuverlässigkeit. Scheeren Tec hat unsere komplette Heizungsanlage modernisiert – termingerecht, sauber und professionell. Der Wartungsservice ist ebenfalls erstklassig.",
    },
    {
      name: "Andrea Schmidt",
      visual: img3,
      occupation: "Hauseigentümerin, Oberbruch",
      quote:
        "Von der Energieberatung bis zur Solarthermie-Installation – alles aus einer Hand. Herr Scheeren hat uns die Fördermöglichkeiten erklärt und alles perfekt koordiniert. Absolute Empfehlung!",
    },
  ],
  visual: "customer-testimonials-image.jpg",
  callToAction: "Werden auch Sie Teil unserer zufriedenen Kundenfamilie",
  button: "Kontakt aufnehmen",
};
