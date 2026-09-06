---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "Cloud-Synchronisation erkennt keine neuen Dateien beheben — Lösung mit RcloneView"
authors:
  - jay
description: "Beheben Sie Cloud-Synchronisationsaufträge, die in RcloneView neue oder kürzlich geänderte Dateien übersehen, durch Anpassen von Cache-Einstellungen, Filtern und Aktualisierungsverhalten."
keywords:
  - Cloud-Synchronisation erkennt keine neuen Dateien
  - rcloneview Synchronisation fehlende Dateien
  - Synchronisationsauftrag wird nicht aktualisiert beheben
  - Verzeichnis-Cache veraltete Liste
  - rcloneview Fehlerbehebung
  - Cloud-Synchronisation Aktualisierungsproblem
  - neue Dateien werden nicht synchronisiert
  - rclone Synchronisationserkennung beheben
  - Auftrag erfasst Änderungen nicht
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Synchronisation erkennt keine neuen Dateien beheben — Lösung mit RcloneView

> Wenn ein Synchronisationsauftrag fehlerfrei durchläuft, aber brandneue Dateien zurücklässt, liegt die Ursache fast immer an einer veralteten Ordnerliste, nicht an einer defekten Verbindung.

Ein häufiges Support-Muster: Ein Synchronisationsauftrag wird ohne Fehler abgeschlossen, doch Dateien, die Minuten zuvor zum Quellordner hinzugefügt wurden, tauchen nie am Ziel auf. Es sieht wie ein Datenverlust aus, aber in den meisten Fällen hat der Auftrag lediglich eine zwischengespeicherte Verzeichnisliste statt des aktuellen Zustands des Remote gelesen. RcloneView gibt Ihnen die Werkzeuge an die Hand, um dies ohne Rätselraten zu diagnostizieren und zu beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Prüfen, ob die Explorer-Ansicht nur veraltet ist

Bevor Sie irgendwelche Auftragseinstellungen ändern, bestätigen Sie zunächst, dass die Dateien tatsächlich in der Synchronisation fehlen und nicht nur in der Ansicht verborgen sind. Öffnen Sie den Quell-Remote im Explorer-Panel und drücken Sie F5 (oder Cmd+R unter macOS), um ein Reload zu erzwingen. Die Dateiliste von RcloneView kann eine veraltete Momentaufnahme eines Ordners enthalten, wenn Sie seit dem Hinzufügen der Dateien nicht aktualisiert haben, und allein dies löst überraschend viele Meldungen über "fehlende Dateien".

Wenn die Dateien nach einem manuellen Reload erscheinen, der Synchronisationsauftrag sie aber beim letzten Lauf trotzdem übersprungen hat, liegt das Problem in der Filterung oder dem Cache-Verhalten des Auftrags selbst, nicht in der Explorer-Ansicht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Manuelles Ausführen eines Synchronisationsauftrags in RcloneView, um einen neuen Scan zu erzwingen" class="img-large img-center" />

## Filterregeln und Max-File-Age-Einstellungen überprüfen

Schritt 3 des Synchronisationsassistenten erlaubt Ihnen, einen Max-File-Age-Filter festzulegen, und es ist leicht, nach dem Testen eines Auftrags einen zu aggressiven Wert stehen zu lassen. Ist Max File Age zu eng eingestellt, werden Dateien außerhalb dieses Zeitfensters — einschließlich einiger neu hinzugefügter Dateien mit einem von einer früheren Cloud-Kopie geerbten älteren Zeitstempel — stillschweigend aus dem Lauf ausgeschlossen. Öffnen Sie Edit Job für die betroffene Synchronisation und prüfen Sie im Schritt Filtering Settings, ob eine Max-File-Age-, Max-File-Size- oder benutzerdefinierte Filterregel die neuen Dateien nach Name, Erweiterung oder Pfad ausschließt.

RcloneView bindet über 90 Anbieter ein UND synchronisiert sie aus einem einzigen Fenster heraus, unter Windows, macOS und Linux, sodass dieselbe Filterlogik gilt, egal ob Sie einen lokalen-zu-Cloud-Auftrag oder einen Cloud-zu-Cloud-Auftrag untersuchen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Überprüfung von Synchronisationsfiltereinstellungen, die neue Dateien ausschließen können" class="img-large img-center" />

## Cache-Verzögerungen im Mount-Verzeichnis ausschließen

Wenn sich die "fehlenden" Dateien hinter einem eingebundenen Laufwerk statt bei direktem Remote-Zugriff befinden, ist die Einstellung Dir Cache Time in Ihrer Mount-Konfiguration meist der Übeltäter. Eine lange Verzeichnis-Cache-Zeit beschleunigt das Durchsuchen, bedeutet aber auch, dass die eingebundene Ansicht anderswo hinzugefügte Dateien erst nach Ablauf dieses Caches widerspiegelt. Senken Sie die Dir Cache Time im Mount Manager für Remotes, bei denen Aktualität wichtiger ist als reine Browsing-Geschwindigkeit, oder trennen und binden Sie manuell erneut ein, um eine sofortige Aktualisierung zu erzwingen.

Führen Sie anschließend einen Dry Run des Synchronisationsauftrags aus — er listet genau auf, welche Dateien jetzt als neu erkannt werden, sodass Sie die Korrektur bestätigen können, bevor Sie eine tatsächliche Übertragung vornehmen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Auftragsverlauf mit einem korrigierten Synchronisationslauf nach Behebung der Erkennungseinstellungen" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erzwingen Sie ein Reload (F5) am Quell-Remote, um eine veraltete Explorer-Ansicht auszuschließen.
3. Öffnen Sie Edit Job und prüfen Sie Filtering Settings auf ein Max File Age oder eine benutzerdefinierte Regel, die die neuen Dateien ausschließt.
4. Senken Sie bei eingebundenen Remotes die Dir Cache Time im Mount Manager, binden Sie dann erneut ein und führen Sie den Auftrag zur Bestätigung mit Dry Run erneut aus.

Die meisten "fehlende Datei"-Synchronisationsprobleme lassen sich auf eine zwischengespeicherte Liste oder eine übersehene Filterregel zurückführen und nicht auf einen echten Übertragungsfehler. Dry Run und Job History von RcloneView geben Ihnen eine schnelle Möglichkeit, zu bestätigen, dass die Korrektur funktioniert hat.

---

**Weitere Anleitungen:**

- [Filterregeln — Selektive Synchronisation in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — Cloud-Synchronisation in RcloneView vorschauen](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Geplante Synchronisation läuft nicht beheben — Lösung mit RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
