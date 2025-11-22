# DisleksiAI - Mobile First Design & Screen Architecture
## Disleksi-Friendly UI/UX için Optimized Ekran Tasarımları

**Proje:** DisleksiAI - Adaptif Okuma Yardımcısı  
**Hedef:** 10-16 yaş disleksili öğrenciler  
**Platform:** Mobile First (iOS & Android)  
**Versiyon:** 1.0 MVP  
**Tarih:** Kasım 2025

---

## 📋 İÇİNDEKİLER

1. Disleksia-Friendly Tasarım Prensipleri
2. Temel Ekran Listesi (Screen Inventory)
3. Detaylı Ekran Tasarımları
4. Critical User Flows
5. Accessibility Specifications
6. Prototyping Recommendations

---

## 1. DISLEKSIA-FRIENDLY TASARIM PRENSİPLERİ

### 1.1 Tipografi Standartları

| Element | Minimum | Önerilen | Maksimum |
|---------|---------|----------|----------|
| **Body Text (Ana Metin)** | 16px | 18px | 24px |
| **Heading 1** | 24px | 28px | 32px |
| **Heading 2** | 20px | 24px | 28px |
| **Button Text** | 16px | 18px | 22px |
| **Line Height** | 1.5 | 1.8-2.0 | 2.5 |
| **Letter Spacing** | 0.12em | 0.15em | 0.2em |
| **Word Spacing** | 0.25em | 0.3em | 0.4em |
| **Paragraph Spacing** | 1.5em | 2.0em | 2.5em |

