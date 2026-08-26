---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - robin
description: "Verbinden Sie Box for Business mit RcloneView, um Unternehmensdateien über eine einzige plattformübergreifende GUI zu durchsuchen, zu synchronisieren und zu sichern."
keywords:
  - box for business
  - box Enterprise-Cloud-Speicher
  - RcloneView box business
  - box_sub_type enterprise
  - box business Dateien synchronisieren
  - box for business Backup
  - box Enterprise-Konto verwalten
  - box Cloud-Speicher GUI
  - box business Dateiverwaltung
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business verwalten — Dateien synchronisieren und sichern mit RcloneView

> Box for Business-Konten benötigen bei der Verbindung eine zusätzliche Einstellung — RcloneView übernimmt das und bietet Ihnen dann einen vollständigen Dateimanager obendrauf.

Box for Business läuft auf einem anderen Kontotyp als ein persönliches Box-Konto, und die korrekte Verbindung erfordert die Aktivierung eines Enterprise-Flags während der Remote-Einrichtung. Eine Designagentur mit gemeinsam genutzten Enterprise-Ordnern über ein Dutzend Plätze hinweg kann sich keinen defekten Remote leisten, der stillschweigend den falschen Arbeitsbereich durchsucht. RcloneView fügt die richtige Einstellung während der Einrichtung hinzu und behandelt Box for Business dann wie jeden anderen Remote — durchsuchbar, synchronisierbar und einbindbar aus einem einzigen Fenster.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ein Box for Business-Konto verbinden

Box for Business verwendet dieselbe OAuth-Browseranmeldung wie ein persönliches Box-Konto, erfordert jedoch, dass bei der Remote-Erstellung `box_sub_type = enterprise` gesetzt wird, damit RcloneView den richtigen Enterprise-Arbeitsbereich anspricht statt eines persönlichen Ordnerbaums. Öffnen Sie den Reiter Remote > New Remote, wählen Sie Box, schließen Sie die Browser-Anmeldung ab und legen Sie den Untertyp fest, bevor Sie speichern. Anders als reine Mount-Tools synchronisiert RcloneView auch und vergleicht Ordner auf dem Box for Business-Remote — mit der FREE-Lizenz.

Sobald die Verbindung hergestellt ist, erscheint der Remote wie jeder andere Cloud-Speicher in der Explorer-Reiterleiste. Sie können Enterprise-Ordner durchsuchen, Dateianzahl und -größe in der Fußzeilen-Zusammenfassung prüfen und zwischen mehreren Box-Arbeitsbereichen wechseln, ohne sich jedes Mal erneut authentifizieren zu müssen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Enterprise-Ordner sichern

Ein Sync-Job schützt Box for Business-Inhalte auf die gleiche Weise wie jeden anderen Remote: Konfigurieren Sie Quelle und Ziel in Schritt 1 des Sync-Assistenten, wählen Sie die einseitige Option „Nur Ziel ändern" für eine stabile Backup-Richtung, und fügen Sie in Schritt 3 Filter hinzu, um temporäre Dateien oder übergroße Anhänge auszuschließen. Für Teams, die Verträge oder Kundenprojekte bearbeiten, hält eine nächtliche einseitige Synchronisierung zu einem lokalen Speicher oder einem zweiten Cloud-Konto eine Wiederherstellungskopie außerhalb des gemeinsam genutzten Arbeitsbereichs bereit.

Der Job-Verlauf (Job History) verfolgt anschließend jeden Durchlauf — Status, Dateianzahl, übertragene Größe und Dauer —, sodass ein Administrator bestätigen kann, dass Backups tatsächlich abgeschlossen wurden, statt anzunehmen, dass ein Zeitplan im Hintergrund stillschweigend gelaufen ist.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## Box for Business als lokales Laufwerk einbinden

Durch das Einbinden (Mount) wird das Enterprise-Konto zu einem Laufwerksbuchstaben oder Einhängepunkt, den jede Desktop-Anwendung direkt öffnen kann, ohne Dateien vorher herunterzuladen. Das ist wichtig für Teams, die Design- oder Dokumentensoftware verwenden, die lokale Dateipfade statt eines Web-Upload-Dialogs erwartet. Konfigurieren Sie den Cache-Modus als „writes" für eine Balance zwischen Reaktionsfähigkeit und Zuverlässigkeit, und aktivieren Sie Read only für Prüfer, die freigegebene Inhalte nicht ändern sollten.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen neuen Box-Remote und aktivieren Sie den Enterprise-Untertyp während der Einrichtung.
3. Konfigurieren Sie einen einseitigen Sync-Job, um kritische Enterprise-Ordner zu sichern.
4. Binden Sie den Remote für Teams ein, die direkten lokalen Dateizugriff benötigen.

Enterprise-Konten verdienen dieselbe zuverlässige Synchronisierungs- und Backup-Abdeckung wie jeder andere Cloud-Speicher — RcloneView sorgt lediglich dafür, dass die Verbindung von Anfang an korrekt konfiguriert ist.

---

**Verwandte Anleitungen:**

- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox for Business-Speicher verwalten — Synchronisieren und Sichern von Dateien mit RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Box Storage mit RcloneView als Netzlaufwerk einbinden für nahtlosen Team-Zugriff](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
