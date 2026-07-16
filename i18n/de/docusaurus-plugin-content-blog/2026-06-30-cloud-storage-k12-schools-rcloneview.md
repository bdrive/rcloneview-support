---
slug: cloud-storage-k12-schools-rcloneview
title: "Cloud-Speicher für K-12-Schulen — Sicheres Backup und Datenmanagement mit RcloneView"
authors:
  - morgan
description: "Wie K-12-Schulen Google Drive- und OneDrive-Konten sichern, Daten von Absolventen archivieren und Migrationen zum Schuljahresende mit RcloneView automatisieren können."
keywords:
  - Cloud-Speicher für K-12-Schulen
  - Cloud-Backup-Lösung für Schulen
  - K-12 Google Drive Backup
  - OneDrive Schul-Datenbackup
  - Tool zur Archivierung von Schülerdaten
  - Datenmigration zum Schuljahresende
  - RcloneView Bildungs-Cloud-Management
  - FERPA Cloud-Backup-Workflow
  - Schul-IT Cloud-Synchronisation
  - Google Workspace for Education Backup
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - education
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für K-12-Schulen — Sicheres Backup und Datenmanagement mit RcloneView

> K-12-Schulen jonglieren mit Google Workspace for Education, Microsoft 365 und lokalen NAS-Laufwerken — RcloneView vereint alle in einem einzigen, planbaren Backup-System, ohne dass Ihr IT-Personal Kommandozeilen-Kenntnisse benötigt.

Schul-IT-Teams stehen jedes Jahr vor derselben Herausforderung: Neue Schüler kommen mit leeren Konten an, wiederkehrende Schüler benötigen Dateien auf mehreren Geräten, und Absolventen hinterlassen Daten, die vor der Schließung ihrer Konten archiviert werden müssen. Die meisten Schulbezirke betreiben gleichzeitig Google Drive und OneDrive für verschiedene Abteilungen, was ein fragmentiertes Speicherbild ergibt, das sich nur schwer zuverlässig sichern lässt. RcloneView verbindet sich über OAuth mit beiden — sowie mit S3-kompatiblen Archiven, NAS-Geräten und jedem WebDAV-Server — von einer einzigen Oberfläche aus. Anders als reine Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner zwischen Cloud-Anbietern bereits in der KOSTENLOSEN Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Die Herausforderung des Cloud-Speichers in K-12-Schulen

Ein typischer K-12-Schulbezirk verfügt möglicherweise über Tausende von Google-Drive-Konten für Schüler und Hunderte weitere für das Personal, die alle separat verwaltet werden — ohne anbieterübergreifendes Backup. Verlässt ein Mitarbeiter die Schule im Laufe des Jahres, können seine OneDrive-Daten beim Deaktivieren des Kontos einfach verschwinden. Wenn Schüler ihren Abschluss machen, werden Google-Drive-Konten geschlossen, ohne dass ein Archiv ihrer Kursarbeiten oder kreativen Projekte existiert.

Kommen noch lokale Lehrmaterialien auf einem NAS hinzu, entsteht ein Drei-Wege-Speicherproblem: Drive, OneDrive und NAS — die alle von einem IT-Team abgeglichen werden müssen, das selten freie Stunden hat. Der Dual-Panel-Datei-Explorer von RcloneView ermöglicht es dem Personal, alle verbundenen Anbieter gleichzeitig zu durchsuchen und per Rechtsklick oder Drag-and-Drop zwischen ihnen zu kopieren.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and OneDrive school accounts as remotes in RcloneView" class="img-large img-center" />

Das Hinzufügen eines Google-Workspace-Kontos dauert nur wenige Sekunden — wählen Sie Google Drive aus der Anbieterliste unter **Remote-Tab > Neuer Remote** und authentifizieren Sie sich über Browser-OAuth. OneDrive for Education funktioniert nach demselben Muster. Beide erscheinen anschließend als durchsuchbare Remotes in den Explorer-Panels.

## Sichern von Schüler- und Personal-Cloud-Konten

