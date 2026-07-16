---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "iCloud Drive zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - jay
description: "Migrieren Sie iCloud Drive zu Google Drive mit RcloneView — eine Schritt-für-Schritt-Anleitung, um Apple-Cloud-Dateien ohne manuelle Downloads zu Google zu übertragen."
keywords:
  - iCloud Drive to Google Drive
  - migrate iCloud Drive to Google Drive
  - iCloud Drive migration
  - transfer iCloud files to Google Drive
  - RcloneView iCloud Drive
  - cloud migration tool
  - move files from iCloud to Google Drive
  - cross-cloud file transfer
  - iCloud Drive sync RcloneView
tags:
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive zu Google Drive migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Ihre gesamte iCloud-Drive-Bibliothek zu Google Drive, ohne vorher alles herunterzuladen — RcloneView übernimmt die Übertragung direkt zwischen beiden Diensten.

Der Wechsel von einem Apple-zentrierten Workflow zu Google Workspace — oder einfach der Wunsch nach plattformübergreifendem Dateizugriff — bedeutet oft, iCloud Drive zu Google Drive zu migrieren. Manuelles Herunterladen und erneutes Hochladen von Gigabytes an Daten kostet Zeit und birgt das Risiko unvollständiger Übertragungen. RcloneView verbindet sich direkt mit beiden Diensten und verschiebt Dateien über die Cloud hinweg, während Ihre Originale während des gesamten Prozesses unangetastet bleiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von iCloud Drive zu Google Drive wechseln

iCloud Drive lässt sich eng in Apples Ökosystem integrieren, aber außerhalb von macOS und iOS wird die Erfahrung fragmentiert. Google Drive funktioniert nativ auf allen wichtigen Plattformen und verbindet sich mit Google-Workspace-Tools, auf die plattformübergreifende Teams täglich angewiesen sind. Ein Designstudio mit 300 GB an Projektdateien benötigt beispielsweise möglicherweise alles in Google Drive, wenn es Kunden einbindet, die ausschließlich mit Google Docs und Slides arbeiten.

iCloud Drive synchronisiert Schreibtisch, Dokumente und andere Ordner stillschweigend mit Apples Servern — das bedeutet, dass sich dort oft jahrelang angesammelte Dateien ohne klare Übersicht befinden. Die Migration zu Google Drive bietet zentrale Übersicht, granulare Freigabekontrollen und Zugriff von jedem Gerät aus, ohne ein Apple-Konto zu benötigen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## iCloud Drive in RcloneView einrichten

Die eingebettete rclone-Binärdatei von RcloneView (v1.69.1+) erfüllt die für die iCloud-Drive-Unterstützung erforderliche rclone-Mindestversion v1.69. Eine separate Installation ist nicht nötig.

Um iCloud Drive hinzuzufügen, öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**. Wählen Sie iCloud Drive aus der Anbieterliste und geben Sie dann Ihre Apple-ID-E-Mail-Adresse und Ihr Passwort ein. Wenn Ihr Apple-Konto die Zwei-Faktor-Authentifizierung verwendet, erstellen Sie ein app-spezifisches Passwort in den Sicherheitseinstellungen Ihrer Apple-ID und verwenden Sie dieses anstelle Ihres regulären Passworts. Nach dem Speichern erscheinen Ihre iCloud-Drive-Ordner sofort im Dateiexplorer-Panel — Schreibtisch, Dokumente und alle anderen synchronisierten Verzeichnisse sind durchsuchbar.

## Google Drive verbinden

Google Drive verwendet OAuth-Authentifizierung. Fügen Sie in RcloneView ein neues Remote hinzu und wählen Sie Google Drive — es öffnet sich automatisch ein Browserfenster, in dem Sie sich bei Ihrem Google-Konto anmelden und den Zugriff gewähren können. Es sind keine API-Schlüssel oder Entwickler-Anmeldedaten erforderlich. Die Verbindung wird innerhalb von Sekunden hergestellt, und Ihre Drive-Ordner erscheinen in einem zweiten Panel neben iCloud Drive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## Die Migration durchführen

Nachdem beide Remotes konfiguriert sind, öffnen Sie den **Job Manager** und erstellen Sie einen **Copy**-Job. Legen Sie Ihren iCloud-Drive-Quellordner fest, wählen Sie Ihren Google-Drive-Zielordner als Ziel aus und benennen Sie den Job. Der Copy-Modus überträgt Dateien, die auf dem Ziel noch nicht existieren, ohne die Originale zu berühren — Ihre iCloud-Drive-Inhalte bleiben unverändert.

Bevor Sie sich zur vollständigen Übertragung entschließen, führen Sie **Dry Run** aus den Job-Optionen aus. RcloneView zeigt jede Datei an, die kopiert würde — Namen, Pfade, Größen — ohne auch nur ein Byte zu verschieben. Diese Vorschau ist besonders nützlich, wenn iCloud Drive jahrelange, gemischte Inhalte enthält und Sie den Umfang vor dem Start bestätigen möchten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

Sobald Sie zufrieden sind, führen Sie den Job aus und beobachten Sie den Fortschritt im Tab **Transferring** am unteren Rand der Oberfläche. Geschwindigkeit, Dateianzahl und Prozentanteil aktualisieren sich live. Aktivieren Sie bei großen Bibliotheken die Prüfsummenverifizierung in den erweiterten Job-Einstellungen, um sicherzustellen, dass jede Datei unbeschädigt angekommen ist.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Tab **Remote**, klicken Sie auf **New Remote** und fügen Sie iCloud Drive mit Ihren Apple-ID-Zugangsdaten hinzu.
3. Fügen Sie Google Drive als zweites Remote über OAuth-Browser-Login hinzu.
4. Erstellen Sie einen Copy-Job mit Ihrem iCloud-Drive-Ordner als Quelle und einem Google-Drive-Ordner als Ziel.
5. Führen Sie Dry Run aus, um die Übertragung in der Vorschau anzuzeigen, führen Sie dann den Job aus und überwachen Sie den Fortschritt im Tab Transferring.

Mit beiden Diensten nebeneinander verbunden ist die Migration Ihrer gesamten iCloud Drive zu Google Drive nur noch eine Frage der Konfiguration eines einzigen Jobs, den Sie laufen lassen.

---

**Verwandte Anleitungen:**

- [iCloud Drive verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Dropbox zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Google Drive zu pCloud migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />
