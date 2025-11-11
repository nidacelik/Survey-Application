const sorular = [
            "Daha önce bilgisayar veya tablet ile kodlama yaptınız mı?",
            "Programlama veya Kodlama kelimeleri hakkında bir bilginiz var mı?",
            "Daha önce yeni bir şey (oyun, resim, icat vb.) tasarlamayı düşündünüz mü?",
            "Programlama etkinliklerini nasıl yapmayı istersiniz?",
            "Hangi tür etkinliklerden daha çok hoşlanırsınız?",
            "Okuldaki derslerde programlamayı öğrenebileceğinizi düşünüyor musunuz?",
            "Bu eğitimde kendi programınızı veya basit oyununuzu yapabileceğinizi düşünüyor musunuz?",
            "Programlama yapmanın (kod yazmanın) nasıl bir şey olduğunu düşünüyorsunuz?",
            "Günlük hayatınızda bilgisayar veya tablet başında (ders dışında) yaklaşık kaç saat zaman geçiriyorsunuz?",
        ];

        const container = document.getElementById("questions");
        container.innerHTML = ''; // Önceki içeriği temizle

        sorular.forEach((soru, i) => {
            // Soru ve Cevapları yan yana hizalamak için Flexbox (d-flex) kullanıldı
            container.innerHTML += `
                <fieldset class="mb-4 text-start border p-3 rounded">
                    <div class="d-flex justify-content-between align-items-center">
                        <legend class="fs-6 fw-bold mb-0 me-3">${i + 1}. ${soru}</legend>
                        
                        <div class="d-flex flex-shrink-0"> 
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="q${i}" id="q${i}-evet" value="Evet" required>
                                <label class="form-check-label fw-bold text-success" for="q${i}-evet">Evet</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="q${i}" id="q${i}-hayir" value="Hayır">
                                <label class="form-check-label fw-bold text-danger" for="q${i}-hayir">Hayır</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="q${i}" id="q${i}-kısmen" value="Kısmen">
                                <label class="form-check-label fw-bold text-primary" for="q${i}-kısmen">Kısmen</label>
                            </div>
                            
                        </div>
                    </div>
                </fieldset>`;
        });

        document.getElementById("onSurvey").addEventListener("submit", e => {
            e.preventDefault();
            
            // Tüm soruların cevaplandığını kontrol et
            const tumCevaplar = sorular.map((_, i) =>
                document.querySelector(`input[name='q${i}']:checked`)
            );
            
            if (tumCevaplar.some(cevap => !cevap)) {
                alert("Lütfen tüm soruları cevaplayınız.");
                return;
            }

            const cevaplar = tumCevaplar.map(cevap => cevap.value);
            
            // Veriyi localStorage'a kaydet
            localStorage.setItem("anket_oncesi", JSON.stringify(cevaplar));
            
            alert("Eğitim öncesi anketiniz kaydedildi!");
            
            // Kullanıcıyı bir sonraki sayfaya yönlendir
            window.location.href = "sonrasi.html";
        });