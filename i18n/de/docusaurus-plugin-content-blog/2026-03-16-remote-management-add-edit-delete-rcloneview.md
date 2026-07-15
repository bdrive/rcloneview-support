---
slug: remote-management-add-edit-delete-rcloneview
title: "Remote-Verwaltung — Cloud-Verbindungen in RcloneView hinzufügen, bearbeiten und organisieren"
authors:
  - tayson
description: "Die Verwaltung von über 70 Cloud-Anbietern beginnt mit gut organisierten Remotes. Erfahren Sie, wie Sie Ihre Cloud-Verbindungen im Remote-Manager von RcloneView hinzufügen, konfigurieren, bearbeiten und organisieren."
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote-Verwaltung — Cloud-Verbindungen in RcloneView hinzufügen, bearbeiten und organisieren

> Ihr erstes Remote ist in 2 Minuten eingerichtet. Beim 15. brauchen Sie ein System. Hier erfahren Sie, wie Sie alle Ihre Cloud-Verbindungen effizient verwalten, während Ihr Multi-Cloud-Setup wächst.

Jeder Cloud-Anbieter in RcloneView beginnt als „Remote" — eine benannte Verbindung mit Zugangsdaten und Konfiguration. Bei zwei oder drei Remotes ist die Verwaltung einfach. Doch je mehr Anbieter Sie hinzufügen (und viele Nutzer landen bei 10 oder mehr), desto wichtiger wird eine gute Organisation. Diese Anleitung deckt alles ab — vom Hinzufügen Ihres ersten Remotes bis zur Verwaltung eines komplexen Multi-Cloud-Setups.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ein neues Remote hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

Der Remote-Manager führt Sie durch das Hinzufügen von über 70 Anbietern. Jeder Anbietertyp hat unterschiedliche Konfigurationsfelder — Google Drive nutzt OAuth, S3 nutzt Zugriffsschlüssel, WebDAV nutzt URL und Zugangsdaten.

### Gängige Verbindungstypen

| Verbindungstyp | Beispiele | Authentifizierungsmethode |
|----------------|---------|-------------|
| OAuth | Google Drive, OneDrive, Dropbox | Browser-Login |
| Zugriffsschlüssel | S3, B2, Wasabi, R2 | Key + Secret |
| Benutzername/Passwort | WebDAV, FTP, SFTP | Zugangsdaten |
| Token | Box, Mega | API-Token |

## Namenskonventionen

Eine gute Benennung erspart später Verwirrung. Erwägen Sie diese Muster:

- **Nach Anbieter**: `gdrive-personal`, `gdrive-work`, `s3-backup`
- **Nach Zweck**: `backup-primary`, `backup-secondary`, `archive`
- **Nach Team**: `marketing-drive`, `engineering-s3`, `finance-onedrive`

## Remote-Konfiguration bearbeiten

Müssen Sie Zugangsdaten aktualisieren, Endpunkte ändern oder Einstellungen anpassen? Bearbeiten Sie jedes Remote über den Remote-Manager, ohne es neu erstellen zu müssen.

Häufige Gründe zum Bearbeiten:

- **Abgelaufene OAuth-Token** — neu autorisieren, ohne Job-Konfigurationen zu verlieren
- **Geänderte Zugriffsschlüssel** — S3-Zugangsdaten nach einer Rotation aktualisieren
- **Anderer Endpunkt** — S3-Regionen oder benutzerdefinierte Endpunkte wechseln

## Erweiterte Konfiguration

### Crypt-Remotes

Erstellen Sie verschlüsselte Wrapper um bestehende Remotes. Ein Crypt-Remote verschlüsselt Dateinamen und Inhalte, bevor sie die Cloud erreichen:

### Union/Combine-Remotes

Fassen Sie mehrere Remotes zu einer einzigen virtuellen Ansicht zusammen. Nützlich, um kostenlose Speicherkontingente verschiedener Anbieter zu kombinieren.

## Ihre Remotes organisieren

Wenn die Anzahl Ihrer Remotes wächst:

- **Konsistente Benennung verwenden**, damit Remotes logisch sortiert werden
- **Ihr Setup dokumentieren** — welches Remote sichert wohin
- **Ungenutzte Remotes aufräumen** — alte Testkonten entfernen
- **Verbindungen regelmäßig testen** — abgelaufene Token verursachen stille Fehler

## Remotes im Explorer verwenden

Nach der Konfiguration erscheinen Remotes im Zwei-Fenster-Explorer. Wählen Sie beliebige Remotes als Quell- oder Zielbereich:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ihr erstes Remote hinzufügen** — folgen Sie der geführten Einrichtung.
3. **Klar benennen** für den späteren Wiedererkennungswert.
4. **Weitere Remotes hinzufügen** nach Bedarf.
5. **Organisiert halten** durch konsistente Benennung.

Gute Remote-Verwaltung ist die Grundlage für gutes Cloud-Management.

---

**Weiterführende Anleitungen:**

- [Anleitung zum Verbindungsmanager](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Virtuelle Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
