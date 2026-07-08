---
slug: migrate-seafile-to-google-drive-rcloneview
title: "Seafile zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Schritt-für-Schritt-Anleitung zur Migration von Dateien von einem selbst gehosteten Seafile-Server zu Google Drive mit den Cloud-zu-Cloud-Übertragungs- und Synchronisationstools von RcloneView."
keywords:
  - Seafile-Migration
  - Google Drive
  - RcloneView
  - Cloud-zu-Cloud-Übertragung
  - Self-Hosted-Migration
  - Dateimigration
  - Seafile zu Google Drive
  - rclone seafile
tags:
  - RcloneView
  - seafile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile zu Google Drive migrieren — Dateien übertragen mit RcloneView

> Der Umstieg von einem selbst gehosteten Seafile-Server auf Google Drive ist einfacher, als es klingt — mit RcloneView verbinden Sie beide als Remotes und übertragen Ihre Bibliotheken direkt, ohne einen zwischengeschalteten Download.

Seafile ist eine beliebte selbst gehostete Kollaborationsplattform, doch viele Teams migrieren irgendwann zu verwalteten Cloud-Diensten wie Google Drive, um den Wartungsaufwand zu reduzieren und eine bessere Integration mit Produktivitätstools zu erhalten. RcloneView behandelt Seafile als vollwertigen Remote neben Google Drive und ermöglicht es Ihnen, Ihre Seafile-Bibliotheken zu durchsuchen und in einem übersichtlichen grafischen Workflow direkt zu Google Drive zu kopieren. Es sind keine Kenntnisse der Kommandozeile erforderlich, und die integrierte rclone-Binärdatei übernimmt die gesamte Detailarbeit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihren Seafile-Server verbinden

Klicken Sie in RcloneView auf **New Remote** und wählen Sie **Seafile** aus der Anbieterliste. Geben Sie die URL Ihres Seafile-Servers, Ihren Benutzernamen und Ihr Passwort ein. Wenn Ihr Server 2FA verwendet, müssen Sie während der Einrichtung zusätzlich ein einmaliges Token angeben. RcloneView listet anschließend alle Ihre Seafile-Bibliotheken — sowohl persönliche als auch freigegebene — im Zwei-Fenster-Dateiexplorer auf.

Wenn Ihre Seafile-Bibliotheken verschlüsselt sind, benötigt RcloneView das Bibliothekspasswort, um die Dateien zu entschlüsseln und zu lesen. Es lohnt sich, den Zugriff auf eine kleine verschlüsselte Bibliothek zu testen, bevor Sie eine vollständige Migration versuchen, um sicherzustellen, dass Ihre Anmeldedaten korrekt funktionieren.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Seafile remote in RcloneView" class="img-large img-center" />

## Google Drive hinzufügen

Fügen Sie über **New Remote** > **Google Drive** einen zweiten Remote für Google Drive hinzu. RcloneView öffnet ein Browserfenster für die OAuth-Autorisierung — melden Sie sich mit Ihrem Google-Konto an und erteilen Sie die angeforderten Berechtigungen. Nach der Autorisierung erscheint der Google Drive-Remote im Explorer. Sie können zu einem beliebigen Ordner in „Meine Ablage" oder einer geteilten Ablage navigieren, um ihn als Migrationsziel zu verwenden.

Erwägen Sie, vor Beginn der Übertragung einen eigenen Ordner in Google Drive anzulegen — zum Beispiel `Seafile Migration/`. So bleibt der migrierte Inhalt während der Übergangsphase organisiert und von bestehenden Dateien getrennt.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging Seafile libraries to Google Drive in RcloneView" class="img-large img-center" />

## Die Migration durchführen

Mit beiden Remotes in der Zwei-Fenster-Ansicht geöffnet, können Sie für kleinere Migrationen einzelne Seafile-Bibliotheken per Drag-and-drop zu Google Drive ziehen. Für vollständige Servermigrationen verwenden Sie den **Job Wizard**, um einen Sync-Job zu erstellen: Legen Sie Seafile als Quelle und Ihren Google Drive-Zielordner als Ziel fest. Der vierstufige Assistent lässt Sie Übertragungsoptionen konfigurieren, einschließlich der Frage, ob Änderungszeitstempel beibehalten werden sollen.

Führen Sie zunächst einen **Dry Run** aus, um eine Vorschau der zu übertragenden Inhalte zu erhalten — das ist besonders nützlich für große Seafile-Instanzen mit Tausenden von Dateien. Nachdem Sie bestätigt haben, dass die Vorschau korrekt aussieht, starten Sie die eigentliche Übertragung. Der **Job Manager** von RcloneView zeigt den Fortschritt live an, und die **Job History** protokolliert das Ergebnis für Ihre Migrations-Nachvollziehbarkeit.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to Google Drive migration job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klicken Sie auf **New Remote** > **Seafile** und geben Sie die URL Ihres Servers, Ihren Benutzernamen und Ihr Passwort ein.
3. Klicken Sie auf **New Remote** > **Google Drive** und schließen Sie den OAuth-Autorisierungsvorgang ab.
4. Öffnen Sie beide Remotes nebeneinander im Zwei-Fenster-Explorer.
5. Verwenden Sie den **Job Wizard**, um einen Sync-Job zu erstellen, führen Sie einen Dry Run aus und führen Sie anschließend die vollständige Migration durch.

Mit RcloneView wird die Migration von Seafile zu Google Drive zu einem strukturierten, nachvollziehbaren Prozess statt zu manueller Datei-für-Datei-Arbeit.

---

**Verwandte Anleitungen:**

- [Seafile verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Google Drive verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Seafile mit AWS S3 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-seafile-to-aws-s3-rcloneview)

<CloudSupportGrid />
