import React from "react";
import { useRef } from "react";
import "../../Global.css";
import styles from "./Orchestral.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import Fragile from "../../assets/music/Arte-Rubata/Fragile.mp3";
import Collezione from "../../assets/music/Arte-Rubata/La-Collezione.mp3";

const Orchestral = () => {
  const audioRef = useRef(null);
  return (
    <div>
      <div className={styles.OrchestralPage}>
        <h1>Orchestral music</h1>
        <div className={styles.LecteursContainer}>
          <AudioPlayer
            src={Fragile}
            title="Fragile"
            artist="Frédéric Guérin"
            depositNumber="123456"
          >
            <audio ref={(audio) => (audioRef.current = audio)} src={Fragile} />
          </AudioPlayer>
        </div>
        <AudioPlayer
          src={Collezione}
          title="La Collezione"
          artist="Frédéric Guérin"
          depositNumber="123456"
        >
          <audio ref={(audio) => (audioRef.current = audio)} src={Collezione} />
        </AudioPlayer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum
          quis possimus aut qui exercitationem ab, porro nesciunt expedita neque
          quam iure dolore, officiis id alias eaque saepe aspernatur doloremque.
          Necessitatibus aut, fugiat cum veniam corrupti possimus dolorum
          doloribus ipsum. Molestias dolores aut nesciunt corrupti fuga
          molestiae quia. Reiciendis ipsum fugit quibusdam laborum tempora
          explicabo fuga reprehenderit omnis quidem, qui, aperiam beatae, nemo
          repudiandae facilis sed non doloremque nesciunt ex! Voluptate nam ipsa
          nobis ex! Magnam saepe minima suscipit quisquam, repudiandae vel
          laborum sed veniam fuga, vitae aspernatur molestias sunt delectus.
          Eaque quaerat eius, quam iure amet aspernatur ratione minima esse
          blanditiis reiciendis. Reprehenderit excepturi error commodi inventore
          dolore non, fugiat, velit vel quos ducimus hic asperiores quis
          doloribus mollitia recusandae. Quam doloremque, adipisci placeat velit
          iste, ullam laboriosam dignissimos voluptate quia, omnis eligendi
          consectetur sed facere? Et sunt cupiditate voluptate sit quisquam odit
          temporibus reprehenderit voluptatibus quia, accusamus minus
          dignissimos laboriosam architecto libero sequi nulla iste ipsa
          perspiciatis autem quibusdam nihil ratione! Voluptatem iste ea amet
          veritatis dolorum expedita dolore quasi, veniam, commodi pariatur,
          beatae enim. Exercitationem eligendi totam ducimus, harum corrupti
          perspiciatis voluptate laborum dicta ratione perferendis at pariatur
          debitis hic aliquam laboriosam aliquid officia facere esse rem.
          Architecto asperiores facilis, aperiam voluptatibus quis debitis?
          Ipsam obcaecati, aliquid soluta ea, numquam voluptatem perferendis
          omnis distinctio repudiandae vel animi commodi impedit expedita est
          neque, incidunt quidem consequuntur. In, libero aspernatur repellendus
          quia ipsam quae esse reprehenderit minus, omnis tempore ratione at
          expedita vero fugiat sed dicta repellat alias ullam quos accusantium
          non velit cum totam culpa. Corporis ipsam voluptate aliquam, voluptas
          quo dolores deserunt sit cumque consequatur explicabo mollitia laborum
          quibusdam sint id libero repudiandae numquam placeat ab eum possimus
          sunt, fugit maxime illum quas! Ipsum adipisci illum quod sunt sint
          architecto quibusdam ea! Minus laboriosam quae numquam fugit dolorem
          porro, blanditiis exercitationem delectus quo, possimus, mollitia
          voluptatem sapiente amet velit temporibus! Culpa, exercitationem rerum
          non officiis tempore corrupti magnam, animi enim pariatur iure nam,
          possimus labore earum. Necessitatibus error laborum numquam asperiores
          cum suscipit praesentium perferendis cupiditate, quas inventore neque
          accusantium nulla ab. Autem ad pariatur ducimus modi neque deleniti
          maiores. Vero sapiente delectus nisi assumenda magni! Omnis architecto
          adipisci, impedit aut possimus aperiam inventore nihil nostrum eius
          rerum, iusto laborum, ex harum odio quaerat accusantium facere error
          asperiores. Modi soluta, numquam itaque quos rem omnis quia labore
          facere sapiente quae? Tempore omnis impedit blanditiis exercitationem
          nihil corrupti, placeat quae asperiores facere id cum a ex quibusdam
          delectus sit voluptas commodi deserunt sequi quia assumenda. Accusamus
          quis eveniet minima dolore? Quaerat eum nulla sunt dolore ullam
          incidunt recusandae distinctio ducimus quidem ea corrupti, aliquam qui
          in id vero perspiciatis libero laborum. Quam explicabo laboriosam vero
          nihil delectus nemo quibusdam consectetur quidem! Qui iure quasi
          blanditiis ad dolores obcaecati ratione doloribus cupiditate explicabo
          officia et velit ea mollitia atque illo, consequuntur dolorem magnam!
          Nobis accusamus accusantium nihil iure eos dolores natus asperiores
          quis, sed, aliquam odit culpa sunt voluptatem quas inventore optio
          assumenda veritatis totam iusto! Enim vel cupiditate voluptatibus
          sapiente nesciunt, earum provident adipisci neque iste libero
          distinctio fugiat officiis commodi veritatis culpa reiciendis ex
          quibusdam voluptate maxime officia voluptatum nemo iure. Nesciunt
          officiis aspernatur praesentium quae reiciendis eaque consectetur
          laudantium beatae maxime, libero enim corrupti voluptate, accusantium
          accusamus necessitatibus. Cum, quia ex nemo quidem ipsa et officiis
          labore debitis cumque at fugiat, autem dolorem minus. Saepe officiis
          fugit possimus eaque perspiciatis quaerat, reprehenderit ad sunt
          cumque aut, rerum sed officia mollitia tenetur quisquam sint a. Modi
          fugit vel neque doloribus? Magni velit necessitatibus consequatur,
          quibusdam voluptate quisquam alias. Aliquid amet, nesciunt quidem
          quibusdam eos minima quam aspernatur ad maiores repudiandae, suscipit
          quos. Sed corporis unde expedita amet neque accusantium mollitia quas
          excepturi, assumenda magnam est animi veritatis reiciendis tenetur,
          aliquam consequatur iure perferendis perspiciatis natus nisi! Maxime
          officia ad repellat, labore veritatis ratione itaque nisi? Numquam
          molestias iste eos ut suscipit eum ullam totam facere porro ducimus.
          Suscipit itaque laudantium minima sunt consequatur iure assumenda a,
          placeat fuga eius? Consequatur consectetur, magni iste similique
          placeat quam asperiores quae sequi animi debitis veniam eveniet culpa
          labore in exercitationem suscipit minima vero cum tempora. Aliquid, ad
          esse repellat voluptates maiores cupiditate quaerat accusantium
          recusandae perspiciatis molestias illum pariatur itaque, nemo facilis
          molestiae officiis unde? Veniam hic sint unde harum. Nihil est debitis
          expedita, aliquid sapiente ullam accusamus ea magnam possimus quo
          dicta veritatis deserunt voluptate saepe praesentium quas, eius maxime
          earum cum optio magni. Eum magnam officia repudiandae. Saepe corrupti
          provident aliquam magnam, aliquid quia, molestias, consequatur
          architecto cumque esse veritatis id illo! Ea fugiat fugit esse nemo
          amet optio corporis laborum molestiae ipsum, similique tenetur commodi
          adipisci veritatis quasi quis, reprehenderit error ullam?
          Exercitationem, et neque voluptates officiis enim maxime modi
          reprehenderit adipisci. Qui, possimus laboriosam numquam dolores alias
          consequatur earum repudiandae nulla illo labore quisquam, sed quo
          molestias. Asperiores, quod? Libero nam eum consequuntur ratione
          delectus molestias nihil, beatae veniam cumque commodi possimus
          debitis voluptatibus dolorum eaque modi et animi inventore. Fugiat
          voluptate fuga, possimus magni cumque repellendus numquam harum.
          Repudiandae, sint et. Pariatur hic, ipsam doloremque repudiandae
          cumque, necessitatibus magnam laborum animi facere quisquam maxime
          dolores harum nobis quidem perspiciatis incidunt fugit, dicta
          exercitationem? Reiciendis quisquam non nesciunt placeat impedit
          cupiditate. Nobis illo facilis quisquam deleniti sed, corporis odio
          distinctio facere accusamus. Soluta, est reprehenderit excepturi
          molestias recusandae illum quos aspernatur! Magni rerum porro sint,
          minima dignissimos nam ex rem quaerat amet adipisci magnam.
          Repellendus, aliquam autem, aspernatur at a assumenda eos doloribus
          voluptas necessitatibus tenetur sapiente optio labore inventore quis
          quasi blanditiis perferendis molestias aliquid fugit error natus
          nesciunt? Possimus incidunt magnam maxime perspiciatis quasi ab hic
          itaque soluta. Perspiciatis aspernatur officiis delectus voluptas
          dignissimos deserunt temporibus doloribus perferendis suscipit, nulla
          non architecto quaerat veritatis omnis, voluptatum ipsam, libero illum
          recusandae nostrum! Odit iusto veniam possimus voluptatem excepturi.
          Voluptatem nam quis ad exercitationem, facilis sequi beatae quae atque
          asperiores quibusdam iste laboriosam, sapiente aliquam fuga obcaecati.
          Sequi accusantium culpa atque, quaerat non, adipisci officiis sint, a
          nemo esse consectetur nam ut. Quisquam vitae odio iure.
        </p>
      </div>

      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Orchestral;
