---
slug: manage-onedrive-cloud-sync-backup-rcloneview
title: "OneDrive-Dateien und Cloud-Synchronisation mit RcloneView verwalten"
authors:
  - tayson
description: "Verwalten Sie OneDrive-Dateien mit RcloneView. Synchronisieren, sichern und übertragen Sie Daten zwischen OneDrive Personal oder Business und anderen Cloud-Anbietern mit einer visuellen GUI."
keywords:
  - rcloneview
  - onedrive sync rcloneview
  - onedrive backup
  - onedrive file manager
  - onedrive cloud sync tool
  - onedrive to google drive
  - onedrive rclone gui
  - onedrive business backup
  - onedrive multi-cloud
  - onedrive automated backup
tags:
  - onedrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive-Dateien und Cloud-Synchronisation mit RcloneView verwalten

> OneDrive lässt sich eng in Microsoft 365 integrieren, doch für die Verwaltung von Backups und cloudübergreifender Synchronisation braucht es ein dediziertes Tool — **RcloneView** macht dies mühelos möglich.

Microsoft OneDrive bedient Hunderte Millionen Nutzer in Personal- und Business-Tarifen und bietet 5 GB kostenlos sowie bis zu unbegrenzten Speicherplatz in Unternehmenstarifen. Während der native OneDrive-Client die lokale Synchronisation mit der Cloud gut beherrscht, bietet er keinen integrierten Mechanismus zur Replikation von Daten auf AWS S3, Google Drive oder ein NAS. RcloneView verbindet sich über die Microsoft Graph API mit OneDrive und bietet eine vollwertige Dateiverwaltungsoberfläche — durchsuchen, synchronisieren, kopieren, verschieben und Backups zeitgesteuert planen, zwischen OneDrive und jedem anderen Speicheranbieter.

Ob Sie als Privatperson persönliche Fotos sichern oder als IT-Administrator OneDrive for Business im gesamten Unternehmen verwalten — RcloneView gibt Ihnen die Kontrolle über Ihre Daten, die der native Client schlicht nicht bietet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive in RcloneView verbinden

Das Hinzufügen von OneDrive zu RcloneView erfolgt über den standardmäßigen OAuth-2.0-Ablauf. Öffnen Sie den Remote Manager, wählen Sie **Microsoft OneDrive** und klicken Sie auf Autorisieren. Ein Browserfenster öffnet sich, in dem Sie sich bei Ihrem Microsoft-Konto anmelden und den Zugriff gewähren. Das resultierende Token wird sicher in Ihrer lokalen rclone-Konfiguration gespeichert.

Während der Einrichtung erkennt RcloneView, ob Sie OneDrive Personal, OneDrive for Business oder SharePoint-Dokumentbibliotheken verwenden, und konfiguriert die Verbindung entsprechend. Für Business-Konten können Sie wählen, ob Sie sich mit Ihrem persönlichen Laufwerk oder der Dokumentbibliothek einer SharePoint-Site verbinden möchten. Diese Flexibilität bedeutet, dass eine einzige RcloneView-Instanz mehrere OneDrive-Mandanten parallel verwalten kann.

Die OneDrive-API erzwingt eine Drosselung — typischerweise 10.000 API-Aufrufe pro 10-Minuten-Fenster bei Business-Konten, mit niedrigeren Limits bei Personal-Tarifen. RcloneView behandelt 429-Antworten (Too Many Requests) automatisch mit exponentiellem Backoff, sodass große Übertragungen ohne manuelles Eingreifen fortgesetzt werden.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a OneDrive remote in RcloneView Remote Manager" class="img-large img-center" />

## Unterschiede zwischen OneDrive Personal und Business

