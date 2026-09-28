---
slug: cloud-storage-hvac-plumbing-contractors-rcloneview
title: "Cloud-Speicher für Heizungs- und Sanitärbetriebe — Auftragsdateien organisieren mit RcloneView"
authors:
  - morgan
description: "Heizungs- und Sanitärbetriebe jonglieren mit Baustellenfotos, Rechnungen und Genehmigungen auf mehreren Geräten — RcloneView bündelt den Cloud-Speicher für Außendienstteams."
keywords:
  - Cloud-Speicher für Heizungsbetriebe
  - Cloud-Speicher für Sanitärbetriebe
  - Baustellenfotos sichern
  - Dateiverwaltung für Handwerksbetriebe
  - Cloud-Synchronisation für Außendienst
  - RcloneView für Handwerksbetriebe
  - Rechnungen in der Cloud sichern
  - Cloud-Speicher für das Baugewerbe
  - Geräteübergreifende Synchronisation von Auftragsdateien
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

# Cloud-Speicher für Heizungs- und Sanitärbetriebe — Auftragsdateien organisieren mit RcloneView

> Baustellenfotos, Genehmigungen und Rechnungen verteilen sich am Ende auf Handys, Laptops und was auch immer ein Techniker gerade als Cloud-App installiert hat — RcloneView führt sie an einem Ort zusammen.

Ein Heizungs- oder Sanitärbetrieb im Wohnbereich produziert einen stetigen Strom von Dateien, die technisch nichts miteinander zu tun haben, für die Abrechnung aber alle zusammengehören: Vorher-Nachher-Fotos eines Heizungseinbaus, eine eingescannte Genehmigung, eine Lieferantenrechnung, ein Garantiedokument. Techniker im Außendienst speichern diese oft in irgendeiner App, die schon auf ihrem Handy installiert ist, und das Büro muss am Ende einen Auftragsvorgang aus drei verschiedenen Cloud-Konten zusammensetzen. RcloneView gibt dem Büro ein einziges Explorer-Fenster über all diese Konten, sodass das Zusammenstellen einer vollständigen Auftragsakte kein ständiges An- und Abmelden in getrennten Apps mehr bedeutet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fotos und Dokumente aus dem Feld zentralisieren

Verbinden Sie die Google Drive- oder Dropbox-Konten, die Techniker bereits für Baustellenfotos nutzen, zusammen mit dem Haupt-Cloud-Speicher des Büros, und durchsuchen Sie alle in denselben Explorer-Panels. Da RcloneView bis zu 1 bis 4 Panels gleichzeitig unterstützt, kann das Büro ein Panel für den Upload-Ordner eines Technikers offen halten und ein anderes für den endgültigen Auftragsordner, während Dateien per Drag-and-drop verschoben werden — das Ziehen zwischen zwei unterschiedlichen Remotes ist immer eine Kopie, sodass beim Aufbau der eigenen, organisierten Kopie im Büro nichts aus dem ursprünglichen Konto verloren geht.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting multiple cloud accounts used by field technicians in RcloneView" class="img-large img-center" />

Auch Folder Compare ist hier nützlich: Richten Sie es auf den unsortierten Upload-Ordner eines Technikers und den sortierten Auftragsordner des Büros, um auf einen Blick zu sehen, welche Fotos und Dokumente noch nicht abgelegt wurden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing a technician's upload folder against the office job archive" class="img-large img-center" />

## Die Sicherung zwischen Büro und Cloud automatisieren

Sobald Auftragsdateien konsolidiert sind, benötigen sie noch immer eine Sicherung, die nicht von der Festplatte eines einzelnen Laptops abhängt. Richten Sie einen Sync-Auftrag von den lokalen Auftragsordnern des Büros zu einem Cloud-Remote ein, und nutzen Sie 1:N-Synchronisation, um denselben Inhalt zu einem zweiten Cloud-Anbieter zu spiegeln — eine Funktion, die bereits mit der FREE-Lizenz verfügbar ist und selbst einem kleinen Betrieb zwei unabhängige Kopien jeder Rechnung und Genehmigung verschafft. S3, Azure oder Backblaze B2 lassen sich bereits mit der FREE-Lizenz mit vollem Lese-/Schreibzugriff verbinden, was eine kostengünstige Archivebene selbst für einen Zwei-Fahrzeuge-Betrieb praktikabel macht.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated backup of contractor job files with RcloneView" class="img-large img-center" />

PLUS-Lizenzkonten können einen Crontab-Zeitplan anhängen, sodass diese Sicherung nachts automatisch läuft — was für einen Betrieb, in dem die Person, die Dateien verwaltet, tagsüber selbst den Schraubenschlüssel schwingt, wichtiger ist, als es klingt.

## Erste Schritte

1. Laden Sie **RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Verbinden Sie jedes Cloud-Konto, das Techniker für Baustellenfotos und Dokumente nutzen.
3. Nutzen Sie Folder Compare, um alles zu finden und abzulegen, was noch nicht in das Auftragsarchiv verschoben wurde.
4. Richten Sie einen Sync-Auftrag ein (mit 1:N-Spiegelung, falls sinnvoll), um das Archiv automatisch zu sichern.

Etwas Struktur bei Auftragsdateien bedeutet weniger hektische Suche nach einer fehlenden Rechnung oder Genehmigung, wenn ein Kunde sechs Monate später noch einmal anruft.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für das Baustellen-Projektmanagement mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Anleitung zum Ordnervergleich — Unterschiede erkennen mit RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Eins-zu-Viele-Synchronisation zu mehreren Zielen mit RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
