---
slug: manage-google-drive-cloud-sync-backup-rcloneview
title: "Google Drive-Dateien und Cloud-Synchronisation mit RcloneView verwalten"
authors:
  - tayson
description: "Verwalten Sie Google Drive-Dateien mit RcloneView. Synchronisieren, sichern und übertragen Sie Daten zwischen Google Drive, Shared Drives und anderen Cloud-Anbietern über eine visuelle GUI."
keywords:
  - rcloneview
  - google drive sync rcloneview
  - google drive backup
  - google drive file manager
  - google drive cloud sync tool
  - google drive to s3
  - google drive rclone gui
  - google shared drives backup
  - google drive multi-cloud
  - google drive automated backup
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - guide
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive-Dateien und Cloud-Synchronisation mit RcloneView verwalten

> Google Drive ist das Rückgrat von Google Workspace, aber die Verwaltung von Backups und cloudübergreifenden Übertragungen erfordert mehr als den nativen Client — **RcloneView** liefert diese Kontrolle über eine visuelle Oberfläche.

Google Drive bedient über zwei Milliarden Nutzer mit 15 GB kostenlosem Speicher, der sich Gmail, Drive und Fotos teilen. Workspace-Pläne skalieren bis zu unbegrenztem Speicher in Enterprise-Tarifen. Der native Google Drive-Desktop-Client synchronisiert Dateien auf Ihren lokalen Rechner, kann Daten aber nicht auf AWS S3, OneDrive oder ein NAS replizieren. RcloneView verbindet sich über die Drive API v3 mit Google Drive und bietet eine vollständige Dateiverwaltungsoberfläche — durchsuchen, synchronisieren, kopieren, verschieben und Backups zwischen Google Drive und jedem anderen Speicheranbieter planen.

Egal ob Sie Student sind und Kursmaterialien schützen, Fotograf, der Tausende RAW-Dateien verwaltet, oder Workspace-Administrator, der Shared Drives mit einem unabhängigen Backup-Ziel synchronisiert — RcloneView bietet Ihnen Möglichkeiten, die der native Client nicht hat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive in RcloneView verbinden

Das Hinzufügen von Google Drive erfolgt über den Standard-OAuth-2.0-Ablauf. Öffnen Sie den Remote Manager, wählen Sie **Google Drive** und klicken Sie auf Autorisieren. Ein Browserfenster öffnet sich, in dem Sie sich bei Ihrem Google-Konto anmelden und den Zugriff gewähren. Das Token wird sicher in Ihrer lokalen rclone-Konfiguration gespeichert.

Während der Einrichtung wählen Sie den Umfang des Zugriffs — vollen Drive-Zugriff, schreibgeschützt oder dateibasierten Zugriff, der auf von RcloneView erstellte Dateien beschränkt ist. Für die meisten Backup- und Synchronisations-Workflows ist der volle Zugriff die richtige Wahl. Sie können in diesem Schritt auch den Zugriff auf Shared Drives (früher Team Drives) konfigurieren, indem Sie ein bestimmtes Shared Drive per ID auswählen oder RcloneView alle verfügbaren Drives auflisten lassen.

Google Drive erzwingt API-Kontingente — standardmäßig 10.000 Anfragen pro 100 Sekunden pro Projekt. RcloneView behandelt 403-userRateLimitExceeded-Antworten automatisch mit exponentiellem Backoff. Für großangelegte Vorgänge können Sie Ihr eigenes Google Cloud-Projekt registrieren und Ihre eigene Client-ID angeben, um die Kontingentgrenzen zu erhöhen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Google Drive remote in RcloneView Remote Manager" class="img-large img-center" />

## My Drive vs. Shared Drives

Google Drive unterscheidet zwischen My Drive (persönlicher Speicher, der an ein Nutzerkonto gebunden ist) und Shared Drives (organisationseigener Speicher, bei dem Dateien dem Team gehören, nicht einer Einzelperson). Diese Unterscheidung ist für Synchronisation und Backup wichtig, da Shared Drives andere Eigentumsregeln, strengere Regeln für Dateinamen und separate Speicherkontingente haben.

RcloneView handhabt beides transparent. Sie können My Drive und ein Shared Drive nebeneinander im Zwei-Fenster-Explorer öffnen, Ordnerinhalte vergleichen und zwischen ihnen synchronisieren. Beim Synchronisieren von My Drive zu einem Shared Drive passt sich RcloneView automatisch an die Einschränkungen von Shared Drives an — Dateien mit nicht unterstützten Zeichen werden umbenannt, und Verknüpfungsdateien werden je nach Ihrer Einstellung aufgelöst oder übersprungen.

## Google Drive mit anderen Cloud-Anbietern synchronisieren

Der Zwei-Fenster-Explorer von RcloneView platziert Google Drive neben jedem anderen Remote. Synchronisieren Sie Ihr gesamtes Drive mit Backblaze B2 für kostengünstiges Backup, kopieren Sie einen bestimmten Projektordner zur Archivierung auf AWS S3 oder verschieben Sie alte Dateien zur kosteneffizienten Kaltlagerung nach Wasabi.

Google Drive verwendet MD5-Prüfsummen zur Überprüfung der Dateiintegrität. RcloneView unterstützt nativ den MD5-Vergleich während der Synchronisation, sodass nur tatsächlich geänderte Dateien übertragen werden. Das spart Zeit und API-Kontingent. Für Google Docs, Sheets und Slides — die als cloud-native Formate ohne feste Dateigröße gespeichert werden — exportiert RcloneView diese beim Herunterladen und Synchronisieren in Standardformate (docx, xlsx, pptx).

