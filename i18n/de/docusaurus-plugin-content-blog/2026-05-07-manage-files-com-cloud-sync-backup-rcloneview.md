---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "Files.com-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verbinden Sie Files.com über SFTP oder WebDAV mit RcloneView, durchsuchen Sie Enterprise-Dateifreigaben und führen Sie automatisierte Synchronisations- und Backup-Jobs für eine sichere Dateiverwaltung aus."
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - Enterprise-Dateiverwaltung
  - Cloud-Synchronisation Files.com
  - Files.com Backup
  - SFTP Cloud-Synchronisation
  - sichere Dateiübertragung
tags:
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Files.com-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Files.com ist eine leistungsstarke Enterprise-Dateiverwaltungsplattform, und RcloneView verbindet sich über SFTP oder WebDAV damit, sodass Sie Ihre Dateien über eine übersichtliche Desktop-GUI synchronisieren, sichern und verwalten können.

Files.com bietet einen professionellen, verwalteten Dateitransfer mit Compliance-Funktionen, Automatisierung und Zugriffskontrollen, auf die sich große Organisationen verlassen. Für Teams, die Files.com in umfassendere Multi-Cloud-Workflows integrieren müssen — etwa um Inhalte mit Cloud-Backups zu synchronisieren, Dateien zu anderen Speicheranbietern zu verschieben oder Dateien in großen Mengen zu verwalten — bietet RcloneView eine grafische Oberfläche, die auf den Standardprotokollen SFTP und WebDAV aufbaut. Eine separate rclone-Installation ist nicht erforderlich; sie ist in RcloneView integriert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Files.com über SFTP verbinden

SFTP ist der zuverlässigste Weg, RcloneView mit Files.com zu verbinden. Klicken Sie in RcloneView auf **New Remote** und wählen Sie **SFTP**. Geben Sie Ihren Files.com-Hostnamen ein (üblicherweise `<your-subdomain>.files.com`), Ihren Benutzernamen sowie entweder Ihr Passwort oder einen SSH-Schlüssel. Files.com unterstützt beide Authentifizierungsmethoden — die SSH-Schlüssel-Authentifizierung wird für automatisierte Workflows bevorzugt, da sie die Speicherung von Passwörtern vermeidet.

Nach dem Speichern erscheint das Files.com-SFTP-Remote im Dual-Pane-Explorer. Navigieren Sie durch Ihre Files.com-Ordnerstruktur, laden Sie Dateien per Drag-and-Drop hoch und herunter und verwalten Sie Ihre Enterprise-Dateifreigaben direkt über die RcloneView-Oberfläche. Der Übertragungsfortschritt wird bei allen Vorgängen live angezeigt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## Verbindung über WebDAV

Files.com unterstützt auch WebDAV, eine Alternative, falls SFTP durch eine Firewall blockiert wird oder Sie einen HTTP-basierten Zugriff bevorzugen. Klicken Sie in RcloneView auf **New Remote** > **WebDAV** und geben Sie die Files.com-WebDAV-URL, Ihren Benutzernamen und Ihr Passwort ein. Der WebDAV-Endpunkt von Files.com ist üblicherweise unter `https://<subdomain>.files.com/dav/` verfügbar.

WebDAV eignet sich gut für allgemeines Durchsuchen von Dateien und Übertragungen mit moderatem Volumen. Für Bulk-Vorgänge mit hohem Durchsatz — etwa das Synchronisieren tausender Dateien in einem Backup-Job — bietet SFTP im Allgemeinen eine bessere Leistung und eine zuverlässigere Verarbeitung großer Dateien.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## Synchronisations- und Backup-Jobs ausführen

Sobald Files.com verbunden ist, können Sie mit dem **Job Wizard** Synchronisationsjobs erstellen. Legen Sie einen Files.com-Ordner als Quelle und ein Cloud-Backup-Ziel (z. B. Amazon S3, Backblaze B2 oder Google Drive) als Ziel fest. Dies ist ein gängiges Muster für Enterprise-Backups: Files.com dient als aktive Dateiverwaltungsplattform, während ein Cloud-Objektspeicher Archivkopien vorhält.

Führen Sie vor jedem Synchronisationsjob einen **Dry Run** aus, um zu überprüfen, dass die richtigen Dateien erfasst werden. Für Compliance-relevante Dateien bietet die **Job History** von RcloneView einen vollständigen Audit-Trail jeder Übertragung. PLUS-Lizenznutzer können diese Backup-Jobs so planen, dass sie automatisch ausgeführt werden — zum Beispiel nächtlich —, sodass Files.com-Daten kontinuierlich ohne manuellen Eingriff gesichert werden.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klicken Sie auf **New Remote** > **SFTP** und geben Sie Ihren Files.com-Hostnamen, Benutzernamen und SSH-Schlüssel oder Passwort ein.
3. Durchsuchen Sie Ihre Files.com-Ordnerstruktur im Dual-Pane-Explorer.
4. Verwenden Sie den **Job Wizard**, um einen Backup-Synchronisationsjob von Files.com zu Ihrem gewünschten Cloud-Speicher zu erstellen.
5. Planen Sie wiederkehrende Backups mit einer PLUS-Lizenz für automatisierten Datenschutz.

RcloneView verbindet die Enterprise-Dateiverwaltungsfunktionen von Files.com mit dem breiteren Cloud-Speicher-Ökosystem und bietet Ihnen ein einziges grafisches Werkzeug für alle Ihre Dateivorgänge.

---

**Verwandte Anleitungen:**

- [Seafile verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Citrix ShareFile verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [SFTP-Fehler „Connection Refused" und Timeout mit RcloneView beheben](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
