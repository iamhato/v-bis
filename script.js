new Vue({
    el: '#app',
    data: {
        memberFilter: 'BiS',//初期表示
        projects: [
            { title: "", title2: "23.09.18 HMV&BOOKS HAKATA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy26.webp", category: 'TOGGY' },
            { title: "", title2: "23.09.18 HMV&BOOKS HAKATA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy25.webp", category: 'TOGGY' },
            { title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/kure3.webp", category: 'KURE' },
            { title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy24.webp", category: 'TOGGY' },
            { title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano25.webp", category: 'NANO3' },
            { title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy23.webp", category: 'TOGGY' },
            { title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy22.webp", category: 'TOGGY' },
            { title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano24.webp", category: 'NANO3' },
            { title: "", title2: "23.09.17 FUKUOKA DRUM Be-1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy21.webp", category: 'TOGGY' },
            { title: "", title2: "23.07.16 SHIBUYA TOWER RECORD CUTUP STUDIO", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy18.webp", category: 'TOGGY' },
            { title: "", title2: "23.07.14 TOWER RECORD KINSHICHO PARCO", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy17.webp", category: 'TOGGY' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy16.webp", category: 'TOGGY' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/kure2.webp", category: 'KURE' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano20.webp", category: 'NANO3' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/kure.webp", category: 'KURE' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy15.webp", category: 'TOGGY' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/sion3.webp", category: 'SHiON' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano21.webp", category: 'NANO3' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy14.webp", category: 'TOGGY' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/hyuga5.webp", category: 'HYUGA' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy13.webp", category: 'TOGGY' },
            { title: "", title2: "23.05.28 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/mugen.webp", category: 'MUGEN' },
            { title: "", title2: "23.05.27 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy12.webp", category: 'TOGGY' },
            { title: "", title2: "23.05.27 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano19.webp", category: 'NANO3' },
            { title: "", title2: "23.05.27 FUKUOKA DRUM SON", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/sion1.webp", category: 'SHiON' },
            { title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS7.webp", category: 'BiS' },
            { title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano18.webp", category: 'NANO3' },
            { title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/sion2.webp", category: 'SHiON' },
            { title: "", title2: "23.05.26 ESP ENTERTAINMENT FUKUOKA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano17.webp", category: 'NANO3' },
            { title: "", title2: "23.03.18 SANUKI ROCK COLOSSEUM", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano15.webp", category: 'NANO3' },
            { title: "", title2: "23.01.18 SANUKI ROCK COLOSSEUM", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy11.webp", category: 'TOGGY' },
            { title: "", title2: "23.01.16 NAGOYA BOTTOM LINE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/hyuga4.webp", category: 'HYUGA' },
            { title: "", title2: "23.01.16 NAGOYA BOTTOM LINE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy10.webp", category: 'TOGGY' },
            { title: "", title2: "23.01.08 日比谷野外音楽堂", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS5.webp", category: 'BiS' },
            { title: "", title2: "23.01.08 日比谷野外音楽堂", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo10.webp", category: 'NEOTREES' },
            { title: "", title2: "23.01.08 日比谷野外音楽堂", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS4.webp", category: 'BiS' },
            { title: "", title2: "22.12.17 OSAKA BIG CAT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano14.webp", category: 'NANO3' },
            { title: "", title2: "22.12.17 OSAKA BIG CAT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS3.webp", category: 'BiS' },
            { title: "", title2: "22.12.17 OSAKA BIG CAT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo9.webp", category: 'NEOTREES' },
            { title: "", title2: "22.12.17 OSAKA BIG CAT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano13.webp", category: 'NANO3' },
            { title: "", title2: "22.12.17 OSAKA BIG CAT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/ito6.webp", category: 'MUSENSiTEEBU' },
            { title: "", title2: "22.12.17 OSAKA BIG CAT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo8.webp", category: 'NEOTREES' },
            { title: "", title2: "22.12.17 OSAKA BIG CAT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo7.webp", category: 'NEOTREES' },
            { title: "", title2: "22.12.04 SHIBUYA TOWER RECORD CUTUP STUDIO", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS2.webp", category: 'BiS' },
            { title: "", title2: "22.11.20 KUMAMOTO B.9 V1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano12.webp", category: 'NANO3' },
            { title: "", title2: "22.11.20 KUMAMOTO B.9 V1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy7.webp", category: 'TOGGY' },
            { title: "", title2: "22.11.20 KUMAMOTO B.9 V1", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/ito5.webp", category: 'MUSENSiTEEBU' },
            { title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/bis4-4.webp", category: 'BiS' },
            { title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/bis3-3.webp", category: 'BiS' },
            { title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano11.webp", category: 'NANO3' },
            { title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano5-5.webp", category: 'NANO3' },
            { title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo7-7.webp", category: 'NEOTREES' },
            { title: "", title2: "22.11.19 KAGOSHIMA SR HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo8-8.webp", category: 'NEOTREES' },
            { title: "", title2: "22.11.05 KANAZAWA AZ", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy9.webp", category: 'TOGGY' },
            { title: "", title2: "22.11.05 KANAZAWA AZ", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy8.webp", category: 'TOGGY' },
            { title: "", title2: "22.11.05 KANAZAWA AZ", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo11.webp", category: 'NEOTREES' },
            { title: "", title2: "22.11.05 KANAZAWA AZ", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy6.webp", category: 'TOGGY' },
            { title: "", title2: "22.11.05 KANAZAWA AZ", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo6.webp", category: 'NEOTREES' },
            { title: "", title2: "22.11.04 KYOTO KBS HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS1.webp", category: 'BiS' },
            { title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy19.webp", category: 'TOGGY' },
            { title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano10.webp", category: 'NANO3' },
            { title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo12.webp", category: 'NEOTREES' },
            { title: "", title2: "22.10.29 SHINJUKU MARUI MEN", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano9.webp", category: 'NANO3' },
            { title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy5.webp", category: 'TOGGY' },
            { title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo5.webp", category: 'NEOTREES' },
            { title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy4.webp", category: 'TOGGY' },
            { title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano23.webp", category: 'NANO3' },
            { title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo14.webp", category: 'NEOTREES' },
            { title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/ito4.webp", category: 'MUSENSiTEEBU' },
            { title: "", title2: "22.10.16 YOKOHAMA BAY HALL", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy20.webp", category: 'TOGGY' },
            { title: "", title2: "22.10.10 TOWER RECORD KYOTO", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo6-6.webp", category: 'NEOTREES' },
            { title: "", title2: "22.09.19 TOWER RECORD SAPPORO PARCO", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy3.webp", category: 'TOGGY' },
            { title: "", title2: "22.08.07 KAMEIDO CLOCK", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/toggy1.webp", category: 'TOGGY' },
            { title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano7.webp", category: 'NANO3' },
            { title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano6.webp", category: 'NANO3' },
            { title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo4-4.webp", category: 'NEOTREES' },
            { title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo5-5.webp", category: 'NEOTREES' },
            { title: "", title2: "22.07.06 KAWASAKI CLUB CITTA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/bis2-2.webp", category: 'BiS' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/bis1-1.webp", category: 'BiS' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano5.webp", category: 'NANO3' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano3-3.webp", category: 'NANO3' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano2-2.webp", category: 'NANO3' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo3-3.webp", category: 'NEOTREES' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo2-2.webp", category: 'NEOTREES' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/mon2-2.webp", category: 'CHANTMONKEE' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano3.webp", category: 'NANO3' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo2.webp", category: 'NEOTREES' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS6.webp", category: 'BiS' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo3.webp", category: 'NEOTREES' },
            { title: "", title2: "22.06.19 NAGASAKI DRUM Be-7", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/mon3.webp", category: 'CHANTMONKEE' },
            { title: "", title2: "22.06.05 OKINAWA OUTPUT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/ito1.webp", category: 'MUSENSiTEEBU' },
            { title: "", title2: "22.06.05 OKINAWA OUTPUT", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/ito1-1.webp", category: 'MUSENSiTEEBU' },
            { title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo1-1.webp", category: 'NEOTREES' },
            { title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/mon1-1.webp", category: 'CHANTMONKEE' },
            { title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano1-1.webp", category: 'NANO3' },
            { title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/nano1.webp", category: 'NANO3' },
            { title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo1.webp", category: 'NEOTREES' },
            { title: "", title2: "22.03.12 MORIOKA CLUB WAVE", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/mon2.webp", category: 'CHANTMONKEE' },
            { title: "", title2: "22.01.22 ZEPP NAGOYA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS14.webp", category: 'BiS' },
            { title: "", title2: "22.01.19 ZEPP HANEDA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS13.webp", category: 'BiS' },
            { title: "", title2: "21.12.12 TOKYO Spotify O-EAST", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS12.webp", category: 'BiS' },
            { title: "", title2: "21.12.12 TOKYO Spotify O-EAST", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/neo13.webp", category: 'NEOTREES' },
            { title: "", title2: "21.11.18 ZEPP TOKYO", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS11.webp", category: 'BiS' },
            { title: "", title2: "21.10.23 NAKANO SUNPLAZA", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS10.webp", category: 'BiS' },
            { title: "", title2: "21.07.17 KANAZAWA AZ", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS9.webp", category: 'BiS' },
            { title: "", title2: "21.07.17 KANAZAWA AZ", image: "https://raw.githubusercontent.com/hatocats/v-BiS/main/images/BiS8.webp", category: 'BiS' },
        ],
        currentImage: null,  // 現在選択された画像
        isModalOpen: false,   // モーダルの表示状態
    },
    computed: {
        reversedProjects() {
            return this.projects.slice().reverse();
        }
    },
    methods: {
        setMember: function (member) {
            this.memberFilter = member;
        },
        openModal(image) {
            this.currentImage = image;
            this.isModalOpen = true;
            // 一時的に setTimeout を使ってアニメーションを開始
            this.$nextTick(() => {
                this.$refs.modal.classList.add('show');
            });
        },
        closeModal() {
            this.$refs.modal.classList.remove('show');
            // フェードアウト後にモーダルを閉じるためのタイムアウト
            setTimeout(() => {
                this.isModalOpen = false;
                this.currentImage = null;
            }, 300); // CSSのtransition時間に合わせる
        }
    }
});
