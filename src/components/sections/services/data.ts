import img1 from "./assets/waermepumpe.jpg";
import img2 from "./assets/gasheizung.jpg";
import img3 from "./assets/oelheizung.jpg";
import img4 from "./assets/solarthermie.jpg";
import img5 from "./assets/brennstoffzelle.jpg";
import img6 from "./assets/wartung.jpg";

export const servicesSectionData = {
  title: "Unsere Leistungen",
  subheading: {
    text1_1: "Höchster Komfort, maximale Effizienz und Umweltverträglichkeit – ",
    text1_2: "zeitgemäße Heizungs- und Warmwassersysteme.",
    text2:
      "Mit unserem Partner Vaillant bieten wir Ihnen moderne technische Lösungen. Dabei legen wir ebenso großen Wert auf eine individuelle Planung wie auf eine termintreue und handwerklich präzise Ausführung.",
  },
  services: [
    {
      title: "Wärmepumpen",
      briefDescription:
        "Nutzen Sie die kostenlose Umweltenergie aus Luft, Erde oder Wasser. Wir planen und installieren Ihre effiziente Wärmepumpenanlage für nachhaltige Wärme.",
      visual: img1,
    },
    {
      title: "Gas-Brennwert",
      briefDescription:
        "Moderne Gas-Brennwerttechnik nutzt die Energie optimal aus und spart Heizkosten bei gleichzeitig hohem Wärmekomfort. Effizient und zuverlässig.",
      visual: img2,
    },
    {
      title: "Öl-Brennwert",
      briefDescription:
        "Mehr Wärme aus jedem Tropfen Heizöl. Öl-Brennwerttechnik von Vaillant bietet modernste Technik für bestehende Ölheizungssysteme.",
      visual: img3,
    },
    {
      title: "Solarthermie",
      briefDescription:
        "Energie frei Haus: Mit Solarkollektoren können Sie Heizkosten sparen und die Umwelt schonen. Wir integrieren Solarthermie perfekt in Ihr System.",
      visual: img4,
    },
    {
      title: "Brennstoffzellen",
      briefDescription:
        "Innovative Brennstoffzellentechnologie erzeugt gleichzeitig Strom und Wärme – hocheffizient und zukunftssicher. Die Heizung der Zukunft.",
      visual: img5,
    },
    {
      title: "Sanitär & Bad",
      briefDescription:
        "Von der kleinen Reparatur bis zur kompletten Badmodernisierung. Wir gestalten Ihr Wohlfühlbad mit handwerklicher Präzision.",
      visual: img6,
    },
  ],
  callToAction:
    "Entdecken Sie die Heizungslösung, die zu Ihnen passt. Lassen Sie sich jetzt beraten!",
  buttonText: "Beratung anfragen",
};
