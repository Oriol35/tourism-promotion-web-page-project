import culImage from "../assets/images/culLleona.jpg";
import elCallImage from "../assets/images/callJueu.webp";
import narcisImage1 from "../assets/images/sardanes.jpg";
import narcisImage2 from "../assets/images/stNarcis.jpg";

import stGeorgeImage from "../assets/images/stGeorge.jpg";
import florsImage from "../assets/images/tempsDeFlors.jpg";

import murallaImage from "../assets/images/muralla.jpg";
import sardanaAudio from "../assets/audio/sardana.mp3";

import videoCatedral from "../assets/video/3dAnim.mp4";

/*
  "homesections" serves as an array of properties to fill up the inside content of the
  "InfoSection" component.
  This way you can edit all the information independently of it's location.

  At first I kept everything inside a .js code but then I was unablke to format the text.
  That's the only reason why this file is .jsx (in order to format the "text" attribute however I wanted).

  As you can see, you have the option to rather add one or two images. See the "InfoSection" component for more details.
  You can also use an image and a video at the same time, making it look as if the image was the thumbnail of the video.
*/

export const homeSections = [
  {
    id: 1,
    title: "Girona Cathedral",
    text: (
      <>
        <p>
          Always visible from all the city, the catedral of Saint Mary is known
          for having the <b>widest Gothic nave in the world (23 meters)</b>.
          <br />
          <br />A true architectural marvel that has watched over the city for
          centuries. As you can see in the 3d animation, it's structure is
          primarily formed by columns and a large ceiling. This structure gives
          the impression of being larger when watched from the inside.
          <br />
          <br />A crucial place worth watching that everyone should visit!
        </p>
      </>
    ),
    image: null,
    video: videoCatedral,
    image2: null,
    audio: null,
    alt: "Girona Cathedral",
  },
  {
    id: 2,
    title: 'Girona\'s most famous statue: "El cul de la lleona"',
    text: (
      <p>
        The statue known as the lioness's bottom, or "cul de la lleona" in
        Catalan, is an iconic sculpture located in <b>Plaça de Sant Feliu</b>,
        right next to the <b>Basilica of Sant Fèlix</b>.
        <br />
        <br />
        This figure dates back to the 12th century and sits atop a
        3.72-meter-tall column. According to local tradition,{" "}
        <b>
          touching the lioness's bottom or giving it a kiss is believed to bring
          good luck.
        </b>{" "}
        Visitors perform this ritual hoping to return to Girona sometime in the
        future.
        <br />
        <br />
        <b>Fun fact, the current sculpture is a replica!</b> The original piece
        is preserved in the Girona Art Museum. In those days, some children
        could reach up and touch the lion's bottom, which had been placed lower
        on the column, and the act became part of a city tradition.
        <br />
        <br />
        An interesting story, to say the least!
      </p>
    ),
    image: culImage,
    image2: null,
    video: null,
    audio: null,
    alt: "Lioness's bottom",
  },
  {
    id: 3,
    title: 'The Jewish Quarter, "El Call"',
    text: (
      <p>
        One of the <b>better-preserved Jewish quarters in the world</b> from the
        Middle Ages. The term "Call" is derived from Hebrew and translates to
        jewish neighbourhoods.
        <br />
        <br /> This might be one of the{" "}
        <b>most concurrent places in the entire city</b>, since its beauty
        attracts both tourists and locals to pass through all the time. Nowadays
        the "Call" is filled with shops, cafes and food outlets, becoming a
        popular spot for socializing and stroll.
      </p>
    ),
    image: elCallImage,
    image2: null,
    video: null,
    audio: null,
    alt: "Jewish Quarter Street",
  },
  {
    id: 4,
    title: 'Spring: Saint George & "Temps de Flors"',
    text: (
      <p>
        Spring is a special time of the year in Girona. On <b>April 23rd</b> we
        celebrate Saint George's Day. Inspired by a medieval legend, Saint
        George defeated a dragon in order to save a princess, and from its blood
        a rose bloomed. <b>It is tradition to give either a rose or a book</b>{" "}
        to loved ones, since it coincides with the International Book Day. The
        city fills up with book stalls and colorful rose parades.
        <br />
        <br />
        Just a few weeks later, festivall called <b>"Temps de flors"</b> takes
        over the city. Monuments, courtyards, and many urban spaces are
        decorated with floral arrangements, transforming the entire city into a
        giant garden.{" "}
        <b>
          Every year both locals and tourists walk all over the city to discover
          a multitude of amazing floral expositions.
        </b>
        <br />
        <br />
      </p>
    ),
    image: stGeorgeImage,
    image2: florsImage,
    video: null,
    audio: null,
    alt: "Flower Festival decorations",
  },
  {
    id: 5,
    title: 'Fall: "Sardanas" & "Sant Narcís"',
    text: (
      <p>
        In late October, the city commemoratess its patron "Sant Narcís". The
        air fills with the sound of the "Cobla" bands playing "Sardanas", a
        traditional Catalan dance. <b>Listen to the atmosphere down below</b>.
        <br />
        <br />
        To deal with cold temperatures, it is tradition to eat grilled chestnuts
        and sweet potatoes. The city fills up with people go out to meet with
        friends and visit the autumn amusement fairs located in "Parc de la
        Devesa". Music, gastronomic and theatrical festivals also emerge during
        this period.{" "}
        <b>It's a great time to see how the whole city's atmosphere changes!</b>
      </p>
    ),
    image: narcisImage1,
    image2: narcisImage2,
    video: null,
    audio: sardanaAudio,
    alt: "People dancing Sardanas",
  },

  {
    id: 6,
    title: "Nature & Routes: The City Walls",
    text: (
      <p>
        Walk along the medieval walls (Passeig de la Muralla),{" "}
        <b>one of the city's main attractions</b> along with the Jewish Quarter,
        and rightly so! This Carolingian-age construction is an integral part of
        Girona's identity and offers an unforgettable walk with stunning views
        of the entire city.
        <br />
        <br />
        Surrounded with beautiful gardens and medieval buildings, walking along
        the walls allows a unique and yet beautiful view of the city.{" "}
        <b>It's a highly recommended activity.</b> A perfect blend of history
        and nature!
      </p>
    ),
    image: murallaImage,
    imatge2: null,
    video: null,
    audio: null,
    alt: "Girona City Walls",
  },
];
