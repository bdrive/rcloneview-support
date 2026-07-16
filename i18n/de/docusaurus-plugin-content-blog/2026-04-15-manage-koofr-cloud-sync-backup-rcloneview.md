---
slug: manage-koofr-cloud-sync-backup-rcloneview
title: "Koofr-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Verwalten Sie Koofr-Cloud-Speicher mit RcloneView — synchronisieren, sichern und verbinden Sie Koofr mit anderen Clouds über eine GUI auf Basis von rclone."
keywords:
  - Koofr-Verwaltung
  - Koofr-Sync-Tool
  - Koofr-Backup
  - RcloneView Koofr
  - Koofr Cloud-Speicher GUI
  - Koofr-Dateiübertragung
  - Europäischer Cloud-Speicher
  - Multi-Cloud-Verwaltung
  - DSGVO-Cloud-Backup
  - Koofr rclone
tags:
  - koofr
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Koofr ist ein auf Datenschutz ausgerichteter europäischer Cloud-Speicheranbieter mit starken DSGVO-Referenzen — RcloneView verbindet sich mit Koofr und integriert es in Ihren Multi-Cloud-Backup- und Synchronisationsworkflow.

Koofr ist ein datenschutzfreundlicher europäischer Cloud-Speicherdienst, der sich durch sein Engagement für Datensicherheit und seine Fähigkeit auszeichnet, externe Cloud-Konten zu aggregieren. Die Verwendung von RcloneView zusammen mit Koofr bietet Ihnen zusätzliche Flexibilität — Sie verwalten Koofrs nativen Speicher über eine dedizierte Multi-Cloud-Dateiverwaltungsoberfläche, die gleichzeitig mit über 90 Cloud-Anbietern funktioniert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr mit RcloneView verbinden

Um Koofr als Remote in RcloneView hinzuzufügen, navigieren Sie zu **Remote-Tab > Neuer Remote** und wählen Sie **Koofr** aus der Anbieterliste. Geben Sie Ihre Koofr-Zugangsdaten ein, um die Einrichtung abzuschließen. Nach dem Speichern erscheint Ihr Koofr-Speicher im Explorer-Panel als durchsuchbarer Remote — Sie können Ordner navigieren, Dateigrößen anzeigen und Inhalte direkt verwalten, ohne die Koofr-Weboberfläche zu öffnen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr as a new remote in RcloneView" class="img-large img-center" />

Für Teams, die bereits Koofrs Funktion zur Kontoaggregation nutzen (die Dropbox-, Google Drive- oder OneDrive-Konten über die Koofr-Oberfläche verbindet), bietet RcloneView eine ergänzende Ansicht — Koofrs eigener Speicherbereich wird unabhängig neben diesen externen Diensten verwaltet.

## Dateien mit Koofr synchronisieren

Ein freiberuflicher Entwickler, der Koofr als persönliches Backup-Ziel nutzt, kann im **Job-Manager** von RcloneView einen Synchronisationsjob konfigurieren: lokaler Projektordner als Quelle, Koofr-Remote als Ziel. RcloneView übernimmt die inkrementelle Synchronisation — bei nachfolgenden Durchläufen werden nur geänderte Dateien übertragen, was die Bandbreitennutzung im Vergleich zu vollständigen erneuten Uploads erheblich reduziert.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Syncing files to Koofr in RcloneView Job Manager" class="img-large img-center" />

Der europäische Rechenzentrumsstandort von Koofr macht es zu einem attraktiven, DSGVO-konformen Backup-Ziel. Unternehmen, die aus regulatorischen Gründen in Europa gehostete Backups benötigen, können mit der Zeitplanungsfunktion von RcloneView (PLUS-Lizenz) automatisierte Übertragungen von internen Dateiservern zu Koofr konfigurieren. Die **Dry-Run**-Vorschau bestätigt genau, welche Dateien verschoben werden, bevor Daten angefasst werden, und verhindert so versehentliches Überschreiben.

## Anbieterübergreifende Übertragungen mit Koofr

RcloneView behandelt Koofr wie jeden anderen Cloud-Remote — Sie können frei Übertragungen zwischen Koofr und jedem anderen Anbieter konfigurieren. Eine kleine Designagentur, die monatlich ihre Google-Drive-Projektordner nach Koofr sichert, richtet im Dual-Panel-Explorer einen Kopierjob zwischen beiden Remotes ein und überprüft beide Seiten vor dem Ausführen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-provider transfer from Google Drive to Koofr in RcloneView" class="img-large img-center" />

Mit der Funktion **Ordner vergleichen** können Sie Ihren Koofr-Speicher mit jedem anderen Remote vergleichen und Dateien identifizieren, die nur auf einer Seite existieren. Dies ist nützlich, um zu überprüfen, ob kürzlich durchgeführte Übertragungen vollständig abgeschlossen wurden, oder um Diskrepanzen zu erkennen, bevor sie zu Datenverlust führen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zu **Remote-Tab > Neuer Remote**, wählen Sie **Koofr** und geben Sie Ihre Zugangsdaten ein.
3. Durchsuchen Sie Ihren Koofr-Speicher im Explorer-Panel.
4. Erstellen Sie Synchronisations- oder Kopierjobs im **Job-Manager** zwischen Koofr und Ihrem lokalen Speicher oder anderen Clouds.

Für datenschutzbewusste Anwender und DSGVO-konforme Teams bietet Koofr über RcloneView professionelles Cloud-Management mit vollständiger europäischer Datenresidenz.

---

**Verwandte Anleitungen:**

- [Koofr als Multi-Cloud-Hub — Google Drive, OneDrive, Dropbox mit RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Koofr vs. Jottacloud — Vergleich europäischer Cloud-Speicher mit RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)
- [Jottacloud Cloud-Synchronisation und Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
