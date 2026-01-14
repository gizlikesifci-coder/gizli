# 📱 Uzaktan Erişim - Telefon Kontrol Paneli

Telefonunu uzaktan kontrol et! **Kamera**, **Mikrofon**, **Konum** ve **Pil** durumunu bilgisayarından canlı izle.

---

## 🎯 Ne İşe Yarar?

Bu proje **ekranı kırık veya sorunlu telefonları değerlendirme** amacıyla geliştirilmiştir.

Telefona sadece **bir dosya** yüklersin, bilgisayardan:

| Özellik | Açıklama |
|---------|----------|
| 📷 **Kamera** | Telefonun kamerasından canlı görüntü |
| 🎤 **Mikrofon** | Telefonun mikrofonundan canlı ses dinleme |
| 📍 **Konum** | GPS ile gerçek zamanlı harita takibi |
| 🔋 **Pil** | Şarj durumu ve seviyesi |

---

## 🚀 Kullanım

### 📱 Telefonda (tracker.html)

1. `tracker.html` dosyasını telefonun tarayıcısında aç
2. Bir **bağlantı kodu** gir (örn: `test123`)
3. **"Bağlantıyı Başlat"** butonuna bas
4. **Kamera**, **Mikrofon** ve **Konum** izinlerini ver
5. Telefonu istediğin yere koy!

### 💻 Bilgisayarda (index.html)

1. `index.html` dosyasını tarayıcıda aç
2. Telefonda girdiğin **aynı kodu** gir
3. **"Bağlan"** butonuna bas
4. **🔊 butonuna** basarak sesi dinlemeye başla
5. Telefondan gelen her şeyi gör ve duy!

---

## ✨ Özellikler

### 📷 Kamera Görüntüsü
- Telefonun arka kamerasından canlı görüntü
- Her 2 saniyede bir güncelleme
- Düşük bant genişliği kullanımı

### 🎤 Ses Dinleme
- Telefonun mikrofonundan canlı ses
- 3 saniyelik ses parçaları halinde aktarım
- Ses seviyesi ayarı
- Tek tuşla aç/kapat

### 📍 Konum Takibi
- GPS ile gerçek zamanlı konum
- Harita üzerinde canlı işaretçi
- Gidilen rotanın çizimi
- Hız ve hassasiyet bilgisi

### 🔋 Pil Durumu
- Şarj seviyesi (%)
- Şarj olup olmadığı bilgisi

---

## 📁 Dosyalar

| Dosya | Nerede Açılır | Ne Yapar |
|-------|---------------|----------|
| `tracker.html` | 📱 Telefon | Kamera + Mikrofon + GPS verilerini gönderir |
| `index.html` | 💻 Bilgisayar | Tüm verileri gösterir ve sesi oynatır |

---

## 🔧 Teknik Bilgiler

### Kullanılan Teknolojiler
- **HTML5 / CSS3 / JavaScript**
- **Firebase Realtime Database** - Anlık veri senkronizasyonu
- **Leaflet.js** - İnteraktif harita
- **MediaDevices API** - Kamera ve mikrofon erişimi
- **Geolocation API** - GPS konum
- **Battery API** - Pil durumu
- **MediaRecorder API** - Ses kaydı

### Veri Akışı
```
📱 Telefon                    ☁️ Firebase                   💻 Bilgisayar
    │                              │                              │
    ├── Kamera görüntüsü ─────────►├─────────────────────────────►│
    ├── Mikrofon sesi ────────────►├─────────────────────────────►│
    ├── GPS konumu ───────────────►├─────────────────────────────►│
    └── Pil durumu ───────────────►└─────────────────────────────►│
```

---

## ⚠️ Gereksinimler

1. **İnternet bağlantısı** - Her iki cihazda da
2. **İzinler** - Telefonda kamera, mikrofon ve konum izni
3. **Modern tarayıcı** - Chrome, Firefox, Edge
4. **HTTPS** - Kamera/mikrofon için güvenli bağlantı gerekli

---

## 🎓 Proje Bilgileri

**Konu:** Ekranı bozuk cihazların değerlendirilmesi - Uzaktan erişim sistemi

**Özellikler:**
- Canlı kamera görüntüsü
- Canlı ses dinleme
- GPS konum takibi
- Pil durumu izleme

**Teknolojiler:** HTML5, CSS3, JavaScript (ES6+), Firebase, Leaflet.js, Web APIs

---

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.
