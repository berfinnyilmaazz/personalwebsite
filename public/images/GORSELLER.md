# Görseller

Görsel yolları `src/data.ts` içindeki `images` alanında tanımlı. Yeni görsel eklemek ya da yerini değiştirmek için orayı güncelle.

| Dosya | Nerede kullanılıyor |
|---|---|
| `disneyberfinpp.jpg` | Navbar ve iletişim kartındaki yuvarlak avatar (yüz kırpılır), sekme ikonu |
| `disneyberfincasual.jpg` | Hero — büyük krem kart |
| `disneyberfinbusinessred.jpg` | Hero'daki küçük eğik kart (yüz) + Deneyim bölümü |
| `disneyberfinbusiness.jpg` | Hakkımda — blob çerçeve |
| `disneyberfingraduado.jpg` | Eğitim — daire |
| `disneyberfinphone.jpg` | İletişim kartı |

Beyaz arka planlı JPG'ler `mix-blend-multiply` ile krem panellere karıştırılıyor, bu yüzden şeffaf PNG gerekmez.
Eksik bir dosyanın yerinde yolunu gösteren bordo bir yer tutucu görünür.

Avatar yüz kırpmasının odak noktası `src/data.ts` içindeki `faceFocus` alanında.
