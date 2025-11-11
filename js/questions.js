
const options = [
    ["Evet","Hayır"],
    ["Tek Başıma","Bir Arkadaşımla","Grupla Birlikte"],
    ["Sanatsal","Bilimsel","Sportif"],
    ["Evet","Hayır","Kararsızım"],
    ["Kolay","Çok Kolay","Kararsızım","Zor","Çok Zor"],
    ["0-1 Saat","2-3 Saat","4-5 Saat","5 Saatten Fazla"],
    ["Memnunum","Çok Memnunum","Biraz Memnunum","Memnun Değilim"],
    ["İlgimi Çekti","Çok İlgimi Çekti","Biraz İlgimi Çekti","İlgimi Çekmedi"],
    ["Aynı","Daha Az","Daha Çok"],
    ["Evet","Biraz","Hayır"],
]

export const questions = [
    {
        question: "Daha önce bilgisayar veya tablet ile kodlama yaptınız mı? ",
        options: options[0]
    },
    {
        question: "Programlama veya Kodlama kelimeleri hakkında bir bilginiz var mı?",
        options: options[0]
    },
    {
        question: "Daha önce yeni bir şey (oyun, resim, icat vb.) tasarlamayı düşündünüz mü?",
        options: options[0]
    },
    {
        question: "Programlama etkinliklerini nasıl yapmayı istersiniz?",
        options: options[1]
    },
    {
        question: "Hangi tür etkinliklerden daha çok hoşlanırsınız?",
        options: options[2]
    },
    {
        question: "Okuldaki derslerde programlamayı öğrenebileceğinizi düşünüyor musunuz?",
        options: options[0]
    },
    {
        question: "Bu eğitimde kendi programınızı veya basit oyununuzu yapabileceğinizi düşünüyor musunuz?",
        options: options[3]
    },
    {
        question: "Programlama yapmanın (kod yazmanın) nasıl bir şey olduğunu düşünüyorsunuz?",
        options: options[4]
    },
    {
        question: "Günlük hayatınızda bilgisayar veya tablet başında (ders dışında) yaklaşık kaç saat zaman geçiriyorsunuz?",
        options: options[5]
    }
];
