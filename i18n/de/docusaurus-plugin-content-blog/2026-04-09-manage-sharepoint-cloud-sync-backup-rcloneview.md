---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "SharePoint-Dateien und Cloud-Synchronisation mit RcloneView verwalten"
authors:
  - tayson
description: "Verwalten Sie SharePoint Online-Dateien mit RcloneView. Synchronisieren, sichern und übertragen Sie Daten zwischen SharePoint-Dokumentbibliotheken und anderen Cloud-Anbietern über eine visuelle Benutzeroberfläche."
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - RcloneView
  - sharepoint
  - cloud-storage
  - cloud-sync
  - guide
  - backup
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SharePoint-Dateien und Cloud-Synchronisation mit RcloneView verwalten

> SharePoint Online treibt das Dokumentenmanagement in Microsoft 365 an, aber die Synchronisation der Inhalte mit externen Clouds oder einem NAS erfordert ein speziell dafür entwickeltes Tool — **RcloneView** schließt diese Lücke.

SharePoint Online ist das Rückgrat des Dokumentenmanagements für Millionen von Organisationen, die Microsoft 365 nutzen. Jede SharePoint-Site enthält Dokumentbibliotheken, in denen Team-Dateien, Projektressourcen und Unternehmensunterlagen gespeichert werden. Während der native OneDrive-Sync-Client SharePoint-Bibliotheken mit lokalen Rechnern synchronisieren kann, bietet er keinen Mechanismus zur Replikation von Daten nach AWS S3, Google Drive oder externem Speicher. RcloneView verbindet sich über die Microsoft Graph API mit SharePoint Online und stellt Dokumentbibliotheken als navigierbare Remotes dar — durchsuchen, synchronisieren, kopieren, verschieben und Backups zwischen SharePoint und jedem anderen Anbieter planen.

Ob Sie eine compliance-relevante Bibliothek in unveränderlichem S3-Speicher sichern oder die SharePoint-Site eines ausscheidenden Teams zu Google Workspace migrieren müssen — RcloneView erledigt dies über eine visuelle Benutzeroberfläche.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SharePoint in RcloneView verbinden

SharePoint-Remotes werden in RcloneView über den OneDrive-Remote-Typ konfiguriert. Wählen Sie während der OAuth-Autorisierung **SharePoint site** anstelle von OneDrive Personal oder Business. RcloneView fragt die Graph API nach verfügbaren Sites ab und lässt Sie die Ziel-Site und die Dokumentbibliothek auswählen.

Jede Dokumentbibliothek erscheint als separater navigierbarer Pfad. Wenn Ihre Organisation Dutzende von SharePoint-Sites hat — Marketing, Engineering, Recht, HR — können Sie jede als separates Remote hinzufügen oder innerhalb einer einzigen Remote-Konfiguration zwischen Bibliotheken wechseln.

Das API-Throttling von SharePoint folgt denselben Mustern wie bei OneDrive for Business — 429-Antworten mit Retry-After-Headern. RcloneView berücksichtigt diese automatisch und nutzt exponentielles Backoff, um sicherzustellen, dass große Übertragungen ohne manuelles Eingreifen abgeschlossen werden.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## Navigation in SharePoint-Dokumentbibliotheken

SharePoint-Dokumentbibliotheken können verschachtelte Ordnerstrukturen, Metadatenspalten und versionierte Dateien enthalten. Der Explorer von RcloneView zeigt den Ordnerbaum und die Dateiliste im gewohnten Zweispalten-Layout an. Sie können tiefe Ordnerhierarchien durchsuchen, Dateien über mehrere Ordner hinweg auswählen und Massenoperationen durchführen — kopieren, verschieben, löschen oder herunterladen.

SharePoint erzwingt strengere Dateinamensbeschränkungen als viele andere Anbieter. Zeichen wie `#`, `%` und `*` sind nicht zulässig, und Pfadlängen sind auf 400 Zeichen begrenzt. Beim Synchronisieren von einem weniger restriktiven Anbieter (wie Google Drive oder einem lokalen Dateisystem) zu SharePoint kodiert oder ersetzt RcloneView automatisch eingeschränkte Zeichen, um Übertragungsfehler zu vermeiden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## SharePoint mit anderen Cloud-Anbietern synchronisieren

Organisationen müssen SharePoint-Daten häufig auf externe Systeme replizieren — eine sekundäre Cloud für die Notfallwiederherstellung, ein NAS für lokalen Zugriff oder eine andere Cloud-Suite während einer Plattformmigration. RcloneView macht dies unkompliziert.

