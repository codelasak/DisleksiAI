# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Kişiselleştirilmiş Okuma Yardımcısı: Disleksi Profili Tabanlı İnteraktif Öğrenme Sistemi

**Proje Adı:** DisleksiAI - Adaptif Okuma Yardımcısı  
**Versiyon:** 1.0 (MVP - Minimum Viable Product)  
**Tarih:** Kasım 2025  
**Hazırlayan:** TBTAK 2204-A Proje Takımı  
**Hedef Ürün:** Web Tabanlı Eğitim Platformu + Mobil Uygulaması (Faz 2)

---

## 1. YÖNETICI ÖZETİ (EXECUTIVE SUMMARY)

### 1.1 Sorun Tanımı
Türkiye'de yaklaşık 600,000+ lise ve ortaokul öğrencisi disleksi (okuma bozukluğu) ile karşı karşıyadır. Mevcut eğitim sisteminde:
- Kişiselleştirilmiş destek eksikliği
- Disleksi türüne göre farklı müdahale stratejilerinin uygulanmaması
- Motivasyon kaybı ve benlik saygısı düşüklüğü
- Erişilebilir eğitim araçlarının sınırlılığı

### 1.2 Çözüm Özeti
DisleksiAI, yapay zeka (LLM + Makine Öğrenmesi) kullanarak:
- Disleksi profilini otomatik tanılayan
- Profil türüne göre dinamik içerik üretilen
- Sesli destek ve gerçek zamanlı geri bildirim sağlayan
- Öğretmen-ebeveyn-öğrenci entegrasyonu yapan

...bir kişiselleştirilmiş eğitim platformudur.

### 1.3 Teknik Stack
| Bileşen | Teknoloji |
|---------|-----------|
| **LLM** | Google Gemini 2.5 Nano (Fine-tuned) |
| **Metin-Konuşma** | 11Labs TTS API (Türkçe) |
| **Backend** | Node.js + Express / Python Flask |
| **Frontend** | React.js / Vue.js |
| **Veritabanı** | PostgreSQL / MongoDB |
| **Hosting** | Google Cloud Platform / AWS |

---

## 2. HEDEFLER VE BAŞARI ÖLÇÜTLERI

### 2.1 İş Hedefleri
- **H1:** TBTAK 2204-A Yarışmasında Bölge ve Final aşamasına Ulaşma
- **H2:** Pilot çalışmada 50+ disleksili öğrenci ile çalışma
- **H3:** Özel eğitim okulları ve rehber öğretmenlerin onayı almak
- **H4:** İlk 6 ayda en az 1 bilimsel yayın yayınlamak

### 2.2 Kullanıcı Hedefleri
| Hedef | Metrik | Başarı Kriteri |
|------|--------|-----------------|
| **Tanı Doğruluğu** | Disleksi profili sınıflandırması | ≥ 90% |
| **İçerik Uyarlanabilirliği** | Zorluk seviyesi otomasyonu | ≥ 85% kullanıcı memnuniyeti |
| **Okuma Iyileşmesi** | Kelime tanıma hızı artışı | ≥ 15% ilerleme (8 hafta) |
| **Sesli Destek Kalitesi** | TTS doğallığı ve Türkçe aksan | ≥ 4.5/5 puan |
| **Motivasyon** | Saatlik aktif kullanım | ≥ 20 dakika/gün |

---

## 3. HEDEF KULLANICILAR (TARGET USERS)

### 3.1 Birincil Kullanıcılar
- **Yaş Aralığı:** 10-16 yaş
- **Özellikleri:** Tanılanmış veya şüpheli disleksi vakıları
- **Sayı (Pilot):** 50-100 öğrenci
- **Coğrafya:** Türkiye (Öncelkle: İstanbul, Ankara, İzmir)

