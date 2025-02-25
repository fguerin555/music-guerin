import React from "react";
import "../../Global.css";
import styles from "./Home.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Home = () => {
  return (
    <div>
      <div className={styles.HomePage}>
        <p>Frederic Guerin</p>
        <p>fguerin555@gmail.com</p>
        <p>Born in Boulogne-Billancourt France on 13 November 1959</p>
        <p>Living in Tuscany </p>
        <p>Studies: Classical high school</p>
        <p>
          1992/1995 : School of Composition, Harmony and Counterpoint Jean
          Robert. Paris.
        </p>
        <p>1977: Creation of the rock band “Cholera”. Caen. Normandy.</p>
        <p>
          1979: Creation and composition of a 120 minute musical work “SAGA”.
          Paris.
        </p>
        <p>
          1981: Creation of the rock band “Les Singes Electriques” Caen.
          Normandy.
        </p>
        <p>
          1982: Creation of the french rock band “Cirage Bleu”. Record company
          “TREMA”. Paris.
        </p>
        <p>SOUNDTRACKS</p>
        <p>
          1991: Medium-length film “DRADOUR” 26 minutes by David Martin.
          <br />
          Production: LE GAYANT FILMS Paris.
        </p>
        <p>
          1992: Short film “SCHWARTZ” 6 minutes by Frederic Journet.
          <br />
          Production: QUARTIER LATIN Paris. CANAL+ diffusion.
        </p>
        <p>
          1993: Short film “JE TE NEM” 14 minutes by Frederic Journet and
          Bernard Schouckroun.
          <br />
          Production: QUARTIER LATIN Paris. CANAL+ diffusion.
        </p>
        <p>
          1994: SHORTS TV “BANDES ANNONCES 1” 7 X 2 minutes by Frederic Journet
          and Bernard Schouckroun.
          <br />
          Production: CANAL+ Paris. CANAL+ diffusion
        </p>
        <p>
          1995: Medium-length film “COEURD’AIGUILLE” 24 minutes by Thierry
          Sebban
          <br />
          Production: TWILIGHT ZONE Paris. Broadcast FRANCE 3 TV.
        </p>
        <p>
          1995: Documentary “LES RENDEZ-VOUS CAMARGUAIS” 7 x 26 minutes by Paul
          Carpita.
          <br />
          Production QUARTIER LATIN Paris. Broadcast FRANCE 3 TV.
        </p>
        <p>
          1995: SHORTS TV “BANDES ANNONCES 2” 7 X 2 minutes by Frederic Journet
          and Bernard Schouckroun
          <br />
          Production: CANAL+ Paris. CANAL+ diffusion.
        </p>
        <p>
          1998: Short film “TOURNIQUET ORANGE” 16 minutes by Thierry Sebban
          <br />
          Production: TWILIGHT ZONE Paris. Broadcast FRANCE 3 TV.
        </p>
        <p>
          2000: Feature film “INNOCENT POUR CENT” 96 minutes by Bernard
          Schoukroun and Frederic Journet.
          <br />
          Production MAGNIFICAT FILMS Paris. CANAL+ / PARIS PREMIÈRE broadcast.
        </p>
        <p>
          2000 to 2004: Collaboration with the television writer and director
          Roberto Giaccobo
        </p>
        <p>Documentaries “GEO & GEO”. RAI 3 Rome.</p>
        <p>
          2001/2003: RAISAT FICTION Conception and composition of all the
          original music.
          <br />
          Themes/Jingles/Advertisements/Sub- funds/Columns/Promos/Interviews
          <br />
          for the satellite channel RAISAT FICTION. Rome.
        </p>
        <p>
          2002: Documentary “VACCARO'S ITALIAN PASTRY SHOP II” 26 minutes by
          Alessandra Tantillo. Rome
        </p>
        <p>2010: Documentary music</p>
        <p>
          “FASCISM AND THE CULT OF THE DUCE”
          <br />
          42 minutes by Alessandra Tantillo and Vanessa Roghi.
          <br />
          Production / Edition / Diffusion:ARTS and HUMANITY RESEARCH COUNCIL.
          London.
        </p>
        <p>
          “PREDAPPIO: PAST AND PRESENT IN MUSSOLINI’S BIRTHPLACE”
          <br /> 42 minutes by Alessandra Tantillo and Vanessa Roghi.
          <br />
          Production / Edition / Diffusion:ARTS and HUMANITY RESEARCH COUNCIL.
          London.
        </p>
        <p>
          “MUSSOLINI AFTER MUSSOLINI”
          <br />
          42 minutes by Alessandra Tantillo and Vanessa Roghi.
          <br />
          Production / Edition / Diffusion:ARTS and HUMANITY RESEARCH COUNCIL.
          London.
        </p>
        <p>
          2011: Teacher of French song at the Instituto Saint-Louis des
          Français. Rome.
        </p>
        <p>2012/2024: Music for documentaries "La Grand Storia" Rai3. Rome.</p>
        <p>
          2017 : "LA RESA DEI CONTI" - Story of Italian Western Spaghetti
          Productions
          <br />
          By Vanessa Roghi - Photography: Alessandra Tantillo
          <br />
          Production / Edition / Diffusion:ARTS and HUMANITY RESEARCH COUNCIL.
          Warwick.{" "}
        </p>
        <p>Musics Documentaries for "La Grande Storia" RAI 3. Rome.</p>
        <p>
          2009 to 2012: Creation of songs in French
          <br />
          Interpretations in various venues in Rome. “LE GUERIN & LES ITALIENS”.
        </p>
        <div className={styles.GuerinVideo}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/nysRzwnPDXw?"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            alt="Le Guérin & les Italiens in concerto - canzone: Le campane di San Lorenzo"
          ></iframe>
        </div>

        <p>2012: Two videos and music for the "Infinite Museum".</p>
        <div className={styles.MusinfOne}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/9_Jr4r_rG5w?si=RKMlrIqicQPMxfN-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            alt="Video Museo infinito Uno"
          ></iframe>
        </div>
        <p></p>
        <div className={styles.MusinfTwo}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/siOe6He9bME?si=jErQf_iXbhNNIFj-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            alt="Video Museo infinito Due"
          ></iframe>
        </div>
        <p>2017: Music for Spot "Fabrication du Stylo Bic Crystal"</p>
        <div className={styles.Bic}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/SUcqOXuOSpo?si=coQ2naHJZ0yKzaGS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            alt="Video Museo infinito Due"
          ></iframe>
        </div>
        <p>
          2023: Video and music for the association "Ciel'in Città" - Event:
          "Nuvola Bianca".
        </p>
        <div className={styles.NBvideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k0cREgVlrDg?si=0Da-AFTDtF8Vfu2-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Home;
