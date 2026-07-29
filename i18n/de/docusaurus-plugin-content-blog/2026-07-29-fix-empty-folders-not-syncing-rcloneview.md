---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Leere Ordner werden nicht synchronisiert beheben — Verzeichniserstellung mit RcloneView aktivieren"
authors:
  - robin
description: "Erfahren Sie, warum leere Ordner bei der Cloud-Synchronisation verschwinden und wie Sie das mit der Option zum Erstellen leerer Verzeichnisse in RcloneView beheben."
keywords:
  - leere Ordner werden nicht synchronisiert
  - fehlende Ordner bei Cloud-Synchronisation beheben
  - RcloneView leere Verzeichnisse erstellen
  - Ordnerstruktur bei Cloud-Synchronisation
  - rclone leere Verzeichnisse synchronisieren
  - Ordnerstruktur nicht erhalten
  - fehlende leere Ordner bei Synchronisation
  - RcloneView Synchronisationseinstellungen
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Leere Ordner werden nicht synchronisiert beheben — Verzeichniserstellung mit RcloneView aktivieren

> Wenn ein Synchronisationsjob Ihre sorgfältig organisierten leeren Ordner zurücklässt, liegt die Lösung in einem einzigen Schalter im Synchronisations-Setup von RcloneView, nicht in einem Fehler Ihres Cloud-Anbieters.

Die meisten Synchronisationsengines, einschließlich rclone, übertragen nur Objekte, die tatsächlich Daten enthalten — ein leerer Ordner hat nichts zu kopieren und wird daher standardmäßig vollständig übersprungen. Für ein flaches Backup ist das kein Problem, aber es stört jeden Workflow, der auf eine feste Ordnerstruktur angewiesen ist, etwa eine Projektvorlage, einen Client-Intake-Baum oder Platzhalterverzeichnisse, die ein Team schon sehen soll, bevor Dateien darin landen. RcloneView zeigt die Einstellung, die dieses Verhalten steuert, direkt im Synchronisationsassistenten an, sodass Sie keine Konfigurationsdatei anfassen oder einen Job blind erneut ausführen müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum leere Ordner ausgelassen werden

Wenn RcloneView (über rclone) während einer Synchronisation einen Quellbaum durchläuft, erstellt es seine Übertragungsliste anhand von Dateien, nicht von Verzeichnissen. Ein Ordner, der nur Unterordner ohne Dateien darin enthält — auch nicht weiter unten in der Hierarchie — erzeugt keine übertragbaren Objekte, sodass dem Ziel nichts mitteilt, dass dieser Ordner existieren sollte. Dies ist erwartetes Synchronisationsverhalten, kein Defekt — überrascht aber jeden, der annimmt, dass eine Ordner-zu-Ordner-Synchronisation den exakten Baum einschließlich der leeren Zweige erhält.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView-Synchronisationsassistent mit Konfigurationsoptionen von Schritt 1" class="img-large img-center" />

Die Lösung befindet sich in Schritt 1 des Synchronisationskonfigurationsassistenten, neben Quelle, Ziel und Synchronisationsrichtung — leicht zu übersehen beim ersten Durchgang, weil sie standardmäßig deaktiviert ist.

## „Leere Verzeichnisse erstellen" aktivieren

Aktivieren Sie in Schritt 1 des 4-stufigen Synchronisationsassistenten die Option „Leere Verzeichnisse erstellen", bevor Sie den Job speichern. Ist sie aktiviert, weist RcloneView rclone an, die vollständige Verzeichnisstruktur am Ziel zu replizieren, einschließlich der Zweige, die derzeit keine Dateien enthalten. Das ist besonders wichtig für Jobs, die wiederholt nach Zeitplan laufen — ein heute leerer Ordner könnte nächste Woche Dateien erhalten, und eine bereits vorbereitete Zielstruktur vermeidet Unklarheiten darüber, wo neue Inhalte landen sollen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Schalter 'Leere Verzeichnisse erstellen' in Schritt 1 der RcloneView-Synchronisationskonfiguration" class="img-large img-center" />

Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — bereits mit der FREE-Lizenz —, sodass diese Lösung gilt, egal ob Sie ein einzelnes Ziel spiegeln oder eine Quelle mit 1:N-Synchronisation auf mehrere Ziele verteilen.

## Die Lösung mit Dry Run überprüfen

Bevor Sie sich auf eine vollständige Synchronisation festlegen, nutzen Sie die Dry-Run-Funktion von RcloneView, um genau zu sehen, welche Ordner und Dateien erstellt oder geändert werden. Dry Run listet die anstehenden Vorgänge auf, ohne das Ziel zu berühren — der zuverlässigste Weg, um vor der eigentlichen Ausführung des Jobs zu bestätigen, dass Ihre leeren Ordner tatsächlich erscheinen werden — besonders nützlich, wenn Sie die Einstellung nachträglich in einen Job einbauen, der schon länger läuft.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Vorschau eines Testlaufs vor der Ausführung eines Synchronisationsjobs in RcloneView" class="img-large img-center" />

Wenn ein geplanter Job bereits ohne aktivierte Option gelaufen ist, speichern Sie ihn mit aktiviertem „Leere Verzeichnisse erstellen" erneut und führen Sie ihn noch einmal aus — beim nächsten Lauf wird die fehlende Verzeichnisstruktur am Ziel nachgeholt.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen oder erstellen Sie Ihren Synchronisationsjob und gehen Sie zu Schritt 1: Speicher konfigurieren.
3. Aktivieren Sie „Leere Verzeichnisse erstellen", bevor Sie speichern.
4. Führen Sie zuerst einen Dry Run aus, um zu bestätigen, dass die Ordnerstruktur Ihren Erwartungen entspricht.

Ein einziges Kontrollkästchen genügt, um Ihre Ordnerstruktur in jeder Cloud, mit der Sie synchronisieren, intakt zu halten.

---

**Verwandte Anleitungen:**

- [Leitfaden zum Ordnervergleich — Unterschiede mit RcloneView erkennen](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — Cloud-Synchronisation vor der Übertragung mit RcloneView vorschauen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Filterregeln — Selektive Synchronisation mit RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
