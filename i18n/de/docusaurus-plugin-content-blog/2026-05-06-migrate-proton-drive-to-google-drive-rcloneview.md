---
slug: migrate-proton-drive-to-google-drive-rcloneview
title: "Proton Drive zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Verschieben Sie Dateien von Proton Drive zu Google Drive mit RcloneView. Übertragen Sie verschlüsselte Cloud-Daten direkt zwischen Anbietern — ohne manuelle Downloads, mit vollständig erhaltener Ordnerstruktur."
keywords:
  - Proton Drive zu Google Drive migrieren
  - Proton Drive Google Drive Übertragung
  - RcloneView Proton Google Drive Migration
  - Proton Drive Migrationstool
  - Dateien von Proton Drive zu Google Drive verschieben
  - Proton Drive Cloud-Migration GUI
  - Google Drive Import Proton Drive
  - Cloud-zu-Cloud-Migration
  - Proton Drive Dateiübertragungstool
  - RcloneView Proton Drive Synchronisation
tags:
  - proton-drive
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive zu Google Drive migrieren — Dateien übertragen mit RcloneView

> RcloneView migriert Ihre Proton-Drive-Inhalte direkt in der Cloud zu Google Drive — Dateien werden dabei on the fly entschlüsselt und hochgeladen, ohne dass etwas lokal gespeichert wird.

Die Ende-zu-Ende-Verschlüsselung von Proton Drive macht es zu einer vertrauenswürdigen Speicherplattform für datenschutzbewusste Nutzer. Beim Umzug in eine Teamumgebung, die auf Google Workspace basiert, ist die Migration von Dokumenten, Fotos und Projektdateien von Proton Drive zu Google Drive eine häufige Anforderung. RcloneView übernimmt diese Migration effizient, indem es sich mit beiden Anbietern verbindet und die Übertragung über einen einzigen Synchronisationsjob koordiniert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Proton Drive und Google Drive in RcloneView verbinden

Um Proton Drive als Remote hinzuzufügen, ist rclone v1.69 oder höher erforderlich — was das in RcloneView eingebettete rclone standardmäßig erfüllt. Gehen Sie zu Remote-Tab > Neues Remote, wählen Sie Proton Drive aus und geben Sie Ihre Proton-Konto-E-Mail-Adresse und Ihr Passwort ein. Falls Sie die Zwei-Faktor-Authentifizierung aktiviert haben, werden Sie zusätzlich zur Eingabe des 2FA-Codes aufgefordert.

Wählen Sie für Google Drive die Option Google Drive aus und schließen Sie den OAuth-Browser-Ablauf ab. Beide Remotes erscheinen nach der Konfiguration im Datei-Explorer von RcloneView. Öffnen Sie Proton Drive und Google Drive nebeneinander in der Zwei-Panel-Ansicht, um den Umfang der Migration einzuschätzen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Den Migrationsjob konfigurieren

Erstellen Sie einen Kopier- oder Synchronisationsjob mit Proton Drive als Quelle und Ihrem Google-Drive-Ordner als Ziel. Im Sync-Assistenten von RcloneView:

- **Modus:** Wählen Sie Kopieren, um Dateien zu übertragen, ohne sie aus Proton Drive zu entfernen (so bleibt Ihr Original während der Migration als Backup erhalten)
- **Filterung:** Verwenden Sie den vordefinierten Google-Docs-Filter, um Probleme mit inkompatiblen Dateitypen zu vermeiden
- **Prüfsumme:** Aktivieren Sie diese Option zur Integritätsprüfung der übertragenen Dateien

Die Verschlüsselung von Proton Drive bedeutet, dass rclone die Inhalte beim Download entschlüsselt und den Klartext erneut zu Google Drive hochlädt. Stellen Sie vor dem Start sicher, dass Ihr Google-Drive-Zielordner über ausreichend Speicherplatz verfügt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## Dry Run und Vorschau ausführen

Verwenden Sie vor einer großen Migration immer zuerst den Dry-Run-Modus. Der Dry Run von RcloneView durchsucht die Proton-Drive-Quelle und listet jede Datei auf, die übertragen würde — mit Dateizahlen, Vorschauen der Ordnerstruktur und Schätzungen der Übertragungsgröße, bevor Sie sich festlegen. So lassen sich Ordner identifizieren, die Sie eventuell ausschließen möchten, wie etwa interne Dateiversionen oder geteilte Links von Proton Drive.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## Fortschritt überwachen und Ergebnisse validieren

Der Übertragungs-Tab von RcloneView zeigt den Migrationsfortschritt in Echtzeit. Der verschlüsselte Speicher von Proton Drive bringt im Vergleich zu Anbietern mit unverschlüsselter Speicherung etwas zusätzlichen Verarbeitungsaufwand mit sich, sodass Übertragungen etwas langsamer sein können als vergleichbare Google-Drive-zu-Drive-Vorgänge. Nach Abschluss des Jobs zeigt der Job-Verlauf die vollständige Zusammenfassung: migrierte Dateien, übertragene Bytes, Dauer und Fehler.

Vergleichen Sie die Dateianzahl und -größen in Google Drive mit Ihrer Proton-Drive-Quelle, um zu bestätigen, dass die Migration erfolgreich abgeschlossen wurde.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Proton Drive to Google Drive migration progress in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Proton Drive (E-Mail + Passwort) und Google Drive (OAuth) als Remotes hinzu.
3. Erstellen Sie einen Kopierjob von Proton Drive zu Ihrem Google-Drive-Zielordner.
4. Führen Sie einen Dry Run aus, um den Umfang zu bestätigen, und starten Sie dann die vollständige Migration.

Mit RcloneView ist die Migration von Proton Drive zu Google Drive ein unkomplizierter Prozess — inklusive Fortschrittsüberwachung und einem detaillierten Übertragungsprotokoll.

---

**Verwandte Anleitungen:**

- [Proton-Drive-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Proton Drive zu OneDrive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-onedrive-rcloneview)
- [Google-Drive-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
