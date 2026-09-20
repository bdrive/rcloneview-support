---
slug: copy-full-path-rclone-cli-paths-rcloneview
title: "Vollständigen Pfad kopieren — Sofort rclone-fertige Pfade in RcloneView erhalten"
authors:
  - jay
description: "Erfahren Sie, wie die Funktion „Vollständigen Pfad kopieren“ von RcloneView jeden Breadcrumb mit einem Klick in einen einsatzbereiten rclone-CLI-Pfad verwandelt."
keywords:
  - copy full path rclone
  - rclone cli path format
  - breadcrumb path bar
  - rclone remote path syntax
  - RcloneView terminal
  - cloud file path copy
  - rclone command line paths
  - GUI to CLI workflow
  - cloud storage path management
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vollständigen Pfad kopieren — Sofort rclone-fertige Pfade in RcloneView erhalten

> Hören Sie auf, Remote-Namen und Ordnerpfade von Hand erneut einzugeben — kopieren Sie sie direkt in Ihr Terminal.

Wer die RcloneView-GUI mit der rclone-Kommandozeile kombiniert, kennt diese Reibung: Man findet einen Ordner visuell und muss dann dessen Pfad manuell rekonstruieren, um einen `rclone copy`- oder `rclone check`-Befehl auszuführen. RcloneView eliminiert diesen Schritt vollständig mit Vollständigen Pfad kopieren, einer Rechtsklick-Aktion in der Breadcrumb-Leiste, die genau den remote:path-String kopiert, den rclone erwartet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## So funktioniert Vollständigen Pfad kopieren

Jedes Explorer-Panel in RcloneView verfügt über eine Breadcrumb-Pfadleiste oberhalb der Dateiliste, die die aktuelle Ordnerhierarchie des in diesem Tab aktiven Remotes anzeigt. Ein Rechtsklick irgendwo auf dem Breadcrumb öffnet ein Kontextmenü mit Ausschneiden, Kopieren, Einfügen, Alles auswählen und — entscheidend — Vollständigen Pfad kopieren (mit Remote).

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar showing a connected remote folder" class="img-large img-center" />

Die Auswahl kopiert einen String wie `mygoogledrive:Meet recordings` in die Zwischenablage, exakt in dem Format, das die rclone-CLI erwartet. Es gibt keine manuelle Übersetzung zwischen dem, was Sie in der GUI sehen, und dem, was rclone auf der Kommandozeile benötigt — der Remote-Name, der Doppelpunkt und der Ordnerpfad kommen korrekt an, einschließlich verschachtelter Unterordner.

Das ist besonders wichtig, sobald Sie mehr als eine Handvoll Remotes konfiguriert haben. Remote-Namen — insbesondere solche für S3-kompatible Endpunkte oder SFTP-Server — sind nicht immer leicht zu merken, und Ordnerstrukturen auf Cloud-Laufwerken können viele Ebenen tief sein. Vollständigen Pfad kopieren nimmt Ihnen dieses Raten ab.

## Einsatz im CLI-Workflow

Sobald Sie einen Pfad kopiert haben, fügen Sie ihn direkt in das in RcloneView integrierte Rclone-Terminal ein — den Terminal-Tab in der unteren Info View — um Ad-hoc-Befehle wie `rclone size` oder `rclone lsf` gegen genau diesen Ort auszuführen. Anders als reine Mount-Tools bietet RcloneView unter derselben FREE-Lizenz auch Synchronisation und Ordnervergleich, sodass Terminal, Sync-Jobs und Dateibrowser alle dieselben Remotes referenzieren, ohne Zugangsdaten erneut einzugeben.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView terminal tab used alongside the file explorer" class="img-large img-center" />

Der kopierte Pfad funktioniert auch außerhalb von RcloneView, in jeder eigenständigen rclone-Installation, die auf dieselbe `rclone.conf`-Datei verweist — nützlich beim Skripten geplanter Jobs oder beim Debuggen einer Synchronisation von einem Remote-Server aus.

## Ein praktisches Beispiel

Angenommen, ein Videoproduktionsteam speichert Rohmaterial sowohl auf Google Drive als auch in einem S3-kompatiblen Archiv-Bucket. Anstatt `s3archive:projects/2026/client-x/raw` von Hand einzutippen — mit dem Risiko eines Tippfehlers, der stillschweigend den falschen Ordner trifft — navigiert ein Editor visuell dorthin, klickt mit der rechten Maustaste auf den Breadcrumb und kopiert den exakten Pfad für einen Verifizierungsbefehl, bevor eine große Übertragung gestartet wird.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView file explorer with a deeply nested cloud folder open" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie die Remotes, mit denen Sie am häufigsten arbeiten, über den Remote Manager.
3. Navigieren Sie zu einem beliebigen Ordner und klicken Sie mit der rechten Maustaste auf dessen Breadcrumb-Pfadleiste.
4. Wählen Sie Vollständigen Pfad kopieren (mit Remote) und fügen Sie ihn in das Rclone-Terminal oder eine beliebige Kommandozeile ein.

Solche kleinen Annehmlichkeiten summieren sich, wenn Sie täglich zwischen dem visuellen Explorer und rohen rclone-Befehlen wechseln.

---

**Verwandte Anleitungen:**

- [RcloneView Terminal — Rclone-CLI innerhalb der GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Benutzerdefinierte Rclone-Flags — Erweiterte Optionen in RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Anleitung für Drag-and-Drop-Cloud-Übertragung mit RcloneView](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
