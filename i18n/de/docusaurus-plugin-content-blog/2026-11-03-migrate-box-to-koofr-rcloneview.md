---
slug: migrate-box-to-koofr-rcloneview
title: "Von Box zu Koofr migrieren — Dateien mit RcloneView übertragen"
authors:
  - jay
description: "Migrieren Sie mit RcloneView von Box zu Koofr: Verbinden Sie beide Remotes, prüfen Sie die Übertragung per Dry Run, kopieren Sie von Cloud zu Cloud und verifizieren Sie das Ergebnis mit Folder Compare."
keywords:
  - Box zu Koofr migrieren
  - Box zu Koofr Übertragung
  - Box Koofr Migration
  - RcloneView Box
  - RcloneView Koofr
  - Cloud-zu-Cloud-Übertragung
  - Dateien aus Box verschieben
  - Koofr europäischer Cloud-Speicher
  - rclone GUI Migration
  - Box-Docs-Filter
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Von Box zu Koofr migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie einen Box-Arbeitsbereich zu Koofr, ohne zuvor etwas auf Ihre eigene Festplatte herunterzuladen.

Teams verlassen Box aus vielen Gründen: Ein Projekt ist abgeschlossen, ein Vertrag ist ausgelaufen oder man bevorzugt einen europäischen Speicheranbieter. Koofr ist ein naheliegendes Ziel, doch Ordner aus vielen Jahren von Hand zu verschieben ist langsam und fehleranfällig. RcloneView verbindet beide Dienste in einem Fenster und führt die Kopie von Cloud zu Cloud aus, mit einem Dry Run und einem Vergleichsschritt, um sicherzustellen, dass nichts fehlt. RcloneView bindet 90+ Anbieter in einem Fenster ein (Mount) und synchronisiert sie, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Koofr als Remotes verbinden

Öffnen Sie die Registerkarte Remote und wählen Sie New Remote. Box meldet sich per OAuth an: Ihr Browser öffnet sich, Sie bestätigen den Zugriff, und RcloneView verbindet sich automatisch. Wenn Sie ein Firmenkonto migrieren, benötigt Box for Business die Einstellung `box_sub_type = enterprise` in der Remote-Konfiguration.

Fügen Sie Koofr auf die gleiche Weise als zweites Remote hinzu. Sobald beide im Remote Manager erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Panels, um Quelle und Ziel zu durchsuchen, bevor Sie auch nur eine Datei verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Box- und Koofr-Remotes in RcloneView" class="img-large img-center" />

## Die Kopie mit Filtern und Dry Run planen

Ein Box-Konto enthält meist mehr als die Dateien, die Sie behalten möchten. In Schritt 3 des Synchronisationsassistenten können Sie eine maximale Dateigröße, ein maximales Dateialter oder eine Begrenzung der Ordnertiefe festlegen. Es gibt außerdem einen vordefinierten Box-Docs-Filter sowie eigene Regeln, etwa zum Ausschließen von `.git/`-Ordnern oder `.iso`-Dateien.

Verwenden Sie vor jeder Ausführung einen Dry Run. Er listet die Dateien auf, die kopiert und gelöscht würden, ohne eine der beiden Seiten zu verändern. Wählen Sie für eine Migration einen Copy-Job statt einer spiegelnden Synchronisation, damit auf Koofr nichts entfernt wird, falls das Ziel bereits Daten enthält.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Box zu Koofr in RcloneView" class="img-large img-center" />

## Die Übertragung ausführen und den Fortschritt beobachten

Starten Sie den Job und verfolgen Sie ihn im Tab Transferring: Fortschritt, Geschwindigkeit und Dateianzahl werden live angezeigt. Erhöhen Sie bei einer großen Bibliothek in Schritt 2 die Anzahl der Dateiübertragungen, halten Sie die Equality Checkers aber moderat, wenn eines der Backends langsam antwortet. "Retry entire sync if fails" steht standardmäßig auf 3, was bei vorübergehenden Netzwerkfehlern hilft.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer Übertragung von Box zu Koofr im Tab Transferring" class="img-large img-center" />

## Mit Folder Compare verifizieren

Öffnen Sie nach Abschluss des Jobs Compare mit Box links und Koofr rechts. Die Filter für Nur links, Nur rechts und unterschiedliche Dateien zeigen genau, was noch fehlt. Übertragen Sie übrig gebliebene Dateien mit der Aktion copy-right. Der Job History speichert Status, Größe und Dateianzahl jedes Laufs als Nachweis der Migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vergleich der Box- und Koofr-Ordner nach der Migration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Box (OAuth) und Koofr als Remotes hinzu.
3. Erstellen Sie einen Copy-Job mit Filtern und führen Sie dann einen Dry Run durch.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis anschließend mit Folder Compare.

Lassen Sie das Box-Konto unangetastet, bis Compare zeigt, dass beide Seiten übereinstimmen.

---

**Weiterführende Anleitungen:**

- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Koofr-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Von Box zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
