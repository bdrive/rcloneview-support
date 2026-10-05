---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "Langsames Öffnen von Dateien auf Cloud-Mounts beheben — VFS-Cache mit RcloneView abstimmen"
authors:
  - alex
description: "Beheben Sie langsames Öffnen von Dateien auf eingebundenen Cloud-Laufwerken, indem Sie Cache-Modus, Cache-Größe und Verzeichnis-Cache-Zeit im Mount Manager von RcloneView anpassen."
keywords:
  - langsamen Cloud-Mount beheben
  - eingebundenes Laufwerk öffnet Dateien langsam
  - VFS-Cache-Modus
  - rclone-Mount-Leistung
  - Dir-Cache-Zeit
  - Cloud-Laufwerk Verzögerung
  - RcloneView Mount
  - rclone GUI
  - Mount-Fehlerbehebung
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Langsames Öffnen von Dateien auf Cloud-Mounts beheben — VFS-Cache mit RcloneView abstimmen

> Cache-Einstellungen beeinflussen, wie ein eingebundenes Cloud-Laufwerk reagiert, und Sie können sie pro Mount im Mount Manager ändern.

Ein eingebundenes Cloud-Laufwerk fühlt sich wie eine lokale Festplatte an, bis Sie eine große Datei doppelklicken und warten müssen. Ordner werden langsam aufgelistet, Anwendungen hängen beim Speichern oder Medien ruckeln. RcloneView stellt die VFS-Cache-Optionen hinter jedem Mount bereit, sodass Sie sie pro Remote anpassen können, statt zu raten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zuerst den Cache-Modus prüfen

Öffnen Sie den Mount Manager über den Remote-Tab und bearbeiten Sie den Mount. Der Cache-Modus bietet off, minimal, writes und full. Standard ist writes, wodurch Dateien zwischengespeichert werden, die auf das Laufwerk geschrieben werden. Wenn Sie überwiegend dieselben Dateien wiederholt lesen, etwa Dokumente oder Medien, speichert full auch Lesezugriffe zwischen, sodass wiederholtes Öffnen aus dem lokalen Datenträger bedient werden kann. Off ist die schlankste Einstellung, sendet aber jeden Lesezugriff an die Cloud.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount-Manager-Einstellungen in RcloneView" class="img-large img-center" />

Edit und Delete sind deaktiviert, solange ein Laufwerk eingebunden ist. Hängen Sie es also zuerst aus, ändern Sie die Einstellung und binden Sie es dann erneut ein.

## Cache-Größe und Verzeichniszeit festlegen

Die maximale Cache-Größe ist standardmäßig -1, also ohne Größenbeschränkung, wodurch ein kleiner Datenträger volllaufen kann. Legen Sie ein Limit fest, das zu Ihrem freien Speicherplatz passt, und steuern Sie mit cache max age, wie lange zwischengespeicherte Daten gültig bleiben. Dir cache time legt fest, wie lange Ordnerlisten gespeichert werden: Ein höherer Wert verringert wiederholte Ordnerabfragen, aber Änderungen anderer Nutzer erscheinen später.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einen Remote-Ordner über die Explorer-Symbolleiste einbinden" class="img-large img-center" />

Stellen Sie sich einen Architekten vor, der 300-MB-Zeichnungen von einem freigegebenen Mount öffnet. Der Cache-Modus full plus ein sinnvolles Größenlimit bedeuten, dass die Datei beim ersten Öffnen heruntergeladen wird und spätere Zugriffe vom lokalen Datenträger lesen.

## Das richtige Werkzeug für die Aufgabe wählen

Ein Mount eignet sich zum Öffnen und Bearbeiten einzelner Dateien. Zum Verschieben ganzer Ordner lässt sich ein Sync- oder Kopierjob leichter überwachen als das Ziehen von Dateien über ein Laufwerk, und Sync, Kopieren sowie Folder Compare sind mit der FREE-Lizenz verfügbar. Unter Windows ist der Mount-Typ standardmäßig cmount, unter Linux und macOS nfsmount; Linux benötigt zudem eine installierte FUSE.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync-Job statt Mount für Massenübertragungen verwenden" class="img-large img-center" />

Wenn die Probleme weiterbestehen, aktivieren Sie unter Einstellungen die rclone-Protokollierung, setzen Sie die Stufe auf DEBUG, starten Sie das eingebettete rclone neu und reproduzieren Sie das Problem.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Mount Manager, hängen Sie das langsame Laufwerk aus und klicken Sie auf Edit.
3. Stellen Sie den Cache-Modus für leselastige Arbeit auf full und legen Sie eine maximale Cache-Größe fest.
4. Erhöhen Sie die Dir cache time, wenn das Durchsuchen langsam ist, und wählen Sie dann Save und binden Sie erneut ein.

Mit Cache-Einstellungen, die zu Ihrer Arbeitsweise passen, kann sich ein eingebundenes Cloud-Laufwerk so verhalten, wie Ihr Workflow es braucht.

---

**Verwandte Anleitungen:**

- [VFS-Cache — Mount-Leistung in RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [VFS-Cache-Fehler „Festplatte voll“ mit RcloneView beheben](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Cloud-Speicher mit RcloneView als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
