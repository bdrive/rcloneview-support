---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "SugarSync-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie SugarSync mit RcloneView und verwalten Sie Ihre Cloud-Dateien visuell. Synchronisieren, sichern und übertragen Sie SugarSync-Daten plattformübergreifend mit einer benutzerfreundlichen GUI."
keywords:
  - SugarSync Cloud-Speicherverwaltung
  - RcloneView SugarSync Synchronisation
  - SugarSync Backup-Dateien
  - SugarSync Dateiübertragung GUI
  - SugarSync rclone
  - SugarSync mit RcloneView verwalten
  - SugarSync Desktop-Client Alternative
  - SugarSync Cloud-Backup-Tool
  - SugarSync-Dateien synchronisieren
  - SugarSync Multi-Cloud
tags:
  - RcloneView
  - sugarsync
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSync-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> RcloneView bringt vollständige GUI-Kontrolle für Ihren SugarSync-Speicher — durchsuchen, synchronisieren und sichern Sie Dateien, ohne sich allein auf SugarSyncs nativen Desktop-Client zu verlassen.

SugarSync ist seit Langem eine vertrauenswürdige Cloud-Backup-Lösung für kleine Unternehmen und Einzelprofis, die eine zuverlässige Dateisynchronisation über mehrere Geräte hinweg benötigen. Während die native SugarSync-App den alltäglichen Sync-Bedarf abdeckt, bietet RcloneView leistungsstarke Funktionen für IT-Administratoren und Power-User: geplante Aufträge, Cloud-zu-Cloud-Übertragungen, Massenmigrationen und zentrale Verwaltung zusammen mit Ihren anderen Cloud-Konten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SugarSync mit RcloneView verbinden

RcloneView verbindet sich mit SugarSync über das SugarSync-Backend von rclone. Navigieren Sie in RcloneView zum Reiter Remote > Neuer Remote und wählen Sie SugarSync aus der Anbieterliste aus. Sie werden aufgefordert, sich mit Ihren SugarSync-Kontodaten zu authentifizieren, und das Token wird sicher im verschlüsselten lokalen Speicher von RcloneView abgelegt.

Nach der Verbindung erscheinen Ihre SugarSync-Ordner — einschließlich Magic Briefcase und aller benutzerdefinierten Sync-Ordner — im Datei-Explorer. Durchsuchen Sie Ordnerinhalte, prüfen Sie Dateigrößen und führen Sie Dateiverwaltungsvorgänge über das Rechtsklick-Kontextmenü aus.

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## SugarSync in eine andere Cloud sichern

Ein überzeugender Anwendungsfall für die Verbindung von SugarSync mit RcloneView ist das Cloud-übergreifende Backup: das Kopieren der SugarSync-Inhalte zu einem zweiten Anbieter wie Backblaze B2 oder Amazon S3. Ein freiberuflicher Berater mit jahrelangen Kundendokumenten auf SugarSync kann einen wöchentlichen Sync-Auftrag einrichten, um diese Inhalte in einem S3-kompatiblen Archiv zu spiegeln und so Redundanz zu gewährleisten, falls das primäre Konto einmal nicht mehr erreichbar sein sollte.

Der Sync-Assistent von RcloneView führt Sie durch die Quellauswahl, die Zieleinrichtung, Filteroptionen und die Zeitplanung. Aktivieren Sie die Prüfsummenverifizierung, um zu bestätigen, dass jede übertragene Datei exakt ihrer Quelle entspricht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## SugarSync-Dateien durchsuchen und organisieren

Der Zweifensterexplorer ermöglicht es Ihnen, SugarSync und eine andere Cloud oder einen lokalen Ordner nebeneinander zu bearbeiten. Vergleichen Sie Ordnerinhalte visuell mit der integrierten Ordnervergleichsfunktion von RcloneView — finden Sie Dateien, die auf einer Seite existieren, auf der anderen aber nicht, oder identifizieren Sie Dateien mit Größenunterschieden, die auf unvollständige Synchronisationen hindeuten könnten.

Nutzen Sie bei großen SugarSync-Bibliotheken mit Tausenden von Dateien die Sortier- und Filterfunktionen der Dateiliste, um schnell zu navigieren. Die Fußzeilenübersicht zeigt die Gesamtzahl der Dateien und die kombinierte Speichergröße auf einen Blick.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## Von SugarSync migrieren

Wenn Sie planen, von SugarSync zu einem anderen Anbieter zu wechseln, vereinfacht RcloneView diesen Prozess erheblich. Richten Sie einen einmaligen Sync-Auftrag von SugarSync zu Ihrem Zielspeicher ein, nutzen Sie den Probelauf (Dry Run), um eine Vorschau der zu übertragenden Inhalte zu erhalten, und führen Sie anschließend die vollständige Migration aus. Der Auftragsverlauf liefert eine vollständige Aufzeichnung aller verschobenen Dateien.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zum Reiter Remote > Neuer Remote und wählen Sie SugarSync aus.
3. Authentifizieren Sie sich mit Ihren SugarSync-Zugangsdaten und speichern Sie den Remote.
4. Durchsuchen Sie Dateien im Explorer und richten Sie Sync- oder Backup-Aufträge zu anderen Anbietern ein.

RcloneView bietet SugarSync-Nutzern erstklassige Sync- und Backup-Tools, ohne die Arbeitsabläufe zu ersetzen, an die sie bereits gewöhnt sind.

---

**Verwandte Anleitungen:**

- [Dropbox-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Google Drive-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Cloud-Speicher für Freelancer und unabhängige Auftragnehmer — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
