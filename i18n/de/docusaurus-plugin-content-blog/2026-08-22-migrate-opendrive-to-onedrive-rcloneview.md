---
slug: migrate-opendrive-to-onedrive-rcloneview
title: "Migration von OpenDrive zu OneDrive — Dateien übertragen mit RcloneView"
authors:
  - alex
description: "Verschieben Sie Dateien von OpenDrive zu Microsoft OneDrive mit der Cloud-zu-Cloud-Übertragung, der Dry-Run-Vorschau und der Job-History-Verfolgung von RcloneView."
keywords:
  - opendrive zu onedrive migrieren
  - opendrive onedrive übertragung
  - rcloneview opendrive migration
  - opendrive onedrive synchronisation
  - cloud-zu-cloud migration
  - opendrive alternative
  - onedrive migrationstool
  - opendrive dateien übertragen
  - multi-cloud dateiübertragung
  - cloud speicher migration gui
tags:
  - RcloneView
  - opendrive
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migration von OpenDrive zu OneDrive — Dateien übertragen mit RcloneView

> Verschieben Sie die Dateien eines OpenDrive-Kontos direkt in Microsoft OneDrive mit RcloneView, ohne den Umweg über einen lokalen Download-dann-Upload-Schritt.

Speicher auf weniger Anbieter zu konsolidieren, ist ein häufiger Grund, OpenDrive zu verlassen — besonders für Teams, die bereits auf Microsoft 365 für die Zusammenarbeit standardisiert haben. RcloneView verbindet sich mit beiden Diensten im selben Fenster und überträgt Daten direkt zwischen ihnen, sodass die Migration nicht davon abhängt, lokalen Speicherplatz mit einer vorübergehenden Kopie von allem zu füllen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Fügen Sie OpenDrive über den New-Remote-Assistenten als Remote hinzu und geben Sie die angeforderten Kontodaten ein. Fügen Sie dann OneDrive als zweites Remote über die browserbasierte OAuth-Anmeldung hinzu. Beide Remotes erscheinen als separate Tabs im Explorer-Panel, und RcloneView bindet ein UND synchronisiert 90+ Anbieter aus einem Fenster, unter Windows, macOS und Linux, sodass nach dem Verbinden beider Konten kein separates Tool mehr nötig ist.

Mit beiden Remotes nebeneinander sichtbar löst Drag-and-drop zwischen ihnen eine direkte Kopie aus — das Ziehen zwischen unterschiedlichen Remotes kopiert immer, statt zu verschieben, sodass die ursprünglichen OpenDrive-Dateien unangetastet bleiben, bis Sie die Übertragung überprüft haben.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Die Migration als Sync-Job ausführen

Für eine vollständige Kontomigration statt einer einmaligen Ordnerkopie ist der 4-Schritte-Sync-Assistent der verlässlichere Weg. Wählen Sie das OpenDrive-Remote und den Ordner als Quelle, OneDrive als Ziel, und wählen Sie einseitige Synchronisation, sodass das Ziel nach der Quelle aufgebaut wird, ohne dass Änderungen zurückfließen könnten. In den erweiterten Einstellungen können Sie die Anzahl gleichzeitiger Dateiübertragungen anpassen und den Prüfsummenvergleich aktivieren, der bestätigt, dass jede Datei anhand von Hash und Größe übereinstimmt, statt sich allein auf die Größe zu verlassen — sinnvoll bei einer Migration, bei der die Datenintegrität wichtiger ist als reine Geschwindigkeit.

Vor dem eigentlichen Durchlauf zeigt ein Dry Run genau, welche Dateien kopiert werden, sodass Sie Unerwartetes — etwa einen veralteten freigegebenen Ordner — erkennen können, bevor es in OneDrive landet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from OpenDrive to OneDrive with RcloneView Sync" class="img-large img-center" />

## Überprüfen, dass die Übertragung sauber abgeschlossen wurde

Nach Abschluss der Synchronisation prüft die Compare-Funktion die OpenDrive-Quelle nebeneinander mit dem OneDrive-Ziel und markiert Dateien, die nur links, nur rechts oder mit abweichender Größe vorhanden sind. So werden unvollständige Übertragungen oder übersprungene Dateien erkannt, bevor Sie das OpenDrive-Konto für sicher schließbar halten, und alle in der Vergleichsansicht sichtbaren Lücken lassen sich direkt von dort kopieren.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and OneDrive after migration in RcloneView" class="img-large img-center" />

## Die Migration in Job History verfolgen

Jeder Lauf des Migrationsjobs — ob ein manueller erneuter Durchlauf, um Nachzügler zu erfassen, oder eine Wiederholung nach einem Netzwerkproblem — wird mit Startzeit, Dauer, Status, Gesamtgröße und Dateianzahl in Job History protokolliert. Dieser Eintrag ist nützlich, um später genau zu bestätigen, was wann verschoben wurde, falls die Migration nachträglich dokumentiert werden muss.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie sowohl OpenDrive als auch OneDrive als Remotes hinzu.
3. Konfigurieren Sie einen einseitigen Sync-Job von OpenDrive zu OneDrive, führen Sie zuerst einen Dry Run aus und starten Sie dann die Übertragung.
4. Verwenden Sie Compare, um zu prüfen, dass jede Datei angekommen ist, bevor Sie das OpenDrive-Konto stilllegen.

Eine direkte Cloud-zu-Cloud-Migration hält den Prozess schnell und vermeidet den lokalen Speicherengpass, der entsteht, wenn zuerst alles heruntergeladen werden muss.

---

**Weitere Anleitungen:**

- [OneDrive-Speicher verwalten — Synchronisieren und Sichern von Dateien mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [OpenDrive zu Google Drive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-opendrive-to-google-drive-rcloneview)
- [OpenDrive zu AWS S3 sichern — Externer Speicher mit RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)

<CloudSupportGrid />
