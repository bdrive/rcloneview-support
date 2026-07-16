---
slug: stream-sync-putio-media-nas-cloud-rcloneview
title: "Put.io-Mediendateien mit RcloneView auf NAS oder Cloud-Speicher streamen und synchronisieren"
authors:
  - tayson
description: "Synchronisieren Sie Put.io-Downloads automatisch mit Ihrem Synology NAS, Ihrer Plex-Bibliothek oder Google Drive — organisieren Sie Mediendateien und halten Sie alles mit RcloneView gesichert."
keywords:
  - putio sync nas
  - putio download manager
  - putio to google drive
  - putio file manager
  - putio rclone
  - putio media sync
  - putio backup tool
  - putio plex integration
  - putio to nas
  - putio automated download
tags:
  - putio
  - media
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io-Mediendateien mit RcloneView auf NAS oder Cloud-Speicher streamen und synchronisieren

> Put.io ist großartig für Cloud-Downloads, aber diese Dateien zu organisieren und auf Ihr NAS oder Ihren Plex-Server zu bringen, erfordert normalerweise manuelle Übertragungen. RcloneView automatisiert die gesamte Pipeline.

Put.io ist ein beliebter Cloud-Dienst, der Dateien für Sie abruft — Torrents, Direktlinks und mehr — und sie in der Cloud für sofortiges Streaming speichert. Doch sobald Dateien auf Put.io liegen, laden die meisten Nutzer sie manuell auf ein lokales Laufwerk oder NAS herunter. RcloneView verbindet sich direkt mit Put.io und automatisiert den gesamten Ablauf: Synchronisieren Sie neue Downloads mit Ihrem Synology NAS, Ihrer Plex-Bibliothek, Google Drive oder jedem anderen Speicher.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die Put.io-Synchronisation automatisieren?

- **Manuelle Downloads sind mühsam** — Jede neue Datei bedeutet: Browser öffnen, auf Download klicken, warten und Dateien verschieben.
- **NAS/Plex-Integration** — Wenn Dateien automatisch in Ihrem Plex-Bibliotheksordner landen, sind sie sofort verfügbar.
- **Speicherverwaltung** — Der Put.io-Speicher ist begrenzt. Die automatische Synchronisation ermöglicht es, Platz zu schaffen, sobald Dateien sicher woanders liegen.
- **Zustellung an mehrere Ziele** — Senden Sie Medien gleichzeitig an Ihr NAS, ein Cloud-Backup und ein tragbares Laufwerk.

## Put.io verbinden

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **Put.io** aus der Anbieterliste.
3. Authentifizieren Sie sich über OAuth.
4. Speichern — Ihre Put.io-Dateien sind jetzt durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add Put.io remote in RcloneView" class="img-large img-center" />

## Ihre Put.io-Dateien durchsuchen und verwalten

Zeigen Sie Ihre gesamte Put.io-Bibliothek im Explorer an, zusammen mit Ihren lokalen Laufwerken oder anderen Clouds:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Put.io files alongside NAS" class="img-large img-center" />

## Synchronisations-Workflows

### Put.io → Synology NAS (Plex/Jellyfin)

Liefern Sie Mediendateien automatisch an Ihren Medienserver:

1. Erstellen Sie einen Copy-Job: Put.io → NAS-Medienordner (z. B. `/volume1/Plex/Movies`).
2. Planen Sie die stündliche Ausführung — neue Put.io-Downloads landen automatisch in Plex.
3. Plex erkennt neue Dateien und macht sie zum Streaming verfügbar.

### Put.io → Google Drive

Führen Sie ein Cloud-Backup Ihrer Put.io-Downloads:

1. Erstellen Sie einen Copy-Job: Put.io → Google Drive-Ordner.
2. Greifen Sie von überall über Google Drive auf Ihre Medien zu.

### Put.io → externes Laufwerk

Pflegen Sie ein Offline-Medienarchiv:

1. Erstellen Sie einen Copy-Job: Put.io → Pfad des externen Laufwerks.
2. Führen Sie ihn manuell aus, wenn Sie das Laufwerk anschließen, oder planen Sie ihn, wenn es dauerhaft verbunden ist.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Put.io sync job" class="img-large img-center" />

## Die Pipeline automatisieren

1. **Planen Sie stündliche Synchronisationen** mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
2. **Nutzen Sie Batch Jobs**, um Put.io nacheinander mit mehreren Zielen zu synchronisieren.
3. **Lassen Sie sich benachrichtigen** über [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control), wenn neue Dateien synchronisiert wurden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Put.io sync" class="img-large img-center" />

## Übertragungen überwachen

Verfolgen Sie in Echtzeit, wie Dateien von Put.io auf Ihr NAS fließen:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Put.io file transfers" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Put.io sync job history" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Put.io** als Remote über OAuth hinzu.
3. **Fügen Sie Ihr Ziel hinzu** (NAS, Google Drive, externes Laufwerk).
4. **Erstellen Sie einen Copy-Job** und planen Sie ihn.
5. **Genießen Sie die automatisierte Medienzustellung** — Dateien gelangen von Put.io in Ihre Plex-Bibliothek, ohne einen Finger zu rühren.

Hören Sie auf, Dateien manuell von Put.io herunterzuladen. RcloneView verwandelt dies in eine automatisierte Medien-Pipeline, die Dateien genau dorthin liefert, wo Sie sie haben möchten.

---

**Weiterführende Anleitungen:**

- [Remote über browserbasierte Anmeldung hinzufügen (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Remotes durchsuchen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Automatische Erkennung und Verbindung von Synology NAS](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