### 3.2 İkincil Kullanıcılar
- **Özel Eğitim Öğretmenleri** (10-20 kişi)
- **Rehber Öğretmenler** (5-10 kişi)
- **Ebeveynler/Veliler** (50-100 kişi)
- **Nöro-Psikologlar** (danışman olarak)

### 3.3 Kullanıcı Personas

#### Persona 1: Berat (14 yaş, Disleksili Öğrenci)
- **Profili:** Ortaokul 8. sınıf, akademik başarısı düşük
- **Disleksi Türü:** Ses-harf ilişkisinde zorluk
- **Güçlükler:** Hızlı okuma, sözcük tanıma
- **Motivasyon:** Tatlı- seslendirilen hikayeler okuması, oyun öğeleri
- **Hedefi:** Sınava hazırlanmak, güveni artırmak

#### Persona 2: Ayşe Öğretmen (45 yaş, Özel Eğitim Öğretmeni)
- **Profili:** Özel eğitim okulunda 20 yıl tecrübe
- **İhtiyaç:** Öğrencilerin bireyselleştirilmiş müdahalesi
- **Gözlemi:** Zaman yetersizliği, kişi başına özel hazırlık ihtiyacı
- **Hedefi:** Sistemin önerdiği içeriği kullanarak hızlı müdahale

#### Persona 3: Meral Anne (48 yaş, Veli)
- **Profili:** İki çocuğu var, biri disleksili
- **İhtiyacı:** Evde yardım edebileceği araçlar
- **Endişe:** Çocuğun akademik geri kalması, benlik saygısı
- **Hedefi:** Çocuğun gelişimini takip etmek, motivasyon kişitirmek

---

## 4. TEMEL ÖZELLİKLER (CORE FEATURES)

### 4.1 Faz 1: Tanı Modülü (MVP - İlk 8 Hafta)

#### F1.1: Otomatik Disleksi Profili Tanılaması
**Açıklama:** 10-15 dakikalık etkileşimli test ile disleksi profilini sınıflandırma

**İşlevler:**
- **Harf Tanıma Testi:** Benzer harfleri (b-d, p-q) ayırt etme hızı ve doğruluğu
- **Kelime Tanıma Testi:** Yaygın kelimeleri tanıma, sıralı heceleri okuma
- **Metin Anlaması:** Kısa metin okuması sonrası sorulara cevap
- **Ses-Harf Eşleştirmesi:** Sesi yazıya, yazıyı sese dönüştürme

**Teknik Gerekçe:**
- Makine Öğrenmesi Modeli: Random Forest / SVM
- Eğitim Veri Seti: 200+ disleksili öğrencinin test cevapları (Türkçe)
- Doğruluk Hedefi: ≥ 90%
- API: Google Gemini Nano (LLM destekli soru üretimi)

**Çıktı:**
```
{
  "student_id": "STU_001",
  "dyslexia_profile": {
    "primary_type": "phonological",  // ses-harf ilişkisinde zorluk
    "difficulty_score": 0.78,         // 0-1 arası zorluk seviyesi
    "strengths": ["kelime_tanima", "metin_anlama"],
    "challenges": ["ses_harf_eslestirmesi", "okuma_hizi"],
    "recommended_strategies": [
      "multisensory_approach",
      "slow_paced_reading",
      "phonemic_awareness"
    ]
  },
  "test_duration": 12,  // dakika
  "timestamp": "2025-11-22T10:30:00Z"
}
```

---

### 4.2 Faz 1: Dinamik İçerik Üretimi (MVP - 8-14 Hafta)

#### F2.1: LLM Tabanlı Uyarlanabilir Egzersiz Üretimi
**Açıklama:** Her oturumda öğrencinin profil ve zorluk seviyesine göre yeni egzersizler üretme

**İşlevler:**

1. **Türü:** Kelime Tanıma Egzersizleri
   - **Giriş:** Öğrenci profili + zorluk seviyesi (1-10)
   - **LLM Instruction Seti:**
     ```
     Siz Türkçe öğrenme terapisti asistanısınız.
     Disleksili bu öğrenci için kelime tanıma egzersizi oluşturun:
     
     - Disleksia Tipi: {phonological}
     - Zorluk Seviyesi: {5/10}
     - Kelime Kategorisi: {günlük yaşam}
     - Format: Resim + Sesli Metin + Kelime Seçimi
     
     KOŞUL: Kelimeler basit, 1-2 heceliyim ağır/ağır olmadığında.
     Ses-harf farklılıklarını vurgula (b-d, p-q gibi).
     ```
   - **Çıktı:** 10 adet kelime + görsel + ses dosyası

2. **Türü:** Metin Anlaması Egzersizleri
   - **Giriş:** Ders konusu (biyoloji, matematik, sosyal bilgiler) + zorluk seviyesi
   - **LLM Output:**
     ```
     Metin (Basitleştirilmiş): 
     "Mitokondri hücrelerin enerjisini üreten organeldir."
     
     Sorular:
     1. Mitokondri neyi ürür? (A: Enerji, B: Protein, C: Yağ)
     2. Mitokondri hangi yapıda bulunur? (A: Çekirdek, B: Hücre, C: Doku)
     
     Ipuçları:
     - İpucu 1: "Enerji" kelimesine dikkat et
     - İpucu 2: "hücrenin enerjisini üreten" kısmını tekrar oku
     ```

3. **Türü:** Yazım Düzeltme Egzersizleri
   - **Giriş:** Disleksili bir öğrencinin tipik hataları
   - **LLM Output:**
     ```
     Cümle: "Kütüphanede kitap okudum çok hoş geçti."
     Hatalar: Eksik noktalama, uzun cümle
     
     Düzeltme Adımları:
     1. Cümleyi iki parçaya böl: 
        "Kütüphanede kitap okudum." / "Çok hoş geçti."
     2. Noktalama ekle: 
        "Kütüphanede kitap okudum. Çok hoş geçti."
     ```

**Teknik Implementasyon:**
- **LLM Model:** Google Gemini 2.5 Nano (LoRA fine-tuning)
- **Fine-tuning Veri Seti:** 500+ disleksili öğrenci egzersiz geçmişi
- **Response Time:** < 3 saniye
- **Maliyet:** Gemini Free Tier (sınırsız)

---

### 4.3 Faz 1: Sesli Destek Modülü (MVP - 14-20 Hafta)

#### F3.1: 11Labs TTS Entegrasyonu
**Açıklama:** Tüm metinler doğal Türkçe sese dönüştürülüp, disleksili öğrencinin takip etmesini sağlama

**İşlevler:**

1. **Ses Ayarları:**
   - **Model:** ElevenLabs Multilingual v2 (Türkçe)
   - **Hız:** 0.8x - 1.2x (kullanıcı tercihine göre)
   - **Ton:** Pozitif, teşvik edici, genç seslendirici (14-18 yaş sesleri)
   - **Vurgu:** Önemli kelimelerde vurgu artırma

2. **Metin Eşleştirmesi (Highlighting):**
   - Ses oynatılırken, okunmakta olan kelime/harf renkli vurgulanması
   - Disleksili öğrencilerin metin-ses senkronizasyonunu güçlendirme

3. **Ses Dosyaları Cacheing:**
   - Sık kullanılan metin + ses eşlemeleri veritabanında saklanması
   - Maliyet tasarrufu, hızlı yükleme

**Teknik Detaylar:**
```
API Endpoint:
POST /api/text-to-speech
{
  "text": "Mitokondri hücrelerin enerjisini üreten organeldir.",
  "language": "tr",
  "voice_id": "young_turkish_male",
  "speed": 0.9,
  "student_id": "STU_001"
}

Response:
{
  "audio_url": "https://cdn.disleksiAI.com/audio/abc123.mp3",
  "duration_seconds": 5.2,
  "cached": true
}
```

