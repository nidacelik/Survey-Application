# Survey-Application
Survey App

Anket-Uygulama
Anket Uygulaması

🎓 İlkokula Yönelik Programlama Temelleri Anket Uygulaması
Bu proje, ilkokulların Programlama Temelleri eğitim öncesi ve sonrasında bilgi düzeylerini kullanabilmek için geliştirilmiş etkileşimli bir web uygulamasıdır.

Tüm anket verileri LocalStorage üzerinde saklanır ve programcı kapatılırsa bile bilgiler silinmez.

✨ Özellikler
✅ Anket Öncesi (Ön Test) sayfası
✅ Anket Sonrası (Son Test) sayfası
✅ Dashboard (Sonuç Ekranı) ile tüm yanıtların görüntülenmesi
✅ Tamamen LocalStorage tabanlı veri depolama
✅ Mobil uyumlu tarife (Bootstrap 5)
✅ Vanilla JavaScript ile dinamik soru yönetimi
✅ Ekstra sunucu gerekmeden tamamen tarayıcıda çalışma
🚀 Projeyi Çalıştırma
✅Canlı Sunucu ile (Önerilen)
Projeyi indir.
VS Code ile aç.
Live Server eklentisinin kurulduğundan emin olun.
index.htmlparçalarını aç ve Canlı Yayına Geç butonuna tıklayın.
Eğer ES6 modülleri (içe/dışa aktarım) kullanılıyorsa, çift tıklayarak açmak yerine Live Server ile çalıştırmanız gerekir.

🛠️ Kullanılan Teknolojiler
HTML5
CSS3
Önyükleme 5
JavaScript (ES6+)
Yerel Depolama API'si
📊Sayfaların açıklaması
📘 index.html— Anket Öncesi
Öğrencilerin eğitime başlamadan önce bilgi düzeyi ölçer.

📗 sonrasi.html— Anket Sonrası
Eğitimin verilmesinden sonra bilgi gelişiminin ölçümü.

📙 sonuc.html— Sonuç Paneli
LocalStorage'dan alınan tüm yanıtlar gösterilir. Gelişimin karşılaştırılabilirliği.

📂dashboard/
Sonuçların dağıtımı kullanılan tablo, grafik veya ek programlar buradadır.

📂js/
Tüm JavaScript modülleri burada bulunur:

app.js→ Olay dinleyicileri, genel akış
ui.js→ Arayüz işlemleri, DOM manipülasyonları
storage.js→ LocalStorage CRUD işlemleri
💾 Veri Saklama Yapısı
Uygulama verileri LocalStorage içinde şu şekilde tutulabilir:

{
  "anket_oncesi": [...],
  "anket_sonrasi": [...],
  "tarih": "2025-11-11"
}

![Ekran görüntüsü78 2025-11-11 193730](https://github.com/user-attachments/assets/752bd880-0fcc-46f9-b8ca-016878d4e44e)

