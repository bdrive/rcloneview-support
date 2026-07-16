---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "Jottacloud zu OneDrive migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Schritt-für-Schritt-Anleitung zur Migration Ihrer gesamten Jottacloud-Dateien zu Microsoft OneDrive mit RcloneView. Verschieben Sie Ihre komplette Bibliothek ohne Kommandozeilen-Tools."
keywords:
  - jottacloud to onedrive migration
  - transfer jottacloud to onedrive
  - migrate jottacloud to onedrive
  - cloud to cloud transfer gui
  - jottacloud migration tool
  - onedrive cloud migration
  - rcloneview jottacloud onedrive
  - cloud storage migration guide
tags:
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud zu OneDrive migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Ihre gesamte Jottacloud-Bibliothek zu Microsoft OneDrive, ohne die Kommandozeile zu berühren — RcloneView übernimmt die Cloud-zu-Cloud-Übertragung mit vollständiger Fortschrittsüberwachung und Überprüfung der Dateiintegrität.

Viele Teams wechseln von Jottacloud zu OneDrive, wenn sie sich auf Microsoft 365 konsolidieren, um eine engere Integration mit Office-Apps und ein breiteres Angebot an Unternehmenswerkzeugen zu erhalten. Die Herausforderung besteht darin, jahrelang gesammelte Dateien präzise und in großem Umfang zu übertragen. Die Cloud-zu-Cloud-Job-Engine von RcloneView ermöglicht es Ihnen, beide Remotes zuzuordnen, eine verifizierte Kopie auszuführen und die Vollständigkeit mit einem integrierten Ordnervergleich zu bestätigen — alles aus einer einzigen GUI, ohne rclone-Konfigurationsdateien manuell bearbeiten zu müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloud und OneDrive als Remotes verbinden

Öffnen Sie RcloneView und navigieren Sie zum Tab **Remote**, klicken Sie dann auf **New Remote**. Wählen Sie Jottacloud aus der Anbieterliste und folgen Sie den Konfigurationsaufforderungen auf dem Bildschirm, um Ihr Konto zu authentifizieren.

Fügen Sie als Nächstes einen zweiten Remote für OneDrive hinzu. OneDrive verwendet browserbasiertes OAuth — RcloneView öffnet automatisch Ihren Standardbrowser für die Kontoanmeldung. Nach der Autorisierung wird die Verbindung in Ihrer rclone-Konfiguration gespeichert und ist sofort in den Explorer-Fenstern zugänglich.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

Sobald beide Remotes verbunden sind, öffnen Sie sie nebeneinander im Dual-Panel-Explorer von RcloneView. Klicken Sie mit der rechten Maustaste auf Ihren Quellordner und wählen Sie **Get Size**, um das gesamte Datenvolumen vor Beginn zu bestätigen — dies liefert Ihnen eine klare Migrationsbasis und hilft Ihnen, unerwartete Abweichungen nach der Übertragung zu erkennen.

## Einen Copy-Job im Job Manager erstellen

Gehen Sie zu **Home → Job Manager** und klicken Sie dann auf **Add Job**. Legen Sie Ihr Jottacloud-Stammverzeichnis (oder einen Unterordner) als Quelle und den Ziel-OneDrive-Ordner als Ziel fest. Wählen Sie **Copy** als Job-Typ für die erste Migration — dies erhält die Quelldateien unverändert, während OneDrive befüllt wird, ohne den Ursprung zu berühren.

Erhöhen Sie in Schritt 2 des Assistenten die **Number of file transfers**, um mehrere Dateien gleichzeitig zu übertragen; dies verkürzt die Gesamtdauer der Migration bei großen Bibliotheken erheblich. Aktivieren Sie **Enable checksum**, damit jede übertragene Datei anhand von Hash und Größe überprüft wird, nicht nur anhand des Dateinamens — entscheidend für eine einmalige Migration, bei der stille Datenkorruption erkannt werden muss, bevor Sie die Quelle stilllegen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

Klicken Sie vor dem eigentlichen Lauf auf **Dry Run**, um eine Vorschau der zu kopierenden Dateien zu erhalten. Bei einem Projektarchiv mit Tausenden verschachtelten Ordnern deckt dieser Vorschauschritt Probleme mit der Pfadlänge und übergroße Dateien auf, bevor sie zu Fehlern mitten in der Übertragung führen.

## Fortschritt und Übertragungsgeschwindigkeit überwachen

Sobald der Job gestartet ist, zeigt der Tab **Transferring** in der unteren Info-Ansicht den Echtzeit-Fortschritt: einzelne Dateinamen, Übertragungsgeschwindigkeit, insgesamt verschobene Bytes und eine laufende Dateizählung. Sie können den Job jederzeit abbrechen, ohne bereits übertragene Dateien zu beschädigen — die zugrunde liegende rclone-Engine von RcloneView handhabt unterbrochene Übertragungen sauber, und ein fortgesetzter Copy-Job überspringt Dateien, die am Ziel bereits mit übereinstimmender Größe und Prüfsumme vorhanden sind.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

Nutzen Sie bei sehr großen, über Nacht laufenden Migrationen das System-Tray, um RcloneView im Hintergrund weiterlaufen zu lassen. Benachrichtigungen über den Job-Abschluss informieren Sie, wenn die Übertragung fertig ist.

## Vollständigkeit mit Folder Compare überprüfen

Öffnen Sie nach Abschluss des Copy-Jobs **Folder Compare** über den Home-Tab. Setzen Sie das linke Panel auf Ihre Jottacloud-Quelle und das rechte Panel auf das OneDrive-Ziel. RcloneView scannt beide Seiten und hebt Dateien hervor, die nur links vorhanden sind und nicht übertragen wurden, Dateien mit unterschiedlicher Größe, die möglicherweise beschädigt wurden, sowie Dateien, die nur rechts vorhanden sind.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

Verwenden Sie **Copy Right** für alle verbleibenden, nur links vorhandenen Dateien, um die Übertragung abzuschließen. Wenn der Vergleich keine nur-links-vorhandenen oder größenabweichenden Einträge mehr zeigt, ist Ihr Jottacloud-Inhalt vollständig und präzise auf OneDrive gespiegelt — bereit für Microsoft 365-Workflows.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Jottacloud-Konto über Remote-Tab → New Remote hinzu und folgen Sie den Aufforderungen.
3. Fügen Sie Ihr OneDrive-Konto über Remote-Tab → New Remote hinzu (browserbasierte OAuth-Anmeldung).
4. Erstellen Sie einen Copy-Job im Job Manager, aktivieren Sie die Prüfsumme und führen Sie zuerst einen Dry Run aus.
5. Öffnen Sie nach der Übertragung Folder Compare, um zu bestätigen, dass keine nur-links-vorhandenen oder abweichenden Dateien vorliegen.

Eine saubere Migration von Jottacloud zu OneDrive ist in einer einzigen Sitzung möglich — ohne Skripting, ohne Überraschungen und mit einem verifizierten Ergebnis, dem Sie vertrauen können, bevor Sie die Quelle stilllegen.

---

**Related Guides:**

- [Jottacloud Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Jottacloud zu Google Drive migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [OneDrive Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
