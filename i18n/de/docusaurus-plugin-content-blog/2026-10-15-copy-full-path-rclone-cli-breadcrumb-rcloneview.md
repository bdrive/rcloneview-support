---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "Vollständigen Pfad mit Remote kopieren — GUI und rclone-Befehle in RcloneView verbinden"
authors:
  - kai
description: "Nutzen Sie „Copy Full Path“ in der RcloneView-Breadcrumb, um remote:path-Zeichenfolgen zu kopieren und im integrierten rclone-Terminal auszuführen. Ein praktischer Workflow von der GUI zur CLI."
keywords:
  - rclone Remote-Pfad
  - rclone vollständigen Pfad kopieren
  - RcloneView Breadcrumb
  - rclone Terminal GUI
  - rclone about Befehl
  - remote:path Syntax
  - rclone GUI Workflow
  - rclone Befehlshilfe
  - RcloneView Funktion
  - Cloud-Pfad kopieren
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vollständigen Pfad mit Remote kopieren — GUI und rclone-Befehle in RcloneView verbinden

> Ein Rechtsklick macht aus dem gerade geöffneten Ordner einen sofort nutzbaren rclone-Pfad.

Wer schon einmal einen rclone-Befehl getippt hat, kennt die Mühe, `remote:path` exakt richtig zu schreiben – besonders bei Leerzeichen und verschachtelten Ordnern. RcloneView löst das mit einer Breadcrumb-Menüoption, die den vollständigen Pfad einschließlich des Remote-Namens direkt in die Zwischenablage kopiert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was „Copy Full Path“ bewirkt

Jedes Explorer-Panel hat eine Breadcrumb-Pfadleiste, die zeigt, wo Sie sich befinden. Mit einem Rechtsklick darauf finden Sie Ausschneiden, Kopieren, Einfügen, Alles auswählen und **Copy Full Path (with Remote)**. Die letzte Option kopiert den Speicherort in der Form `mygoogledrive:Meet recordings`, genau der Syntax, die rclone erwartet.

<img src="/support/images/en/blog/new-remote.png" alt="Im RcloneView-Explorer aufgelistete Remotes" class="img-large img-center" />

Da der Remote-Name enthalten ist, müssen Sie nicht raten, zu welchem Ihrer vielen Remotes ein Ordner gehört. Das ist wichtig, wenn Sie mehrere Konten desselben Anbieters verwalten.

## In das integrierte Terminal einfügen

RcloneView enthält in der unteren Info-Ansicht einen Terminal-Tab mit vollständiger Terminal-Emulation. Geben Sie `rclone` gefolgt von einem Leerzeichen ein, um Befehlsvorschläge zu erhalten, und fügen Sie dann den kopierten Pfad ein. Zum Beispiel meldet `rclone about "remote:"` die Speichernutzung eines Remotes, und `rclone listremotes` listet alle konfigurierten Remotes auf. Setzen Sie Pfade mit Leerzeichen in Anführungszeichen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Jobs und Befehle in RcloneView ausführen" class="img-large img-center" />

Dieser Wechsel zwischen GUI und CLI ist nützlich, wenn Sie einen einmaligen Befehl brauchen, den der Assistent nicht anbietet, und den richtigen Ordner trotzdem im visuellen Explorer finden möchten.

## Pfade in Jobs und Dokumentation verwenden

Kopierte Pfade sind auch außerhalb des Terminals praktisch: Wenn Sie sie in ein Runbook, ein Support-Ticket oder den Chat eines Kollegen einfügen, beziehen sich alle garantiert auf denselben Speicherort. Prüfen Sie das Ergebnis nach einer Übertragung im Tab „Transferring“ oder im Job-Verlauf (Job History), der Status, Größe und Geschwindigkeit pro Lauf erfasst.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf mit abgeschlossenen Übertragungen" class="img-large img-center" />

RcloneView ist eine auf rclone aufbauende GUI und kein Ersatz dafür. Die Befehle, die Sie im Terminal ausführen, verwenden daher dieselbe eingebettete Engine wie Ihre Jobs.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie ein Remote hinzu und navigieren Sie im Explorer zu einem Ordner.
3. Klicken Sie mit der rechten Maustaste auf die Breadcrumb-Leiste und wählen Sie **Copy Full Path (with Remote)**.
4. Öffnen Sie den Terminal-Tab, geben Sie `rclone about "` ein und fügen Sie den Pfad ein.

Weniger Tippfehler, schnellere Fehlersuche und ein Werkzeug zum Klicken und Tippen.

---

**Verwandte Anleitungen:**

- [Rclone-Terminal in RcloneView](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Terminal- und GUI-Workflow](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Alias-Remote-Verknüpfungspfade](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
