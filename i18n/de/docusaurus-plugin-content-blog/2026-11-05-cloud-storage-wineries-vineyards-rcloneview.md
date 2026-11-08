---
slug: cloud-storage-wineries-vineyards-rcloneview
title: "Cloud-Speicher für Weingüter und Weinberge — Produktionsunterlagen mit RcloneView schützen"
authors:
  - casey
description: "Weingüter und Weinberge können mit RcloneView Erntetagebücher, Etikettengrafiken und Compliance-Dateien über mehrere Clouds sichern: geplante Synchronisation, Verschlüsselung und Folder Compare."
keywords:
  - Cloud-Speicher für Weingüter
  - Weinberg Datensicherung
  - Weingut Unterlagen sichern
  - Etikettengrafik Backup
  - verschlüsseltes Cloud-Backup
  - geplante Cloud-Synchronisation
  - Multi-Cloud-Backup
  - RcloneView
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

# Cloud-Speicher für Weingüter und Weinberge — Produktionsunterlagen mit RcloneView schützen

> Bewahren Sie Erntetagebücher, Etikettengrafiken und Compliance-Unterlagen an mehr als einem Ort sicher auf.

Ein kleines Weingut erzeugt eine überraschende Vielfalt an Dateien: Ernte- und Gärungstabellen, hochauflösende Etiketten- und Verpackungsgrafiken, Fotos aus dem Verkostungsraum, Verträge mit Händlern und behördliche Meldungen. Oft liegen sie nur auf einem Büro-PC und in einem einzigen Cloud-Konto. RcloneView bietet Weingütern eine visuelle Möglichkeit, diese Daten an einen zweiten und dritten Ort zu kopieren und zu prüfen, ob die Kopien übereinstimmen. RcloneView kann über 90 Anbieter in einem Fenster einbinden (mount) und synchronisieren, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verbinden Sie die Orte, an denen Ihre Dateien liegen

Öffnen Sie den Tab Remote und fügen Sie hinzu, was Sie bereits nutzen: Google Drive oder OneDrive für Büro-Dokumente, ein NAS im Büro des Weinkellers und einen S3-kompatiblen Bucket wie Backblaze B2 oder Wasabi für eine externe Kopie. Cloud-Konten melden sich über den Browser an; Buckets verwenden einen Access Key. Ein Synology NAS kann im lokalen Netzwerk automatisch gefunden werden.

Legen Sie zwei Remotes nebeneinander in die Explorer-Bereiche und ziehen Sie einen Ordner hinüber, um ihn zwischen ihnen zu kopieren.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Cloud- und NAS-Remotes für ein Weingut in RcloneView" class="img-large img-center" />

## Grafiken und Unterlagen nach Zeitplan sichern

Etikettengrafiken und Abfüllprotokolle ändern sich rund um Jahrgangsfreigaben und liegen danach unberührt. Erstellen Sie einen Synchronisationsjob von der Büro-Freigabe zu Ihrem Bucket und nutzen Sie zuerst Dry Run, um eine Vorschau der zu kopierenden Dateien zu sehen. Filter helfen hier: Schließen Sie temporäre Dateien aus oder legen Sie ein maximales Dateialter fest, um sich auf den aktuellen Jahrgang zu konzentrieren.

Die geplante Synchronisation verwendet einen Zeitplan im crontab-Stil und ist eine PLUS-Funktion. Mit der FREE-Lizenz können Sie Jobs weiterhin manuell ausführen, was sich gut für eine Kopie nach jeder Ernte oder Abfüllung eignet.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines Backup-Jobs für ein Weingut in RcloneView" class="img-large img-center" />

## Compliance- und Kundendaten verschlüsseln

Händlerverträge, Lizenzdokumente und Kundenlisten eines Weinclubs verdienen mehr als eine einfache Kopie. Ein Crypt-Remote verschlüsselt Dateinamen, Ordnernamen und Inhalte, bevor sie die Cloud erreichen, sodass der Anbieter nur Chiffretext speichert. Richten Sie einen Backup-Job auf das Crypt-Remote aus, und der Rest des Workflows bleibt gleich. Bewahren Sie das Passwort getrennt vom Backup auf.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Kopieren von Weingutsdateien in ein verschlüsseltes Cloud-Remote" class="img-large img-center" />

## Kopien prüfen und Nachweise führen

Folder Compare zeigt Dateien, die nur links, nur rechts oder abweichend vorhanden sind, zwischen Ihrer Büro-Freigabe und dem Backup, sodass Sie bestätigen können, dass die Jahrgangsordner übereinstimmen. Job History listet jeden Lauf mit Status, Größe und Dateianzahl auf, was hilft, wenn ein Prüfer oder Versicherer fragt, wann das letzte Backup abgeschlossen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History für Backup-Läufe eines Weinguts" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Büro-Speicher und ein externes Remote hinzu.
3. Erstellen Sie einen Synchronisationsjob und prüfen Sie ihn mit Dry Run.
4. Umhüllen Sie das externe Remote für sensible Ordner mit Crypt und prüfen Sie mit Folder Compare.

Eine zweite, geprüfte Kopie macht aus einem verlorenen Laptop eine Unannehmlichkeit statt verlorener Jahrgangsunterlagen.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für Lebensmittel- und Getränkeunternehmen mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-food-beverage-businesses-rcloneview)
- [Cloud-Speicher für Landwirtschaft und Ackerbau mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [Cloud-Speicher für Gastgewerbe und Hotels mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-hospitality-hotels-rcloneview)

<CloudSupportGrid />
