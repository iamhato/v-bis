<script setup>
import { ref, computed, nextTick } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; // 追加
import '@splidejs/vue-splide/css';

const splideOptions = {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  autoWidth: true,
  gap    : '5px',
  arrows : false,
  pagination: false,
  autoScroll: {
    speed: 0.3,
    pauseOnHover: false,
    pauseOnFocus: false,
  },
};

// --- Data ---
const projects = [
  { title: "", title2: "23.09.18 HMV&BOOKS HAKATA", image: "/images/toggy26.webp", category: 'TOGGY' },
{ title: "", title2: "23.09.18 HMV&BOOKS HAKATA", image: "/images/toggy25.webp", category: 'TOGGY' },
{ title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "/images/kure3.webp", category: 'KURE' },
{ title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "/images/toggy24.webp", category: 'TOGGY' },
{ title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "/images/nano25.webp", category: 'NANO3' },
{ title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "/images/toggy23.webp", category: 'TOGGY' },
{ title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "/images/toggy22.webp", category: 'TOGGY' },
{ title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "/images/nano24.webp", category: 'NANO3' },
{ title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "/images/toggy21.webp", category: 'TOGGY' },
{ title: "", title2: "23.07.16 SHIBUYA TOWER RECORD CUTUP STUDIO", image: "/images/toggy18.webp", category: 'TOGGY' },
{ title: "", title2: "23.07.14 TOWER RECORD KINSHICHO PARCO", image: "/images/toggy17.webp", category: 'TOGGY' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/toggy16.webp", category: 'TOGGY' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/kure2.webp", category: 'KURE' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/nano20.webp", category: 'NANO3' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/kure.webp", category: 'KURE' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/toggy15.webp", category: 'TOGGY' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/sion3.webp", category: 'SHiON' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/nano21.webp", category: 'NANO3' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/toggy14.webp", category: 'TOGGY' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/hyuga5.webp", category: 'HYUGA' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/toggy13.webp", category: 'TOGGY' },
{ title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "/images/mugen.webp", category: 'MUGEN' },
{ title: "", title2: "23.05.27 FUKUOKA DRUM SON", image: "/images/toggy12.webp", category: 'TOGGY' },
{ title: "", title2: "23.05.27 FUKUOKA DRUM SON", image: "/images/nano19.webp", category: 'NANO3' },
{ title: "", title2: "23.05.27 FUKUOKA DRUM SON", image: "/images/sion1.webp", category: 'SHiON' },
{ title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "/images/BiS7.webp", category: 'BiS' },
{ title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "/images/nano18.webp", category: 'NANO3' },
{ title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "/images/sion2.webp", category: 'SHiON' },
{ title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "/images/nano17.webp", category: 'NANO3' },
{ title: "", title2: "23.03.18 SANUKI ROCK COLOSSEUM", image: "/images/nano15.webp", category: 'NANO3' },
{ title: "", title2: "23.01.18 SANUKI ROCK COLOSSEUM", image: "/images/toggy11.webp", category: 'TOGGY' },
{ title: "", title2: "23.01.16 NAGOYA BOTTOM LINE", image: "/images/hyuga4.webp", category: 'HYUGA' },
{ title: "", title2: "23.01.16 NAGOYA BOTTOM LINE", image: "/images/toggy10.webp", category: 'TOGGY' },
{ title: "", title2: "23.01.08 日比谷野外音楽堂", image: "/images/BiS5.webp", category: 'BiS' },
{ title: "", title2: "23.01.08 日比谷野外音楽堂", image: "/images/neo10.webp", category: 'NEOTREES' },
{ title: "", title2: "23.01.08 日比谷野外音楽堂", image: "/images/BiS4.webp", category: 'BiS' },
{ title: "", title2: "22.12.17 OSAKA BIG CAT", image: "/images/nano14.webp", category: 'NANO3' },
{ title: "", title2: "22.12.17 OSAKA BIG CAT", image: "/images/BiS3.webp", category: 'BiS' },
{ title: "", title2: "22.12.17 OSAKA BIG CAT", image: "/images/neo9.webp", category: 'NEOTREES' },
{ title: "", title2: "22.12.17 OSAKA BIG CAT", image: "/images/nano13.webp", category: 'NANO3' },
{ title: "", title2: "22.12.17 OSAKA BIG CAT", image: "/images/ito6.webp", category: 'MUSENSiTEEBU' },
{ title: "", title2: "22.12.17 OSAKA BIG CAT", image: "/images/neo8.webp", category: 'NEOTREES' },
{ title: "", title2: "22.12.17 OSAKA BIG CAT", image: "/images/neo7.webp", category: 'NEOTREES' },
{ title: "", title2: "22.12.04 SHIBUYA TOWER RECORD CUTUP STUDIO", image: "/images/BiS2.webp", category: 'BiS' },
{ title: "", title2: "22.11.20 KUMAMOTO B.9 V1", image: "/images/nano12.webp", category: 'NANO3' },
{ title: "", title2: "22.11.20 KUMAMOTO B.9 V1", image: "/images/toggy7.webp", category: 'TOGGY' },
{ title: "", title2: "22.11.20 KUMAMOTO B.9 V1", image: "/images/ito5.webp", category: 'MUSENSiTEEBU' },
{ title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "/images/bis4-4.webp", category: 'BiS' },
{ title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "/images/bis3-3.webp", category: 'BiS' },
{ title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "/images/nano11.webp", category: 'NANO3' },
{ title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "/images/nano5-5.webp", category: 'NANO3' },
{ title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "/images/neo7-7.webp", category: 'NEOTREES' },
{ title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "/images/neo8-8.webp", category: 'NEOTREES' },
{ title: "", title2: "22.11.05 KANAZAWA AZ", image: "/images/toggy9.webp", category: 'TOGGY' },
{ title: "", title2: "22.11.05 KANAZAWA AZ", image: "/images/toggy8.webp", category: 'TOGGY' },
{ title: "", title2: "22.11.05 KANAZAWA AZ", image: "/images/neo11.webp", category: 'NEOTREES' },
{ title: "", title2: "22.11.05 KANAZAWA AZ", image: "/images/toggy6.webp", category: 'TOGGY' },
{ title: "", title2: "22.11.05 KANAZAWA AZ", image: "/images/neo6.webp", category: 'NEOTREES' },
{ title: "", title2: "22.11.04 KYOTO KBS HALL", image: "/images/BiS1.webp", category: 'BiS' },
{ title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "/images/toggy19.webp", category: 'TOGGY' },
{ title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "/images/nano10.webp", category: 'NANO3' },
{ title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "/images/neo12.webp", category: 'NEOTREES' },
{ title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "/images/nano9.webp", category: 'NANO3' },
{ title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "/images/toggy5.webp", category: 'TOGGY' },
{ title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "/images/neo5.webp", category: 'NEOTREES' },
{ title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "/images/toggy4.webp", category: 'TOGGY' },
{ title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "/images/nano23.webp", category: 'NANO3' },
{ title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "/images/neo14.webp", category: 'NEOTREES' },
{ title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "/images/ito4.webp", category: 'MUSENSiTEEBU' },
{ title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "/images/toggy20.webp", category: 'TOGGY' },
{ title: "", title2: "22.10.10 TOWER RECORD KYOTO", image: "/images/neo6-6.webp", category: 'NEOTREES' },
{ title: "", title2: "22.09.19 TOWER RECORD SAPPORO PARCO", image: "/images/toggy3.webp", category: 'TOGGY' },
{ title: "", title2: "22.08.07 KAMEIDO CLOCK", image: "/images/toggy1.webp", category: 'TOGGY' },
{ title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "/images/nano7.webp", category: 'NANO3' },
{ title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "/images/nano6.webp", category: 'NANO3' },
{ title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "/images/neo4-4.webp", category: 'NEOTREES' },
{ title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "/images/neo5-5.webp", category: 'NEOTREES' },
{ title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "/images/bis2-2.webp", category: 'BiS' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/bis1-1.webp", category: 'BiS' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/nano5.webp", category: 'NANO3' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/nano3-3.webp", category: 'NANO3' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/nano2-2.webp", category: 'NANO3' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/neo3-3.webp", category: 'NEOTREES' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/neo2-2.webp", category: 'NEOTREES' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/mon2-2.webp", category: 'CHANTMONKEE' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/nano3.webp", category: 'NANO3' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/neo2.webp", category: 'NEOTREES' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/BiS6.webp", category: 'BiS' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/neo3.webp", category: 'NEOTREES' },
{ title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "/images/mon3.webp", category: 'CHANTMONKEE' },
{ title: "", title2: "22.06.05 OKINAWA OUTPUT", image: "/images/ito1.webp", category: 'MUSENSiTEEBU' },
{ title: "", title2: "22.06.05 OKINAWA OUTPUT", image: "/images/ito1-1.webp", category: 'MUSENSiTEEBU' },
{ title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "/images/neo1-1.webp", category: 'NEOTREES' },
{ title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "/images/mon1-1.webp", category: 'CHANTMONKEE' },
{ title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "/images/nano1-1.webp", category: 'NANO3' },
{ title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "/images/nano1.webp", category: 'NANO3' },
{ title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "/images/neo1.webp", category: 'NEOTREES' },
{ title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "/images/mon2.webp", category: 'CHANTMONKEE' },
{ title: "", title2: "22.01.22 ZEPP NAGOYA", image: "/images/BiS14.webp", category: 'BiS' },
{ title: "", title2: "22.01.19 ZEPP HANEDA", image: "/images/BiS13.webp", category: 'BiS' },
{ title: "", title2: "21.12.12 TOKYO Spotify O-EAST", image: "/images/BiS12.webp", category: 'BiS' },
{ title: "", title2: "21.12.12 TOKYO Spotify O-EAST", image: "/images/neo13.webp", category: 'NEOTREES' },
{ title: "", title2: "21.11.18 ZEPP TOKYO", image: "/images/BiS11.webp", category: 'BiS' },
{ title: "", title2: "21.10.23 NAKANO SUNPLAZA", image: "/images/BiS10.webp", category: 'BiS' },
{ title: "", title2: "21.07.17 KANAZAWA AZ", image: "/images/BiS9.webp", category: 'BiS' },
{ title: "", title2: "21.07.17 KANAZAWA AZ", image: "/images/BiS8.webp", category: 'BiS' },
]

// --- State ---
const memberFilter = ref('BiS')
const currentImage = ref(null)
const isModalOpen = ref(false)
const modalEl = ref(null)

// --- Computed ---
const reversedProjects = computed(() =>
  projects.slice().reverse().filter(
    (p) => memberFilter.value === 'BiS' || memberFilter.value === p.category
  )
)

// --- Methods ---
function setMember(member) {
  memberFilter.value = member
}

function openModal(image) {
  currentImage.value = image
  isModalOpen.value = true
  nextTick(() => {
    modalEl.value?.classList.add('show')
  })
}

function closeModal() {
  modalEl.value?.classList.remove('show')
  setTimeout(() => {
    isModalOpen.value = false
    currentImage.value = null
  }, 300)
}
</script>

<template>
  <a href="#bottom" class="return-bottom"><i class="fas fa-angle-double-down"></i></a>
  <a href="#top" class="return-top"><i class="fas fa-angle-double-up"></i></a>

  <div class="header-background" id="top">
    <div class="center_for_pc">
      <Transition appear name="logo">
        <div class="top">
          <a href="/">
            <img src="/images/logo.png" alt="v-BiS logo" />
          </a>
          <div class="header-wrapper">
            <div class="typing">Photo Gallery for BiS 3rd Gen</div>
          </div>
        </div>
      </Transition>
      <Transition appear name="heading-box">
        <div class="heading-box">
          <h2>
            <span class="gradient-text">PHOTO<br />GALLERY<br />for<br />3期BiS</span>
          </h2>
        </div>
      </Transition>
    </div>

    <Transition appear name="instagram">
      <div id="instagram">
        <Splide :options="splideOptions" :extensions="{ AutoScroll }">
          <SplideSlide>
            <img src="/images/top-img1.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img2.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img3.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img4.jpg" class="splide-img">
          </SplideSlide>  
          <SplideSlide>
            <img src="/images/top-img5.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img6.png" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img7.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img8.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img9.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img10.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img11.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img12.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img13.jpg" class="splide-img">
          </SplideSlide>
          <SplideSlide>
            <img src="/images/top-img14.jpg" class="splide-img">
          </SplideSlide>
        </Splide>
      </div>
    </Transition>
  </div>

  <div class="title-container">
    <div class="members">
      <Transition appear name="menu1">
        <div class="member bis" :class="{ active: memberFilter === 'BiS' }" @click="setMember('BiS')">BiS</div>
      </Transition>
      <Transition appear name="menu2">
        <div class="member ito" :class="{ active: memberFilter === 'MUSENSiTEEBU' }" @click="setMember('MUSENSiTEEBU')">🦕 iTO</div>
      </Transition>
      <Transition appear name="menu3">
        <div class="member chamo" :class="{ active: memberFilter === 'CHANTMONKEE' }" @click="setMember('CHANTMONKEE')">🐵 CHANT</div>
      </Transition>
      <Transition appear name="menu4">
        <div class="member neo" :class="{ active: memberFilter === 'NEOTREES' }" @click="setMember('NEOTREES')">🌲 NEO</div>
      </Transition>
      <Transition appear name="menu5">
        <div class="member toggy" :class="{ active: memberFilter === 'TOGGY' }" @click="setMember('TOGGY')">👶 TOGGY</div>
      </Transition>
      <Transition appear name="menu6">
        <div class="member nano" :class="{ active: memberFilter === 'NANO3' }" @click="setMember('NANO3')">🌷 NANO3</div>
      </Transition>
    </div>
  </div>

  <TransitionGroup class="projects" name="projects" tag="div">
    <div
      class="project"
      v-for="project in reversedProjects"
      :key="project.image"
      @click="openModal(project.image)"
    >
      <div class="project-image-wrapper">
        <img class="project-image" :src="project.image" :alt="project.title2" />
        <div class="gradient-overlay"></div>
        <span class="image-text">{{ project.title2 }}</span>
      </div>
    </div>
  </TransitionGroup>

  <div v-if="isModalOpen" class="modal" ref="modalEl" @click="closeModal">
    <span class="close" @click.stop="closeModal">&times;</span>
    <img class="modal-content" :src="currentImage" alt="Modal Image" />
  </div>

  <footer id="bottom">
    <div class="footer-left">
      <div class="footer-logo">
        <img src="/images/logo.png" alt="v-BiS logo" />
      </div>
      <div class="footer-icon">🦕 🐵 🌲 👶 🌷</div>
    </div>
    <div class="footer-right">
      <div class="link">
        <a target="_blank" href="https://zenn.dev/hatohato/articles/d9a4bdfcab170a">
          <img width="50" src="/images/zenn-logo.png" alt="Zenn" />
        </a>
      </div>
      <div class="footer-copy">©2026 v-BiS</div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');


.return-top {
  text-decoration: none;
  bottom: 10px;
  color: white;
  font-size: 40px;
  height: 50px;
  line-height: 50px;
  outline: 0;
  position: fixed;
  right: 10px !important;
  text-align: center;
  width: 50px;
  transition: transform 0.3s linear;
  z-index: 100;
  opacity: 0.4;
}

.return-bottom {
  text-decoration: none;
  bottom: 10px;
  color: white;
  font-size: 40px;
  height: 50px;
  line-height: 50px;
  outline: 0;
  position: fixed;
  left: 10px !important;
  text-align: center;
  width: 50px;
  transition: transform 0.3s linear;
  z-index: 100;
  opacity: 0.4;
}

.header-background {
  height: 230px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #012a35;
}
#instagram {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60%;
  overflow: hidden;
}
.splide-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: block;
}

