---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "Azure Blob Storage mit RcloneView zu Google Drive migrieren"
authors:
  - tayson
description: "Azure Blob Storage mit RcloneView zu Google Drive migrieren. Schritt-für-Schritt-Anleitung für Einrichtung, große Container, Verifizierung und inkrementelle Synchronisation."
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - RcloneView
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Blob Storage mit RcloneView zu Google Drive migrieren

> Azure Blob Storage ist für Entwickler konzipiert, aber wenn Ihr Team Kollaborationsfunktionen benötigt, ist Google Drive das Ziel — **RcloneView** schlägt die Brücke zwischen Objektspeicher und Consumer-Cloud.

Azure Blob Storage eignet sich hervorragend für Anwendungen — Hot-, Cool- und Archiv-Tiers geben Entwicklern eine feingranulare Kostenkontrolle für strukturierte Workloads. Wenn sich die geschäftlichen Anforderungen jedoch in Richtung Dokumentenzusammenarbeit, gemeinsame Bearbeitung und Google-Workspace-Integration verschieben, wird das Verschieben von Daten aus Azure-Containern nach Google Drive notwendig. RcloneView verbindet sich mit beiden Plattformen und bietet einen visuellen Migrations-Workflow, der große Container verarbeitet, Ordnerstrukturen erhält und jede übertragene Datei verifiziert.

Diese Anleitung behandelt den gesamten Migrationsprozess — von der Konfiguration beider Remotes bis zur Einrichtung der inkrementellen Synchronisation für die Übergangsphase.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Azure Blob zu Google Drive migrieren

Die Gründe für diese Migration lassen sich typischerweise in wenige Kategorien einteilen:

- **Kollaborationsanforderungen**: Azure Blob Storage bietet keine integrierte Dokumentenbearbeitung oder Freigabe. Google Drive bietet Echtzeit-Zusammenarbeit über Docs, Sheets und Slides sowie granulare Freigabeberechtigungen für Teams.
- **Google-Workspace-Integration**: Organisationen, die zu Google Workspace wechseln, profitieren davon, ihre Dateien in Google Drive zu haben, wo sie mit Gmail, Kalender, Meet und anderen Workspace-Apps integriert sind.
- **Kostenvereinfachung**: Die Preisgestaltung von Azure Blob umfasst Speicher-Tiers, Egress-Gebühren, Lese-/Schreibvorgänge und Optionen zur Datenredundanz. Google Workspace bündelt Speicher in eine Preisgestaltung pro Benutzer, was die Budgetierung vereinfachen kann.
- **Zugänglichkeit für Endnutzer**: Nicht-technische Benutzer finden Google Drive weitaus zugänglicher als den Azure Storage Explorer oder das Azure-Portal.

## Azure Blob Storage in RcloneView einrichten

Öffnen Sie den Remote Manager und fügen Sie einen **Microsoft Azure Blob Storage**-Remote hinzu. Sie benötigen:

- **Kontoname**: Ihr Azure-Storage-Kontoname
- **Kontoschlüssel** oder **SAS-URL**: Der primäre Zugriffsschlüssel aus dem Azure-Portal oder eine Shared Access Signature mit Lese- und Auflistungsberechtigungen

Nach der Konfiguration listet RcloneView alle Container im Storage-Konto auf. Jeder Container erscheint als Ordner der obersten Ebene im Explorer. Navigieren Sie in Container hinein, um Blobs zu durchsuchen, die nach ihrer präfixbasierten virtuellen Verzeichnisstruktur organisiert sind.

Azure Blob Storage unterstützt drei Zugriffsebenen — Hot, Cool und Archive. RcloneView kann direkt aus Hot- und Cool-Tiers lesen. Blobs im Archiv-Tier müssen vor der Übertragung zu Hot oder Cool rehydriert werden. Wenn Ihre Migration archivierte Blobs umfasst, starten Sie die Rehydrierung zunächst über das Azure-Portal und fahren Sie dann mit RcloneView fort, sobald die Blobs zugänglich sind.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Google Drive in RcloneView einrichten

Fügen Sie einen Google-Drive-Remote über den OAuth-2.0-Ablauf hinzu. Klicken Sie im Remote Manager auf Autorisieren, melden Sie sich bei Ihrem Google-Konto an und gewähren Sie den Zugriff. Für Google-Workspace-Konten können Sie sich mit „Meine Ablage" oder einer bestimmten geteilten Ablage verbinden.

Wenn das Ziel eine geteilte Ablage ist, wählen Sie diese während der Konfiguration aus. Geteilte Ablagen haben andere Besitzregeln — Dateien gehören der Organisation und nicht einzelnen Benutzern — was sie ideal für Team-Migrationen macht.

Google Drive hat ein Speicherkontingent pro Benutzer (15 GB kostenlos oder gepoolter Speicher bei Workspace-Plänen). Überprüfen Sie vor Beginn einer großen Migration, ob Ihr Ziel über ausreichend Kontingent verfügt. RcloneView meldet Fehler, wenn das Kontingent während der Übertragung überschritten wird.

## Umgang mit großen Containern

Azure-Container können Millionen von Blobs mit einem Gesamtvolumen von Terabytes oder Petabytes an Daten enthalten. Alles auf einmal zu migrieren ist möglich, erfordert jedoch Planung:

