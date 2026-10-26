---
slug: migrate-koofr-to-mega-rcloneview
title: "Koofr zu Mega migrieren — Dateien mit RcloneView übertragen"
authors:
  - steve
description: "Koofr mit RcloneView zu Mega migrieren: beide Remotes verbinden, per Dry Run in der Vorschau prüfen, Dateien von Cloud zu Cloud kopieren und mit Folder Compare überprüfen."
keywords:
  - Koofr zu Mega migrieren
  - Koofr zu Mega Übertragung
  - Koofr-Dateien nach Mega verschieben
  - Koofr Mega Migration
  - RcloneView Cloud-zu-Cloud
  - Koofr zu Mega Synchronisation
  - rclone GUI
  - Cloud-Migrationstool
  - Mega Dateiübertragung
  - Cloud-Übertragung überprüfen
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr zu Mega migrieren — Dateien mit RcloneView übertragen

> Kopieren Sie Ihre Koofr-Bibliothek direkt zwischen den beiden Clouds nach Mega – erst mit einer Vorschau und am Ende mit einer Überprüfung.

Koofr und Mega verfolgen unterschiedliche Ansätze beim Speicher, und der manuelle Wechsel zwischen beiden bedeutet, alles herunterzuladen und erneut hochzuladen. Für Fotografen mit jahrelang gewachsenen Projektordnern oder ein kleines Büro mit gemeinsamen Dokumenten sind das Stunden der Beaufsichtigung. RcloneView verbindet beide Dienste in einem Fenster und überträgt direkt zwischen ihnen – mit Jobs, die Sie in der Vorschau prüfen, wiederholen und im Verlauf nachvollziehen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr und Mega als Remotes hinzufügen

Öffnen Sie **Remote > New Remote** und fügen Sie Koofr mit den Zugangsdaten hinzu, die der Einrichtungsdialog abfragt. Fügen Sie anschließend Mega mit Ihrer E-Mail-Adresse und Ihrem Passwort hinzu. Mega ist ein Remote mit Eingabe von Zugangsdaten statt OAuth, daher entfällt der Browserschritt. Sobald beide im Remote Manager erscheinen, können Sie jeden in einem eigenen Explorer-Panel öffnen.

Koofr und Mega stehen in derselben Remote-Liste neben den anderen unterstützten Anbietern.

<img src="/support/images/en/blog/new-remote.png" alt="Koofr- und Mega-Remotes in RcloneView erstellen" class="img-large img-center" />

## Die Übertragung planen

Beginnen Sie damit, die Koofr-Ordner zu durchsuchen, die Sie verschieben möchten. Nutzen Sie **Get Size** bei den größten Ordnern, damit Sie wissen, was Sie erwartet, und notieren Sie, was Sie zurücklassen können. Mega wendet je nach Tarif Übertragungs- und Speicherlimits pro Konto an. Prüfen Sie daher vor einem großen Job, ob Ihr Ziel genug Platz hat, statt es erst auf halber Strecke zu entdecken.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr und Mega nebeneinander in RcloneView durchsucht" class="img-large img-center" />

## Einen Copy-Job erstellen und per Dry Run testen

Legen Sie im Sync-Assistenten Koofr als Quelle und einen Mega-Ordner als Ziel fest. Wählen Sie den Jobtyp **Copy**, damit vorhandene Mega-Dateien nie gelöscht werden. In den erweiterten Einstellungen können Sie die Anzahl der Dateiübertragungen und der Equality Checker anpassen; senken Sie diese, falls einer der Dienste langsamer wird oder Fehler zurückgibt. Mit dem Filter überspringen Sie Dateitypen oder Ordner, die Sie nicht mitnehmen möchten.

Führen Sie vor dem eigentlichen Job einen **Dry Run** aus. Er zeigt genau, welche Dateien kopiert würden, und deckt einen falsch gewählten Quellordner auf, solange es nichts kostet. Wenn die Vorschau stimmt, führen Sie den Job aus und beobachten Sie Geschwindigkeit und Fortschritt im Tab Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer Cloud-zu-Cloud-Übertragung im Tab Transferring" class="img-large img-center" />

## Überprüfen und ein Protokoll behalten

Öffnen Sie nach dem Lauf **Compare** mit Koofr links und Mega rechts. Filtern Sie nach Dateien, die nur links vorhanden sind, oder nach abweichenden Dateien, um zu sehen, was nicht angekommen ist, und kopieren Sie diese mit der Kopieraktion der Compare-Ansicht hinüber. Job History speichert Status, Dauer, Größe und Dateianzahl jedes Laufs, sodass Sie einen Nachweis haben, bevor Sie das alte Konto aufgeben.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mit abgeschlossenen Koofr-zu-Mega-Übertragungen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Koofr und Mega über **Remote > New Remote** hinzu.
3. Erstellen Sie einen Copy-Job von Koofr nach Mega und führen Sie einen Dry Run aus.
4. Führen Sie den Job aus und bestätigen Sie mit Folder Compare, bevor Sie bei Koofr etwas löschen.

Erst kopieren, dann überprüfen: So bleiben Ihre Koofr-Dateien verfügbar, bis Mega alle besitzt.

---

**Weiterführende Anleitungen:**

- [Koofr zu Dropbox migrieren](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [pCloud zu Mega migrieren](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Mega-Verbindungs- und Kontingentfehler beheben](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />
