---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "Yandex Disk zu pCloud migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Verschieben Sie Dateien mit RcloneView von Yandex Disk zu pCloud. Verbinden Sie beide Clouds per OAuth, prüfen Sie mit Dry Run vorab, kopieren Sie von Cloud zu Cloud und verifizieren Sie mit Folder Compare."
keywords:
  - yandex disk zu pcloud migrieren
  - yandex disk zu pcloud übertragung
  - yandex disk migration
  - pcloud migrationstool
  - cloud zu cloud übertragung
  - dateien von yandex disk verschieben
  - rcloneview yandex disk
  - rcloneview pcloud
  - rclone gui cloud migration
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk zu pCloud migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie jahrelang gesammelte Yandex Disk-Dateien mit einem GUI-basierten Kopierjob, den Sie vorab prüfen, überwachen und verifizieren können, zu pCloud.

Das Zusammenlegen von Speicherkonten scheitert meist an derselben Stelle: Alles muss erst auf einen Laptop heruntergeladen und dann wieder hochgeladen werden. RcloneView verbindet Yandex Disk und pCloud nebeneinander und kopiert Dateien über rclone direkt zwischen ihnen, sodass nichts zuerst auf einer lokalen Festplatte zwischengespeichert werden muss. Beide Anbieter melden sich über einen OAuth-Browser-Login an, es müssen also keine API-Schlüssel erzeugt werden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yandex Disk und pCloud als Remotes verbinden

Öffnen Sie den Remote-Tab und klicken Sie auf **New Remote**. Wählen Sie Yandex Disk, geben Sie dem Remote einen kurzen Namen wie `yandex` und schließen Sie den Browser-Login ab. Wiederholen Sie den Vorgang für pCloud mit einem Namen wie `pcloud`. Beide erscheinen im Remote Manager, wo Sie sie später bearbeiten oder entfernen können.

Öffnen Sie nach dem Verbinden zwei Explorer-Panels — eines pro Remote — und durchsuchen Sie die Ordnerbäume. Klicken Sie mit der rechten Maustaste auf einen Ordner der obersten Ebene und wählen Sie **Get Size**, um zu sehen, wie viele Daten Sie verschieben werden. Mit dieser Zahl können Sie prüfen, ob Ihr pCloud-Tarif genügend Platz bietet, bevor die erste Datei kopiert wird.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## Den Kopierjob planen und vorab prüfen

Für eine einmalige Migration ist ein **Copy**-Job die sicherere Wahl: Er fügt pCloud Dateien hinzu, ohne dort etwas zu löschen. Verwenden Sie **Sync** nur, wenn pCloud Yandex Disk exakt spiegeln soll, einschließlich Löschungen.

Erstellen Sie den Job im Job Manager. Wählen Sie in Step 1 einen Yandex Disk-Ordner als Quelle und einen pCloud-Ordner als Ziel. Erwägen Sie in Step 2, den Prüfsummenvergleich zu aktivieren, damit Dateien nach Hash plus Größe verglichen werden, sofern beide Seiten einen gemeinsamen Hash-Typ haben (Yandex Disk verwendet MD5, und pCloud bietet MD5 nur bei Konten in der US-Region), und behalten Sie die Wiederholungseinstellung (Standard: 3) für instabile Verbindungen bei. In Step 3 können Sie überspringen, was Sie nicht mehr brauchen — zum Beispiel über ein maximales Dateialter oder eigene Regeln, die `.iso`-Images oder `.git/`-Ordner ausschließen.

Verwenden Sie vor dem Start **Dry Run**. Es listet jede Datei auf, die kopiert würde, sodass etwa ein Fotograf, der 400 GB RAW-Archive verschiebt, die Ordnerstruktur prüfen kann, bevor er stundenlange Übertragungszeit investiert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## Übertragung ausführen und überwachen

Starten Sie den Job und verfolgen Sie im Transferring-Tab Fortschritt, Geschwindigkeit und Dateianzahl. Große Bibliotheken sollten Sie auf mehrere Jobs aufteilen — einen pro Ordner der obersten Ebene —, damit ein Netzwerkaussetzer nur einen Teil betrifft. Jeder Lauf wird mit Status, Gesamtgröße und Dateianzahl in Job History erfasst, was Ihnen einen Prüfpfad für den Umzug liefert.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## Mit Folder Compare verifizieren

Öffnen Sie nach Abschluss des Jobs **Compare** mit dem Yandex Disk-Ordner links und dem pCloud-Ordner rechts. Filtern Sie nach „left-only"- und „different"-Dateien, um Übersprungenes zu finden. Mit Copy right übertragen Sie die Nachzügler mit einem Klick.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## Erste Schritte

RcloneView bindet 90+ Anbieter aus einem Fenster ein (mount) und synchronisiert sie — unter Windows, macOS und Linux.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Yandex Disk und pCloud über ihre OAuth-Browser-Logins als Remotes hinzu.
3. Erstellen Sie einen Copy-Job von Yandex Disk zu pCloud und prüfen Sie ihn mit Dry Run.
4. Führen Sie den Job aus und bestätigen Sie das Ergebnis mit Folder Compare, bevor Sie Ihr Yandex Disk-Konto schließen.

Eine verifizierte Migration bedeutet, dass Sie das alte Konto in dem Wissen stilllegen können, dass jeder Ordner angekommen ist.

---

**Verwandte Anleitungen:**

- [Yandex Disk-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [pCloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Yandex Disk-Sync-Fehler beheben — fehlgeschlagene Übertragungen mit RcloneView diagnostizieren und lösen](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />
