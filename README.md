# Survey-Application
Survey App


---

## ✨ Özellikler

- ✅ **Anket Öncesi (Pre-Test)** sayfası  
- ✅ **Anket Sonrası (Post-Test)** sayfası  
- ✅ **Dashboard (Sonuç Ekranı)** ile tüm yanıtların görüntülenmesi  
- ✅ Tamamen LocalStorage tabanlı veri saklama  
- ✅ Mobil uyumlu arayüz (Bootstrap 5)  
- ✅ Vanilla JavaScript ile dinamik soru yönetimi  
- ✅ Ekstra sunucu gerekmeden tamamen tarayıcıda çalışma  

---

## 🚀 Projeyi Çalıştırma

### ✅ Live Server ile (Önerilen)

1. Projeyi indir.
2. VS Code ile aç.
3. **Live Server** eklentisinin kurulu olduğundan emin ol.
4. `index.html` dosyasını aç ve **Go Live** butonuna tıkla.

> Eğer ES6 modülleri (import/export) kullanıyorsan, dosyayı çift tıklayarak açmak yerine Live Server ile çalıştırman gerekir.

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript (ES6+)**
- **LocalStorage API**

---

## 📊 Sayfaların Açıklaması

### 📘 `index.html` — Anket Öncesi
Öğrencilerin eğitime başlamadan önce bilgi seviyesini ölçer.

### 📗 `sonrasi.html` — Anket Sonrası
Eğitim tamamlandıktan sonra bilgi gelişimini ölçer.

### 📙 `sonuc.html` — Sonuç Paneli
LocalStorage’dan alınan tüm yanıtlar gösterilir. Öğrencilerin gelişimi karşılaştırılabilir.

### 📂 `dashboard/`
Sonuç ekranında kullanılan tablo, grafik veya ek bileşenler buradadır.

### 📂 `js/`
Tüm JavaScript modülleri burada bulunur:
- `app.js` → Olay dinleyicileri, genel akış  
- `ui.js` → Arayüz işlemleri, DOM manipülasyonları  
- `storage.js` → LocalStorage CRUD işlemleri  

---

## 💾 Veri Saklama Yapısı

Uygulama verileri **LocalStorage** içinde şu şekilde tutulabilir:

```json
{
  "anket_oncesi": [...],
  "anket_sonrasi": [...],
  "tarih": "2025-11-11"
}
````

![Ekran görüntüsü78 2025-11-11 193730](https://github.com/user-attachments/assets/752bd880-0fcc-46f9-b8ca-016878d4e44e)