Bei großen Übertragungen können Sie mehrfädige (multi-threaded) Downloads konfigurieren und die Blockgrößen anpassen. Google Drive unterstützt fortsetzbare Uploads für Dateien über 5 MB, und RcloneView nutzt dies, um sich von Unterbrechungen zu erholen, ohne die gesamte Datei neu starten zu müssen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to another cloud provider in RcloneView" class="img-large img-center" />

## Automatisierte Google Drive-Backups planen

Eine einzelne Kopie Ihrer Daten auf Google Drive ist kein Backup. Versehentliches Löschen, Kontosperrungen und Ransomware können allesamt zu Datenverlust führen. Ein unabhängiges Backup bei einem separaten Anbieter bietet ein wichtiges Sicherheitsnetz.

Der Scheduler von RcloneView automatisiert diesen Prozess. Konfigurieren Sie einen nächtlichen Synchronisationsjob von Google Drive zu AWS S3 oder Backblaze B2, und RcloneView übernimmt Delta-Erkennung, Übertragung und Protokollierung. Das Job-Verlaufspanel zeichnet jeden Lauf mit Statistiken auf — übertragene Dateien, übersprungene Dateien, insgesamt verschobene Bytes und verstrichene Zeit.

Für Workspace-Administratoren stellen geplante Backups von Shared Drives sicher, dass Teamdaten unabhängig von Googles Infrastruktur repliziert werden. Kombinieren Sie geplante Backups mit Verschlüsselung (mithilfe eines Crypt-Remotes) für eine zusätzliche Schutzebene.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive backup in RcloneView" class="img-large img-center" />

## Ordner vergleichen und Daten überprüfen

Bevor Sie sich auf eine große Synchronisation festlegen, zeigt Ihnen die Vergleichsfunktion von RcloneView genau, was sich ändern wird. Wählen Sie zwei Ordner aus — einen auf Google Drive, einen auf einem anderen Remote — und RcloneView hebt Dateien hervor, die nur auf einer Seite existieren, Dateien, die sich in Größe oder Hash unterscheiden, und Dateien, die identisch sind.

Das ist besonders nach einer Migration wertvoll. Führen Sie einen Vergleich zwischen Ihrer Google Drive-Quelle und dem Backup-Ziel durch, um zu bestätigen, dass jede Datei unversehrt angekommen ist. Der visuelle Vergleich macht es einfach, Lücken zu erkennen und zu beheben, bevor das Original stillgelegt wird.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive files with another cloud in RcloneView" class="img-large img-center" />

## Google Drive als lokales Laufwerk einbinden

RcloneView kann Google Drive als lokalen Laufwerksbuchstaben unter Windows oder als Einbindungspunkt unter macOS und Linux einbinden (mounten). So können Sie direkt aus jeder Anwendung — Dateimanager, Videoeditoren oder Kommandozeilentools — auf Drive-Dateien zugreifen, ohne sie vorher herunterzuladen.

Aktivieren Sie das VFS-Caching für beste Leistung. Dadurch werden kürzlich aufgerufene Dateien lokal gespeichert, sodass nachfolgende Lesevorgänge sofort erfolgen. Cache-Größe und -Ablauf sind konfigurierbar. Das Einbinden ist besonders nützlich für Medien-Workflows, bei denen Sie Drive-Dateien durchsuchen oder in der Vorschau ansehen müssen, ohne eine vollständige Synchronisation durchzuführen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting Google Drive as a local drive in RcloneView" class="img-large img-center" />

## Übertragungen in Echtzeit überwachen

Bei großen Übertragungen bietet RcloneView ein Echtzeit-Überwachungs-Dashboard, das Übertragungsgeschwindigkeit, Fortschritt pro Datei und die gesamte Fertigstellungsrate anzeigt. Sie können einzelne Übertragungen pausieren, fortsetzen oder abbrechen, ohne den Rest der Warteschlange zu beeinträchtigen. Bandbreitendrosselung verhindert, dass Google Drive-Übertragungen Ihr Netzwerk auslasten — legen Sie während der Geschäftszeiten ein Limit fest und erlauben Sie über Nacht volle Geschwindigkeit.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Google Drive in RcloneView" class="img-large img-center" />

## Dateien durchsuchen und verwalten

Der Explorer von RcloneView bietet Möglichkeiten, die die Google Drive-Weboberfläche nicht hat — Massenoperationen über Zehntausende von Dateien, Drag-and-Drop zwischen beliebigen zwei Cloud-Anbietern und Ordnervergleich nebeneinander. Sie können Dateien direkt auf Google Drive über den Explorer umbenennen, verschieben, löschen und Ordner erstellen. Shared Drives, Verknüpfungen und verschachtelte Ordnerstrukturen sind alle im Explorer-Panel navigierbar.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from Google Drive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisieren Sie Ihr Google-Konto über OAuth im Remote Manager und wählen Sie Ihren Drive-Typ (My Drive oder Shared Drive).
3. Durchsuchen Sie Ihr Google Drive im Zwei-Fenster-Explorer und richten Sie einen Synchronisations- oder Kopierjob zu einem anderen Anbieter ein.
4. Planen Sie ein tägliches Backup, um eine redundante Kopie auf S3, B2 oder einer anderen Cloud zu behalten.

Google Drive übernimmt Zusammenarbeit und Dokumentbearbeitung, aber RcloneView stellt sicher, dass Ihre Daten gesichert, portabel und über jede von Ihnen genutzte Cloud zugänglich sind.

---

**Verwandte Anleitungen:**

- [Google Drive hinzufügen](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
