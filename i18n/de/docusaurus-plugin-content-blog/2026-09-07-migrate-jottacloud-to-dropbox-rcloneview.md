---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "Von Jottacloud zu Dropbox migrieren — Dateien mit RcloneView übertragen"
authors:
  - alex
description: "Verschieben Sie Dateien von Jottacloud zu Dropbox mit RcloneView. Synchronisieren Sie Ordner, überprüfen Sie Übertragungen und verwalten Sie beide Remotes in einem Fenster."
keywords:
  - Jottacloud zu Dropbox migrieren
  - Jottacloud zu Dropbox Übertragung
  - Jottacloud Dropbox Migration
  - RcloneView Jottacloud
  - RcloneView Dropbox
  - Cloud-zu-Cloud-Übertragung
  - Dateien zwischen Cloud-Speichern verschieben
  - Jottacloud-Alternative
  - Dropbox-Migrationstool
  - Migration europäischer Cloud-Speicher
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Von Jottacloud zu Dropbox migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre Dateien von Jottacloud zu Dropbox, ohne zuerst irgendetwas auf Ihren Desktop herunterzuladen.

Teams, die wegen der europäischen Datenresidenz mit Jottacloud begonnen haben, müssen manchmal zu Dropbox konsolidieren, sobald die Zusammenarbeit mit internationalen Partnern zur Priorität wird. Alles lokal herunterzuladen und wieder hochzuladen verschwendet Bandbreite und riskiert beschädigte Ordnerstrukturen. RcloneView verbindet sich mit beiden Remotes gleichzeitig und verschiebt Dateien direkt zwischen ihnen, sodass die Übertragung von Cloud zu Cloud erfolgt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloud und Dropbox nebeneinander verbinden

Fügen Sie beide Speicherkonten über Remote-Tab > New Remote hinzu. Dropbox verbindet sich mit einer browserbasierten Standardanmeldung — es sind keine API-Schlüssel zu verwalten. Nach dem Hinzufügen erhält jeder Remote einen eigenen Tab im Explorer-Panel, sodass Sie Jottacloud in einem Panel und Dropbox in einem anderen öffnen können, um beide Ordnerstrukturen direkt nebeneinander zu vergleichen, bevor Sie etwas verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen Cloud-Remotes in RcloneView" class="img-large img-center" />

Wenn Sie beide Konten vor Beginn der Übertragung durchsehen, können Sie bestätigen, dass die Ordnerbenennungskonventionen übereinstimmen, oder eine neue Struktur auf der Dropbox-Seite planen, falls die Quelle im Laufe der Zeit unübersichtlich geworden ist.

## Die Cloud-zu-Cloud-Übertragung durchführen

Verwenden Sie den Sync-Assistenten im Home-Tab, um Jottacloud als Quelle und Dropbox als Ziel zu konfigurieren. Stellen Sie die Synchronisationsrichtung auf einseitig, sodass Dropbox die Quelle spiegelt, ohne dass RcloneView etwas auf Jottacloud zurücklöscht. Wenden Sie in Schritt 3 Filter an, um Dateitypen zu überspringen, die Sie am neuen Speicherort nicht benötigen — das Ausschließen von `.iso`-Dateien oder ganzen `.git/`-Ordnern hält die Übertragung auf die relevanten Inhalte fokussiert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration eines Cloud-zu-Cloud-Synchronisationsjobs von Jottacloud zu Dropbox" class="img-large img-center" />

Führen Sie zuerst einen Dry Run aus. Er listet genau auf, welche Dateien kopiert werden, ohne eines der beiden Konten zu berühren — der schnellste Weg, einen falsch konfigurierten Filter zu erkennen, bevor er Tausende von Dateien betrifft.

## Überprüfen, dass jede Datei korrekt angekommen ist

Öffnen Sie nach Abschluss der Übertragung Folder Compare und richten Sie es auf dieselben Pfade bei Jottacloud und Dropbox. Dateien mit übereinstimmender Größe werden als identisch angezeigt; alles, was abweicht oder nicht kopiert werden konnte, wird markiert, sodass Sie nur diese Elemente erneut ausführen können. RcloneView bindet 90+ Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux ein und synchronisiert sie, sodass dieser Überprüfungsschritt unabhängig davon, welche beiden Clouds Sie vergleichen, gleich funktioniert.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vergleich der Jottacloud- und Dropbox-Ordner nach der Migration" class="img-large img-center" />

Job History erfasst Größe, Geschwindigkeit und Dateianzahl der abgeschlossenen Synchronisation und liefert Ihnen einen Nachweis, auf den Sie sich beziehen können, falls jemand fragt, wie die Migration verlaufen ist.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihre Jottacloud- und Dropbox-Remotes über den Remote-Tab hinzu.
3. Erstellen Sie einen einseitigen Synchronisationsjob mit Jottacloud als Quelle und Dropbox als Ziel, und führen Sie dann einen Dry Run aus.
4. Führen Sie die Synchronisation aus und bestätigen Sie die Ergebnisse mit Folder Compare.

Halten Sie nach der Überprüfung beide Remotes noch eine Weile verbunden, damit Sie eine Datei erfassen können, die dem alten Jottacloud-Konto hinzugefügt wird, bevor der Wechsel vollständig abgeschlossen ist.

---

**Ähnliche Anleitungen:**

- [Jottacloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Dropbox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Von Jottacloud zu Wasabi migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />
