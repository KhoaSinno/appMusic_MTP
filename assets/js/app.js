const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd')
const heading = $('.header-title h2')
const cd_thumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const control = $('.control')
const pauseIcon = $('.controlBtn-pause')
const playIcon = $('.controlBtn-play')
const progress = $('#progress');
const progressBar = $(".progress_bar");
const timeSongTotal = $('.time_music-end');
const timeSongCurrent = $('.time_music-start');
const repeatBtn = $('.btn-repeat');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const list_music = $('.list_music')


const app = {
    currentIndex: 0,
    isPlayBool: false,
    isHoldProgressBar: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        /**
         tien len viet nam

         */
        {
            name: 'Nơi này có anh (Sinoo&Naiz)',
            singer: 'SƠN TÙNG M-TP',
            path: './assets/music/noiNayCoAnh.mp3',
            image: './assets/img/noiNayCoAnh.jpg',

        },
        {
            name: 'Muộn rồi mà sao chưa về (Remix)',
            singer: 'M-TP x BOMATELA',
            path: './assets/music/muonRoiMaSaoConChuaVe.mp3',
            image: './assets/img/muonRoiMaSaoConChuaVe.jpg',

        },
        {
            name: 'Âm thầm bên em(Naiz)',
            singer: 'Sếp Sky',
            path: './assets/music/amThamBenEm.mp3',
            image: './assets/img/amThamBenEm.jpg',

        },
        // {
        //     name: 'Buông đôi tay nhau ra',
        //     singer: 'Sếp Sky',
        //     path: './assets/music/buongDoiTayNhauRa.mp3',
        //     image: './assets/img/buongDoiTayNhauRa.jpg',

        // },
        {
            name: 'Có chắc yêu là đây',
            singer: 'Sky MTP',
            path: './assets/music/coChacYeuLaDay.mp3',
            image: './assets/img/coChacYeuLaDay.jpg',

        },
        {
            name: 'Chắc ai đó sẽ về',
            singer: 'Sky MTP',
            path: './assets/music/chacAiDoSeVe.mp3',
            image: './assets/img/chacAiDoSeVe.jpg',

        },
        {
            name: 'Khuôn mặt đáng thương',
            singer: 'Sky MTP',
            path: './assets/music/khuonMatDangThuong.mp3',
            image: './assets/img/khuonMatDangThuong.jpg',

        },
        {
            name: 'Tình yêu trong mắt em',
            singer: 'Sếp Sky',
            path: './assets/music/tinhYeuTrongMatEm.mp3',
            image: './assets/img/tinhYeuTrongMatEm.jpg',

        },
        {
            name: 'Đừng về trễ',
            singer: 'Sếp Sky',
            path: './assets/music/dungVeTre.mp3',
            image: './assets/img/dungVeTre.jpg',

        },
        {
            name: 'Bình yên nơi đâu',
            singer: 'Sếp Sky',
            path: './assets/music/binhYenNoiDau.mp3',
            image: './assets/img/binhYenNoiDau.jpg',

        },
        {
            name: 'Remember Me',
            singer: 'Sếp Sky',
            path: './assets/music/rememberMe.mp3',
            image: './assets/img/rememberMe.jpg',

        },
        {
            name: 'Làm người luôn yêu em',
            singer: 'Sếp Sky',
            path: './assets/music/lamNguoiLuonYeuEm.mp3',
            image: './assets/img/lamNguoiLuonYeuEm.jpg',

        },
        {
            name: 'Anh sai rồi',
            singer: 'Sếp Sky',
            path: './assets/music/anhSaiRoi.mp3',
            image: './assets/img/anhSaiRoi.jpg',

        },
        {
            name: 'Không phải dạng vừa đâu',
            singer: 'Sếp Sky',
            path: './assets/music/khongPhaiDangVuaDau.mp3',
            image: './assets/img/khongPhaiDangVuaDau.jpg',

        },
        {
            name: 'Cơn mưa ngang qua',
            singer: 'Sếp Sky',
            path: './assets/music/conMuaNgangQua.mp3',
            image: './assets/img/conMuaNgangQua.jpg',

        },
        {
            name: 'Em của ngày hôm qua',
            singer: 'Sếp Sky',
            path: './assets/music/emCuaNgayHomWa.mp3',
            image: './assets/img/emCuaNgayHomWa.jpg',

        },
        {
            name: 'There\'s no One at all',
            singer: 'Sếp Sky',
            path: './assets/music/thereNoOneAtAll.mp3',
            image: './assets/img/thereNoOneAtAll.jpg',

        },
        {
            name: 'Chúng ta của hiện tại',
            singer: 'Sếp Sky',
            path: './assets/music/chungTaCuaHienTai.mp3',
            image: './assets/img/chungTaCuaHienTai.jpg',

        },
        {
            name: 'Mai này con lớn lên',
            singer: 'Sếp Sky',
            path: './assets/music/maiNayConLonLen.mp3',
            image: './assets/img/maiNayConLonLen.jpg',

        },
        // {
        //     name: 'Chúng ta không thuộc về nhau',
        //     singer: 'Sếp Sky',
        //     path: './assets/music/chungTaKhongThuocVeNhau.mp3',
        //     image: './assets/img/chungTaKhongThuocVeNhau.jpg',

        // },
    ],
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    render: function () {
        const html = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="thumb" style="background: url('${song.image}') center center / cover">
            </div>
            <div class="body">
                <h3 class="title ${index === this.currentIndex ? 'neonTextTitle' : ''}">${song.name}</h3>
                <p class="author  ${index === this.currentIndex ? 'neonTextAuthor' : ''}">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
            `
        })
        list_music.innerHTML = html.join('')
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }, 300);
    },
    loadCurrentSong: function () {
        heading.innerText = this.currentSong.name
        cd_thumb.style.background = `url('${this.currentSong.image}') center center / cover`
        audio.src = this.currentSong.path
    },
    nextSong: function () {
        this.currentIndex++
        (this.currentIndex >= this.songs.length) && (this.currentIndex = 0)
        this.loadCurrentSong()
    },
    prevSong: function () {
        this.currentIndex--
        (this.currentIndex < 0) && (this.currentIndex = this.songs.length - 1)
        this.loadCurrentSong()
    },
    playRandomSong: function () {
        let indexRand
        do {
            indexRand = Math.floor(Math.random() * this.songs.length)
        } while (indexRand === this.currentIndex);
        this.currentIndex = indexRand
        this.loadCurrentSong();

    },
    handleEvents: function () {
        const _this = this
        // None set handles Scroll for this app
        /*
        const cdWidth = cd.offsetWidth
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newWidth = cdWidth - scrollTop
            if (newWidth >= 190) {
                cd.style.width = 0
                return
            }
            cd.style.width = newWidth + 'px'
            console.log(newWidth)
        }
        */

        // play music

        pauseIcon.style.display = 'none'

        playBtn.onclick = function () {
            if (_this.isPlayBool) {
                audio.play()
                pauseIcon.style.display = 'block'
                playIcon.style.display = 'none'
            } else {
                audio.pause()
                playIcon.style.display = 'block'
                pauseIcon.style.display = 'none'
            }
            _this.isPlayBool = !_this.isPlayBool
        }

        // progress for music
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = (audio.currentTime / audio.duration) * 100;
                progress.style.width = progressPercent + "%";
                //set durationTime và currentTime cho bài hát
                timeSongCurrent.textContent = _this.getMinutesSong(
                    progress.style.width
                );
                timeSongTotal.textContent = _this.setMinutesSong();
            }
        }

        progressBar.onmousedown = function (e) {
            const seekTime = (e.offsetX / this.offsetWidth) * audio.duration;
            audio.currentTime = seekTime;
            _this.isHoldProgressBar = true;
        }
        progressBar.onmouseup = function (e) {
            if (_this.isHoldProgressBar) {
                const seekTime = (e.offsetX / this.offsetWidth) * audio.duration;
                audio.currentTime = seekTime;
            }
        }

        nextBtn.onclick = function () {
            if (_this.isRandom)
                _this.playRandomSong()
            else
                _this.nextSong()
            audio.play()
            _this.render()
            // _this.scrollToActiveSong()
            pauseIcon.style.display = 'block'
            playIcon.style.display = 'none'
        }
        prevBtn.onclick = function () {
            if (_this.isRandom)
                _this.playRandomSong()
            else
                _this.prevSong()
            audio.play()
            _this.render()
            // _this.scrollToActiveSong()
            pauseIcon.style.display = 'block'
            playIcon.style.display = 'none'
        }
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        audio.onended = function () {
            if (_this.isRepeat)
                audio.play()
            else {
                nextBtn.click()
            }
        }

        list_music.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || e.target.closest('.option')) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                    pauseIcon.style.display = 'block'
                    playIcon.style.display = 'none'
                }
            }
        }
    },
    setMinutesSong() {
        const time = audio.duration;
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor(time - 60 * minutes)
            .toString()
            .padStart(2, "0");
        return (finalTime = minutes + ":" + seconds);
    },
    getMinutesSong() {
        const time = audio.currentTime;
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor(time - 60 * minutes)
            .toString()
            .padStart(2, "0");
        return (finalTime = minutes + ":" + seconds);
    },

    start: function () {
        this.defineProperties()
        this.handleEvents()
        this.loadCurrentSong()
        this.render()
    }
}

app.start()