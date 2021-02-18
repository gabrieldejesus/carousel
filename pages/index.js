import Head from "next/head";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import styles from "../styles/Home.module.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carousel</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          orientation="horizontal"
          totalSlides={3}
          className={styles.carousel}
        >
          <Slider className={styles.carouselArea}>
            <Slide index={0} className={styles.carouselItem}>
              <div>
                <img src="/images/michael-jordan.png" alt="Michael Jordan" />
              </div>
              <h3>“Michael Jordan”</h3>
              <p>Eu posso aceitar falhas, mas não posso aceitar não tentar.</p>
              <span>Jogador</span>
            </Slide>
            <Slide index={1} className={styles.carouselItem}>
              <div>
                <img src="/images/nelson-mandela.png" alt="Nelson Mandela" />
              </div>
              <h3>“Nelson Mandela”</h3>
              <p>
                Ser pela liberdade não é apenas tirar as correntes de alguém,
                mas viver de forma que respeite e melhore a liberdade dos
                outros.
              </p>
              <span>Jogador</span>
            </Slide>
            <Slide index={2} className={styles.carouselItem}>
              <div>
                <img src="/images/will-smith.png" alt="Will Smith" />
              </div>
              <h3>“Will Smith”</h3>
              <p>Viva o dia como se o tivesse inventado</p>
              <span>Ator</span>
            </Slide>
          </Slider>

          <div className={styles.carouselButtons}>
            <ButtonBack>
              <RiArrowLeftSLine size={40} color="#007de7" />
            </ButtonBack>
            <ButtonNext>
              <RiArrowRightSLine size={40} color="#007de7" />
            </ButtonNext>
          </div>

          <div className={styles.carouselPoints}>
            <Dot slide={0} />
            <Dot slide={1} />
            <Dot slide={2} />
          </div>
        </CarouselProvider>
      </main>
    </div>
  );
}