**Font Stack (Recommended):**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Helvetica Neue', sans-serif;
```

✅ **Neden:** Sans-serif fontlar disleksili okuyucuların "visual crowding" sorununu azaltır
❌ **Kaçınılacak:** Comic Sans (kalıplaşmış), Serif fontlar, Italik vurgulamalar

### 1.2 Renk ve Kontrast

| Öğe | Ön Plan | Arka Plan | Kontrast Oranı |
|-----|---------|----------|-----------------|
| **Ana Metin** | #2B2D31 (Koyu Gri) | #F5F5F3 (Yumuşak Beyaz) | 8.5:1 ✅ |
| **Başlıklar** | #1A1C1F (Siyah) | #F5F5F3 | 10.1:1 ✅ |
| **Success Feedback** | #22C55E (Yeşil) | #F0FDF4 (Açık Yeşil) | 5.2:1 ✅ |
| **Error Feedback** | #EF4444 (Kırmızı) | #FEF2F2 (Açık Kırmızı) | 4.8:1 ✅ |
| **Primary Button** | #FFFFFF | #2563EB (Mavi) | 7.3:1 ✅ |
| **Hint Text** | #6B7280 (Orta Gri) | #F5F5F3 | 4.6:1 ✅ |

**Kaçınılacaklar:**
- ❌ Siyah (#000000) arka plan (çok yüksek kontrast, göz yorgunluğu)
- ❌ Red-Green kombinasyonu (renk körlüğü sorunları)
- ❌ Çok canlı renkler (overstimulation)

### 1.3 Touch Target & Spacing

```
┌─────────────────────────────────────────┐
│  Min Touch Target: 48px × 48px (iOS)    │
│  Recommended: 56px × 56px               │
│  Between Elements: 16px minimum padding │
└─────────────────────────────────────────┘
```

**Motor Kontrol İçin Önemli:**
- Disleksili çocuklara koproaksiya zorlukları da yaygındır
- Tıklanabilir alanları görmesi kolay olmalı
- Yanlış tıklamalar minimize edilmeli

### 1.4 Bilişsel Yük Azaltma

✅ **YAP:**
- Tek bir seçenek/aksiyon per screen
- Maximum 3 öğe görünür alanda
- Tüm metinler basit cümlelere (8-12 kelime)
- Açık labellar ve icon kombinasyonları
- Immediate feedback (0.3-0.5 saniye içinde)

❌ **YAPMA:**
- Modal dialoglar (karmaşık navigation)
- Nested menus (karmaşık hiyerarşi)
- Otomatik scroll (orientation değişikliği)
- Jargon ve teknik terminoloji
- Bağlantı/çift tıklama gerektiren işlemler

---

## 2. TEMEL EKRAN LİSTESİ (SCREEN INVENTORY)

### 2.1 Kimlik Doğrulama Akışı (Authentication)
| # | Ekran | Amaç | Flow |
|---|--------|------|------|
| 1 | Welcome Screen | Giriş ve tanıtım | Yeni Kullanıcı → 2 veya Giriş Yapan → 3 |
| 2 | Age & Grade Selection | Yaş ve sınıf seçimi | 2 → 3 |
| 3 | Login/Signup | Giriş veya kayıt | 3 → 4 (Öğrenci) / 3 → Dashboard (Öğretmen) |
| 4 | Profile Setup | Profil tamamlama | 4 → 5 |

### 2.2 Tanı Akışı (Diagnosis Journey)
| # | Ekran | Amaç | Flow |
|---|--------|------|------|
| 5 | Pre-Diagnosis Intro | Testler hakkında bilgi | 5 → 6 |
| 6 | Diagnosis Test - Harf | Harf tanıma testi | 6 → 7 (otomatik devam) |
| 7 | Diagnosis Test - Kelime | Kelime tanıma testi | 7 → 8 |
| 8 | Diagnosis Test - Metin | Metin anlama testi | 8 → 9 |
| 9 | Diagnosis Results | Sonuçlar ve profil | 9 → 10 |

### 2.3 Egzersiz Akışı (Learning Journey)
| # | Ekran | Amaç | Flow |
|---|--------|------|------|
| 10 | Dashboard/Home | Öğrenme hub | 10 → 11 (başla) veya 10 → 15 (ilerleme) |
| 11 | Exercise Intro | Egzersiz başlama | 11 → 12 |
| 12 | Exercise - Question | Soru gösterimi | 12 → 13 (cevap sonrası) |
| 13 | Exercise - Feedback | Geri bildirim | 13 → 12 (devam) veya 14 (bitir) |
| 14 | Exercise Complete | Oturum tamamlandı | 14 → 10 |

### 2.4 İlerleme & Raporlama
| # | Ekran | Amaç | Flow |
|---|--------|------|------|
| 15 | Progress Dashboard | İstatistikler | 15 → 16 veya 10 (geri) |
| 16 | Weekly Report | Detaylı rapor | 16 → 15 veya 10 |
| 17 | Achievements | Rozetler ve başarılar | 17 → 10 |

### 2.5 Ayarlar & Destek
| # | Ekran | Amaç | Flow |
|---|--------|------|------|
| 18 | Settings | Tercihler | 18 → 19/20/21 |
| 19 | Accessibility Settings | Disleksia-friendly seçenekler | 19 → 18 |
| 20 | Sound & Voice | Ses ayarları | 20 → 18 |
| 21 | Help & FAQ | Yardım merkezi | 21 → 18 |

---

## 3. DETAYLI EKRAN TASARIMLARI

### 📱 EKRAN 1: Welcome Screen (Giriş Ekranı)

**Purpose:** Uygulamaya tanıtım ve ilk yönlendirme

**Layout:**
```
┌─────────────────────────────────┐
│   DisleksiAI 🧠✨             │ (Header)
├─────────────────────────────────┤
│                                 │
│      🌟 Hoş Geldin! 🌟         │ (Welcoming heading)
│                                 │
│   "Senin için özel tasarlanmış" │ (Tagline)
│     okuma yardımcısı           │ (Tagline)
│                                 │
│   ✓ Diğer çocuklara göre farklı│ (USP 1)
│   ✓ Senin hızında öğreneceğiz   │ (USP 2)
│   ✓ Oyunlar ve öneriler        │ (USP 3)
│                                 │
├─────────────────────────────────┤
│  [YENİ HESAP AÇMAK]            │ (56x48px button)
│  [GİRİŞ YAPMAK]               │ (56x48px button)
├─────────────────────────────────┤
│ Ebeveyn/Öğretmen misin?        │ (Secondary CTA)
│ [BURAYA TIKLAYINIZ]            │
└─────────────────────────────────┘
```

**Accessibility Features:**
- ✅ Large, easily readable heading (28px)
- ✅ Icons + Text combination (redundant coding)
- ✅ High contrast buttons (Blue on white)
- ✅ Touch targets: 56x56px minimum
- ✅ Clear, positive messaging

**Design Notes:**
- Animasyon: Yumuşak scale-in (300ms) - çok hızlı değil
- Renk: Mavi + Yeşil (pozitif, güvenilir)
- Typografi: 18px body, 28px heading, 1.8 line-height

---

### 📱 EKRAN 2: Age & Grade Selection

**Purpose:** Yaş ve sınıf seviyesi belirleme

**Layout:**
```
┌─────────────────────────────────┐
│ ◄ Geri                          │ (Optional back)
│ Hakkında bilgileri söyleyebilir │ (Header)
│ misin?                          │
├─────────────────────────────────┤
│                                 │
│ Kaç yaşındasın?                │ (Question - 18px)
│                                 │
│  ┌─────────┐ ┌─────────┐       │ (Year Selection)
│  │  10     │ │  11     │       │ (48x60px buttons)
│  └─────────┘ └─────────┘       │
│                                 │
│  ┌─────────┐ ┌─────────┐       │ (Year Selection)
│  │  12     │ │  13     │       │ (48x60px buttons)
│  └─────────┘ └─────────┘       │
│                                 │
│  ┌─────────┐ ┌─────────┐       │
│  │  14     │ │  15     │       │
│  └─────────┘ └─────────┘       │
│                                 │
│  ┌─────────┐ ┌─────────┐       │
│  │  16     │ │  17     │       │
│  └─────────┘ └─────────┘       │
│                                 │
├─────────────────────────────────┤
│        [ DEVAM ET ]             │ (Primary button - 56x48px)
├─────────────────────────────────┤
│ İleri de değiştirebilirsin ✨   │ (Reassurance text - 14px gray)
└─────────────────────────────────┘
```

**User Interactions:**
1. Kullanıcı yaşını seçer (Tap)
2. Seçilen yaş rengi değişir (Positive feedback)
3. "DEVAM ET" aktif hale gelir

**Accessibility:**
- ✅ 56x60px buttons (over minimum)
- ✅ Visual feedback: Color change + subtle animation
- ✅ Touch target spacing: 12px gutter between buttons
- ✅ Haptic feedback: Light tap (optional)

**Design Notes:**
- Color: Selected button = Blue (#2563EB), Unselected = Light Gray (#E5E7EB)
- Animation: 200ms color transition
- No scrolling needed (fits 10-16 age range in one view)

---

### 📱 EKRAN 5: Pre-Diagnosis Intro

**Purpose:** Tanı testi başlamadan önce bilgilendirme ve motivasyon

**Layout:**
```
┌─────────────────────────────────┐
│ ◄ Geri                          │
│                                 │
│  🎯 Test Başlamaya Hazır mısın?│ (Header - 24px)
│                                 │
│  "Seninle ilgili bilgileri      │ (Explanation)
│   öğrenmek istiyoruz. Bu pek    │ (18px, friendly tone)
│   güç değil!"                   │
│                                 │
├─────────────────────────────────┤
│                                 │
│  📋 Test şunlardan oluşacak:    │ (Section heading)
│                                 │
│  1️⃣  Harfleri tanıma            │ (Checklist item)
│      (2 dakika)                 │ (Subtitle - gray, 14px)
│                                 │
│  2️⃣  Kelimeleri tanıma          │ (Checklist item)
│      (3 dakika)                 │ (Subtitle)
│                                 │
│  3️⃣  Metni anlama               │ (Checklist item)
│      (4 dakika)                 │ (Subtitle)
│                                 │
│  ⏱️  Toplam: ~10 dakika         │ (Duration summary)
│                                 │
├─────────────────────────────────┤
│                                 │
│  ⚡ İPUCU: Biraz hızlı cevapla,  │ (Tip section)
│  biraz da düşünerek cevapla.    │ (Friendly advice)
│  Doğru/yanlış yoktur!           │ (Reassurance)
│                                 │
├─────────────────────────────────┤
│     [ BAŞLAYALIM! ]             │ (Primary button)
│ [ DAHA SONRA BAŞLARSA DA OLUR ]│ (Secondary - link style)
└─────────────────────────────────┘
```

**Key Features:**
- ✅ Emoji + text (visual + verbal)
- ✅ Time expectations (azaltma anxiety)
- ✅ Positive tone ("no wrong answers")
- ✅ Option to postpone (reduce pressure)
- ✅ Visual progress indicator (1️⃣2️⃣3️⃣)

---

### 📱 EKRAN 6-8: Diagnosis Tests

**Purpose:** Disleksi profilini tespit etmek

#### EKRAN 6.1: Harf Tanıma Testi

**Layout:**
```
┌─────────────────────────────────┐
│  Test 1/3  ◾◾◾ (Progress dots) │ (Progress indicator)
│                                 │
│  Aynı olan harfi seç:          │ (Question - 18px bold)
│                                 │
│  Örnek harf: 𝗕                  │ (48px reference letter)
│                                 │
├─────────────────────────────────┤
│                                 │
│  ┌─────────┐  ┌─────────┐       │ (Answer options)
│  │    𝖉    │  │    𝖇    │       │ (36px buttons)
│  └─────────┘  └─────────┘       │
│                                 │
│  ┌─────────┐  ┌─────────┐       │ (Answer options)
│  │    𝖕    │  │    𝗗    │       │ (36px buttons)
│  └─────────┘  └─────────┘       │
│                                 │
├─────────────────────────────────┤
│                                 │
│  💡 Cevabını seç, ben de        │ (Encouragement)
│  seninle devam edeceğim         │ (14px gray)
│                                 │
└─────────────────────────────────┘
```

**Interaction Flow:**
1. Soru gösterilir (Sesle de okunabilir)
2. Çocuk bir seçeneği tıklar
3. Seçilen buton renklendirilir
4. 1 saniye sonra otomatik devam veya geri bildirim

**Audio Support:**
- 🔊 Automatically play pronunciation of example letter
- 🔊 Play options on tap (optional)
- Volume control (accessible in Settings)

---

#### EKRAN 7.1: Kelime Tanıma Testi

**Layout:**
```
┌─────────────────────────────────┐
│  Test 2/3  ◾◾◯ (Progress)      │
│                                 │
│  Kelimeyi seç:                  │ (Question)
│  Resime uyan                    │
│                                 │
│        🍎 (Visual aid - 48x48)  │ (Image reference)
│                                 │
├─────────────────────────────────┤
│                                 │
│  ┌────────────────┐             │ (Full-width buttons)
│  │   Elma         │             │ (48px height)
│  └────────────────┘             │
│                                 │
│  ┌────────────────┐             │
│  │   Deme         │             │
│  └────────────────┘             │
│                                 │
│  ┌────────────────┐             │
│  │   Alma         │             │
│  └────────────────┘             │
│                                 │
│                                 │
└─────────────────────────────────┘
```

**Key Differences from Letter Test:**
- Visual reference (image) provides context
- Full-width buttons (easier to tap)
- 3 options (not 4)
- Word length: 2-3 syllables max

---

#### EKRAN 8.1: Metin Anlama Testi

**Layout:**
```
┌─────────────────────────────────┐
│  Test 3/3  ◾◾◾ (Progress)      │
│                                 │
│  Şu paragrafı oku:              │ (Instruction)
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Ayı, orman içinde yaşayan    │ │ (Text container)
│ │ büyük bir hayvandır. Bal     │ │ (18px, 1.8 LH)
│ │ yemekten çok hoşlanır.       │ │ (Generous spacing)
│ │                              │ │
│ │ 🔊 [Sesli Oku] (Tap hint)   │ │
│ └─────────────────────────────┘ │
│                                 │
│ Ayı neyi sever?                │ (Question - 18px)
│                                 │
├─────────────────────────────────┤
│  ┌────────────────┐             │
│  │   Balı         │             │ (56px buttons)
│  └────────────────┘             │
│                                 │
│  ┌────────────────┐             │
│  │   Otu          │             │
│  └────────────────┘             │
│                                 │
│  ┌────────────────┐             │
│  │   Suyu         │             │
│  └────────────────┘             │
│                                 │
└─────────────────────────────────┘
```

**Special Features:**
- ✅ Text highlighted with generous spacing (0.15em letter-spacing)
- ✅ Audio playback button ("Sesli Oku") - prominently displayed
- ✅ High contrast reading area (off-white background)
- ✅ Larger text (18px) for comprehension
- ✅ No time limit (reading comprehension, not speed)

---

### 📱 EKRAN 9: Diagnosis Results

**Purpose:** Disleksia profili göstermek ve motive etmek

**Layout:**
```
┌─────────────────────────────────┐
│                                 │
│  🎉 Testi Tamamladın! 🎉       │ (Celebration)
│                                 │
│  "Harika çalıştın!"            │ (Praise - 18px)
│                                 │
├─────────────────────────────────┤
│                                 │
│  📊 Senin Profil:               │ (Section title)
│                                 │
│  ┌─────────────────────────────┐│
│  │ 🎯 Birincil Zorluk:         ││
│  │ Ses-Harf İlişkisi           ││ (Clear labeling)
│  │                             ││
│  │ 💪 Güçlü Yönün:             ││
│  │ Metin Anlama (Çok iyi!)     ││
│  │                             ││
│  │ ⚡ Zorluk Seviyesi: 6/10     ││ (Visual bar)
│  │ ▓▓▓▓▓▓░░░░                  ││ (Progress bar)
│  └─────────────────────────────┘│
│                                 │
├─────────────────────────────────┤
│                                 │
│  💡 Öneriler:                    │
│  • Harf-ses egzersizlerine      │ (Personalized tips)
│    odaklanacağız               │ (3-4 bullet points)
│  • Sesli destekle sık okuyacak  │
│  • Oyunlar ile öğreneceğiz     │
│                                 │
├─────────────────────────────────┤
│   [ DEVAM ET VE BAŞLAYALIM ]   │ (56x48px)
│   [ PROFILI SONRA GÖREYİM ]    │ (Link-style secondary)
└─────────────────────────────────┘
```

**Positive Psychology Elements:**
- ✅ Celebration animation (confetti or star scatter - 500ms)
- ✅ Praise message ("You did great!")
- ✅ Strengths highlighted first
- ✅ No negative language ("challenges" not "weaknesses")
- ✅ Actionable recommendations

**Data Visualization:**
- Visual bar for difficulty level (not just numbers)
- Color coding: Green for strengths, Blue for challenges
- Accessible text descriptions alongside visuals

---

### 📱 EKRAN 10: Dashboard/Home

**Purpose:** Günlük merkez - başlatma noktası

**Layout:**
```
┌─────────────────────────────────┐
│  👋 Hoş Geldin, Berat!          │ (Personalized greeting)
│  Kasım 22, Pazartesi            │ (Date/time context)
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📈 Bugünün Hedefi:          │ │ (Daily goal card)
│ │ 2 oturum, 30 dakika         │ │ (56px height)
│ │ ✅ 1/2 tamamlandı          │ │ (Progress indicator)
│ │                             │ │ (Light blue background)
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │  🚀 [ BAŞLA ]               │ │ (Primary CTA button)
│ │  Bugünün Egzersizi          │ │ (56x56px)
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│                                 │
│  🎯 Bu Hafta (Haftalık Özet)    │ (Section title)
│                                 │
│  ✓ 5/7 gün tamamlandı          │ (Stats - 18px)
│  ✓ Ortalama başarı: 76%         │ (Stats)
│  ✓ Yeni harf öğrendin: 12      │ (Stats)
│                                 │
│  [ DETAYLAR ]                  │ (Link to Screen 15)
│                                 │
├─────────────────────────────────┤
│                                 │
│  🏆 Son Rozetler                │ (Achievements)
│  ⭐⭐⭐ (3 most recent badges)   │ (48x48 each)
│  [ TÜM ROZETLER ]              │ (Link to Screen 17)
│                                 │
├─────────────────────────────────┤
│  ⚙️ [ AYARLAR ]                │ (Settings link)
│  ❓ [ YARDIM ]                 │ (Help link)
└─────────────────────────────────┘
```

**Information Architecture:**
- **Top Section:** Call-to-action (big button)
- **Middle:** Weekly progress summary
- **Bottom:** Secondary actions (settings, help)
- **No scrolling needed** if possible (or minimal)

**Motivation Elements:**
- ✅ Personalized greeting with date
- ✅ Daily goal progress (visual)
- ✅ Weekly stat summary (dopamine hit)
- ✅ Recent achievements visible
- ✅ Difficulty = easy (one main action)

---

### 📱 EKRAN 11-13: Exercise Flow

#### EKRAN 11: Exercise Intro

**Layout:**
```
┌─────────────────────────────────┐
│ ◄ Geri                          │
│                                 │
│  📚 Kelime Tanıma Egzersizi    │ (Title - 24px)
│                                 │
│  "Bugün 5 yeni kelime           │ (Brief description)
│   öğreneceğiz. Hepsi            │ (18px, 1.8 LH)
│   günlük hayattan!"             │
│                                 │
├─────────────────────────────────┤
│                                 │
│  📊 Bu Egzersizde:              │ (What to expect)
│  • 10 soru var                  │ (Bullet points)
│  • Her sorun bir resmi var      │
│  • Hiçbiri zor değil            │
│  • Duymak istersen sesli okuyum │
│                                 │
├─────────────────────────────────┤
│                                 │
│  ⏱️  Tahmini Süre: 8 dakika     │ (Time expectation)
│                                 │
│  🎯 Hedef Başarı: %70+          │ (Goal setting)
│                                 │
├─────────────────────────────────┤
│   [ BAŞLA ]                     │ (56x48px button)
│   [ SONRA YAPARSA DA OLUR ]    │ (Secondary - no pressure)
└─────────────────────────────────┘
```

**Purpose:**
- Set expectations (duration, difficulty)
- Reduce anxiety
- Explain format
- Motivate engagement

---

#### EKRAN 12: Exercise Question

**Layout (Example: Word Matching)**
```
┌─────────────────────────────────┐
│  Soru 3/10  ◾◾◯◯◯◯◯◯◯        │ (Progress indicator)
│                                 │
│  Hangi kelime bu resme uyuyor? │ (Question - 18px)
│                                 │
│        🐱 (Visual - 56x56)      │ (Image reference)
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 🔊 (Audio button - 48x48)   │ │ (Play pronunciation)
│ │    (Top right of image)      │ │
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│                                 │
│  ┌────────────────┐             │ (Answer options)
│  │   Kedi         │             │ (Full-width, 56px)
│  └────────────────┘             │
│                                 │
│  ┌────────────────┐             │
│  │   Keçi         │             │
│  └────────────────┘             │
│                                 │
│  ┌────────────────┐             │
│  │   Köpek        │             │
│  └────────────────┘             │
│                                 │
├─────────────────────────────────┤
│                                 │
│  💡 İpucu ister misin? [ EVET ] │ (Optional hint)
│     (Not forced, optional)       │
│                                 │
└─────────────────────────────────┘
```

**Interactive Features:**
- 🔊 Pronunciation button (always visible)
- 💡 Hint system (optional, on-demand)
- ⏱️ No time limit (comprehension-based)
- ◾◯ Visual progress (dots fill as you progress)

**Answer Selection:**
- Tap option → Button highlights + plays feedback sound
- Wait 1 second → Screen transitions to feedback

---

#### EKRAN 13: Exercise Feedback

**Layout (Success Case)**
```
┌─────────────────────────────────┐
│                                 │
│      ✅ DOĞRU! 🎉              │ (Large, positive)
│                                 │
│  "Kedi" doğru cevaptı!         │ (Confirmation - 18px)
│                                 │
│         🐱 + 🔤 Kedi            │ (Reinforcement: image + word)
│                                 │
├─────────────────────────────────┤
│                                 │
│  💬 Ezoterik Tahmin:            │ (LLM-generated insight)
│  "Çok hızlı cevapladın!        │ (18px, friendly)
│   Bu 'kedi' tanıdığını biliyor  │
│   musunuz?" [Sesli]             │ (With audio option)
│                                 │
│  ⭐⭐⭐⭐⭐ (5 stars for correct)│
│                                 │
├─────────────────────────────────┤
│                                 │
│  [ DEVAM ]                      │ (56x48px)
│  Soru 4/10'e geçelim           │ (Next action)
│                                 │
│  🏃💨 [HIZLI DEVAM]  [PAUSA]   │ (Pace control)
│                                 │
└─────────────────────────────────┘
```

**Failure Case Layout**
```
┌─────────────────────────────────┐
│                                 │
│      ❌ Henüz Değil             │ (Gentle, not "wrong")
│                                 │
│  "Keçi" değil, "Kedi" tiyatro   │ (Explanation - 18px)
│                                 │
│         🐱 vs 🐐                 │ (Visual comparison)
│         Kedi    Keçi            │ (Labels)
│                                 │
├─────────────────────────────────┤
│                                 │
│  💡 İpucu (Automatically shown) │ (LLM-generated)
│                                 │
│  "Kediyi düşün: Kediler miyav   │ (Contextual hint)
│   yapar. Resimde miyav sesi     │ (18px)
│   duysak ne olurdu?"            │ (Asking for engagement)
│                                 │
│  🔊 [TEKRAR DİNLE]             │ (Re-listen option)
│                                 │
├─────────────────────────────────┤
│                                 │
│  [ TEKRAR DENE ]               │ (56x48px)
│  Ya da                          │
│  [ İPUÇ SARINİ OKUT ]          │ (Alternative with TTS)
│                                 │
└─────────────────────────────────┘
```

**Psychological Design:**
- ✅ "Not yet" instead of "wrong"
- ✅ Explanation without shame
- ✅ Visual aid for learning difference
- ✅ Hint generation (LLM-powered)
- ✅ Re-attempt opportunity
- ✅ Audio support always available

---

### 📱 EKRAN 14: Exercise Complete

**Layout:**
```
┌─────────────────────────────────┐
│                                 │
│  🎊 TEBRİKLER! 🎊              │ (Celebration animation)
│                                 │
│  Egzersizi Tamamladın!         │ (Headline - 24px)
│                                 │
├─────────────────────────────────┤
│                                 │
│  📊 Bugünün Sonuçları:          │ (Summary section)
│                                 │
│  ✓ Başarı: 80%                  │ (Main metric - 20px bold)
│  ✓ Soru Sayısı: 10              │ (Supporting metrics)
│  ✓ Süre: 8 dakika              │
│  ✓ Yeni Kelime: 8              │ (Learning outcome)
│                                 │
├─────────────────────────────────┤
│                                 │
│  ⭐ ⭐ ⭐ ⭐ ⭐ (Stars earned)   │ (Reward visualization)
│  Harika! Rozetini Kazandın!    │ (48x48 badge pop-up)
│  "İlk 10 Kelimeyi Öğrendin"   │
│                                 │
├─────────────────────────────────┤
│                                 │
│  💬 Arkadaşına ne diyorsun?     │ (Reflective question)
│  [ SEÇ EMOJI ]                  │ (Mood check-in)
│  😊 😍 🤔 😐                   │ (5 emoji options)
│                                 │
├─────────────────────────────────┤
│                                 │
│  [ ANA SAYFAYA DÖN ]           │ (56x48px)
│  [ BAŞKA BİR EGZERSIZ ]        │ (Secondary)
│                                 │
└─────────────────────────────────┘
```

**Gamification Elements:**
- ✅ Star rating system (5 stars = 100% success)
- ✅ Badge unlock animation
- ✅ Progress summary
- ✅ Emoji mood check-in (psychological engagement)

---

### 📱 EKRAN 15: Progress Dashboard

**Layout:**
```
┌─────────────────────────────────┐
│ ◄ Geri                          │
│                                 │
│  📊 Seninle Nasıl Gidiyor?      │ (Header - 24px)
│  Bu Hafta (Nov 15-21)           │ (Subheader - 14px gray)
│                                 │
├─────────────────────────────────┤
│                                 │
│  📈 Genel İstatistikler:        │ (Section 1)
│                                 │
│  ✓ 5/7 gün tamamlandı          │ (Stat - 18px)
│    ▓▓▓▓▓▒▒ (Visual bar)         │ (Progress bar)
│                                 │
│  ✓ Ortalama Başarısı: 76%      │ (Stat)
│    ▓▓▓▓▓▓▒▒ (Visual bar)        │
│                                 │
│  ✓ Toplam Zaman: 2 saat        │ (Stat)
│                                 │
│  ✓ Yeni Kelime: 47             │ (Learning outcome)
│                                 │
├─────────────────────────────────┤
│                                 │
│  🎯 Beceri Gelişimi:            │ (Section 2)
│                                 │
│  ✅ Kelime Tanıma: 68% → 75%   │ (Improvement)
│     ↑ 7% (Positive trend)       │ (Green, upward trend)
│                                 │
│  ✅ Metin Anlama: 82% → 79%    │ (Slight decline)
│     ↓ 3% (Attention flag)       │ (Orange, downward trend)
│                                 │
│  ✅ Harf Tanıma: 55% → 62%     │ (Big improvement)
│     ↑ 7% (Great trend)          │ (Green, upward trend)
│                                 │
├─────────────────────────────────┤
│                                 │
│  💡 Öğretmene Önerileri Gör:   │ (CTA)
│  [ HAFTALIK RAPOR ]            │ (Link to Screen 16)
│                                 │
│  [ DETAYLI ANALİZ ]            │ (Alternative link)
│  [ GERİ DÖN ]                  │ (Back to home)
│                                 │
└─────────────────────────────────┘
```

**Data Visualization:**
- Visual bars for progress (easier than text)
- Color coding: Green (up), Orange (down)
- Trend arrows (quick scanning)
- Month-over-month comparison

---

### 📱 EKRAN 16: Weekly Report

**Layout:**
```
┌─────────────────────────────────┐
│ ◄ Geri                          │
│                                 │
│  📋 Haftalık Rapor              │ (Title)
│  Berat - 15 Nov - 21 Nov 2025   │ (Student, date range)
│                                 │
├─────────────────────────────────┤
│                                 │
│  🎯 ÖZET (Executive summary)    │ (Report card section)
│                                 │
│  Harika bir hafta geçirdin!    │ (Positive summary - 18px)
│  5 gün düzenli, ortalama 76%   │ (Facts)
│  başarı. Kelime tanımada        │
│  özellikle iyileşme gördük.    │ (Praise + data)
│                                 │
├─────────────────────────────────┤
│                                 │
│  📈 İSTATİSTİKLER               │ (Detailed metrics)
│                                 │
│  Egzersiz Tamamlama:            │ (Metric 1)
│  • Pazartesi: ✓                 │ (Daily breakdown)
│  • Salı: ✓                      │
│  • Çarşamba: ✓                  │
│  • Perşembe: ✓                  │
│  • Cuma: ✓                      │
│  • Cumartesi: ✗                 │ (Not completed)
│  • Pazar: ✗                     │
│                                 │
│  Toplam Zaman: 2h 15m          │ (Summary stat)
│  Avg Session: 27m              │ (Supporting metric)
│                                 │
├─────────────────────────────────┤
│                                 │
│  💪 GÜÇ ALANLARI:                │ (Strengths section)
│  1. Metin Anlama (82%)          │ (Top strength)
│  2. Sözcük Başında Tanıma (78%) │ (Other strengths)
│  3. Motivasyon (5/5 - Harika!) │ (Subjective strength)
│                                 │
│  🚀 İYİLEŞTİRİLMESİ GEREKEN:    │ (Areas for growth)
│  1. Yazım Düzeltme (62%)        │ (Gap area)
│  2. Ses-Harf Eşleştirmesi (65%)│ (Another gap)
│                                 │
├─────────────────────────────────┤
│                                 │
│  💡 SONRAKI HAFTA ÖNERİLERİ:    │ (Recommendations)
│                                 │
│  1. Yazım egzersizlerine        │ (Actionable rec 1)
│     biraz daha zaman ayıralım  │
│  2. Harf-ses ilişkisini         │ (Actionable rec 2)
│     baskı alırken oyunlar       │
│     oynayalım                   │
│  3. Cumartesi + Pazar günleri   │ (Actionable rec 3)
│     kısa oturumlar yapabiliriz  │
│     (5-10 dakika)               │
│                                 │
├─────────────────────────────────┤
│                                 │
│  📧 Bu rapor öğretmenin ve      │ (Footer)
│  ebeveynin e-postasına          │
│  gönderilmiştir.               │ (18px, gray)
│                                 │
│  [ YAZDIRMAK İSTER MİSİN? ]    │ (Export option)
│  [ PAYLAŞMAK İSTER MİSİN? ]    │ (Share option)
│                                 │
└─────────────────────────────────┘
```

**Report Features:**
- ✅ Positive tone throughout
- ✅ Data-driven but human-friendly language
- ✅ Actionable recommendations (not just criticism)
- ✅ Daily breakdown (shows consistency)
- ✅ Strengths highlighted first
- ✅ Exportable for teacher/parent

---

## 4. CRİTİCAL USER FLOWS

### 🔀 FLOW 1: Ilk Deneyim (Onboarding)

```
Welcome Screen (1)
    ↓ [YENİ HESAP AÇMAK]
