window.addEventListener('DOMContentLoaded', (event) => {
  const audio = document.getElementById("play");
  audio.play();
});

function validatePassword() {
    var button = document.getElementById('click');
    let popup = document.getElementById('popup');
    var password = document.getElementById('passwordInput').value;
    var center = document.getElementById('center');
    var pesan = document.querySelector(".hilang2");
    var boxComments1 = document.querySelector(".notif1");
    var audio = document.getElementById("play");

    if (password === "Gaboets9") {
        popup.classList.remove("popup");
        button.style.display = "none";
        center.style.display = "none";
        boxComments1.style.display = "block";
        pesan.style.display = 'inline-block';
        balas();
    } else {
        Swal.fire(
            'Yahhh salah',
            'Coba lagi masukin kode yang bener',
            'jika kamu memang my best friend'
        );
    }
    audio.play();
  }


function balas(){
  var commentBox = document.querySelector(".hilang2");
  var notif2 = document.querySelector(".notif2");
  var notif1 = document.querySelector(".notif1");

  notif1.addEventListener("click", async function() {
    var { value: nama } = await Swal.fire({
      imageUrl: "https://dekatutorial.github.io/stiker_mylove.gif",
      title: "Hai, Kamu temanku yang mana nih. Nama kamu siapa?",
      input: "text",
      confirmButtonText: "Kirirm",
    }).then(({ value }) => {
      if(value){
        commentBox.style.display = "none";
        notif1.style.display = "none";
        notif2.style.display = "block";
      }
      return { value };
    });
  
  if (nama) {
    await Swal.fire({
        title: 'Terima kasih!',
        text: 'Nama kamu adalah ' + nama,
        icon: 'success',
        confirmButtonText: 'OK'
      });    

    document.querySelector(".hilang1").style.display = "none";
    txt = "Halo " + nama + ".disini aku punya sesuatu untukmu " + nama + ".";
    typeWriter(mulaitanya);
    button.style.display = 'inline-block';
  } else {
    await Swal.fire({
      imageUrl: "https://dekatutorial.github.io/stiker2_mylove.gif",
      imageHeight: 120,
      confirmButtonText: "iya deh",
      title: "kenapa gk diisi kamu jahat isi dong",
    });
    balas();
  }
});

}

var i = 0;
var speed = 120;
var txt = "";
  
function typeWriter(callback) {
  var isiElement = document.querySelector(".isi");
  if (i < txt.length) {
    isiElement.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, callback);
  } else {
    document.querySelector(".notif2").style.animation = "kelip 1200ms infinite ease";
    if (typeof callback === 'function') {
      callback();
    }
  }
}
const swals = Swal.mixin({
    allowOutsideClick: false,
    cancelButtonColor: "#FF0040",
});
const swalsy = Swal.mixin({
    confirmButtonText: "iya",
    allowOutsideClick: false,
});
const swalst = Swal.mixin({
    allowOutsideClick: false,
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
});

function mulaitanya() {
    swals.fire({
      title: 'Halo kamu bisa klik tombol dibawah ya',
      imageUrl: "https://dekatutorial.github.io/stiker_mylove.gif",
      imageWidth: 120,
      imageHeight: 120,
      confirmButtonText: "Okay",
      allowOutsideClick: false,
      showCancelButton: false,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
          document.querySelector(".notif2").style.display = "none";
        kuis();
      }
    });
}
  
async function kuis() {
    await swalst.fire({
      title: "Holaaaa guys Apa kabar udh lama kita gak bertemu :(",
      imageUrl: "https://i.postimg.cc/c41V6JdJ/tonton-tonton-friends.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "Udah makan belum nih? kalau belum makan sana.<?>>",
      imageUrl: "https://i.postimg.cc/9FpwtL3p/tkthao219-bunny-1.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "Sekarang cuaca panas kali enaknya makan ice cream, nanti kalau ketemu traktir ice cream dong hehehe",
      imageUrl: "https://i.postimg.cc/ZqrWnHLp/tkthao219-bubududu-8.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "Aku kangen dirimu bebb. kangen kita disekolah yg dulu hiks hiks",
      imageUrl: "https://i.postimg.cc/8z43GQ26/tkthao219-bubududu-2.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "Aku bosan tanpamu gk ada yang ngehibur lagi deh",
      imageUrl: "https://i.postimg.cc/htRgvBZZ/tkthao219-bunny-4.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "gak ada cerita, gak ada yang tukang gosip, gk ada kelakuan lucu deh.",
      imageUrl: "https://i.postimg.cc/43MW4JBm/tkthao219-bubududu-3.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "Kapan ketemu lagi deh gak sabar aku merindukan kalian",
      imageUrl: "https://i.postimg.cc/kGDMQvWj/tkthao219-bubududu-9.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "Tapiiiiiiiii bo.......ong hahhahahahaha",
      imageUrl: "https://i.postimg.cc/ZKV0y03s/lol-bunny.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "Eh candaaa jangan marahh yah nanti aku dateng ke mimpimu loh",
      imageUrl: "https://i.postimg.cc/rFS3htgg/tkthao219-bubududu-1.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "udah ahh candanya. aku beneran sayang kamu. jangan dilupain yah",
      imageUrl: "https://i.postimg.cc/FH6y3Tc6/tkthao219-tooji.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "jangan lupa tidur yah",
      imageUrl: "https://i.postimg.cc/4xxPzK0Y/tkthao219-quby.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "dahhh yahh bye bye gw pergi",
      imageUrl: "https://i.postimg.cc/wjnN77Y8/tkthao219-bubududu-6.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    await swalst.fire({
      title: "terakhir love buat kamuuuu",
      imageUrl: "https://i.postimg.cc/3wMhyHLb/tkthao219-bunny-3.gif",
      imageWidth: 250,
      imageHeight: 280,
    })
    Swal.fire({
      title: 'Apa Kamu suka',
      icon: 'question',
      text: 'jika iya, klik suka disana ada hadiah untukmu, jika kamu klik tidak kamu berhenti jadi temanku aja. nanti jangan klik dulu yg dibawah album kalau udh buka semua albumnya baru klik button warna warni di bawah okeyyy',
      confirmButtonText: 'Suka',
      cancelButtonText: 'Tidak',
      showCancelButton: true,
      showCloseButton: true
    }).then(({ isConfirmed }) => {
      if(isConfirmed) {
        document.getElementById("wrapper").style.display = "block";
        document.getElementById("pindah").style.display = "block";
      }
    });
}


