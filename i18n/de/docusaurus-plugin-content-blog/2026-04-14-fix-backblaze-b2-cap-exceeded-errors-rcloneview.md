---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "Backblaze B2 Cap-Exceeded-Fehler beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Backblaze B2 Cap-Exceeded-Fehler in RcloneView diagnostizieren und beheben. Steuern Sie Übertragungsraten, verwalten Sie tägliche Limits und halten Sie Ihre B2-Backups zuverlässig am Laufen."
keywords:
  - Backblaze B2 Cap-Exceeded-Fehler
  - B2 tägliches Cap-Limit rclone
  - Backblaze B2 Fehler beheben RcloneView
  - B2 Übertragungslimit überschritten
  - Backblaze B2 Fehlerbehebung
  - rclone B2 Rate-Limit
  - Backblaze B2 Backup-Fehler
  - B2 Upload-Cap-Fix
tags:
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 Cap-Exceeded-Fehler beheben — Lösung mit RcloneView

> Das tägliche Download-Limit von Backblaze B2 kann Übertragungen mitten in der Synchronisation stoppen. So diagnostizieren Sie Cap-Exceeded-Fehler in RcloneView und konfigurieren Ihre Jobs, damit sie innerhalb der Limits bleiben.

Backblaze B2 bietet großzügigen kostenlosen Egress zu Cloudflare-gepeerten Netzwerken, aber Downloads zu nicht gepeerten Zielen verbrauchen ein tägliches Limit (Cap). Wird dieses Cap erreicht, gibt B2 HTTP-403-Fehler mit der Meldung "cap exceeded" zurück, wodurch RcloneView-Synchronisationsjobs fehlschlagen oder stocken. Diese Anleitung zeigt Ihnen, wie Sie den Fehler identifizieren, Ihre Übertragungskonfiguration anpassen und Jobs so planen, dass sie innerhalb der täglichen Limits Ihres B2-Kontos bleiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einen Cap-Exceeded-Fehler identifizieren

Wenn ein B2-Cap überschritten wird, zeigt RcloneView den Fehler im **Log-Tab** am unteren Rand der Oberfläche an. Sie sehen Einträge mit `403 Forbidden` und der Meldung `Transaction cap exceeded` oder `Download cap exceeded`. Der Übertragungsmonitor im Tab "Übertragung" zeigt, dass der betroffene Job bei 0 B/s stagniert.

Öffnen Sie das Rclone-Terminal (Terminal-Tab) und führen Sie `rclone about b2-remote:` aus, um Ihre aktuelle Speicher- und Transaktionsnutzung zu prüfen. Das Terminal zeigt zwar nicht das genaue Cap-Limit an (das wird in der Backblaze-Konsole festgelegt), bestätigt aber, dass der Remote erreichbar ist, und zeigt den allgemeinen Kontostatus.

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## Übertragungseinstellungen anpassen, um Cap-Überschreitungen zu vermeiden

Die effektivste Lösung besteht darin, die Übertragungsbandbreite zu drosseln, um Downloads auf mehrere Tage zu verteilen. Fügen Sie in den Global Rclone Flags von RcloneView (Settings-Tab → Embedded Rclone → Global Rclone Flags) `--bwlimit 10M` hinzu, um die Bandbreite auf 10 MB/s zu begrenzen. Dies reduziert den täglichen Datenverbrauch und hält Übertragungen bei großen Synchronisationen oder Wiederherstellungen innerhalb Ihres B2-Caps.

Bei Jobs, die vom Scheduler ausgelöst werden, sollten Sie diese über den Tag verteilen. Anstatt eine 200-GB-Wiederherstellung um 6 Uhr morgens auszuführen, teilen Sie den Job nach Ordnertiefe auf — verwenden Sie Filterregeln, um zunächst `Archive/2023/` und anschließend `Archive/2024/` in einem separaten Job um 12 Uhr mittags zu verarbeiten. Die benutzerdefinierten Filterregeln von RcloneView in Schritt 3 des Sync-Assistenten machen dies einfach: Nutzen Sie den Ausschluss von Ordnerpfaden, um jede Charge zu isolieren.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## Eine fehlgeschlagene Synchronisation nach Cap-Reset wiederherstellen

Die Caps von Backblaze B2 werden täglich um Mitternacht Pacific Time zurückgesetzt. Wenn ein Job aufgrund eines Cap-Exceeded-Fehlers fehlschlägt, ist die Synchronisation von RcloneView idempotent — wenn Sie denselben Job nach dem Reset erneut ausführen, wird er dort fortgesetzt, wo er aufgehört hat, und bereits übertragene Dateien werden übersprungen. Mit der Funktion "Ordner vergleichen" können Sie überprüfen, welche Dateien vor dem Fehlschlag abgeschlossen wurden, indem Sie Quelle und Ziel vergleichen.

Um sicherzugehen, aktivieren Sie **Gesamte Synchronisation bei Fehler wiederholen** in Schritt 2 des Job-Assistenten (auf 3 Wiederholungen einstellen) und stellen Sie sicher, dass das Wiederholungsintervall lang genug ist, damit sich das Cap zurücksetzen kann. Überprüfen Sie regelmäßig den Tab "Job-Verlauf", um Fehler frühzeitig zu erkennen und den Cap-Status vor der Planung neuer Übertragungen zu überprüfen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie den Log-Tab nach einem fehlgeschlagenen B2-Job auf `403 cap exceeded`-Fehler.
3. Fügen Sie `--bwlimit` zu den Global Rclone Flags hinzu, um den täglichen Datenverbrauch zu drosseln.
4. Führen Sie den Synchronisationsjob erneut aus, nachdem das tägliche Cap zurückgesetzt wurde — RcloneView überspringt bereits übertragene Dateien automatisch.

Mit sorgfältiger Planung und Bandbreitenbegrenzung bleibt Backblaze B2 auch bei Einhaltung der täglichen Cap-Grenzen ein kosteneffizientes Backup-Ziel.

---

**Weiterführende Anleitungen:**

- [Backblaze B2 mit RcloneView zu AWS S3 migrieren](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Unterbrochene Cloud-Synchronisation mit Netzwerk-Wiederholung in RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [Benutzerdefinierte Rclone-Flags und erweiterte Optionen in RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
