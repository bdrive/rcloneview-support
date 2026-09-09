---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "Box for Business verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verbinden Sie Box for Business mit RcloneView, um Unternehmens-Clouddateien neben 90+ weiteren Anbietern zu durchsuchen, zu synchronisieren, einzubinden und zu sichern."
keywords:
  - Box for Business
  - Box Enterprise-Speicher
  - RcloneView
  - Enterprise-Cloud-Synchronisation
  - Cloud-Speicher-Verwaltung
  - Cloud-Backup-Software
  - box_sub_type enterprise
  - Multi-Cloud-Dateiverwaltung
  - Business-Cloud-Speicher
  - Ordnervergleich-Tool
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business verwalten — Dateien mit RcloneView synchronisieren und sichern

> Behandeln Sie das Box for Business-Konto Ihres Unternehmens wie jedes andere Laufwerk — durchsuchen, synchronisieren, einbinden und sichern Sie es aus einer einzigen Desktop-App.

Box for Business-Konten enthalten oft jahrelang gewachsene, abteilungsübergreifend geteilte Dateien, verteilt auf zahlreiche verschachtelte Team-Ordner, und IT-Mitarbeiter benötigen eine zuverlässige Möglichkeit, diese Inhalte zu prüfen, zu verschieben und zu schützen, ohne dauerhaft in einem Browser-Tab zu arbeiten. RcloneView verbindet sich über denselben OAuth-Login wie bei persönlichen Box-Konten mit Box for Business und wendet anschließend das unternehmensspezifische Konfigurations-Flag an, damit die App die vollständige Ordnerstruktur der Organisation sehen kann. Nach der Verbindung verhält sich das Konto in den Explorer-, Synchronisierungs- und Mount-Werkzeugen von RcloneView wie jeder andere Remote, wobei Synchronisation und Ordnervergleich bereits mit der FREE-Lizenz verfügbar sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihren Box for Business Remote einrichten

Erstellen Sie in RcloneView einen neuen Remote und wählen Sie Box — die App öffnet Ihren Browser für den Standard-OAuth-Login, sodass keine API-Schlüssel oder manuelle Token-Eingabe erforderlich sind. Melden Sie sich mit Ihren Unternehmens-Box-Zugangsdaten an, um die Verbindung zu autorisieren.

Box for Business-Konten benötigen zusätzlich zu einem persönlichen Box-Login eine weitere Einstellung: `box_sub_type = enterprise`, die in die erweiterte Konfiguration des Remotes eingetragen wird. Dies weist rclone an, die gemeinsam genutzte Teamstruktur der Organisation statt eines einzelnen persönlichen Kontos zu betrachten, wodurch unternehmensweite Ordner im Explorer-Panel von RcloneView sichtbar werden.

<img src="/support/images/en/blog/new-remote.png" alt="Erstellen eines neuen Box for Business Remotes in RcloneView" class="img-large img-center" />

Wenn Sie mehrere Box for Business-Konten über verschiedene Abteilungen hinweg verwalten, hält der Remote Manager jedes Konto getrennt, sodass Sie Zugangsdaten oder das Enterprise-Flag unabhängig voneinander bearbeiten können.

## Enterprise-Ordner vergleichen und synchronisieren

Bevor Sie eine Abteilung von einem alten Dateiserver migrieren oder doppelte Team-Ordner konsolidieren, nutzen Sie Folder Compare, um genau zu sehen, was sich zwischen Ihrem Box for Business-Ordner und einem Zielort unterscheidet. Die Vergleichsansicht filtert Ergebnisse nach „nur links", „nur rechts", „identisch" und „unterschiedlich", sodass Sie nur fehlende Dateien kopieren, statt alles erneut hochzuladen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Vergleichen und Synchronisieren eines Box for Business-Ordners mit einem anderen Cloud-Remote" class="img-large img-center" />

Für den laufenden Schutz hält ein einseitiger Synchronisationsjob eine Sekundärkopie wichtiger Box for Business-Ordner aktuell, ohne die Quelle zu berühren, und ein Dry Run zeigt genau, welche Dateien kopiert oder gelöscht werden, bevor tatsächlich etwas verschoben wird.

## Backups planen und Jobs überwachen

Mit dem Job Manager können Sie einen Sync-, Kopier- oder 1:N-Job konfigurieren, der denselben Box for Business-Inhalt gleichzeitig an zwei Ziele spiegelt — zum Beispiel an ein lokales NAS und einen S3-kompatiblen Bucket, sodass ein einziger Sync-Job sowohl die Vor-Ort- als auch die externe Backup-Anforderung erfüllt. Job History zeichnet dann Startzeit, Dauer, Status und Dateianzahl für jeden Lauf auf, was hilfreich ist, wenn ein Administrator bestätigen muss, dass ein nächtliches Backup tatsächlich abgeschlossen wurde.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines wiederkehrenden Box for Business Backup-Jobs in RcloneView" class="img-large img-center" />

PLUS-Lizenznutzer können dies mit einer Crontab-artigen Zeitplanung weiter automatisieren, sodass Backups über Nacht laufen, ohne dass sie jemand manuell auslösen muss.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie einen neuen Box-Remote hinzu und schließen Sie den OAuth-Login mit Ihrem Unternehmenskonto ab.
3. Bearbeiten Sie die erweiterten Einstellungen des Remotes und setzen Sie `box_sub_type = enterprise`, um Unternehmensordner freizuschalten.
4. Konfigurieren Sie einen Sync-Job oder Mount, um mit der Verwaltung Ihrer Box for Business-Inhalte zu beginnen.

Sobald Ihr Enterprise-Box-Konto neben jedem anderen Remote in einer einzigen Oberfläche steht, hören alltägliche Dateiverwaltung und Disaster-Recovery-Backups auf, zwei getrennte Arbeitsabläufe zu sein.

---

**Weitere Anleitungen:**

- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migration von Box zu SharePoint oder OneDrive — Enterprise-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Box-Speicher mit RcloneView als Netzwerklaufwerk einbinden für nahtlosen Team-Zugriff](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
