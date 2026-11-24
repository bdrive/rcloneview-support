---
slug: migrate-box-to-dropbox-rcloneview
title: "Von Box zu Dropbox migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Migrieren Sie Box zu Dropbox mit RcloneView. Verbinden Sie beide Remotes per OAuth, prüfen Sie vorab mit Dry Run, kopieren Sie Ordner von Cloud zu Cloud und verifizieren Sie mit Folder Compare."
keywords:
  - Box zu Dropbox migrieren
  - Migration von Box zu Dropbox
  - Dateien von Box zu Dropbox übertragen
  - Box Dropbox Cloud-zu-Cloud-Übertragung
  - Box-Ordner nach Dropbox verschieben
  - Dropbox for Business Migration
  - RcloneView Box Dropbox
  - rclone Box zu Dropbox GUI
  - Cloud-Migrationstool
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Von Box zu Dropbox migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine Box-Ordnerstruktur direkt von Cloud zu Cloud nach Dropbox, prüfen Sie den Umfang, bevor sich etwas ändert, und bestätigen Sie das Ergebnis im direkten Vergleich.

Teams wechseln aus vielen Gründen von Box zu Dropbox: eine Fusion, eine neue Kundenanforderung oder eine Kreativabteilung, die ohnehin schon in Dropbox arbeitet. Die eigentliche Herausforderung besteht darin, jahrelang gewachsene freigegebene Ordner zu verschieben, ohne dabei etwas zu verlieren. RcloneView verbindet sich mit beiden Diensten als Remotes und führt die Kopie über rclone aus, sodass Sie die Migration in einem Fenster planen, ausführen und überprüfen, statt zuerst alles auf einen Laptop herunterzuladen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Dropbox als Remotes verbinden

Beide Anbieter nutzen OAuth, es müssen also keine API-Schlüssel kopiert werden. Öffnen Sie **Remote tab > New Remote**, wählen Sie Box und melden Sie sich an, wenn sich der Browser öffnet. Wiederholen Sie das für Dropbox. Handelt es sich auf einer Seite um ein Business-Konto, setzen Sie bei der Einrichtung die passende Option: `box_sub_type = enterprise` für Box for Business und `dropbox_business = true` für Dropbox for Business.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

Öffnen Sie Box im linken Explorer-Panel und Dropbox im rechten. Wenn Sie beide nebeneinander durchsuchen, sehen Sie vor dem Anlegen eines Jobs, ob die erwarteten Ordner angezeigt werden und der Zielordner existiert. Klicken Sie mit der rechten Maustaste auf einen Box-Ordner und wählen Sie **Get Size**, um abzuschätzen, wie viele Daten Sie verschieben werden.

## Einen Copy-Job erstellen und vorab prüfen

Für eine Migration ist ein **Copy**-Job die vorsichtige Wahl: Er fügt Dateien in Dropbox hinzu und löscht am Ziel nie etwas. Erstellen Sie ihn über **Home tab > Sync** oder den Job Manager, wählen Sie den Box-Ordner als Quelle und einen Dropbox-Ordner als Ziel und geben Sie ihm einen eindeutigen Namen wie `box-marketing-to-dropbox`.

Lassen Sie in den Advanced Settings die Prüfsumme für dieses Paar ausgeschaltet. Box und Dropbox verwenden unterschiedliche Hash-Typen, daher vergleicht rclone Dateien stattdessen anhand von Größe und Änderungszeit. Falls Dropbox mit einer Ratenbegrenzung reagiert, verringern Sie die Anzahl der Dateiübertragungen, statt sie zu erhöhen. Im Filtering-Schritt können Sie mit dem vordefinierten Filter **Box Docs** Box-eigene Dokumente separat behandeln, und mit eigenen Regeln überspringen Sie Ordner, die Sie nicht weiterführen möchten.

Führen Sie zuerst einen **Dry Run** aus. Er listet jede Datei auf, die kopiert würde, ohne etwas zu übertragen — nützlich, wenn eine Agentur 60.000 Kunden-Assets verschiebt und den Umfang mit den Beteiligten abstimmen möchte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## Ausführen, überwachen und Nachweise behalten

Starten Sie den Job und verfolgen Sie Fortschritt, Geschwindigkeit und Dateianzahl im Tab **Transferring**. Wenn Sie eine große Migration in einen Job pro Ordner der obersten Ebene aufteilen, hält ein einzelner Fehler nicht alles andere auf. Jeder Lauf erscheint in der **Job History** mit Status, Gesamtgröße und Dateianzahl — gleichzeitig ein Nachweis für die Person, die die Migration abnimmt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## Mit Folder Compare überprüfen

Wenn die Jobs abgeschlossen sind, öffnen Sie **Folder Compare** für die Box-Quelle und das Dropbox-Ziel. Filtern Sie nach Dateien, die nur links vorhanden sind, um alles zu finden, was nicht angekommen ist, und schließen Sie die Lücken mit Copy right. Solange während einer Umstellungsphase noch in Box gespeichert wird, führen Sie denselben Copy-Job vor der endgültigen Umstellung erneut aus, um neue Dateien zu übernehmen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## Erste Schritte

Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — mit der FREE License.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Box und Dropbox per OAuth als Remotes hinzu und aktivieren Sie bei Bedarf die Business-Optionen.
3. Erstellen Sie einen Copy-Job von Box zu Dropbox und prüfen Sie ihn mit Dry Run.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis in Folder Compare und Job History.

Eine vorab geprüfte und verifizierte Migration ermöglicht Ihrem Team den Wechsel zu Dropbox, ohne sich zu fragen, welcher Ordner zurückgeblieben ist.

---

**Verwandte Anleitungen:**

- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dropbox mit Box synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