**Maliyet Analizi:**
- 11Labs Free Tier: 10,000 karakter/ay (yeterli pilot için)
- Ücretli Tier: $5-15/ay (sınırsız)

---

### 4.4 Faz 1: Geri Bildirim ve Adaptasyon Modülü (MVP - 20-24 Hafta)

#### F4.1: Öğrenci Performans İzlemesi
**Açıklama:** Her egzersiz sonrasında otomatik performans analizi ve zorluk seviyesi uyarlaması

**İşlevler:**

1. **Performans Metrikleri:**
   ```
   {
     "exercise_id": "EX_001",
     "student_id": "STU_001",
     "question": "Mitokondri neyi ürür?",
     "answer_given": "A",  // Enerji
     "correct_answer": "A",
     "response_time_ms": 8500,  // 8.5 saniye
     "attempt_number": 1,
     "confidence_score": 0.7,
     "result": "correct",
     "difficulty_level": 5
   }
   ```

2. **Adaptif Zorluk Ayarlaması:**
   - **Başarı Oranı > 80%:** Zorluk +1 (zorlayıcı egzersizler ekle)
   - **Başarı Oranı 60-80%:** Zorluk stabil, devam et
   - **Başarı Oranı < 60%:** Zorluk -1 (temel egzersizler tekrarla)

3. **LLM Tabanlı Kişiselleştirilmiş İpuçları:**
   ```
   Öğrenci yanlış cevap verirse:
   
   → LLM Sorgusu:
   "Bu disleksili öğrenci 'Mitokondri neyi ürür?' 
    sorusuna 'Protein' cevabı verdi (yanlış).
    Ses-harf ilişkisinde zorluk yaşıyor.
    Kademeli ipucu ver."
   
   → LLM Output:
   "Doğru cevap üç harfle başlayan bir sözcük... 
    E...'yi düşün. Hücreler bundan güç alır."
   ```

4. **Geri Bildirim Türleri:**
   - **Olumlu:** "Süper! Doğru bulmuşsun! ⭐"
   - **Yapıcı:** "Neredeyse! Biraz daha dikkat et..."
   - **Teşvik Edici:** "Takıl kalma, bir daha dene!"

---

### 4.5 Faz 1: Öğretmen-Ebeveyn Paneli (MVP - 24 Hafta)

#### F5.1: Haftalık İlerleme Raporu
**Açıklama:** Öğretmen ve ebeveynler için otomatik rapor üretimi

**Rapor İçeriği:**
```
DisleksiAI Haftalık Rapor
Öğrenci: Berat (14 yaş)
Rapor Tarihi: 15-21 Kasım 2025

📊 Genel İstatistikler:
- Toplam Oturumlar: 7
- Toplam Zaman: 142 dakika
- Ortalama Başarı Oranı: 73% (+5% geçen haftaya kıyasla)

📈 Gelişim Alanları:
✓ Kelime Tanıma: 68% → 75% (↑7%)
✓ Ses-Harf Eşleştirmesi: 55% → 62% (↑7%)
⚠ Metin Anlaması: 82% → 79% (↓3%) - Dikkat gerekli

🎯 Bu Hafta Tamamlanan Egzersizler:
- Kelime Tanıma: 40 soru (80% başarı)
- Metin Anlaması: 25 soru (74% başarı)
- Yazım Düzeltme: 15 cümle (62% başarı)

💡 Öğretmene Öneriler:
1. Metin anlaması becerilerine yoğunlaşın
2. Yazım düzeltme egzersizlerinde daha yavaş ilerleme
3. Başarılı olan kelime tanımada zorluk seviyesini artırın

📞 Sonraki Adımlar:
- Yazım Düzeltme egzersizlerinde 1-on-1 destek öneririz
- Ses-harf eşleştirmesi başarılı - devam edin!
```

---

## 5. TEKNIK MİMARİ

