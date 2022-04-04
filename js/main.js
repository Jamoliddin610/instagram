let contents = [{
        id: 1,
        media: ["./img/photo_2022-03-31_05-26-06.jpg", "./img/photo_2022-03-31_05-25-17.jpg",
            " ./img/photo_2022-03-31_05-24-25.jpg  ",
            "./img/photo_2022-03-31_05-23-16.jpg"
        ],
        desc: `AJR ning Yangi Do’ppilariga ulgurib qoling, soni cheklangan🤩
<br>
    Yangi Do’ppilarning 5 hil rangi hamda Yangi Vilvet ko’ylaklar to’plamiga Marhamat azizlar ❤️ Bizning Sifat va Dizaynga allaqachon Ajr muhlislari baho berib bo’lishgan🌟
<br>
    Ajrdan oling- Ajr oling🌟
<br>
    Ham Kiyim harid qiling, ham Sahovat qiling.Bizda kiyimlardan tushgan daromadning 100 % hammasi Ehsonga sarf bo’lishi sizni hursand qilsin`,
        like: 1677,
        comment: 37,
        save: false,
        type: 'img',

    },
    {
        id: 2,
        media: ["./img/photo_2022-03-31_05-21-36.jpg", "./img/video2.mp4"],
        desc: `Yangiliklarga TAYYORMISIZ🤩🤩
<br>
Tezroq keling, Namozhonlarimiz uchun eng qulay, eng sifatli, eng go’zal va zamonaviysi AJRda🎁
<br>
AJR-Collection ga Keling, Bugun keling. Yangi To’plam Sotuvda☝🏻Unutmang Ehsonning mukofoti faqat ehsondir🌙
<br>
AJR-Collection bu MDH dagi Yagona 100% Xayriya Tijorati☝🏻Bu kiyimlardan tushgan daromadning hammasi #YurakAmri xayriya fondiga ehson qilinadi🌙
<br>
Ajrdan oling- Ajr oling🌟`,
        like: 1080,
        comment: 87,
        save: false,
        type: 'img',

    },
    {
        id: 3,
        media: ["./img/photo_2022-03-31_05-20-46.jpg"],
        desc: `AJR-Collection kiyimlarining Yangi dizayni Sotuvda azizlar🤩 Ayniqsa Insonlarga ibrat shiorlarimiz juda ko’pchilikning yaxshi amallariga sabab bo’layotganini ko’rib quvonamiz☝🏻
<br>
Yodingizda bo’lsin bu MDH davlatlaridagi Yagona Xayriya tijorati, SubhanAllah❤️
<br>
AJRDAN OLING-AJR OLING.
<br>
Ham Kiyim harid qiling, ham Sahovat qiling. Bizda kiyimlardan tushgan daromadning 100% hammasi Ehsonga sarf bo’lishi sizni hursand qilsin☝🏻`,
        like: 1175,
        comment: 40,
        save: false,
        type: 'img',

    },
    {
        id: 4,
        media: ["./img/photo_2022-03-31_05-19-50.jpg", "./img/photo_2022-03-31_05-18-59.jpg", "./img/photo_2022-03-31_05-18-06.jpg", "./img/photo_2022-03-31_05-16-56.jpg"],
        desc: `UMRA-2022🌙 @ajr_collection_official da Muborak Umra va Haj safarlari uchun maxsus tikilgan liboslar to’plamiga Marhamat azizlar 🕋
<br>
Albatta keling, Ibodatlaringiz, Amallaringiz qabul Bo’lsin. Qolaversa muborak safarni Ehsondan boshlang, ahir AJR-Collection bu Yagona 100% Xayriya Tijorati☝🏻
<br>
Ajrdan oling- Ajr oling🌟
`,
        like: 1462,
        comment: 46,
        save: false,
        type: 'img',


    },
    {
        id: 5,
        media: ["./img/photo_2022-03-31_05-12-19.jpg", "./img/video5.mp4"],
        desc: `AJR-Collection ga kelish uchun 2 ta Katta sabab bor🤓 Birinchisi Chet elni boy qilmang, o’zimizning Brenddan kiyining🌟Ikkinchisi ham kiyim harid qiling ham Yetimlarga bu bilan Ehson qiling🌟 Masha Allah ❗️ <br>

#YurakAmri Shiorlarining Yangi Dizayn To’plamlari SOTUVDA🤩
<br>
Ajrdan oling-Ajr oling`,
        like: 1400,
        comment: 34,
        save: false,
        type: 'img',

    },
    {
        id: 6,
        media: ["./img/photo_2022-03-31_05-06-11.jpg"],
        desc: `Halovatni qalblardan izlang☝🏻mo’minning qalbidan, miskinning duosidan, yetimning hursandchiligidan izlang☝🏻Qachonki bir qalbga hursandchilik olib kirar ekansiz, Undayin Lazzatni izlab qolasiz. Siz bir urunib ko’ring, o’zingizda hohishni uyg’oting. Ana shunda molingizni ham unutib yetimni o’ylaysiz, qayg’urasiz. Robbimning barokat yomg’iri yog’adi shunda!`,
        like: 1690,
        comment: 60,
        save: false,
        type: 'img',

    },

]