OneDrive Personal und OneDrive for Business unterscheiden sich in wichtigen Punkten, die das Synchronisationsverhalten beeinflussen. Personal-Konten verwenden einen flachen Namespace und haben eine maximale Dateigröße von 250 GB. Business-Konten unterstützen verschachtelte Site-Strukturen, SharePoint-Integration und strengere Einschränkungen bei Dateinamen (bestimmte Zeichen wie `#` und `%` sind nicht erlaubt).

RcloneView handhabt diese Unterschiede transparent. Beim Synchronisieren von einem Anbieter, der Sonderzeichen zulässt (wie Google Drive), zu OneDrive for Business codiert oder ersetzt RcloneView automatisch eingeschränkte Zeichen, um Übertragungsfehler zu vermeiden. Migrieren Sie Daten zwischen Personal- und Business-Konten, gilt dieselbe Logik — eine manuelle Bereinigung der Dateinamen ist nicht erforderlich.

## OneDrive mit anderen Cloud-Anbietern synchronisieren

Der Zwei-Fenster-Explorer von RcloneView platziert OneDrive neben jedem anderen Remote. Sie können Ihr gesamtes OneDrive mit Google Drive synchronisieren, einen bestimmten Projektordner nach AWS S3 kopieren oder archivierte Dateien für eine kosteneffiziente Langzeitspeicherung zu Backblaze B2 verschieben.

OneDrive verwendet QuickXorHash zur Überprüfung der Dateiintegrität — eine proprietäre, ausschließlich von Microsoft genutzte Hash-Funktion. RcloneView unterstützt QuickXorHash nativ, sodass Dateivergleiche während der Synchronisation präzise und effizient sind. Unveränderte Dateien werden automatisch übersprungen, was sowohl die Übertragungszeit als auch die API-Nutzung reduziert.

Bei großen OneDrive-for-Business-Bereitstellungen können Sie die Synchronisation auf bestimmte Ordner oder SharePoint-Dokumentbibliotheken beschränken, anstatt das gesamte Laufwerk zu synchronisieren. Dieser gezielte Ansatz minimiert API-Aufrufe und Übertragungszeit und stellt gleichzeitig sicher, dass kritische Daten gesichert werden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing OneDrive files to another cloud provider in RcloneView" class="img-large img-center" />

## Automatisierte OneDrive-Backups zeitsteuern

Sich ausschließlich auf OneDrive für kritische Dateien zu verlassen, birgt Risiken — versehentliche Löschungen werden auf alle Geräte übertragen, und der OneDrive-Versionsverlauf ist bei Personal-Tarifen auf 30 Tage begrenzt (Business-Tarife bieten jedoch eine konfigurierbare Aufbewahrung). Ein unabhängiges Backup bei einem separaten Anbieter bietet ein entscheidendes Sicherheitsnetz.

Der Zeitplaner von RcloneView automatisiert diesen Prozess. Konfigurieren Sie einen täglichen Synchronisationsjob von OneDrive zu Backblaze B2 oder AWS S3, und RcloneView übernimmt Delta-Erkennung, Übertragung und Protokollierung. Das Panel für den Job-Verlauf erfasst jeden Durchlauf mit Statistiken: übertragene Dateien, übersprungene Dateien, insgesamt verschobene Bytes und verstrichene Zeit.

Für Organisationen mit Compliance-Anforderungen sorgt die Kombination geplanter Backups mit unveränderlichen Speicherzielen (wie S3 Object Lock) dafür, dass das Backup selbst dann intakt und manipulationssicher bleibt, wenn OneDrive-Daten kompromittiert werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated OneDrive backup in RcloneView" class="img-large img-center" />

## Ordner vergleichen und Daten verifizieren

Bevor Sie sich auf eine umfangreiche Synchronisation festlegen, zeigt Ihnen die Vergleichsfunktion von RcloneView genau, was sich ändern wird. Wählen Sie zwei Ordner — einen auf OneDrive, einen auf einem anderen Remote — und RcloneView hebt Dateien hervor, die nur auf einer Seite vorhanden sind, Dateien, die sich in Größe oder Hash unterscheiden, und Dateien, die identisch sind.