- **Zuerst erfassen**: Verwenden Sie den Explorer von RcloneView, um den Container zu durchsuchen und die Ordnerstruktur sowie die Gesamtgröße zu verstehen. Dies hilft Ihnen, die Migrationsdauer und den erforderlichen Google-Drive-Speicherplatz abzuschätzen.
- **Nach Präfix migrieren**: Wenn der Container eine logische Ordnerstruktur verwendet (z. B. `/projects/2024/`, `/projects/2025/`), migrieren Sie jeweils ein Präfix. Dies erleichtert die Verifizierung und ermöglicht es Ihnen, aktive Daten zu priorisieren.
- **Parallele Übertragungen**: Erhöhen Sie die Anzahl gleichzeitiger Übertragungen in den Einstellungen von RcloneView. Azure Blob Storage verkraftet hohe Parallelität gut, und Google Drive unterstützt parallele Uploads mit entsprechender Ratenbegrenzungsbehandlung.

Google Drive erzwingt API-Ratenbegrenzungen — 10 Uploads pro Sekunde für die meisten Konten. RcloneView drosselt automatisch und wiederholt bei 403-Fehlern (Rate Limit Exceeded) oder 429-Antworten, aber große Migrationen dauern aufgrund dieser Einschränkungen naturgemäß länger.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## Die Migration durchführen

Öffnen Sie den zweigeteilten Explorer mit Azure Blob auf der linken und Google Drive auf der rechten Seite. Wählen Sie den Quellcontainer (oder ein bestimmtes Präfix) und den Zielordner auf Google Drive aus.

Erstellen Sie einen Kopier- oder Synchronisationsjob. RcloneView überträgt jeden Blob als Datei und erhält dabei die präfixbasierte Verzeichnisstruktur als echte Ordner auf Google Drive. Dateinamen, Größen und Änderungszeitpunkte bleiben erhalten. Azure-Metadaten (benutzerdefinierte Blob-Eigenschaften) werden nicht übertragen, da Google Drive keine beliebigen Schlüssel-Wert-Metadaten unterstützt.

Während der Übertragung zeigt das Echtzeit-Überwachungsfenster Folgendes an:

- Übertragungsfortschritt und -geschwindigkeit pro Datei
- Abgeschlossene vs. verbleibende Dateien insgesamt
- Geschätzte verbleibende Zeit
- Etwaige Fehler oder Wiederholungsversuche

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## Die Migration verifizieren

Verwenden Sie nach Abschluss der Übertragung die Vergleichsfunktion von RcloneView, um die Migration zu überprüfen. Vergleichen Sie den Azure-Container mit dem Zielordner auf Google Drive. Die Vergleichsansicht hebt Folgendes hervor:

- **Fehlende Dateien**: Blobs, die nicht übertragen wurden (möglicherweise aufgrund von Fehlern oder Einschränkungen des Archiv-Tiers)
- **Größenabweichungen**: Dateien, die unvollständig übertragen wurden
- **Übereinstimmende Dateien**: Erfolgreich migrierte Elemente

Da Azure Blob Storage MD5 zur Inhaltsverifizierung verwendet und Google Drive eine eigene Prüfsumme nutzt, verwendet RcloneView standardmäßig Dateigröße und Änderungszeitpunkt für den Vergleich. Für kritische Migrationen können Sie die Prüfsummenverifizierung in den Job-Einstellungen aktivieren, um eine byteweise Genauigkeit zu erhalten.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## Inkrementelle Synchronisation nach der Migration planen

Migrationen finden selten augenblicklich statt — während die Übertragung läuft, können neue Daten in Azure Blob Storage eintreffen. Richten Sie in RcloneView einen geplanten Synchronisationsjob ein, der während der Übergangsphase täglich (oder häufiger) ausgeführt wird. Diese inkrementelle Synchronisation erkennt neue oder geänderte Blobs und überträgt nur die Differenz zu Google Drive.

Sobald alle Systeme auf Google Drive ausgerichtet sind und die Azure-Container keine neuen Daten mehr erhalten, führen Sie eine abschließende Synchronisation durch, um verbliebene Nachzügler zu erfassen. Deaktivieren Sie anschließend den geplanten Job.

Bei lang andauernden Übergängen bietet der Job-Verlauf von RcloneView ein vollständiges Protokoll jedes Synchronisationslaufs — übertragene Dateien, verschobene Bytes, Fehler und Dauer. Dieser Prüfpfad ist von unschätzbarem Wert, um den Migrationszeitplan zu validieren und an Stakeholder zu berichten.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## Den Übergang managen

Erwägen Sie während der Koexistenzphase, beide Remotes in RcloneView einzubinden (mount), um einen parallelen Zugriff zu ermöglichen. Benutzer können Azure-Container und Google Drive gleichzeitig durchsuchen und überprüfen, ob ihre Dateien am neuen Speicherort verfügbar sind. Die Mount-Funktion ermöglicht es Benutzern, auf Google Drive als lokalen Laufwerksbuchstaben zuzugreifen, was den Übergang für Teams erleichtert, die an zugeordnete Laufwerke gewöhnt sind.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Azure Blob Storage (mit Kontoschlüssel oder SAS) und Google Drive (über OAuth) als Remotes hinzu.
3. Führen Sie die Migration aus dem zweigeteilten Explorer heraus durch, migrieren Sie zur besseren Handhabbarkeit nach Container oder Präfix.
4. Verifizieren Sie mit der Vergleichsfunktion und planen Sie anschließend die inkrementelle Synchronisation, bis der Übergang abgeschlossen ist.

Azure Blob Storage bedient Anwendungen gut, aber wenn Ihr Team Google-Workspace-Kollaboration benötigt, verschiebt RcloneView Ihre Daten sauber und nachvollziehbar.

---

**Weiterführende Anleitungen:**

- [Google Drive hinzufügen](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Remote-Speicher sofort synchronisieren](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
