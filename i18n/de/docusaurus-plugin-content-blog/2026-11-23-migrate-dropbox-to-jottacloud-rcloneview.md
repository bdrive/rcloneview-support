---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "Dropbox zu Jottacloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - jay
description: "Verschieben Sie Dateien mit RcloneView von Dropbox zu Jottacloud. Verbinden Sie beide Clouds, prüfen Sie vorab mit Dry Run, kopieren Sie von Cloud zu Cloud und kontrollieren Sie das Ergebnis mit Folder Compare."
keywords:
  - dropbox zu jottacloud migrieren
  - dropbox jottacloud übertragung
  - dateien von dropbox zu jottacloud verschieben
  - jottacloud migrationstool
  - dropbox alternative europa
  - cloud zu cloud migration gui
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - europäischer cloud-speicher migration
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox zu Jottacloud migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre Dropbox-Ordner direkt von Cloud zu Cloud nach Jottacloud und prüfen Sie jede Datei, bevor Sie das alte Konto kündigen.

Teams und Haushalte, die zu einem norwegischen Anbieter wechseln, stoßen oft auf dasselbe Hindernis: Jahre an Dropbox-Daten auf einen Laptop herunterzuladen, nur um sie wieder hochzuladen, ist langsam und riskant. RcloneView verbindet beide Konten in einem Fenster und führt die Übertragung über rclone aus, sodass Dateien von Dropbox zu Jottacloud gelangen, ohne dass Sie sie von Hand über einen lokalen Ordner schieben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und Jottacloud als Remotes verbinden

Öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**. Dropbox verwendet OAuth: Ihr Browser öffnet sich, Sie melden sich an, und RcloneView speichert die Verbindung. Liegen Ihre Dateien in einem Dropbox-Teamkonto, setzen Sie die Option `dropbox_business`, damit rclone mit dem Business-Namespace kommuniziert.

Fügen Sie Jottacloud auf dieselbe Weise hinzu, indem Sie Jottacloud aus der Anbieterliste wählen und den Verbindungsanweisungen folgen. Sobald beide Remotes erscheinen, öffnen Sie sie nebeneinander in zwei Explorer-Panels, damit Sie Quelle und Ziel gleichzeitig sehen.

<img src="/support/images/en/blog/new-remote.png" alt="Dropbox- und Jottacloud-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Ordnerstruktur vor dem Kopieren planen

Eine Designagentur mit 600 GB, verteilt auf `Clients`, `Archive` und `Shared Assets`, sollte zuerst festlegen, wo jeder Ordner der obersten Ebene landet. Erstellen Sie die Zielordner in Jottacloud über das Kontextmenü und verwenden Sie dann **Get Size** für jeden Dropbox-Ordner, um zu sehen, wie viele Daten jeder Schritt bewegt.

Für eine schnelle einmalige Aktion ziehen Sie einen Ordner vom Dropbox-Panel in das Jottacloud-Panel. Ziehen zwischen verschiedenen Remotes kopiert immer, daher wird in Dropbox nichts entfernt. Für größere Vorhaben ist ein gespeicherter Job besser, weil Sie ihn erneut ausführen und seinen Verlauf einsehen können.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Dropbox zu Jottacloud in RcloneView" class="img-large img-center" />

## Einen wiederholbaren Migrationsjob erstellen

Klicken Sie im Home-Tab auf **Sync** und wählen Sie Dropbox als Quelle und Jottacloud als Ziel. Belassen Sie die Richtung bei einseitig („Modifying destination only“). Behalten Sie in den Advanced Settings die Standardeinstellung für Multi-Thread bei und lassen Sie den Prüfsummenvergleich deaktiviert (Dropbox und Jottacloud verwenden unterschiedliche Hash-Typen, daher vergleicht rclone Dateien anhand von Größe und Änderungszeit). Mit Filtering überspringen Sie alles, was Sie nicht mitnehmen möchten.

Führen Sie zuerst einen **Dry Run** aus. Er listet jede Datei auf, die am Ziel kopiert oder gelöscht würde, und deckt so eine falsche Ordnerwahl auf, bevor sie Sie Stunden kostet. Starten Sie dann den echten Lauf und beobachten Sie Geschwindigkeit und Dateianzahl im Tab **Transferring**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Den Migrationsjob von Dropbox zu Jottacloud in RcloneView ausführen" class="img-large img-center" />

Wenn während des Umzugs weiter in Dropbox gearbeitet wird, führen Sie denselben Job kurz vor der Umstellung erneut aus. Nur neue oder geänderte Dateien werden übertragen. Mit einer PLUS License können Sie den Job bis zum Umstellungstag jede Nacht automatisch per Zeitplan laufen lassen.

## Mit Folder Compare überprüfen

Bevor Sie Dropbox kündigen, klicken Sie auf **Compare** und öffnen die beiden Ordner der obersten Ebene. Aktivieren Sie die Filter für nur links vorhandene Dateien und für unterschiedliche Größen: Alles, was noch aufgeführt wird, ist nicht angekommen oder stimmt nicht überein. Wählen Sie diese Elemente aus und füllen Sie die Lücken mit **Copy right**. Wenn die Ansicht nur noch identische Dateien zeigt, ist die Migration abgeschlossen. Die **Job History** protokolliert Größe, Geschwindigkeit und Status jedes Laufs.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dropbox- und Jottacloud-Ordner nach der Migration in RcloneView vergleichen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Dropbox (OAuth) und Jottacloud über **Remote > New Remote** als Remotes hinzu.
3. Erstellen Sie einen einseitigen Sync-Job von Dropbox zu Jottacloud und prüfen Sie ihn vorab mit **Dry Run**.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit **Compare**, bevor Sie das Dropbox-Konto auflösen.

RcloneView bindet 90+ Anbieter unter Windows, macOS und Linux aus einem Fenster ein und synchronisiert sie, sodass Sie Jottacloud nach dem Umzug mit derselben App als lokales Laufwerk einbinden können.

---

**Verwandte Anleitungen:**

- [Jottacloud-Speicher mit RcloneView verwalten: Synchronisieren, sichern und Dateien organisieren](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Dropbox zu Koofr migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [Jottacloud-Synchronisationsfehler beheben — Fehlersuche und Lösung mit RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
