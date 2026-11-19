---
slug: cloud-storage-home-inspectors-rcloneview
title: "Cloud-Speicher für Bausachverständige — Berichte und Fotos mit RcloneView schützen"
authors:
  - steve
description: "Cloud-Speicher für Bausachverständige: Inspektionsfotos und PDF-Berichte sichern, ein verschlüsseltes Archiv führen und Kopien mit den Synchronisations- und Vergleichswerkzeugen von RcloneView prüfen."
keywords:
  - Cloud-Speicher für Bausachverständige
  - Backup von Hausinspektionsberichten
  - Backup von Inspektionsfotos
  - Dateiverwaltung für Bausachverständige
  - Inspektionsberichte in der Cloud sichern
  - verschlüsseltes Archiv für Kundenberichte
  - Multi-Cloud-Backup für kleine Unternehmen
  - rcloneview home inspection
  - rclone gui backup
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

# Cloud-Speicher für Bausachverständige — Berichte und Fotos mit RcloneView schützen

> Jede Inspektion erzeugt Hunderte von Fotos und einen unterschriebenen Bericht. RcloneView hilft Ihnen, diese Unterlagen gesichert, geordnet und auch Jahre später noch abrufbar zu halten.

Eine typische Hausinspektion erzeugt Hunderte von Fotos, Feuchtigkeits- und Wärmebilder sowie einen fertigen PDF-Bericht, der an den Kunden und oft auch an einen Makler geht. Wenn ein Käufer drei Jahre später etwas beanstandet, ist dieser Dateisatz Ihr Beweis. Viele selbstständige Sachverständige und kleine Büros bewahren ihn auf einem einzigen Laptop oder in einem einzigen privaten Cloud-Konto auf. RcloneView bietet Ihnen eine Desktop-Oberfläche, um dieses Archiv in mehr als eine Cloud zu kopieren, zu prüfen, ob die Kopien übereinstimmen, und einen alten Auftrag schnell wiederzufinden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Das Auftragsarchiv über mehrere Clouds organisieren

Verbinden Sie zunächst den Speicher, den Sie bereits nutzen. Google Drive, Dropbox und OneDrive melden sich über einen OAuth-Login im Browser an. Für ein Langzeitarchiv fügen Sie ein Objektspeicher-Remote wie Backblaze B2, Wasabi oder Amazon S3 mit Ihren Zugriffsschlüsseln hinzu. S3, Azure oder Backblaze B2 lassen sich mit der FREE-Lizenz mit vollem Lese- und Schreibzugriff verbinden.

Eine einfache Struktur hilft: ein Ordner pro Jahr, darin ein Ordner pro Objektadresse und Datum. Wenn die Dateien gut geordnet sind, ist eine spätere Anfrage nach Unterlagen in wenigen Minuten beantwortet.

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud remotes for a home inspection archive in RcloneView" class="img-large img-center" />

## Die Inspektionen eines Tages an zwei Ziele senden

Der Synchronisations-Assistent von RcloneView unterstützt mit der FREE-Lizenz **1:N-Synchronisation**. Ein Quellordner, etwa der Ordner `Inspections` auf Ihrem Laptop, kann in einem einzigen Job an mehrere Ziele gehen. Senden Sie ihn zum Beispiel an Google Drive für den täglichen Zugriff und an Backblaze B2 als zweite Kopie. Verwenden Sie die Einweg-Richtung "Modifying destination only", damit die Quelle niemals verändert wird.

Step 3 kombiniert vordefinierte Filter mit eigenen Regeln. So können Sie etwa die temporären Exportdateien ausschließen, die Ihre Berichtssoftware hinterlässt, oder ein maximales Dateialter festlegen, damit nur aktuelle Aufträge kopiert werden. Führen Sie zuerst einen **Dry Run** aus, um genau zu sehen, was kopiert wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="One-way sync of inspection photos and reports to two clouds" class="img-large img-center" />

## Das Backup zum Feierabend automatisieren

Sachverständige sind den ganzen Tag unterwegs, daher wird ein Backup, bei dem man an einen Klick denken muss, gern ausgelassen. Mit einer PLUS-Lizenz fügt Step 4 eine Planung im crontab-Stil hinzu, zum Beispiel an jedem Werktag um 20 Uhr. Die Vorschau **Simulate schedule** zeigt die nächsten Ausführungszeiten. Job History protokolliert jede Ausführung mit Status, Größe und Dateianzahl – nützlich, wenn ein Versicherer fragt, wie Sie Ihre Unterlagen schützen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly inspection backup job in RcloneView" class="img-large img-center" />

## Kundendaten verschlüsseln und Kopien prüfen

Berichte enthalten Kundennamen, Adressen und Fotos aus dem Inneren von Wohnungen und Häusern. Ein **Crypt**-Remote über Ihrem Archiv-Bucket verschlüsselt Dateinamen und Inhalte, bevor sie Ihren Computer verlassen. Nach einem großen Upload prüfen Sie mit **Folder Compare** Ihren lokalen Ordner gegen die Cloud-Kopie. Dateien, die nur links vorhanden sind oder abweichen, erscheinen in den Ergebnissen, und **Copy right** schließt die Lücken.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing a local inspection folder with its cloud backup" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Ihre Alltags-Cloud und ein Objektspeicher-Remote für das Langzeitarchiv hinzu.
3. Erstellen Sie einen Einweg-1:N-Synchronisationsjob aus Ihrem Ordner `Inspections` und prüfen Sie ihn mit Dry Run.
4. Fügen Sie ein Crypt-Remote zum Schutz der Kundendaten hinzu und planen Sie den Job mit PLUS für jeden Abend.

Mit einer getesteten und geprüften Backup-Routine wird eine Anfrage nach Unterlagen von vor Jahren zu einer schnellen Suche in geordneten Ordnern.

---

**Weiterführende Anleitungen:**

- [Cloud-Speicher für Immobilienmakler — Objektfotos und Dokumente mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-real-estate-agencies-rcloneview)
- [Cloud-Speicher für die Immobilienverwaltung — Objekte und Dokumente mit RcloneView zentralisieren](https://rcloneview.com/support/blog/cloud-storage-property-management-rcloneview)
- [Cloud-Speicher für Versicherungsagenturen — Policendokumente mit RcloneView schützen](https://rcloneview.com/support/blog/cloud-storage-insurance-agencies-rcloneview)

<CloudSupportGrid />
