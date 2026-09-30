---
slug: cloud-storage-tax-preparers-rcloneview
title: "Cloud-Speicher für Steuerberater — Strukturierte Mandanten-Backups mit RcloneView"
authors:
  - casey
description: "Cloud-Speicher für Steuerberater: Sichern Sie mit RcloneView Mandantenerklärungen, verschlüsseln Sie sensible Dateien und behalten Sie jede Saison eine geprüfte externe Kopie."
keywords:
  - Cloud-Speicher für Steuerberater
  - Dateien-Backup für Steuerberater
  - Cloud-Backup in der Steuersaison
  - Backup von Mandantendokumenten
  - verschlüsseltes Cloud-Backup
  - RcloneView Steuern
  - Steuererklärungen in der Cloud sichern
  - Multi-Cloud-Backup Buchhaltung
  - Crypt-Remote sensible Dateien
  - Cloud-Ordnervergleich
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Steuerberater — Strukturierte Mandanten-Backups mit RcloneView

> Halten Sie Mandantenerklärungen, Ausgangsunterlagen und Mandatsvereinbarungen extern gesichert, verschlüsselt und geprüft — alles in einer Desktop-App.

Eine Steuerkanzlei sammelt jede Saison Tausende von PDFs an: Lohnsteuerbescheinigungen (W-2), Vorjahreserklärungen, unterschriebene Vollmachten. Das meiste liegt auf einer Arbeitsstation oder einem NAS im Büro, und eine einzige defekte Festplatte im März kann Tage kosten. RcloneView bietet einer kleinen Kanzlei die Möglichkeit, diese Daten nach Zeitplan in den Cloud-Speicher zu kopieren, sie vorher zu verschlüsseln und die Vollständigkeit der Kopie nachzuweisen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Lokale Mandantenordner in die Cloud sichern

Angenommen, eine Kanzlei mit zwei Personen speichert Mandantenordner auf einer lokalen Festplatte, einen pro Mandant und Jahr. Fügen Sie unter **New Remote** ein Cloud-Remote wie Backblaze B2, Amazon S3 oder OneDrive hinzu und öffnen Sie dann den lokalen Ordner in einem Explorer-Panel und das Cloud-Ziel im anderen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud remote for tax client backups in RcloneView" class="img-large img-center" />

Erstellen Sie mit dem Sync-Assistenten einen Job vom lokalen Ordner zum Bucket. Nennen Sie ihn zum Beispiel `clients-2026` und aktivieren Sie unter Advanced Settings den Prüfsummenvergleich, damit geänderte Dateien anhand von Hash und Größe erkannt werden, nicht nur anhand des Zeitstempels.

## Sensible Dokumente vor dem Upload verschlüsseln

Steuererklärungen enthalten Namen, Identifikationsnummern und Bankdaten. RcloneView unterstützt virtuelle Crypt-Remotes, die Dateinamen, Ordnernamen und Inhalte verschlüsseln, bevor sie den Anbieter erreichen. Erstellen Sie ein Crypt-Remote, das Ihren Bucket-Pfad umschließt, und richten Sie den Synchronisations-Job auf das Crypt-Remote statt auf den unverschlüsselten Bucket. Bewahren Sie das Crypt-Passwort an einem sicheren Ort außerhalb desselben Cloud-Kontos auf; ohne es kann das Backup nicht entschlüsselt werden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing encrypted client folders to cloud storage" class="img-large img-center" />

## Saisonale Backups planen und den Verlauf prüfen

Während der Abgabesaison ändern sich die Daten täglich. Die Zeitplanung ist eine PLUS-Funktion: Nutzen Sie den Crontab-Stil in Step 4, um den Job jeden Abend auszuführen, und verwenden Sie Simulate schedule, um die nächsten Ausführungszeiten anzuzeigen. Mit der FREE-Lizenz können Sie denselben Job weiterhin mit einem Klick manuell im Job Manager starten.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly tax client backup job" class="img-large img-center" />

Job History listet jeden Lauf mit Status, Dauer, Größe und Dateianzahl auf, sodass Sie belegen können, dass die Backups in den entscheidenden Nächten liefen. Führen Sie vor jeder unidirektionalen Synchronisation **Dry Run** aus, um zu sehen, was kopiert oder gelöscht würde.

## Vor der Archivierung der Saison prüfen

Öffnen Sie am Ende der Saison **Compare** mit dem lokalen Ordner links und der Cloud-Kopie rechts. Filtern Sie nach Dateien, die nur links vorhanden sind oder sich unterscheiden, um Fehlendes zu finden, und kopieren Sie es dann hinüber. Sobald der Vergleich sauber ist, können Sie Speicherplatz auf dem Büro-Rechner freigeben.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing local client folders with the cloud backup" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie ein Cloud-Remote und bei Bedarf darüber ein Crypt-Remote hinzu.
3. Erstellen Sie aus Ihrem Mandantenordner einen Synchronisations-Job und führen Sie zuerst einen Dry Run aus.
4. Prüfen Sie mit Folder Compare und kontrollieren Sie Job History.

Eine getestete, verschlüsselte externe Kopie macht aus einem Hardwareausfall während der Abgabesaison eine Unannehmlichkeit statt einer Krise.

---

**Weiterführende Anleitungen:**

- [Cloud-Speicher für Buchhaltungs- und Finanzkanzleien](https://rcloneview.com/support/blog/cloud-storage-accounting-finance-firms-rcloneview)
- [Zero-CLI Crypt-Remote](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [Checkliste zur Sicherheit von Cloud-Speicher](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