### 5.1 System Architecture Diagram
```
┌─────────────────────────────────────────────────┐
│          Frontend Layer (React.js)              │
│  ┌──────────────┐  ┌──────────────────────┐   │
│  │ Tanı Modülü  │  │ Egzersiz Arayüzü     │   │
│  │ (Test UI)    │  │ (Exercise UI)        │   │
│  └──────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────┘
                       ↓ (REST API)
┌─────────────────────────────────────────────────┐
│        Backend Layer (Node.js + Express)        │
│  ┌────────────────────────────────────────┐    │
│  │ API Routes                             │    │
│  │ - /api/diagnosis (Tanı)                │    │
│  │ - /api/exercise (Egzersiz)             │    │
│  │ - /api/feedback (Geri Bildirim)        │    │
│  │ - /api/progress (İlerleme)             │    │
│  └────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
      ↓                    ↓                  ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Google AI    │  │ 11Labs TTS   │  │ PostgreSQL   │
│ (Gemini)     │  │ (Voice)      │  │ (Database)   │
└──────────────┘  └──────────────┘  └──────────────┘
```

### 5.2 Data Flow

**Öğrenci Giriş → Tanı → İçerik → Geri Bildirim → Uyarlama → Rapor**

```
1. Öğrenci Kaydı ve Başlama
   Student Creates Account → Backend stores in PostgreSQL

2. Tanı Testi
   Student Takes Test → Responses → ML Model → Dyslexia Profile
   (LLM validates questions, ML predicts profile)

3. Dinamik İçerik Üretimi
   Profile Data → Gemini Nano LLM → Exercise Generation
   Generated Exercise → 11Labs TTS → Voice File + Text

4. Egzersiz İzlemesi
   Student Answers → Backend logs response → 
   ML predicts next difficulty → Adapts exercises

5. Haftalık Rapor
   Weekly aggregation → LLM summarizes insights → 
   Teacher/Parent notification
```

---

## 6. GEREKLI KAYNAKLAR VE BÜTÇE

### 6.1 Yazılım Kaynakları

| Kaynak | Birim | Miktar | Fiyat | Toplam |
|--------|-------|--------|-------|--------|
| Google Gemini API (Free Tier) | ay | 6 | $0 | $0 |
| 11Labs TTS (Free Tier) | ay | 6 | $0 | $0 |
| Google Cloud Storage | GB | 50 | $0.020/GB | $60 |
| PostgreSQL Hosting | ay | 6 | $15 | $90 |
| **Yazılım Toplamı** | | | | **$150** |

### 6.2 İnsan Kaynakları (Pilot Faz)

| Rol | Kişi Sayısı | Saatler | Saat Ücreti | Toplam |
|-----|-------------|--------|------------|--------|
| Yazılım Geliştirici (Full-stack) | 1 | 400 | $20 | $8,000 |
| LLM Mühendisi (Fine-tuning) | 1 | 200 | $25 | $5,000 |
| Veri Seti Kuratorü | 1 | 150 | $15 | $2,250 |
| Özel Eğitim Danışmanı | 1 | 100 | $30 | $3,000 |
| QA ve Test | 1 | 150 | $18 | $2,700 |
| **İnsan Kaynakları Toplamı** | | | | **$21,000** |

### 6.3 Pilot Çalışma Maliyetleri

| Madde | Birim | Miktar | Birim Fiyat | Toplam |
|------|-------|--------|------------|--------|
| Özel Eğitim Okulu İşbirliği | Ay | 6 | $500 | $3,000 |
| Etik Onay Dosyası | Kez | 1 | $2,000 | $2,000 |
| Veri Toplama ve Öğrenci Tazminatı | Kişi | 100 | $50 | $5,000 |
| **Pilot Toplamı** | | | | **$10,000** |

### 6.4 Bütçe Özeti

| Kategori | Tutar |
|----------|-------|
| Yazılım Hizmetleri | $150 |
| İnsan Kaynakları | $21,000 |
| Pilot Çalışma | $10,000 |
| **TOPLAM (6 ay)** | **$31,150** |

