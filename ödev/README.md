# 📱 Tracker Pro v3.0

**Kesintisiz** telefon takip ve uzaktan erişim sistemi. Web tabanlı, Firebase altyapılı.

## ✨ v3.0 Yenilikleri

### 🔄 Otomatik Yeniden Bağlanma
- İnternet kesilip açılınca **otomatik bağlanır**
- Telefon uyku moduna geçse bile **uyanınca devam eder**
- Sayfa kapatılıp açılsa bile **önceki oturumu devam ettirir**
- **100 denemeye kadar** otomatik yeniden bağlanma

### 📱 PWA Desteği
- **Ana ekrana ekle** özelliği
- **Service Worker** ile önbellekleme
- **Wake Lock** - ekranı açık tutar
- Uygulama gibi çalışır!

### 📊 Gelişmiş İstatistikler
- Çalışma süresi (uptime)
- Yeniden bağlanma sayısı
- Gönderilen/alınan veri miktarı (KB)
- Son sinyal zamanı (heartbeat)

## 🚀 Tüm Özellikler

| Kategori | Özellik |
|----------|---------|
| **📍 Konum** | GPS takibi, hız, mesafe, hassasiyet, rota çizimi |
| **📷 Kamera** | Canlı görüntü, fotoğraf çekme |
| **🎤 Ses** | Canlı dinleme, ses seviyesi göstergesi |
| **🔋 Pil** | Seviye, şarj durumu |
| **🏃 Hareket** | Durağan/hareket algılama |
| **🔄 Bağlantı** | Otomatik yeniden bağlanma, heartbeat |
| **📊 İstatistik** | Uptime, data, reconnect sayısı |

## ⚠️ Bildirimler Hakkında

**SMS ve uygulama bildirimleri görüntülenemez!**

Bu bir web tarayıcısı kısıtlamasıdır. Web tarayıcıları sistem bildirimlerine erişemez. Bunun için:
- Native Android uygulaması gerekir (Java/Kotlin)
- NotificationListenerService izni gerekir
- Bu izin Google Play Store politikaları gereği çok kısıtlıdır

## 📁 Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `index.html` | Kontrol merkezi (bilgisayar) |
| `tracker.html` | Takip uygulaması (telefon) |
| `manifest.json` | PWA yapılandırması |
| `sw.js` | Service Worker |
| `README.md` | Bu dosya |

## ⚙️ Kurulum

### 1. Firebase Ayarları
```json
{
  "rules": {
    "devices": {
      "$deviceId": {
        ".read": "$deviceId.length >= 6",
        ".write": "$deviceId.length >= 6"
      }
    }
  }
}
```

### 2. HTTPS Hosting (Zorunlu)
GitHub Pages, Netlify veya başka bir HTTPS hosting kullanın.

### 3. Dosyaları Yükle
Tüm dosyaları hosting'e yükleyin:
- `index.html`
- `tracker.html`
- `manifest.json`
- `sw.js`

## 📖 Kullanım

### Telefonda:
1. `tracker.html` açın
2. "Ana ekrana ekle" seçeneğini kullanın (önerilir)
3. Bağlantı kodu girin
4. "🚀 Bağlantıyı Başlat"

### Bilgisayarda:
1. `index.html` açın
2. Aynı kodu girin
3. "Bağlan"

## 🔄 Otomatik Bağlanma Nasıl Çalışır?

1. **Network Listener:** İnternet durumu sürekli izlenir
2. **Visibility API:** Sayfa görünür olunca kontrol yapılır
3. **Heartbeat:** Her 25 saniyede sinyal gönderilir
4. **Auto-restart:** Önceki oturum varsa otomatik başlar
5. **Exponential Backoff:** Bağlantı hatalarında artan bekleme

## 💡 İpuçları

### Telefonda Uzun Süre Çalışması İçin:
1. **Ana ekrana ekleyin** (PWA olarak)
2. **Pil optimizasyonunu kapatın** (Ayarlar > Uygulamalar > Chrome > Pil)
3. **Ekran zaman aşımını uzatın**
4. **Telefonu şarjda tutun**

### Bağlantı Sorunlarında:
- Firebase kurallarını kontrol edin
- İnternet bağlantınızı kontrol edin
- Sayfa yenileyin

## 🔒 Güvenlik

- Minimum 6 karakterlik kod zorunluluğu
- Firebase Realtime Database kuralları
- HTTPS zorunlu

## ⚠️ Yasal Uyarı

- Bu uygulama **yalnızca eğitim amaçlıdır**
- Sadece **kendi cihazlarınızda** kullanın
- Başkalarını izinsiz takip etmek **yasadışıdır**

---

**Versiyon:** 3.0 - Auto Reconnect  
**Tarih:** Ocak 2026