.top {
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 15px;
  left: 15px;
  z-index: 101;
  position: fixed;
}
.top a { text-decoration: none; }
.top img {
  width: 130px;
  filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2));
}

.logo-enter-active,
.logo-leave-active { transition: all 1s; }
.logo-enter-from,
.logo-leave-to { transform: translateX(-10vh); opacity: 0; }

.header-wrapper { display: flex; }

.typing {
  display: none;
  width: 17ch;
  padding-left: 5px;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.6));
  animation: typing 2s steps(18), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: white 3px solid;
  font-size: 14px;
  color: white;
  font-weight: bold;
}

.center_for_pc { margin: auto; }

.heading-box { 
  display: flex; 
  position: absolute; 
  top: 30px; 
  left: 30px;
  }
.heading-box h2 {
  font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, Roboto, sans-serif !important;
  display: block;
  font-size: 50px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 30px;
  letter-spacing: 2px;
}
.heading-box .gradient-text {
  background: radial-gradient(circle, #fcd045 0%, #fd841d 50%, #b43d3a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading-box-enter-active,
.heading-box-leave-active { transition: all 1s; }
.heading-box-enter-from,
.heading-box-leave-to { transform: translateY(-40px); opacity: 0; }

@keyframes typing { from { width: 0; } }
@keyframes blink  { 50% { border-color: transparent; } }

.project { transition: all 0.35s ease-in-out; }

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: auto;
  background: #011e26;
  padding-top: 30px;
}

.project-image-wrapper img {
  width: auto;
  height: 350px;
  border-radius: 10px;
  margin: 5px 7px;
}

.projects-enter-from { 
  transform: scale(0.5) translateY(-80px); opacity: 0; 
  }
.projects-leave-to   { 
  transform: translateY(30px); opacity: 0; 
  }
.projects-leave-active { position: absolute; z-index: -1; }

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -20px;
  position: fixed;
  flex-direction: column;
  right: -10px;
  top: 54px;
  z-index: 100;
  font-family: 'Patrick Hand', cursive;
}
.members .member {
  text-align: center;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 7px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}