**Açıklama:** Proje, Google AI Studio ve 11Labs'ın free tierlarını kullanarak geliştirme yapılacağından, API maliyetleri minimum tutulmuştur.

---

## 7. ZAMAN TABLOSU (TIMELINE)

### 7.1 MVP Geliştirme (Faz 1: 24 Hafta)

| Faz | Görev | Başlama | Bitişi | Süre | Status |
|-----|-------|---------|--------|------|--------|
| **Sprint 1** | Proje Setup + Veri Seti | Kasım 1 | Kasım 30 | 4 hafta | 🔵 Hazırlık |
| | Architecture Design | | | | |
| | ML Model Setup | | | | |
| **Sprint 2-3** | Tanı Modülü Geliştirme | Aralık 1 | Aralık 31 | 4 hafta | 🔵 Sonraki |
| | LLM Fine-tuning | | | | |
| | 11Labs Entegrasyon | | | | |
| **Sprint 4-5** | Dinamik İçerik Üretimi | Ocak 1 | Ocak 31 | 4 hafta | 🔵 Sonraki |
| | İpuçları ve Geri Bildirim | | | | |
| | Uyarlama Algoritması | | | | |
| **Sprint 6** | Öğretmen-Ebeveyn Paneli | Şubat 1 | Şubat 28 | 4 hafta | 🔵 Sonraki |
| | Rapor Üretimi | | | | |
| **Sprint 7-8** | QA, Hata Düzeltme | Mart 1 | Mart 31 | 4 hafta | 🔵 Sonraki |
| | Pilot Test Hazırlığı | | | | |

### 7.2 Önemli Kilometre Taşları (Milestones)

- **M1:** Veri Seti Oluşumu (50+ disleksili öğrenci) - Kasım 30
- **M2:** ML Model Eğitimi (≥90% doğruluk) - Aralık 31
- **M3:** Pilot Test Başlangıcı (20 öğrenci) - Mart 1
- **M4:** TBTAK Bölge Başvurusu - Nisan 1

---

## 8. GELİŞTİRME ÖNCELİKLERİ (PRIORITIZATION)

### 8.1 MoSCoW Yöntemi

**MUST HAVE (Şart):**
- ✓ Disleksi profili tanılama (ML)
- ✓ Dinamik egzersiz üretimi (LLM)
- ✓ Sesli destek (TTS)
- ✓ Geri bildirim mekanizması

**SHOULD HAVE (Olması İyi Olan):**
- Öğretmen paneli
- Haftalık raporlar
- Motivasyon sistemi (badges, points)

**COULD HAVE (Yapılabilir):**
- Mobil uygulaması (Faz 2)
- Multiplayer egzersizler
- Ebeveyn portalı (Faz 2)

**WON'T HAVE (Bu Versiyonda Yok):**
- Göz izleme sensorü entegrasyonu
- Sanal Gerçeklik öğrenme
- Destekleme dilleri

---

## 9. KALİTE GÜVENCE (QA) VE TEST STRATEJİSİ

### 9.1 Test Türleri

| Test Türü | Sorumluluk | Kriterler |
|-----------|-----------|-----------|
| **Unit Test** | Dev | ML model %doğruluğu ≥90%, API response < 3s |
| **Integration Test** | QA | LLM + TTS entegrasyon sorunsuz |
| **UAT** | Özel Eğitim Öğretmeni | 15 öğrenciyle 4 haftalık pilot |
| **Performance Test** | DevOps | 100 concurrent user kapasitesi |
| **Security Test** | DevOps | HIPAA uyumluluk (öğrenci verileri) |

### 9.2 Başarı Kriterleri (Exit Criteria)

