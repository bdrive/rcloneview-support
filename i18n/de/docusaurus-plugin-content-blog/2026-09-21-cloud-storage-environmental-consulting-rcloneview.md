---
slug: cloud-storage-environmental-consulting-rcloneview
title: "Cloud-Speicher für Umweltberatungsunternehmen — Felddaten mit RcloneView organisieren"
authors:
  - tayson
description: "Verwalten Sie GIS-Datensätze, Vermessungsbilder und Compliance-Berichte anbieterübergreifend für Umweltberatungsunternehmen mit RcloneView."
keywords:
  - Cloud-Speicher für Umweltberatung
  - GIS-Daten-Backup
  - Dateiverwaltung für Umwelt-Compliance
  - Synchronisation von Felderhebungsdaten
  - Cloud-Speicher für Berater
  - RcloneView Umwelt
  - Backup von Fernerkundungsdaten
  - Multi-Cloud-Dateiverwaltung
  - Speicherung von Umweltberichten
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

# Cloud-Speicher für Umweltberatungsunternehmen — Felddaten mit RcloneView organisieren

> Umweltberater jonglieren mit GIS-Layern, Bodenprobenprotokollen und Genehmigungsdokumenten, die über die jeweils von Kunden oder Feldteams genutzten Clouds verteilt sind — RcloneView führt all das in einem einzigen Fenster zusammen.

Schon eine einzige Standortbewertung kann Gigabytes an Drohnenaufnahmen, Grundwasserüberwachungsprotokollen und Shapefiles erzeugen, die häufig in die von einem Subunternehmer oder einer Aufsichtsbehörde bevorzugte Cloud hochgeladen werden. Umweltberatungsunternehmen landen so mit Projektdaten, die über Google Drive, Dropbox und die von Behördenpartnern genutzten SFTP-Server verstreut sind, ohne eine zentrale Stelle, an der sich vor einer Berichtsfrist prüfen lässt, ob alles gesichert wurde. RcloneView verbindet all diese Speichertypen von einer einzigen Desktop-Anwendung aus, sodass Projektleiter Felddaten durchsuchen, vergleichen und archivieren können, ohne zwischen fünf verschiedenen Logins wechseln zu müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Projektarchive mehrerer Standorte zentralisieren

Ein Beratungsunternehmen, das mehrere Standortbewertungen gleichzeitig durchführt, legt typischerweise einen Projektordner pro Kunde an, doch der zugrunde liegende Speicher variiert: Eine Phase-I-Umweltstandortbewertung liegt möglicherweise im Google Drive des Unternehmens, während der vom Kunden vorgegebene Datenraum auf SFTP oder Box liegt. Mit dem Multi-Panel-Explorer von RcloneView kann ein Projektleiter mehrere Remotes nebeneinander öffnen, sodass ein aus lokalen Dateien erstellter Phase-I-Bericht direkt in den SFTP-Datenraum des Kunden hochgeladen werden kann, während gleichzeitig eine Kopie mit dem eigenen Archiv des Unternehmens synchronisiert (Synchronisation) wird.

Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — bereits mit der FREE-Lizenz. Das ist für die Beratungsarbeit wichtig, da Felddaten häufig überprüft werden müssen: Ein Techniker lädt Rohdaten von Sensorprotokollen von einem Laptop im Feld hoch, und das Büro muss bestätigen, dass die Cloud-Kopie übereinstimmt, bevor die lokalen Originale gelöscht werden.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen Cloud-Remotes in RcloneView für ein Umweltberatungsprojekt" class="img-large img-center" />

Das Einrichten eines Remotes für das SFTP-Portal einer Aufsichtsbehörde oder das Box-Konto eines Kunden dauert nur wenige Minuten, und einmal konfiguriert, bleibt diese Verbindung bei jedem zukünftigen Projekt mit demselben Kunden bestehen.

## Integrität der Felddaten mit Folder Compare überprüfen

Bevor eine abgeschlossene Bewertung archiviert wird, müssen Berater sicher sein, dass jedes Wasserprobenfoto, jedes Beweiskettenformular und jeder Laborbericht, der aus dem Feld hochgeladen wurde, mit dem zentral gespeicherten Bestand übereinstimmt. Die Folder-Compare-Ansicht von RcloneView zeigt zwei Ordner nebeneinander an — etwa den lokalen Projektordner eines Feld-Laptops und das Cloud-Archiv des Unternehmens — und markiert Dateien, die sich in der Größe unterscheiden oder nur auf einer Seite existieren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Vergleich von Felddatenordnern vor der Archivierung einer Umweltbewertung" class="img-large img-center" />

Damit wird der häufige Fehlerfall erkannt, bei dem ein großes Orthomosaikbild aus einer Drohnenvermessung aufgrund einer instabilen Feldverbindung nicht vollständig hochgeladen wird — die Abweichung zeigt sich sofort im Vergleichsergebnis, statt Monate später aufzufallen, wenn eine Behörde die Originaldatei anfordert.

## Wiederkehrende Backups für Überwachungsdaten planen

Langfristige Umweltüberwachungsprojekte — Grundwassermessstellen, Luftqualitätsstationen, Sanierungsstandorte unter einer Vergleichsanordnung — erzeugen einen stetigen Strom an Sensormesswerten und Fotos, die eine konsistente Sicherung benötigen, ohne dass jemand manuell daran denken muss. Der Job Manager von RcloneView unterstützt wiederkehrende Synchronisationsaufträge mit einer crontab-artigen Planung in der PLUS-Lizenz, sodass ein Ordner mit täglichen Überwachungsexporten nachts automatisch mit einer zweiten Cloud synchronisiert werden kann.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung eines wiederkehrenden Backup-Auftrags für Umweltüberwachungsdaten in RcloneView" class="img-large img-center" />

Die Job History liefert dem Compliance-Team anschließend einen zeitgestempelten Nachweis jeder Synchronisation, was bei einem Audit zur Dokumentation der Datenaufbewahrungspraxis nützlich ist.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Remotes für jede von Ihrem Unternehmen und dessen Kunden genutzte Cloud hinzufügen — Google Drive, Dropbox, SFTP und Box werden alle per OAuth oder Eingabe von Zugangsdaten unterstützt.
3. Mit Folder Compare Felduploads vor Abschluss eines Standortbesuchs gegen Ihr zentrales Archiv verifizieren.
4. Für jedes Überwachungsprojekt mit wiederkehrenden Datenexporten einen geplanten Synchronisationsauftrag einrichten.

Die Umweltdaten jedes Kunden organisiert und nachweisbar gesichert zu halten, schützt das Unternehmen, wenn ein Bericht Jahre später infrage gestellt wird.

---

**Weiterführende Anleitungen:**

- [Cloud-Speicher für Drohnenvermessung und Kartierung — Luftbilddaten mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-drone-survey-mapping-rcloneview)
- [Cloud-Speicher für Vermessungsunternehmen — Felddaten mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)
- [Cloud-Speicher für Forschung und Wissenschaft — Daten mit RcloneView organisieren](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