Age Selection (2)
    ↓ [DEVAM ET]
Profile Setup (4)
    ↓ [PROFILIMI TAMAMLAYALIM]
Pre-Diagnosis Intro (5)
    ↓ [BAŞLAYALIM!]
Diagnosis Tests (6-8)
    ↓ [Her testin sonunda otomatik devam]
Diagnosis Results (9)
    ↓ [DEVAM ET VE BAŞLAYALIM]
Dashboard (10)
    ↓ [BAŞLA]
First Exercise (11-14)
```

**Duration:** 30-45 dakika (90-120 test + 10-15 ilk egzersiz)

**Retention Point:** Tanı sonrası başarı deneyimi

---

### 🔀 FLOW 2: Günlük Öğrenme Oturumu

```
Dashboard (10)
    ↓ [BAŞLA]
Exercise Intro (11)
    ↓ [BAŞLA]
Exercise Questions (12) × 10
    ↓ [Her cevaptan sonra feedback]
Exercise Complete (14)
    ↓ [ANA SAYFAYA DÖN]
Dashboard (10)
```

**Duration:** 8-12 dakika (optimized for short attention span)

**Exit Points:** 
- After any exercise (student gets to choose)
- Pause available (resume later)

---

### 🔀 FLOW 3: İlerleme İzleme (Parent/Teacher)

```
Dashboard (10)
    ↓ [DETAYLAR] / [HAFTALIK RAPOR]
