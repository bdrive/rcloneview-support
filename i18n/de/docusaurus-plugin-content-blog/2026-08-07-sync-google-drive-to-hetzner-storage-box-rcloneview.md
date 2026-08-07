---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "Google Drive mit Hetzner Storage Box synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - steve
description: "Synchronisieren Sie Google-Drive-Dateien mit einer Hetzner Storage Box für ein preisgünstiges Offsite-Backup mithilfe der anbieterübergreifenden Sync-Jobs von RcloneView."
keywords:
  - Google Drive mit Hetzner synchronisieren
  - Google Drive Hetzner Storage Box Backup
  - Hetzner Storage Box rclone
  - Google Drive Offsite-Backup
  - günstige Cloud-Speicher-Synchronisation
  - europäisches Cloud-Speicher-Backup
  - Google Drive RcloneView Synchronisation
  - Hetzner Box Backup
  - Google Drive SFTP Backup
  - Cloud-zu-Cloud-Backup
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit Hetzner Storage Box synchronisieren — Cloud-Backup mit RcloneView

> Bewahren Sie eine kostengünstige Zweitkopie Ihrer Google-Drive-Dateien auf einer Hetzner Storage Box auf, ohne den Desktop zu verlassen oder ein einziges Skript zu schreiben.

Google Drive ist praktisch für die tägliche Zusammenarbeit, aber allein nicht als langfristiges Backup-Ziel konzipiert — eine zweite Kopie auf unabhängiger Infrastruktur schützt vor Kontosperrungen, versehentlichen Löschungen oder unerwarteten Speicherplatzüberschreitungen. Die Hetzner Storage Box ist wegen ihrer niedrigen Kosten pro Terabyte eine beliebte Wahl dafür, und RcloneView verbindet beide direkt über einen geplanten Sync-Job — ganz ohne Kommandozeilen-Skripting. RcloneView bindet ein (mount) und synchronisiert (Synchronisation) beide Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Fügen Sie zunächst Google Drive über den Remote Manager per Standard-OAuth-Browser-Login hinzu — eine API-Schlüsseleingabe ist nicht nötig, da RcloneView den Authentifizierungsablauf automatisch übernimmt. Fügen Sie anschließend die Hetzner Storage Box als SFTP-Remote hinzu und geben Sie im Bildschirm für die Anmeldedateneingabe (Credential Entry) die Hostadresse der Box sowie Ihre SSH-Zugangsdaten ein.

Sobald beide Remotes als Tabs im Explorer-Panel erscheinen, öffnen Sie ein geteiltes Panel-Layout, um sie nebeneinander zu durchsuchen. Das ist eine nützliche Kontrolle, bevor Sie einen automatisierten Job einrichten — bestätigen Sie, dass die Zielordnerstruktur auf der Storage Box Ihren Erwartungen entspricht, bevor Sie eine Synchronisation darauf ausrichten.

<img src="/support/images/en/blog/new-remote.png" alt="Google Drive und Hetzner Storage Box als Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Den Sync-Job konfigurieren

Wählen Sie im Sync-Assistenten Google Drive als Quelle und die Hetzner Storage Box als Ziel und wählen Sie dann die Synchronisationsrichtung **One-way** (Einweg), sodass die Storage Box Google Drive spiegelt, ohne etwas auf der Quelle zu löschen. Wenden Sie in Schritt 3 Filter an, um Dateitypen zu überspringen, die nicht gesichert werden müssen — der Ausschluss von `.tmp`-Dateien oder reinen Google-Docs-Formaten hält das übertragene Volumen kleiner und die Folgeausführungen schneller.

Die Aktivierung des Checksum-Vergleichs in den Advanced Settings sorgt dafür, dass RcloneView nur tatsächlich geänderte Dateien erneut überträgt, statt alle Dateien mit neuerem Änderungsdatum — das ist besonders bei Google Drive wichtig, wo sich Metadaten-Zeitstempel ändern können, ohne dass sich der Inhalt ändert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration eines Einweg-Sync-Jobs von Google Drive zur Hetzner Storage Box in RcloneView" class="img-large img-center" />

## Backup automatisieren und überwachen

Führen Sie zunächst einen Dry Run aus, um genau zu sehen, welche Dateien kopiert werden, und starten Sie dann den Job — verfolgen Sie den Fortschritt live im Tab Transferring der Info View, wo Übertragungsgeschwindigkeit, Dateianzahl und Gesamtgröße angezeigt werden. PLUS-Lizenznehmer können einen Zeitplan im Crontab-Stil hinterlegen, sodass sich die Synchronisation ohne manuellen Eingriff wiederholt, und die Job History hält Dauer und Ergebnis jedes Laufs dauerhaft für spätere Auswertungen fest.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung eines wiederkehrenden Sync-Jobs von Google Drive zur Hetzner Storage Box in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Google Drive per OAuth verbinden und die Hetzner Storage Box als SFTP-Remote hinzufügen.
3. Einen Einweg-Sync-Job mit aktivierten Filtern und Checksum-Vergleich erstellen.
4. Einen Dry Run ausführen, dann die Synchronisation starten und im Tab Transferring überwachen.

Eine Zweitkopie auf unabhängiger, kostengünstiger Infrastruktur ist eine der einfachsten Möglichkeiten, Google-Drive-Daten zu schützen, und RcloneView hält diese Routine ohne manuelles Dateijonglieren am Laufen.

---

**Verwandte Anleitungen:**

- [Hetzner-Storage-Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Dropbox mit Hetzner Storage Box synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [Google-Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
