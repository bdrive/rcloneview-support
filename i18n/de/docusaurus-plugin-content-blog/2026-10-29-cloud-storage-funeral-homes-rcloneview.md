---
slug: cloud-storage-funeral-homes-rcloneview
title: "Cloud-Speicher für Bestattungsunternehmen — Familienunterlagen mit RcloneView schützen"
authors:
  - alex
description: "Bestattungsunternehmen können mit RcloneView Dienstakten, Verträge, Fotos und Gedenkvideos auf mehrere Clouds sichern: geplante Synchronisation, Verschlüsselung und Folder Compare."
keywords:
  - Cloud-Speicher für Bestattungsunternehmen
  - Dateisicherung Bestattungsunternehmen
  - Dokumentenspeicherung Bestattungsunternehmen
  - Gedenkvideo Backup
  - verschlüsseltes Cloud-Backup
  - Cloud-Backup für kleine Unternehmen
  - rcloneview Bestattungsunternehmen
  - Multi-Cloud-Backup
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

# Cloud-Speicher für Bestattungsunternehmen — Familienunterlagen mit RcloneView schützen

> Bewahren Sie Bestattungsverträge, Gedenkfotos und Gedenkvideos sicher an mehr als einem Ort auf.

Ein Bestattungsunternehmen verwahrt Unterlagen, von denen Familien erwarten, dass sie jahrzehntelang vorhanden sind: unterschriebene Verträge, Traueranzeigen, Vorsorgeunterlagen, Foto-Diashows und aufgezeichnete Trauerfeiern, die mehrere Gigabyte groß sein können. Oft liegen diese Daten auf einem einzigen Büro-PC oder in einem einzigen Cloud-Konto. RcloneView bietet kleinen Teams eine visuelle Möglichkeit, diese Daten ohne Skripte an einen zweiten und dritten Speicherort zu kopieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum eine einzige Kopie nicht genügt

Stellen Sie sich ein Unternehmen mit 15 Jahren an Fallordnern auf einem Netzlaufwerk und einem Dropbox-Konto für von Familien eingereichte Fotos vor. Ein Festplattenausfall, ein versehentliches Löschen oder ein kompromittierter Login betrifft alle Fälle auf einmal. Ein bewährtes Muster ist eine Primärkopie, eine externe Cloud-Kopie und eine unabhängige zweite Cloud oder ein lokales Laufwerk.

RcloneView verbindet über 90 Anbieter, darunter Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi sowie lokale oder externe Laufwerke. Wenn Sie ein Geschäftslaufwerk mit einem Object-Storage-Bucket kombinieren, liegt das Backup in einem anderen Konto und bei einem anderen Anbieter als das Original.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Cloud- und lokalen Remotes für Backups eines Bestattungsunternehmens in RcloneView" class="img-large img-center" />

## Einen wiederholbaren Backup-Job erstellen

Erstellen Sie mit dem 4-Schritte-Assistenten einen **Sync**- oder **Copy**-Job: Quelle ist der Ordner mit den Fallakten, Ziel ist das Backup-Remote. Verwenden Sie Copy, wenn eine Löschung an der Quelle nie weitergegeben werden soll. Führen Sie zuerst einen **Dry Run** aus, um zu sehen, was kopiert oder entfernt würde.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Fallordner in RcloneView in eine Backup-Cloud kopieren" class="img-large img-center" />

Mit einer PLUS-Lizenz bietet der letzte Schritt des Assistenten eine Zeitplanung im Crontab-Stil, sodass ein nächtlicher Job nach Büroschluss laufen kann. Der Job History protokolliert Status, Größe und Dateianzahl jedes Laufs, was als Nachweis dient, dass Backups stattfinden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Nächtlichen Backup-Job in RcloneView planen" class="img-large img-center" />

## Sensible Unterlagen schützen

Familiäre und finanzielle Angaben verdienen Verschlüsselung. Erstellen Sie ein virtuelles **Crypt**-Remote über dem Backup-Ziel, und RcloneView verschlüsselt Dateinamen, Ordnernamen und Inhalte, bevor sie den Rechner verlassen. Bewahren Sie das Crypt-Passwort getrennt vom Büro-Computer auf; ohne es lassen sich die Daten nicht entschlüsseln.

Nutzen Sie **Folder Compare** regelmäßig, um zu prüfen, ob das Backup mit der Quelle übereinstimmt. Dateien, die nur links vorhanden sind, zeigen, was noch nicht kopiert wurde, und Dateien mit abweichender Größe weisen auf unvollständige Uploads hin.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare überprüft ein Backup eines Bestattungsunternehmens" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie mit **New Remote** Ihren Primärspeicher und ein Backup-Ziel hinzu.
3. Umhüllen Sie das Ziel für sensible Fallakten mit einem Crypt-Remote.
4. Erstellen Sie einen Copy-Job, führen Sie einen Dry Run aus und planen Sie ihn dann (PLUS) oder führen Sie ihn nach jeder Trauerfeier aus.

Unterlagen, die ihre Urheber überdauern, verdienen einen Backup-Plan, der jedes einzelne Konto überdauert.

---

**Verwandte Anleitungen:**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