- ✓ Tanı doğruluğu ≥ 90%
- ✓ API response time < 3 saniye
- ✓ 97% uptime
- ✓ Pilot kullanıcıların %85 memnuniyeti
- ✓ 0 ağır hata (critical bugs)

---

## 10. RİSK YÖNETİMİ

### 10.1 Tanımlanan Riskler

| Risk | Olasılık | Etki | Mitigation |
|------|----------|------|-----------|
| Yetersiz Türkçe egzersiz veri seti | Orta | Yüksek | Pilot okullara başvur, veri toplama |
| LLM fine-tuning başarısızlığı | Düşük | Yüksek | OpenAI GPT API backup'ı planla |
| 11Labs TTS kalite sorunları | Düşük | Orta | Google TTS alternatif olarak kütüphanede tut |
| Pilot okul işbirliği sorunu | Orta | Yüksek | Erken koordinasyon, etik onay |
| Öğrenci katılım düşüklüğü | Düşük | Orta | Gamifikasyon + teşvik sistemleri |

### 10.2 Kontinjensi Planları

1. **LLM Başarısızlığı:** OpenAI GPT-4o'ya geçiş
2. **Veri Eksikliği:** Sentetik veri üretimi (Türkçe LLM ile)
3. **TTS Sorunu:** Google Cloud TTS alternatifi

---

## 11. İLETİŞİM VE STAKEHOLDER YÖNETİMİ

### 11.1 Stakeholder Haritası

| Stakeholder | Rol | İlgi | Etki | Stratejisi |
|-----------|-----|------|------|-----------|
| TBTAK | Jüri | Yüksek | Yüksek | Aylık raporlar, Final sunumu |
| Özel Eğitim Okulları | Pilot Partner | Yüksek | Yüksek | Haftalık istişareler |
| Nöro-Psikolog Danışman | Danışman | Yüksek | Orta | Fortnightly review |
| Veliler | Kullanıcı | Orta | Orta | Aylık bildirim |

### 11.2 Raporlama Sıklığı

- **Haftanın Pazartesi:** Teknik ilerleme (Dev team)
- **Her 2 Hafta:** Proje yöneticisi özet raporu
- **Ayda Bir:** Stakeholder toplantısı + ilerleme sunumu

---

## 12. BİLİMSEL YAYIN ve SEKTÖR KATKILARI

### 12.1 Planlanan Yayınlar

1. **"Gemini Nano Fine-tuning ile Türkçe Disleksi Tanılaması"** (ACL 2026)
2. **"Adaptif LLM Uygulamaları: Özel Eğitimde Çalışma Çıktıları"** (Journal of Educational Technology)
3. **"ChatCare vs DisleksiAI: Karşılaştırmalı Etkililik Çalışması"** (Applied Sciences)

### 12.2 Konferans Sunumları

- TBTAK Proje Finali (Mayıs 2026) - **Zorunlu**
- International Educational AI Conference (Haziran 2026)
- Turkish Psychological Counseling Association (Kasım 2026)

---

## 13. BAŞARININ ÖLÇÜLMESI (SUCCESS METRICS)

### 13.1 Yardımcı Metrikler

| Metrik | Başlangıç | 4 Hafta | 8 Hafta | Hedef |
|--------|-----------|---------|---------|--------|
| Günlük Aktif Kullanıcı | 0 | 15 | 50 | 50+ |
| Ortalama Oturum Süresi | 0 | 12 dk | 22 dk | 20+ dk |
| Egzersiz Başarı Oranı | - | 65% | 75% | 75%+ |
| Tanı Doğruluğu | - | 88% | 92% | 90%+ |
| Kullanıcı Memnuniyeti | - | 4.0/5 | 4.4/5 | 4.3/5+ |

### 13.2 Nitel Başarı Kriterleri

- ✓ Öğretmenlerin proje için "son derece faydalı" demeye başlaması
- ✓ Velilerin evde desteklemede kendini güvenli hissetmesi
- ✓ Öğrencilerin motivasyonunun görülür şekilde artması
- ✓ TBTAK jürisinin proje fikrini "yenilikçi ve uygulanabilir" bulması

