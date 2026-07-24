---
slug: memory-remote-ram-temp-storage-rcloneview
title: "Memory-Remote — RAM-basierter temporärer Speicher in RcloneView"
authors:
  - casey
description: "Erfahren Sie, wie das virtuelle Memory-Remote von RcloneView RAM-basierten temporären Speicher für schnelles Testen, Staging und Wegwerf-Cloud-Workflows nutzt."
keywords:
  - memory remote rclone
  - rcloneview memory remote
  - RAM-basierter Cloud-Speicher
  - virtual remote rcloneview
  - temporärer Cloud-Speicher
  - rclone Test-Remote
  - Staging Cloud-Übertragungen
  - rcloneview virtual remotes
  - Wegwerfspeicher rclone
  - Dateispeicher im Arbeitsspeicher
tags:
  - RcloneView
  - feature
  - guide
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memory-Remote — RAM-basierter temporärer Speicher in RcloneView

> Brauchen Sie einen Arbeitsbereich, der beim Schließen sofort verschwindet? Das virtuelle **Memory**-Remote von RcloneView bietet RAM-basierten Speicher zum Testen von Sync-Jobs und Staging von Übertragungen, ohne die Festplatte zu berühren.

Unter den virtuellen Remotes von RcloneView — Alias, Crypt, Cache, Chunker, Combine, Union, Hasher und Compress — hebt sich Memory ab: Es speichert Daten für die Dauer der Sitzung vollständig im RAM, ohne dass etwas auf die Festplatte geschrieben oder beim Beenden zurückgelassen wird. Diese vorübergehende, spurlose Natur macht es zu einem praktischen Werkzeug für eine bestimmte Gruppe von Workflows statt für den alltäglichen Speicher.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wofür das Memory-Remote gedacht ist

Anders als Alias (eine Verknüpfung zu einem vorhandenen Pfad) oder Crypt (Verschlüsselung für vorhandene Remotes) ist Memory ein eigenständiges Speicher-Backend, das nur im Arbeitsspeicher des laufenden rclone-Prozesses existiert. Alles, was hineinkopiert wird, verschwindet, sobald die eingebettete rclone-Instanz neu startet oder die App geschlossen wird. Genau diese vorübergehende, spurlose Natur macht es für eine bestimmte Reihe von Workflows nützlich statt für den alltäglichen Speicher.

RcloneView mountet UND synchronisiert 90+ Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux — das Memory-Remote ist nur ein weiterer Eintrag im selben Remote Manager, konfiguriert und genutzt auf dieselbe Weise wie jede echte Cloud-Verbindung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a transfer job in RcloneView" class="img-large img-center" />

## Sync-Jobs sicher testen

Bevor Sie einen neuen Sync-Job auf produktiven Cloud-Speicher richten, können Sie ein Memory-Remote erstellen und den Job zunächst dagegen ausführen. So bestätigen Sie, dass Ihre Quellauswahl, Filterregeln und Ordnerstruktur wie erwartet funktionieren, ohne echte Daten auf der Zielseite zu riskieren. In Kombination mit Dry Run erhalten Sie zwei Sicherheitsebenen: eine simulierte Vorschau, gefolgt von einer echten Testkopie, die nichts kostet und nichts zurücklässt.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a test sync job in RcloneView" class="img-large img-center" />

## Übertragungen zwischen Anbietern zwischenlagern

Wenn Sie Dateien zwischen zwei Cloud-Anbietern verschieben, die nicht effizient direkt übertragen, kann ein Memory-Remote als schnelle Zwischenstation für kleine Batches dienen — nützlich, um eine mehrstufige Batch-Operation zu validieren, bevor sie tatsächlich geplant wird. Da Memory keinen Festplatten-I/O-Overhead hat, werden kleine Staging-Übertragungen schnell abgeschlossen, sodass Sie eine Batch-Sequenz rasch iterieren können.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Managing remotes in RcloneView's Mount Manager" class="img-large img-center" />

## Ein Memory-Remote einrichten

Das Hinzufügen eines Memory-Remotes folgt demselben New-Remote-Ablauf wie jede andere Verbindung in RcloneView.

**So richten Sie es ein:**

1. Öffnen Sie den Remote-Tab und klicken Sie auf **New Remote**.
2. Wählen Sie **Memory** aus der Liste der virtuellen Remote-Typen.
3. Speichern — es sind keine Zugangsdaten oder Konfiguration erforderlich, da der Speicher vollständig lokal im laufenden rclone-Prozess liegt.
4. Verwenden Sie es als Quelle oder Ziel in jedem Sync-, Copy- oder Batch-Job wie ein normales Remote.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into a remote in RcloneView" class="img-large img-center" />

## Wann Sie es nicht verwenden sollten

Memory-Speicher ist kein Backup-Ziel und sollte niemals etwas enthalten, das Sie behalten müssen — ein Neustart von rclone oder der App löscht ihn vollständig. Er ist zudem durch den verfügbaren System-RAM begrenzt und daher nur für kleine Testbatches praktikabel, nicht für groß angelegte Übertragungen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie über den Bereich Virtual Remotes von New Remote ein Memory-Remote hinzu.
3. Richten Sie einen Test-Sync-Job darauf, bevor Sie denselben Job gegen ein echtes Ziel ausführen.
4. Verwenden Sie Job History, um zu bestätigen, dass der Test wie erwartet verlief, und wechseln Sie dann zu Ihrem tatsächlichen Cloud-Remote.

Ein wegwerfbares, RAM-basiertes Remote ist eine kleine Ergänzung, schließt aber eine echte Lücke zwischen „mit Dry Run simulieren" und „in Produktion übernehmen", wenn Sie einen neuen Workflow aufbauen.

---

**Weiterführende Anleitungen:**

- [Virtual Remotes — Combine, Union und Alias in RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias-Remote — Verknüpfungspfade in RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)
- [Cloud-Backups verschlüsseln — Crypt-Remote-Leitfaden mit RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
