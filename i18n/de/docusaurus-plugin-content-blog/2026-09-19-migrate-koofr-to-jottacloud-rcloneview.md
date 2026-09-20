---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "Von Koofr zu Jottacloud migrieren — Dateien übertragen mit RcloneView"
authors:
  - alex
description: "Verschieben Sie Dateien von Koofr zu Jottacloud mit RcloneView — verifizierte Cloud-zu-Cloud-Übertragung zwischen zwei europäischen, auf Privatsphäre ausgerichteten Speicheranbietern."
keywords:
  - Koofr zu Jottacloud migrieren
  - Koofr zu Jottacloud Übertragung
  - RcloneView Koofr
  - RcloneView Jottacloud
  - Europäische Cloud-Migration
  - Cloud-zu-Cloud-Übertragung
  - Koofr Jottacloud Synchronisation
  - Dateien zwischen Clouds verschieben
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Von Koofr zu Jottacloud migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Ihre Dateien direkt von Koofr zu Jottacloud, Cloud zu Cloud, ohne den Umweg über einen lokalen Download-Ordner.

Koofr und Jottacloud sind beide europäische Speicheranbieter, die bei Nutzern beliebt sind, denen Datenresidenz und Privatsphäre wichtig sind. Es ist üblich, nach dem Vergleich von Tarifen oder Kontolimits alles auf einen der beiden Dienste zu konsolidieren. Wer diese Migration durch Herunterladen auf einen Laptop und erneutes Hochladen erledigt, verschwendet Bandbreite und Zeit und riskiert bei einem Verbindungsabbruch unvollständige Übertragungen. RcloneView verbindet sich mit beiden Remotes gleichzeitig und kopiert Dateien direkt zwischen ihnen, sodass die Übertragung Ihren lokalen Rechner nur als Durchgangsstation nutzt, nicht als Zwischenspeicher.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Fügen Sie Koofr über Remote-Tab > Neuer Remote als Remote hinzu und wiederholen Sie den Vorgang für Jottacloud. Beide verbinden sich über ihren eigenen Kontoanmeldeprozess statt über einen gemeinsamen Anmeldebildschirm, halten Sie also die Kontodaten für jeden Anbieter griffbereit, bevor Sie beginnen. RcloneView bindet ein und synchronisiert über 90 Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux, sodass diese Einrichtung unabhängig von der Plattform, von der aus Sie migrieren, identisch funktioniert.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

Sobald beide Remotes im Remote-Manager erscheinen, öffnen Sie zwei Explorer-Panels nebeneinander — eines mit Koofr, das andere mit Jottacloud —, sodass Sie beide Dateibäume gleichzeitig sehen können, bevor Sie etwas verschieben.

## Die Übertragung durchführen

Für eine einmalige Migration ziehen Sie die zu verschiebenden Ordner per Drag-and-drop direkt vom Koofr-Panel auf das Jottacloud-Panel. Da es sich um eine Übertragung zwischen zwei unterschiedlichen Remotes handelt, behandelt RcloneView den Drop standardmäßig als Kopie, sodass die Koofr-Originale unangetastet bleiben, bis Sie bestätigt haben, dass alles korrekt bei Jottacloud angekommen ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

Für eine größere Bibliothek ist der 4-stufige Synchronisationsassistent das bessere Werkzeug: Legen Sie Koofr als Quelle und Jottacloud als Ziel fest, führen Sie zunächst einen Dry Run aus, um genau zu sehen, was kopiert wird, und starten Sie dann die eigentliche Synchronisation. Dry Run ist in jeder Lizenzstufe verfügbar, es gibt also keinen Grund, die Vorschau vor einer größeren Migration auszulassen.

## Überprüfen, ob der Umzug abgeschlossen ist

Nach Abschluss der Übertragung nutzen Sie den Ordnervergleich, um beide Seiten Datei für Datei zu prüfen — er markiert alles, was nur auf einer Seite existiert oder mit einer abweichenden Größe übertragen wurde, und deckt so unvollständige Uploads auf, bevor Sie etwas bei Koofr löschen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

Der Job-Verlauf hält außerdem dauerhaft ein Protokoll des Laufs fest — Dateianzahl, Gesamtgröße und Dauer —, was sich lohnt festzuhalten oder zu exportieren, falls Sie die Migration später zur Kündigung eines Kontos nachweisen müssen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie sowohl Koofr als auch Jottacloud über Remote-Tab > Neuer Remote als Remotes hinzu.
3. Nutzen Sie Drag-and-drop für einen schnellen Umzug oder erstellen Sie einen Synchronisationsjob mit Dry Run für eine vollständige Bibliotheksmigration.
4. Führen Sie anschließend den Ordnervergleich aus, um zu bestätigen, dass alle Dateien angekommen sind, bevor Sie etwas bei Koofr entfernen.

Wenn beide Anbieter im selben Fenster verbunden sind, wird die Konsolidierung europäischer Cloud-Speicher zu einer Aufgabe für eine einzige Sitzung statt zu einem mehrtägigen Download-und-Reupload-Projekt.

---

**Verwandte Anleitungen:**

- [Koofr zu Proton Drive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Von Jottacloud zu OneDrive migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr vs. Jottacloud — Vergleich europäischer Cloud-Speicher mit RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
