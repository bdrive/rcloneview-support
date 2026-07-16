---
slug: manage-uloz-to-cloud-sync-backup-rcloneview
title: "Uloz.to-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - casey
description: "Verbinden Sie Uloz.to-Cloud-Speicher mit RcloneView für Drag-and-Drop-Dateiverwaltung, geplantes Backup und anbieterübergreifende Synchronisation in einer App."
keywords:
  - Uloz.to
  - Uloz.to Cloud-Speicher
  - Uloz.to-Dateien verwalten
  - Uloz.to Backup
  - Uloz.to Synchronisation
  - RcloneView Uloz.to
  - Uloz.to Remote
  - Cloud-Dateimanager
  - Uloz.to-Alternative Client
  - Multi-Cloud-Dateiverwaltung
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Uloz.to-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Schluss mit dem Jonglieren von Browser-Uploads zu Uloz.to — verwalten Sie die gesamte Bibliothek stattdessen über einen Desktop-Datei-Explorer.

Uloz.to ist ein beliebter Datei-Hosting- und Speicherdienst, aber seine Weboberfläche wurde nicht für Massen-Backups, geplante Synchronisation oder das Verschieben von Dateien zwischen Konten und anderen Clouds entwickelt. RcloneView fügt Uloz.to als Remote neben Ihrem anderen Speicher hinzu, sodass Sie es durchsuchen, sichern und synchron halten können, ohne jemals einen Browser-Tab zu öffnen. RcloneView bindet 90+ Anbieter aus einem einzigen Fenster ein und synchronisiert sie unter Windows, macOS und Linux — Uloz.to ist einfach ein weiterer Tab in derselben Oberfläche.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Uloz.to als Remote hinzufügen

Öffnen Sie den Remote-Tab und klicken Sie auf **New Remote**, wählen Sie dann Uloz.to aus der Anbieterliste, um die Verbindung zu konfigurieren. Nach dem Hinzufügen erscheint es als Tab in jedem Explorer-Panel, direkt neben Ihren lokalen Laufwerken und anderen Cloud-Remotes. Der Remote Manager (Remote-Tab > Remote Manager) listet alle konfigurierten Remotes an einem Ort auf, sodass Sie die Uloz.to-Verbindung später bearbeiten oder entfernen können, ohne sich durch Einstellungsbildschirme zu graben.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Uloz.to as a new remote in RcloneView" class="img-large img-center" />

Im Explorer enthält das Rechtsklickmenü der Breadcrumb-Pfadleiste **Copy Full Path (with Remote)** — praktisch, um einen Pfad im Stil `uloz:FolderName` zu erhalten, falls Sie auch das integrierte Rclone Terminal für einmalige Befehle verwenden.

## Uloz.to-Inhalte automatisch synchronisieren und sichern

Für wiederkehrende Backups richten Sie über den 4-Schritte-Assistenten einen Sync-Job ein: Wählen Sie Uloz.to als Quelle oder Ziel, wählen Sie die einseitige Richtung "modifying destination only" für eine sichere, stabile Backup-Richtung, und fügen Sie in Schritt 3 Filter hinzu, um Dateitypen zu überspringen, die Sie nicht spiegeln möchten (große `.iso`-Dateien, temporäre Ordner usw.). Führen Sie zuerst einen Dry Run aus, um genau zu sehen, was kopiert oder gelöscht wird, bevor sich tatsächlich etwas bewegt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Uloz.to and another cloud remote" class="img-large img-center" />

Sobald Sie mit dem Job zufrieden sind, können PLUS-Lizenznutzer einen Zeitplan im Crontab-Stil anhängen, damit das Uloz.to-Backup automatisch läuft — täglich, wöchentlich oder in jedem beliebigen Rhythmus, der zu Ihrem Workflow passt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Uloz.to backup job in RcloneView" class="img-large img-center" />

## Änderungen mit Folder Compare überprüfen

Bevor Sie einer Migration oder einem Backup vertrauen, führen Sie einen Folder Compare zwischen Ihrem Uloz.to-Ordner und seinem Gegenstück auf einem anderen Remote durch. Die Vergleichsansicht markiert nur-links, nur-rechts und unterschiedliche Dateien nebeneinander, sodass Sie fehlende Uploads oder veraltete Kopien erkennen können, bevor sie zum Problem werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Uloz.to folder contents against another cloud remote" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Uloz.to als neuen Remote über den Remote-Tab hinzufügen.
3. Einen Sync-Job erstellen, um es in einer anderen Cloud oder auf einem lokalen Laufwerk zu sichern.
4. Einen Dry Run ausführen und nach der ersten Übertragung mit Folder Compare bestätigen.

Uloz.to in einen ordentlichen Dateiverwaltungs-Workflow einzubinden bedeutet weniger manuelle Uploads und deutlich mehr Vertrauen, dass Ihre Dateien tatsächlich gesichert sind.

---

**Verwandte Anleitungen:**

- [Linkbox-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-linkbox-cloud-sync-backup-rcloneview)
- [Pixeldrain Cloud-Synchronisation verwalten — Dateien sichern mit RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Terabox-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
