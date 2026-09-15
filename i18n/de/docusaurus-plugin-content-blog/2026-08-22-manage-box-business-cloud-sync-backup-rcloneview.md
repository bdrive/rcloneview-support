---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business-Speicher verwalten — Synchronisieren und Sichern von Dateien mit RcloneView"
authors:
  - robin
description: "Verbinden Sie Box for Business mit RcloneView für plattformübergreifendes Datei-Browsing, Cloud-zu-Cloud-Synchronisation und geplante Backups von Enterprise-Box-Konten."
keywords:
  - box for business
  - box enterprise speicher
  - rcloneview box business
  - box business synchronisation
  - box_sub_type enterprise
  - enterprise cloud speicher gui
  - box team konto backup
  - business cloud speicherverwaltung
  - box business migration
  - multi-cloud dateiverwaltung
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business-Speicher verwalten — Synchronisieren und Sichern von Dateien mit RcloneView

> Verbinden Sie ein Box for Business-Enterprise-Konto mit RcloneView und durchsuchen, synchronisieren und sichern Sie freigegebene Firmenordner neben jeder anderen Cloud, die Sie verwalten.

Box for Business-Konten organisieren Inhalte anhand von Enterprise-verwalteten Ordnern statt eines einzelnen persönlichen Kontos, weshalb die Standard-Box-Verbindung eine zusätzliche Einstellung benötigt, um korrekt zu funktionieren. RcloneView übernimmt dies direkt und gibt IT-Administratoren ein einziges Fenster, um Enterprise-Box-Inhalte zu durchsuchen, zu übertragen und zu schützen, statt zwischen der Box-Webanwendung und einem separaten Sync-Client zu wechseln.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ein Box for Business-Remote einrichten

Das Hinzufügen eines Box for Business-Kontos beginnt genauso wie eine persönliche Box-Verbindung: Klicken Sie auf New Remote, wählen Sie Box, und schließen Sie die OAuth-Anmeldung in Ihrem Browser ab. Der Unterschied ist eine einzige zusätzliche Einstellung — `box_sub_type = enterprise` —, die das Remote auf die Enterprise-Kontostruktur statt auf den Bereich eines einzelnen Benutzers ausrichtet. Sobald diese Einstellung angewendet ist, werden die Ordner des Enterprise-Kontos genau wie bei jedem anderen Remote im Explorer-Panel geladen.

Anders als bei reinen Mount-Tools kann RcloneView auch mit der FREE-Lizenz Ordner synchronisieren und vergleichen — ein Administrator, der Box neben anderen Abteilungs-Clouds verwaltet, braucht keine separate Anwendung, nur um Dateien zwischen ihnen zu verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Enterprise-Ordner durchsuchen

Nach der Verbindung zeigt das File-Explorer-Panel die Enterprise-Ordnerstruktur mit denselben Spalten Name, Type, Modified date und Size, die bei jedem Remote verwendet werden, sowie einen einklappbaren Ordnerbaum zum Navigieren durch tiefe Abteilungshierarchien. Die Copy-Full-Path-Option der Breadcrumb-Pfadleiste gibt den Pfad im Format `remote:path` aus, was praktisch ist, wenn ein Speicherort an das integrierte rclone-Terminal für eine schnelle `rclone about`-Speicherprüfung übergeben wird.

Mit Ctrl+Klick und Umschalt+Klick lässt sich per Mehrfachauswahl ein bestimmter Projektordner aus einem großen Enterprise-Bereich herausziehen, statt sich durch das gesamte Konto zu arbeiten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## Enterprise-Daten in einer zweiten Cloud sichern

Enterprise-Dateien nur bei einem einzigen Anbieter zu halten, ist ein Risiko, das viele IT-Teams lieber vermeiden möchten. Daher ist es ein gängiges Muster, Box-for-Business-Inhalte als sekundäre Kopie auf Amazon S3, Backblaze B2 oder eine andere Cloud zu spiegeln. Der 4-Schritte-Sync-Assistent von RcloneView deckt dies ab: Wählen Sie das Box-for-Business-Remote als Quelle, wählen Sie ein Ziel-Remote, und stellen Sie die Synchronisationsrichtung auf einseitig, damit das Backup-Ziel die Quelle widerspiegelt, ohne etwas Vorgelagertes zu verändern. Filtering-Einstellungen können übergroße Medien ausschließen oder den Job auf Dateien unterhalb eines bestimmten Alters beschränken, sodass sich das Backup auf das wirklich Wichtige konzentriert.

Ein Dry Run vor der ersten vollständigen Synchronisation zeigt die genaue Liste der zu kopierenden und zu löschenden Dateien — ein sinnvoller Schritt, bevor die Daten eines gesamten Enterprise-Kontos verschoben werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## Wiederkehrende Backups automatisieren

PLUS-Lizenznutzer können dem Box-for-Business-Backup-Job einen Zeitplan im Crontab-Format zuweisen, sodass er nächtlich oder wöchentlich ohne manuellen Eingriff läuft. Job History erfasst anschließend für jeden Lauf Ausführungstyp, Dauer, Status und übertragene Gesamtgröße, sodass Administratoren ein Protokoll haben, das sie einsehen können, ohne Boxs eigene Admin-Konsole durchsuchen zu müssen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie ein neues Box-Remote hinzu und setzen Sie während der Konfiguration `box_sub_type = enterprise`.
3. Durchsuchen Sie die Enterprise-Ordner im Explorer-Panel und bestätigen Sie den Zugriff auf die benötigten Abteilungen.
4. Erstellen Sie einen Sync-Job, um Enterprise-Daten in eine zweite Cloud zu spiegeln, und planen Sie ihn, wenn Sie die PLUS-Lizenz besitzen.

Ein korrekt eingerichtetes Box-for-Business-Remote macht RcloneView zu einem praktischen Sicherheitsnetz für Unternehmensdaten, die sonst nur an einem einzigen Ort liegen würden.

---

**Weitere Anleitungen:**

- [Box-Speicher verwalten — Synchronisieren und Sichern von Dateien mit RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box zu OneDrive migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Box-Speicher als Netzlaufwerk einbinden mit RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