Für ein systematisches Backup erstellen Sie dedizierte **Synchronisationsjobs** in RcloneView:

- **Quelle:** Der OneDrive-Ordner eines Mitarbeiters oder ein freigegebenes Google Drive
- **Ziel:** Ein von der Schule verwalteter Backblaze-B2-Bucket, Amazon-S3-Ordner oder eine NAS-Freigabe

Nutzen Sie die integrierten Filtereinstellungen von RcloneView, um persönliche Ordner, große Mediendateien oder Dokumenttypen außerhalb der Schulrichtlinien auszuschließen. Der Filter-Builder unterstützt den Ausschluss nach Dateierweiterung (z. B. `.mp4`, `.iso`) sowie Höchstalter-Grenzwerte, sodass Backup-Jobs auf Lehrplan- und Verwaltungsdokumente fokussiert bleiben statt auf private Downloads.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled nightly backup job for school cloud accounts in RcloneView" class="img-large img-center" />

Mit einer PLUS-Lizenz können diese Jobs so geplant werden, dass sie nachts außerhalb der Betriebszeiten laufen. RcloneView erstellt ohne manuelles Eingreifen einen vollständigen Prüfpfad im Job-Verlauf — nützlich, um nachzuweisen, dass Backup-Verfahren während des gesamten Schuljahres konsequent eingehalten wurden.

## Datenarchivierung und Kontomigrationen zum Schuljahresende

Am Ende jedes Schuljahres müssen die Google-Drive-Konten der Absolventen vor der Deaktivierung archiviert werden. RcloneView erledigt dies als **Kopierjob**:

1. Legen Sie den Google-Drive-Ordner des Schülers als Quelle fest
2. Legen Sie als Ziel einen Cold-Storage-Bucket (Backblaze B2 oder Amazon S3) unter einem nach dem Abschlussjahrgang benannten Ordner fest
3. Führen Sie den Job aus und überprüfen Sie das Ergebnis im Job-Verlauf, bevor Sie das Konto deaktivieren

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying graduating student data from Google Drive to archive storage in RcloneView" class="img-large img-center" />

Für neu ankommende Schüler kann die 1:N-Synchronisation von RcloneView Onboarding-Vorlagenordner von einer Master-Quelle gleichzeitig auf mehrere Zielkonten übertragen — eine erhebliche Zeitersparnis im Vergleich zum manuellen Kopieren jedes einzelnen Ordners.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing school backup and archive job history in RcloneView" class="img-large img-center" />

Der Job-Verlauf zeigt für jede Übertragung Startzeit, Dauer, Dateianzahl, Gesamtgröße und Endstatus an. Durch die Filterung nach Datumsbereich können IT-Mitarbeiter Aufzeichnungen für einen beliebigen Monat oder ein Semester abrufen — nützlich, wenn Administratoren Nachweise zur Einhaltung der Datenaufbewahrung benötigen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Google-Workspace- und OneDrive-Konten als Remotes über **Remote-Tab > Neuer Remote** per OAuth-Browser-Login hinzufügen.
3. Synchronisationsjobs mit Filtern erstellen, die auf schultypische Dateitypen und Ordnerstrukturen zugeschnitten sind.
4. Nächtliche Backups planen (PLUS) und den Job-Verlauf nutzen, um die Compliance über das gesamte Schuljahr hinweg zu verfolgen.

Mit RcloneView, das strukturierte, geplante Backups über Google Drive, OneDrive und Archivspeicher hinweg durchführt, können Schul-IT-Teams die Datenanforderungen zum Jahresende erfüllen, ohne Skripte schreiben oder anbieterspezifische Backup-Tools für jeden Cloud-Anbieter separat verwalten zu müssen.

---

**Weiterführende Anleitungen:**

- [Cloud-Speicher für Universitäten und Bildungseinrichtungen — Datenmanagement mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-for-universities-education-rcloneview)
- [Cloud-Speicher für eLearning-Plattformen — Kursdateien mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-elearning-platforms-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
