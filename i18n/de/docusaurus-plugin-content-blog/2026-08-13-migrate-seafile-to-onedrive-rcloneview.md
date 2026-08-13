---
slug: migrate-seafile-to-onedrive-rcloneview
title: "Seafile zu OneDrive migrieren — Dateien mit RcloneView übertragen"
authors:
  - casey
description: "Verschieben Sie Bibliotheken von einem selbst gehosteten Seafile-Server zu Microsoft OneDrive mit dem Dual-Pane-Explorer und dem Job-Assistenten von RcloneView, einschließlich Dry-Run-Verifizierung."
keywords:
  - Seafile Migration
  - OneDrive
  - RcloneView
  - Selbst gehostet zur Cloud
  - Cloud-zu-Cloud-Übertragung
  - Seafile zu OneDrive
  - Microsoft 365 Migration
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile zu OneDrive migrieren — Dateien mit RcloneView übertragen

> Einen selbst gehosteten Seafile-Server zugunsten von Microsoft OneDrive aufzugeben, muss nicht manuelles Herunterladen und erneutes Hochladen bedeuten — RcloneView verbindet sich direkt mit beiden und verschiebt Bibliotheken zwischen ihnen in einem einzigen Job.

Teams, die eine selbst gehostete Seafile-Bereitstellung überwachsen, wechseln oft zu OneDrive, um die Dateispeicherung in ein bestehendes Microsoft-365-Abonnement zu integrieren und die Serverwartung abzugeben. RcloneView behandelt Seafile und OneDrive als gleichrangige Remotes im selben Fenster, sodass Sie beide durchsuchen, ihre Inhalte vergleichen und eine kontrollierte Übertragung durchführen können, statt Bibliotheken zunächst auf eine lokale Festplatte zu exportieren. RcloneView bindet ein und synchronisiert über 90 Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux, sodass derselbe Arbeitsablauf gilt, unabhängig davon, ob Ihr Seafile-Server vor Ort oder in einem privaten Rechenzentrum steht.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihren Seafile-Server verbinden

Öffnen Sie **New Remote** und wählen Sie **Seafile**, dann geben Sie Ihre Server-URL, Ihren Benutzernamen und Ihr Passwort ein. Ist die Zwei-Faktor-Authentifizierung aktiviert, geben Sie bei Aufforderung den Einmal-Token ein. Nach dem Verbinden listet RcloneView jede Bibliothek auf, auf die Sie Zugriff haben — persönliche und geteilte — im Datei-Explorer, mit derselben Ordnerstruktur und Dateiliste wie bei jedem anderen Remote.

Verschlüsselte Bibliotheken benötigen ihr Bibliothekspasswort, bevor RcloneView die Inhalte lesen kann. Testen Sie den Zugriff an einer kleinen verschlüsselten Bibliothek, bevor Sie die vollständige Migration planen, da ein fehlendes Passwort als leerer Ordner statt als offensichtlicher Fehler erscheint.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines Seafile-Remotes in RcloneView" class="img-large img-center" />

## Microsoft OneDrive hinzufügen

Fügen Sie über **New Remote** > **OneDrive** ein zweites Remote hinzu. RcloneView öffnet ein Browserfenster für die OAuth-Anmeldung — authentifizieren Sie sich mit Ihrem Microsoft-Konto und genehmigen Sie die angeforderten Berechtigungen. Für OneDrive for Business-Mandanten gilt derselbe OAuth-Ablauf; für die Standardnutzung ist keine separate App-Registrierung erforderlich.

Erstellen Sie einen Zielordner wie `Seafile Import/` in OneDrive, bevor Sie mit der Übertragung beginnen. Die migrierten Inhalte isoliert zu halten, erleichtert die Stichprobenprüfung der Ergebnisse und verhindert eine Vermischung mit bereits im OneDrive-Stammverzeichnis vorhandenen Inhalten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Seafile- und OneDrive-Remotes nebeneinander geöffnet in RcloneView" class="img-large img-center" />

## Den Migrationsjob ausführen

Mit beiden geöffneten Remotes können kleine Bibliotheken direkt übergezogen werden — Drag-and-Drop zwischen zwei verschiedenen Remotes führt eine Kopie aus und lässt die Seafile-Originale unberührt. Für eine vollständige Servermigration verwenden Sie stattdessen den vierstufigen **Job Wizard**: Legen Sie die Seafile-Bibliothek als Quelle und Ihren OneDrive-Ordner als Ziel fest, und konfigurieren Sie dann in Schritt 2 die Übertragungsanzahl und die Gleichheitsprüfer.

Führen Sie vor der eigentlichen Übertragung immer einen **Dry Run** aus. Er listet jede Datei auf, die kopiert wird, ohne Daten zu verschieben, was der schnellste Weg ist, einen falschen Quellordner oder eine unerwartet große Bibliothek zu erkennen, bevor Sie sich auf die Übertragung festlegen. Sieht die Vorschau richtig aus, starten Sie den Job und verfolgen Sie den Fortschritt im Transferring-Tab; die **Job History** führt eine dauerhafte Aufzeichnung darüber, was sich wann bewegt hat.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines Seafile-zu-OneDrive-Migrationsjobs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klicken Sie auf **New Remote** > **Seafile** und geben Sie Ihre Server-URL und Anmeldedaten ein.
3. Klicken Sie auf **New Remote** > **OneDrive** und schließen Sie die OAuth-Autorisierung ab.
4. Führen Sie einen Dry Run aus, dann den Migrationsjob, und bestätigen Sie die Ergebnisse in der Job History.

Die Migration von Seafile zu OneDrive auf diese Weise hält jede Übertragung nachvollziehbar, sodass Sie immer genau wissen, was den alten Server verlassen hat und wo es gelandet ist.

---

**Verwandte Anleitungen:**

- [Seafile verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [OneDrive verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Seafile zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
