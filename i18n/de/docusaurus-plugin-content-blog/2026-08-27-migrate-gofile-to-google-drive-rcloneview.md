---
slug: migrate-gofile-to-google-drive-rcloneview
title: "Gofile zu Google Drive migrieren — Dateien mit RcloneView übertragen"
authors:
  - steve
description: "Verschieben Sie Dateien von Gofile nach Google Drive mit RcloneView — verbinden Sie beide Remotes, übertragen Sie direkt von Cloud zu Cloud und automatisieren Sie wiederkehrende Abholungen."
keywords:
  - Gofile zu Google Drive migrieren
  - Gofile zu Google Drive Übertragung
  - Gofile-Dateien zu Google Drive verschieben
  - RcloneView Gofile-Migration
  - Gofile Zugriffstoken einrichten
  - Cloud-zu-Cloud-Übertragungstool
  - Gofile Google Drive Synchronisation
  - Cloud-Speicher konsolidieren
  - Cloud-übergreifende Dateiübertragung
  - Gofile Dateiverwaltung
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile zu Google Drive migrieren — Dateien mit RcloneView übertragen

> Holen Sie Dateien, die über Gofile geliefert wurden, mit RcloneView direkt nach Google Drive, ohne sie erst lokal herunterzuladen oder zwischen Browser-Tabs zu wechseln.

Gofile ist ein gängiger Übergabepunkt für einmaliges Datei-Sharing — ein Kunde schickt eine Reihe von Assets, ein Auftragnehmer lädt Ergebnisse hoch, ein Download-Link wird im Team herumgereicht. Aber es ist nicht der Ort, an dem diese Inhalte langfristig bleiben sollen. RcloneView verbindet sowohl Gofile als auch Google Drive als Remotes im selben Fenster, sodass das Herausziehen von Dateien aus Gofile in dauerhaften, organisierten Google-Drive-Speicher eine direkte Übertragung ist, statt eines Download-dann-erneut-Hochladen-Umwegs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gofile und Google Drive verbinden

Gofile verwendet die Eingabe von Anmeldedaten statt OAuth: Erzeugen Sie ein Zugriffstoken auf der Profilseite Ihres Gofile-Kontos und fügen Sie es in den New-Remote-Bildschirm ein. Google Drive hingegen nutzt browserbasiertes OAuth — klicken Sie sich durch den New-Remote-Assistenten und authentifizieren Sie sich im Popup, es gibt kein Token zu kopieren. Fügen Sie beide als separate Remotes hinzu, erscheinen sie als Tabs, die Sie in benachbarten Explorer-Bereichen öffnen können.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Gofile- und Google-Drive-Remotes in RcloneView" class="img-large img-center" />

Anders als reine Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner zwischen Remotes — in der FREE-Lizenz — sodass dieselbe Zwei-Remote-Einrichtung sowohl eine einmalige Aufräumaktion als auch eine laufende Abholroutine gleichermaßen abdeckt.

## Dateien direkt zwischen Remotes übertragen

Öffnen Sie Gofile im linken Bereich und Google Drive im rechten, wählen Sie dann die zu verschiebenden Dateien oder Ordner aus. Das Ziehen zwischen zwei verschiedenen Remotes kopiert statt zu verschieben, sodass nichts aus Gofile verschwindet, bis Sie es ausdrücklich löschen — nützlich, wenn Sie bestätigen möchten, dass die Übertragung sauber angekommen ist, bevor Sie die Quelle bereinigen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Übertragung von Dateien von Gofile zu Google Drive in RcloneView" class="img-large img-center" />

Für größere Stapel verwenden Sie Rechtsklick und Copy oder Download statt Drag-and-drop — der Transferring-Tab in der unteren Info View zeigt Live-Fortschritt, Übertragungsgeschwindigkeit und Dateianzahl, sodass Sie bestätigen können, dass alles angekommen ist, bevor Sie die App schließen.

## Wiederkehrende Abholungen automatisieren

Wenn Gofile weiterhin neue Lieferungen erhält — wiederkehrende Kundenübergaben, geplante Export-Drops — schlägt eine gespeicherte Synchronisationsaufgabe das jedes Mal wiederholte manuelle Übertragen. Der vierstufige Assistent des Job Managers lässt Sie Gofile als Quelle und einen bestimmten Google-Drive-Ordner als Ziel festlegen, einen Filter für maximales Dateialter anwenden, damit nur kürzliche Uploads abgeholt werden, und mit Dry Run genau vorschauen, was kopiert würde, bevor sich tatsächlich etwas bewegt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen einer wiederkehrenden Synchronisationsaufgabe von Gofile zu Google Drive in RcloneView" class="img-large img-center" />

Job History protokolliert danach jeden Durchlauf — Status, Dateianzahl, Dauer — sodass Sie bestätigen können, dass eine geplante Abholung abgeschlossen wurde, ohne die App zur Prüfung zu öffnen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Gofile als Remote hinzu, unter Verwendung Ihres Zugriffstokens von der Gofile-Kontoseite.
3. Fügen Sie Google Drive als Remote über die OAuth-Browser-Anmeldung hinzu.
4. Öffnen Sie beide nebeneinander in den Explorer-Bereichen und ziehen Sie Ihren ersten Stapel hinüber, oder erstellen Sie eine Synchronisationsaufgabe für alles Wiederkehrende.

Sobald beide Remotes im selben Fenster liegen, hängt das Herausholen von Inhalten aus Gofile in organisierten Google-Drive-Speicher nicht mehr davon ab, wie lange ein Freigabelink gültig bleibt.

---

**Verwandte Anleitungen:**

- [Gofile-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Google-Drive-Dateien verwalten und Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google-Drive-Speicherkontingent überschritten beheben — Dateien mit RcloneView herausübertragen](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
