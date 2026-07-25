---
slug: fix-vfs-cache-disk-full-errors-rcloneview
title: "VFS-Cache-Fehler „Festplatte voll“ beheben — Mount-Cache mit RcloneView verwalten"
authors:
  - robin
description: "Erfahren Sie, warum ein eingebundenes Cloud-Laufwerk Ihre lokale Festplatte füllt, und wie Sie VFS-Cache-Fehler mit den Cache-Einstellungen von RcloneView beheben."
keywords:
  - VFS-Cache Festplatte voll
  - VFS-Cache-Fehler beheben
  - rclone Mount-Cache voll
  - RcloneView Cache-Modus
  - Mount-Cache maximale Größe
  - Cloud-Mount Speicherplatz
  - VFS-Cache-Modus writes
  - RcloneView Mount-Einstellungen
  - Cache maximales Alter
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# VFS-Cache-Fehler „Festplatte voll" beheben — Mount-Cache mit RcloneView verwalten

> Wenn ein eingebundenes Cloud-Laufwerk Ihre lokale Festplatte füllt, liegt das meist daran, dass der Cache-Modus höher eingestellt ist, als Ihr Arbeitsablauf benötigt — so diagnostizieren und beheben Sie das in RcloneView.

Das Einbinden von Cloud-Speicher als lokales Laufwerk stützt sich auf einen VFS-Cache (Virtual File System), um Lese- und Schreibvorgänge schnell und zuverlässig zu machen. Dieser Cache liegt jedoch auf Ihrer lokalen Festplatte und kann bei falscher Konfiguration unbemerkt mehrere Gigabyte belegen. Wenn ein Mount keine Schreibvorgänge mehr akzeptiert oder das Betriebssystem eine volle Festplatte meldet, obwohl Ihr Cloud-Speicher noch reichlich Platz hat, ist fast immer der VFS-Cache — nicht das Remote — die Ursache. RcloneView zeigt alle relevanten Cache-Einstellungen direkt im Mount-Konfigurationsbildschirm an, sodass die Behebung keine manuelle Bearbeitung einer rclone-Konfigurationsdatei erfordert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum der VFS-Cache Ihre lokale Festplatte füllt

Die Mount-Optionen von RcloneView umfassen vier Cache-Modi: off, minimal, writes (Standard) und full. Im Modus „writes" werden von Ihnen geänderte Dateien lokal zwischengespeichert, bis der Upload abgeschlossen ist. Im Modus „full" werden auch Dateien lokal zwischengespeichert, die Sie lediglich zum Lesen geöffnet haben, damit sie ohne erneuten Netzwerkzugriff erneut gelesen werden können — hervorragend für die Leistung, kann aber bedeuten, dass eine große Mediathek oder ein Datensatz, auf den über den Mount zugegriffen wird, Ihr Laufwerk unbemerkt füllt.

<img src="/support/images/en/blog/new-remote.png" alt="Mount configuration screen showing VFS cache mode options in RcloneView" class="img-large img-center" />

Wenn der Speicherplatz auf dem Laufwerk schwindet, auf dem sich Ihr RcloneView-Cache-Verzeichnis befindet, und nicht in den eigenen Nutzungsstatistiken Ihres Cloud-Speichers, ist das die erste Einstellung, die Sie überprüfen sollten.

## Den richtigen Cache-Modus wählen

Für die meisten alltäglichen Anwendungsfälle ist der Modus „writes" die richtige Balance: Er speichert nur das zwischen, was gerade aktiv geändert wird, und hält die Festplattennutzung im Rahmen Ihrer aktuellen Arbeit. Reservieren Sie den Modus „full" für Szenarien, in denen Sie wirklich ein erneutes Offline-Lesen großer Dateien benötigen, etwa bei der Videobearbeitung direkt über einen Mount, und wechseln Sie nach Abschluss des Projekts zurück zu „writes" oder „minimal". Der Modus „minimal" cacht am wenigsten und ist die sicherste Option, wenn der Speicherplatz knapp ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing writes and full VFS cache modes for a cloud mount" class="img-large img-center" />

RcloneView bindet 90+ Anbieter ein und synchronisiert sie in einem einzigen Fenster unter Windows, macOS und Linux, sodass dieselben Cache-Einstellungen unabhängig davon gelten, welches Remote Sie eingebunden haben.

## Cache-Maximalgröße und maximales Alter einstellen

Über den Cache-Modus selbst hinaus lässt Sie RcloneView den Cache mit einer Cache-Maximalgröße (in Bytes, oder -1 für unbegrenzt) und einem Cache-Maximalalter begrenzen, das steuert, wie lange zwischengespeicherte Daten gültig bleiben, bevor sie entfernt werden. Eine konkrete Maximalgröße festzulegen — beispielsweise deutlich unterhalb Ihres freien Speicherplatzes — verhindert, dass eine einzelne große Lesesitzung selbst im Modus „full" jemals das gesamte Laufwerk auffüllt. Kombinieren Sie dies mit einem kürzeren Maximalalter, wenn Sie mit Dateien arbeiten, die anderswo häufig geändert werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting cache max size and cache max age for a mount in RcloneView" class="img-large img-center" />

## Einen bereits vollen Cache bereinigen

Wenn ein Mount aufgrund eines vollen Caches bereits Schreibvorgänge verweigert, hängen Sie ihn über den Mount Manager aus, wodurch die zwischengespeicherten Daten freigegeben werden, und binden Sie ihn dann mit einem niedrigeren Cache-Modus oder einer expliziten Maximalgröße neu ein, bevor Sie weiterarbeiten. Wenn Sie vorher die Debug-Protokollierung aktivieren und den Log-Tab prüfen, können Sie bestätigen, ob tatsächlich die Cache-Bereinigung — und nicht ein Netzwerk- oder Berechtigungsfehler — die Ursache war.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Unmounting and re-mounting a cloud drive from Mount Manager after a cache disk full error" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Mount Manager und bearbeiten Sie die Einstellungen des betroffenen Mounts.
3. Wechseln Sie den Cache-Modus zu „writes" oder „minimal" und legen Sie eine konkrete Cache-Maximalgröße fest.
4. Hängen Sie aus und wieder ein, um die neuen Limits anzuwenden, und überwachen Sie anschließend die Festplattennutzung im normalen Betrieb.

Ein paar Minuten Feintuning bei Cache-Modus und Größeneinstellungen verwandeln einen unvorhersehbaren Fehler „Festplatte voll" in einen Mount, der sich genau wie erwartet verhält.

---

**Weitere Anleitungen:**

- [VFS-Cache und Mount-Leistung in RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Plex-Pufferung mit VFS-Cache-Tuning in RcloneView beheben](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)
- [Verbindungsabbrüche bei Cloud-Mounts mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)

<CloudSupportGrid />