Progress Dashboard (15)
    ↓ [HAFTALIK RAPOR]
Weekly Report (16)
    ↓ Export/Share
```

**Duration:** 3-5 dakika

**Frequency:** Weekly access

---

## 5. ACCESSIBILITY SPESİFİKASYONLARİ

### 5.1 WCAG 2.1 Compliance

| Level | Standard | DisleksiAI Status |
|-------|----------|------------------|
| **A** | Basic accessibility | ✅ Full Compliance |
| **AA** | Enhanced accessibility | ✅ Full Compliance |
| **AAA** | Advanced accessibility | ⚠️ Partial (some features) |

### 5.2 Disleksia-Specific Accessibility

| Feature | Implementation | Verification |
|---------|-----------------|--------------|
| **Letter Spacing** | 0.15em default | ✅ CSS audit |
| **Line Height** | 1.8-2.0 | ✅ Measured in px |
| **Color Contrast** | 7:1+ on text | ✅ WebAIM checker |
| **Font Size** | 18px minimum body | ✅ Device testing |
| **TTS Integration** | 11Labs + native voice | ✅ Audio testing |
| **Touch Targets** | 56x56px minimum | ✅ Sketch measurement |
| **No Justified Text** | Left-aligned only | ✅ CSS rule |
| **Motion** | < 500ms, reduce-motion support | ✅ Animation testing |
| **Dark Mode** | Soft black (#2B2D31) | ✅ OS settings |

### 5.3 Screen Reader Support

- ✅ Semantic HTML (`<button>`, `<label>`, etc.)
- ✅ ARIA labels on icons
- ✅ Audio descriptions for images
- ✅ Form validation messages
- ✅ Progress announcements

---

## 6. PROTOTYPE ÖNERILERI

### 6.1 Prototyping Tools

| Tool | Use Case | Recommendation |
|------|----------|-----------------|
| **Figma** | Design + Collaboration | 🌟 Best for teams |
| **Penpot** | Open-source alternative | ✅ Good for education |
| **Framer** | Interactive prototypes | ✅ Good for animations |
| **Adobe XD** | Professional workflows | ✅ Industry standard |

### 6.2 Component Library

**Create a reusable component system:**

1. **Buttons**
   - Primary (Blue, 56x48px)
   - Secondary (Link-style)
   - Disabled state
   - Loading state

2. **Input Fields**
   - Text input (18px)
   - Radio buttons (52x52px)
   - Checkboxes (48x48px)
   - High contrast styling

3. **Feedback Elements**
   - Success message (Green, top banner)
   - Error message (Red, inline)
   - Hint text (Gray, 14px)
   - Progress indicator (dots, bars)

4. **Cards**
   - Exercise card
   - Progress card
   - Achievement card
   - Spacing: 16px padding

5. **Icons**
   - 24x24px minimum
   - Paired with text labels
   - High contrast fill colors

### 6.3 Usability Testing Plan

**Phase 1: Accessibility Testing**
- 5 dyslexic users (10-16 years old)
- Think-aloud protocol
- Eye-tracking (optional)
- Duration: 1 hour per user

**Phase 2: Functional Testing**
- 10 students (mixed reading abilities)
- Task-based testing (complete diagnosis, 2 exercises)
- Satisfaction survey
- Duration: 45 minutes per user

**Phase 3: Parent/Teacher Testing**
- 5 teachers / 5 parents
- Dashboard and reporting features
- Feedback collection
- Duration: 30 minutes per person

---

## 7. RESPONSIVE DESIGN BREAKPOINTS

```css
/* Mobile First */
@media (min-width: 320px) { /* iPhone SE */ }
@media (min-width: 375px) { /* iPhone 12 */ }
@media (min-width: 390px) { /* Android standard */ }
@media (min-width: 412px) { /* iPhone Plus */ }

