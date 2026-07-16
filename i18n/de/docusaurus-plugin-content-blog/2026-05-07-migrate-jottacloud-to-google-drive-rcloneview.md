---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "Jottacloud zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Schritt-für-Schritt-Anleitung zur Migration von Dateien von Jottacloud zu Google Drive mit der Cloud-zu-Cloud-Übertragung von RcloneView — beide Remotes einrichten und den Migrationsjob ausführen."
keywords:
  - Jottacloud Migration
  - Jottacloud zu Google Drive
  - RcloneView Migration
  - Cloud-zu-Cloud-Übertragung
  - Jottacloud Export
  - Cloud-Speicher-Migration
  - rclone Jottacloud
  - Google Drive Import
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud zu Google Drive migrieren — Dateien übertragen mit RcloneView

> Der Umzug Ihrer Dateien von Jottacloud zu Google Drive ist mit RcloneView unkompliziert — verbinden Sie beide Remotes und übertragen Sie direkt in der Cloud, ohne zuerst alles herunterladen zu müssen.

Jottacloud ist ein norwegischer Cloud-Speicher-Dienst, der für sein unbegrenztes Speicherangebot beliebt ist, aber viele Nutzer möchten inzwischen zu universeller zugänglichen Plattformen wie Google Drive wechseln. Egal ob Sie wegen Tarifänderungen, Preisen oder einfach zur Konsolidierung Ihres Cloud-Speichers umziehen — RcloneView macht den Migrationsprozess sauber und zuverlässig. Sie müssen nicht zuerst alle Dateien lokal herunterladen — RcloneView überträgt sie direkt von Jottacloud zu Google Drive als Cloud-zu-Cloud-Vorgang.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihren Jottacloud-Remote einrichten

Klicken Sie in RcloneView auf **New Remote** und wählen Sie **Jottacloud** aus der Anbieterliste. RcloneView führt Sie durch den Authentifizierungsprozess — Jottacloud verwendet einen geräteabhängigen Login-Ablauf, bei dem Sie sich über einen Browser anmelden, und das resultierende Token wird sicher in RcloneView gespeichert. Nach der Authentifizierung erscheint Ihr Jottacloud-Konto im Explorer, einschließlich Ihres persönlichen Archivs, Backup-Ordner und geteilter Inhalte.

Bevor Sie mit der Migration beginnen, durchsuchen Sie Ihre Jottacloud-Ordnerstruktur, um zu verstehen, wie Ihre Inhalte organisiert sind. Achten Sie auf Ordnernamen mit Sonderzeichen oder tief verschachtelte Strukturen, da diese bei umfangreichen Migrationen gelegentlich Probleme verursachen können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## Google Drive hinzufügen

Klicken Sie erneut auf **New Remote** und wählen Sie **Google Drive**. RcloneView öffnet einen Browser-Tab für die Google-OAuth-Autorisierung — melden Sie sich mit Ihrem Google-Konto an und erteilen Sie die angeforderten Berechtigungen. Nach Abschluss der Autorisierung ist der Google Drive-Remote im Explorer verfügbar.

Erstellen Sie vor Beginn der Migration einen Zielordner in Google Drive — zum Beispiel `Jottacloud Import/` — um migrierte Dateien organisiert und getrennt von vorhandenen Inhalten zu halten. So lässt sich das Migrationsergebnis leicht überprüfen, ohne Verwirrung darüber, welche Dateien woher stammen.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## Den Migrationsjob ausführen

Öffnen Sie mit beiden konfigurierten Remotes den **Job Wizard** im Job Manager. Legen Sie Jottacloud als Quelle fest (wählen Sie den obersten Ordner oder einen bestimmten Unterordner, den Sie migrieren möchten) und den Google Drive-Zielordner als Ziel. Wählen Sie für eine Migration den Modus **Copy** statt **Sync** — so wird sichergestellt, dass Dateien kopiert werden, ohne an der Quelle etwas zu löschen.

Führen Sie immer zuerst einen **Probelauf (Dry Run)** durch, um genau zu sehen, welche Dateien übertragen werden. Bei umfangreichen Jottacloud-Konten mit Tausenden von Dateien hilft die Ausgabe des Probelaufs, mögliche Probleme zu erkennen, bevor Sie sich für die vollständige Übertragung entscheiden. Sobald Sie zufrieden sind, führen Sie den echten Job aus. Der **Job Manager** von RcloneView zeigt den Fortschritt live an, und die **Job History** zeichnet die endgültige Anzahl der übertragenen Dateien sowie eventuelle Fehler auf.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klicken Sie auf **New Remote** > **Jottacloud** und schließen Sie die Browser-Authentifizierung ab.
3. Klicken Sie auf **New Remote** > **Google Drive** und schließen Sie die OAuth-Autorisierung ab.
4. Erstellen Sie einen Zielordner in Google Drive für die migrierten Inhalte.
5. Verwenden Sie den **Job Wizard**, um einen Copy-Job zu erstellen, führen Sie einen Probelauf durch und starten Sie anschließend die vollständige Migration.

Mit RcloneView ist die Migration von Jottacloud zu Google Drive ein einmaliger Job, dessen Einrichtung nur Minuten dauert und der automatisch bis zum Abschluss läuft.

---

**Weitere Anleitungen:**

- [Jottacloud verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Google Drive verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Jottacloud zu Backblaze B2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
