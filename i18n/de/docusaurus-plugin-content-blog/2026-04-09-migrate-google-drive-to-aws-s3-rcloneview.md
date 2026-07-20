---
slug: migrate-google-drive-to-aws-s3-rcloneview
title: "Google Drive mit RcloneView zu AWS S3 migrieren"
authors:
  - tayson
description: "Migrieren Sie mit RcloneView von Google Drive zu AWS S3. Richten Sie beide Remotes ein, planen Sie die Übertragung, verschieben Sie Daten und überprüfen Sie die Migration Schritt für Schritt."
keywords:
  - rcloneview
  - google drive to aws s3
  - migrate google drive to s3
  - google drive s3 migration
  - google drive to amazon s3
  - cloud storage migration
  - google drive backup to s3
  - google workspace to aws
  - rclone google drive s3
  - cloud to cloud migration gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit RcloneView zu AWS S3 migrieren

> Der Wechsel von Google Drive zu AWS S3 bietet Ihnen Kontrolle auf Objektebene, Lifecycle-Richtlinien und Infrastruktur-taugliche Ausfallsicherheit — **RcloneView** übernimmt die Übertragung über eine visuelle Oberfläche.

Google Drive glänzt bei Zusammenarbeit und Dokumentbearbeitung, aber Organisationen, die feingranulare Zugriffskontrolle, programmatische Integration oder Langzeitarchivierung benötigen, wachsen oft darüber hinaus. AWS S3 bietet 11 Neunen an Ausfallsicherheit, Lifecycle-Übergänge zu Glacier für Kaltspeicher und IAM-basierte Zugriffsrichtlinien. Die Migration von Google Drive zu S3 kann einschüchternd wirken — unterschiedliche Authentifizierungsmodelle, unterschiedliche Datei-Semantik und möglicherweise Terabytes an Daten. RcloneView vereinfacht den Prozess mit einer visuellen GUI, die die Komplexität im Hintergrund abwickelt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Google Drive zu AWS S3 migrieren

Google Drive speichert Dateien als Objekte mit Google-spezifischen Metadaten — MIME-Typen, Freigabeberechtigungen und native Dokumentformate (Docs, Sheets, Slides). AWS S3 speichert Objekte als Rohbytes mit benutzerdefinierten Metadaten und bietet dadurch mehr Flexibilität für den programmatischen Zugriff. Häufige Gründe für diese Migration sind:

- **Kostenoptimierung**: S3 Standard kostet etwa 0,023 $/GB/Monat, und S3 Glacier Deep Archive sinkt auf 0,00099 $/GB/Monat. Für große Datensätze, auf die selten zugegriffen wird, ist S3 deutlich günstiger als Google-Workspace-Speicherpläne.
- **Infrastruktur-Integration**: Anwendungen, die auf AWS laufen, können direkt mit IAM-Rollen auf S3 zugreifen, wodurch OAuth-Token und API-Kontingente überflüssig werden.
- **Compliance**: S3 unterstützt Object Lock für WORM-Konformität, Bucket-Richtlinien für IP-basierte Beschränkungen und CloudTrail für Audit-Protokollierung.
- **Lifecycle-Management**: Dateien können automatisch je nach Alter von Standard über Infrequent Access zu Glacier übergehen, was Kosten ohne manuellen Eingriff reduziert.

## Beide Remotes einrichten

### Google Drive Remote

Öffnen Sie den Remote-Manager von RcloneView und fügen Sie ein Google-Drive-Remote hinzu. Autorisieren Sie über OAuth und wählen Sie den vollen Zugriffsumfang. Wenn Sie Shared Drives migrieren müssen, wählen Sie während der Einrichtung das Ziel-Shared-Drive aus. Bei umfangreichen Migrationen sollten Sie erwägen, eine eigene Google-Cloud-Projekt-Client-ID zu registrieren, um die API-Kontingentgrenzen über die standardmäßigen 10.000 Anfragen pro 100 Sekunden hinaus zu erhöhen.

### AWS S3 Remote

Fügen Sie im Remote-Manager ein S3-Remote hinzu. Geben Sie Ihre AWS Access Key ID und Ihren Secret Access Key ein, wählen Sie die Zielregion aus und geben Sie den Bucket-Namen an. Falls der Bucket nicht existiert, können Sie ihn über RcloneView oder die AWS-Konsole erstellen. Wählen Sie für die Speicherklasse Standard für häufig genutzte Daten oder Standard-IA für Archivmigrationen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Die Migration planen

Bevor Sie Daten übertragen, sollten Sie den Umfang bewerten:

1. **Größenprüfung**: Nutzen Sie die Speicheranalyse von RcloneView, um die Gesamtgröße Ihres Google Drive zu ermitteln. So lassen sich S3-Kosten und Übertragungszeit abschätzen.
2. **Umgang mit Google Docs**: Native Google-Dokumente (Docs, Sheets, Slides) haben auf Drive keine Dateigröße. Während der Migration exportiert RcloneView sie in Standardformate (docx, xlsx, pptx). Entscheiden Sie, ob Sie diese Exporte benötigen oder überspringen können.
3. **Ordnerstruktur**: Google Drive erlaubt Zeichen in Dateinamen, die S3 anders behandelt. RcloneView kodiert Sonderzeichen automatisch, aber prüfen Sie Ihre Ordnerstruktur auf extrem tiefe Verschachtelung oder sehr lange Pfadnamen.
4. **Bandbreite**: Eine Migration von 1 TB bei 100 Mbit/s dauert etwa 22 Stunden. Planen Sie Migrationen außerhalb der Stoßzeiten oder setzen Sie Bandbreitenlimits, um andere Vorgänge nicht zu stören.

## Die Migration durchführen

Öffnen Sie Google Drive im linken Bereich und S3 im rechten Bereich. Navigieren Sie zum Quellordner auf Drive und zum Ziel-Präfix auf S3. Sie können das gesamte Drive kopieren oder bestimmte Ordner auswählen.

RcloneView verwendet MD5-Prüfsummen von Google Drive und vergleicht sie bei Dateien unter 5 GB mit S3-ETags. Bei größeren Dateien, die als Multipart-Upload hochgeladen wurden, sind S3-ETags keine Standard-MD5-Werte — RcloneView greift in diesen Fällen auf einen Vergleich von Größe und Änderungszeitpunkt zurück.

Verwenden Sie für die erste Migration einen Kopierjob statt einer Synchronisation, um jegliches Risiko zu vermeiden, dass Dateien am Ziel gelöscht werden. Sobald die erste Übertragung abgeschlossen ist und Sie die Daten überprüft haben, können Sie für die laufende Replikation auf Synchronisation umstellen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Google Drive to AWS S3 in RcloneView two-pane explorer" class="img-large img-center" />

## Die Migration überprüfen

Nachdem die Übertragung abgeschlossen ist, nutzen Sie die Vergleichsfunktion von RcloneView, um zu überprüfen, dass jede Datei angekommen ist. Wählen Sie die Google-Drive-Quelle und das S3-Ziel aus und führen Sie einen Vergleich durch. Übereinstimmende Dateien werden als identisch angezeigt; abweichende oder fehlende Dateien werden hervorgehoben.

Führen Sie bei kritischen Migrationen einen Prüfvorgang durch, der auf beiden Seiten Prüfsummen berechnet und etwaige Abweichungen meldet. Das kostet zwar zusätzliche Zeit, liefert aber eine kryptografische Verifikation der Datenintegrität.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to S3 migration in RcloneView" class="img-large img-center" />

## Nach der Migration: laufende Synchronisation oder Umstellung

Wenn Sie Google Drive und S3 während einer Übergangsphase parallel betreiben, planen Sie in RcloneView einen täglichen Synchronisationsjob, um S3 mit den Änderungen auf Drive aktuell zu halten. Sobald Sie zur Umstellung bereit sind, deaktivieren Sie den Synchronisationsjob und stellen Sie den Google-Drive-Speicher außer Betrieb.

Für Organisationen, die von Google Workspace zu einem AWS-nativen Stack wechseln, ist diese Migration oft nur ein Teil eines größeren Plattformübergangs. RcloneView kann die Datenbewegung übernehmen, während Ihr Team die Anwendungs- und Workflow-Änderungen verwaltet.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing Google Drive to S3 sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie im Remote-Manager Google-Drive- und AWS-S3-Remotes hinzu.
3. Führen Sie eine Speicherprüfung durch, um Migrationsumfang und -kosten abzuschätzen.
4. Führen Sie einen Kopierjob von Drive zu S3 aus und überprüfen Sie ihn mit der Vergleichsfunktion.
5. Planen Sie optional eine laufende Synchronisation, bis Sie zur Umstellung bereit sind.

Google Drive übernimmt die Zusammenarbeit, aber AWS S3 liefert die Ausfallsicherheit, das Lifecycle-Management und den programmatischen Zugriff, den Produktionsworkloads erfordern. RcloneView verbindet beide mit einem unkomplizierten Migrationspfad.

---

**Weiterführende Anleitungen:**

- [Google Drive hinzufügen](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
