---
slug: manage-1fichier-cloud-sync-rcloneview
title: "1Fichier-Cloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - steve
description: "Verbinden Sie 1Fichier mit RcloneView für GUI-basierte Dateiverwaltung, automatisierte Backups und Cloud-übergreifende Übertragungen. Verwalten Sie Ihre 1Fichier-Bibliothek ohne Kommandozeilen-Tools."
keywords:
  - 1Fichier RcloneView sync
  - manage 1Fichier files GUI
  - 1Fichier cloud backup
  - 1Fichier file transfer RcloneView
  - 1Fichier to Google Drive
  - rclone 1Fichier GUI
  - 1Fichier storage management
  - 1Fichier backup tool
tags:
  - RcloneView
  - 1fichier
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1Fichier-Cloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Verbinden Sie Ihr 1Fichier-Konto mit RcloneView und verwalten Sie Dateien, erstellen Sie automatisierte Backups und übertragen Sie Daten zu anderen Cloud-Anbietern — alles ohne die Kommandozeile zu benutzen.

1Fichier ist ein französischer Cloud-Speicher- und Dateihosting-Dienst, der für sein großzügiges Speicherangebot und seine Freigabefunktionen beliebt ist. Während die 1Fichier-Weboberfläche das Durchsuchen und manuelle Herunterladen abdeckt, benötigen Nutzer, die große Bibliotheken verschieben, automatisierte Backups erstellen oder 1Fichier in einen Multi-Cloud-Workflow integrieren möchten, ein leistungsfähigeres Tool. Das 1Fichier-Backend von RcloneView erledigt all das über eine übersichtliche GUI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 1Fichier mit RcloneView verbinden

Öffnen Sie in RcloneView **Remote-Tab → Neuer Remote** und wählen Sie 1Fichier aus der Anbieterliste. Die Authentifizierung erfordert Ihren 1Fichier-API-Schlüssel, den Sie in Ihren 1Fichier-Kontoeinstellungen im API-Bereich generieren können. Fügen Sie den API-Schlüssel in den Konfigurationsdialog von RcloneView ein und speichern Sie. Der Remote ist sofort einsatzbereit.

Ihre 1Fichier-Ordner und -Dateien werden im Explorer-Panel angezeigt, durchsuchbar über den Ordnerbaum und sortierbar in der Dateiliste. Die Gesamtanzahl und -größe eines Ordners ist über Rechtsklick → **Größe ermitteln** verfügbar, was nützlich ist, um zu prüfen, wie viele Daten Sie haben, bevor Sie eine Migration oder einen Backup-Job planen.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## 1Fichier-Inhalte herunterladen und organisieren

Für Nutzer, die ein großes Archiv von Dateien auf 1Fichier speichern und diese zu einem zugänglicheren Anbieter wie Google Drive, OneDrive oder einem lokalen NAS verschieben möchten, ist der Cloud-übergreifende Kopier-Job von RcloneView das richtige Werkzeug. Öffnen Sie 1Fichier in einem Panel und das Ziel im anderen, und erstellen Sie dann einen Kopier-Job im Job-Manager. Legen Sie eine angemessene Übertragungs-Parallelität fest — 1Fichier setzt bei kostenlosen Konten Download-Ratenbegrenzungen, sodass Inhaber von Premium-Konten einen schnelleren Durchsatz sehen.

Filtern Sie Jobs nach Dateityp oder Ordnername, um Inhalte gezielt zu migrieren. Extrahieren Sie beispielsweise nur Videodateien aus einem gemischten Archiv, oder kopieren Sie eine bestimmte Ordnerstruktur, während der Rest unverändert bleibt.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## Dateien auf 1Fichier sichern

Die Dateihosting-Funktionen von 1Fichier machen es zu einem praktikablen sekundären Backup-Ziel, besonders für Nutzer, die eine archivierte Kopie in Europa wünschen. Erstellen Sie einen Synchronisations- oder Kopier-Job von Google Drive, Dropbox oder einem lokalen Ordner als Quelle, mit Ihrem 1Fichier-Konto als Ziel. Der Job-Manager übernimmt Wiederholungsversuche bei fehlgeschlagenen Übertragungen, was wichtig ist, da Dateihosting-Dienste variable API-Antwortzeiten haben können.

Überwachen Sie den Übertragungsfortschritt im **Übertragungen-Tab** und prüfen Sie den **Job-Verlauf** für ein vollständiges Prüfprotokoll, was wann gesichert wurde.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generieren Sie einen API-Schlüssel in Ihren 1Fichier-Kontoeinstellungen.
3. Fügen Sie 1Fichier als Remote unter **Remote-Tab → Neuer Remote** hinzu.
4. Erstellen Sie Kopier- oder Synchronisations-Jobs, um Ihre 1Fichier-Daten zu verschieben oder zu sichern.

RcloneView macht 1Fichier zu einem verwaltbaren Teil Ihres Cloud-Speicher-Toolkits, mit derselben Drag-and-Drop-Oberfläche, die Sie für jeden anderen Anbieter verwenden.

---

**Verwandte Anleitungen:**

- [1Fichier-Speicher mit RcloneView herunterladen und organisieren](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [Cloud-zu-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Mehrere Cloud-Konten mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