---

## 14. SONUÇLAR VE TAVSIYELER

### 14.1 Proje Değeri

Bu proje:

1. **Bilimsel Yenilik:** LLM + ML kombinasyonun disleksi tanılamasında ilk Türkçe uygulaması
2. **Toplumsal Etki:** 600,000+ disleksili öğrencinin yaşam kalitesi artışı
3. **TBTAK Kriterleri:** Eğitim teknolojileri, E-Öğrenme, Erişilebilir Yaşam Teknolojileri kategorilerine uyum
4. **Ticarileştirme Potansiyeli:** Milli Eğitim Bakanlığı ve özel eğitim kurumlarına satış

### 14.2 Sonraki Fazlar (Faz 2-3)

- **Faz 2:** Mobil uygulama (iOS + Android)
- **Faz 3:** Multiplayer egzersizler ve sosyal öğrenme
- **Faz 4:** Entegre göz izleme ve biyometrik geri bildirim

---

## EKLER

### Ek A: Teknoloji Stack Detayları

```
Frontend:
- React.js 18+
- TailwindCSS (UI)
- Zustand (State Management)
- Axios (HTTP Client)

Backend:
- Node.js 18 + Express.js
- Python Flask (LLM integration)
- Bull (Job Queue - rapor üretimi için)

Database:
- PostgreSQL 15 (relational data)
- Redis (caching)

LLM & AI:
- Google Gemini 2.5 Nano (fine-tuning yapılacak)
- Scikit-learn / XGBoost (ML Models)
- 11Labs TTS API v1

DevOps:
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Google Cloud Run (serverless backend)
```

### Ek B: Örnek Veri Şeması

```sql
-- Öğrenci Tablosu
CREATE TABLE students (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  grade INT,
  school_id UUID,
  dyslexia_profile JSONB,  -- {type, difficulty_score, strategies}
  created_at TIMESTAMP
);

-- Egzersiz Sonuçları
CREATE TABLE exercise_responses (
  id UUID PRIMARY KEY,
  student_id UUID REFERENCES students(id),
  exercise_id UUID,
  question_text TEXT,
  user_answer TEXT,
  correct_answer TEXT,
  is_correct BOOLEAN,
  response_time_ms INT,
  difficulty_level INT,
  timestamp TIMESTAMP
);

-- LLM Prompt Cache
CREATE TABLE llm_prompts_cache (
  id UUID PRIMARY KEY,
  prompt_hash VARCHAR(64),
  response JSONB,
  model VARCHAR(50),
  created_at TIMESTAMP,
  expires_at TIMESTAMP
);
```

### Ek C: API Spesifikasyonları

```yaml
POST /api/auth/register
  Description: Öğrenci kaydı
  Body: { name, age, grade, school_id }
  Response: { student_id, access_token }

POST /api/diagnosis/start-test
  Description: Tanı testini başlat
  Body: { student_id }
  Response: { test_id, first_question }

POST /api/diagnosis/submit-answer
  Description: Test cevabı gönder
  Body: { test_id, question_id, answer }
  Response: { next_question or diagnosis_result }

POST /api/exercise/get-next
  Description: Sonraki egzersizi al
  Body: { student_id }
  Response: { exercise_id, question, options, audio_url }

POST /api/tts/generate
  Description: Metin-konuşma oluştur
  Body: { text, language: "tr", voice_id }
  Response: { audio_url, duration }

GET /api/progress/weekly-report
  Description: Haftalık rapor
  Query: { student_id, week }
  Response: { report_html, metrics }
```

---

**Dokuman Tarihi:** 22 Kasım 2025  
**Versiyon:** 1.0 (MVP)  
**Güncelleme:** Haftalık (Her Pazaresi)  
**İzinler:** TBTAK 2204-A Takımı (Gizli)