---
slug: manage-webdav-cloud-sync-backup-rcloneview
title: "WebDAV-Serverspeicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - casey
description: "Verbinden, synchronisieren und sichern Sie jeden WebDAV-Server mit RcloneView. Verwalten Sie Nextcloud, ownCloud und Unternehmens-WebDAV-Endpunkte zusammen mit über 90 Cloud-Anbietern."
keywords:
  - WebDAV Synchronisation RcloneView
  - WebDAV-Cloud-Speicher verwalten
  - WebDAV Dateiübertragung GUI
  - Nextcloud WebDAV Backup
  - WebDAV mit Cloud-Speicher synchronisieren
  - ownCloud Backup-Tool
  - WebDAV rclone GUI
  - WebDAV Dateiverwaltung Desktop
  - plattformübergreifender WebDAV-Client
  - WebDAV Cloud-Backup-Automatisierung
tags:
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# WebDAV-Serverspeicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Verbinden Sie jeden WebDAV-Endpunkt mit RcloneView und steuern Sie Ihre Dateien über eine übersichtliche GUI — synchronisieren, sichern und übertragen, ohne die Kommandozeile zu berühren.

WebDAV (Web Distributed Authoring and Versioning) bildet die Grundlage einiger der am weitesten verbreiteten selbst gehosteten Dateiplattformen. Nextcloud, ownCloud, SharePoint und viele Content-Management-Systeme für Unternehmen stellen alle WebDAV-Endpunkte bereit. Die Verwaltung dieser Server bedeutet üblicherweise, sich mit Kommandozeilen-Tools oder unzuverlässigen Desktop-Sync-Clients herumzuschlagen. RcloneView behandelt WebDAV-Remotes genau wie jeden anderen Cloud-Anbieter — mit Drag-and-Drop-Übertragungen, geplanten Synchronisationsjobs und Live-Übertragungsüberwachung — über dieselbe Oberfläche, die Sie zur Verwaltung von Amazon S3 oder Google Drive nutzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verbinden Sie Ihren WebDAV-Server in wenigen Minuten

Das Hinzufügen eines WebDAV-Remotes dauert in RcloneView weniger als zwei Minuten. Klicken Sie auf **Remote-Tab > Neues Remote**, wählen Sie WebDAV als Speichertyp und geben Sie Ihre Server-URL, Ihren Benutzernamen und Ihr Passwort ein. Bei Servern mit selbstsignierten SSL-Zertifikaten fügen Sie `--no-check-certificate` in das Feld **Global Rclone Flags** unter **Settings > Embedded Rclone** ein, um die Zertifikatsprüfung zu umgehen. Nach dem Speichern erscheint Ihr WebDAV-Server im Explorer-Bereich neben jedem anderen konfigurierten Cloud-Konto.

Diese einheitliche Ansicht ist besonders wertvoll für Teams, die Nextcloud für die interne Zusammenarbeit nutzen und gleichzeitig öffentlichen Cloud-Speicher für externe Backups verwenden. Ein Videoproduktionsstudio mit einem selbst gehosteten Nextcloud-Server kann Projektdateien im linken Bereich und einen Backblaze-B2-Bucket im rechten Bereich durchsuchen — und fertige Ergebnisse dann direkt hinüberziehen oder einen geplanten Synchronisationsjob definieren, der die nächtliche Archivierung automatisch übernimmt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a WebDAV remote in RcloneView Remote Manager" class="img-large img-center" />

## WebDAV mit jedem Cloud-Anbieter synchronisieren

Sobald Ihr WebDAV-Server verbunden ist, erstellen Sie im Job Manager Synchronisationsjobs, die Dateien zu einem der über 90 von RcloneView unterstützten Cloud-Anbieter übertragen. Der 4-stufige Synchronisationsassistent führt Sie durch die Auswahl von Quell- und Ziel-Remotes, die Konfiguration gleichzeitiger Übertragungsanzahlen und der Prüfsummenverifizierung, das Anwenden von Filtern nach Dateigröße oder -alter sowie die optionale Planung des Jobs.

