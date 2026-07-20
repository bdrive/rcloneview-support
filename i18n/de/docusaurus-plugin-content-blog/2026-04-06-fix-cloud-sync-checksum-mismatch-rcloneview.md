---
slug: fix-cloud-sync-checksum-mismatch-rcloneview
title: "Prüfsummen-Fehler bei der Cloud-Synchronisation in RcloneView beheben"
authors:
  - tayson
description: "Beheben Sie Prüfsummen-Fehler (Checksum Mismatch) bei der Cloud-Synchronisation in RcloneView. Erfahren Sie, wie rclone Prüfsummen verarbeitet, welche Hash-Unterschiede es zwischen Anbietern gibt und wann --ignore-checksum sinnvoll ist."
keywords:
  - rclone checksum mismatch
  - cloud sync checksum error
  - rclone hash mismatch fix
  - rcloneview checksum error
  - rclone ignore checksum
  - md5 sha1 cloud storage hash
  - rclone data integrity check
  - fix sync mismatch rclone
  - cloud provider hash comparison
  - rclone checksum verification
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - guide
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Prüfsummen-Fehler bei der Cloud-Synchronisation in RcloneView beheben

> Prüfsummen-Abweichungen bei der Cloud-Synchronisation bedeuten meist, dass Quelle und Ziel unterschiedliche Hash-Algorithmen verwenden – nicht, dass Ihre Daten beschädigt sind. Hier erfahren Sie, wie Sie das diagnostizieren und beheben.

Wenn rclone Dateien zwischen Cloud-Anbietern synchronisiert, vergleicht es Prüfsummen, um zu überprüfen, ob die übertragenen Daten mit dem Original übereinstimmen. Verwenden Quelle und Ziel unterschiedliche Hash-Algorithmen – oder liefert einer der Anbieter überhaupt keine Prüfsummen – kann rclone eine Abweichung melden oder Dateien unnötig erneut übertragen. Dieser Leitfaden erklärt, was dabei passiert und wie Sie es in RcloneView beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was Prüfsummen-Abweichungen bedeuten

Eine Prüfsumme (oder ein Hash) ist eine Zeichenfolge fester Länge, die aus dem Inhalt einer Datei berechnet wird. Erzeugen zwei Dateien dieselbe Prüfsumme, sind sie identisch. Rclone verwendet Prüfsummen, um:

- **Uploads zu verifizieren** — zu bestätigen, dass die Zieldatei nach der Übertragung mit der Quelle übereinstimmt.
- **Änderungen zu erkennen** — während der Synchronisation Dateien zu überspringen, deren Prüfsumme und Größe sich nicht geändert haben.
- **Integrität sicherzustellen** — Beschädigungen zu melden, wenn der Hash einer Datei nicht den Erwartungen entspricht.

Eine Abweichung bedeutet, dass der berechnete Hash auf einer Seite nicht mit dem der anderen übereinstimmt. Das kann auf eine tatsächliche Datenbeschädigung hindeuten, spiegelt aber häufiger eine **Inkompatibilität der Hash-Algorithmen** zwischen den Anbietern wider.

## Anbieterspezifische Hash-Unterschiede

Verschiedene Cloud-Anbieter unterstützen unterschiedliche Hash-Algorithmen:

| Anbieter | Unterstützte Hashes |
|----------|-----------------|
| **Lokale Festplatte** | MD5, SHA-1, SHA-256 (abhängig vom Betriebssystem) |
| **Google Drive** | MD5 |
| **OneDrive** | SHA-1, QuickXorHash |
| **Dropbox** | Dropbox-Content-Hash (proprietär) |
| **Amazon S3** | MD5 (ETag, jedoch nicht bei Multipart-Uploads) |
| **Backblaze B2** | SHA-1 |
| **Azure Blob** | MD5 |
| **SFTP** | MD5, SHA-1 (falls vom Server unterstützt) |
| **Wasabi** | MD5 (ETag) |
| **Cloudflare R2** | MD5 (ETag) |

Bei der Synchronisation zwischen Anbietern, die einen gemeinsamen Hash unterstützen (z. B. Google Drive MD5 zu Azure Blob MD5), funktionieren Prüfsummen nahtlos. Gibt es keinen gemeinsamen Hash (z. B. Google Drive MD5 gegenüber OneDrive QuickXorHash), kann rclone die Prüfsummen nicht direkt vergleichen.

## Wie rclone abweichende Hashes behandelt

Rclone geht intelligent mit Hash-Vergleichen um:

1. **Gemeinsamer Hash vorhanden** — rclone verwendet den gemeinsamen Algorithmus zum Vergleich der Dateien. Keine Probleme.
2. **Kein gemeinsamer Hash** — rclone greift auf den Vergleich von Dateigröße und Änderungsdatum zurück. Dateien mit übereinstimmender Größe und Zeit gelten als identisch.
3. **Flag `--checksum` aktiviert** — rclone verwendet ausschließlich Prüfsummen (kein Zeitvergleich). Existiert kein gemeinsamer Hash, überträgt rclone jede Datei erneut, da die Übereinstimmung nicht bestätigt werden kann.

Dieses dritte Szenario ist die häufigste Ursache für unerwartetes Verhalten: Das Aktivieren von `--checksum` zwischen inkompatiblen Anbietern erzwingt unnötige erneute Übertragungen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders in RcloneView to identify mismatched files" class="img-large img-center" />

## Häufige Fehlerszenarien

### Szenario 1: ETag-Abweichung bei S3-Multipart-Upload

