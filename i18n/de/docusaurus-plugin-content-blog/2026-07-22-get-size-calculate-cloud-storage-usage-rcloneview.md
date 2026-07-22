---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "Get Size — Cloud-Speicher-Nutzung sofort berechnen in RcloneView"
authors:
  - jay
description: "Nutzen Sie die Get-Size-Funktion von RcloneView, um vor dem Sync oder der Migration die Gesamtgröße eines beliebigen Ordners oder einer Auswahl über 90+ Cloud-Anbieter hinweg zu berechnen."
keywords:
  - Get Size Funktion
  - Cloud-Speichergröße berechnen
  - Ordnergröße Cloud-Speicher
  - RcloneView Get Size
  - Cloud-Speicher-Nutzung prüfen
  - Ordnergröße vor Übertragung prüfen
  - Multi-Cloud-Speicher-Audit
  - rclone about Befehl GUI
  - Cloud-Dateimanager-Tools
  - Speichernutzungsanalyse
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Get Size — Cloud-Speicher-Nutzung sofort berechnen in RcloneView

> Klicken Sie in RcloneView mit der rechten Maustaste auf einen beliebigen Ordner oder eine Auswahl und erhalten Sie sofort die Gesamtgröße, ohne auf eine vollständige Übertragung zu warten, um herauszufinden, wie viele Daten Sie verschieben.

Cloud-Anbieter machen selten deutlich, wie groß ein Ordner tatsächlich ist, bis man versucht, ihn zu verschieben. Ein "Media"-Ordner mit Tausenden verschachtelter Unterordner kann Gigabytes an Daten verbergen, die erst sichtbar werden, wenn ein Sync-Job auf halbem Weg stecken bleibt oder mitten in der Übertragung eine Kontingentwarnung erscheint. Der Get-Size-Befehl von RcloneView im Kontextmenü des File Explorers löst dieses Problem, indem er die Gesamtgröße beliebiger ausgewählter Dateien oder Ordner auf Abruf berechnet, bevor Sie sich auf einen Sync, ein Mount oder eine Migration festlegen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ordnergröße prüfen, bevor Sie etwas verschieben

Wählen Sie eine oder mehrere Dateien oder Ordner in einem beliebigen Explorer-Panel aus, klicken Sie mit der rechten Maustaste und wählen Sie Get Size. RcloneView durchläuft die Auswahl und gibt die Gesamtgröße zurück, was besonders bei Ordnern mit tiefen Unterverzeichnisstrukturen nützlich ist, bei denen die Zusammenfassung am Ende der Dateiliste verschachtelte Inhalte allein nicht widerspiegelt. Dies funktioniert unabhängig davon, ob sich die Auswahl auf Google Drive, Amazon S3, einer selbst gehosteten Nextcloud-Instanz oder einer lokalen Festplatte befindet — RcloneView mountet UND synchronisiert 90+ Anbieter aus einem einzigen Fenster, sodass dasselbe Kontextmenü unabhängig vom durchsuchten Remote gilt.

Get Size ist am nützlichsten als Vorabprüfung. Bevor Sie einen großen Sync-Job oder eine einmalige Migration zwischen zwei Clouds starten, hilft die Überprüfung der tatsächlichen Größe des Quellordners dabei, die Übertragungszeit abzuschätzen, zu bestätigen, dass am Ziel genügend verfügbares Kontingent vorhanden ist, und zu entscheiden, ob Filterregeln nötig sind, um den Job zu verkleinern.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## Speichernutzung über mehrere Remotes hinweg prüfen

Da jedes verbundene Remote — Cloud oder lokal — im selben Explorer erscheint, dient Get Size zugleich als schnelle Möglichkeit, zu prüfen, wo Speicherplatz in einem Multi-Cloud-Setup verbraucht wird. Führt man es der Reihe nach auf den obersten Ordnern jedes Remotes aus, erhält man einen groben Überblick darüber, welche Konten sich ihrem Limit nähern — schneller, als sich bei jedem Anbieter einzeln in die jeweilige Web-Konsole einzuloggen, um die Nutzung zu prüfen.

Für eine präzisere Nutzungszahl auf Remote-Ebene statt für einen bestimmten Ordner unterstützt das integrierte Rclone Terminal `rclone about "remote:"`, das den gesamten genutzten und verfügbaren Speicher direkt von der API des Anbieters meldet. Get Size und der `about`-Befehl des Terminals ergänzen sich: Der eine bezieht sich auf eine bestimmte Auswahl, der andere meldet Gesamtsummen für das gesamte Konto.

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## Größenprüfungen zur Planung von Sync- und Filterregeln nutzen

Sobald die tatsächliche Größe eines Ordners bekannt ist, bietet der Sync-Assistent von RcloneView die Werkzeuge, um auf dieser Grundlage zu handeln. Schritt 3 der Job-Konfiguration umfasst Filter nach maximaler Dateigröße, maximalem Dateialter sowie vordefinierte Filter für Medien-, Video-, Bild- und Dokumenttypen, sodass ein übergroßer Ordner auf genau die Dateien reduziert werden kann, die tatsächlich übertragen werden müssen. Ein anschließender Dry Run zeigt genau vorab, welche Dateien unter den aktuellen Filtereinstellungen kopiert oder gelöscht würden, und bestätigt so, dass der Job den Erwartungen entspricht, bevor tatsächlich Daten verschoben werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie die Remotes, die Sie prüfen möchten, über Remote-Tab > New Remote.
3. Wählen Sie einen Ordner im Explorer aus, klicken Sie mit der rechten Maustaste und wählen Sie Get Size, um dessen Gesamtgröße zu sehen.
4. Nutzen Sie diesen Wert, um Filter oder Zeitpläne im Sync-Assistenten zu planen, bevor Sie eine vollständige Übertragung ausführen.

Genau zu wissen, mit wie vielen Daten man arbeitet, macht aus Rätselraten einen Plan, und Get Size macht diese Prüfung zu einer Sache von zwei Klicks statt zu einem drohenden Support-Ticket.

---

**Weiterführende Anleitungen:**

- [Job History & Übertragungsprotokolle — Jede Synchronisierung in RcloneView überwachen](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Dry-Run-Vorschau — Cloud-Sync in RcloneView simulieren, bevor Sie sich festlegen](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Doppelte Dateien im Cloud-Speicher mit RcloneView finden und entfernen](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
