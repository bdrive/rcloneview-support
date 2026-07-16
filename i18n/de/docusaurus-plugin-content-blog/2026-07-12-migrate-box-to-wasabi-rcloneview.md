---
slug: migrate-box-to-wasabi-rcloneview
title: "Box zu Wasabi migrieren — Dateien mit RcloneView übertragen"
authors:
  - casey
description: "Dateien von Box zu Wasabi Hot-Cloud-Speicher mit RcloneView verschieben, mit Ordnervergleich, Sync-Jobs und Dry Run für eine sichere Migration."
keywords:
  - migrate Box to Wasabi
  - Box to Wasabi transfer
  - Box cloud migration
  - Wasabi hot storage
  - RcloneView Box Wasabi
  - cloud to cloud transfer tool
  - Box storage backup
  - Wasabi sync software
  - move files between clouds
  - Box S3 migration
tags:
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu Wasabi migrieren — Dateien mit RcloneView übertragen

> Dateien und Ordner eines Box-Kontos direkt in Wasabis S3-kompatiblen Hot-Speicher verschieben, ohne alles zunächst über eine lokale Festplatte zu leiten.

Teams, die Box für die Dokumentenzusammenarbeit eingeführt haben, wachsen manchmal über dessen Eignung für die langfristige Speicherung hinaus, und Wasabis S3-kompatibler Objektspeicher wird zur nächsten Heimat für Archive, Medienbibliotheken oder Backup-Sätze. RcloneView verbindet sich mit beiden Diensten im selben Fenster, sodass die Migration eine direkte Cloud-zu-Cloud-Übertragung ist statt eines langsamen Download-dann-Upload-Zyklus über einen lokalen Rechner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Wasabi als Remotes verbinden

Box wird über OAuth hinzugefügt — ein Klick auf New Remote im Tab Remote öffnet ein Browserfenster für die Kontoanmeldung, und RcloneView verbindet sich automatisch, sobald die Authentifizierung abgeschlossen ist. Business-Konten, die die unternehmensweite Ansicht benötigen, können bei der Einrichtung `box_sub_type = enterprise` setzen. Wasabi wird über den S3-kompatiblen Remote-Typ hinzugefügt, mit einem Access Key, Secret Key und dem Wasabi-Endpunkt für die Zielregion.

Sobald beide Remotes konfiguriert sind, erscheinen sie als separate Tabs im Explorer, und man kann Box in einem Panel und Wasabi im anderen öffnen, um beide Dateibäume nebeneinander zu sehen, bevor irgendetwas verschoben wird.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## Vergleichen vor der Übertragung

Folder Compare legt den Box-Quellordner und den Wasabi-Zielordner nebeneinander und markiert, was auf jeder Seite fehlt, was bereits identisch ist und was sich in der Größe unterscheidet. Bei einer erstmaligen Migration ist dies der schnellste Weg, um zu bestätigen, dass die gesamte Box-Bibliothek erfasst ist, bevor eine Massen-Synchronisation ausgeführt wird, und es dient nach Abschluss der Übertragung zusätzlich als Verifizierungsdurchlauf — jede Datei, die nach dem Kopieren noch als „nur links" markiert ist, sollte noch einmal geprüft werden.

Das Kopieren innerhalb von Folder Compare betrifft nur Dateien, die auf dem Ziel noch nicht existieren oder sich in der Größe unterscheiden, sodass eine teilweise abgeschlossene Migration fortgesetzt werden kann, ohne Dateien erneut zu kopieren, die bereits auf Wasabi angekommen sind.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## Die Migration mit Sync durchführen

Für die Massenübertragung übernehmen die vier Schritte des Sync-Assistenten die Auswahl von Quelle/Ziel, die Übertragungsparallelität und die Filterung — nützlich, um Dateitypen auszuschließen, die nicht nach Wasabi übertragen werden sollen, etwa temporäre Box-Kollaborationsdateien. Dry Run zeigt vorab genau an, welche Dateien kopiert werden, bevor sich irgendetwas bewegt, was wichtig ist, wenn eine Box-Bibliothek jahrelang angesammelten Inhalt enthält und Fehler teuer rückgängig zu machen sind.

RcloneView bindet ein und synchronisiert über 90+ Provider aus einem Fenster unter Windows, macOS und Linux, sodass sich derselbe hier für Box und Wasabi verwendete Workflow auf jede andere Remote-Kombination anwenden lässt, ohne ein neues Tool erlernen zu müssen. Sobald der Sync-Job im Job Manager gespeichert ist, bleibt seine Historie — Status, übertragene Größe und Dauer — für spätere Referenz verfügbar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Box über OAuth-Anmeldung und Wasabi über S3-kompatible Anmeldedaten im Remote Manager hinzufügen.
3. Folder Compare zwischen der Box-Quelle und dem Wasabi-Ziel ausführen, um den Umfang vor der Übertragung zu bestätigen.
4. Einen Sync-Job zunächst mit aktiviertem Dry Run erstellen, dann real ausführen und den Fortschritt im Tab Transferring verfolgen.

Da beide Remotes im selben Explorer sichtbar sind, wird das Verschieben einer Box-Bibliothek nach Wasabi zu einem einzigen geführten Workflow statt zu einer Übung mit mehreren Tools.

---

**Verwandte Anleitungen:**

- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Wasabi-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Box zu Google Drive migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