.members .member:hover { box-shadow: none; }
.members .member.active { box-shadow: 0 0 0 2px white; }

.members .bis   { background-image: linear-gradient(to right, rgba(45,255,73,0.2), rgba(0,162,255,0.2)); display: none; }
.members .ito   { background-image: linear-gradient(to right, rgba(166,109,236,0.2), rgba(128,0,187,0.2)); }
.members .chamo { background-image: linear-gradient(to right, rgba(0,198,251,0.2), rgba(8,103,255,0.2)); }
.members .neo   { background-image: linear-gradient(to right, rgba(60,186,146,0.2), rgba(11,163,96,0.2)); }
.members .toggy { background-image: linear-gradient(to right, rgba(255,118,77,0.2), rgba(255,8,68,0.2)); }
.members .nano  { background-image: linear-gradient(to right, rgba(255,175,64,0.2), rgba(255,102,0,0.2)); }

.menu1-enter-active { transition: all 700ms; }
.menu2-enter-active { transition: all 1000ms; }
.menu3-enter-active { transition: all 1300ms; }
.menu4-enter-active { transition: all 1600ms; }
.menu5-enter-active { transition: all 1900ms; }
.menu6-enter-active { transition: all 2200ms; }
.menu1-enter-from,
.menu2-enter-from,
.menu3-enter-from,
.menu4-enter-from,
.menu5-enter-from,
.menu6-enter-from { opacity: 0; transform: translateX(10vh); }

