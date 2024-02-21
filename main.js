const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    currentIndex: 0,
    songs: [
        {
            name: "Beautiful",
            singer: "Eminem",
            path: ".assets/songs/Beautiful.mp3",
            image: "./assets/images/Beautiful.jpg",
        },
        {
            name: "Lose Yourself",
            singer: "Eminem",
            path: ".assets/songs/Lose Yourself.mp3",
            image: "./assets/images/Lose-Yourself.jpg",
        },
        {
            name: "Mockingbird",
            singer: "Eminem",
            path: ".assets/songs/Mockingbird.mp3",
            image: "./assets/images/MorkingBird.jpg",
        },
        {
            name: "Not Afraid",
            singer: "Eminem",
            path: ".assets/songs/Not Afraid.mp3",
            image: "./assets/images/Not affair.jpg",
        },
        {
            name: "Till I Collapse",
            singer: "Eminem",
            path: ".assets/songs/Till I Collapse.mp3",
            image: "./assets/images/Till I Collapse.jpg",
        },
        {
            name: "Sing For The Moment",
            singer: "Eminem",
            path: ".assets/songs/Sing For The Moment.mp3",
            image: "./assets/images/Sing For The Moment.jpg",
        },
    ],
    render: function () {
        const htmls = this.songs.map((song) => {
            return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `;
        });
        $(".playlist").innerHTML = htmls.join("");
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                // Trả về object đầu tiên trong mảng songs(phần tử đầu tiên trong mảng)
                return this.songs[this.currentIndex];
            },
        });
    },

    handleEvents: function () {
        const cd = $(".cd");
        const cdWidth = cd.offsetWidth;
        document.onscroll = function () {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? `${newCdWidth}px` : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };
    },

    loadCurrentSong: function () {
        const heading = $("header h2");
        const cdThumb = $(".cd-thumb");
        const audio = $("#audio");

        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    start: function () {
        // Định nghĩa các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe/xử lý các sự kiện (DOM Events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist
        this.render();
    },
};

app.start();