Wenn Sie eine große Datei per Multipart-Upload zu S3 hochladen, ist der resultierende ETag kein einfacher MD5-Hash — er ist ein zusammengesetzter Hash der einzelnen Teile. Der lokale MD5-Hash von rclone stimmt dann nicht mit dem S3-ETag überein, was bei der nächsten Synchronisation eine Abweichung auslöst.

**Lösung:** Das ist erwartetes Verhalten. Rclone behandelt dies, indem es den erwarteten Hash nach Möglichkeit in den Metadaten speichert. Wenn Sie erneute Übertragungen großer Dateien beobachten, können Sie für diesen speziellen Sync-Job bedenkenlos `--ignore-checksum` verwenden.

### Szenario 2: Synchronisation von Google Drive zu OneDrive

Google Drive verwendet MD5, während OneDrive QuickXorHash nutzt. Es gibt keinen überlappenden Hash-Algorithmus.

**Lösung:** Rclone greift automatisch auf Größe und Änderungsdatum zurück. Verwenden Sie `--checksum` nicht für diese Kombination, sonst wird jede Datei erneut übertragen.

### Szenario 3: Verschlüsselte (Crypt-)Remotes

Bei Verwendung von rclone crypt hat die verschlüsselte Datei einen anderen Hash als die unverschlüsselte Quelle. Rclone handhabt dies intern, aber wenn Sie den Hash des Crypt-Remotes mit dem Hash des ursprünglichen Anbieters vergleichen, werden diese niemals übereinstimmen.

**Lösung:** Vergleichen Sie Dateien immer über die Crypt-Remote-Ebene, nicht durch direkte Betrachtung des zugrunde liegenden verschlüsselten Speichers.

## Prüfsummen-Verhalten in RcloneView konfigurieren

### Verwendung des Flags --checksum

Das Flag `--checksum` weist rclone an, ausschließlich Prüfsummen (nicht das Änderungsdatum) zu verwenden, um zu bestimmen, ob Dateien übertragen werden müssen. Aktivieren Sie es, wenn:

- Quelle und Ziel denselben Hash-Algorithmus unterstützen.
- Sie die stärkste Integritätsgarantie wünschen.
- Sie zwischen lokaler Festplatte und einem Anbieter synchronisieren, der MD5 unterstützt.

Verwenden Sie es nicht, wenn:

- Quelle und Ziel keinen gemeinsamen Hash haben — es erzwingt eine erneute Übertragung aller Dateien.
- Sie große Dateien zu S3 synchronisieren (Multipart-ETags stimmen nicht überein).

### Verwendung des Flags --ignore-checksum

Das Flag `--ignore-checksum` überspringt jegliche Prüfsummen-Verifizierung. Verwenden Sie es, wenn:

- Sie bestätigt haben, dass die Daten korrekt sind, die Prüfsummen aber niemals übereinstimmen werden (z. B. S3-Multipart-ETags).
- Sie eine schnellere Synchronisation wünschen, indem die Hash-Berechnung bei sehr großen Datensätzen übersprungen wird.
- Ein Anbieter inkonsistente oder fehlerhafte Hashes zurückgibt (selten, aber möglich).

Verwenden Sie es nicht standardmäßig — Prüfsummen dienen dazu, echte Beschädigungen zu erkennen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure sync job flags in RcloneView before execution" class="img-large img-center" />

## Datenintegrität überprüfen

Wenn Sie eine tatsächliche Beschädigung statt einer Hash-Algorithmus-Abweichung vermuten:

1. **`rclone check` ausführen** — dies vergleicht Quell- und Zieldateien und meldet etwaige Unterschiede. In RcloneView können Sie dafür die Ordnervergleichsansicht nutzen.
2. **Herunterladen und lokal vergleichen** — laden Sie die Datei von Quelle und Ziel herunter und berechnen Sie dann lokale Prüfsummen mit `md5sum` oder `sha256sum`.
3. **Übertragungsprotokolle prüfen** — sehen Sie sich den Job-Verlauf von RcloneView auf Fehler während der ursprünglichen Übertragung an.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress and verify checksums in RcloneView" class="img-large img-center" />

## Kurzübersicht: Hash-Kompatibilitätsmatrix

| Synchronisationsrichtung | Gemeinsamer Hash | Checksum-Flag sicher? |
|---------------|-------------|-------------------|
| Lokal zu Google Drive | MD5 | Ja |
| Lokal zu OneDrive | SHA-1 | Ja |
| Lokal zu S3 (kleine Dateien) | MD5 | Ja |
| Lokal zu S3 (Multipart) | Keiner (ETag unterschiedlich) | Nein |
| Google Drive zu OneDrive | Keiner | Nein |
| Google Drive zu S3 | MD5 | Ja (kleine Dateien) |
| S3 zu Backblaze B2 | Keiner (MD5 vs. SHA-1) | Nein |
| S3 zu Azure Blob | MD5 | Ja (kleine Dateien) |

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Hash-Unterstützung Ihrer Anbieter prüfen** anhand der obigen Tabelle.
3. **`--checksum` zwischen inkompatiblen Anbietern vermeiden**, um unnötige erneute Übertragungen zu verhindern.
4. **Ordnervergleich** in RcloneView nutzen, um Synchronisationsergebnisse visuell zu überprüfen.

Die meisten Prüfsummen-Fehler sind keine Datenbeschädigung — sie sind Hash-Algorithmus-Abweichungen zwischen Anbietern. Zu verstehen, welche Hashes jeder Anbieter unterstützt, ist der Schlüssel, um diese Probleme schnell zu lösen.

---

**Weiterführende Anleitungen:**

- [Rclone-Fehler in RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [S3-Zugriff-verweigert-Fehler beheben](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [OneDrive-Synchronisationsfehler beheben](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)

<CloudSupportGrid />
