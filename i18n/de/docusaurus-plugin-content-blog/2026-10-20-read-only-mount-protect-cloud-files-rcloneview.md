---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "Schreibgeschütztes Mount — Cloud-Dateien mit RcloneView vor versehentlichen Änderungen schützen"
authors:
  - casey
description: "Mit der Option Read only beim Mount in RcloneView durchsuchen Sie Cloud-Speicher im Datei-Explorer, ohne versehentliche Bearbeitungen oder Löschungen zu riskieren."
keywords:
  - schreibgeschütztes Mount
  - Cloud-Speicher schreibgeschützt einbinden
  - Cloud-Dateien schützen
  - RcloneView Mount
  - rclone Mount schreibgeschützt
  - Löschen auf Cloud-Laufwerk verhindern
  - Mount Manager
  - virtuelles Laufwerk
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Schreibgeschütztes Mount — Cloud-Dateien mit RcloneView vor versehentlichen Änderungen schützen

> Binden Sie einen Remote als lokales Laufwerk ein, das Sie durchsuchen und aus dem Sie kopieren können, das sich aber nie ändern lässt.

Ein eingebundenes Cloud-Laufwerk verhält sich wie jede andere Festplatte. Ein versehentliches Löschen, ein Ziehen in die falsche Richtung oder eine Anwendung, die Dateien überschreibt, kann daher Ihre Cloud-Daten verändern. Wenn Sie nur lesen möchten, etwa um ein Archiv zu prüfen oder Referenzdateien zu öffnen, ist ein Laufwerk, auf das nicht geschrieben werden kann, die risikoärmste Wahl. Die Mount-Einstellungen von RcloneView enthalten dafür die Option Read only. RcloneView bindet über 90 Anbieter in einem Fenster unter Windows, macOS und Linux ein und synchronisiert sie.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wann ein schreibgeschütztes Mount sinnvoll ist

Denken Sie an ein Compliance-Team, das abgeschlossene Fallakten in einem Bucket ablegt. Mitarbeitende müssen Dokumente öffnen und kopieren können, aber niemand darf sie verändern. Ein weiteres Beispiel ist ein gemeinsames Backup-Ziel, das Sie vom Desktop aus prüfen möchten, ohne das Backup selbst zu gefährden.

In beiden Fällen können Personen mit einem schreibgeschützten Mount gewohnte Werkzeuge wie Datei-Explorer, Mediaplayer und Viewer nutzen, während Schreibversuche abgelehnt werden. Es ersetzt nicht die Berechtigungen beim Speicherdienst, bietet aber eine zusätzliche Absicherung auf Ihrem eigenen Rechner.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einen Remote-Ordner im RcloneView-Explorer einbinden" class="img-large img-center" />

## Read Only im Mount Manager aktivieren

Öffnen Sie den Mount Manager über den Tab Remote und wählen Sie New mount, oder starten Sie über das Mount-Symbol in einem Explorer-Panel. Wählen Sie den Remote und das Unterverzeichnis und setzen Sie in den Optionen das Häkchen bei **Read only**. Unter Windows können Sie einen Laufwerksbuchstaben wählen, unter macOS und Linux legen Sie einen lokalen Mount-Pfad fest. Mit Save and mount wird das Laufwerk sofort verbunden.

Im selben Dialog finden Sie weitere Optionen: Volume-Name, Cache-Modus (off, minimal, standardmäßig writes oder full) und unter Windows die Anzeige als Netzlaufwerk. Da nichts geschrieben wird, spielt der Standard-Cache-Modus bei schreibgeschützter Nutzung kaum eine Rolle, full kann aber wiederholtes Lesen derselben Dateien beschleunigen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager mit Mount-Optionen in RcloneView" class="img-large img-center" />

## Das Mount ändern oder entfernen

Edit und Delete sind deaktiviert, solange ein Mount aktiv ist. Heben Sie das Mount daher zuerst im Mount Manager oder über das Menü im Infobereich der Taskleiste auf. Um ein Laufwerk später beschreibbar zu machen, heben Sie das Mount auf, bearbeiten den Eintrag, entfernen das Häkchen bei Read only und binden es erneut ein. Sie können für denselben Remote zwei Einträge behalten: einen schreibgeschützten zum Durchsuchen und einen beschreibbaren für gezielte Arbeiten.

Mit einer PLUS-Lizenz kann Auto mount Ihre Laufwerke beim Start verbinden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dateien zwischen Remotes in RcloneView kopieren" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie den Remote hinzu, den Sie durchsuchen möchten, und öffnen Sie dann den Mount Manager über den Tab Remote.
3. Erstellen Sie ein neues Mount, wählen Sie Remote und Ordner und setzen Sie das Häkchen bei Read only.
4. Wählen Sie Save and mount und öffnen Sie das Laufwerk im Datei-Explorer.

Mit schreibgeschütztem Zugriff können Sie alles öffnen, ohne Änderungen zu riskieren.

---

**Weiterführende Anleitungen:**

- [Automatisches Einbinden beim Start](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [VFS-Cache für die Mount-Leistung](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Konflikte bei Mount-Laufwerksbuchstaben unter Windows beheben](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
