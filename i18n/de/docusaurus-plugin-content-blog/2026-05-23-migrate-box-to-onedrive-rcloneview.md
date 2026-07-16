---
slug: migrate-box-to-onedrive-rcloneview
title: "Box zu OneDrive migrieren — Dateien übertragen mit RcloneView"
authors:
  - morgan
description: "Schritt-für-Schritt-Anleitung zur Migration Ihrer Dateien von Box zu Microsoft OneDrive mit RcloneView. Schnelle, zuverlässige Cloud-zu-Cloud-Dateiübertragung mit vollständiger Fortschrittsüberwachung."
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - box
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu OneDrive migrieren — Dateien übertragen mit RcloneView

> RcloneView macht die Migration von Box zu Microsoft OneDrive einfach — verbinden Sie beide Konten, konfigurieren Sie einen Übertragungsjob und verschieben Sie Ihre gesamte Dateibibliothek, ohne einen Browser zu öffnen.

Organisationen, die von Box zu Microsoft OneDrive wechseln, stehen vor derselben wiederkehrenden Herausforderung: Tausende von Dateien zuverlässig zu verschieben, ohne Daten zu verlieren, Inhalte zu duplizieren oder einen langsamen manuellen Download-und-Reupload-Zyklus zu ertragen. RcloneView übernimmt die gesamte Migration über eine Desktop-GUI und überträgt Dateien direkt zwischen den beiden Cloud-Diensten in einem Cloud-zu-Cloud-Pfad, während Sie den Fortschritt in Echtzeit überwachen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und OneDrive verbinden

Der erste Schritt besteht darin, beide Konten als Remotes in RcloneView hinzuzufügen. Klicken Sie im Tab **Remote** auf **New Remote** und wählen Sie **Box**. RcloneView öffnet ein Browserfenster für die OAuth-Authentifizierung — melden Sie sich an, gewähren Sie den Zugriff und kehren Sie dann zur App zurück. Wiederholen Sie den Vorgang für **OneDrive**, das ebenfalls eine browserbasierte OAuth-Anmeldung verwendet.

Sobald beide Remotes gespeichert sind, öffnen Sie mit der Option **Layout** im Tab Settings zwei Explorer-Fenster nebeneinander. Navigieren Sie im linken Bereich zu Ihrem Box-Quellordner und im rechten Bereich zu Ihrem OneDrive-Zielordner. Diese Zwei-Fenster-Ansicht gibt Ihnen ein klares Bild der bestehenden Struktur, bevor die Übertragung beginnt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

Wenn Sie ein Box-for-Business-Konto migrieren, setzen Sie `box_sub_type = enterprise` in der Remote-Konfiguration — der Einrichtungsassistent enthält dieses Feld. Für OneDrive for Business oder eine SharePoint-Dokumentbibliothek wählen Sie während des OneDrive-Einrichtungsschritts den entsprechenden Kontotyp aus. Beide Enterprise-Varianten authentifizieren sich auf die gleiche Weise über Browser-OAuth.

## Den Migrationsjob ausführen

Nachdem beide Remotes konfiguriert sind, öffnen Sie den **Job Manager** und klicken Sie auf **Add Job**. Wählen Sie Ihren Box-Ordner als Quelle und den Ziel-OneDrive-Ordner als Ziel. Für eine einmalige Migration bewahrt der Jobtyp **Copy** alle Dateien in Box, während OneDrive befüllt wird — verwenden Sie **Move** nur, wenn Dateien während der Übertragung aus Box entfernt werden sollen.

Aktivieren Sie in den erweiterten Einstellungen die **Checksummenprüfung**, um zu bestätigen, dass jede Datei unversehrt ankommt. Dies ist besonders wertvoll bei großen Migrationen, bei denen Netzwerkunterbrechungen unbemerkt beschädigte Kopien erzeugen könnten. Legen Sie außerdem eine Anzahl von Wiederholungsversuchen fest (Standard: 3), um vorübergehende API-Fehler eines der beiden Anbieter zu bewältigen, ohne manuell neu starten zu müssen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

Verwenden Sie vor der Ausführung der vollständigen Übertragung den **Dry Run**-Modus, um den Job zu simulieren. Die Vorschau zeigt genau, welche Dateien kopiert werden, und hilft Ihnen, nicht übereinstimmende Ordnerstrukturen oder unerwartet große Dateien zu erkennen, bevor Sie Bandbreite und Zeit in die eigentliche Migration investieren.

## Fortschritt überwachen und Ergebnisse überprüfen

Während der Übertragung zeigt der Tab **Transferring** am unteren Rand der RcloneView-Oberfläche den Live-Fortschritt: aktuelle Geschwindigkeit, abgeschlossene Dateien, insgesamt übertragene Datenmenge und verstrichene Zeit. Bei großen Migrationen — etwa wenn ein Rechtsteam ein Jahrzehnt an Vertragsdokumenten verschiebt — ist diese Transparenz unerlässlich, um abzuschätzen, wie lange der Vorgang dauern wird, und um ihn rund um die Geschäftszeiten zu planen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

Wenn der Job abgeschlossen ist, prüfen Sie das Panel **Job History** für eine vollständige Ausführungsübersicht. Falls Dateien Fehler aufweisen, zeigt das Protokoll die genauen Pfade und Fehlermeldungen an, sodass Sie diese einzeln beheben können, ohne den gesamten Job erneut auszuführen. Verwenden Sie nach der Überprüfung des Verlaufs die **Folder Compare**-Funktion von RcloneView, um die Box-Quelle und das OneDrive-Ziel nebeneinander zu vergleichen und zu bestätigen, dass jede Datei korrekt übertragen wurde, bevor Sie das Box-Konto stilllegen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie **Box** als Remote über **Remote > New Remote** mit OAuth-Authentifizierung hinzu.
3. Fügen Sie **OneDrive** als zweiten Remote mit OAuth-Authentifizierung hinzu.
4. Erstellen Sie im Job Manager einen **Copy**-Job mit Box als Quelle und OneDrive als Ziel, aktivieren Sie die Checksummenprüfung und führen Sie ihn aus.

Der Wechsel von Box zu OneDrive ist mit RcloneView ein sauberer, nachvollziehbarer Vorgang — keine manuellen Downloads, kein zwischengeschalteter Speicher und vollständige Fortschrittstransparenz von Anfang bis Ende.

---

**Verwandte Anleitungen:**

- [Box mit Google Drive synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Box-zu-Dropbox-Migration ohne Ausfallzeit mit RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Box zu Backblaze B2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
