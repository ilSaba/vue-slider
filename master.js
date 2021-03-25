var app = new Vue(
    {
        el: '#root',
        data: {
            index: 0,
            images: [
                'https://gognablog.sherpa-gate.com/wp-content/uploads/2020/03/diritti-della-natura-NSTITUT_DU_VERBE_INCARNE_ASCENSION-3.jpg',
                'https://assets.ad-italia.it/gallery/121471/Mid/535baeeb-a332-49f9-853f-1efad5527b34.jpg',
                'http://www.massimomarchioro.it/wp-content/uploads/2019/04/arte-natura-massimo-marchioro.jpg',
            ]
        },
        methods: {
            next: function () {
                if (this.index < this.images.length - 1) {
                    this.index++;
                } else {
                     this.index = 0;
                }

            },
            prev: function () {
                if (this.index > 0) {
                    this.index--;
                }   else {
                        this.index = this.images.length - 1;
              }
            }, 
        }
    }
);