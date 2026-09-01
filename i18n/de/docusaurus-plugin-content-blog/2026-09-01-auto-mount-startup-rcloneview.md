---
slug: auto-mount-startup-rcloneview
title: "Automatisches Einbinden beim Start — Immer bereite Cloud-Laufwerke in RcloneView"
authors:
  - tayson
description: "Richten Sie RcloneViews automatisches Einbinden beim Start ein, damit Ihre Cloud-Laufwerke in dem Moment bereitstehen, in dem Ihr Computer hochfährt, ohne jedes Mal manuell neu einbinden zu müssen."
keywords:
  - auto mount cloud drive startup
  - rcloneview automatisches einbinden
  - cloud-speicher beim start einbinden
  - immer verfügbares cloud-laufwerk
  - automatisches cloud-mount windows
  - beim anmelden starten cloud-laufwerk
  - rcloneview plus feature
  - dauerhaftes cloud-mount
  - mount manager rcloneview
  - cloud-laufwerk start automatisierung
tags:
  - RcloneView
  - feature
  - mount
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Automatisches Einbinden beim Start — Immer bereite Cloud-Laufwerke in RcloneView

> Anstatt RcloneView jeden Morgen zu öffnen und jedes Cloud-Laufwerk manuell einzubinden, bringt das automatische Einbinden beim Start sie in dem Moment online, in dem Ihr Rechner hochfährt.

Jeder, der ein eingebundenes Cloud-Laufwerk als Teil seines täglichen Arbeitsablaufs nutzt — Dateien direkt in Google Drive bearbeiten, Assets aus einem S3-Bucket abrufen oder einen SFTP-Server wie einen lokalen Ordner durchsuchen — kennt die Umständlichkeit, nach jedem Neustart erneut einbinden zu müssen. Die Einstellung „Automatisches Einbinden beim Start" von RcloneView macht diesen Schritt überflüssig und stellt Ihre konfigurierten Mounts wieder her, sobald die App mit dem System startet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was das automatische Einbinden beim Start bewirkt

Wenn diese Funktion für ein bestimmtes Mount aktiviert ist, verbindet RcloneView den Mount-Punkt dieses Remotes bei jedem App-Start automatisch neu — mit genau dem Cache-Modus, dem Laufwerksbuchstaben bzw. Pfad und den Nur-Lese-Einstellungen, die Sie bei der ersten Erstellung konfiguriert haben. In Kombination mit „Beim Anmelden starten" in den allgemeinen Einstellungen bedeutet das, dass ein eingebundenes Laufwerk in Ihrem Dateiexplorer verfügbar sein kann, bevor Sie das RcloneView-Fenster überhaupt geöffnet haben. Dies ist ein PLUS-Lizenz-Feature, ebenso wie geplante Synchronisation und Mehrfenster-Unterstützung — die FREE-Lizenz deckt weiterhin manuelles Einbinden, Aushängen und vollständigen Dateiexplorer-Zugriff auf jedes Mount ab.

Die Einstellung gilt pro Mount, nicht global, sodass Sie genau auswählen können, welche Laufwerke sich automatisch neu verbinden. Ein selten genutztes Archiv-Remote kann manuell bleiben, während sich Ihre primären Arbeitslaufwerke — etwa ein täglich genutzter Google-Drive-Ordner und ein S3-Bucket — jedes Mal von selbst einbinden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager mit konfigurierten Mounts und Auto-Mount-Option" class="img-large img-center" />

## Einrichtung im Mount Manager

Öffnen Sie den Mount Manager über den Remote-Tab und erstellen Sie entweder ein neues Mount oder bearbeiten Sie ein bestehendes. Aktivieren Sie im Mount-Konfigurationsbildschirm Auto mount zusammen mit Ihren anderen Einstellungen — Cache-Modus, Volume-Name und Nur-Lese-Status — und speichern Sie dann. RcloneView bindet und synchronisiert 90+ Anbieter aus einem Fenster heraus, unter Windows, macOS und Linux, sodass derselbe Auto-Mount-Schalter unabhängig davon funktioniert, ob das zugrunde liegende Remote Google Drive, ein S3-kompatibler Bucket oder ein SFTP-Server ist.

Bei bereits laufenden Mounts sollten Sie bedenken, dass Edit deaktiviert ist, solange ein Mount aktiv ist; hängen Sie es zuerst aus, wenden Sie den Auto-Mount-Schalter an und binden Sie es dann neu ein, um zu bestätigen, dass die Einstellung korrekt gespeichert wurde.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einbinden eines Remote-Ordners direkt über die Symbolleiste des Explorer-Panels" class="img-large img-center" />

## Automatisches Einbinden mit dem System Tray kombinieren

Automatisches Einbinden beim Start funktioniert am besten zusammen mit „Minimiert starten" und dem System Tray, denn diese Kombination lässt RcloneView im Hintergrund starten, Ihre konfigurierten Laufwerke einbinden und aus dem Weg bleiben, bis Sie es brauchen. Das Mount-Menü im System-Tray-Symbol lässt Sie weiterhin bei Bedarf den Status prüfen oder ein Laufwerk aushängen, sodass Automatisierung nicht auf Kosten der manuellen Kontrolle geht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="System-Tray-Menü mit dem Status eingebundener Laufwerke" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html) und bestätigen, dass Ihre PLUS-Lizenz unter Help > Activate License aktiv ist.
2. Öffnen Sie den Mount Manager und wählen Sie das Mount aus, das automatisch neu verbunden werden soll.
3. Aktivieren Sie den Auto-Mount-Schalter in den Einstellungen dieses Mounts und speichern Sie.
4. Schalten Sie „Beim Anmelden starten" in den allgemeinen Einstellungen ein, damit RcloneView — und seine automatisch eingebundenen Laufwerke — bereit sind, bevor Sie sich hinsetzen.

Nach der Konfiguration verhält sich Ihr Cloud-Speicher wie ein dauerhafter Teil Ihres Dateisystems, ganz ohne manuelles Neueinbinden.

---

**Weiterführende Anleitungen:**

- [Mount Cloud Storage as a Local Drive — Complete Guide to Using Google Drive, S3, and OneDrive Like Local Folders](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView Mount Performance Tuning: Cache, Read Ahead, and VFS Settings for Smooth Cloud Drives](https://rcloneview.com/support/blog/mount-performance-tuning-rcloneview)

<CloudSupportGrid />
