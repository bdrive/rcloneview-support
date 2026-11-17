---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "Citrix ShareFile zu Box migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Migrieren Sie Citrix ShareFile mit RcloneView zu Box. Verbinden Sie beide Remotes, prüfen Sie mit Dry Run vorab, kopieren Sie Ordner von Cloud zu Cloud und verifizieren Sie mit Folder Compare."
keywords:
  - Citrix ShareFile zu Box migrieren
  - ShareFile-zu-Box-Migration
  - Citrix ShareFile Box Übertragung
  - Cloud-zu-Cloud-Migrationstool
  - RcloneView ShareFile
  - Box for Business Migration
  - Unternehmens-Dateimigration GUI
  - ShareFile-Ordner nach Box verschieben
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFile zu Box migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie einen ShareFile-Ordnerbaum von Cloud zu Cloud nach Box, prüfen Sie jede Änderung vorab und verifizieren Sie das Ergebnis nebeneinander — alles in einer GUI.

Wenn eine Organisation auf Box konsolidiert, muss das ShareFile-Archiv mit Verträgen, Kundenlieferungen und Projektordnern mitziehen. Alles auf einen Laptop herunterzuladen und erneut hochzuladen ist langsam und fehleranfällig. RcloneView verbindet beide Dienste als Remotes und führt die Übertragung über rclone aus, sodass Dateien direkt zwischen den beiden Clouds wandern, während Sie den Fortschritt in einem Fenster verfolgen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Citrix ShareFile und Box verbinden

Öffnen Sie **Remote tab > New Remote** und wählen Sie Citrix ShareFile. Neben der Anmeldung benötigt ShareFile eine **Root Folder ID**, die rclone mitteilt, welcher Ordner als oberste Ebene des Remotes gilt. Wenn Sie abteilungsweise migrieren möchten, hält ein separates Remote pro Stammordner jeden Job klein und leicht prüfbar.

Fügen Sie als Nächstes Box hinzu. Box verwendet OAuth: RcloneView öffnet Ihren Browser, Sie melden sich an, und die Verbindung wird gespeichert, ohne dass ein API-Schlüssel kopiert werden muss. Nutzt Ihre Organisation Box for Business, setzen Sie bei der Einrichtung `box_sub_type = enterprise`, damit das Remote das Unternehmenskonto anspricht.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

Öffnen Sie ShareFile im linken und Box im rechten Bereich. Beide nebeneinander zu durchsuchen ist eine schnelle Plausibilitätsprüfung, ob Sie die erwarteten Ordner sehen, bevor irgendetwas verschoben wird.

## Übertragung planen und vorab prüfen

Für eine einmalige Migration ist ein **Copy**-Job die vorsichtige Wahl: Er fügt Box Dateien hinzu, ohne etwas zu entfernen, das dort bereits liegt. Erstellen Sie ihn über **Home tab > Sync** oder den Job Manager, wählen Sie den ShareFile-Ordner als Quelle und einen Box-Ordner als Ziel und geben Sie dem Job einen Namen wie `sharefile-legal-to-box`.

Lassen Sie im Schritt Advanced Settings die Prüfsumme für diese Kombination ausgeschaltet: Ein Prüfsummenvergleich erfordert einen Hash-Typ, den beide Seiten teilen, und ShareFile (MD5) und Box (SHA-1) verwenden unterschiedliche, daher vergleicht rclone stattdessen nach Größe und Änderungszeit. Halten Sie die Anzahl der Equality Checker moderat, wenn sich das Auflisten langsam anfühlt. Im Schritt Filtering können Sie große Installationsdateien (`.iso`) oder Altordner ausschließen, die Sie nicht behalten möchten.

Verwenden Sie vor dem Start **Dry Run**. Er listet die Dateien auf, die kopiert würden, ohne etwas zu übertragen — so kann auch eine Anwaltskanzlei, die 40.000 Mandantendokumente verschiebt, zuerst den Umfang bestätigen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## Ausführen, überwachen und verifizieren

Starten Sie den Job und verfolgen Sie Fortschritt, Geschwindigkeit und Dateianzahl im Tab **Transferring**. Große Migrationen lassen sich in mehrere Jobs aufteilen, einen pro Ordner der obersten Ebene, damit ein Fehler nicht alles andere blockiert. Jeder Lauf wird in der **Job History** mit Status, Gesamtgröße und Dateianzahl festgehalten, was Ihnen einen Prüfpfad für die Migration liefert.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

Wenn die Jobs abgeschlossen sind, öffnen Sie **Folder Compare** für Quelle und Ziel. Filtern Sie nach left-only-Dateien, um alles zu finden, was nicht angekommen ist, und füllen Sie die Lücken mit Copy right.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## Erste Schritte

RcloneView läuft unter Windows, macOS und Linux und kann 90+ Anbieter aus einem Fenster einbinden (mount) und synchronisieren.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Citrix ShareFile (mit seiner Root Folder ID) und Box als Remotes hinzu.
3. Erstellen Sie einen Copy-Job von ShareFile zu Box und führen Sie zuerst einen Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit Folder Compare und Job History.

Eine geplante, verifizierte Migration lässt Ihr Team zu Box wechseln, ohne sich zu fragen, ob ein Ordner zurückgeblieben ist.

---

**Verwandte Anleitungen:**

- [Citrix ShareFile verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Box verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Citrix ShareFile mit RcloneView zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />
