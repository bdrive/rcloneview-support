---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "Enterprise File Fabric-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - morgan
description: "Verbinden, synchronisieren und sichern Sie Enterprise File Fabric-Speicher mit RcloneView — der plattformübergreifenden Multi-Cloud-GUI auf Basis von rclone für Windows, macOS und Linux."
keywords:
  - Enterprise File Fabric RcloneView
  - Enterprise File Fabric synchronisieren
  - Enterprise File Fabric Cloud-Synchronisation
  - Enterprise File Fabric Backup
  - Enterprise File Fabric Dateien verwalten
  - Cloud-Speicherverwaltung Unternehmen
  - RcloneView Unternehmensspeicher
  - Enterprise File Fabric GUI-Client
tags:
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Enterprise File Fabric-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> RcloneView verbindet sich direkt mit Enterprise File Fabric und ermöglicht es Ihnen, den verwalteten Dateispeicher Ihrer Organisation zu durchsuchen, zu synchronisieren und zu sichern, ohne einen einzigen CLI-Befehl zu schreiben.

Enterprise File Fabric ist eine Cloud-Content-Services-Plattform, die von Organisationen genutzt wird, die unterschiedliche Speicher-Backends unter einer einheitlichen Governance-Ebene konsolidieren müssen. Egal ob Ihr Team dort Projektdateien, Compliance-Unterlagen oder gemeinsam genutzte digitale Assets speichert — um diese Inhalte zuverlässig synchronisiert und gesichert zu halten, benötigen Sie ein verlässliches, Cloud-übergreifendes Tool. RcloneView — ein auf Flutter basierender GUI-Client auf Basis von rclone — verwaltet Enterprise File Fabric zusammen mit über 90 weiteren Cloud-Anbietern von einer einheitlichen Oberfläche unter Windows, macOS und Linux aus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Enterprise File Fabric in RcloneView verbinden

Enterprise File Fabric als Remote hinzuzufügen dauert dank des integrierten Assistenten für neue Remotes in RcloneView nur wenige Minuten. Öffnen Sie den Tab **Remote**, klicken Sie auf **New Remote** und wählen Sie Enterprise File Fabric aus der Anbieterliste. Geben Sie Ihre Endpunkt-URL und Ihr API-Token ein — dieselben Zugangsdaten, die Ihre Organisation für den API-Zugriff verwendet — und speichern Sie. Der Remote erscheint sofort im Explorer-Panel, wo Sie Ordner durchsuchen, Dateianzahl und -größen einsehen und Pfade direkt aus der Breadcrumb-Leiste kopieren können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

Im Gegensatz zu reinen Mount-Tools synchronisiert und vergleicht RcloneView Ordner bereits in der KOSTENLOSEN Lizenz, sodass Sie über einfaches Laufwerksmapping hinausgehen und Ihre Enterprise File Fabric-Inhalte aktiv über alle Ihre Cloud-Umgebungen hinweg verwalten können.

## Enterprise File Fabric mit anderen Cloud-Zielen synchronisieren

Ein häufiges Enterprise File Fabric-Szenario ist die Replikation verwalteter Inhalte an ein zweites Cloud-Ziel zur Notfallwiederherstellung oder Langzeitarchivierung. Legen Sie im Synchronisationsassistenten von RcloneView Enterprise File Fabric als Quelle fest und wählen Sie ein beliebiges Ziel — Amazon S3, Backblaze B2, Google Drive oder einen lokalen SFTP-Server. Der 4-Schritte-Assistent führt Sie durch Übertragungsparallelität, Prüfsummenverifizierung und Dateialtersfilter, sodass Sie nur das übertragen, was Sie tatsächlich benötigen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

Führen Sie vor der eigentlichen Übertragung immer einen **Dry Run** aus. RcloneView listet die genauen Dateien auf, die kopiert oder übersprungen würden, sodass Sie Filterregeln verfeinern können, bevor auch nur ein einziges Byte bewegt wird. Für 1:N-Replikation — das gleichzeitige Spiegeln desselben Enterprise File Fabric-Ordners auf mehrere Ziele — fügen Sie in Schritt 1 einfach weitere Zielpfade hinzu. Dies ist in der KOSTENLOSEN Lizenz ohne Begrenzung der Zielanzahl verfügbar.

## Automatisierte Backups planen

Organisationen, die Enterprise File Fabric nutzen, benötigen häufig nächtliche oder wöchentliche Backup-Fenster, die ohne menschliches Zutun ablaufen. Die **PLUS-Lizenz** schaltet Crontab-artige Planung direkt innerhalb von RcloneView frei. Konfigurieren Sie Minuten-, Stunden-, Wochentags- und Monatsfelder, um Ihre Enterprise File Fabric-Synchronisationsjobs in beliebigem Rhythmus auszulösen. Das integrierte Werkzeug **Simulate schedule** zeigt eine Vorschau der nächsten Ausführungszeitpunkte, sodass Sie das Timing vor der endgültigen Festlegung überprüfen können.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

Benachrichtigungen bei Job-Abschluss halten Betriebsteams auf dem Laufenden, selbst wenn die App minimiert im System-Tray läuft.

## Übertragungsverlauf und Audit-Trails überwachen

Jeder Enterprise File Fabric-Synchronisationsjob wird in der **Job History**-Ansicht von RcloneView mit Startzeit, Dauer, Übertragungsgeschwindigkeit, Dateianzahl und Endstatus protokolliert. Filtern Sie den Verlauf nach Datumsbereich oder Ergebnis, um SLA-Konformität zu überprüfen und Datenbewegungen zu auditieren — praktisch für Organisationen mit Aufbewahrungs- oder Governance-Anforderungen an ihre verwaltete Dateispeicherplattform.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

Der rclone-Terminal-Tab innerhalb von RcloneView ermöglicht es fortgeschrittenen Nutzern zudem, benutzerdefinierte `rclone`-Befehle gegen ihren Enterprise File Fabric-Remote auszuführen, ohne die GUI zu verlassen — nützlich für Ad-hoc-Abfragen oder einmalige Vorgänge.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**, wählen Sie dann Enterprise File Fabric.
3. Geben Sie Ihre Enterprise File Fabric-Endpunkt-URL und Ihr API-Token ein und speichern Sie den Remote.
4. Erstellen Sie einen Synchronisationsjob, legen Sie Ihr bevorzugtes Backup-Ziel fest und führen Sie zuerst einen **Dry Run** aus.
5. (PLUS) Aktivieren Sie die geplante Ausführung, um laufende Backups mit E-Mail- oder Slack-Benachrichtigungen zu automatisieren.

Die zentrale Verwaltung von Enterprise File Fabric in RcloneView beseitigt Tool-Wildwuchs und gibt Ihrem Team eine einzige, prüfbare Aufzeichnung jeder Cloud-Datenbewegung.

---

**Verwandte Anleitungen:**

- [SharePoint-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Azure Files mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Cloud-Speicher für DevOps- und Software-Teams mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