.project-image-wrapper { position: relative; cursor: pointer; }

.image-text {
  box-shadow: 4px 4px 11px 0px #2a2a2acf;
  position: absolute;
  font-size: 10px;
  top: 0%;
  bottom: 0%;
  left: 5px;
  color: rgb(255 255 255);
  padding: 10px 5px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  z-index: 99;
  opacity: 0;
  animation: fadeIn 3s ease-in-out forwards;
}

@keyframes fadeIn {
  0%   { opacity: 0; }
  70%  { opacity: 0.3; }
  100% { opacity: 0.7; }
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.modal.show { opacity: 1; }

.modal-content {
  max-width: 90%;
  max-height: 90%;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
}
.modal.show .modal-content { opacity: 1; }

.close {
  position: absolute;
  top: 20px; right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}

footer {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 18px;
  height: 80px;
  background-image: linear-gradient(90deg, #012a35 0%, #1bdc82 100%);
  color: white;
  font-family: 'Patrick Hand', cursive !important;
}
footer .footer-left  { flex-direction: column; text-align: center; margin-right: 7px; }
footer .footer-right { flex-direction: column; text-align: center; margin-bottom: 3px; margin-left: 7px; }
footer .footer-logo  { margin-bottom: -5px; }
footer .footer-logo img { width: 70px; }
footer .footer-icon  { font-size: 16px; margin: 5px; padding-left: 4px; }
footer .link         { flex-direction: row; margin-bottom: 8px; padding-right: 2px; }

@media screen and (max-width: 500px) {
  .header-background { height: 380px !important;}
  .top { left: 20px !important; }
  .top img { width: 80px !important;}
  .member { padding: 5px 10px !important; }
  .center_for_pc { margin: 0 !important; }
  .heading-box { position: static; }
  .heading-box h2 { font-size: 50px; margin-top: -20px; margin-left: 12px; }
  .projects { width: 100% !important; }
  .project-image-wrapper { text-align: center; }
  .project-image-wrapper img { width: 96% !important; height: auto; }
  .typing { font-size: 10px !important; }
  .return-top, .return-bottom { color: white !important; }
  .footer-logo { margin-bottom: -10px !important; }
}

@media screen and (max-width: 1000px) {
  .projects { width: 100% !important; }
  .project-image-wrapper img { width: 600px; height: auto; }
  .return-top, .return-bottom { color: white; }
}
</style>
<style>
  html{
    scroll-behavior: smooth;
  }
  body{
    margin: 0!important;
  }
</style>
