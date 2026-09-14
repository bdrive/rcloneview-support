---
slug: cloud-storage-churches-religious-organizations-rcloneview
title: "Cloud-Speicher für Kirchen und Religionsgemeinschaften — Dateien mehrerer Standorte mit RcloneView verwalten"
authors:
  - casey
description: "Verwalten Sie Predigtaufnahmen, Mitgliederdaten und Dateien mehrerer Standorte für Kirchen und Religionsgemeinschaften über verschiedene Cloud-Speicher-Anbieter mit RcloneView."
keywords:
  - Cloud-Speicher für Kirchen
  - Dateiverwaltung für Religionsgemeinschaften
  - Backup von Predigtaufnahmen
  - Cloud-Synchronisation für mehrere Standorte
  - Cloud-Speicher für Kirchen RcloneView
  - Dateibackup für gemeinnützige Dienste
  - Backup der Kirchen-Medienbibliothek
  - RcloneView für Kirchen
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

# Cloud-Speicher für Kirchen und Religionsgemeinschaften — Dateien mehrerer Standorte mit RcloneView verwalten

> Wenn Predigtaufnahmen, Gottesdienstmedien, Mitgliederverzeichnisse und Finanzunterlagen über die Cloud verteilt sind, die jeder Standort zufällig gewählt hat, landen die meisten Kirchen bei einer Dateizerstreuung, die kein einzelner Administrator vollständig überblicken kann. RcloneView bringt alles in eine Ansicht.

Eine Gemeinde mit einem einzigen Standort kommt vielleicht mit einem gemeinsamen Google Drive-Ordner aus, aber Kirchen mit mehreren Standorten, Bistumsbüros und größere Dienste sammeln in der Regel eine Mischung aus Speicherdiensten an: ein Medienteam nutzt Dropbox für Predigtvideos, eine Finanzabteilung nutzt OneDrive für Spendenunterlagen, und ein von Freiwilligen betriebenes Archiv liegt in irgendeinem kostenlosen Konto, das jemand vor Jahren eingerichtet hat. RcloneView verbindet sich mit all dem aus einer einzigen Desktop-Anwendung, sodass Mitarbeiter und Freiwillige Dateien durchsuchen, sichern und neu organisieren können, ohne für den Speicher jedes Standorts eine andere Oberfläche zu lernen — oder die IT um einen neuen Zugang zu bitten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Predigt- und Gottesdienstmedien zentralisieren

Wöchentliche Predigtaufnahmen, Videos von Lobpreis-Sets und Livestream-Archive gehören oft zu den größten und am schnellsten wachsenden Dateien, die eine Kirche ansammelt, und sie sind gleichzeitig häufig am schlechtesten gegen Verlust geschützt — das private Cloud-Konto eines Medien-Freiwilligen ist kein Backup-Plan. Richten Sie in RcloneView einen geplanten Synchronisationsjob ein, der den Arbeitsordner des Medienteams automatisch auf ein zweites Remote kopiert, sodass die Aufnahmen nicht mehr davon abhängen, ob das Konto einer einzelnen Person aktiv bleibt oder ob ein Laufwerk voll wird.

<img src="/support/images/en/blog/new-remote.png" alt="Verbinden eines Remotes für Kirchenmedien-Speicher in RcloneView" class="img-large img-center" />

Da RcloneView im selben Fenster unter Windows, macOS und Linux mehr als 90 Anbieter einbinden und synchronisieren kann, muss ein Medienteam, das bereits in einen Anbieter für die Bearbeitung investiert hat, nirgendwohin umziehen — ein Backup-Job kann zu jedem zweiten Anbieter laufen, für den die Finanzabteilung bereits ein Budget hat, ohne den täglichen Arbeitsablauf des Teams zu verändern.

## Dateizugriff über mehrere Standorte koordinieren

Bei Kirchen mit mehreren Standorten verwaltet oft jeder Standort seinen Speicher unabhängig, was es einer Zentrale erschwert, einen klaren Überblick darüber zu bekommen, was gesichert ist, was veraltet ist oder was an verschiedenen Standorten doppelt vorhanden ist. Das Folder Compare-Werkzeug von RcloneView ermöglicht es einem Administrator, die Ordnerstruktur eines Standorts visuell mit einer Vorlage oder einem anderen Standort zu vergleichen und fehlende Dateien oder abweichende Benennungskonventionen zu erkennen, bevor sie bei einer Prüfung oder einem Führungswechsel zu einem echten Problem werden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Vergleich von Dateistrukturen zwischen Standort-Cloud-Speichern in RcloneView" class="img-large img-center" />

Für Standorte, die sich künftig auf einen gemeinsamen Anbieter vereinheitlichen, verschiebt die Cloud-zu-Cloud-Übertragung von RcloneView Dateien direkt zwischen Remotes, ohne den Umweg über einen lokalen Download und anschließenden Upload — das ist wichtig, wenn jahrelang angesammelte Medien und Unterlagen von einem alten Konto weggeholt werden müssen.

## Mitgliederdaten und Finanzdateien schützen

Mitgliederverzeichnisse, Seelsorgenotizen und Spendenunterlagen haben eine höhere Sensibilitätsschwelle als Predigtmedien, und viele kleinere Organisationen haben keine eigene IT-Person, die durchsetzt, wo diese Dateien liegen dürfen und wo nicht. Kombiniert man ein Cloud-Remote mit dem virtuellen Crypt-Remote von RcloneView, werden Dateinamen und Inhalte verschlüsselt, bevor sie den lokalen Rechner verlassen, sodass selbst kompromittierte Cloud-Kontozugangsdaten keine lesbaren Mitgliederdaten offenlegen. Geplante Synchronisationsjobs (verfügbar mit der PLUS License) können diese Backups dann jede Nacht automatisch ausführen, statt darauf zu warten, dass sich jemand erinnert, es manuell zu tun.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines automatisierten Backup-Jobs für Kirchenunterlagen in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie die Cloud-Konten jedes Standorts oder jeder Abteilung als separate Remotes im Remote Manager.
3. Verwenden Sie Folder Compare, um zu prüfen, was über die Standorte hinweg tatsächlich gesichert ist, bevor Sie annehmen, dass alles abgedeckt ist.
4. Richten Sie ein Crypt-Remote für Mitglieder- und Finanzunterlagen ein und planen Sie eine automatisierte nächtliche Synchronisation.

Wenn der Speicher jedes Standorts von einer Oberfläche aus sichtbar ist, kann ein Freiwilligenteam Predigtarchive, Medienbibliotheken und sensible Unterlagen zuverlässig gesichert halten, ohne eine eigene IT-Abteilung dafür zu brauchen.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für gemeinnützige Organisationen und NGOs — Spender-, Förder- und Felddaten mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-nonprofits-ngos-rcloneview)
- [Cloud-Speicher für Eventmanagement — Medien organisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-event-management-rcloneview)
- [1:N-Synchronisation — Eine Quelle mit RcloneView auf mehrere Ziele synchronisieren](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
