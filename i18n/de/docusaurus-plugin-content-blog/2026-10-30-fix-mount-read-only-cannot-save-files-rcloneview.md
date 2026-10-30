---
slug: fix-mount-read-only-cannot-save-files-rcloneview
title: "Cloud-Mount schreibgeschützt und Speichern nicht möglich — Lösung mit RcloneView"
authors:
  - steve
description: "Ein eingebundenes Cloud-Laufwerk lässt kein Speichern oder Bearbeiten zu? Prüfen Sie die Read-only-Option, den Cache-Modus, Berechtigungen und FUSE in RcloneView, damit der Mount wieder beschreibbar ist."
keywords:
  - Mount Cloud-Laufwerk schreibgeschützt
  - Dateien auf eingebundenem Laufwerk nicht speicherbar
  - rclone mount schreibgeschützt
  - RcloneView Mount Fehlerbehebung
  - VFS-Cache-Modus writes
  - FUSE-Mount Linux
  - Cloud-Laufwerk Schreibfehler
  - Mount-Manager-Einstellungen
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

# Cloud-Mount schreibgeschützt und Speichern nicht möglich — Lösung mit RcloneView

> Wenn ein eingebundenes Cloud-Laufwerk das Speichern verweigert, liegt die Ursache meist an einer Mount-Einstellung oder einer Berechtigung — beides lässt sich schnell prüfen.

Sie haben einen Remote eingebunden und ein Dokument geöffnet, aber das Speichern schlägt fehl, oder Dateien lassen sich hineinkopieren, aber nicht bearbeiten. Bevor Sie dem Cloud-Anbieter die Schuld geben, sehen Sie sich an, wie der Mount konfiguriert wurde. RcloneView bündelt alle relevanten Optionen in einem Dialog, sodass Sie die Ursache ohne Kommandozeile finden. RcloneView synchronisiert und vergleicht außerdem Ordner, wobei die Grundfunktionen mit der FREE-Lizenz verfügbar sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zuerst die Option Read Only prüfen

Die Mount-Einstellungen enthalten einen Schalter **Read only**, der standardmäßig ausgeschaltet ist. War er beim Speichern des Mounts aktiviert, werden alle Schreibzugriffe abgelehnt. Öffnen Sie den Mount-Manager über den Tab Remote, heben Sie die Einbindung des Eintrags auf und bearbeiten Sie ihn. Edit und Delete sind deaktiviert, solange ein Laufwerk eingebunden ist; zum Ändern ist also ein Aushängen erforderlich.

Schalten Sie Read only aus und wählen Sie dann Save and mount.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount-Manager in RcloneView mit Mount-Einstellungen" class="img-large img-center" />

## Cache-Modus prüfen

Der Standard-VFS-Cache-Modus ist **writes**; er puffert geschriebene Dateien lokal, damit Anwendungen normal speichern können. Wird er auf off oder minimal gesetzt, können Programme versagen, die in Dateien springen (Seek) oder sie an Ort und Stelle neu schreiben. Schlägt das Speichern in einem Editor fehl, probieren Sie writes oder full.

Achten Sie auch auf den freien Speicherplatz am Cache-Speicherort. Ein voller Cache-Datenträger verursacht Schreibfehler, die wie Berechtigungsprobleme aussehen. Falls Sie das vermuten, lesen Sie den unten verlinkten Leitfaden zu VFS-Cache-Fehlern bei vollem Datenträger.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Cache-Modus beim Einbinden aus dem Remote-Explorer konfigurieren" class="img-large img-center" />

## Konto- und Plattformursachen ausschließen

Manche Remotes sind von Natur aus schreibgeschützt. Der HTTP-Remote bietet nur Lesezugriff, und in einen freigegebenen Ordner, für den Sie nur Leserechte erhalten haben, lässt sich unabhängig vom Mount nicht schreiben. Testen Sie dies, indem Sie über das Explorer-Panel eine Datei hochladen: Schlägt auch das fehl, liegt das Problem beim Remote oder dessen Berechtigungen, nicht beim Mount.

Unter Linux benötigt das Einbinden FUSE (fuse3 wird empfohlen). Wenn andere Benutzer Zugriff brauchen, aktivieren Sie **Allow other**. Unter Windows kann sich ein Mount, der als Netzlaufwerk erscheint, bei manchen Anwendungen anders verhalten; schalten Sie diese Option daher einmal um.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf zur Prüfung fehlgeschlagener Schreibvorgänge" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hängen Sie das Laufwerk aus, öffnen Sie seinen Eintrag im Mount-Manager und vergewissern Sie sich, dass Read only aus ist.
3. Setzen Sie den Cache-Modus auf writes und prüfen Sie den freien Speicherplatz.
4. Testen Sie einen Upload im Explorer, um die Remote-Berechtigungen von den Mount-Einstellungen zu trennen.

Die meisten Schreibfehler lassen sich auf eine dieser Prüfungen zurückführen, und alle dauern nur wenige Minuten.

---

**Weiterführende Anleitungen:**

- [Cloud-Mount-Trennungen und -Abbrüche mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)
- [VFS-Cache-Fehler bei vollem Datenträger mit RcloneView beheben](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Langsames Öffnen von Dateien auf Mounts beheben — VFS-Cache-Modus mit RcloneView](https://rcloneview.com/support/blog/fix-mount-slow-file-open-vfs-cache-mode-rcloneview)

<CloudSupportGrid />
