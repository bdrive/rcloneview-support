---
slug: migrate-pcloud-to-koofr-rcloneview
title: "pCloud zu Koofr migrieren — Dateien mit RcloneView übertragen"
authors:
  - jay
description: "Migrieren Sie pCloud zu Koofr mit RcloneView. Ordner von Cloud zu Cloud kopieren, mit Dry Run vorab prüfen, mit Folder Compare verifizieren und den Download-Upload-Umweg sparen."
keywords:
  - pcloud zu koofr migrieren
  - pcloud zu koofr übertragung
  - pcloud koofr migration
  - dateien von pcloud zu koofr verschieben
  - cloud-zu-cloud-migration
  - europäische cloud-speicher migration
  - rcloneview pcloud
  - rcloneview koofr
  - koofr dateiübertragungstool
  - rclone gui cloud-migration
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud zu Koofr migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre pCloud-Bibliothek Ordner für Ordner zu Koofr, prüfen Sie jede Änderung vorab und stellen Sie sicher, dass nichts zurückbleibt.

Teams und Einzelpersonen wechseln aus vielen Gründen von pCloud zu Koofr: um Konten zusammenzuführen, Koofr als zentralen Knotenpunkt einzuführen oder eine zweite Kopie bei einem anderen Anbieter vorzuhalten. Alles auf einen Laptop herunterzuladen und erneut hochzuladen, verschwendet Speicherplatz und Tage an Zeit. RcloneView verbindet beide Dienste in einem Fenster und kopiert Daten über rclone zwischen ihnen, sodass die Migration als verwalteter Job läuft, den Sie überwachen, wiederholen und verifizieren können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud und Koofr als Remotes verbinden

Öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**. pCloud verwendet OAuth: Wählen Sie pCloud, und Ihr Browser öffnet sich, damit Sie sich anmelden und den Zugriff genehmigen können. Ein API-Schlüssel ist nicht nötig. Fügen Sie dann ein zweites Remote für Koofr hinzu und geben Sie die Kontozugangsdaten ein, die das Einrichtungsformular abfragt.

Sobald beide Remotes existieren, öffnen Sie sie nebeneinander in zwei Explorer-Panels. Unter **Settings > Layout** können Sie das Layout auf eine horizontale oder vertikale Teilung umstellen und jedes Konto über die Ordnerstruktur, die Listenansicht oder die Miniaturansicht für Fotoordner durchsuchen.

<img src="/support/images/en/blog/new-remote.png" alt="pCloud- und Koofr-Remotes in RcloneView hinzufügen" class="img-large img-center" />

Bevor Sie etwas verschieben, klicken Sie mit der rechten Maustaste auf Ihre obersten pCloud-Ordner und verwenden Sie **Get Size**. Die Gesamtgröße hilft Ihnen zu prüfen, ob das Koofr-Konto genügend Platz hat.

## Ordner von Cloud zu Cloud kopieren

Bei wenigen Ordnern ziehen Sie diese einfach vom pCloud-Panel in das Koofr-Panel. Ziehen zwischen verschiedenen Remotes führt ein **Copy** aus, sodass Ihre pCloud-Originale unverändert bleiben.

Für eine vollständige Migration erstellen Sie stattdessen einen Job. Klicken Sie im Home-Tab auf **Sync**, wählen Sie den pCloud-Ordner als Quelle und einen Koofr-Ordner als Ziel und geben Sie dem Job einen Namen wie `pcloud-to-koofr`. Aktivieren Sie in den Advanced Settings **checksum**, wenn Dateien per Hash und Größe verglichen werden sollen, und belassen Sie **Retry entire sync if fails** auf dem Standardwert 3, damit eine abgebrochene Verbindung den Lauf nicht stoppt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von pCloud zu Koofr in RcloneView" class="img-large img-center" />

Führen Sie zuerst einen **Dry Run** aus. Er listet jede Datei auf, die kopiert oder gelöscht würde, und ist eine zuverlässige Methode, einen falschen Zielpfad zu erkennen, bevor echte Daten bewegt werden. RcloneView bindet 90+ Anbieter aus einem Fenster unter Windows, macOS und Linux ein und synchronisiert sie, sodass derselbe Job-Ablauf für jedes Paar gilt, das Sie später migrieren.

## Übertragung überwachen und Verlauf prüfen

Während der Job läuft, zeigt der Tab **Transferring** Fortschritt, Geschwindigkeit und Dateianzahl, und Sie können jederzeit abbrechen. Eine Fotografin, die 400 GB exportierter Shootings verschiebt, kann die App in den System Tray minimieren, und der Job läuft im Hintergrund weiter.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Fortschritt der Übertragung von pCloud zu Koofr in RcloneView überwachen" class="img-large img-center" />

Wenn er fertig ist, öffnen Sie **Job History**, um Status (Completed, Errored oder Canceled), Gesamtgröße, Geschwindigkeit und Dateianzahl zu prüfen. Wenn Sie während der Umstellung neue Dateien zu pCloud hinzufügen, führen Sie denselben Job erneut aus. Nur neue oder geänderte Dateien werden übertragen.

## Mit Folder Compare verifizieren

Klicken Sie auf **Compare** und laden Sie den pCloud-Ordner links und den Koofr-Ordner rechts. Filtern Sie nach **left-only files**, um alles zu finden, was auf Koofr fehlt, und nutzen Sie **Copy right**, um die Lücken zu füllen. Wenn beide Seiten als gleich angezeigt werden, ist die Migration abgeschlossen, und Sie können entscheiden, wann Sie die pCloud-Kopie stilllegen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud- und Koofr-Ordner nach der Migration in RcloneView vergleichen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie pCloud (OAuth-Browser-Anmeldung) und Koofr über **New Remote** als Remotes hinzu.
3. Erstellen Sie einen Sync-Job von pCloud zu Koofr und prüfen Sie ihn mit **Dry Run**.
4. Führen Sie den Job aus, prüfen Sie die **Job History** und bestätigen Sie mit **Folder Compare**.

Eine geplante, verifizierte Migration bedeutet, dass Sie den Anbieter nach Ihrem Zeitplan wechseln, nicht erst, wenn eine manuelle Kopie endlich fertig ist.

---

**Verwandte Anleitungen:**

- [pCloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Koofr-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr-Synchronisationsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
