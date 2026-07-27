---
slug: cloud-storage-museums-archives-rcloneview
title: "Cloud-Speicher für Museen und Archive — Digitale Bewahrung mit RcloneView"
authors:
  - tayson
description: "Museen und Archive nutzen RcloneView, um digitalisierte Sammlungen über Cloud-Speicher und Kaltarchiv-Ebenen hinweg zu synchronisieren, zu verifizieren und zu sichern."
keywords:
  - Cloud-Speicher für Museen
  - Digitale Archivsicherung
  - Software zur digitalen Bewahrung
  - Synchronisation von Archivsammlungen
  - Digitalisierungsworkflow für Museen
  - Kaltspeicher-Archivsynchronisation
  - RcloneView Archive
  - Verifizierung durch Ordnervergleich
  - Multi-Cloud-Backup für Museen
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Museen und Archive — Digitale Bewahrung mit RcloneView

> Digitalisierte Sammlungen sind nur sicher, wenn jede Kopie verifiziert wird — nicht nur hochgeladen. RcloneView gibt Archivaren eine Möglichkeit, das nachzuweisen.

Ein regionales Geschichtsmuseum, das 40.000 Fotonegative digitalisiert, steht vor einem Problem, das nichts mit dem Scanvorgang selbst zu tun hat: Sobald eine TIFF-Masterdatei existiert, muss sie an zwei unabhängigen Speicherorten vorliegen, und jemand muss bestätigen, dass diese Kopien über Jahre hinweg identisch bleiben. RcloneView übernimmt diesen Verifizierungsprozess direkt, verbindet aktiven Cloud-Speicher mit langfristigen Archiv-Ebenen und liefert dem Personal einen Ordner-für-Ordner-Vergleich anstelle einer blinden „Upload abgeschlossen"-Meldung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Masterdateien vs. Zugriffskopien

Archive unterhalten in der Regel zwei Ebenen: unkomprimierte Masterdateien (TIFF, WAV, ProRes) zur Bewahrung sowie kleinere Zugriffskopien (JPEG, MP3, H.264) für öffentliche Präsentation oder Anfragen von Forschenden. Der mehrteilige Explorer von RcloneView lässt das Personal beide Ebenen nebeneinander im Blick behalten — ein Bereich verbunden mit dem aktiven Cloud-Laufwerk, auf das Kuratoren neu digitalisierte Objekte hochladen, ein anderer verbunden mit einem Kaltarchiv-Remote wie Amazon S3 Glacier-Speicher oder Backblaze B2 für die Master.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen Cloud-Remotes in RcloneView für die Archivspeicherung" class="img-large img-center" />

Da RcloneView mit über 90 Anbietern verbunden werden kann, ist eine Institution nicht an das Kaltspeicher-Produkt eines einzelnen Anbieters gebunden. Ein Museum kann Master bei einem Anbieter aufbewahren und zur Redundanz für die Notfallwiederherstellung eine zweite Kopie bei einem anderen Anbieter spiegeln — verwaltet aus demselben Fenster.

## Integrität zwischen Kopien verifizieren

Eine Datei einmal hochzuladen ist keine Bewahrung — zu bestätigen, dass sie Jahre später noch mit dem Original übereinstimmt, ist es. Die Ordnervergleich-Funktion von RcloneView prüft zwei Speicherorte nebeneinander und markiert Dateien, die sich in der Größe unterscheiden, nur auf einer Seite existieren oder beim Transfer fehlerhaft waren. Archivare, die eine regelmäßige Integritätsprüfung durchführen, können den Vergleich auf die aktive Sammlung und den Archivspiegel richten und anschließend den Filter „unterschiedliche Dateien" prüfen, um stille Beschädigungen oder unvollständige Übertragungen zu erkennen, bevor sie zu dauerhaften Verlusten werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Überprüfung der Ordnervergleichsergebnisse zwischen zwei Archivspeicherorten" class="img-large img-center" />

Anders als bei Cloud-Tools, die nur einbinden (mount) können, bietet RcloneView Synchronisation und Ordnervergleich bereits mit der FREE-Lizenz, sodass für den Einstieg in Integritätsprüfungen keine kostenpflichtige Stufe erforderlich ist.

## Geplante Sicherung von Katalog-Metadaten

Sammlungsverwaltungssysteme (CMS-Datenbanken, Findmittel, EAD/MARC-Datensätze) ändern sich ständig, während Objekte katalogisiert werden. Mit dem Job Manager von RcloneView kann ein Archiv einen wiederkehrenden Synchronisationsauftrag definieren, der den CMS-Exportordner nach Zeitplan in den Cloud-Speicher spiegelt (PLUS-Lizenz), sodass Metadaten-Backups automatisch erfolgen, statt sich darauf zu verlassen, dass ein Mitarbeiter an den manuellen Export denkt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines wiederkehrenden Sicherungsauftrags für Archiv-Metadaten in RcloneView" class="img-large img-center" />

Der Dry-Run-Modus lässt das Digitalisierungsteam vorab genau sehen, welche Dateien eine Synchronisation betreffen würde, bevor sie ausgeführt wird — wichtig, wenn ein Auftrag sonst einen korrigierten Katalogeintrag mit einer veralteten Version überschreiben könnte.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie ein Remote für Ihren primären Cloud-Speicher sowie ein zweites Remote für Ihren Kaltarchiv- oder Offsite-Backup-Anbieter hinzu.
3. Führen Sie eine erste Synchronisation Ihrer digitalisierten Master durch und bestätigen Sie mit Ordnervergleich, dass beide Kopien übereinstimmen.
4. Richten Sie einen wiederkehrenden Auftrag für Katalog-Metadaten ein, damit die Katalogisierungsarbeit nie verloren gehen kann.

Eine Sammlung ist nur so sicher wie ihre am wenigsten verifizierte Kopie — diese Verifizierung in einen festen Ablauf einzubauen, statt darauf zu vertrauen, dass sie stattgefunden hat, ist es, was jahrzehntelange Digitalisierungsarbeit wiederherstellbar hält.

---

**Verwandte Anleitungen:**

- [Internet-Archive-Uploads mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-internet-archive-uploads-with-rcloneview)
- [Google Drive mit Internet Archive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-internet-archive-rcloneview)
- [Cloud-Speicher für Forschung & Wissenschaft — Leitfaden mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
