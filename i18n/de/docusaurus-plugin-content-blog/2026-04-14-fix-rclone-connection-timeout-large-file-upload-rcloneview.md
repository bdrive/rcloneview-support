---
slug: fix-rclone-connection-timeout-large-file-upload-rcloneview
title: "Verbindungs-Timeout bei großen Datei-Uploads beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie Verbindungs-Timeout-Fehler beim Hochladen großer Dateien in Cloud-Speicher mit RcloneView. Passen Sie Chunk-Größe, Wiederholungsversuche und Timeout-Einstellungen für zuverlässige Übertragungen an."
keywords:
  - connection timeout large file upload
  - rclone upload timeout fix
  - large file transfer timeout cloud
  - fix cloud upload timeout RcloneView
  - rclone chunk size timeout
  - cloud storage upload failure
  - troubleshoot large file cloud upload
  - S3 multipart upload timeout
tags:
  - RcloneView
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Verbindungs-Timeout bei großen Datei-Uploads beheben — Lösung mit RcloneView

> Uploads großer Dateien in Cloud-Speicher scheitern häufiger an Timeout-Fehlern als bei kleinen Dateien. So diagnostizieren Sie die Ursache und konfigurieren RcloneView für zuverlässige Multi-GB-Übertragungen.

Das Hochladen eines 20-GB-Videoarchivs oder eines 50-GB-Datenbank-Dumps in Cloud-Speicher unterscheidet sich grundlegend von der Synchronisation eines Ordners mit Dokumenten. Große Dateien belasten die Verbindungsstabilität, überschreiten die Standard-Timeout-Schwellenwerte und offenbaren Einschränkungen beim Multipart-Chunking, die bei Übertragungen kleiner Dateien nie auftreten. RcloneView stellt die rclone-Flags bereit, mit denen Sie diese Parameter anpassen können — über Global Rclone Flags und job­spezifische Einstellungen —, ohne dass Sie Shell-Skripte schreiben müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Timeout-Fehler in RcloneView erkennen

Wenn ein Upload einer großen Datei mit Timeout abbricht, zeigt der **Log-Tab** von RcloneView Einträge wie `Failed to copy: net/http: request canceled (Client.Timeout exceeded)` oder `RequestTimeout: Your socket connection to the server was not read from or written to within the timeout period`. Der Transferring-Tab zeigt, wie die betroffene Datei bei einem Teilprozentsatz stehen bleibt, bevor der Job einen Fehler meldet.

Verbindungs-Timeouts bei großen Uploads treten am häufigsten auf bei:
- S3-kompatiblen Anbietern mit strengen Zeitfenstern für Part-Uploads
- Cloud-APIs, die inaktive Verbindungen nach 30–60 Sekunden schließen
- Netzwerkpfaden mit sporadischem Paketverlust, der die Round-Trip-Latenz erhöht

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring large file transfer progress in RcloneView" class="img-large img-center" />

## Chunk-Größe und Timeout-Flags anpassen

Die wirksamste Lösung für Timeout-Fehler bei großen Dateien ist die Anpassung der Chunk-Größe für Multipart-Uploads. Gehen Sie in RcloneView zu **Settings → Embedded Rclone → Global Rclone Flags** und fügen Sie Folgendes hinzu:

- `--s3-chunk-size 128M` — erhöht die S3-Multipart-Chunk-Größe vom Standardwert 5 MB auf 128 MB und reduziert damit die Anzahl der API-Round-Trips pro Datei
- `--s3-upload-cutoff 200M` — legt den Dateigrößen-Schwellenwert fest, ab dem Multipart-Uploads verwendet werden
- `--timeout 5m` — verlängert den globalen Verbindungs-Timeout auf 5 Minuten pro Vorgang

Für Google Drive verwenden Sie `--drive-chunk-size 128M` anstelle des S3-Flags. Für Backblaze B2 verwenden Sie `--b2-chunk-size 128M`.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags for large file uploads in RcloneView" class="img-large img-center" />

## Wiederholungsversuche und Übertragungsfortsetzung aktivieren

Aktivieren Sie **Retry entire sync if fails** in Schritt 2 des Sync-Assistenten (auf 3 oder 5 Wiederholungsversuche eingestellt). Die Retry-Logik von rclone versucht bei S3-kompatiblen Anbietern, Multipart-Uploads dort fortzusetzen, wo sie unterbrochen wurden, wodurch verschwendete Übertragungszeit minimiert wird. Bei Anbietern, die keine fortsetzbaren Uploads unterstützen (wie einfaches WebDAV), starten Wiederholungsversuche die Datei neu, aber der gesamte Job läuft weiter, ohne bereits abgeschlossene Dateien erneut zu übertragen.

Reduzieren Sie die gleichzeitigen Übertragungen bei Jobs mit großen Dateien. Das Setzen von **Number of file transfers** auf 2–4 verringert die maximale Bandbreitenanforderung und die Konkurrenz um Verbindungs-Slots — die zugrunde liegende Ursache vieler Timeout-Fehler in überlasteten Netzwerken.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting retry and concurrency options for large file transfer in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie den Log-Tab nach einem fehlgeschlagenen Upload einer großen Datei auf Timeout-Fehlermeldungen.
3. Fügen Sie `--s3-chunk-size 128M` und `--timeout 5m` zu den Global Rclone Flags in den Settings hinzu.
4. Stellen Sie die gleichzeitigen Übertragungen auf 2–4 ein und aktivieren Sie 3–5 Wiederholungsversuche im Sync-Job-Assistenten.

Mit der richtigen Chunk-Größe und Retry-Konfiguration verarbeitet RcloneView Multi-GB-Uploads zuverlässig — selbst bei unvollkommenen Netzwerkverbindungen.

---

**Verwandte Anleitungen:**

- [Große Dateien mit RcloneView per Google Drive Sync hochladen](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Langsame Cloud-Uploads beheben — Geschwindigkeitsoptimierung mit RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [S3-Multipart-Upload-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