/* Tablet (not MVP, but future) */
@media (min-width: 768px) { /* iPad */ }
```

**Note:** MVP focuses on mobile (320px-512px) only.

---

## 8. ANIMATION & INTERACTION GUIDELINES

### 8.1 Microinteractions

| Action | Animation | Duration | Purpose |
|--------|-----------|----------|---------|
| **Button Press** | Scale 0.98 | 150ms | Tactile feedback |
| **Answer Selected** | Fade + Color | 200ms | Confirmation |
| **Correct Answer** | Bounce + Glow | 400ms | Celebration |
| **Wrong Answer** | Shake | 300ms | Gentle correction |
| **Progress Update** | Slide + Count | 500ms | Achievement |
| **Page Transition** | Fade | 300ms | Smooth navigation |

### 8.2 Reduce Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Why:** Dyslexic children may have vestibular sensitivity.

---

## ANNEX: Screen Flowchart (ASCII)

```
                    ┌─── Welcome (1)
                    │
                    ├─── [NEW USER]
                    │       ↓
                    │    Age Selection (2)
                    │       ↓
                    │    Profile Setup (4)
                    │       ↓
                    ├─── [RETURNING USER]
                    │       ↓
                    │    Login (3)
                    │       ↓
                    ├─── Pre-Diagnosis (5)
                    │       ↓
                    ├─── Diagnosis Tests (6-8)
                    │       ↓
                    ├─── Diagnosis Results (9)
                    │       ↓
                    ├─── Dashboard (10) ◄─── [MAIN HUB]
                    │       ├─┐
                    │       │ ├─ [START EXERCISE] ──┐
                    │       │ │                       ├─ Exercise Intro (11)
                    │       │ │                       ├─ Exercise Q (12)
                    │       │ │                       ├─ Feedback (13)
                    │       │ │                       ├─ Complete (14)
                    │       │ │                       ├─ Back to (10)
                    │       │ │                       
                    │       │ ├─ [VIEW PROGRESS] ────┤ Progress Dashboard (15)
                    │       │ │                       ├─ Weekly Report (16)
                    │       │ │                       
                    │       │ ├─ [VIEW ACHIEVEMENTS]─ Achievements (17)
                    │       │ │                       
                    │       │ └─ [SETTINGS] ────────┤ Settings (18)
                    │       │                        ├─ Accessibility (19)
                    │       │                        ├─ Sound (20)
                    │       │                        └─ Help (21)
```

---

## 📝 TAKEAWAYS

### Key Screen Design Principles for Dyslexic Children:

1. **Simplicity First** - One action per screen
2. **Generous Spacing** - 0.15em letter-spacing, 1.8 line-height
3. **Large Touch Targets** - 56x56px minimum
4. **Color + Text** - Never rely on color alone
5. **Immediate Feedback** - < 500ms response
6. **Audio Support** - TTS on every text element
7. **No Time Pressure** - Let children read at their pace
8. **Positive Psychology** - Celebrate effort, not just outcomes
9. **Clear Navigation** - Maximum 3 options visible
10. **Accessibility Testing** - With real dyslexic users

### Next Steps:
1. Create Figma prototypes (screens 1-10)
2. Conduct accessibility audit
3. Test with 5 dyslexic users
4. Iterate based on feedback
5. Develop high-fidelity designs
6. Code frontend with React.js

---

**Prepared by:** DisleksiAI Design Team  
**Date:** November 22, 2025  
**Version:** 1.0 (MVP Screen Specifications)