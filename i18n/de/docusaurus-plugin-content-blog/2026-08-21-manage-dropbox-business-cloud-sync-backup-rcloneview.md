---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "Dropbox for Business-Speicher verwalten — Synchronisieren und Sichern von Dateien mit RcloneView"
authors:
  - casey
description: "Verbinden Sie Dropbox for Business mit RcloneView für plattformübergreifendes Datei-Browsing, Cloud-zu-Cloud-Synchronisation und geplante Backups von Team-Konten."
keywords:
  - dropbox for business
  - dropbox business synchronisation
  - rcloneview dropbox business
  - dropbox business backup
  - dropbox_business rclone
  - enterprise dropbox speicher
  - business cloud speicher gui
  - dropbox team konto synchronisation
  - multi-cloud dateiverwaltung
  - dropbox business migration
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox for Business-Speicher verwalten — Synchronisieren und Sichern von Dateien mit RcloneView

> Verbinden Sie ein Dropbox for Business-Team-Konto mit RcloneView und durchsuchen, synchronisieren und sichern Sie freigegebene Team-Ordner zusammen mit jeder anderen Cloud, die Sie verwalten.

Dropbox for Business-Konten organisieren Dateien anders als ein persönliches Dropbox: Teamordner, von Administratoren verwaltete Bereiche und freigegebene Arbeitsbereiche liegen hinter einem Business-Login. RcloneView verbindet sich direkt mit diesen Team-Konten und gibt IT-Administratoren und Teamleitern ein einziges Fenster, um Geschäftsinhalte zu durchsuchen, zu übertragen und zu sichern, ohne zwischen der Dropbox-Webanwendung und einem separaten Desktop-Client wechseln zu müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichten eines Dropbox for Business-Remotes

Das Hinzufügen eines Dropbox for Business-Kontos in RcloneView beginnt genauso wie eine persönliche Dropbox-Verbindung: klicken Sie auf New Remote, wählen Sie Dropbox und schließen Sie die OAuth-Anmeldung im Browser ab. Der Unterschied liegt in einer einzigen zusätzlichen Einstellung — das Aktivieren von `dropbox_business = true` am Remote, wodurch die Verbindung angewiesen wird, sich gegen das Team-Konto statt gegen ein einzelnes Konto zu authentifizieren. Nach der Konfiguration erscheinen die Teamordner des Business-Kontos im Explorer-Panel wie jedes andere Remote.

Da RcloneView 90+ Anbieter aus einem einzigen Fenster heraus auf Windows, macOS und Linux mountet UND synchronisiert, kann ein Administrator, der sowohl einen Dropbox for Business-Mandanten als auch andere Abteilungs-Clouds verwaltet, alles in derselben Sitzung behalten, statt für jeden Anbieter zwischen separaten Anwendungen zu wechseln.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## Team-Ordner und freigegebene Bereiche durchsuchen

Nach der Verbindung zeigt das File Explorer-Panel die Ordnerstruktur von Dropbox for Business mit denselben Spalten für Name, Typ, Änderungsdatum und Größe an, die für jedes andere Remote verwendet werden. Teamordner, die sich über mehrere Abteilungen erstrecken, lassen sich über den einklappbaren Ordnerbaum leicht navigieren, und die Option Copy Full Path in der Breadcrumb-Pfadleiste gibt das Format `remote:pfad` aus, das für Skripte oder die Übergabe an das integrierte rclone Terminal benötigt wird.

Mehrfachauswahl mit Strg+Klick oder Umschalt+Klick macht es einfach, bestimmte Projektordner aus einem großen Team-Bereich herauszugreifen, statt mit dem gesamten Konto zu arbeiten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## Geschäftsdaten in eine zweite Cloud sichern

Sich für geschäftskritische Dateien auf einen einzigen Anbieter zu verlassen, ist riskant, daher spiegeln viele Teams ihre Dropbox for Business-Inhalte zu Amazon S3, Backblaze B2 oder einer anderen Cloud als Zweitkopie. Der 4-Schritte-Sync-Assistent von RcloneView erledigt dies direkt: Wählen Sie das Dropbox for Business-Remote als Quelle, wählen Sie ein Ziel-Remote und wählen Sie die einseitige Synchronisation, damit das Backup-Ziel stets die Quelle widerspiegelt, ohne stromaufwärts etwas zu überschreiben. Filtereinstellungen erlauben es, große Mediendateien auszuschließen oder das Backup auf Ordner unterhalb eines bestimmten Alters zu beschränken, sodass sich der Auftrag auf das konzentriert, was tatsächlich geschützt werden muss.

Ein Dry Run vor der ersten Synchronisation zeigt genau, welche Dateien kopiert werden, was nützlich ist, um den Umfang zu prüfen, bevor die Daten eines gesamten Team-Kontos verschoben werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## Wiederkehrende Backups automatisieren

PLUS-Lizenznutzer können dem Dropbox for Business-Backup-Auftrag einen Zeitplan im Crontab-Stil zuweisen, sodass er nachts oder wöchentlich ohne manuellen Eingriff läuft. Job History protokolliert dann für jeden geplanten Lauf Ausführungstyp, Dauer, Status und übertragene Gesamtgröße und gibt Administratoren ein Prüfprotokoll, das sie überprüfen können, ohne im eigenen Aktivitätsprotokoll von Dropbox zu graben.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie ein neues Dropbox-Remote hinzu und aktivieren Sie während der Konfiguration die Einstellung `dropbox_business`.
3. Durchsuchen Sie Teamordner im Explorer-Panel und bestätigen Sie den Zugriff auf die benötigten freigegebenen Bereiche.
4. Erstellen Sie einen Sync-Auftrag, um Geschäftsdaten in eine zweite Cloud zu spiegeln, und planen Sie ihn, falls Sie die PLUS-Lizenz nutzen.

Ein korrekt konfiguriertes Dropbox for Business-Remote macht RcloneView zu einem praktischen Sicherheitsnetz für Team-Daten, die allzu oft nur an einem einzigen Ort liegen.

---

**Weitere Anleitungen:**

- [Dropbox-Speicher mit RcloneView verwalten — Dateien synchronisieren und sichern](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dropbox Business zu Google Workspace migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Dropbox zu AWS S3 sichern — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
