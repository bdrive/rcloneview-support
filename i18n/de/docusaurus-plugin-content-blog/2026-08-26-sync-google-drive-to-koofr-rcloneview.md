---
slug: sync-google-drive-to-koofr-rcloneview
title: "Google Drive mit Koofr synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - alex
description: "Synchronisieren Sie Google Drive mit Koofr über RcloneView für eine in Europa gehostete Backup-Kopie Ihrer Dateien, konfiguriert ohne Kommandozeile."
keywords:
  - sync google drive to koofr
  - google drive koofr backup
  - RcloneView koofr synchronisierung
  - europäisches cloud-backup google drive
  - koofr cloud-speicher synchronisierung
  - google drive zu koofr migration
  - cross-cloud sync tool
  - koofr google drive übertragung
  - cloud-zu-cloud synchronisierung rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit Koofr synchronisieren — Cloud-Backup mit RcloneView

> Behalten Sie eine in Europa gehostete Spiegelung Ihres Google Drive auf Koofr, ohne einen einzigen rclone-Befehl zu schreiben.

Teams mit EU-ansässigen Kunden oder Anforderungen an den Datenstandort möchten oft eine zweite Kopie ihrer Google Drive-Inhalte auf europäischer Infrastruktur haben. Koofr, mit Sitz in der EU, eignet sich hierfür natürlich, aber das manuelle erneute Hochladen von Dateien nach jeder Änderung ist nicht nachhaltig. RcloneView verbindet beide Konten und führt die Synchronisierung als gespeicherten Job aus, sodass die Koofr-Kopie aktuell bleibt, ohne manuelles Verschieben von Dateien.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive und Koofr verbinden

Beide Remotes verwenden die für den jeweiligen Anbieter üblichen Einrichtungsmethoden: Google Drive verbindet sich über eine OAuth-Browseranmeldung, und Koofr wird auf die gleiche Weise über den Reiter Remote > New Remote hinzugefügt. Sobald beide im Remote Manager erscheinen, öffnen Sie zwei Explorer-Panels nebeneinander — eines für Google Drive, eines für Koofr —, sodass Sie per Drag & Drop eine schnelle Testkopie erstellen können, bevor Sie einen automatisierten Job einrichten. Das Ziehen zwischen den beiden Panels kopiert immer, statt zu verschieben, da es sich um separate Remotes handelt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## Den Sync-Job konfigurieren

Starten Sie den Sync-Assistenten über den Reiter Home und legen Sie Google Drive als Quelle und Koofr als Ziel fest. Wählen Sie die einseitige Option „Nur Ziel ändern", damit die Koofr-Kopie stets Drive widerspiegelt, ohne versehentlich etwas an der Quelle zu löschen. In Schritt 2 sorgt die Aktivierung des Prüfsummenvergleichs dafür, dass Dateien nach Inhalt statt nur nach Änderungszeit abgeglichen werden, was wichtig ist, wenn Dateien vor Drive verschiedene Sync-Clients durchlaufen.

Die 1:N-Synchronisierung von RcloneView kann denselben Google Drive-Ordner gleichzeitig auf Koofr und weitere Ziele spiegeln — mit der FREE-Lizenz, was nützlich ist, falls später ein zweites Backup-Ziel hinzukommt, ohne den Job neu aufzubauen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## Einen Dry Run vor der ersten Synchronisierung ausführen

Bevor Sie eine vollständige Übertragung durchführen, führen Sie einen Dry Run aus, um genau vorherzusehen, welche Dateien kopiert werden, und um zu bestätigen, dass nichts unerwartet von Koofr gelöscht wird. Das ist besonders nützlich, wenn ein Job zum ersten Mal gegen ein Koofr-Konto läuft, das im Zielordner bereits Inhalte hat, da es Konflikte aufzeigt, bevor sie zu echten Überschreibungen werden.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie sowohl Google Drive als auch Koofr als Remotes hinzu.
3. Erstellen Sie einen einseitigen Sync-Job mit aktiviertem Prüfsummenvergleich.
4. Führen Sie einen Dry Run aus und starten Sie dann den Job, um Ihre erste Koofr-Spiegelung aufzubauen.

Eine dauerhafte Synchronisierung von Google Drive zu Koofr liefert Ihnen ein in Europa gehostetes Backup, das Sie mit wenigen Klicks erneut ausführen können, sodass Ihre Wiederherstellungskopie nie vom erneuten Aufbau des Jobs abhängt.

---

**Verwandte Anleitungen:**

- [Koofr zu Google Drive migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Koofr-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr mit Amazon S3 synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
