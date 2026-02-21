import imgGrid from "./assets/hybrid.jpg";
import imgSolar from "./assets/steuerung.jpg";
import imgWind from "./assets/beratung.jpg";

export const innovationsSection = {
  title: "Moderne Technik",
  subheading1_1: "Zukunftssichere",
  subheading1_2: " Heiztechnologien für Ihr Zuhause",
  innovations: [
    {
      title: "Hybride Heizsysteme",
      description:
        "Kombinieren Sie das Beste aus zwei Welten: Eine Wärmepumpe für den Großteil des Jahres, ergänzt durch einen Gas-Brennwertkessel an besonders kalten Tagen. So heizen Sie immer mit dem wirtschaftlichsten Energieträger und senken Ihre Kosten nachhaltig.",
      visual: imgGrid,
    },
    {
      title: "Intelligente Heizungssteuerung",
      description:
        "Mit moderner Regelungstechnik von Vaillant steuern Sie Ihre Heizung bequem per App – von überall. Automatische Anpassung an Wetter, Tageszeit und Ihre Gewohnheiten sorgen für optimalen Komfort bei minimalen Kosten.",
      visual: imgSolar,
    },
    {
      title: "Energieberatung nach GEG",
      description:
        "Als geprüfter Gebäudeenergieberater (HWK) analysieren wir Ihr Gebäude und erstellen individuelle Sanierungskonzepte. Wir beraten Sie zu Fördermöglichkeiten und begleiten Sie auf dem Weg zur energieeffizienten Immobilie.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Lassen Sie sich von Scheeren Tec beraten",
  button: "Mehr erfahren",
};
