---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "Jottacloud zu Wasabi migrieren — Dateien mit RcloneView übertragen"
authors:
  - steve
description: "Migrieren Sie Dateien von Jottacloud zu Wasabi Object Storage mit RcloneView, mit Dry-Run-Vorschauen und Prüfsummenverifizierung für eine sichere Übertragung."
keywords:
  - jottacloud zu wasabi migrieren
  - jottacloud wasabi übertragung
  - jottacloud wasabi migration
  - rcloneview jottacloud
  - rcloneview wasabi
  - dateien jottacloud wasabi verschieben
  - cloud-zu-cloud migrationstool
  - wasabi object storage migration
  - jottacloud backup wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud zu Wasabi migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre Jottacloud-Dateien direkt in Wasabis kostengünstigen Object Storage, ohne vorher etwas auf eine lokale Festplatte herunterzuladen.

Teams, die eine verbraucherorientierte Cloud wie Jottacloud zugunsten von günstigerem Langzeit-Objektspeicher verlassen, stoßen oft auf eine Hürde: Ihre Dateien liegen in einem in Norwegen gehosteten privaten Cloud-Konto, und ihr neues Zuhause ist ein S3-kompatibler Bucket mit einem völlig anderen Zugriffsmodell. RcloneView überbrückt diese Lücke in einem einzigen Fenster, indem Sie beide Dienste als Remotes verbinden und direkt zwischen ihnen übertragen können, Cloud zu Cloud, ganz ohne lokalen Zwischenspeicher.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes in RcloneView verbinden

Fügen Sie zunächst Jottacloud über den browserbasierten OAuth-Anmeldevorgang als Remote hinzu, dann fügen Sie Wasabi als S3-kompatiblen Remote mit Ihrer Access Key ID, Secret Access Key und dem richtigen regionalen Endpunkt hinzu. Beide Remotes erscheinen als separate Tabs im Explorer-Panel, und Sie können Jottacloud links und Wasabi rechts in einem Zwei-Panel-Layout öffnen.

Anders als reine Mount-Tools unterstützt RcloneView auch Synchronisation und Ordnervergleiche — bereits mit der FREE-Lizenz. Das bedeutet, Sie sind nicht auf einfaches Kopieren per Drag-and-Drop beschränkt, sondern erhalten die vollständige Synchronisations-Engine, Filterung und Dry-Run-Werkzeuge für diese Migration.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen Remotes in RcloneView für eine Cloud-zu-Cloud-Migration" class="img-large img-center" />

## Die Migration mit Dry Run vorschauen

Bevor Sie etwas verschieben, konfigurieren Sie einen Synchronisationsauftrag mit Jottacloud als Quelle und Ihrem Ziel-Wasabi-Bucket als Ziel. Stellen Sie die Synchronisationsrichtung auf einseitig "Modifying destination only", damit nichts auf Jottacloud verändert wird. Führen Sie den Auftrag zunächst im Dry-Run-Modus aus — RcloneView zeigt genau, welche Dateien kopiert werden, ohne auch nur ein einziges Byte zu übertragen, was unverzichtbar ist, wenn Sie eine Ordnerstruktur migrieren, die Sie seit Jahren nicht vollständig geprüft haben.

Wenn Ihr Jottacloud-Konto große Medienbibliotheken oder Archive enthält, die Sie im neuen Bucket nicht benötigen, verwenden Sie den Filterschritt, um Dateitypen auszuschließen oder eine maximale Dateigröße festzulegen, bevor die eigentliche Übertragung beginnt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Jottacloud zu Wasabi in RcloneView" class="img-large img-center" />

## Die Übertragung verifizieren und überwachen

Sobald der Dry Run korrekt aussieht, aktivieren Sie im Schritt Advanced Settings den Prüfsummenvergleich, sodass RcloneView Dateien anhand von Hash und Größe statt nur anhand der Änderungszeit vergleicht — wichtig beim Verschieben zwischen zwei sehr unterschiedlichen Storage-Backends. Starten Sie den Auftrag und wechseln Sie zum Tab Transferring in der unteren Info View, um live den Fortschritt, die Übertragungsgeschwindigkeit und die Dateianzahl zu verfolgen, während die Daten in Wasabi ankommen.

Passen Sie bei großen Bibliotheken die Anzahl der Dateiübertragungen und die Multithread-Übertragungseinstellungen an, um Ihre Bandbreite besser zu nutzen, und lassen Sie Job History den vollständigen Lauf zur späteren Referenz aufzeichnen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Überprüfung des Auftragsverlaufs nach einer Migration von Jottacloud zu Wasabi" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Jottacloud per OAuth-Anmeldung als Remote hinzu, dann fügen Sie Wasabi mit Ihrer Access Key ID und Secret Access Key als S3-kompatiblen Remote hinzu.
3. Erstellen Sie einen einseitigen Synchronisationsauftrag von Jottacloud zu Ihrem Wasabi-Bucket und führen Sie einen Dry Run aus, um die genauen zu kopierenden Dateien vorab anzuzeigen.
4. Aktivieren Sie die Prüfsummenverifizierung, führen Sie die eigentliche Synchronisation aus und bestätigen Sie die abgeschlossene Übertragung in Job History.

Die Migration von einer allgemeinen Cloud zu dediziertem Objektspeicher muss nicht bedeuten, mit separaten Apps zu jonglieren oder einen langsamen lokalen erneuten Upload durchzuführen — RcloneView bewältigt den gesamten Weg in einer einzigen Oberfläche.

---

**Weitere Anleitungen:**

- [Jottacloud-Synchronisationsfehler beheben — Lösung mit RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [Wasabi-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Backblaze B2 zu Wasabi migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
