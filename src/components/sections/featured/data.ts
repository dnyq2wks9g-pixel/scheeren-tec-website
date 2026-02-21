import img1 from "./assets/projekt-neubau.jpg";
import img2 from "./assets/projekt-sanierung.jpg";
import img3 from "./assets/projekt-gewerbe.jpg";

export const projectsSection = {
  title: "Referenzprojekte",
  subheading1_1: "Ausgewählte Projekte ",
  subheading1_2: "aus dem Kreis Heinsberg",
  projects: [
    {
      title: "Wärmepumpe im Neubau",
      description:
        "Installation einer Luft-Wasser-Wärmepumpe mit Fußbodenheizung in einem Einfamilienhaus. Inklusive Energieberatung, Förderanträge und Inbetriebnahme – alles aus einer Hand.",
      location: "Heinsberg",
      visual: img1,
    },
    {
      title: "Heizungssanierung Altbau",
      description:
        "Austausch einer 25 Jahre alten Ölheizung gegen moderne Gas-Brennwerttechnik mit Solarthermie-Unterstützung. Ergebnis: 40% weniger Heizkosten und deutlich mehr Komfort.",
      location: "Oberbruch",
      visual: img2,
    },
    {
      title: "Hybrid-Lösung Gewerbeobjekt",
      description:
        "Hybrides Heizsystem für eine Gewerbeimmobilie: Wärmepumpe kombiniert mit Gas-Brennwert für Spitzenlasten. Intelligente Regelung sorgt für optimale Effizienz.",
      location: "Erkelenz",
      visual: img3,
    },
  ],
  callToAction: "Starten Sie Ihr Heizungsprojekt mit Scheeren Tec",
  button: "Projekt anfragen",
};
