---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "Azure Files zu OneDrive migrieren — Dateien mit RcloneView übertragen"
authors:
  - casey
description: "Migrieren Sie Azure File Storage mit RcloneView zu OneDrive. Verschieben Sie Geschäftsdateien zwischen Clouds per Drag-and-Drop, Sync-Jobs und Dry-Run-Vorschau."
keywords:
  - azure files zu onedrive migrieren
  - azure file storage migration
  - onedrive cloud-migration
  - azure zu onedrive übertragen
  - cloud-zu-cloud-migration
  - RcloneView azure files
  - RcloneView onedrive
  - azure file storage nach onedrive verschieben
  - cloudübergreifende dateiübertragung
  - business cloud-migrationstool
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Files zu OneDrive migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine komplette Azure File Storage-Freigabe nach OneDrive, ohne die Kommandozeile anzufassen oder zwischen zwei separaten Konsolen hin- und herzuwechseln.

Teams, die Azure File Storage für ein Projekt oder eine Abteilungsfreigabe eingerichtet haben, wachsen häufig darüber hinaus, sobald sich der Rest des Unternehmens auf Microsoft 365 und OneDrive für die tägliche Zusammenarbeit standardisiert. Alles manuell über zwei verschiedene Webportale erneut hochzuladen ist langsam und fehleranfällig. RcloneView öffnet beide Remotes nebeneinander in einem einzigen Fenster und lässt Sie Dateien direkt zwischen ihnen verschieben, sodass die Migration als ein einziger nachverfolgbarer Job abläuft statt als manueller Kopier-und-Einfügen-Marathon. Anders als reine Mount-Tools bietet RcloneView zudem Synchronisierung und Ordnervergleich — bereits mit der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure Files und OneDrive nebeneinander verbinden

Zum Hinzufügen von Azure File Storage benötigen Sie den Speicherkontonamen, den Shared Key und den Freigabenamen von der Seite „Zugriffsschlüssel“ im Azure-Portal — der Remote-Einrichtungsassistent von RcloneView fragt genau diese drei Felder ab. OneDrive hingegen verwendet browserbasiertes OAuth: Klicken Sie auf New Remote, wählen Sie OneDrive und melden Sie sich über das Popup-Fenster an, das RcloneView für Sie öffnet. Es müssen keine API-Schlüssel kopiert oder eingefügt werden.

Sobald beide Remotes konfiguriert sind, öffnen Sie jeden davon in einem eigenen Explorer-Panel im Zwei- (oder Vier-)Fenster-Layout. Auf der einen Seite sehen Sie die Ordnerstruktur der Azure-Freigabe, auf der anderen Ihre OneDrive-Struktur, jeweils mit Dateianzahl und -größe in der Fußzeile des jeweiligen Panels.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Azure File Storage und OneDrive als Remotes in RcloneView" class="img-large img-center" />

## Dateien zwischen den beiden Remotes übertragen oder synchronisieren

Für eine einmalige Migration wählen Sie Ordner oder Dateien im Azure-Files-Panel aus und ziehen sie auf das OneDrive-Panel — das Ziehen zwischen zwei unterschiedlichen Remotes führt eine Kopie aus, sodass die Azure-Quelle unangetastet bleibt, bis Sie bereit sind, sie aufzuräumen. Für eine größere Freigabe verwenden Sie stattdessen den Sync-Assistenten: Wählen Sie Azure Files als Quelle und OneDrive als Ziel und führen Sie dann zunächst einen Dry Run aus, um genau zu sehen, welche Dateien kopiert werden, bevor sich tatsächlich etwas bewegt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Übertragung von Dateien von Azure File Storage zu OneDrive" class="img-large img-center" />

Wenn Sie den Prüfsummenvergleich im Schritt Advanced Settings der Synchronisierung aktivieren, verifiziert RcloneView den Dateiinhalt anhand von Hash und Größe statt nur anhand von Dateinamen — das ist wichtig, wenn eine Migration nachweislich vollständig sein muss.

## Migration automatisieren und Fortschritt verfolgen

Große Freigaben werden selten in einem Durchgang fertig. Speichern Sie die Übertragung als Job im Job Manager, sodass sie erneut ausgeführt werden kann, um Dateien zu erfassen, die nach dem ersten Durchlauf zu Azure Files hinzugefügt wurden, und prüfen Sie während der Ausführung im Tab Transferring der unteren Info View den Live-Fortschritt, die Geschwindigkeit und die Dateianzahl.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung eines wiederkehrenden Synchronisierungsjobs von Azure Files zu OneDrive in RcloneView" class="img-large img-center" />

Job History protokolliert jeden Durchlauf — Startzeit, Dauer, Status und übertragene Gesamtgröße —, sodass Sie über einen Nachweis verfügen, um vor der Stilllegung der Azure-Freigabe zu bestätigen, dass die Umstellung vollständig war.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Azure File Storage-Remote mit Kontoname, Shared Key und Freigabename hinzu.
3. Fügen Sie OneDrive über den browserbasierten Anmeldevorgang hinzu.
4. Führen Sie einen Dry Run aus, führen Sie dann den Sync-Job aus und bestätigen Sie die Ergebnisse in der Job History.

Eine saubere, überprüfbare Migration schlägt jederzeit eine überstürzte manuelle Kopie.

---

**Ähnliche Anleitungen:**

- [Azure Files Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [OneDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Azure Files-Verbindungsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
