---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "OneDrive mit Hetzner Storage Box synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - jay
description: "OneDrive mit Hetzner Storage Box synchronisieren mit RcloneView. Richten Sie SFTP-Backups ein, planen Sie automatisierte Synchronisationen und schützen Sie Ihre Microsoft-Dateien mit europäischem Speicher."
keywords:
  - OneDrive mit Hetzner Storage Box synchronisieren
  - Microsoft OneDrive Hetzner Backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP-Backup
  - Cloud-Speicher zu Hetzner Synchronisation
  - OneDrive Backup Europa DSGVO
  - Cloud-Dateisynchronisation Automatisierung
  - Hetzner Cloud-Backup-Tool
  - OneDrive Off-Site-Backup
tags:
  - onedrive
  - hetzner
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive mit Hetzner Storage Box synchronisieren — Cloud-Backup mit RcloneView

> Erstellen Sie ein unabhängiges Off-Site-Backup Ihrer OneDrive-Dateien, indem Sie sie mit RcloneView mit Hetzner Storage Box synchronisieren – ganz ohne Skripte.

Hetzner Storage Box ist eine kostengünstige, in Europa gehostete SFTP-Speicherlösung, die bei Entwicklern und IT-Teams beliebt ist, die zuverlässigen, datenschutzfreundlichen Backup-Speicher außerhalb der großen Hyperscaler suchen. Die Synchronisation Ihrer Microsoft-OneDrive-Inhalte mit einer Hetzner Storage Box über RcloneView erstellt eine Off-Site-Kopie, die vollständig unabhängig vom Microsoft-Ökosystem ist – nützlich für Notfallwiederherstellung, DSGVO-bewusste Datenresidenz oder den Schutz vor einer unerwarteten Kontosperrung. Der gesamte Arbeitsablauf lässt sich über die visuelle Oberfläche von RcloneView konfigurieren, ohne einen einzigen rclone-Befehl zu schreiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive und Hetzner Storage Box als Remotes einrichten

Bevor Sie synchronisieren können, müssen beide Dienste als Remotes in RcloneView registriert sein. OneDrive verwendet OAuth-Browser-Authentifizierung – klicken Sie auf den Tab **Remote** → **New Remote** → **OneDrive**, und RcloneView öffnet Ihren Browser für eine Ein-Klick-Anmeldung bei Microsoft. Es müssen keine API-Schlüssel oder Client-Anmeldedaten manuell verwaltet werden. Sowohl private OneDrive-Konten als auch OneDrive for Business im Rahmen von Microsoft 365 funktionieren über diesen Ablauf.

Hetzner Storage Box wird über SFTP verbunden. Wählen Sie im Dialog New Remote **SFTP** aus und geben Sie dann den Hostnamen Ihrer Storage Box ein (im Format `u{number}.your-storagebox.de`), Ihren Benutzernamen sowie Ihr Passwort oder den Pfad zu Ihrem privaten SSH-Schlüssel. Hetzner unterstützt sowohl Passwort- als auch schlüsselbasierte Authentifizierung – Teams, die mehrere Backup-Ziele verwalten, bevorzugen für unbeaufsichtigte Automatisierung oft SSH-Schlüssel, um keine Klartext-Passwörter speichern zu müssen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes in den Explorer-Tabs von RcloneView erscheinen, durchsuchen Sie jede Seite, um die Verbindung zu bestätigen, bevor Sie Ihren Synchronisationsjob erstellen.

## Den OneDrive-zu-Hetzner-Synchronisationsjob erstellen

Sobald beide Remotes bereit sind, öffnen Sie den **Job Manager** über den Home-Tab und klicken Sie auf **Add Job**. Legen Sie im 4-stufigen Assistenten Ihren OneDrive-Quellordner fest – dies kann Ihr gesamtes OneDrive-Stammverzeichnis oder ein bestimmter Unterordner wie `Documents/Contracts` oder ein freigegebener Teams-Ordner sein. Legen Sie den Pfad der Hetzner Storage Box als Ziel fest.

Konfigurieren Sie im Schritt Advanced Settings gleichzeitige Übertragungen entsprechend Ihrer Verbindungsgeschwindigkeit und aktivieren Sie die Prüfsummenverifizierung für kritische Daten. Eine Anwaltskanzlei, die 30 GB an Fallakten auf Hetzner sichert, kann sich auf den Prüfsummenmodus verlassen, um sicherzustellen, dass jedes Dokument unversehrt ankommt – so werden während der Übertragung entstandene Beschädigungen erkannt. Im Schritt Filtering können Sie temporäre Office-Sperrdateien (`.tmp`, `.lock`) ausschließen oder den Job auf bestimmte Dokumenttypen wie PDFs und Tabellenkalkulationen beschränken.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

Führen Sie zunächst eine Trockenlauf-Simulation durch – RcloneView zeigt genau an, welche Dateien kopiert oder entfernt würden, ohne tatsächliche Änderungen vorzunehmen. Sobald die Vorschau Ihren Erwartungen entspricht, führen Sie den Job aus. Der Tab **Transferring** am unteren Rand zeigt während des gesamten Laufs den Live-Übertragungsfortschritt, die Übertragungsgeschwindigkeit und die Dateianzahl an.

## Automatisierte Backups planen und überwachen

Mit einer RcloneView-PLUS-Lizenz können Sie Ihr OneDrive-zu-Hetzner-Backup nach einem Crontab-Zeitplan automatisieren. Eine tägliche Synchronisation um 03:00 Uhr stellt sicher, dass Ihre OneDrive-Dateien jede Nacht ohne manuellen Eingriff auf Hetzner gesichert werden. Der Zeitplan-Simulator im Assistenten zeigt eine Vorschau der nächsten Ausführungszeiten, sodass Sie das Muster vor dem Speichern des Jobs überprüfen können.

Der Job-Verlauf führt ein vollständiges Prüfprotokoll – jeder Lauf zeichnet Startzeit, Dauer, Übertragungsgeschwindigkeit, Dateianzahl und Ergebnis auf. Schlägt ein Backup aufgrund eines vorübergehenden Netzwerkproblems fehl, versucht die konfigurierbare Wiederholungslogik von RcloneView den Job automatisch erneut auszuführen. Mit Benachrichtigungen zum Job-Abschluss (verfügbar mit PLUS) wird Ihr Team über etwaige Fehler informiert, bevor der nächste Geschäftstag beginnt – sodass kein Backup-Fenster unbemerkt bleibt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **OneDrive** als OAuth-Remote hinzufügen über den Tab Remote → **New Remote** → OneDrive.
3. **Hetzner Storage Box** als SFTP-Remote mit Ihrem Hostnamen und Ihren Zugangsdaten hinzufügen.
4. Einen Synchronisationsjob im **Job Manager** erstellen, mit OneDrive als Quelle und Ihrem Hetzner-Pfad als Ziel.

Das Backup von OneDrive auf Hetzner Storage Box bietet Ihnen ein kostengünstiges, in Europa gehostetes Sicherheitsnetz, das automatisch läuft – und stellt sicher, dass Ihre Microsoft-Dateien auch bei unerwarteten Ausfällen von Cloud-Diensten geschützt sind.

---

**Related Guides:**

- [Hetzner Storage Box-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [OneDrive-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Dropbox mit Hetzner Storage Box synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