Wählen Sie für Backup-Szenarien **„Modifying destination only“** im Feld für die Synchronisationsrichtung. So bleibt Ihr Cloud-Backup eine Spiegelung des WebDAV-Servers, ohne umgekehrte Änderungen einzuführen. Wenn die Datenintegrität wichtig ist — etwa bei rechtlichen Dokumentenarchiven oder medizinischen Bildbibliotheken — aktivieren Sie die Prüfsummenoption, damit RcloneView Dateien bei jedem Durchlauf sowohl anhand von Hash als auch Größe validiert, nicht nur anhand des Änderungsdatums.

Es lohnt sich, vor jeder ersten Synchronisation die Dry-Run-Funktion zu nutzen: Sie listet genau auf, welche Dateien am Ziel kopiert oder gelöscht werden, ohne dass tatsächliche Änderungen vorgenommen werden. Das dauert nur Sekunden und kann versehentliches Überschreiben verhindern.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from WebDAV server to cloud storage in RcloneView" class="img-large img-center" />

## Backups nach Zeitplan automatisieren (PLUS-Lizenz)

Manuelle Synchronisationsläufe decken sofortige Übertragungen ab, aber erst die geplante Automatisierung macht WebDAV-Backups zuverlässig. Mit einer PLUS-Lizenz können Sie über den crontab-artigen Scheduler von RcloneView Jobs so konfigurieren, dass sie nächtlich, stündlich oder in jedem beliebigen benutzerdefinierten Intervall laufen. Der Zeitplan-Simulator zeigt vor dem Speichern eine Vorschau der nächsten zehn Ausführungszeiten, sodass es keine Überraschungen darüber gibt, wann Backups ausgelöst werden.

Der Job-Verlauf verfolgt das Ergebnis jedes Laufs: Startzeit, Dauer, Übertragungsgeschwindigkeit, Dateianzahl und Status (Completed / Errored / Canceled). Tritt bei einem geplanten Job ein vorübergehender Netzwerkfehler auf, wiederholt RcloneView den Versuch bis zur konfigurierten Anzahl an Wiederholungen, bevor der Job als fehlerhaft markiert wird. Für Organisationen, die große Nextcloud- oder ownCloud-Installationen verwalten, entsteht dadurch ein zuverlässiger Audit-Trail ohne manuelle Überwachung.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled sync job from WebDAV to cloud storage in RcloneView" class="img-large img-center" />

## Dateien nebeneinander durchsuchen und vergleichen

Der Mehrfach-Panel-Explorer von RcloneView ermöglicht es Ihnen, Ihren WebDAV-Server und ein Cloud-Ziel gleichzeitig zu durchsuchen. Das Folder-Compare-Tool identifiziert genau, welche Dateien sich zwischen den beiden Seiten unterscheiden — und zeigt Dateien an, die nur links, nur rechts oder mit abweichenden Größen existieren. Für die inkrementelle Backup-Verifizierung ist das schneller und zuverlässiger als die manuelle Durchsicht von Übertragungsprotokollen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing WebDAV server files with cloud backup using Folder Compare in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Remote-Tab > Neues Remote**, wählen Sie WebDAV und geben Sie Ihre Server-URL sowie Ihre Zugangsdaten ein.
3. Erstellen Sie im Job Manager einen Synchronisationsjob mit Ihrem WebDAV-Remote als Quelle und Ihrem bevorzugten Cloud-Anbieter als Ziel.
4. Führen Sie einen **Dry Run** aus, um eine Vorschau der zu übertragenden Dateien zu erhalten, und aktivieren Sie dann den Job oder legen Sie einen Zeitplan fest.

RcloneView macht WebDAV-Server zu vollwertigen Bestandteilen Ihrer Multi-Cloud-Strategie — ganz gleich, ob Sie eine selbst gehostete Nextcloud-Instanz schützen oder eine Unternehmens-Content-Plattform mit langfristigem Cloud-Archivspeicher verbinden.

---

**Verwandte Anleitungen:**

- [SFTP-Serverspeicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Einen WebDAV-Server verbinden — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Nextcloud verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