const elRow = document.querySelector('.row')
contents.forEach((item) => {
    let div = document.createElement('div')
    div.className = "insta__content"
    div.id = `${item.id}`
    div.innerHTML = `<img src="${item.media[0]}" alt="imgs">
      <div class="insta__inner"><div class="insta__like d-flex align-items-center "><i class="bx bxs-heart "></i><span class=" ms-1 me-3">${item.like}</span></div><div class="insta__com d-flex align-items-center "><i class="bx bxs-comment"></i> <span class="ms-1 me-3">${item.comment}</span></div></div>

      
    `

    elRow.appendChild(div)
})
const elContent = document.querySelectorAll(".insta__content")
elContent.forEach((il, ind) => {
    contents.forEach((item) => {
        let elIcon = document.createElement('i')
        elIcon.className = ' bx bx-play'
        let n = item.media.filter((el) => {
            return el.includes('.mp4')
        })
        n.forEach((a) => {
            item.media.forEach((b) => {
                if (a == b) {
                    if (ind + 1 == item.id) {
                        il.appendChild(elIcon)
                        item.type = 'video'
                    }
                }
            })

        })


    })
})

elContent.forEach((el) => {
    let num = contents.filter((item) => {
        return item.media.length > 1 && item.media[1].includes(".jpg")
    })
    num.forEach((elem) => {
        if (elem.id == el.id) {
            let elSpan = document.createElement('span')
            elSpan.innerHTML = `<svg aria-label="Кольцевая галерея" class="_8-yf5 " color="#ffffff" fill="#ffffff" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg>`
            el.appendChild(elSpan)
            elem.type = "carousel"
        }
    })

})
let savedArr = []
let insta = document.querySelector('.instagram')
contents.forEach((el) => {
    elContent.forEach((item, inx) => {
        item.addEventListener('click', () => {
            if (el.id == inx + 1) {
                let modal = document.createElement('div')
                modal.className = "insta-modal modal"
                modal.innerHTML = `  <div class="insta-modal__container d-flex ">
    <div class="insta-modal__iframe">
    <p>salom</p>
</div>
    <div class="insta-modal__wrapper wrapper">
      <div class="wrapper__header d-flex align-items-center justify-content-between w-100">
        <div class="wrapper__logo-content d-flex align-items-center">
          <div class="wrapper__img-box me-2">
          <img src="./img/logo.jpg" alt="" class="wrapper__logo"> 
        </div>
        <div class="wrapper__inner ">
          <a href="#" class="wrapper__title">ajr_collection_official</a>
          <p class="wrapper__desc">AJR Collections</p>
        </div>
        </div>
        <button class="wrapper__header-btn"><i class='bx bx-dots-horizontal-rounded'></i></button>
      </div>
      <div class="wrapper__body">
        <div class="wrapper__logo-content d-flex mb-2">
          <div class="wrapper__img-box me-2">
          <img src="./img/logo.jpg" alt="" class="wrapper__logo"> 
        </div>
        <div class="wrapper__inner d-flex ">
          <a href="#" class="wrapper__title ms me-3">ajr_collection_official</a>
          <p class="p-0 m-0">Assalomy aleykum!</p>
        </div>
        </div>
        <p>${el.desc}</p>   
      </div>
      <div class="wrapper__footer">
      <div class="wrapper__events d-flex align-items-center justify-content-between">
      <div class="wrapper__all d-flex align-items-center">
      <button class="wrapper__like">
      <i class="bx bx-heart"></i></button>
      <button class="wrapper__comment">
      <i class="bx bx-comment"></i></button>
      <button class="wrapper__share">
      <i class="bx bx-share"></i></button>
      </div>
      <button class="wrapper__save">
      <i class="bx bx-bookmarks"></i></button></div>
      <p class="wrapper__like-counter">${el.like} likes</p>
      </div>
    </div>
  </div>
  <button class="insta-modal__close" onclick="remove()"><i class="bx bx-x"></i></button>`
                insta.appendChild(modal)
                let iframe = document.querySelector('.insta-modal__iframe')
                if (el.type == "carousel") {
                    iframe.innerHTML = `<div class="carousel">
                        <div class="img-container" id="imgs">
                            <img src="${el.media[0]}" alt="first-image">
                                <img src="${el.media[1]}" alt="second-image">
                                    <img src="${el.media[2]}" alt="third-image">
                                        <img src="${el.media[3]}" alt="fourth-image">
                                        </div>
                                        <div class="button-container">
                                            <button id="left"><i class="bx bx-left-arrow"></i></button>
                                            <button id="right"><i class="bx bx-right-arrow"></i></button>
                                        </div>
                                    </div>`
                    let imgs = document.getElementById('imgs');
                    let leftBtn = document.getElementById('left');
                    let rightBtn = document.getElementById('right');


                    let img = document.querySelectorAll('#imgs img');

                    let idx = 0;

                    function changeImg() {
                        if (idx > img.length - 1) {
                            idx = 0
                        } else if (idx < 0) {
                            idx = img.length - 1
                        }
                        imgs.style.transform = `translateX(${-idx * 500}px)`
                    }

                    rightBtn.addEventListener('click', function change() {
                        idx++;
                        // resetInter();
                        changeImg()
                    })
                    leftBtn.addEventListener('click', function change() {
                        idx--;
                        // resetInter();
                        changeImg()
                    })
                } else if (el.type == 'video') {
                    iframe.innerHTML = `<video src="${el.media[1]}" autoplay type="video/mp4"  controls controlslist="nodownload"></video>`
                } else {
                    iframe.innerHTML = `<img src="${el.media[0]}">`
                }
                let like = document.querySelector('.wrapper__like')
                let likeCounter = document.querySelector('.wrapper__like-counter')
                let count = 0
                like.addEventListener('click', () => {
                    if (count == 0) {
                        likeCounter.innerHTML = `${el.like + 1} likes`
                        like.innerHTML = `<i class="bx bxs-heart"></i>`
                        count++
                    } else {
                        likeCounter.innerHTML = `${el.like} likes`
                        like.innerHTML = `<i class="bx bx-heart"></i>`
                        count--
                    }
                })
                let bookmark = document.querySelector('.wrapper__save');
                bookmark.addEventListener('click', () => {
                    savedArr.push(el)
                    savedArr.forEach((ins)=>{
                        let first = ins.id
                        savedArr.find(first)
                        console.log(savedArr);
                    })
                })
            }

        })
    })
})
function remove() {
    let closeModal = document.querySelector('.insta-modal')
    closeModal.remove()
}



let instagram = document.querySelector('.insta');
let post = document.getElementById('post')
let saved = document.getElementById('saved')
saved.addEventListener('click', () => {
    instagram.style.display = 'none'
})
post.addEventListener('click', () => {
    instagram.style.display = 'flex'
})