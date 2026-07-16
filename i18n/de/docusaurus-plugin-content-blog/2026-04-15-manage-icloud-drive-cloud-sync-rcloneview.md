---
slug: manage-icloud-drive-cloud-sync-rcloneview
title: "iCloud Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verwalten Sie iCloud Drive mit RcloneView — synchronisieren, sichern und übertragen Sie iCloud Drive-Dateien zu anderen Clouds mit einer GUI, die auf rclone v1.69+ basiert."
keywords:
  - iCloud Drive-Verwaltung
  - iCloud Drive-Synchronisation
  - iCloud-Backup-Tool
  - RcloneView iCloud
  - iCloud Drive-Dateiübertragung
  - Apple Cloud-Speicher GUI
  - iCloud zu Google Drive
  - Multi-Cloud-Backup
  - iCloud Drive rclone
  - Apple Cloud-Speicher-Backup
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> iCloud Drive ist Apples nativer Cloud-Speicher — RcloneView, unterstützt von rclone v1.69+, verbindet sich direkt mit iCloud Drive und bringt Ihre Apple-Cloud-Inhalte in einen Multi-Cloud-Dateiverwaltungs-Workflow.

iCloud Drive ist tief in macOS- und iOS-Workflows integriert, aber Dateien aus iCloud für ein Backup bei einem zweiten Anbieter herauszuholen — oder iCloud-Inhalte mit Windows-basierten Systemen zu synchronisieren — erforderte bisher meist Apples eigene Ökosystem-Apps. RcloneView nutzt die iCloud Drive-Unterstützung von rclone v1.69+, verbindet sich direkt mit Ihrem Apple-Cloud-Speicher und integriert ihn in eine plattformübergreifende Dateiverwaltungsoberfläche.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive in RcloneView verbinden

Die iCloud Drive-Unterstützung erfordert **rclone v1.69 oder neuer**. RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert und unterstützt ein In-App-rclone-Self-Update — Sie können direkt in der App über den Tab **Help** auf die erforderliche Version aktualisieren.

Um iCloud Drive zu verbinden, gehen Sie zu **Remote tab > New Remote** und wählen Sie **iCloud Drive** aus der Anbieterliste. Geben Sie Ihre Apple-Zugangsdaten ein, um die Authentifizierung abzuschließen. Nach der Konfiguration erscheint Ihr iCloud Drive als Remote im Explorer und zeigt alle Ihre iCloud-Ordner und -Dateien an. Auf macOS zeigt dies genau, was in iCloud gespeichert ist, unabhängig davon, ob Dateien lokal heruntergeladen wurden.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## iCloud Drive in einer anderen Cloud sichern

Der häufigste Anwendungsfall: ein Cloud-zu-Cloud-Backup der iCloud Drive-Inhalte auf Amazon S3, Backblaze B2 oder Google Drive erstellen, für plattformübergreifenden Zugriff und Notfallwiederherstellung. Konfigurieren Sie einen Synchronisationsjob im **Job Manager** von RcloneView — Quelle ist Ihr iCloud Drive-Remote, Ziel ist Ihr Backup-Cloud-Remote.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling iCloud Drive backup to another cloud in RcloneView" class="img-large img-center" />

Für eine Fachkraft, die iCloud Drive als primären Dokumentenspeicher nutzt — mit 500 GB an Design-Assets, Kundendateien und Projektarchiven — schafft ein geplantes nächtliches Backup zu Backblaze B2 ein anbieterunabhängiges Sicherheitsnetz. Die Ordnerstruktur von iCloud Drive umfasst Desktop, Dokumente und app-spezifische Ordner. Die Filteroptionen von RcloneView erlauben es, bestimmte Pfade ein- oder auszuschließen — zum Beispiel nur den Ordner Dokumente zu synchronisieren und große Medienbibliotheken zu überspringen.

## Plattformübergreifender iCloud-Zugriff

Teams mit gemischten Mac- und Windows-Umgebungen kämpfen häufig mit dem eingeschränkten Windows-Client von iCloud. RcloneView unter Windows kann sich mit iCloud Drive verbinden und direkten Dateizugriff bieten, sodass iCloud-Inhalte auf freigegebene Netzlaufwerke oder NAS-Systeme kopiert oder synchronisiert werden können, auf die das gesamte Team zugreifen kann.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Accessing iCloud Drive from Windows using RcloneView" class="img-large img-center" />

Der Zwei-Panel-Explorer macht die plattformübergreifende Dateiverwaltung unkompliziert: iCloud Drive auf einer Seite, die Ziel-Windows-Freigabe oder eine andere Cloud auf der anderen. Ziehen Sie Dateien zwischen den Panels, um sie zu kopieren, oder konfigurieren Sie einen Synchronisationsjob für wiederkehrende Übertragungen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Stellen Sie sicher, dass Ihr eingebettetes rclone über **Help > Check for Updates** auf v1.69+ aktualisiert ist.
3. Gehen Sie zu **Remote tab > New Remote**, wählen Sie **iCloud Drive** und geben Sie Ihre Apple-Zugangsdaten ein.
4. Konfigurieren Sie einen Synchronisationsjob im **Job Manager**, um Ihr iCloud Drive in einer zweiten Cloud zu sichern.

Mit RcloneView ist iCloud Drive nicht länger auf Apples Ökosystem beschränkt — Ihre Apple-Cloud-Inhalte werden Teil einer umfassenderen Multi-Cloud-Backup- und Verwaltungsstrategie.

---

**Verwandte Anleitungen:**

- [iCloud Drive mit RcloneView — Erste-Schritte-Anleitung](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Google Drive Cloud-Speicher verwalten — Synchronisieren und Sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [OneDrive Cloud-Speicher verwalten — Synchronisieren und Sichern mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
