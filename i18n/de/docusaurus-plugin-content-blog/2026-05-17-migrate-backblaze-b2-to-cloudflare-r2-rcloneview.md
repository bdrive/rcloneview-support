---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "Backblaze B2 zu Cloudflare R2 migrieren — Dateien übertragen mit RcloneView"
authors:
  - alex
description: "Migrieren Sie Ihren Backblaze B2 Objektspeicher mit RcloneView zu Cloudflare R2. Schritt-für-Schritt-Anleitung mit grafischer Oberfläche, Prüfsummenverifizierung und ganz ohne CLI-Befehle."
keywords:
  - Backblaze B2 zu Cloudflare R2 Migration
  - B2 zu R2 migrieren
  - Cloudflare R2 Migrationsanleitung
  - RcloneView Cloud-Migration
  - B2 zu R2 Übertragung
  - Objektspeicher-Migration
  - Backblaze zu Cloudflare
  - Cloud-Speicher-Migrationstool
  - S3-kompatible Migration
  - B2-Bucket mit rcloneview übertragen
tags:
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 zu Cloudflare R2 migrieren — Dateien übertragen mit RcloneView

> Das Verschieben eines B2-Buckets zu Cloudflare R2 ist mit RcloneView eine unkomplizierte Cloud-zu-Cloud-Operation — fügen Sie beide Remotes hinzu, richten Sie einen Kopierjob ein und überprüfen Sie die Integrität mit einem Prüfsummenvergleich.

Backblaze B2 und Cloudflare R2 sind beide beliebte S3-kompatible Objektspeicherplattformen, und viele Teams müssen im Zuge sich ändernder Infrastrukturanforderungen Daten zwischen ihnen verschieben. Anstatt die Daten lokal herunterzuladen und erneut hochzuladen, wickelt RcloneView die Übertragung serverseitig über die Cloud-zu-Cloud-Engine von rclone ab — so können Sie ganze Buckets über eine grafische Oberfläche migrieren, ohne einen einzigen Befehl zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2 und Cloudflare R2 als Remotes hinzufügen

Bevor Sie die Migration starten, verbinden Sie beide Speicherkonten in RcloneView.

**Backblaze B2:** Öffnen Sie **Remote** > **New Remote**, wählen Sie Backblaze B2 aus und geben Sie Ihre Application Key ID und Ihren Application Key ein. RcloneView listet Ihre B2-Buckets nach dem Speichern im Explorer auf.

**Cloudflare R2:** Fügen Sie einen zweiten Remote hinzu, wählen Sie Cloudflare R2 und geben Sie Ihr API-Token, Ihre Account-ID und den R2-Endpunkt an. Wie bei B2 erscheinen Ihre R2-Buckets sofort im Explorer.

Sobald beide Remotes verbunden sind, können Sie sie in der Dual-Pane-Oberfläche von RcloneView nebeneinander durchsuchen und bestätigen, dass der Quell-Bucket und der Ziel-Bucket korrekt sind, bevor Sie die Migration starten.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Die Cloud-zu-Cloud-Migration durchführen

Öffnen Sie den **Job Manager** und erstellen Sie einen neuen Copy- oder Sync-Job. Legen Sie Ihren Backblaze-B2-Bucket (oder ein bestimmtes Präfix darin) als Quelle und den Cloudflare-R2-Bucket als Ziel fest.

Konfigurieren Sie im Schritt Advanced Settings die Anzahl der gleichzeitigen Dateiübertragungen entsprechend Ihrer Netzwerkkapazität — höhere Werte beschleunigen Buckets mit vielen kleinen Dateien, während große Medienarchive von Multi-Thread-Übertragungen profitieren. Aktivieren Sie die **Prüfsummenverifizierung**, damit B2 und R2 die Dateiintegrität per Hash-Vergleich abgleichen, anstatt sich nur auf Größe und Änderungsdatum zu verlassen.

Führen Sie vor der eigentlichen Übertragung einen **Dry Run** aus. Die Vorschau zeigt jedes Objekt, das kopiert wird, sodass Sie unerwartete Filtertreffer oder Pfadabweichungen erkennen können, bevor Sie den Job endgültig starten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Die Übertragung in Echtzeit überwachen

Sobald der Job gestartet ist, zeigt der Tab **Transferring** in der unteren Info View den Live-Fortschritt: Übertragungsgeschwindigkeit pro Datei, Gesamtdurchsatz sowie die Anzahl abgeschlossener gegenüber verbleibender Objekte. Bei großen B2-Buckets — etwa einem Videoarchiv mit Zehntausenden von Dateien — ermöglicht die Echtzeitansicht, Stockungen frühzeitig zu erkennen und den Job bei Bedarf abzubrechen oder anzupassen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

Nach Abschluss der Übertragung finden Sie im Tab **Job History** eine vollständige Zusammenfassung: übertragene Gesamtgröße, Übertragungsgeschwindigkeit, Dateianzahl und Endstatus. Ein prüfsummenverifizierter Lauf ohne Fehler bedeutet, dass Ihr R2-Bucket eine exakte, Byte-für-Byte-Kopie der ursprünglichen B2-Daten ist.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

Mit einer **PLUS-Lizenz** können Sie inkrementelle Sync-Jobs planen, um R2 während einer gestaffelten Umstellung auf dem aktuellen Stand zu halten, während neue Objekte zu B2 hinzugefügt werden — so führen Sie die Migration in mehreren Wellen statt in einem einzigen großen Durchgang durch.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Backblaze-B2-Konto über **Remote** > **New Remote** hinzu (Application Key ID + Application Key).
3. Fügen Sie Ihr Cloudflare-R2-Konto hinzu (API-Token + Account-ID + Endpunkt).
4. Öffnen Sie den **Job Manager**, erstellen Sie einen Copy-Job von B2 zu R2 und aktivieren Sie die Prüfsummenverifizierung.
5. Führen Sie zunächst einen Dry Run aus, starten Sie dann die eigentliche Migration und überprüfen Sie die Ergebnisse in der Job History.

RcloneView macht CLI-Kenntnisse oder einen zwischengeschalteten lokalen Speicher überflüssig — Ihre B2-Daten wandern direkt zu R2, mit vollständig integrierter Integritätsprüfung.

---

**Weiterführende Anleitungen:**

- [Backblaze B2 Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Cloudflare R2 Cloud-Speicher verwalten — Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Cloudflare R2 zu Backblaze B2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
