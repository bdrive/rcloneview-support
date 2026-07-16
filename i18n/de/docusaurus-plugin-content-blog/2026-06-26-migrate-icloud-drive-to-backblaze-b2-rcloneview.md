---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "iCloud Drive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - casey
description: "Übertragen Sie Dateien von iCloud Drive zu Backblaze B2 mit RcloneView. Schritt-für-Schritt-Anleitung, um Ihren Apple-Cloud-Speicher in kostengünstigem, herstellerunabhängigem Objektspeicher zu sichern."
keywords:
  - iCloud Drive zu Backblaze B2
  - iCloud Drive Backblaze B2 migrieren
  - iCloud Backup Backblaze B2
  - iCloud-Dateien zu B2 übertragen
  - iCloud Drive Cloud-Migration RcloneView
  - RcloneView iCloud Backblaze B2
  - Cloud-zu-Cloud-Übertragung iCloud
  - Backblaze B2 iCloud Backup-Tool
tags:
  - RcloneView
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Apples iCloud Drive ist praktisch für die Geräte-Synchronisation, aber das Kopieren Ihrer Dateien zu Backblaze B2 schafft ein kostengünstiges, herstellerunabhängiges Backup, das RcloneView vollständig über die grafische Oberfläche ermöglicht.

Millionen von Nutzern speichern Fotos, Dokumente und Projektarchive in iCloud Drive innerhalb von Apples Ökosystem. Während iCloud nahtlos zwischen Apple-Geräten funktioniert, benötigen Organisationen und Power-User oft eine zweite Kopie in dauerhaftem Objektspeicher — für Anbietervielfalt, längere Aufbewahrungsfristen oder eine plattformunabhängige Backup-Strategie. Backblaze B2 ist ein S3-kompatibler Objektspeicherdienst, der sich nahtlos in RcloneView integrieren lässt und Ihnen erlaubt, Inhalte von iCloud Drive ohne manuelles Herunterladen, Scripting oder Drittanbieter-Sync-Clients zu übertragen. Verbinden Sie Backblaze B2 mit vollem Lese-/Schreibzugriff bereits in der KOSTENLOSEN Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive in RcloneView einrichten

iCloud Drive wird in RcloneView über das iCloud-Backend von rclone unterstützt, das rclone v1.69 oder neuer erfordert — die in RcloneView eingebettete rclone-Binärdatei erfüllt diese Anforderung bereits, sodass keine separate Installation notwendig ist. Öffnen Sie zum Verbinden den Tab **Remote**, klicken Sie auf **New Remote** und wählen Sie iCloud Drive aus der Anbieterliste. Sie authentifizieren sich mit Ihren Apple-ID-Zugangsdaten und geben, falls die Zwei-Faktor-Authentifizierung für Ihr Konto aktiviert ist, bei Aufforderung den Bestätigungscode ein. Nach dem Speichern erscheinen Ihre iCloud-Ordner im Explorer-Panel genau wie auf einem Mac.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

Durchsuchen Sie die Struktur Ihres iCloud Drive — Desktop, Dokumente oder einen beliebigen benutzerdefinierten Ordner —, um den Inhaltsumfang zu bestätigen, bevor Sie einen Übertragungsjob erstellen.

## Backblaze B2 als Ziel verbinden

Backblaze B2 wird über die Eingabe von Zugangsdaten verbunden. Wählen Sie unter **New Remote** Backblaze B2 aus und geben Sie Ihre **Application Key ID** und Ihren **Application Key** ein — beide werden in Ihrem Backblaze-Konto im Bereich App Keys generiert. Nach dem Speichern können Sie Ihre B2-Buckets im zweiten Explorer-Panel von RcloneView durchsuchen. Mit iCloud Drive und Backblaze B2 nebeneinander geöffnet haben Sie einen klaren visuellen Überblick über Quelle und Ziel, bevor auch nur eine Datei bewegt wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## Die Migrationsübertragung ausführen

Öffnen Sie den **Sync**-Assistenten über den Tab Home. Legen Sie Ihren iCloud-Drive-Ordner als Quelle und Ihren Backblaze-B2-Bucket (oder ein Präfix darin) als Ziel fest. Aktivieren Sie im Schritt Advanced Settings die **Prüfsummenverifizierung**, um Dateihashes statt nur Zeitstempel zu vergleichen — das ist besonders wertvoll für eine einmalige Migration, bei der Datenintegrität am wichtigsten ist. Sie können außerdem einen Filter für das **maximale Dateialter** hinzufügen, um beim ersten Durchlauf nur aktuelle Inhalte zu migrieren, wenn Sie ältere, selten genutzte Dateien ausschließen möchten.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

Führen Sie vor der eigentlichen Übertragung immer einen **Dry Run** aus. RcloneView listet genau auf, welche Dateien kopiert oder übersprungen würden — eine praktische Sicherheitsprüfung bei der Migration einer großen iCloud-Drive-Bibliothek, bei der versehentliche Überschreibungen oder übersehene Ordner teuer werden können, um sie rückgängig zu machen.

## Die Migration mit Folder Compare überprüfen

Nach Abschluss der Übertragung nutzen Sie die Funktion **Folder Compare** von RcloneView, um zu bestätigen, dass beide Seiten übereinstimmen. Öffnen Sie die Compare-Ansicht, legen Sie iCloud Drive links und Ihren B2-Bucket rechts fest, und lassen Sie RcloneView alle nur-links, nur-rechts oder größenabweichenden Dateien anzeigen. Ein sauberer Vergleich — der nur identische Dateien zeigt — bestätigt, dass Ihre Migration ohne Lücken erfolgreich war.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

Für den fortlaufenden Schutz ermöglicht Ihnen die **PLUS-Lizenz**, einen wiederkehrenden Sync-Job zu planen — wöchentlich oder täglich —, um neue iCloud-Drive-Ergänzungen zu erfassen und Ihre B2-Kopie automatisch aktuell zu halten.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. iCloud Drive als neuen Remote mit Ihren Apple-ID-Zugangsdaten hinzufügen.
3. Backblaze B2 als Remote mit Ihrer Application Key ID und Ihrem Application Key hinzufügen.
4. Einen Sync-Job erstellen: iCloud Drive als Quelle, B2-Bucket als Ziel, dann zuerst einen **Dry Run** ausführen.
5. **Folder Compare** verwenden, um die Migration zu überprüfen, und anschließend bei Bedarf wiederkehrende Backups planen.

Die Migration von iCloud Drive zu Backblaze B2 mit RcloneView gibt Ihren Apple-Dateien ein dauerhaftes, plattformunabhängiges Zuhause im Objektspeicher — geschützt, überprüfbar und von jedem Gerät aus zugänglich.

---

**Verwandte Anleitungen:**

- [iCloud Drive mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Backblaze B2 mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [iCloud Drive zu Google Drive mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