Öffnen Sie Ihre SharePoint-Bibliothek in einem Bereich und das Ziel (AWS S3, Google Drive, Backblaze B2, ein lokaler Pfad) im anderen. RcloneView vergleicht Dateilisten anhand von Größe und Änderungszeit und überträgt nur geänderte Dateien. Bei anfänglichen Migrationen mit Tausenden von Dateien halten mehrfädige Übertragungen und konfigurierbare Chunk-Größen den Prozess effizient.

SharePoint speichert Datei-Hashes als QuickXorHash, denselben Algorithmus, der auch von OneDrive for Business verwendet wird. RcloneView unterstützt QuickXorHash nativ und ermöglicht so eine genaue Delta-Erkennung, ohne Dateiinhalte zum Vergleich herunterladen zu müssen.

## Automatisierte SharePoint-Backups planen

Die integrierten Aufbewahrungsrichtlinien und der Papierkorb von SharePoint bieten einen gewissen Schutz, arbeiten jedoch innerhalb des Microsoft-Ökosystems. Ein Ransomware-Angriff, der Ihren Microsoft 365-Mandanten kompromittiert, kann SharePoint-Daten zusammen mit allem anderen betreffen. Ein unabhängiges Backup bei einem separaten Anbieter ist der stärkste Schutz.

Der Scheduler von RcloneView automatisiert dies. Konfigurieren Sie einen nächtlichen Synchronisationsjob von einer SharePoint-Dokumentbibliothek zu AWS S3 mit aktivierter Versionierung, und RcloneView übernimmt den Rest. Das Job-Verlaufsfenster protokolliert jeden Lauf mit Übertragungsstatistiken, sodass Sie leicht überprüfen können, ob Backups erfolgreich abgeschlossen werden.

Für compliance-orientierte Organisationen erzeugt die Kombination von geplanten SharePoint-Backups mit S3 Object Lock oder der Dateisperrfunktion von Backblaze B2 ein unveränderliches Archiv, das regulatorische Anforderungen an die Datenaufbewahrung erfüllt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## Ordner vergleichen und Migrationen überprüfen

Nach der Synchronisation oder Migration einer SharePoint-Bibliothek können Sie mit der Vergleichsfunktion von RcloneView die Vollständigkeit überprüfen. Wählen Sie die SharePoint-Quelle und das Backup-Ziel aus, und RcloneView hebt Dateien hervor, die nur auf einer Seite existieren, Dateien, die sich unterscheiden, und Dateien, die identisch sind. Diese visuelle Überprüfung eliminiert Unsicherheiten und stellt die Datenintegrität sicher, bevor das Original stillgelegt wird.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## SharePoint als lokales Laufwerk einbinden

RcloneView kann eine SharePoint-Dokumentbibliothek als lokalen Laufwerksbuchstaben (Windows) oder Mount-Punkt (macOS/Linux) einbinden. Dies ermöglicht den Zugriff auf SharePoint-Dateien von jeder Desktop-Anwendung aus — CAD-Software, Bildbearbeitungsprogramme oder Analysetools — ohne den Overhead des OneDrive-Sync-Clients.

Aktivieren Sie das VFS-Caching, um kürzlich aufgerufene Dateien lokal zu speichern und so einen schnellen wiederholten Zugriff zu ermöglichen. Dies ist besonders nützlich für Teams, die mit SharePoint-gehosteten Dateien in Anwendungen arbeiten müssen, die Cloud-Speicher nicht nativ unterstützen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## Übertragungen überwachen

Große SharePoint-Migrationen können Hunderttausende von Dateien umfassen. Das Echtzeit-Überwachungs-Dashboard von RcloneView zeigt Übertragungsgeschwindigkeit, Fortschritt pro Datei und Gesamtfertigstellung an. Sie können Übertragungen einzeln pausieren, fortsetzen oder abbrechen. Bandbreitenbegrenzungen verhindern, dass SharePoint-Übertragungen während der Geschäftszeiten Ihre gesamte Netzwerkverbindung beanspruchen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisieren Sie Ihr Microsoft 365-Konto über OAuth und wählen Sie die SharePoint-Site und die Dokumentbibliothek aus.
3. Durchsuchen Sie Ihre SharePoint-Bibliothek im Zweispalten-Explorer und richten Sie einen Synchronisations- oder Kopierjob zu einem anderen Anbieter ein.
4. Planen Sie ein tägliches Backup, um eine unabhängige Kopie auf S3, B2 oder einer anderen Cloud zu pflegen.

SharePoint übernimmt das Dokumentenmanagement innerhalb von Microsoft 365, aber RcloneView stellt sicher, dass Ihre SharePoint-Daten gesichert, portabel und über jede von Ihnen genutzte Cloud zugänglich sind.

---

**Verwandte Anleitungen:**

- [Remote über browserbasierte Anmeldung (OAuth) hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
