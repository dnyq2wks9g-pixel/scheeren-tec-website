import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Kontakt aufnehmen",
  subheading1_1: "Starten Sie jetzt ",
  subheading1_2: "Ihr Heizungsprojekt",
  initiatives: [
    {
      title: "Persönliche Beratung",
      description:
        "Vereinbaren Sie einen Termin für eine ausführliche Beratung. Wir nehmen uns Zeit für Ihre Vorstellungen und entwickeln ein passendes Gesamtkonzept.",
      visual: svg2,
    },
    {
      title: "Förderung & Finanzierung",
      description:
        "Wir beraten Sie zu allen aktuellen Förderprogrammen (BEG, KfW) und helfen Ihnen, die maximale Förderung für Ihre neue Heizungsanlage zu erhalten.",
      visual: svg4,
    },
    {
      title: "Vaillant Fachpartner",
      description:
        "Als zertifizierter Vaillant Fachpartner bieten wir Ihnen Qualitätsprodukte mit Herstellergarantie. Profitieren Sie von unserer Expertise und erstklassigem Service.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Rufen Sie uns an oder schreiben Sie uns",
  button: "Jetzt Kontakt aufnehmen",
};
