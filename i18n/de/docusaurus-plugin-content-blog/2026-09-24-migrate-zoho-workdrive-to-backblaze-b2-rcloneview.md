---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "Zoho WorkDrive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - steve
description: "Verschieben Sie Dateien direkt von Zoho WorkDrive zu Backblaze B2 mit RcloneView — mit Cloud-zu-Cloud-Übertragung, Dry-Run-Vorschau und Job-Planung."
keywords:
  - Zoho WorkDrive zu Backblaze B2 migrieren
  - Zoho WorkDrive Backup
  - Backblaze B2 Migration
  - Cloud-zu-Cloud-Übertragung
  - RcloneView Migrationsanleitung
  - Zoho WorkDrive zu B2
  - Cloud-Speicher Migrationstool
  - rclone Zoho WorkDrive
  - Cloud-übergreifende Dateiübertragung
  - günstiges Cloud-Archiv
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Zoho-WorkDrive-Dateien direkt zu Backblaze B2, ohne zuerst über eine lokale Festplatte zu gehen.

Teams, die Zoho WorkDrive für die tägliche Zusammenarbeit nutzen, brauchen oft eine günstigere Langzeit-Speicherstufe für abgeschlossene Projekte und alte Kundenordner — Backblaze B2 ist eine gängige Wahl für diese Archivebene. RcloneView verbindet beide Remotes in einem Fenster und kopiert Dateien direkt von Cloud zu Cloud, sodass ein mit Dokumenten und Medien gefülltes gemeinsames Laufwerk nicht erst über den lokalen Speicher eines Laptops herunter- und wieder hochgeladen werden muss. RcloneView bindet ein und synchronisiert 90+ Anbieter aus einem einzigen Fenster auf Windows, macOS und Linux, sodass das Durchsuchen von Zoho WorkDrive und das Archivieren zu Backblaze B2 niemals einen Anwendungswechsel erfordert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive und Backblaze B2 verbinden

Fügen Sie Zoho WorkDrive über New Remote als Remote hinzu und wählen Sie die OAuth-basierte Einrichtung; da Zoho WorkDrive während der Konfiguration eine Regionsauswahl erfordert, wählen Sie das Rechenzentrum, das zu Ihrem Konto passt, bevor Sie die Einrichtung abschließen. Backblaze B2 verwendet stattdessen die Eingabe von Zugangsdaten — geben Sie die Application Key ID und den Application Key von der B2-Schlüsselverwaltungsseite ein, und RcloneView validiert die Verbindung vor dem Speichern. Beide Remotes erscheinen dann als Tabs in den Explorer-Panels und sind bereit, nebeneinander durchsucht zu werden.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Zoho WorkDrive und Backblaze B2 als Remotes in RcloneView" class="img-large img-center" />

Nach der Verbindung öffnen Sie den Remote Manager, um beide Einträge zu bestätigen und Einstellungen wie den Ordnerbereich vor der ersten Übertragung anzupassen.

## Die Cloud-zu-Cloud-Übertragung durchführen

Öffnen Sie ein Zwei-Panel-Layout mit Zoho WorkDrive auf der einen und Ihrem Backblaze-B2-Bucket auf der anderen Seite, und ziehen Sie dann die zu migrierenden Ordner hinüber — das Ziehen zwischen zwei unterschiedlichen Remotes führt immer eine Kopie aus, sodass die Originale in Zoho WorkDrive unverändert bleiben, bis Sie zum Aufräumen bereit sind. Für größere Migrationen erstellen Sie stattdessen einen Sync-Job: Wählen Sie Zoho WorkDrive als Quelle und den B2-Bucket als Ziel, legen Sie die Anzahl gleichzeitiger Dateiübertragungen in den Advanced Settings fest, und führen Sie zuerst einen Dry Run aus, um genau zu sehen, welche Dateien verschoben werden, bevor tatsächlich etwas übertragen wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragungsjob von Zoho WorkDrive zu Backblaze B2" class="img-large img-center" />

## Die Migration überprüfen und planen

Aktivieren Sie den Prüfsummenvergleich in den Advanced Settings des Sync-Jobs, damit RcloneView Dateien anhand von Hash und Größe abgleicht statt nur nach Dateigröße, und legen Sie die Anzahl der Wiederholungsversuche fest, falls ein großer Batch auf einen vorübergehenden Netzwerkfehler stößt. Nach Abschluss des Jobs prüfen Sie in der Job History die Gesamtzahl übertragener Dateien, die benötigte Zeit und alle fehlerhaften Elemente, bevor Sie den Quellordner archivieren.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mit einer abgeschlossenen Übertragung von Zoho WorkDrive zu Backblaze B2" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Zoho-WorkDrive-Remote hinzu und wählen Sie die richtige Region.
3. Fügen Sie Ihren Backblaze-B2-Remote mit Ihrer Application Key ID und Ihrem Key hinzu.
4. Führen Sie einen Dry Run aus, führen Sie dann den Sync- oder Kopier-Job aus und bestätigen Sie die Ergebnisse in der Job History.

Eine saubere Cloud-zu-Cloud-Migration hält Ihren Zoho-WorkDrive-Arbeitsbereich schlank und gibt fertigen Dateien zugleich einen dauerhaften, kostengünstigeren Platz.

---

**Weitere Anleitungen:**

- [Zoho WorkDrive verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Backblaze B2 verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Zoho WorkDrive mit OneDrive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
