---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "Storj mit Backblaze B2 synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - alex
description: "Synchronisieren Sie Dateien von Storj-dezentralem Speicher zu Backblaze B2 mit RcloneView. Bewahren Sie eine redundante Kopie Ihrer S3-kompatiblen Daten außerhalb des Netzwerks auf."
keywords:
  - Storj zu Backblaze B2
  - Storj synchronisieren
  - Storj Backup
  - Backblaze B2 Synchronisation
  - Backup für dezentralen Speicher
  - Storj RcloneView
  - S3-kompatible Speichersynchronisation
  - Cloud-zu-Cloud-Backup
  - Objektspeicher-Redundanz
  - RcloneView Synchronisation
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Storj mit Backblaze B2 synchronisieren — Cloud-Backup mit RcloneView

> Bewahren Sie mit RcloneView eine redundante, zentral gehostete Kopie Ihrer dezentralen Storj-Speicherdaten auf Backblaze B2 auf — ein Job, zwei sehr unterschiedliche Speicherarchitekturen.

Storj verteilt verschlüsselte Datei-Shards über ein unabhängiges Node-Netzwerk, was hervorragend für Zensurresistenz und Kosten ist, bedeutet aber auch, dass Teams oft ein konventionelles, zentral gehostetes Backup als zweite Schutzebene wünschen. Backblaze B2 erfüllt diese Rolle gut: ein standardmäßiger S3-kompatibler Bucket mit unkomplizierter Abrufbarkeit. RcloneView verbindet sich mit beiden über seine S3-kompatible Remote-Unterstützung und verschiebt Daten direkt zwischen ihnen, ohne ein lokales Staging-Laufwerk.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Storj und Backblaze B2 verbinden

Fügen Sie Storj als Remote in RcloneView hinzu, indem Sie je nach Konfiguration Ihres Projekts entweder den S3-kompatiblen Gateway-Endpunkt und den Zugriffs-Grant oder das native Storj-Zugriffsschlüsselpaar verwenden. Fügen Sie Backblaze B2 separat mit Ihrer Application Key ID und Ihrem Application Key aus der B2-Konsole hinzu. Beide Remotes werden dann als durchsuchbare Dateibäume nebeneinander in den Explorer-Bereichen angezeigt, sodass Sie die Bucket-Struktur und Objektanzahl bestätigen können, bevor Sie einen Synchronisationsjob erstellen.

RcloneView bindet über 90 Anbieter in einem Fenster unter Windows, macOS und Linux ein und synchronisiert sie, sodass dieselbe Oberfläche, die Sie für Storj und B2 verwenden, auch alle anderen Clouds bearbeitet, die bereits in Ihrem Stack vorhanden sind.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Den Synchronisationsjob erstellen

Erstellen Sie einen Einweg-Synchronisationsjob mit Ihrem Storj-Bucket als Quelle und einem Backblaze-B2-Bucket als Ziel — „Nur Ziel ändern“ hält B2 als reines Spiegelbild, das niemals zurück nach Storj schreibt. Aktivieren Sie im Schritt Erweiterte Einstellungen (Advanced Settings) den Prüfsummenvergleich, damit Dateien anhand von Hash und Größe statt nur der Änderungszeit abgeglichen werden — wichtig, wenn sich Objektmetadaten zwischen zwei unterschiedlichen Speicher-Backends unterschiedlich verhalten.

Für ein Team, das einen dezentralen Datensatz archiviert — etwa eine Forschungsgruppe mit 4 TB an fragmentiertem Videomaterial auf Storj — lässt sich mit dem Schritt Filtereinstellungen (Filtering) der erste Durchlauf nach Dateialter oder -erweiterung eingrenzen, sodass Sie die Pipeline an einer Teilmenge validieren können, bevor Sie sich auf die vollständige Übertragung festlegen. Sobald die erste Synchronisation abgeschlossen ist, verschieben geplante Wiederholungen nur neue oder geänderte Objekte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

Führen Sie zuerst einen Probelauf (Dry Run) aus. Er listet jedes Objekt auf, das kopiert würde, ohne etwas zu übertragen — der sicherste Weg, den Umfang zu bestätigen, bevor Daten zwischen zwei Anbietern mit unterschiedlichen Preis- und Abrufmerkmalen verschoben werden.

## Übertragung überwachen und verifizieren

Verfolgen Sie den Fortschritt im Tab Übertragung (Transferring) der unteren Info-Ansicht — Dateianzahl, Übertragungsgeschwindigkeit und Fertigstellungsprozentsatz werden während der Synchronisation live aktualisiert. Öffnen Sie nach Abschluss den Ordnervergleich (Folder Compare) zwischen der Storj-Quelle und dem B2-Ziel, um zu bestätigen, dass jedes Objekt angekommen ist und in der Größe übereinstimmt, und erfassen Sie so alle Objekte, die aufgrund eines Netzwerkproblems auf einer der beiden Seiten mittendrin fehlgeschlagen sind.

Der Job-Verlauf (Job History) führt eine dauerhafte Aufzeichnung jedes Synchronisationslaufs, einschließlich Dauer, insgesamt verschobener Datenmenge und Status, sodass Sie einen Prüfpfad haben, der genau zeigt, wann Ihr B2-Backup zuletzt mit Storj auf dem aktuellen Stand gebracht wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Storj über den S3-kompatiblen Endpunkt und die Zugriffsdaten als Remote hinzu.
3. Fügen Sie Backblaze B2 mit Ihrer Application Key ID und Ihrem Application Key hinzu.
4. Erstellen Sie einen Einweg-Synchronisationsjob, führen Sie einen Probelauf aus und führen Sie ihn dann aus, um Storj auf B2 zu spiegeln.

Eine zweite, zentral gehostete Kopie dezentraler Speicherdaten schließt eine leicht übersehene Lücke in den meisten Backup-Strategien, und RcloneView macht deren Pflege zu einer geplanten, GUI-gesteuerten Routine statt zu einer manuellen Aufgabe.

---

**Verwandte Anleitungen:**

- [Storj dezentralen Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Backblaze B2 mit RcloneView zu Wasabi migrieren](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [Storj-Upload-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