Dies ist besonders wertvoll nach einer Migration. Führen Sie einen Vergleichsvorgang zwischen Ihrer OneDrive-Quelle und dem Backup-Ziel durch, um zu überprüfen, dass jede Datei unversehrt angekommen ist. Der visuelle Vergleich macht es einfach, Lücken zu erkennen und zu beheben, bevor die ursprünglichen Daten außer Betrieb genommen werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive files with another cloud in RcloneView explorer" class="img-large img-center" />

## OneDrive als lokales Laufwerk einbinden

RcloneView kann OneDrive unter Windows als lokalen Laufwerksbuchstaben oder unter macOS und Linux als Einhängepunkt einbinden(mount). So greifen Sie direkt aus jeder Anwendung — Dateimanager, Medienplayer oder Kommandozeilen-Tools — auf OneDrive-Dateien zu, ohne sie zuvor herunterzuladen.

Für beste Leistung aktivieren Sie das VFS-Caching. Dabei werden kürzlich aufgerufene Dateien lokal gespeichert, sodass nachfolgende Lesevorgänge sofort erfolgen. Cachegröße und Ablaufzeit sind konfigurierbar, sodass Sie zwischen Speicherplatznutzung und Zugriffsgeschwindigkeit abwägen können. Das Einbinden(mount) ist besonders nützlich für Arbeitsabläufe, bei denen Sie OneDrive-Dateien durchsuchen oder in der Vorschau ansehen möchten, ohne eine vollständige Synchronisation durchzuführen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting OneDrive as a local drive in RcloneView" class="img-large img-center" />

## Übertragungen in Echtzeit überwachen

Bei umfangreichen Übertragungen bietet RcloneView ein Echtzeit-Überwachungs-Dashboard, das Übertragungsgeschwindigkeit, Fortschritt pro Datei und den gesamten Abschlussprozentsatz anzeigt. Sie können einzelne Übertragungen pausieren, fortsetzen oder abbrechen, ohne den Rest der Warteschlange zu beeinträchtigen. Eine Bandbreitendrosselung steht zur Verfügung, um zu verhindern, dass OneDrive-Übertragungen Ihr Netzwerk auslasten — legen Sie während der Geschäftszeiten ein Limit fest und erlauben Sie über Nacht die volle Geschwindigkeit.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for OneDrive in RcloneView" class="img-large img-center" />

## Dateien durchsuchen und verwalten

Der Explorer von RcloneView bietet Funktionen, die die OneDrive-Weboberfläche nicht besitzt — Massenoperationen über Zehntausende von Dateien hinweg, Drag-and-Drop zwischen beliebigen zwei Cloud-Anbietern und ein Vergleich nebeneinander. Sie können Dateien direkt auf OneDrive über den Explorer umbenennen, verschieben, löschen und Ordner erstellen. Für OneDrive-for-Business-Nutzer mit Zugriff auf mehrere SharePoint-Sites erscheint jede Site als navigierbarer Baum im Explorer-Panel.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from OneDrive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisieren Sie Ihr Microsoft-Konto über OAuth im Remote Manager und wählen Sie Ihren OneDrive-Typ (Personal, Business oder SharePoint).
3. Durchsuchen Sie Ihr OneDrive im Zwei-Fenster-Explorer und richten Sie einen Synchronisations- oder Kopierjob zu einem anderen Anbieter ein.
4. Planen Sie ein tägliches Backup, um eine redundante Kopie auf S3, B2 oder einer anderen Cloud vorzuhalten.

OneDrive übernimmt die Zusammenarbeit in Microsoft 365, aber RcloneView stellt sicher, dass Ihre Daten gesichert, portabel und über jede von Ihnen genutzte Cloud hinweg zugänglich sind.

---

**Weiterführende Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Remote über browserbasierte Anmeldung hinzufügen (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
