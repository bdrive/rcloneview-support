---
slug: sync-google-photos-to-wasabi-rcloneview
title: "Google Fotos mit Wasabi synchronisieren — erschwingliches Foto-Archiv-Backup mit RcloneView"
authors:
  - steve
description: "Erfahren Sie, wie Sie Ihre Google Fotos-Bibliothek mit S3-kompatiblem Wasabi-Speicher synchronisieren und sichern — mit RcloneView für ein redundantes, erschwingliches Off-Site-Fotoarchiv."
keywords:
  - Google Fotos mit Wasabi synchronisieren
  - Google Fotos Wasabi Backup
  - RcloneView Google Fotos Backup
  - Wasabi Foto-Archivspeicher
  - erschwingliches Cloud-Fotobackup
  - Google Fotos Offsite-Backup
  - rclone Google Fotos Wasabi
  - Cloud-Fotobibliothek-Backup
tags:
  - RcloneView
  - google-photos
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Fotos mit Wasabi synchronisieren — erschwingliches Foto-Archiv-Backup mit RcloneView

> Schützen Sie jahrelang gesammelte, unersetzliche Fotos, indem Sie Ihre Google Fotos-Bibliothek mit S3-kompatiblem Wasabi-Speicher synchronisieren — redundant, off-site und kostengünstig.

Google Fotos ist der Ort, an dem Millionen Menschen ihre Fotobibliotheken speichern, doch sich für unersetzliche Erinnerungen auf eine einzige Plattform zu verlassen, birgt reale Risiken. Speicherkontingente füllen sich, Kontorichtlinien ändern sich, und der Zugriff kann mit wenig Vorwarnung entzogen werden. Eine Synchronisation mit Wasabi — einem S3-kompatiblen Objektspeicherdienst — schafft eine zuverlässige, unabhängige Off-Site-Kopie, die vollständig unter Ihrer Kontrolle steht. RcloneView verbindet beide Dienste in einer visuellen Zwei-Panel-Oberfläche und macht Cloud-zu-Cloud-Fotoübertragungen unkompliziert — ganz ohne Kommandozeilen-Konfiguration.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Fotos und Wasabi in RcloneView verbinden

Fügen Sie zunächst Google Fotos als Remote hinzu. Öffnen Sie den Tab **Remote**, klicken Sie auf **New Remote** und wählen Sie Google Fotos aus der Anbieterliste aus. RcloneView öffnet ein Browserfenster für die OAuth-Authentifizierung — melden Sie sich mit Ihrem Google-Konto an und erteilen Sie den Zugriff. Ihre Fotos und Alben sind sofort im Explorer-Panel durchsuchbar.

Fügen Sie als Nächstes Wasabi als S3-kompatiblen Remote hinzu. Klicken Sie erneut auf **New Remote**, wählen Sie Amazon S3 als Typ und Wasabi als Anbieter aus. Geben Sie Ihren Wasabi Access Key, Secret Key und regionalen Endpunkt ein. Erstellen Sie vorab einen Ziel-Bucket in der Wasabi-Konsole, damit dieser bereit ist, Dateien zu empfangen. Sobald beide Remotes gespeichert sind, können Sie Ihre Google Fotos-Bibliothek in einem Panel und Ihren Wasabi-Bucket im anderen durchsuchen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneView bietet vollen Lese-/Schreibzugriff auf S3-kompatible Anbieter wie Wasabi bereits in der KOSTENLOSEN Lizenz — und macht es damit zu einem leistungsfähigen Backup-Ziel, ohne Ihren Plan upgraden zu müssen.

## Sync-Job erstellen und ausführen

Mit beiden Remotes im Explorer sichtbar, öffnen Sie den **Job Manager** und erstellen Sie einen neuen Sync-Job. Legen Sie Google Fotos als Quelle und Ihren Wasabi-Bucket als Ziel fest. Aktivieren Sie im Schritt Advanced Settings die **Checksummenprüfung** — dabei werden übertragene Dateien anhand ihres Inhalts-Hashwerts statt nur der Größe verglichen, wodurch jede Beschädigung während der Übertragung erkannt wird.

Bevor Sie die vollständige Synchronisation ausführen, nutzen Sie **Dry Run**, um die komplette Dateiliste in der Vorschau zu sehen. Bei einer über Jahre gewachsenen Fotobibliothek hilft ein Dry Run dabei, den Umfang der beteiligten Daten zu verstehen und zu überprüfen, ob Ihre Filtereinstellungen — falls vorhanden — korrekt konfiguriert sind.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferring Google Photos files to a Wasabi bucket in RcloneView" class="img-large img-center" />

## Live-Übertragungsfortschritt überwachen

Sobald der Job gestartet ist, zeigt der Tab **Transferring** am unteren Rand von RcloneView den Live-Fortschritt: Übertragungsgeschwindigkeit, abgeschlossene Dateien und insgesamt übertragene Datenmenge. Bei einem Fotografen mit über 80.000 Originalen kann die erste Synchronisation mehrere Stunden dauern — nachfolgende Läufe übertragen nur neue oder geänderte Dateien, wodurch das inkrementelle Backup schnell bleibt.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of the Google Photos to Wasabi transfer" class="img-large img-center" />

**Job History** protokolliert jeden Lauf mit Startzeit, Dauer, Dateianzahl und Status. Ein regelmäßiger Blick darauf bestätigt, dass Ihre Backups erfolgreich abgeschlossen werden, und lässt Sie wiederkehrende Fehler frühzeitig erkennen.

## Regelmäßige Backups mit PLUS planen

Mit einer PLUS-Lizenz können Sie die Synchronisation von Google Fotos zu Wasabi so planen, dass sie automatisch nach einem beliebigen Crontab-Zeitplan ausgeführt wird — täglich, wöchentlich oder zu einer bestimmten Uhrzeit. Das Tool Simulate Schedule zeigt eine Vorschau der kommenden Ausführungszeiten, bevor Sie den Job speichern, sodass Sie prüfen können, ob der Rhythmus zu Ihrem Workflow passt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a schedule for the Google Photos to Wasabi backup job" class="img-large img-center" />

Ein Hochzeitsfotograf, der Kundengalerien sichert, kann beispielsweise einen nächtlichen Job einplanen, der neue Lieferungen von Google Fotos in einen Wasabi-Archiv-Bucket überträgt — ohne dass nach jedem Shooting ein manueller Eingriff nötig ist.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Google Fotos über **New Remote** hinzufügen (OAuth-Browser-Login).
3. Wasabi über **New Remote** hinzufügen — Amazon S3 auswählen, Wasabi als Anbieter wählen und Ihre Zugangsdaten eingeben.
4. Einen Sync-Job im **Job Manager** erstellen, mit Google Fotos als Quelle und Ihrem Wasabi-Bucket als Ziel.

Ihre Google Fotos-Bibliothek erhält so ein erschwingliches, unabhängig kontrolliertes Off-Site-Archiv, das Ihre Erinnerungen über jede einzelne Plattform hinaus sicher aufbewahrt.

---

**Related Guides:**

- [Google Fotos mit Backblaze B2 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)
- [Google Fotos-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Wasabi Cloud-Speicher verwalten mit RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
