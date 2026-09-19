---
slug: copy-full-path-remote-paths-rcloneview
title: "Vollständigen Pfad kopieren — Schnelles Kopieren von Remote-Pfaden in RcloneView"
authors:
  - robin
description: "Nutzen Sie den Befehl „Vollständigen Pfad kopieren“ von RcloneView, um sofort remote:path-Strings für rclone-CLI-Befehle, Skripte und Job-Konfigurationen zu erhalten."
keywords:
  - RcloneView vollständigen Pfad kopieren
  - rclone Remote-Pfad
  - Pfad mit Remote kopieren
  - rclone CLI Pfadsyntax
  - Breadcrumb-Pfadleiste
  - RcloneView Terminal Workflow
  - rclone Skript-Pfade
  - Cloud-Remote-Pfad kopieren
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vollständigen Pfad kopieren — Schnelles Kopieren von Remote-Pfaden in RcloneView

> Hören Sie auf, Remote-Namen und Ordnerpfade von Hand einzutippen — klicken Sie mit der rechten Maustaste auf die Breadcrumb-Leiste und kopieren Sie genau den `remote:path`-String, den rclone erwartet.

Wer die RcloneView-GUI mit rclone-CLI-Befehlen kombiniert, kennt diese Reibung: Man findet einen Ordner visuell und muss dessen Pfad dann manuell rekonstruieren, um ihn in einem Skript oder Terminalbefehl zu referenzieren. Die Funktion „Vollständigen Pfad kopieren“ von RcloneView macht diesen Schritt komplett überflüssig, indem sie genau das `mygoogledrive:Meet recordings`-Format erzeugt, das rclone verwendet — bereit zum direkten Einfügen in einen Befehl, einen Job-Filter oder ein Automatisierungsskript.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wo sich der Befehl befindet

„Vollständigen Pfad kopieren“ befindet sich im Rechtsklick-Menü der Breadcrumb-Pfadleiste oben in jedem Explorer-Panel, neben Ausschneiden, Kopieren, Einfügen und Alles auswählen. Navigieren Sie zu einem beliebigen Ordner — lokal oder in der Cloud —, klicken Sie mit der rechten Maustaste auf die Pfadleiste selbst (nicht auf eine Dateizeile) und wählen Sie „Vollständigen Pfad kopieren“. RcloneView schreibt den Remote-Namen und den Ordnerpfad in derselben `remote:path`-Syntax in die Zwischenablage, die rclones eigene CLI, Konfigurationsdateien und RC-API-Aufrufe erwarten.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar with right-click context menu open" class="img-large img-center" />

Das ist wichtig, weil rclone bei dieser Syntax streng ist: Ein Doppelpunkt trennt den Remote-Namen vom Pfad, und ein Fehler dabei (ein überflüssiger Schrägstrich, ein fehlender Doppelpunkt) ist eine der häufigeren Ursachen für „Verzeichnis nicht gefunden“-Fehler, wenn Pfade aus dem Gedächtnis von Hand eingetippt werden.

## Warum es besser ist als manuelle Pfadeingabe

Das manuelle Eintippen von Pfaden stößt an seine Grenzen, sobald Ordnernamen Unicode-Zeichen, Leerzeichen oder tiefe Verschachtelungen enthalten — genau die Art von Pfaden, bei denen sich leicht Tippfehler einschleichen und die schwer zu debuggen sind. „Vollständigen Pfad kopieren“ umgeht das alles, indem es genau den literalen String kopiert, den RcloneView beim Rendern des Ordnerbaums bereits aufgelöst hat, sodass das Eingefügte garantiert mit dem tatsächlichen Inhalt des Remotes übereinstimmt. RcloneView bietet auch mit der FREE-Lizenz Synchronisation und Ordnervergleich, und „Vollständigen Pfad kopieren“ funktioniert in allen drei Bereichen gleich: Explorer, Synchronisationsjob-Konfiguration und Ordnervergleich.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder path for comparison in RcloneView" class="img-large img-center" />

Besonders nützlich ist es beim Einrichten des Quell- oder Zielordners eines Synchronisationsjobs oder beim Schreiben einer benutzerdefinierten Filterregel, die ein exaktes Pfadpräfix benötigt — das Einfügen eines kopierten Pfads vermeidet die kleinen Tippfehler, die stillschweigend die falschen Dateien ausschließen.

## Kombination mit dem integrierten Terminal

„Vollständigen Pfad kopieren“ entfaltet seine volle Stärke in Kombination mit dem Rclone-Terminal in der unteren Info-Ansicht. Kopieren Sie einen Pfad aus dem Explorer, wechseln Sie zum Terminal-Tab und fügen Sie ihn direkt in einen Befehl wie `rclone lsf` oder `rclone about` ein, ohne die App zu verlassen oder etwas erneut einzutippen. Das macht RcloneView zu einem hybriden Workflow-Tool: visuell durchsuchen, um den benötigten Ordner zu finden, und dann direkt zur CLI-Ebene wechseln für alles, was die GUI noch nicht bietet.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an rclone command referencing a copied remote path" class="img-large img-center" />

Für alle, die wiederkehrende Wartungsaufgaben skripten — eine `rclone size`-Prüfung, ein manueller `rclone check` zwischen zwei Ordnern —, entfernt dieser Shortcut den fehleranfälligsten Schritt beim manuellen Schreiben dieses Befehls.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html), falls noch nicht geschehen.
2. Öffnen Sie einen beliebigen Remote im Explorer und navigieren Sie zum gewünschten Ordner.
3. Klicken Sie mit der rechten Maustaste auf die Breadcrumb-Pfadleiste und wählen Sie „Vollständigen Pfad kopieren“.
4. Fügen Sie den kopierten `remote:path`-String in einen Synchronisationsjob, eine Filterregel oder das integrierte Rclone-Terminal ein.

Sobald das zur Routine wird, fühlt sich das manuelle Eintippen von Remote-Pfaden wie die langsamere Arbeitsweise an.

---

**Verwandte Anleitungen:**

- [RcloneView-Terminal: Die volle Kraft der rclone-CLI innerhalb einer GUI nutzen](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [RcloneView-Tastenkombinationen und Produktivitätstipps](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [10 Zwei-Fenster-Explorer-Tipps, die Ihre Cloud-Dateiverwaltung in RcloneView beschleunigen](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)

<CloudSupportGrid />
